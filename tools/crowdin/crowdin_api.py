""" Minimal Crowdin API v2 client (standard library only)

Credentials come from the environment:
  CROWDIN_PERSONAL_TOKEN  personal access token of the account to act as
  CROWDIN_PROJECT_ID      numeric project id (https://crowdin.com/project/<name>/tools/api)
"""

import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

API_BASE = 'https://api.crowdin.com/api/v2'
PAGE_LIMIT = 500  # maximum allowed by the API
MAX_RETRIES = 6


class CrowdinError(Exception):
    pass


class Crowdin:
    def __init__(self, token=None, project_id=None, api_base=None):
        self.token = token or os.environ.get('CROWDIN_PERSONAL_TOKEN')
        self.project_id = project_id or os.environ.get('CROWDIN_PROJECT_ID')
        self.api_base = (api_base or os.environ.get('CROWDIN_API_BASE') or API_BASE).rstrip('/')
        if not self.token or not self.project_id:
            sys.exit('Error: set CROWDIN_PERSONAL_TOKEN and CROWDIN_PROJECT_ID')

    def request(self, method, path, params=None, body=None):
        """ Send a request and return the decoded JSON response (None for empty bodies).
            Retries on rate limiting (429) and server errors with exponential backoff.
        """
        url = self.api_base + path
        if params:
            url += '?' + urllib.parse.urlencode({k: v for k, v in params.items() if v is not None})
        data = json.dumps(body).encode('utf-8') if body is not None else None
        headers = {'Authorization': 'Bearer ' + self.token}
        if data is not None:
            headers['Content-Type'] = 'application/json'

        for attempt in range(MAX_RETRIES):
            req = urllib.request.Request(url, data=data, method=method, headers=headers)
            try:
                with urllib.request.urlopen(req, timeout=60) as response:
                    content = response.read()
                    return json.loads(content) if content else None
            except urllib.error.HTTPError as e:
                if (e.code == 429 or e.code >= 500) and attempt < MAX_RETRIES - 1:
                    time.sleep(2 ** attempt)
                    continue
                detail = e.read().decode('utf-8', 'replace')
                raise CrowdinError(f'{method} {path} failed: HTTP {e.code}: {detail}') from None
            except urllib.error.URLError as e:
                if attempt < MAX_RETRIES - 1:
                    time.sleep(2 ** attempt)
                    continue
                raise CrowdinError(f'{method} {path} failed: {e.reason}') from None

    def project_path(self, suffix):
        return f'/projects/{self.project_id}{suffix}'

    def list_all(self, path, params=None):
        """ Iterate over all items of a paginated list endpoint """
        offset = 0
        while True:
            page_params = dict(params or {}, limit=PAGE_LIMIT, offset=offset)
            items = self.request('GET', path, page_params)['data']
            for item in items:
                yield item['data']
            if len(items) < PAGE_LIMIT:
                return
            offset += PAGE_LIMIT

    # Convenience wrappers for the endpoints used by the tools

    def current_user(self):
        return self.request('GET', '/user')['data']

    def files(self):
        return list(self.list_all(self.project_path('/files')))

    def strings(self, file_id):
        return list(self.list_all(self.project_path('/strings'), {'fileId': file_id}))

    def language_translations(self, language_id, file_id, approved_only=False):
        """ The current (top) translation of each translated string in a file """
        params = {'fileId': file_id, 'approvedOnly': 1 if approved_only else None}
        return list(self.list_all(self.project_path(f'/languages/{language_id}/translations'), params))

    def add_translation(self, string_id, language_id, text):
        body = {'stringId': string_id, 'languageId': language_id, 'text': text}
        return self.request('POST', self.project_path('/translations'), body=body)['data']

    def approve(self, translation_id):
        body = {'translationId': translation_id}
        return self.request('POST', self.project_path('/approvals'), body=body)['data']
