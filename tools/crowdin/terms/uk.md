# Ukrainian term sheet (`uk`): mandatory terms for new translations
- arm / armed / arming -> взвести / взведений / взведення
- disarm / disarmed / disarming -> охолостити / охолощений / охолощення
- prearm -> попереднє взведення
- throttle -> тяга (RC Throttle -> Пульт(RC) тяга)
- failsafe -> аварійний режим; failsafe action -> дія аварійного режиму
- setpoint -> задане значення
- loiter -> баражування (Loiter mode -> режим баражування)
- mission -> місія; waypoint -> точка маршруту
- takeoff -> зліт; land / landing -> приземлення; Precision Land -> Точне приземлення
- RTL -> RTL; Return mode -> режим повернення
- Offboard -> Offboard (never "поза бортом")
- airspeed -> повітряна швидкість; groundspeed -> шляхова швидкість
- attitude -> орієнтація; yaw / roll / pitch -> рискання / крен / тангаж
- rate (angular) -> кутова швидкість; rate (per time) -> швидкість
- gain -> коефіцієнт підсилення
- estimator -> оцінювач; fusion -> злиття (даних); innovation gate (EKF2 *_GATE) -> ворота інновацій (other "gate" senses: translate by meaning)
- timeout -> тайм-аут; threshold -> поріг
- gyro -> гіроскоп; accelerometer -> акселерометр; magnetometer -> магнітометр
- declination -> схилення; inclination -> нахил; drift -> дрейф
- process noise -> шум процесу
- landing gear -> шасі; gimbal -> підвіс камери (genitive: підвісу камери); parachute -> парашут
- kill switch -> аварійний вимикач
- RC -> Пульт(RC) in labels, RC in prose; ESC, GPS, IMU, EKF and other acronyms stay in Latin script
- circuit breaker (CBRK_*) -> автоматичний вимикач; slew rate -> швидкість зростання
- thrust -> тяга (where throttle and thrust appear together: thrust -> сила тяги)
- fixed-wing (vehicle type) -> Літак; fixed-wing mode -> літаковий режим
- feedforward -> пряма компенсація; flight-mode names Position / Altitude / Manual / Stabilized stay in Latin script when quoted in prose

Open question for a Ukrainian proofreader: arm/disarm follow the published translations (взведення/охолощення,
a weapon metaphor). Several reviewers found "охолощення" odd; if a different pair is chosen, update this sheet
and re-translate the bot's unapproved translations containing the old terms.
