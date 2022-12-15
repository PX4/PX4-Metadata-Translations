<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de" sourcelanguage="en">
  <context>
    <name>/parameters/ctl_bw/shortDesc</name>
    <message>
      <source>Speed controller bandwidth</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ctl_bw/longDesc</name>
    <message>
      <source>Speed controller bandwidth, in Hz. Higher values result in faster speed and current rise times, but may result in overshoot and higher current consumption. For fixed-wing aircraft, this value should be less than 50 Hz; for multirotors, values up to 100 Hz may provide improvements in responsiveness.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ctl_dir/shortDesc</name>
    <message>
      <source>Reverse direction</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ctl_dir/longDesc</name>
    <message>
      <source>Motor spin direction as detected during initial enumeration. Use 0 or 1 to reverse direction.</source>
      <translation>Motordrehrichtung wie bei der ersten Aufzählung erkannt. Verwenden Sie 0 oder 1, um die Richtung umzukehren.</translation>
    </message>
  </context>
  <context>
    <name>/parameters/ctl_gain/shortDesc</name>
    <message>
      <source>Speed (RPM) controller gain</source>
      <translation>Geschwindigkeit (RPM) Controller Verstärkung</translation>
    </message>
  </context>
  <context>
    <name>/parameters/ctl_gain/longDesc</name>
    <message>
      <source>Speed (RPM) controller gain. Determines controller
            aggressiveness; units are amp-seconds per radian. Systems with
            higher rotational inertia (large props) will need gain increased;
            systems with low rotational inertia (small props) may need gain
            decreased. Higher values result in faster response, but may result
            in oscillation and excessive overshoot. Lower values result in a
            slower, smoother response.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ctl_hz_idle/shortDesc</name>
    <message>
      <source>Idle speed (e Hz)</source>
      <translation>Leerlaufgeschwindigkeit (e Hz)</translation>
    </message>
  </context>
  <context>
    <name>/parameters/ctl_hz_idle/longDesc</name>
    <message>
      <source>Idle speed (e Hz)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ctl_start_rate/shortDesc</name>
    <message>
      <source>Spin-up rate (e Hz/s)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ctl_start_rate/longDesc</name>
    <message>
      <source>Spin-up rate (e Hz/s)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/esc_index/shortDesc</name>
    <message>
      <source>Index of this ESC in throttle command messages.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/esc_index/longDesc</name>
    <message>
      <source>Index of this ESC in throttle command messages.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/id_ext_status/shortDesc</name>
    <message>
      <source>Extended status ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/id_ext_status/longDesc</name>
    <message>
      <source>Extended status ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/int_ext_status/shortDesc</name>
    <message>
      <source>Extended status interval (µs)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/int_ext_status/longDesc</name>
    <message>
      <source>Extended status interval (µs)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/int_status/shortDesc</name>
    <message>
      <source>ESC status interval (µs)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/int_status/longDesc</name>
    <message>
      <source>ESC status interval (µs)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/mot_i_max/shortDesc</name>
    <message>
      <source>Motor current limit in amps</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/mot_i_max/longDesc</name>
    <message>
      <source>Motor current limit in amps. This determines the maximum
            current controller setpoint, as well as the maximum allowable
            current setpoint slew rate. This value should generally be set to
            the continuous current rating listed in the motor’s specification
            sheet, or set equal to the motor’s specified continuous power
            divided by the motor voltage limit.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/mot_kv/shortDesc</name>
    <message>
      <source>Motor Kv in RPM per volt</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/mot_kv/longDesc</name>
    <message>
      <source>Motor Kv in RPM per volt. This can be taken from the motor’s
            specification sheet; accuracy will help control performance but
            some deviation from the specified value is acceptable.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/mot_ls/shortDesc</name>
    <message>
      <source>READ ONLY: Motor inductance in henries.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/mot_ls/longDesc</name>
    <message>
      <source>READ ONLY: Motor inductance in henries. This is measured on start-up.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/mot_num_poles/shortDesc</name>
    <message>
      <source>Number of motor poles.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/mot_num_poles/longDesc</name>
    <message>
      <source>Number of motor poles. Used to convert mechanical speeds to
            electrical speeds. This number should be taken from the motor’s
            specification sheet.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/mot_rs/shortDesc</name>
    <message>
      <source>READ ONLY: Motor resistance in ohms</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/mot_rs/longDesc</name>
    <message>
      <source>READ ONLY: Motor resistance in ohms. This is measured on start-up. When
            tuning a new motor, check that this value is approximately equal
            to the value shown in the motor’s specification sheet.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/mot_v_accel/shortDesc</name>
    <message>
      <source>Acceleration limit (V)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/mot_v_accel/longDesc</name>
    <message>
      <source>Acceleration limit (V)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/mot_v_max/shortDesc</name>
    <message>
      <source>Motor voltage limit in volts</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/mot_v_max/longDesc</name>
    <message>
      <source>Motor voltage limit in volts. The current controller’s
            commanded voltage will never exceed this value. Note that this may
            safely be above the nominal voltage of the motor; to determine the
            actual motor voltage limit, divide the motor’s rated power by the
            motor current limit.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.dyn_model/shortDesc</name>
    <message>
      <source>GNSS dynamic model</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.dyn_model/longDesc</name>
    <message>
      <source>Dynamic model used in the GNSS positioning engine. 0 –
        Automotive, 1 – Sea, 2 – Airborne.
      </source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.dyn_model/values/0/description</name>
    <message>
      <source>Automotive</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.dyn_model/values/1/description</name>
    <message>
      <source>Sea</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.dyn_model/values/2/description</name>
    <message>
      <source>Airborne</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.old_fix_msg/shortDesc</name>
    <message>
      <source>Broadcast old GNSS fix message</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.old_fix_msg/longDesc</name>
    <message>
      <source>Broadcast the old (deprecated) GNSS fix message
        uavcan.equipment.gnss.Fix alongside the new alternative
        uavcan.equipment.gnss.Fix2. It is recommended to
        disable this feature to reduce the CAN bus traffic.
      </source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.old_fix_msg/values/0/description</name>
    <message>
      <source>Fix2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.old_fix_msg/values/1/description</name>
    <message>
      <source>Fix and Fix2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.warn_dimens/shortDesc</name>
    <message>
      <source>device health warning</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.warn_dimens/longDesc</name>
    <message>
      <source>Set the device health to Warning if the dimensionality of
              the GNSS solution is less than this value. 3 for the full (3D)
              solution, 2 for planar (2D) solution, 1 for time-only solution,
              0 disables the feature.
      </source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.warn_dimens/values/0/description</name>
    <message>
      <source>disables the feature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.warn_dimens/values/1/description</name>
    <message>
      <source>time-only solution</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.warn_dimens/values/2/description</name>
    <message>
      <source>planar (2D) solution</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.warn_dimens/values/3/description</name>
    <message>
      <source>full (3D) solution</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.warn_sats/shortDesc</name>
    <message>
      <source/>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/gnss.warn_sats/longDesc</name>
    <message>
      <source>Set the device health to Warning if the number of satellites
        used in the GNSS solution is below this threshold. Zero
        disables the feature
      </source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/uavcan.pubp-pres/shortDesc</name>
    <message>
      <source/>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/uavcan.pubp-pres/longDesc</name>
    <message>
      <source>Set the device health to Warning if the number of satellites
        used in the GNSS solution is below this threshold. Zero
        disables the feature
      </source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_BETA_GATE/shortDesc</name>
    <message>
      <source>Airspeed Selector: Gate size for sideslip angle fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_BETA_GATE/longDesc</name>
    <message>
      <source>Sets the number of standard deviations used by the innovation consistency test.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_BETA_NOISE/shortDesc</name>
    <message>
      <source>Airspeed Selector: Wind estimator sideslip measurement noise</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_BETA_NOISE/longDesc</name>
    <message>
      <source>Sideslip measurement noise of the internal wind estimator(s) of the airspeed selector.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_DO_CHECKS/shortDesc</name>
    <message>
      <source>Enable checks on airspeed sensors</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_DO_CHECKS/longDesc</name>
    <message>
      <source>Controls which checks are run to check airspeed data for validity. Only applied if ASPD_PRIMARY &gt; 0. Note that the data missing check is enabled if any of the options is set.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_DO_CHECKS/bitmask/0/description</name>
    <message>
      <source>Only data missing check (triggers if more than 1s no data)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_DO_CHECKS/bitmask/1/description</name>
    <message>
      <source>Data stuck (triggers if data is exactly constant for 2s)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_DO_CHECKS/bitmask/2/description</name>
    <message>
      <source>Innovation check (see ASPD_FS_INNOV)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_DO_CHECKS/bitmask/3/description</name>
    <message>
      <source>Load factor check (triggers if measurement is below stall speed)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_FALLBACK_GW/shortDesc</name>
    <message>
      <source>Enable fallback to sensor-less airspeed estimation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_FALLBACK_GW/longDesc</name>
    <message>
      <source>If set to true and airspeed checks are enabled, it will use a sensor-less airspeed estimation based on groundspeed minus windspeed if no other airspeed sensor available to fall back to.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_FALLBACK_GW/values/0/description</name>
    <message>
      <source>Disable fallback to sensor-less estimation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_FALLBACK_GW/values/1/description</name>
    <message>
      <source>Enable fallback to sensor-less estimation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_FS_INNOV/shortDesc</name>
    <message>
      <source>Airspeed failure innovation threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_FS_INNOV/longDesc</name>
    <message>
      <source>This specifies the minimum airspeed innovation required to trigger a failsafe. Larger values make the check less sensitive, smaller values make it more sensitive. Large innovations indicate an inconsistency between predicted (groundspeed - windspeeed) and measured airspeed. The time required to detect a fault when the threshold is exceeded depends on the size of the exceedance and is controlled by the ASPD_FS_INTEG parameter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_FS_INTEG/shortDesc</name>
    <message>
      <source>Airspeed failure innovation integral threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_FS_INTEG/longDesc</name>
    <message>
      <source>This sets the time integral of airspeed innovation exceedance above ASPD_FS_INNOV required to trigger a failsafe. Larger values make the check less sensitive, smaller positive values make it more sensitive.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_FS_T_START/shortDesc</name>
    <message>
      <source>Airspeed failsafe start delay</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_FS_T_START/longDesc</name>
    <message>
      <source>Delay before switching back to using airspeed sensor if checks indicate sensor is good. Set to a negative value to disable the re-enabling in flight.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_FS_T_STOP/shortDesc</name>
    <message>
      <source>Airspeed failsafe stop delay</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_FS_T_STOP/longDesc</name>
    <message>
      <source>Delay before stopping use of airspeed sensor if checks indicate sensor is bad.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_PRIMARY/shortDesc</name>
    <message>
      <source>Index or primary airspeed measurement source</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_PRIMARY/values/-1/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_PRIMARY/values/0/description</name>
    <message>
      <source>Groundspeed minus windspeed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_PRIMARY/values/1/description</name>
    <message>
      <source>First airspeed sensor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_PRIMARY/values/2/description</name>
    <message>
      <source>Second airspeed sensor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_PRIMARY/values/3/description</name>
    <message>
      <source>Third airspeed sensor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_SCALE_1/shortDesc</name>
    <message>
      <source>Scale of airspeed sensor 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_SCALE_1/longDesc</name>
    <message>
      <source>This is the scale IAS --&gt; CAS of the first airspeed sensor instance</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_SCALE_2/shortDesc</name>
    <message>
      <source>Scale of airspeed sensor 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_SCALE_2/longDesc</name>
    <message>
      <source>This is the scale IAS --&gt; CAS of the second airspeed sensor instance</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_SCALE_3/shortDesc</name>
    <message>
      <source>Scale of airspeed sensor 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_SCALE_3/longDesc</name>
    <message>
      <source>This is the scale IAS --&gt; CAS of the third airspeed sensor instance</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_SCALE_APPLY/shortDesc</name>
    <message>
      <source>Controls when to apply the new estimated airspeed scale(s)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_SCALE_APPLY/values/0/description</name>
    <message>
      <source>Do not automatically apply the estimated scale</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_SCALE_APPLY/values/1/description</name>
    <message>
      <source>Apply the estimated scale after disarm</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_SCALE_APPLY/values/2/description</name>
    <message>
      <source>Apply the estimated scale in air</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_SC_P_NOISE/shortDesc</name>
    <message>
      <source>Airspeed Selector: Wind estimator true airspeed scale process noise</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_SC_P_NOISE/longDesc</name>
    <message>
      <source>Airspeed scale process noise of the internal wind estimator(s) of the airspeed selector.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_TAS_GATE/shortDesc</name>
    <message>
      <source>Airspeed Selector: Gate size for true airspeed fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_TAS_GATE/longDesc</name>
    <message>
      <source>Sets the number of standard deviations used by the innovation consistency test.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_TAS_NOISE/shortDesc</name>
    <message>
      <source>Airspeed Selector: Wind estimator true airspeed measurement noise</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_TAS_NOISE/longDesc</name>
    <message>
      <source>True airspeed measurement noise of the internal wind estimator(s) of the airspeed selector.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_W_P_NOISE/shortDesc</name>
    <message>
      <source>Airspeed Selector: Wind estimator wind process noise</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ASPD_W_P_NOISE/longDesc</name>
    <message>
      <source>Wind process noise of the internal wind estimator(s) of the airspeed selector.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_X_D/shortDesc</name>
    <message>
      <source>Body X axis angular velocity D gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_X_D/longDesc</name>
    <message>
      <source>Body X axis angular velocity differential gain. Small values help reduce fast oscillations. If value is too big oscillations will appear again.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_X_FF/shortDesc</name>
    <message>
      <source>Body X axis angular velocity feedforward gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_X_FF/longDesc</name>
    <message>
      <source>Improves tracking performance.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_X_I/shortDesc</name>
    <message>
      <source>Body X axis angular velocity I gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_X_I/longDesc</name>
    <message>
      <source>Body X axis angular velocity integral gain. Can be set to compensate static thrust difference or gravity center offset.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_X_I_LIM/shortDesc</name>
    <message>
      <source>Body X axis angular velocity integrator limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_X_I_LIM/longDesc</name>
    <message>
      <source>Body X axis angular velocity integrator limit. Can be set to increase the amount of integrator available to counteract disturbances or reduced to improve settling time after large roll moment trim changes.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_X_K/shortDesc</name>
    <message>
      <source>Body X axis angular velocity controller gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_X_K/longDesc</name>
    <message>
      <source>Global gain of the controller. This gain scales the P, I and D terms of the controller: output = AVC_X_K * (AVC_X_P * error + AVC_X_I * error_integral + AVC_X_D * error_derivative) Set AVC_X_P=1 to implement a PID in the ideal form. Set AVC_X_K=1 to implement a PID in the parallel form.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_X_P/shortDesc</name>
    <message>
      <source>Body X axis angular velocity P gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_X_P/longDesc</name>
    <message>
      <source>Body X axis angular velocity proportional gain, i.e. control output for angular speed error 1 rad/s.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Y_D/shortDesc</name>
    <message>
      <source>Body Y axis angular velocity D gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Y_D/longDesc</name>
    <message>
      <source>Body Y axis angular velocity differential gain. Small values help reduce fast oscillations. If value is too big oscillations will appear again.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Y_FF/shortDesc</name>
    <message>
      <source>Body Y axis angular velocity feedforward</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Y_FF/longDesc</name>
    <message>
      <source>Improves tracking performance.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Y_I/shortDesc</name>
    <message>
      <source>Body Y axis angular velocity I gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Y_I/longDesc</name>
    <message>
      <source>Body Y axis angular velocity integral gain. Can be set to compensate static thrust difference or gravity center offset.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Y_I_LIM/shortDesc</name>
    <message>
      <source>Body Y axis angular velocity integrator limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Y_I_LIM/longDesc</name>
    <message>
      <source>Body Y axis angular velocity integrator limit. Can be set to increase the amount of integrator available to counteract disturbances or reduced to improve settling time after large pitch moment trim changes.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Y_K/shortDesc</name>
    <message>
      <source>Body Y axis angular velocity controller gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Y_K/longDesc</name>
    <message>
      <source>Global gain of the controller. This gain scales the P, I and D terms of the controller: output = AVC_Y_K * (AVC_Y_P * error + AVC_Y_I * error_integral + AVC_Y_D * error_derivative) Set AVC_Y_P=1 to implement a PID in the ideal form. Set AVC_Y_K=1 to implement a PID in the parallel form.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Y_P/shortDesc</name>
    <message>
      <source>Body Y axis angular velocity P gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Y_P/longDesc</name>
    <message>
      <source>Body Y axis angular velocity proportional gain, i.e. control output for angular speed error 1 rad/s.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Z_D/shortDesc</name>
    <message>
      <source>Body Z axis angular velocity D gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Z_D/longDesc</name>
    <message>
      <source>Body Z axis angular velocity differential gain. Small values help reduce fast oscillations. If value is too big oscillations will appear again.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Z_FF/shortDesc</name>
    <message>
      <source>Body Z axis angular velocity feedforward</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Z_FF/longDesc</name>
    <message>
      <source>Improves tracking performance.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Z_I/shortDesc</name>
    <message>
      <source>Body Z axis angular velocity I gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Z_I/longDesc</name>
    <message>
      <source>Body Z axis angular velocity integral gain. Can be set to compensate static thrust difference or gravity center offset.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Z_I_LIM/shortDesc</name>
    <message>
      <source>Body Z axis angular velocity integrator limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Z_I_LIM/longDesc</name>
    <message>
      <source>Body Z axis angular velocity integrator limit. Can be set to increase the amount of integrator available to counteract disturbances or reduced to improve settling time after large yaw moment trim changes.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Z_K/shortDesc</name>
    <message>
      <source>Body Z axis angular velocity controller gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Z_K/longDesc</name>
    <message>
      <source>Global gain of the controller. This gain scales the P, I and D terms of the controller: output = AVC_Z_K * (AVC_Z_P * error + AVC_Z_I * error_integral + AVC_Z_D * error_derivative) Set AVC_Z_P=1 to implement a PID in the ideal form. Set AVC_Z_K=1 to implement a PID in the parallel form.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Z_P/shortDesc</name>
    <message>
      <source>Body Z axis angular velocity P gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/AVC_Z_P/longDesc</name>
    <message>
      <source>Body Z axis angular velocity proportional gain, i.e. control output for angular speed error 1 rad/s.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_ACC_COMP/shortDesc</name>
    <message>
      <source>Acceleration compensation based on GPS velocity</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_ACC_COMP/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_ACC_COMP/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_BIAS_MAX/shortDesc</name>
    <message>
      <source>Gyro bias limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_EXT_HDG_M/shortDesc</name>
    <message>
      <source>External heading usage mode (from Motion capture/Vision)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_EXT_HDG_M/longDesc</name>
    <message>
      <source>Set to 1 to use heading estimate from vision. Set to 2 to use heading from motion capture.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_EXT_HDG_M/values/0/description</name>
    <message>
      <source>None</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_EXT_HDG_M/values/1/description</name>
    <message>
      <source>Vision</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_EXT_HDG_M/values/2/description</name>
    <message>
      <source>Motion Capture</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_MAG_DECL/shortDesc</name>
    <message>
      <source>Magnetic declination, in degrees</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_MAG_DECL/longDesc</name>
    <message>
      <source>This parameter is not used in normal operation, as the declination is looked up based on the GPS coordinates of the vehicle.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_MAG_DECL_A/shortDesc</name>
    <message>
      <source>Automatic GPS based declination compensation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_MAG_DECL_A/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_MAG_DECL_A/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_W_ACC/shortDesc</name>
    <message>
      <source>Complimentary filter accelerometer weight</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_W_EXT_HDG/shortDesc</name>
    <message>
      <source>Complimentary filter external heading weight</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_W_GYRO_BIAS/shortDesc</name>
    <message>
      <source>Complimentary filter gyroscope bias weight</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_W_MAG/shortDesc</name>
    <message>
      <source>Complimentary filter magnetometer weight</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ATT_W_MAG/longDesc</name>
    <message>
      <source>Set to 0 to avoid using the magnetometer.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_APPLY/shortDesc</name>
    <message>
      <source>Controls when to apply the new gains</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_APPLY/longDesc</name>
    <message>
      <source>After the auto-tuning sequence is completed, a new set of gains is available and can be applied immediately or after landing.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_APPLY/values/0/description</name>
    <message>
      <source>Do not apply the new gains (logging only)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_APPLY/values/1/description</name>
    <message>
      <source>Apply the new gains after disarm</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_APPLY/values/2/description</name>
    <message>
      <source>Apply the new gains in air</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_AXES/shortDesc</name>
    <message>
      <source>Tuning axes selection</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_AXES/longDesc</name>
    <message>
      <source>Defines which axes will be tuned during the auto-tuning sequence Set bits in the following positions to enable: 0 : Roll 1 : Pitch 2 : Yaw</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_AXES/bitmask/0/description</name>
    <message>
      <source>roll</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_AXES/bitmask/1/description</name>
    <message>
      <source>pitch</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_AXES/bitmask/2/description</name>
    <message>
      <source>yaw</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_START/shortDesc</name>
    <message>
      <source>Start the autotuning sequence</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_START/longDesc</name>
    <message>
      <source>WARNING: this will inject steps to the rate controller and can be dangerous. Only activate if you know what you are doing, and in a safe environment. Any motion of the remote stick will abord the signal injection and reset this parameter Best is to perform the identification in position or hold mode. Increase the amplitude of the injected signal using FW_AT_SYSID_AMP for more signal/noise ratio</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_START/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_START/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_SYSID_AMP/shortDesc</name>
    <message>
      <source>Amplitude of the injected signal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AT_SYSID_AMP/longDesc</name>
    <message>
      <source>This parameter scales the signal sent to the rate controller during system identification.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AT_APPLY/shortDesc</name>
    <message>
      <source>Controls when to apply the new gains</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AT_APPLY/longDesc</name>
    <message>
      <source>After the auto-tuning sequence is completed, a new set of gains is available and can be applied immediately or after landing. WARNING Applying the gains in air is dangerous as there is no guarantee that those new gains will be able to stabilize the drone properly.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AT_APPLY/values/0/description</name>
    <message>
      <source>Do not apply the new gains (logging only)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AT_APPLY/values/1/description</name>
    <message>
      <source>Apply the new gains after disarm</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AT_APPLY/values/2/description</name>
    <message>
      <source>WARNING Apply the new gains in air</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AT_EN/shortDesc</name>
    <message>
      <source>Multicopter autotune module enable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AT_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AT_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AT_RISE_TIME/shortDesc</name>
    <message>
      <source>Desired angular rate closed-loop rise time</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AT_START/shortDesc</name>
    <message>
      <source>Start the autotuning sequence</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AT_START/longDesc</name>
    <message>
      <source>WARNING: this will inject steps to the rate controller and can be dangerous. Only activate if you know what you are doing, and in a safe environment. Any motion of the remote stick will abord the signal injection and reset this parameter Best is to perform the identification in position or hold mode. Increase the amplitude of the injected signal using MC_AT_SYSID_AMP for more signal/noise ratio</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AT_START/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AT_START/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AT_SYSID_AMP/shortDesc</name>
    <message>
      <source>Amplitude of the injected signal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_ADC_CHANNEL/shortDesc</name>
    <message>
      <source>This parameter is deprecated. Please use BAT1_I_CHANNEL</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_AVG_I_FW/shortDesc</name>
    <message>
      <source>Average current consumption in fixed-wing flight</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_AVG_I_FW/longDesc</name>
    <message>
      <source>A negative value means that the value is unkown and dependent features disabled.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_AVG_I_MC/shortDesc</name>
    <message>
      <source>Average current consumption in multicopter flight</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_AVG_I_MC/longDesc</name>
    <message>
      <source>A negative value means that the value is unkown and dependent features disabled.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_CRIT_THR/shortDesc</name>
    <message>
      <source>Critical threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_CRIT_THR/longDesc</name>
    <message>
      <source>Sets the threshold when the battery will be reported as critically low. This has to be lower than the low threshold. This threshold commonly will trigger RTL.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_EMERGEN_THR/shortDesc</name>
    <message>
      <source>Emergency threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_EMERGEN_THR/longDesc</name>
    <message>
      <source>Sets the threshold when the battery will be reported as dangerously low. This has to be lower than the critical threshold. This threshold commonly will trigger landing.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_LOW_THR/shortDesc</name>
    <message>
      <source>Low threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_LOW_THR/longDesc</name>
    <message>
      <source>Sets the threshold when the battery will be reported as low. This has to be higher than the critical threshold.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_N_CELLS/shortDesc</name>
    <message>
      <source>This parameter is deprecated. Please use BAT1_N_CELLS instead</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_V_CHARGED/shortDesc</name>
    <message>
      <source>This parameter is deprecated. Please use BAT1_V_CHARGED instead</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_V_EMPTY/shortDesc</name>
    <message>
      <source>This parameter is deprecated. Please use BAT1_V_EMPTY instead</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_V_LOAD_DROP/shortDesc</name>
    <message>
      <source>This parameter is deprecated. Please use BAT1_V_LOAD_DROP instead</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_V_OFFS_CURR/shortDesc</name>
    <message>
      <source>Offset in volt as seen by the ADC input of the current sensor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT_V_OFFS_CURR/longDesc</name>
    <message>
      <source>This offset will be subtracted before calculating the battery current based on the voltage.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAM_CAP_DELAY/shortDesc</name>
    <message>
      <source>Camera strobe delay</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAM_CAP_DELAY/longDesc</name>
    <message>
      <source>This parameter sets the delay between image integration start and strobe firing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAM_CAP_EDGE/shortDesc</name>
    <message>
      <source>Camera capture edge</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAM_CAP_EDGE/values/0/description</name>
    <message>
      <source>Falling edge</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAM_CAP_EDGE/values/1/description</name>
    <message>
      <source>Rising edge</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAM_CAP_FBACK/shortDesc</name>
    <message>
      <source>Camera capture feedback</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAM_CAP_FBACK/longDesc</name>
    <message>
      <source>Enables camera capture feedback</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAM_CAP_FBACK/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAM_CAP_FBACK/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAM_CAP_MODE/shortDesc</name>
    <message>
      <source>Camera capture timestamping mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAM_CAP_MODE/longDesc</name>
    <message>
      <source>Change time measurement</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAM_CAP_MODE/values/0/description</name>
    <message>
      <source>Get absolute timestamp</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAM_CAP_MODE/values/1/description</name>
    <message>
      <source>Get timestamp of mid exposure (active high)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAM_CAP_MODE/values/2/description</name>
    <message>
      <source>Get timestamp of mid exposure (active low)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_ACT_TIME/shortDesc</name>
    <message>
      <source>Camera trigger activation time</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_ACT_TIME/longDesc</name>
    <message>
      <source>This parameter sets the time the trigger needs to pulled high or low.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_DISTANCE/shortDesc</name>
    <message>
      <source>Camera trigger distance</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_DISTANCE/longDesc</name>
    <message>
      <source>Sets the distance at which to trigger the camera.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_INTERFACE/shortDesc</name>
    <message>
      <source>Camera trigger Interface</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_INTERFACE/longDesc</name>
    <message>
      <source>Selects the trigger interface</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_INTERFACE/values/1/description</name>
    <message>
      <source>GPIO</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_INTERFACE/values/2/description</name>
    <message>
      <source>Seagull MAP2 (over PWM)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_INTERFACE/values/3/description</name>
    <message>
      <source>MAVLink (forward via MAV_CMD_IMAGE_START_CAPTURE)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_INTERFACE/values/4/description</name>
    <message>
      <source>Generic PWM (IR trigger, servo)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_INTERVAL/shortDesc</name>
    <message>
      <source>Camera trigger interval</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_INTERVAL/longDesc</name>
    <message>
      <source>This parameter sets the time between two consecutive trigger events</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_MIN_INTERVA/shortDesc</name>
    <message>
      <source>Minimum camera trigger interval</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_MIN_INTERVA/longDesc</name>
    <message>
      <source>This parameter sets the minimum time between two consecutive trigger events the specific camera setup is supporting.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_MODE/shortDesc</name>
    <message>
      <source>Camera trigger mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_MODE/values/0/description</name>
    <message>
      <source>Disable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_MODE/values/1/description</name>
    <message>
      <source>Time based, on command</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_MODE/values/2/description</name>
    <message>
      <source>Time based, always on</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_MODE/values/3/description</name>
    <message>
      <source>Distance based, always on</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_MODE/values/4/description</name>
    <message>
      <source>Distance based, on command (Survey mode)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_PINS/shortDesc</name>
    <message>
      <source>Camera trigger pin</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_PINS/longDesc</name>
    <message>
      <source>Selects which FMU pin is used (range: AUX1-AUX8 on Pixhawk controllers with an I/O board, MAIN1-MAIN8 on controllers without an I/O board). The PWM interface takes two pins per camera, while relay triggers on every pin individually. Example: Value 56 would trigger on pins 5 and 6. For GPIO mode Pin 6 will be triggered followed by 5. With a value of 65 pin 5 will be triggered followed by 6. Pins may be non contiguous. I.E. 16 or 61. In GPIO mode the delay pin to pin is &lt; .2 uS.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_PINS_EX/shortDesc</name>
    <message>
      <source>Camera trigger pin extended</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_PINS_EX/longDesc</name>
    <message>
      <source>This Bit mask selects which FMU pin is used (range: AUX9-AUX32) If the value is not 0 it takes precedence over TRIG_PINS. If bits above 8 are set that value is used as the selector for trigger pins. greater then 8. 0x00000300 Would be Pins 9,10. If the value is</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_POLARITY/shortDesc</name>
    <message>
      <source>Camera trigger polarity</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_POLARITY/longDesc</name>
    <message>
      <source>This parameter sets the polarity of the trigger (0 = active low, 1 = active high )</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_POLARITY/values/0/description</name>
    <message>
      <source>Active low</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_POLARITY/values/1/description</name>
    <message>
      <source>Active high</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_PWM_NEUTRAL/shortDesc</name>
    <message>
      <source>PWM neutral output on trigger pin</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIG_PWM_SHOOT/shortDesc</name>
    <message>
      <source>PWM output to trigger shot</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_AIRSPD_CHK/shortDesc</name>
    <message>
      <source>Circuit breaker for airspeed sensor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_AIRSPD_CHK/longDesc</name>
    <message>
      <source>Setting this parameter to 162128 will disable the check for an airspeed sensor. The sensor driver will not be started and it cannot be calibrated. WARNING: ENABLING THIS CIRCUIT BREAKER IS AT OWN RISK</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_BUZZER/shortDesc</name>
    <message>
      <source>Circuit breaker for disabling buzzer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_BUZZER/longDesc</name>
    <message>
      <source>Setting this parameter to 782097 will disable the buzzer audio notification. Setting this parameter to 782090 will disable the startup tune, while keeping all others enabled.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_FLIGHTTERM/shortDesc</name>
    <message>
      <source>Circuit breaker for flight termination</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_FLIGHTTERM/longDesc</name>
    <message>
      <source>Setting this parameter to 121212 will disable the flight termination action if triggered by the FailureDetector logic or if FMU is lost. This circuit breaker does not affect the RC loss, data link loss, geofence, and takeoff failure detection safety logic.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_IO_SAFETY/shortDesc</name>
    <message>
      <source>Circuit breaker for IO safety</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_IO_SAFETY/longDesc</name>
    <message>
      <source>Setting this parameter to 22027 will disable IO safety. WARNING: ENABLING THIS CIRCUIT BREAKER IS AT OWN RISK</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_RATE_CTRL/shortDesc</name>
    <message>
      <source>Circuit breaker for rate controller output</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_RATE_CTRL/longDesc</name>
    <message>
      <source>Setting this parameter to 140253 will disable the rate controller uORB publication. WARNING: ENABLING THIS CIRCUIT BREAKER IS AT OWN RISK</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_SUPPLY_CHK/shortDesc</name>
    <message>
      <source>Circuit breaker for power supply check</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_SUPPLY_CHK/longDesc</name>
    <message>
      <source>Setting this parameter to 894281 will disable the power valid checks in the commander. WARNING: ENABLING THIS CIRCUIT BREAKER IS AT OWN RISK</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_USB_CHK/shortDesc</name>
    <message>
      <source>Circuit breaker for USB link check</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_USB_CHK/longDesc</name>
    <message>
      <source>Setting this parameter to 197848 will disable the USB connected checks in the commander, setting it to 0 keeps them enabled (recommended). We are generally recommending to not fly with the USB link connected and production vehicles should set this parameter to zero to prevent users from flying USB powered. However, for R&amp;D purposes it has proven over the years to work just fine.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_VELPOSERR/shortDesc</name>
    <message>
      <source>Circuit breaker for position error check</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_VELPOSERR/longDesc</name>
    <message>
      <source>Setting this parameter to 201607 will disable the position and velocity accuracy checks in the commander. WARNING: ENABLING THIS CIRCUIT BREAKER IS AT OWN RISK</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_VTOLARMING/shortDesc</name>
    <message>
      <source>Circuit breaker for arming in fixed-wing mode check</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CBRK_VTOLARMING/longDesc</name>
    <message>
      <source>Setting this parameter to 159753 will enable arming in fixed-wing mode for VTOLs. WARNING: ENABLING THIS CIRCUIT BREAKER IS AT OWN RISK</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ACT_FAIL_ACT/shortDesc</name>
    <message>
      <source>Set the actuator failure failsafe mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ACT_FAIL_ACT/longDesc</name>
    <message>
      <source>Note: actuator failure needs to be enabled and configured via FD_ACT_* parameters.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ACT_FAIL_ACT/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ACT_FAIL_ACT/values/1/description</name>
    <message>
      <source>Hold mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ACT_FAIL_ACT/values/2/description</name>
    <message>
      <source>Land mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ACT_FAIL_ACT/values/3/description</name>
    <message>
      <source>Return mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ACT_FAIL_ACT/values/4/description</name>
    <message>
      <source>Terminate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_ARSP_EN/shortDesc</name>
    <message>
      <source>Enable preflight check for maximal allowed airspeed when arming</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_ARSP_EN/longDesc</name>
    <message>
      <source>Deny arming if the current airspeed measurement is greater than half the cruise airspeed (FW_AIRSPD_TRIM). Excessive airspeed measurements on ground are either caused by wind or bad airspeed calibration.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_ARSP_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_ARSP_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_AUTH_ID/shortDesc</name>
    <message>
      <source>Arm authorizer system id</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_AUTH_ID/longDesc</name>
    <message>
      <source>Used if arm authorization is requested by COM_ARM_AUTH_REQ.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_AUTH_MET/shortDesc</name>
    <message>
      <source>Arm authorization method</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_AUTH_MET/longDesc</name>
    <message>
      <source>Methods: - one arm: request authorization and arm when authorization is received - two step arm: 1st arm command request an authorization and 2nd arm command arm the drone if authorized Used if arm authorization is requested by COM_ARM_AUTH_REQ.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_AUTH_MET/values/0/description</name>
    <message>
      <source>one arm</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_AUTH_MET/values/1/description</name>
    <message>
      <source>two step arm</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_AUTH_REQ/shortDesc</name>
    <message>
      <source>Require arm authorization to arm</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_AUTH_REQ/longDesc</name>
    <message>
      <source>By default off. The default allows to arm the vehicle without a arm authorization.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_AUTH_REQ/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_AUTH_REQ/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_AUTH_TO/shortDesc</name>
    <message>
      <source>Arm authorization timeout</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_AUTH_TO/longDesc</name>
    <message>
      <source>Timeout for authorizer answer. Used if arm authorization is requested by COM_ARM_AUTH_REQ.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_CHK_ESCS/shortDesc</name>
    <message>
      <source>Enable checks on ESCs that report telemetry</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_CHK_ESCS/longDesc</name>
    <message>
      <source>If this parameter is set, the system will check ESC's online status and failures. This param is specific for ESCs reporting status. It shall be used only if ESCs support telemetry.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_CHK_ESCS/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_CHK_ESCS/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_EKF_HGT/shortDesc</name>
    <message>
      <source>Maximum EKF height innovation test ratio that will allow arming</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_EKF_POS/shortDesc</name>
    <message>
      <source>Maximum EKF position innovation test ratio that will allow arming</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_EKF_VEL/shortDesc</name>
    <message>
      <source>Maximum EKF velocity innovation test ratio that will allow arming</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_EKF_YAW/shortDesc</name>
    <message>
      <source>Maximum EKF yaw innovation test ratio that will allow arming</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_IMU_ACC/shortDesc</name>
    <message>
      <source>Maximum accelerometer inconsistency between IMU units that will allow arming</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_IMU_GYR/shortDesc</name>
    <message>
      <source>Maximum rate gyro inconsistency between IMU units that will allow arming</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_MAG_ANG/shortDesc</name>
    <message>
      <source>Maximum magnetic field inconsistency between units that will allow arming</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_MAG_ANG/longDesc</name>
    <message>
      <source>Set -1 to disable the check.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_MAG_STR/shortDesc</name>
    <message>
      <source>Enable mag strength preflight check</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_MAG_STR/longDesc</name>
    <message>
      <source>Check if the estimator detects a strong magnetic disturbance (check enabled by EKF2_MAG_CHECK)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_MAG_STR/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_MAG_STR/values/1/description</name>
    <message>
      <source>Deny arming</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_MAG_STR/values/2/description</name>
    <message>
      <source>Warning only</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_MIS_REQ/shortDesc</name>
    <message>
      <source>Require valid mission to arm</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_MIS_REQ/longDesc</name>
    <message>
      <source>The default allows to arm the vehicle without a valid mission.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_MIS_REQ/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_MIS_REQ/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_SDCARD/shortDesc</name>
    <message>
      <source>Enable FMU SD card detection check</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_SDCARD/longDesc</name>
    <message>
      <source>This check detects if the FMU SD card is missing. Depending on the value of the parameter, the check can be disabled, warn only or deny arming.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_SDCARD/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_SDCARD/values/1/description</name>
    <message>
      <source>Warning only</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_SDCARD/values/2/description</name>
    <message>
      <source>Enforce SD card presence</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_SWISBTN/shortDesc</name>
    <message>
      <source>Arm switch is a momentary button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_SWISBTN/longDesc</name>
    <message>
      <source>0: Arming/disarming triggers on switch transition. 1: Arming/disarming triggers when holding the momentary button down for COM_RC_ARM_HYST like the stick gesture.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_SWISBTN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_SWISBTN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_WO_GPS/shortDesc</name>
    <message>
      <source>Allow arming without GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_WO_GPS/longDesc</name>
    <message>
      <source>The default allows the vehicle to arm without GPS signal.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_WO_GPS/values/0/description</name>
    <message>
      <source>Require GPS lock to arm</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_WO_GPS/values/1/description</name>
    <message>
      <source>Allow arming without GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_BAT_ACT_T/shortDesc</name>
    <message>
      <source>Delay between battery state change and failsafe reaction</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_BAT_ACT_T/longDesc</name>
    <message>
      <source>Battery state requires action -&gt; wait COM_BAT_ACT_T seconds in Hold mode for the user to realize and take a custom action -&gt; React with failsafe action COM_LOW_BAT_ACT A zero value disables the delay.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_CPU_MAX/shortDesc</name>
    <message>
      <source>Maximum allowed CPU load to still arm</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_CPU_MAX/longDesc</name>
    <message>
      <source>A negative value disables the check.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_DISARM_LAND/shortDesc</name>
    <message>
      <source>Time-out for auto disarm after landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_DISARM_LAND/longDesc</name>
    <message>
      <source>A non-zero, positive value specifies the time-out period in seconds after which the vehicle will be automatically disarmed in case a landing situation has been detected during this period. A zero or negative value means that automatic disarming triggered by landing detection is disabled.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_DISARM_MAN/shortDesc</name>
    <message>
      <source>Allow disarming via switch/stick/button on multicopters in manual thrust modes</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_DISARM_MAN/longDesc</name>
    <message>
      <source>0: Disallow disarming when not landed 1: Allow disarming in multicopter flight in modes where the thrust is directly controlled by thr throttle stick e.g. Stabilized, Acro</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_DISARM_MAN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_DISARM_MAN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_DISARM_PRFLT/shortDesc</name>
    <message>
      <source>Time-out for auto disarm if not taking off</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_DISARM_PRFLT/longDesc</name>
    <message>
      <source>A non-zero, positive value specifies the time in seconds, within which the vehicle is expected to take off after arming. In case the vehicle didn't takeoff within the timeout it disarms again. A negative value disables autmoatic disarming triggered by a pre-takeoff timeout.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_DL_LOSS_T/shortDesc</name>
    <message>
      <source>Datalink loss time threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_DL_LOSS_T/longDesc</name>
    <message>
      <source>After this amount of seconds without datalink the data link lost mode triggers</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_EXT_COMP_EN/shortDesc</name>
    <message>
      <source>Enable external components update</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_EXT_COMP_EN/longDesc</name>
    <message>
      <source>If enabled, the check will verify that the external components (e.g. ESCs, Smartbattery,...) have been successfully updated. The check looks for the "ext_component_updated" file on the SD card and parses it. The file can contain a "SUCCESS &lt;return_code&gt;" or "FAIL &lt;error_code&gt;", depending on the parsed result the system will allow/deny arming.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_EXT_COMP_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_EXT_COMP_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_EXT_COMP_EN/values/2/description</name>
    <message>
      <source>Trigger fake success (update_checker)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_EXT_COMP_EN/values/3/description</name>
    <message>
      <source>Trigger fake fail (update_checker)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLIGHT_UUID/shortDesc</name>
    <message>
      <source>Next flight UUID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLIGHT_UUID/longDesc</name>
    <message>
      <source>This number is incremented automatically after every flight on disarming in order to remember the next flight UUID. The first flight is 0.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE1/shortDesc</name>
    <message>
      <source>First flightmode slot (1000-1160)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE1/longDesc</name>
    <message>
      <source>If the main switch channel is in this range the selected flight mode will be applied.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE1/values/-1/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE1/values/0/description</name>
    <message>
      <source>Manual</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE1/values/1/description</name>
    <message>
      <source>Altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE1/values/2/description</name>
    <message>
      <source>Position</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE1/values/3/description</name>
    <message>
      <source>Mission</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE1/values/4/description</name>
    <message>
      <source>Hold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE1/values/5/description</name>
    <message>
      <source>Return</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE1/values/6/description</name>
    <message>
      <source>Acro</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE1/values/7/description</name>
    <message>
      <source>Offboard</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE1/values/8/description</name>
    <message>
      <source>Stabilized</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE1/values/10/description</name>
    <message>
      <source>Takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE1/values/11/description</name>
    <message>
      <source>Land</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE1/values/12/description</name>
    <message>
      <source>Follow Me</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE2/shortDesc</name>
    <message>
      <source>Second flightmode slot (1160-1320)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE2/longDesc</name>
    <message>
      <source>If the main switch channel is in this range the selected flight mode will be applied.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE2/values/-1/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE2/values/0/description</name>
    <message>
      <source>Manual</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE2/values/1/description</name>
    <message>
      <source>Altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE2/values/2/description</name>
    <message>
      <source>Position</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE2/values/3/description</name>
    <message>
      <source>Mission</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE2/values/4/description</name>
    <message>
      <source>Hold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE2/values/5/description</name>
    <message>
      <source>Return</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE2/values/6/description</name>
    <message>
      <source>Acro</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE2/values/7/description</name>
    <message>
      <source>Offboard</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE2/values/8/description</name>
    <message>
      <source>Stabilized</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE2/values/10/description</name>
    <message>
      <source>Takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE2/values/11/description</name>
    <message>
      <source>Land</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE2/values/12/description</name>
    <message>
      <source>Follow Me</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE3/shortDesc</name>
    <message>
      <source>Third flightmode slot (1320-1480)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE3/longDesc</name>
    <message>
      <source>If the main switch channel is in this range the selected flight mode will be applied.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE3/values/-1/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE3/values/0/description</name>
    <message>
      <source>Manual</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE3/values/1/description</name>
    <message>
      <source>Altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE3/values/2/description</name>
    <message>
      <source>Position</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE3/values/3/description</name>
    <message>
      <source>Mission</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE3/values/4/description</name>
    <message>
      <source>Hold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE3/values/5/description</name>
    <message>
      <source>Return</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE3/values/6/description</name>
    <message>
      <source>Acro</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE3/values/7/description</name>
    <message>
      <source>Offboard</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE3/values/8/description</name>
    <message>
      <source>Stabilized</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE3/values/10/description</name>
    <message>
      <source>Takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE3/values/11/description</name>
    <message>
      <source>Land</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE3/values/12/description</name>
    <message>
      <source>Follow Me</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE4/shortDesc</name>
    <message>
      <source>Fourth flightmode slot (1480-1640)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE4/longDesc</name>
    <message>
      <source>If the main switch channel is in this range the selected flight mode will be applied.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE4/values/-1/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE4/values/0/description</name>
    <message>
      <source>Manual</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE4/values/1/description</name>
    <message>
      <source>Altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE4/values/2/description</name>
    <message>
      <source>Position</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE4/values/3/description</name>
    <message>
      <source>Mission</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE4/values/4/description</name>
    <message>
      <source>Hold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE4/values/5/description</name>
    <message>
      <source>Return</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE4/values/6/description</name>
    <message>
      <source>Acro</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE4/values/7/description</name>
    <message>
      <source>Offboard</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE4/values/8/description</name>
    <message>
      <source>Stabilized</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE4/values/10/description</name>
    <message>
      <source>Takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE4/values/11/description</name>
    <message>
      <source>Land</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE4/values/12/description</name>
    <message>
      <source>Follow Me</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE5/shortDesc</name>
    <message>
      <source>Fifth flightmode slot (1640-1800)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE5/longDesc</name>
    <message>
      <source>If the main switch channel is in this range the selected flight mode will be applied.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE5/values/-1/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE5/values/0/description</name>
    <message>
      <source>Manual</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE5/values/1/description</name>
    <message>
      <source>Altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE5/values/2/description</name>
    <message>
      <source>Position</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE5/values/3/description</name>
    <message>
      <source>Mission</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE5/values/4/description</name>
    <message>
      <source>Hold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE5/values/5/description</name>
    <message>
      <source>Return</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE5/values/6/description</name>
    <message>
      <source>Acro</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE5/values/7/description</name>
    <message>
      <source>Offboard</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE5/values/8/description</name>
    <message>
      <source>Stabilized</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE5/values/10/description</name>
    <message>
      <source>Takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE5/values/11/description</name>
    <message>
      <source>Land</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE5/values/12/description</name>
    <message>
      <source>Follow Me</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE6/shortDesc</name>
    <message>
      <source>Sixth flightmode slot (1800-2000)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE6/longDesc</name>
    <message>
      <source>If the main switch channel is in this range the selected flight mode will be applied.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE6/values/-1/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE6/values/0/description</name>
    <message>
      <source>Manual</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE6/values/1/description</name>
    <message>
      <source>Altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE6/values/2/description</name>
    <message>
      <source>Position</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE6/values/3/description</name>
    <message>
      <source>Mission</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE6/values/4/description</name>
    <message>
      <source>Hold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE6/values/5/description</name>
    <message>
      <source>Return</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE6/values/6/description</name>
    <message>
      <source>Acro</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE6/values/7/description</name>
    <message>
      <source>Offboard</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE6/values/8/description</name>
    <message>
      <source>Stabilized</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE6/values/10/description</name>
    <message>
      <source>Takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE6/values/11/description</name>
    <message>
      <source>Land</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLTMODE6/values/12/description</name>
    <message>
      <source>Follow Me</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLT_PROFILE/shortDesc</name>
    <message>
      <source>User Flight Profile</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLT_PROFILE/longDesc</name>
    <message>
      <source>Describes the intended use of the vehicle. Can be used by ground control software or log post processing. This param does not influence the behavior within the firmware. This means for example the control logic is independent of the setting of this param (but depends on other params).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLT_PROFILE/values/0/description</name>
    <message>
      <source>Default</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLT_PROFILE/values/100/description</name>
    <message>
      <source>Pro User</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLT_PROFILE/values/200/description</name>
    <message>
      <source>Flight Tester</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_FLT_PROFILE/values/300/description</name>
    <message>
      <source>Developer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HLDL_LOSS_T/shortDesc</name>
    <message>
      <source>High Latency Datalink loss time threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HLDL_LOSS_T/longDesc</name>
    <message>
      <source>After this amount of seconds without datalink the data link lost mode triggers</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HLDL_REG_T/shortDesc</name>
    <message>
      <source>High Latency Datalink regain time threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HLDL_REG_T/longDesc</name>
    <message>
      <source>After a data link loss: after this number of seconds with a healthy datalink the 'datalink loss' flag is set back to false</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HOME_EN/shortDesc</name>
    <message>
      <source>Home position enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HOME_EN/longDesc</name>
    <message>
      <source>Set home position automatically if possible.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HOME_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HOME_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HOME_H_T/shortDesc</name>
    <message>
      <source>Home set horizontal threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HOME_H_T/longDesc</name>
    <message>
      <source>The home position will be set if the estimated positioning accuracy is below the threshold.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HOME_IN_AIR/shortDesc</name>
    <message>
      <source>Allows setting the home position after takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HOME_IN_AIR/longDesc</name>
    <message>
      <source>If set to true, the autopilot is allowed to set its home position after takeoff The true home position is back-computed if a local position is estimate if available. If no local position is available, home is set to the current position.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HOME_IN_AIR/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HOME_IN_AIR/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HOME_V_T/shortDesc</name>
    <message>
      <source>Home set vertical threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_HOME_V_T/longDesc</name>
    <message>
      <source>The home position will be set if the estimated positioning accuracy is below the threshold.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_IMB_PROP_ACT/shortDesc</name>
    <message>
      <source>Imbalanced propeller failsafe mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_IMB_PROP_ACT/longDesc</name>
    <message>
      <source>Action the system takes when an imbalanced propeller is detected by the failure detector. See also FD_IMB_PROP_THR to set the failure threshold.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_IMB_PROP_ACT/values/-1/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_IMB_PROP_ACT/values/0/description</name>
    <message>
      <source>Warning</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_IMB_PROP_ACT/values/1/description</name>
    <message>
      <source>Return</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_IMB_PROP_ACT/values/2/description</name>
    <message>
      <source>Land</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_KILL_DISARM/shortDesc</name>
    <message>
      <source>Timeout value for disarming when kill switch is engaged</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_LKDOWN_TKO/shortDesc</name>
    <message>
      <source>Timeout for detecting a failure after takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_LKDOWN_TKO/longDesc</name>
    <message>
      <source>A non-zero, positive value specifies the timeframe in seconds within failure detector is allowed to put the vehicle into a lockdown state if attitude exceeds the limits defined in FD_FAIL_P and FD_FAIL_R. The check is not executed for flight modes that do support acrobatic maneuvers, e.g: Acro (MC/FW) and Manual (FW). A zero or negative value means that the check is disabled.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_LOW_BAT_ACT/shortDesc</name>
    <message>
      <source>Battery failsafe mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_LOW_BAT_ACT/longDesc</name>
    <message>
      <source>Action the system takes at critical battery. See also BAT_CRIT_THR and BAT_EMERGEN_THR for definition of battery states.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_LOW_BAT_ACT/values/0/description</name>
    <message>
      <source>Warning</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_LOW_BAT_ACT/values/2/description</name>
    <message>
      <source>Land mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_LOW_BAT_ACT/values/3/description</name>
    <message>
      <source>Return at critical level, land at emergency level</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_MOT_TEST_EN/shortDesc</name>
    <message>
      <source>Enable Motor Testing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_MOT_TEST_EN/longDesc</name>
    <message>
      <source>If set, enables the motor test interface via MAVLink (DO_MOTOR_TEST), that allows spinning the motors for testing purposes.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_MOT_TEST_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_MOT_TEST_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBC_LOSS_T/shortDesc</name>
    <message>
      <source>Time-out to wait when onboard computer connection is lost before warning about loss connection</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_ACT/shortDesc</name>
    <message>
      <source>Set offboard loss failsafe mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_ACT/longDesc</name>
    <message>
      <source>The offboard loss failsafe will only be entered after a timeout, set by COM_OF_LOSS_T in seconds.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_ACT/values/-1/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_ACT/values/0/description</name>
    <message>
      <source>Land mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_ACT/values/1/description</name>
    <message>
      <source>Hold mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_ACT/values/2/description</name>
    <message>
      <source>Return mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_ACT/values/3/description</name>
    <message>
      <source>Terminate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_ACT/values/4/description</name>
    <message>
      <source>Lockdown</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_RC_ACT/shortDesc</name>
    <message>
      <source>Set offboard loss failsafe mode when RC is available</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_RC_ACT/longDesc</name>
    <message>
      <source>The offboard loss failsafe will only be entered after a timeout, set by COM_OF_LOSS_T in seconds.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_RC_ACT/values/-1/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_RC_ACT/values/0/description</name>
    <message>
      <source>Position mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_RC_ACT/values/1/description</name>
    <message>
      <source>Altitude mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_RC_ACT/values/2/description</name>
    <message>
      <source>Manual</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_RC_ACT/values/3/description</name>
    <message>
      <source>Return mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_RC_ACT/values/4/description</name>
    <message>
      <source>Land mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_RC_ACT/values/5/description</name>
    <message>
      <source>Hold mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_RC_ACT/values/6/description</name>
    <message>
      <source>Terminate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBL_RC_ACT/values/7/description</name>
    <message>
      <source>Lockdown</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBS_AVOID/shortDesc</name>
    <message>
      <source>Flag to enable obstacle avoidance</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBS_AVOID/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OBS_AVOID/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OF_LOSS_T/shortDesc</name>
    <message>
      <source>Time-out to wait when offboard connection is lost before triggering offboard lost action</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_OF_LOSS_T/longDesc</name>
    <message>
      <source>See COM_OBL_ACT and COM_OBL_RC_ACT to configure action.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_PARACHUTE/shortDesc</name>
    <message>
      <source>Expect and require a healthy MAVLink parachute system</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_PARACHUTE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_PARACHUTE/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POSCTL_NAVL/shortDesc</name>
    <message>
      <source>Position control navigation loss response</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POSCTL_NAVL/longDesc</name>
    <message>
      <source>This sets the flight mode that will be used if navigation accuracy is no longer adequate for position control. Navigation accuracy checks can be disabled using the CBRK_VELPOSERR parameter, but doing so will remove protection for all flight modes.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POSCTL_NAVL/values/0/description</name>
    <message>
      <source>Altitude/Manual. Assume use of remote control after fallback. Switch to Altitude mode if a height estimate is available, else switch to MANUAL.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POSCTL_NAVL/values/1/description</name>
    <message>
      <source>Land/Terminate. Assume no use of remote control after fallback. Switch to Land mode if a height estimate is available, else switch to TERMINATION.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POS_FS_DELAY/shortDesc</name>
    <message>
      <source>Loss of position failsafe activation delay</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POS_FS_DELAY/longDesc</name>
    <message>
      <source>This sets number of seconds that the position checks need to be failed before the failsafe will activate. The default value has been optimised for rotary wing applications. For fixed wing applications, a larger value between 5 and 10 should be used.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POS_FS_EPH/shortDesc</name>
    <message>
      <source>Horizontal position error threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POS_FS_EPH/longDesc</name>
    <message>
      <source>This is the horizontal position error (EPH) threshold that will trigger a failsafe. The default is appropriate for a multicopter. Can be increased for a fixed-wing.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POS_FS_EPV/shortDesc</name>
    <message>
      <source>Vertical position error threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POS_FS_EPV/longDesc</name>
    <message>
      <source>This is the vertical position error (EPV) threshold that will trigger a failsafe. The default is appropriate for a multicopter. Can be increased for a fixed-wing.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POS_FS_GAIN/shortDesc</name>
    <message>
      <source>Loss of position probation gain factor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POS_FS_GAIN/longDesc</name>
    <message>
      <source>This sets the rate that the loss of position probation time grows when position checks are failing. The default value has been optimised for rotary wing applications. For fixed wing applications a value of 0 should be used.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POS_FS_PROB/shortDesc</name>
    <message>
      <source>Loss of position probation delay at takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POS_FS_PROB/longDesc</name>
    <message>
      <source>The probation delay is the number of seconds that the EKF innovation checks need to pass for the position to be declared good after it has been declared bad. The probation delay will be reset to this parameter value when takeoff is detected. After takeoff, if position checks are passing, the probation delay will reduce by one second for every lapsed second of valid position down to a minimum of 1 second. If position checks are failing, the probation delay will increase by COM_POS_FS_GAIN seconds for every lapsed second up to a maximum of 100 seconds. The default value has been optimised for rotary wing applications. For fixed wing applications, a value of 1 should be used.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POWER_COUNT/shortDesc</name>
    <message>
      <source>Required number of redundant power modules</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_POWER_COUNT/longDesc</name>
    <message>
      <source>This configures a check to verify the expected number of 5V rail power supplies are present. By default only one is expected. Note: CBRK_SUPPLY_CHK disables all power checks including this one.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_PREARM_MODE/shortDesc</name>
    <message>
      <source>Condition to enter prearmed mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_PREARM_MODE/longDesc</name>
    <message>
      <source>Condition to enter the prearmed state, an intermediate state between disarmed and armed in which non-throttling actuators are active.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_PREARM_MODE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_PREARM_MODE/values/1/description</name>
    <message>
      <source>Safety button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_PREARM_MODE/values/2/description</name>
    <message>
      <source>Always</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RCL_ACT_T/shortDesc</name>
    <message>
      <source>Delay between RC loss and configured reaction</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RCL_ACT_T/longDesc</name>
    <message>
      <source>RC signal not updated -&gt; still use data for COM_RC_LOSS_T seconds Consider RC signal lost -&gt; wait COM_RCL_ACT_T seconds in Hold mode to regain signal React with failsafe action NAV_RCL_ACT A zero value disables the delay.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RCL_EXCEPT/shortDesc</name>
    <message>
      <source>RC loss exceptions</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RCL_EXCEPT/longDesc</name>
    <message>
      <source>Specify modes in which RC loss is ignored and the failsafe action not triggered.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RCL_EXCEPT/bitmask/0/description</name>
    <message>
      <source>Mission</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RCL_EXCEPT/bitmask/1/description</name>
    <message>
      <source>Hold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RCL_EXCEPT/bitmask/2/description</name>
    <message>
      <source>Offboard</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_ARM_HYST/shortDesc</name>
    <message>
      <source>RC input arm/disarm command duration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_ARM_HYST/longDesc</name>
    <message>
      <source>The default value of 1000 requires the stick to be held in the arm or disarm position for 1 second.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_DARM_A_H/shortDesc</name>
    <message>
      <source>RC disarm gesture duration when not landed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_DARM_A_H/longDesc</name>
    <message>
      <source>The default value of 1000 requires the stick to be held in the disarm position for 1 second.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_IN_MODE/shortDesc</name>
    <message>
      <source>RC control input mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_IN_MODE/longDesc</name>
    <message>
      <source>The default value of 0 requires a valid RC transmitter setup. Setting this to 1 allows joystick control and disables RC input handling and the associated checks. A value of 2 will generate RC control data from manual input received via MAVLink instead of directly forwarding the manual input data.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_IN_MODE/values/0/description</name>
    <message>
      <source>RC Transmitter only</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_IN_MODE/values/1/description</name>
    <message>
      <source>Joystick only</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_IN_MODE/values/2/description</name>
    <message>
      <source>RC and Joystick with fallback</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_IN_MODE/values/3/description</name>
    <message>
      <source>RC or Joystick keep first</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_IN_MODE/values/4/description</name>
    <message>
      <source>Stick input disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_LOSS_T/shortDesc</name>
    <message>
      <source>RC loss time threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_LOSS_T/longDesc</name>
    <message>
      <source>After this amount of seconds without RC connection it's considered lost and not used anymore</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_OVERRIDE/shortDesc</name>
    <message>
      <source>Enable RC stick override of auto and/or offboard modes</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_OVERRIDE/longDesc</name>
    <message>
      <source>When RC stick override is enabled, moving the RC sticks more than COM_RC_STICK_OV immediately gives control back to the pilot by switching to Position mode and if position is unavailable Altitude mode. Note: Only has an effect on multicopters, and VTOLs in multicopter mode. This parameter is not considered in case of a GPS failure (Descend flight mode), where stick override is always enabled.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_OVERRIDE/bitmask/0/description</name>
    <message>
      <source>Enable override during auto modes (except for in critical battery reaction)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_OVERRIDE/bitmask/1/description</name>
    <message>
      <source>Enable override during offboard mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_STICK_OV/shortDesc</name>
    <message>
      <source>RC stick override threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_RC_STICK_OV/longDesc</name>
    <message>
      <source>If COM_RC_OVERRIDE is enabled and the joystick input is moved more than this threshold the autopilot the pilot takes over control.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_SPOOLUP_TIME/shortDesc</name>
    <message>
      <source>Enforced delay between arming and takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_SPOOLUP_TIME/longDesc</name>
    <message>
      <source>The minimal time from arming the motors until a takeoff is possible is COM_SPOOLUP_TIME seconds. Goal: - Motors and propellers spool up to idle speed before getting commanded to spin faster - ESCs do failure checks e.g. for stuck rotors before the vehicle is off the ground</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_TAKEOFF_ACT/shortDesc</name>
    <message>
      <source>Action after TAKEOFF has been accepted</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_TAKEOFF_ACT/longDesc</name>
    <message>
      <source>The mode transition after TAKEOFF has completed successfully.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_TAKEOFF_ACT/values/0/description</name>
    <message>
      <source>Hold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_TAKEOFF_ACT/values/1/description</name>
    <message>
      <source>Mission (if valid)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_VEL_FS_EVH/shortDesc</name>
    <message>
      <source>Horizontal velocity error threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_VEL_FS_EVH/longDesc</name>
    <message>
      <source>This is the horizontal velocity error (EVH) threshold that will trigger a failsafe. The default is appropriate for a multicopter. Can be increased for a fixed-wing.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_WIND_WARN/shortDesc</name>
    <message>
      <source>Wind speed warning threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_WIND_WARN/longDesc</name>
    <message>
      <source>A warning is triggered if the currently estimated wind speed is above this value. Warning is sent periodically (every 1min). A negative value disables the feature.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_DLL_ACT/shortDesc</name>
    <message>
      <source>Set data link loss failsafe mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_DLL_ACT/longDesc</name>
    <message>
      <source>The data link loss failsafe will only be entered after a timeout, set by COM_DL_LOSS_T in seconds. Once the timeout occurs the selected action will be executed.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_DLL_ACT/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_DLL_ACT/values/1/description</name>
    <message>
      <source>Hold mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_DLL_ACT/values/2/description</name>
    <message>
      <source>Return mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_DLL_ACT/values/3/description</name>
    <message>
      <source>Land mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_DLL_ACT/values/5/description</name>
    <message>
      <source>Terminate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_DLL_ACT/values/6/description</name>
    <message>
      <source>Lockdown</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_RCL_ACT/shortDesc</name>
    <message>
      <source>Set RC loss failsafe mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_RCL_ACT/longDesc</name>
    <message>
      <source>The RC loss failsafe will only be entered after a timeout, set by COM_RC_LOSS_T in seconds. If RC input checks have been disabled by setting the COM_RC_IN_MODE param it will not be triggered.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_RCL_ACT/values/1/description</name>
    <message>
      <source>Hold mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_RCL_ACT/values/2/description</name>
    <message>
      <source>Return mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_RCL_ACT/values/3/description</name>
    <message>
      <source>Land mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_RCL_ACT/values/5/description</name>
    <message>
      <source>Terminate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_RCL_ACT/values/6/description</name>
    <message>
      <source>Lockdown</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_AH_ALT/shortDesc</name>
    <message>
      <source>Airfield home alt</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_AH_ALT/longDesc</name>
    <message>
      <source>Altitude of airfield home waypoint</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_AH_LAT/shortDesc</name>
    <message>
      <source>Airfield home Lat</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_AH_LAT/longDesc</name>
    <message>
      <source>Latitude of airfield home waypoint</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_AH_LON/shortDesc</name>
    <message>
      <source>Airfield home Lon</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_AH_LON/longDesc</name>
    <message>
      <source>Longitude of airfield home waypoint</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ABIAS_INIT/shortDesc</name>
    <message>
      <source>1-sigma IMU accelerometer switch-on bias</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ABL_ACCLIM/shortDesc</name>
    <message>
      <source>Maximum IMU accel magnitude that allows IMU bias learning</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ABL_ACCLIM/longDesc</name>
    <message>
      <source>If the magnitude of the IMU accelerometer vector exceeds this value, the EKF delta velocity state estimation will be inhibited. This reduces the adverse effect of high manoeuvre accelerations and IMU nonlinerity and scale factor errors on the delta velocity bias estimates.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ABL_GYRLIM/shortDesc</name>
    <message>
      <source>Maximum IMU gyro angular rate magnitude that allows IMU bias learning</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ABL_GYRLIM/longDesc</name>
    <message>
      <source>If the magnitude of the IMU angular rate vector exceeds this value, the EKF delta velocity state estimation will be inhibited. This reduces the adverse effect of rapid rotation rates and associated errors on the delta velocity bias estimates.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ABL_LIM/shortDesc</name>
    <message>
      <source>Accelerometer bias learning limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ABL_LIM/longDesc</name>
    <message>
      <source>The ekf delta velocity bias states will be limited to within a range equivalent to +- of this value.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ABL_TAU/shortDesc</name>
    <message>
      <source>Time constant used by acceleration and angular rate magnitude checks used to inhibit delta velocity bias learning</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ABL_TAU/longDesc</name>
    <message>
      <source>The vector magnitude of angular rate and acceleration used to check if learning should be inhibited has a peak hold filter applied to it with an exponential decay. This parameter controls the time constant of the decay.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ACC_B_NOISE/shortDesc</name>
    <message>
      <source>Process noise for IMU accelerometer bias prediction</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ACC_NOISE/shortDesc</name>
    <message>
      <source>Accelerometer noise for covariance prediction</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_AID_MASK/shortDesc</name>
    <message>
      <source>Integer bitmask controlling data fusion and aiding methods</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_AID_MASK/longDesc</name>
    <message>
      <source>Set bits in the following positions to enable: 0 : Set to true to use GPS data if available 1 : Set to true to use optical flow data if available 2 : Set to true to inhibit IMU delta velocity bias estimation 3 : Set to true to enable vision position fusion 4 : Set to true to enable vision yaw fusion. Cannot be used if bit position 7 is true. 5 : Set to true to enable multi-rotor drag specific force fusion 6 : set to true if the EV observations are in a non NED reference frame and need to be rotated before being used 7 : Set to true to enable GPS yaw fusion. Cannot be used if bit position 4 is true.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_AID_MASK/bitmask/0/description</name>
    <message>
      <source>use GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_AID_MASK/bitmask/1/description</name>
    <message>
      <source>use optical flow</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_AID_MASK/bitmask/2/description</name>
    <message>
      <source>inhibit IMU bias estimation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_AID_MASK/bitmask/3/description</name>
    <message>
      <source>vision position fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_AID_MASK/bitmask/4/description</name>
    <message>
      <source>vision yaw fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_AID_MASK/bitmask/5/description</name>
    <message>
      <source>multi-rotor drag fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_AID_MASK/bitmask/6/description</name>
    <message>
      <source>rotate external vision</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_AID_MASK/bitmask/7/description</name>
    <message>
      <source>GPS yaw fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_AID_MASK/bitmask/8/description</name>
    <message>
      <source>vision velocity fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ANGERR_INIT/shortDesc</name>
    <message>
      <source>1-sigma tilt angle uncertainty after gravity vector alignment</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ARSP_THR/shortDesc</name>
    <message>
      <source>Airspeed fusion threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ARSP_THR/longDesc</name>
    <message>
      <source>A value of zero will deactivate airspeed fusion. Any other positive value will determine the minimum airspeed which will still be fused. Set to about 90% of the vehicles stall speed. Both airspeed fusion and sideslip fusion must be active for the EKF to continue navigating after loss of GPS. Use EKF2_FUSE_BETA to activate sideslip fusion.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ASPD_MAX/shortDesc</name>
    <message>
      <source>Upper limit on airspeed along individual axes used to correct baro for position error effects</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_ASP_DELAY/shortDesc</name>
    <message>
      <source>Airspeed measurement delay relative to IMU measurements</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_AVEL_DELAY/shortDesc</name>
    <message>
      <source>Auxillary Velocity Estimate (e.g from a landing target) delay relative to IMU measurements</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_BARO_DELAY/shortDesc</name>
    <message>
      <source>Barometer measurement delay relative to IMU measurements</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_BARO_GATE/shortDesc</name>
    <message>
      <source>Gate size for barometric and GPS height fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_BARO_GATE/longDesc</name>
    <message>
      <source>Sets the number of standard deviations used by the innovation consistency test.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_BARO_NOISE/shortDesc</name>
    <message>
      <source>Measurement noise for barometric altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_BCOEF_X/shortDesc</name>
    <message>
      <source>X-axis ballistic coefficient used for multi-rotor wind estimation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_BCOEF_X/longDesc</name>
    <message>
      <source>This parameter controls the prediction of drag produced by bluff body drag along the forward/reverse axis when flying a multi-copter which enables estimation of wind drift when enabled by the EKF2_AID_MASK parameter. The EKF2_BCOEF_X paraemter should be set initially to the ratio of mass / projected frontal area and adjusted together with EKF2_MCOEF to minimise variance of the X-axis drag specific force innovation sequence. The drag produced by this effect scales with speed squared. Set this parameter to zero to turn off the bluff body drag model for this axis. The predicted drag from the rotors is specified separately by the EKF2_MCOEF parameter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_BCOEF_Y/shortDesc</name>
    <message>
      <source>Y-axis ballistic coefficient used for multi-rotor wind estimation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_BCOEF_Y/longDesc</name>
    <message>
      <source>This parameter controls the prediction of drag produced by bluff body drag along the right/left axis when flying a multi-copter, which enables estimation of wind drift when enabled by the EKF2_AID_MASK parameter. The EKF2_BCOEF_Y paraemter should be set initially to the ratio of mass / projected side area and adjusted together with EKF2_MCOEF to minimise variance of the Y-axis drag specific force innovation sequence. The drag produced by this effect scales with speed squared. et this parameter to zero to turn off the bluff body drag model for this axis. The predicted drag from the rotors is specified separately by the EKF2_MCOEF parameter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_BETA_GATE/shortDesc</name>
    <message>
      <source>Gate size for synthetic sideslip fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_BETA_GATE/longDesc</name>
    <message>
      <source>Sets the number of standard deviations used by the innovation consistency test.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_BETA_NOISE/shortDesc</name>
    <message>
      <source>Noise for synthetic sideslip fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_DECL_TYPE/shortDesc</name>
    <message>
      <source>Integer bitmask controlling handling of magnetic declination</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_DECL_TYPE/longDesc</name>
    <message>
      <source>Set bits in the following positions to enable functions. 0 : Set to true to use the declination from the geo_lookup library when the GPS position becomes available, set to false to always use the EKF2_MAG_DECL value. 1 : Set to true to save the EKF2_MAG_DECL parameter to the value returned by the EKF when the vehicle disarms. 2 : Set to true to always use the declination as an observation when 3-axis magnetometer fusion is being used.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_DECL_TYPE/bitmask/0/description</name>
    <message>
      <source>use geo_lookup declination</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_DECL_TYPE/bitmask/1/description</name>
    <message>
      <source>save EKF2_MAG_DECL on disarm</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_DECL_TYPE/bitmask/2/description</name>
    <message>
      <source>use declination as an observation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_DRAG_NOISE/shortDesc</name>
    <message>
      <source>Specific drag force observation noise variance used by the multi-rotor specific drag force model</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_DRAG_NOISE/longDesc</name>
    <message>
      <source>Increasing this makes the multi-rotor wind estimates adjust more slowly.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EAS_NOISE/shortDesc</name>
    <message>
      <source>Measurement noise for airspeed fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EVA_NOISE/shortDesc</name>
    <message>
      <source>Measurement noise for vision angle observations used to lower bound or replace the uncertainty included in the message</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EVP_GATE/shortDesc</name>
    <message>
      <source>Gate size for vision position fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EVP_GATE/longDesc</name>
    <message>
      <source>Sets the number of standard deviations used by the innovation consistency test.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EVP_NOISE/shortDesc</name>
    <message>
      <source>Measurement noise for vision position observations used to lower bound or replace the uncertainty included in the message</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EVV_GATE/shortDesc</name>
    <message>
      <source>Gate size for vision velocity estimate fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EVV_GATE/longDesc</name>
    <message>
      <source>Sets the number of standard deviations used by the innovation consistency test.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EVV_NOISE/shortDesc</name>
    <message>
      <source>Measurement noise for vision velocity observations used to lower bound or replace the uncertainty included in the message</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EV_DELAY/shortDesc</name>
    <message>
      <source>Vision Position Estimator delay relative to IMU measurements</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EV_NOISE_MD/shortDesc</name>
    <message>
      <source>Whether to set the external vision observation noise from the parameter or from vision message</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EV_NOISE_MD/longDesc</name>
    <message>
      <source>If set to true the observation noise is set from the parameters directly, if set to false the measurement noise is taken from the vision message and the parameter are used as a lower bound.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EV_NOISE_MD/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EV_NOISE_MD/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EV_POS_X/shortDesc</name>
    <message>
      <source>X position of VI sensor focal point in body frame (forward axis with origin relative to vehicle centre of gravity)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EV_POS_Y/shortDesc</name>
    <message>
      <source>Y position of VI sensor focal point in body frame (right axis with origin relative to vehicle centre of gravity)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_EV_POS_Z/shortDesc</name>
    <message>
      <source>Z position of VI sensor focal point in body frame (down axis with origin relative to vehicle centre of gravity)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_FUSE_BETA/shortDesc</name>
    <message>
      <source>Boolean determining if synthetic sideslip measurements should fused</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_FUSE_BETA/longDesc</name>
    <message>
      <source>A value of 1 indicates that fusion is active Both  sideslip fusion and airspeed fusion must be active for the EKF to continue navigating after loss of GPS. Use EKF2_ARSP_THR to activate airspeed fusion.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_FUSE_BETA/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_FUSE_BETA/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GBIAS_INIT/shortDesc</name>
    <message>
      <source>1-sigma IMU gyro switch-on bias</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GND_EFF_DZ/shortDesc</name>
    <message>
      <source>Baro deadzone range for height fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GND_EFF_DZ/longDesc</name>
    <message>
      <source>Sets the value of deadzone applied to negative baro innovations. Deadzone is enabled when EKF2_GND_EFF_DZ &gt; 0.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GND_MAX_HGT/shortDesc</name>
    <message>
      <source>Height above ground level for ground effect zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GND_MAX_HGT/longDesc</name>
    <message>
      <source>Sets the maximum distance to the ground level where negative baro innovations are expected.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_CHECK/shortDesc</name>
    <message>
      <source>Integer bitmask controlling GPS checks</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_CHECK/longDesc</name>
    <message>
      <source>Set bits to 1 to enable checks. Checks enabled by the following bit positions 0 : Minimum required sat count set by EKF2_REQ_NSATS 1 : Maximum allowed PDOP set by EKF2_REQ_PDOP 2 : Maximum allowed horizontal position error set by EKF2_REQ_EPH 3 : Maximum allowed vertical position error set by EKF2_REQ_EPV 4 : Maximum allowed speed error set by EKF2_REQ_SACC 5 : Maximum allowed horizontal position rate set by EKF2_REQ_HDRIFT. This check will only run when the vehicle is on ground and stationary. Detecton of the stationary condition is controlled by the EKF2_MOVE_TEST parameter. 6 : Maximum allowed vertical position rate set by EKF2_REQ_VDRIFT. This check will only run when the vehicle is on ground and stationary. Detecton of the stationary condition is controlled by the EKF2_MOVE_TEST parameter. 7 : Maximum allowed horizontal speed set by EKF2_REQ_HDRIFT. This check will only run when the vehicle is on ground and stationary. Detecton of the stationary condition is controlled by the EKF2_MOVE_TEST parameter. 8 : Maximum allowed vertical velocity discrepancy set by EKF2_REQ_VDRIFT</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_CHECK/bitmask/0/description</name>
    <message>
      <source>Min sat count (EKF2_REQ_NSATS)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_CHECK/bitmask/1/description</name>
    <message>
      <source>Max PDOP (EKF2_REQ_PDOP)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_CHECK/bitmask/2/description</name>
    <message>
      <source>Max horizontal position error (EKF2_REQ_EPH)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_CHECK/bitmask/3/description</name>
    <message>
      <source>Max vertical position error (EKF2_REQ_EPV)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_CHECK/bitmask/4/description</name>
    <message>
      <source>Max speed error (EKF2_REQ_SACC)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_CHECK/bitmask/5/description</name>
    <message>
      <source>Max horizontal position rate (EKF2_REQ_HDRIFT)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_CHECK/bitmask/6/description</name>
    <message>
      <source>Max vertical position rate (EKF2_REQ_VDRIFT)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_CHECK/bitmask/7/description</name>
    <message>
      <source>Max horizontal speed (EKF2_REQ_HDRIFT)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_CHECK/bitmask/8/description</name>
    <message>
      <source>Max vertical velocity discrepancy (EKF2_REQ_VDRIFT)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_DELAY/shortDesc</name>
    <message>
      <source>GPS measurement delay relative to IMU measurements</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_POS_X/shortDesc</name>
    <message>
      <source>X position of GPS antenna in body frame (forward axis with origin relative to vehicle centre of gravity)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_POS_Y/shortDesc</name>
    <message>
      <source>Y position of GPS antenna in body frame (right axis with origin relative to vehicle centre of gravity)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_POS_Z/shortDesc</name>
    <message>
      <source>Z position of GPS antenna in body frame (down axis with origin relative to vehicle centre of gravity)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_P_GATE/shortDesc</name>
    <message>
      <source>Gate size for GPS horizontal position fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_P_GATE/longDesc</name>
    <message>
      <source>Sets the number of standard deviations used by the innovation consistency test.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_P_NOISE/shortDesc</name>
    <message>
      <source>Measurement noise for gps position</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_V_GATE/shortDesc</name>
    <message>
      <source>Gate size for GPS velocity fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_V_GATE/longDesc</name>
    <message>
      <source>Sets the number of standard deviations used by the innovation consistency test.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GPS_V_NOISE/shortDesc</name>
    <message>
      <source>Measurement noise for gps horizontal velocity</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GSF_TAS/shortDesc</name>
    <message>
      <source>Default value of true airspeed used in EKF-GSF AHRS calculation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GSF_TAS/longDesc</name>
    <message>
      <source>If no airspeed measurements are avalable, the EKF-GSF AHRS calculation will assume this value of true airspeed when compensating for centripetal acceleration during turns. Set to zero to disable centripetal acceleration compensation during fixed wing flight modes.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GYR_B_NOISE/shortDesc</name>
    <message>
      <source>Process noise for IMU rate gyro bias prediction</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_GYR_NOISE/shortDesc</name>
    <message>
      <source>Rate gyro noise for covariance prediction</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_HDG_GATE/shortDesc</name>
    <message>
      <source>Gate size for magnetic heading fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_HDG_GATE/longDesc</name>
    <message>
      <source>Sets the number of standard deviations used by the innovation consistency test.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_HEAD_NOISE/shortDesc</name>
    <message>
      <source>Measurement noise for magnetic heading fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_HGT_MODE/shortDesc</name>
    <message>
      <source>Determines the primary source of height data used by the EKF</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_HGT_MODE/longDesc</name>
    <message>
      <source>The range sensor option should only be used when for operation over a flat surface as the local NED origin will move up and down with ground level.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_HGT_MODE/values/0/description</name>
    <message>
      <source>Barometric pressure</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_HGT_MODE/values/1/description</name>
    <message>
      <source>GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_HGT_MODE/values/2/description</name>
    <message>
      <source>Range sensor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_HGT_MODE/values/3/description</name>
    <message>
      <source>Vision</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_IMU_POS_X/shortDesc</name>
    <message>
      <source>X position of IMU in body frame (forward axis with origin relative to vehicle centre of gravity)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_IMU_POS_Y/shortDesc</name>
    <message>
      <source>Y position of IMU in body frame (right axis with origin relative to vehicle centre of gravity)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_IMU_POS_Z/shortDesc</name>
    <message>
      <source>Z position of IMU in body frame (down axis with origin relative to vehicle centre of gravity)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_ACCLIM/shortDesc</name>
    <message>
      <source>Horizontal acceleration threshold used by automatic selection of magnetometer fusion method</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_ACCLIM/longDesc</name>
    <message>
      <source>This parameter is used when the magnetometer fusion method is set automatically (EKF2_MAG_TYPE = 0). If the filtered horizontal acceleration is greater than this parameter value, then the EKF will use 3-axis magnetomer fusion.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_B_NOISE/shortDesc</name>
    <message>
      <source>Process noise for body magnetic field prediction</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_CHECK/shortDesc</name>
    <message>
      <source>Magnetic field strength test selection</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_CHECK/longDesc</name>
    <message>
      <source>When set, the EKF checks the strength of the magnetic field to decide whether the magnetometer data is valid. If GPS data is received, the magnetic field is compared to a World Magnetic Model (WMM), otherwise an average value is used. This check is useful to reject occasional hard iron disturbance.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_CHECK/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_CHECK/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_DECL/shortDesc</name>
    <message>
      <source>Magnetic declination</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_DELAY/shortDesc</name>
    <message>
      <source>Magnetometer measurement delay relative to IMU measurements</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_E_NOISE/shortDesc</name>
    <message>
      <source>Process noise for earth magnetic field prediction</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_GATE/shortDesc</name>
    <message>
      <source>Gate size for magnetometer XYZ component fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_GATE/longDesc</name>
    <message>
      <source>Sets the number of standard deviations used by the innovation consistency test.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_NOISE/shortDesc</name>
    <message>
      <source>Measurement noise for magnetometer 3-axis fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_TYPE/shortDesc</name>
    <message>
      <source>Type of magnetometer fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_TYPE/longDesc</name>
    <message>
      <source>Integer controlling the type of magnetometer fusion used - magnetic heading or 3-component vector. The fuson of magnetomer data as a three component vector enables vehicle body fixed hard iron errors to be learned, but requires a stable earth field. If set to 'Automatic' magnetic heading fusion is used when on-ground and 3-axis magnetic field fusion in-flight with fallback to magnetic heading fusion if there is insufficient motion to make yaw or magnetic field states observable. If set to 'Magnetic heading' magnetic heading fusion is used at all times If set to '3-axis' 3-axis field fusion is used at all times. If set to 'VTOL custom' the behaviour is the same as 'Automatic', but if fusing airspeed, magnetometer fusion is only allowed to modify the magnetic field states. This can be used by VTOL platforms with large magnetic field disturbances to prevent incorrect bias states being learned during forward flight operation which can adversely affect estimation accuracy after transition to hovering flight. If set to 'MC custom' the behaviour is the same as 'Automatic, but if there are no earth frame position or velocity observations being used, the magnetometer will not be used. This enables vehicles to operate with no GPS in environments where the magnetic field cannot be used to provide a heading reference. Prior to flight, the yaw angle is assumed to be constant if movement tests controlled by the EKF2_MOVE_TEST parameter indicate that the vehicle is static. This allows the vehicle to be placed on the ground to learn the yaw gyro bias prior to flight. If set to 'None' the magnetometer will not be used under any circumstance. If no external source of yaw is available, it is possible to use post-takeoff horizontal movement combined with GPS velocity measurements to align the yaw angle with the timer required (depending on the amount of movement and GPS data quality). Other external sources of yaw may be used if selected via the EKF2_AID_MASK parameter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_TYPE/values/0/description</name>
    <message>
      <source>Automatic</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_TYPE/values/1/description</name>
    <message>
      <source>Magnetic heading</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_TYPE/values/2/description</name>
    <message>
      <source>3-axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_TYPE/values/3/description</name>
    <message>
      <source>VTOL custom</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_TYPE/values/4/description</name>
    <message>
      <source>MC custom</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_TYPE/values/5/description</name>
    <message>
      <source>None</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_YAWLIM/shortDesc</name>
    <message>
      <source>Yaw rate threshold used by automatic selection of magnetometer fusion method</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MAG_YAWLIM/longDesc</name>
    <message>
      <source>This parameter is used when the magnetometer fusion method is set automatically (EKF2_MAG_TYPE = 0). If the filtered yaw rate is greater than this parameter value, then the EKF will use 3-axis magnetomer fusion.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MCOEF/shortDesc</name>
    <message>
      <source>propeller momentum drag coefficient used for multi-rotor wind estimation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MCOEF/longDesc</name>
    <message>
      <source>This parameter controls the prediction of drag produced by the propellers when flying a multi-copter, which enables estimation of wind drift when enabled by the EKF2_AID_MASK parameter. The drag produced by this effect scales with speed not speed squared and is produced because some of the air velocity normal to the propeller axis of rotation is lost when passing through the rotor disc. This  changes the momentum of the flow which creates a drag reaction force. When comparing un-ducted propellers of the same diameter, the effect is roughly proportional to the area of the propeller blades when viewed side on and changes with propeller selection. Momentum drag is significantly higher for ducted rotors. For example, if flying at 10 m/s at sea level conditions produces a rotor induced drag deceleration of 1.5 m/s/s when the multi-copter levelled to zero roll/pitch, then EKF2_MCOEF would be set to 0.15 = (1.5/10.0). Set EKF2_MCOEF to a positive value to enable wind estimation using this drag effect. To account for the drag produced by the body which scales with speed squared, see documentation for the EKF2_BCOEF_X and EKF2_BCOEF_Y parameters. The EKF2_MCOEF parameter should be adjusted together with EKF2_BCOEF_X and EKF2_BCOEF_Y to minimise variance of the X and y axis drag specific force innovation sequences.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MIN_OBS_DT/shortDesc</name>
    <message>
      <source>Minimum time of arrival delta between non-IMU observations before data is downsampled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MIN_OBS_DT/longDesc</name>
    <message>
      <source>Baro and Magnetometer data will be averaged before downsampling, other data will be point sampled resulting in loss of information.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MIN_RNG/shortDesc</name>
    <message>
      <source>Expected range finder reading when on ground</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MIN_RNG/longDesc</name>
    <message>
      <source>If the vehicle is on ground, is not moving as determined by the motion test controlled by EKF2_MOVE_TEST and the range finder is returning invalid or no data, then an assumed range value of EKF2_MIN_RNG will be used by the terrain estimator so that a terrain height estimate is avilable at the start of flight in situations where the range finder may be inside its minimum measurements distance when on ground.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MOVE_TEST/shortDesc</name>
    <message>
      <source>Vehicle movement test threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MOVE_TEST/longDesc</name>
    <message>
      <source>Scales the threshold tests applied to IMU data used to determine if the vehicle is static or moving. See parameter descriptions for EKF2_GPS_CHECK and EKF2_MAG_TYPE for further information on the functionality affected by this parameter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MULTI_IMU/shortDesc</name>
    <message>
      <source>Multi-EKF IMUs</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MULTI_IMU/longDesc</name>
    <message>
      <source>Maximum number of IMUs to use for Multi-EKF. Set 0 to disable. Requires SENS_IMU_MODE 0.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MULTI_MAG/shortDesc</name>
    <message>
      <source>Multi-EKF Magnetometers</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_MULTI_MAG/longDesc</name>
    <message>
      <source>Maximum number of magnetometers to use for Multi-EKF. Set 0 to disable. Requires SENS_MAG_MODE 0.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_NOAID_NOISE/shortDesc</name>
    <message>
      <source>Measurement noise for non-aiding position hold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_NOAID_TOUT/shortDesc</name>
    <message>
      <source>Maximum lapsed time from last fusion of measurements that constrain velocity drift before the EKF will report the horizontal nav solution as invalid</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_OF_DELAY/shortDesc</name>
    <message>
      <source>Optical flow measurement delay relative to IMU measurements</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_OF_DELAY/longDesc</name>
    <message>
      <source>Assumes measurement is timestamped at trailing edge of integration period</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_OF_GATE/shortDesc</name>
    <message>
      <source>Gate size for optical flow fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_OF_GATE/longDesc</name>
    <message>
      <source>Sets the number of standard deviations used by the innovation consistency test.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_OF_N_MAX/shortDesc</name>
    <message>
      <source>Measurement noise for the optical flow sensor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_OF_N_MAX/longDesc</name>
    <message>
      <source>(when it's reported quality metric is at the minimum set by EKF2_OF_QMIN). The following condition must be met: EKF2_OF_N_MAXN &gt;= EKF2_OF_N_MIN</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_OF_N_MIN/shortDesc</name>
    <message>
      <source>Measurement noise for the optical flow sensor when it's reported quality metric is at the maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_OF_POS_X/shortDesc</name>
    <message>
      <source>X position of optical flow focal point in body frame (forward axis with origin relative to vehicle centre of gravity)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_OF_POS_Y/shortDesc</name>
    <message>
      <source>Y position of optical flow focal point in body frame (right axis with origin relative to vehicle centre of gravity)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_OF_POS_Z/shortDesc</name>
    <message>
      <source>Z position of optical flow focal point in body frame (down axis with origin relative to vehicle centre of gravity)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_OF_QMIN/shortDesc</name>
    <message>
      <source>Optical Flow data will only be used if the sensor reports a quality metric &gt;= EKF2_OF_QMIN</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_PCOEF_XN/shortDesc</name>
    <message>
      <source>Static pressure position error coefficient for the negative X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_PCOEF_XN/longDesc</name>
    <message>
      <source>This is the ratio of static pressure error to dynamic pressure generated by a negative wind relative velocity along the X body axis. If the baro height estimate rises during backwards flight, then this will be a negative number.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_PCOEF_XP/shortDesc</name>
    <message>
      <source>Static pressure position error coefficient for the positive X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_PCOEF_XP/longDesc</name>
    <message>
      <source>This is the ratio of static pressure error to dynamic pressure generated by a positive wind relative velocity along the X body axis. If the baro height estimate rises during forward flight, then this will be a negative number.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_PCOEF_YN/shortDesc</name>
    <message>
      <source>Pressure position error coefficient for the negative Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_PCOEF_YN/longDesc</name>
    <message>
      <source>This is the ratio of static pressure error to dynamic pressure generated by a wind relative velocity along the negative Y (LH) body axis. If the baro height estimate rises during sideways flight to the left, then this will be a negative number.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_PCOEF_YP/shortDesc</name>
    <message>
      <source>Pressure position error coefficient for the positive Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_PCOEF_YP/longDesc</name>
    <message>
      <source>This is the ratio of static pressure error to dynamic pressure generated by a wind relative velocity along the positive Y (RH) body axis. If the baro height estimate rises during sideways flight to the right, then this will be a negative number.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_PCOEF_Z/shortDesc</name>
    <message>
      <source>Static pressure position error coefficient for the Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_PCOEF_Z/longDesc</name>
    <message>
      <source>This is the ratio of static pressure error to dynamic pressure generated by a wind relative velocity along the Z body axis.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_REQ_EPH/shortDesc</name>
    <message>
      <source>Required EPH to use GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_REQ_EPV/shortDesc</name>
    <message>
      <source>Required EPV to use GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_REQ_GPS_H/shortDesc</name>
    <message>
      <source>Required GPS health time on startup</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_REQ_GPS_H/longDesc</name>
    <message>
      <source>Minimum continuous period without GPS failure required to mark a healthy GPS status. It can be reduced to speed up initialization, but it's recommended to keep this unchanged for a vehicle.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_REQ_HDRIFT/shortDesc</name>
    <message>
      <source>Maximum horizontal drift speed to use GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_REQ_NSATS/shortDesc</name>
    <message>
      <source>Required satellite count to use GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_REQ_PDOP/shortDesc</name>
    <message>
      <source>Maximum PDOP to use GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_REQ_SACC/shortDesc</name>
    <message>
      <source>Required speed accuracy to use GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_REQ_VDRIFT/shortDesc</name>
    <message>
      <source>Maximum vertical drift speed to use GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_AID/shortDesc</name>
    <message>
      <source>Range sensor aid</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_AID/longDesc</name>
    <message>
      <source>WARNING: Deprecated, use MPC_ALT_MODE instead. This feature will be removed in the next release If this parameter is enabled then the estimator will make use of the range finder measurements to estimate it's height even if range sensor is not the primary height source. It will only do so if conditions for range measurement fusion are met. This enables the range finder to be used during low speed and low altitude operation, eg takeoff and landing, where baro interference from rotor wash is excessive and can corrupt EKF state estimates. It is intended to be used where a vertical takeoff and landing is performed, and horizontal flight does not occur until above EKF2_RNG_A_HMAX. If vehicle motion causes repeated switching between the primary height sensor and range finder, an offset in the local position origin can accumulate. Also range finder measurements are less reliable and can experience unexpected errors. For these reasons, if accurate control of height relative to ground is required, it is recommended to use the MPC_ALT_MODE parameter instead, unless baro errors are severe enough to cause problems with landing and takeoff.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_AID/values/0/description</name>
    <message>
      <source>Range aid disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_AID/values/1/description</name>
    <message>
      <source>Range aid enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_A_HMAX/shortDesc</name>
    <message>
      <source>Maximum absolute altitude (height above ground level) allowed for range aid mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_A_HMAX/longDesc</name>
    <message>
      <source>If the vehicle absolute altitude exceeds this value then the estimator will not fuse range measurements to estimate it's height. This only applies when range aid mode is activated (EKF2_RNG_AID = enabled).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_A_IGATE/shortDesc</name>
    <message>
      <source>Gate size used for innovation consistency checks for range aid fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_A_IGATE/longDesc</name>
    <message>
      <source>A lower value means HAGL needs to be more stable in order to use range finder for height estimation in range aid mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_A_VMAX/shortDesc</name>
    <message>
      <source>Maximum horizontal velocity allowed for range aid mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_A_VMAX/longDesc</name>
    <message>
      <source>If the vehicle horizontal speed exceeds this value then the estimator will not fuse range measurements to estimate it's height. This only applies when range aid mode is activated (EKF2_RNG_AID = enabled).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_DELAY/shortDesc</name>
    <message>
      <source>Range finder measurement delay relative to IMU measurements</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_GATE/shortDesc</name>
    <message>
      <source>Gate size for range finder fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_GATE/longDesc</name>
    <message>
      <source>Sets the number of standard deviations used by the innovation consistency test.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_NOISE/shortDesc</name>
    <message>
      <source>Measurement noise for range finder fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_PITCH/shortDesc</name>
    <message>
      <source>Range sensor pitch offset</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_POS_X/shortDesc</name>
    <message>
      <source>X position of range finder origin in body frame (forward axis with origin relative to vehicle centre of gravity)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_POS_Y/shortDesc</name>
    <message>
      <source>Y position of range finder origin in body frame (right axis with origin relative to vehicle centre of gravity)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_POS_Z/shortDesc</name>
    <message>
      <source>Z position of range finder origin in body frame (down axis with origin relative to vehicle centre of gravity)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_QLTY_T/shortDesc</name>
    <message>
      <source>Minimum duration during which the reported range finder signal quality needs to be non-zero in order to be declared valid (s)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_SFE/shortDesc</name>
    <message>
      <source>Range finder range dependant noise scaler</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_RNG_SFE/longDesc</name>
    <message>
      <source>Specifies the increase in range finder noise with range.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_SEL_ERR_RED/shortDesc</name>
    <message>
      <source>Selector error reduce threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_SEL_ERR_RED/longDesc</name>
    <message>
      <source>EKF2 instances have to be better than the selected by at least this amount before their relative score can be reduced.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_SEL_IMU_ACC/shortDesc</name>
    <message>
      <source>Selector acceleration threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_SEL_IMU_ACC/longDesc</name>
    <message>
      <source>EKF2 selector acceleration error threshold for comparing accelerometers. Acceleration vector differences larger than this will result in accumulated velocity error.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_SEL_IMU_ANG/shortDesc</name>
    <message>
      <source>Selector angular threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_SEL_IMU_ANG/longDesc</name>
    <message>
      <source>EKF2 selector maximum accumulated angular error threshold for comparing gyros. Accumulated angular error larger than this will result in the sensor being declared faulty.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_SEL_IMU_RAT/shortDesc</name>
    <message>
      <source>Selector angular rate threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_SEL_IMU_RAT/longDesc</name>
    <message>
      <source>EKF2 selector angular rate error threshold for comparing gyros. Angular rate vector differences larger than this will result in accumulated angular error.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_SEL_IMU_VEL/shortDesc</name>
    <message>
      <source>Selector angular threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_SEL_IMU_VEL/longDesc</name>
    <message>
      <source>EKF2 selector maximum accumulated velocity threshold for comparing accelerometers. Accumulated velocity error larger than this will result in the sensor being declared faulty.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_SYNT_MAG_Z/shortDesc</name>
    <message>
      <source>Enable synthetic magnetometer Z component measurement</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_SYNT_MAG_Z/longDesc</name>
    <message>
      <source>Use for vehicles where the measured body Z magnetic field is subject to strong magnetic interference. For magnetic heading fusion the magnetometer Z measurement will be replaced by a synthetic value calculated using the knowledge of the 3D magnetic field vector at the location of the drone. Therefore, this parameter will only have an effect if the global position of the drone is known. For 3D mag fusion the magnetometer Z measurement will simply be ingored instead of fusing the synthetic value.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_SYNT_MAG_Z/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_SYNT_MAG_Z/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_TAS_GATE/shortDesc</name>
    <message>
      <source>Gate size for TAS fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_TAS_GATE/longDesc</name>
    <message>
      <source>Sets the number of standard deviations used by the innovation consistency test.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_TAU_POS/shortDesc</name>
    <message>
      <source>Time constant of the position output prediction and smoothing filter. Controls how tightly the output track the EKF states</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_TAU_VEL/shortDesc</name>
    <message>
      <source>Time constant of the velocity output prediction and smoothing filter</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_TERR_GRAD/shortDesc</name>
    <message>
      <source>Magnitude of terrain gradient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_TERR_MASK/shortDesc</name>
    <message>
      <source>Integer bitmask controlling fusion sources of the terrain estimator</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_TERR_MASK/longDesc</name>
    <message>
      <source>Set bits in the following positions to enable: 0 : Set to true to use range finder data if available 1 : Set to true to use optical flow data if available</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_TERR_MASK/bitmask/0/description</name>
    <message>
      <source>use range finder</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_TERR_MASK/bitmask/1/description</name>
    <message>
      <source>use optical flow</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_TERR_NOISE/shortDesc</name>
    <message>
      <source>Terrain altitude process noise - accounts for instability in vehicle height estimate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EKF2_WIND_NOISE/shortDesc</name>
    <message>
      <source>Process noise for wind velocity prediction</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ESC_BL_VER/shortDesc</name>
    <message>
      <source>Required esc bootloader version</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ESC_FW_VER/shortDesc</name>
    <message>
      <source>Required esc firmware version</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ESC_HW_VER/shortDesc</name>
    <message>
      <source>Required esc hardware version</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EV_TSK_RC_LOSS/shortDesc</name>
    <message>
      <source>RC Loss Alarm</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EV_TSK_RC_LOSS/longDesc</name>
    <message>
      <source>Enable/disable event task for RC Loss. When enabled, an alarm tune will be played via buzzer or ESCs, if supported. The alarm will sound after a disarm, if the vehicle was previously armed and only if the vehicle had RC signal at some point. Particularly useful for locating crashed drones without a GPS sensor.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EV_TSK_RC_LOSS/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EV_TSK_RC_LOSS/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EV_TSK_STAT_DIS/shortDesc</name>
    <message>
      <source>Status Display</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EV_TSK_STAT_DIS/longDesc</name>
    <message>
      <source>Enable/disable event task for displaying the vehicle status using arm-mounted LEDs. When enabled and if the vehicle supports it, LEDs will flash indicating various vehicle status changes. Currently PX4 has not implemented any specific status events. -</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EV_TSK_STAT_DIS/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EV_TSK_STAT_DIS/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ACRO_X_MAX/shortDesc</name>
    <message>
      <source>Acro body x max rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ACRO_X_MAX/longDesc</name>
    <message>
      <source>This is the rate the controller is trying to achieve if the user applies full roll stick input in acro mode.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ACRO_Y_MAX/shortDesc</name>
    <message>
      <source>Acro body y max rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ACRO_Y_MAX/longDesc</name>
    <message>
      <source>This is the body y rate the controller is trying to achieve if the user applies full pitch stick input in acro mode.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ACRO_Z_MAX/shortDesc</name>
    <message>
      <source>Acro body z max rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ACRO_Z_MAX/longDesc</name>
    <message>
      <source>This is the body z rate the controller is trying to achieve if the user applies full yaw stick input in acro mode.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AIRSPD_TRIM/shortDesc</name>
    <message>
      <source>Trim / Cruise airspeed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AIRSPD_TRIM/longDesc</name>
    <message>
      <source>This is the default cruise airspeed setpoint (calibrated airspeed) used by the system in assisted and autonomous control modes if no other airspeed setpoint is given. It is also used for control surface effectiveness scaling: It is the cruise airspeed around which the airspeed scaling is applied (scaling = FW_AIRSPD_TRIM / calibrated_airspeed).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ARSP_MODE/shortDesc</name>
    <message>
      <source>Airspeed mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ARSP_MODE/longDesc</name>
    <message>
      <source>For small wings or VTOL without airspeed sensor this parameter can be used to enable flying without an airspeed reading</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ARSP_MODE/values/0/description</name>
    <message>
      <source>Normal (use airspeed if available)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ARSP_MODE/values/1/description</name>
    <message>
      <source>Airspeed disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ARSP_SCALE_EN/shortDesc</name>
    <message>
      <source>Enable airspeed scaling</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ARSP_SCALE_EN/longDesc</name>
    <message>
      <source>This enables a logic that automatically adjusts the output of the rate controller to take into account the real torque produced by an aerodynamic control surface given the current deviation from the trim airspeed (FW_AIRSPD_TRIM). Enable when using aerodynamic control surfaces (e.g.: plane) Disable when using rotor wings (e.g.: autogyro)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ARSP_SCALE_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ARSP_SCALE_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_BAT_SCALE_EN/shortDesc</name>
    <message>
      <source>Whether to scale throttle by battery power level</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_BAT_SCALE_EN/longDesc</name>
    <message>
      <source>This compensates for voltage drop of the battery over time by attempting to normalize performance across the operating range of the battery. The fixed wing should constantly behave as if it was fully charged with reduced max thrust at lower battery percentages. i.e. if cruise speed is at 0.5 throttle at 100% battery, it will still be 0.5 at 60% battery.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_BAT_SCALE_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_BAT_SCALE_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_P_FLPS/shortDesc</name>
    <message>
      <source>Pitch trim increment for flaps configuration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_P_FLPS/longDesc</name>
    <message>
      <source>This increment is added to the pitch trim whenever flaps are fully deployed.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_P_VMAX/shortDesc</name>
    <message>
      <source>Pitch trim increment at maximum airspeed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_P_VMAX/longDesc</name>
    <message>
      <source>This increment is added to TRIM_PITCH when airspeed is FW_AIRSPD_MAX.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_P_VMIN/shortDesc</name>
    <message>
      <source>Pitch trim increment at minimum airspeed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_P_VMIN/longDesc</name>
    <message>
      <source>This increment is added to TRIM_PITCH when airspeed is FW_AIRSPD_MIN.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_R_FLPS/shortDesc</name>
    <message>
      <source>Roll trim increment for flaps configuration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_R_FLPS/longDesc</name>
    <message>
      <source>This increment is added to TRIM_ROLL whenever flaps are fully deployed.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_R_VMAX/shortDesc</name>
    <message>
      <source>Roll trim increment at maximum airspeed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_R_VMAX/longDesc</name>
    <message>
      <source>This increment is added to TRIM_ROLL when airspeed is FW_AIRSPD_MAX.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_R_VMIN/shortDesc</name>
    <message>
      <source>Roll trim increment at minimum airspeed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_R_VMIN/longDesc</name>
    <message>
      <source>This increment is added to TRIM_ROLL when airspeed is FW_AIRSPD_MIN.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_Y_VMAX/shortDesc</name>
    <message>
      <source>Yaw trim increment at maximum airspeed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_Y_VMAX/longDesc</name>
    <message>
      <source>This increment is added to TRIM_YAW when airspeed is FW_AIRSPD_MAX.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_Y_VMIN/shortDesc</name>
    <message>
      <source>Yaw trim increment at minimum airspeed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_DTRIM_Y_VMIN/longDesc</name>
    <message>
      <source>This increment is added to TRIM_YAW when airspeed is FW_AIRSPD_MIN.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_FLAPERON_SCL/shortDesc</name>
    <message>
      <source>Scale factor for flaperons</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_FLAPS_LND_SCL/shortDesc</name>
    <message>
      <source>Flaps setting during landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_FLAPS_LND_SCL/longDesc</name>
    <message>
      <source>Sets a fraction of full flaps (FW_FLAPS_SCL) during landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_FLAPS_SCL/shortDesc</name>
    <message>
      <source>Scale factor for flaps</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_FLAPS_TO_SCL/shortDesc</name>
    <message>
      <source>Flaps setting during take-off</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_FLAPS_TO_SCL/longDesc</name>
    <message>
      <source>Sets a fraction of full flaps (FW_FLAPS_SCL) during take-off</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_MAN_P_MAX/shortDesc</name>
    <message>
      <source>Max manual pitch</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_MAN_P_MAX/longDesc</name>
    <message>
      <source>Max pitch for manual control in attitude stabilized mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_MAN_P_SC/shortDesc</name>
    <message>
      <source>Manual pitch scale</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_MAN_P_SC/longDesc</name>
    <message>
      <source>Scale factor applied to the desired pitch actuator command in full manual mode. This parameter allows to adjust the throws of the control surfaces.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_MAN_R_MAX/shortDesc</name>
    <message>
      <source>Max manual roll</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_MAN_R_MAX/longDesc</name>
    <message>
      <source>Max roll for manual control in attitude stabilized mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_MAN_R_SC/shortDesc</name>
    <message>
      <source>Manual roll scale</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_MAN_R_SC/longDesc</name>
    <message>
      <source>Scale factor applied to the desired roll actuator command in full manual mode. This parameter allows to adjust the throws of the control surfaces.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_MAN_Y_SC/shortDesc</name>
    <message>
      <source>Manual yaw scale</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_MAN_Y_SC/longDesc</name>
    <message>
      <source>Scale factor applied to the desired yaw actuator command in full manual mode. This parameter allows to adjust the throws of the control surfaces.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_PR_FF/shortDesc</name>
    <message>
      <source>Pitch rate feed forward</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_PR_FF/longDesc</name>
    <message>
      <source>Direct feed forward from rate setpoint to control surface output</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_PR_I/shortDesc</name>
    <message>
      <source>Pitch rate integrator gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_PR_I/longDesc</name>
    <message>
      <source>This gain defines how much control response will result out of a steady state error. It trims any constant error.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_PR_IMAX/shortDesc</name>
    <message>
      <source>Pitch rate integrator limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_PR_IMAX/longDesc</name>
    <message>
      <source>The portion of the integrator part in the control surface deflection is limited to this value</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_PR_P/shortDesc</name>
    <message>
      <source>Pitch rate proportional gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_PR_P/longDesc</name>
    <message>
      <source>This defines how much the elevator input will be commanded depending on the current body angular rate error.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_PSP_OFF/shortDesc</name>
    <message>
      <source>Pitch setpoint offset (pitch at level flight)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_PSP_OFF/longDesc</name>
    <message>
      <source>An airframe specific offset of the pitch setpoint in degrees, the value is added to the pitch setpoint and should correspond to the pitch at typical cruise speed of the airframe.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_P_RMAX_NEG/shortDesc</name>
    <message>
      <source>Maximum negative / down pitch rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_P_RMAX_NEG/longDesc</name>
    <message>
      <source>This limits the maximum pitch down up angular rate the controller will output (in degrees per second).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_P_RMAX_POS/shortDesc</name>
    <message>
      <source>Maximum positive / up pitch rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_P_RMAX_POS/longDesc</name>
    <message>
      <source>This limits the maximum pitch up angular rate the controller will output (in degrees per second).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_P_TC/shortDesc</name>
    <message>
      <source>Attitude pitch time constant</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_P_TC/longDesc</name>
    <message>
      <source>This defines the latency between a pitch step input and the achieved setpoint (inverse to a P gain). Half a second is a good start value and fits for most average systems. Smaller systems may require smaller values, but as this will wear out servos faster, the value should only be decreased as needed.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_RLL_TO_YAW_FF/shortDesc</name>
    <message>
      <source>Roll control to yaw control feedforward gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_RLL_TO_YAW_FF/longDesc</name>
    <message>
      <source>This gain can be used to counteract the "adverse yaw" effect for fixed wings. When the plane enters a roll it will tend to yaw the nose out of the turn. This gain enables the use of a yaw actuator (rudder, airbrakes, ...) to counteract this effect.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_RR_FF/shortDesc</name>
    <message>
      <source>Roll rate feed forward</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_RR_FF/longDesc</name>
    <message>
      <source>Direct feed forward from rate setpoint to control surface output. Use this to obtain a tigher response of the controller without introducing noise amplification.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_RR_I/shortDesc</name>
    <message>
      <source>Roll rate integrator Gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_RR_I/longDesc</name>
    <message>
      <source>This gain defines how much control response will result out of a steady state error. It trims any constant error.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_RR_IMAX/shortDesc</name>
    <message>
      <source>Roll integrator anti-windup</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_RR_IMAX/longDesc</name>
    <message>
      <source>The portion of the integrator part in the control surface deflection is limited to this value.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_RR_P/shortDesc</name>
    <message>
      <source>Roll rate proportional Gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_RR_P/longDesc</name>
    <message>
      <source>This defines how much the aileron input will be commanded depending on the current body angular rate error.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_R_RMAX/shortDesc</name>
    <message>
      <source>Maximum roll rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_R_RMAX/longDesc</name>
    <message>
      <source>This limits the maximum roll rate the controller will output (in degrees per second).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_R_TC/shortDesc</name>
    <message>
      <source>Attitude Roll Time Constant</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_R_TC/longDesc</name>
    <message>
      <source>This defines the latency between a roll step input and the achieved setpoint (inverse to a P gain). Half a second is a good start value and fits for most average systems. Smaller systems may require smaller values, but as this will wear out servos faster, the value should only be decreased as needed.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_WR_FF/shortDesc</name>
    <message>
      <source>Wheel steering rate feed forward</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_WR_FF/longDesc</name>
    <message>
      <source>Direct feed forward from rate setpoint to control surface output</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_WR_I/shortDesc</name>
    <message>
      <source>Wheel steering rate integrator gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_WR_I/longDesc</name>
    <message>
      <source>This gain defines how much control response will result out of a steady state error. It trims any constant error.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_WR_IMAX/shortDesc</name>
    <message>
      <source>Wheel steering rate integrator limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_WR_IMAX/longDesc</name>
    <message>
      <source>The portion of the integrator part in the control surface deflection is limited to this value</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_WR_P/shortDesc</name>
    <message>
      <source>Wheel steering rate proportional gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_WR_P/longDesc</name>
    <message>
      <source>This defines how much the wheel steering input will be commanded depending on the current body angular rate error.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_W_EN/shortDesc</name>
    <message>
      <source>Enable wheel steering controller</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_W_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_W_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_W_RMAX/shortDesc</name>
    <message>
      <source>Maximum wheel steering rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_W_RMAX/longDesc</name>
    <message>
      <source>This limits the maximum wheel steering rate the controller will output (in degrees per second).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_YR_FF/shortDesc</name>
    <message>
      <source>Yaw rate feed forward</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_YR_FF/longDesc</name>
    <message>
      <source>Direct feed forward from rate setpoint to control surface output</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_YR_I/shortDesc</name>
    <message>
      <source>Yaw rate integrator gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_YR_I/longDesc</name>
    <message>
      <source>This gain defines how much control response will result out of a steady state error. It trims any constant error.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_YR_IMAX/shortDesc</name>
    <message>
      <source>Yaw rate integrator limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_YR_IMAX/longDesc</name>
    <message>
      <source>The portion of the integrator part in the control surface deflection is limited to this value</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_YR_P/shortDesc</name>
    <message>
      <source>Yaw rate proportional gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_YR_P/longDesc</name>
    <message>
      <source>This defines how much the rudder input will be commanded depending on the current body angular rate error.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_Y_RMAX/shortDesc</name>
    <message>
      <source>Maximum yaw rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_Y_RMAX/longDesc</name>
    <message>
      <source>This limits the maximum yaw rate the controller will output (in degrees per second).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_CLMBOUT_DIFF/shortDesc</name>
    <message>
      <source>Climbout Altitude difference</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_CLMBOUT_DIFF/longDesc</name>
    <message>
      <source>If the altitude error exceeds this parameter, the system will climb out with maximum throttle and minimum airspeed until it is closer than this distance to the desired altitude. Mostly used for takeoff waypoints / modes. Set to 0 to disable climbout mode (not recommended).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_L1_DAMPING/shortDesc</name>
    <message>
      <source>L1 damping</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_L1_DAMPING/longDesc</name>
    <message>
      <source>Damping factor for L1 control.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_L1_PERIOD/shortDesc</name>
    <message>
      <source>L1 period</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_L1_PERIOD/longDesc</name>
    <message>
      <source>Used to determine the L1 gain and controller time constant. This parameter is proportional to the L1 distance (which points ahead of the aircraft on the path it is following). A value of 18-25 seconds works for most aircraft. Shorten slowly during tuning until response is sharp without oscillation.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_L1_R_SLEW_MAX/shortDesc</name>
    <message>
      <source>L1 controller roll slew rate limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_L1_R_SLEW_MAX/longDesc</name>
    <message>
      <source>The maxium change in roll angle setpoint per second.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_AIRSPD_SC/shortDesc</name>
    <message>
      <source>Min. airspeed scaling factor for landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_AIRSPD_SC/longDesc</name>
    <message>
      <source>Multiplying this factor with the minimum airspeed of the plane gives the target airspeed the landing approach. FW_AIRSPD_MIN * FW_LND_AIRSPD_SC</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_ANG/shortDesc</name>
    <message>
      <source>Landing slope angle</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_EARLYCFG/shortDesc</name>
    <message>
      <source>Early landing configuration deployment</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_EARLYCFG/longDesc</name>
    <message>
      <source>When disabled, the landing configuration (flaps, landing airspeed, etc.) is only activated on the final approach to landing. When enabled, it is already activated when entering the final loiter-down (loiter-to-alt) waypoint before the landing approach. This shifts the (often large) altitude and airspeed errors caused by the configuration change away from the ground such that these are not so critical. It also gives the controller enough time to adapt to the new configuration such that the landing approach starts with a cleaner initial state.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_EARLYCFG/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_EARLYCFG/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_FLALT/shortDesc</name>
    <message>
      <source>Landing flare altitude (relative to landing altitude)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_FL_PMAX/shortDesc</name>
    <message>
      <source>Flare, maximum pitch</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_FL_PMAX/longDesc</name>
    <message>
      <source>Maximum pitch during flare, a positive sign means nose up Applied once FW_LND_FLALT is reached</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_FL_PMIN/shortDesc</name>
    <message>
      <source>Flare, minimum pitch</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_FL_PMIN/longDesc</name>
    <message>
      <source>Minimum pitch during flare, a positive sign means nose up Applied once FW_LND_FLALT is reached</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_HHDIST/shortDesc</name>
    <message>
      <source>Landing heading hold horizontal distance</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_HHDIST/longDesc</name>
    <message>
      <source>Set to 0 to disable heading hold.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_HVIRT/shortDesc</name>
    <message>
      <source>FW_LND_HVIRT</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_THRTC_SC/shortDesc</name>
    <message>
      <source>Altitude time constant factor for landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_THRTC_SC/longDesc</name>
    <message>
      <source>Set this parameter to less than 1.0 to make TECS react faster to altitude errors during landing than during normal flight (i.e. giving efficiency and low motor wear at high altitudes but control accuracy during landing). During landing, the TECS altitude time constant (FW_T_ALT_TC) is multiplied by this value.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_TLALT/shortDesc</name>
    <message>
      <source>Landing throttle limit altitude (relative landing altitude)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_TLALT/longDesc</name>
    <message>
      <source>Default of -1.0 lets the system default to applying throttle limiting at 2/3 of the flare altitude.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_USETER/shortDesc</name>
    <message>
      <source>Use terrain estimate during landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_USETER/longDesc</name>
    <message>
      <source>This is turned off by default and a waypoint or return altitude is normally used (or sea level for an arbitrary land position).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_USETER/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_LND_USETER/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_POS_STK_CONF/shortDesc</name>
    <message>
      <source>RC stick mapping fixed-wing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_POS_STK_CONF/longDesc</name>
    <message>
      <source>Set RC/joystick configuration for fixed-wing position and altitude controlled flight.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_POS_STK_CONF/bitmask/0/description</name>
    <message>
      <source>Alternative stick configuration (altitude on throttle stick, airspeed on pitch stick)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_POS_STK_CONF/bitmask/1/description</name>
    <message>
      <source>Enable airspeed setpoint via sticks in altitude and position flight mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_P_LIM_MAX/shortDesc</name>
    <message>
      <source>Positive pitch limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_P_LIM_MAX/longDesc</name>
    <message>
      <source>The maximum positive pitch the controller will output.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_P_LIM_MIN/shortDesc</name>
    <message>
      <source>Negative pitch limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_P_LIM_MIN/longDesc</name>
    <message>
      <source>The minimum negative pitch the controller will output.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_R_LIM/shortDesc</name>
    <message>
      <source>Controller roll limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_R_LIM/longDesc</name>
    <message>
      <source>The maximum roll the controller will output.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_ALT_SCL/shortDesc</name>
    <message>
      <source>Scale throttle by pressure change</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_ALT_SCL/longDesc</name>
    <message>
      <source>Automatically adjust throttle to account for decreased air density at higher altitudes. Start with a scale factor of 1.0 and adjust for different propulsion systems. When flying without airspeed sensor this will help to keep a constant performance over large altitude ranges. The default value of 0 will disable scaling.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_CRUISE/shortDesc</name>
    <message>
      <source>Cruise throttle</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_CRUISE/longDesc</name>
    <message>
      <source>This is the throttle setting required to achieve the desired cruise speed. Most airframes have a value of 0.5-0.7.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_IDLE/shortDesc</name>
    <message>
      <source>Idle throttle</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_IDLE/longDesc</name>
    <message>
      <source>This is the minimum throttle while on the ground For aircraft with internal combustion engine this parameter should be set above desired idle rpm.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_LND_MAX/shortDesc</name>
    <message>
      <source>Throttle limit during landing below throttle limit altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_LND_MAX/longDesc</name>
    <message>
      <source>During the flare of the autonomous landing process, this value will be set as throttle limit when the aircraft altitude is below FW_LND_TLALT.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_MAX/shortDesc</name>
    <message>
      <source>Throttle limit max</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_MAX/longDesc</name>
    <message>
      <source>This is the maximum throttle % that can be used by the controller. For overpowered aircraft, this should be reduced to a value that provides sufficient thrust to climb at the maximum pitch angle PTCH_MAX.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_MAX_E/shortDesc</name>
    <message>
      <source>Eco Mode: Throttle limit max</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_MAX_E/longDesc</name>
    <message>
      <source>APX4 custom parameter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_MIN/shortDesc</name>
    <message>
      <source>Throttle limit min</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_MIN/longDesc</name>
    <message>
      <source>This is the minimum throttle % that can be used by the controller. For electric aircraft this will normally be set to zero, but can be set to a small non-zero value if a folding prop is fitted to prevent the prop from folding and unfolding repeatedly in-flight or to provide some aerodynamic drag from a turning prop to improve the descent rate. For aircraft with internal combustion engine this parameter should be set for desired idle rpm.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_SLEW_MAX/shortDesc</name>
    <message>
      <source>Throttle max slew rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_THR_SLEW_MAX/longDesc</name>
    <message>
      <source>Maximum slew rate for the commanded throttle</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_TKO_PITCH_MIN/shortDesc</name>
    <message>
      <source>Minimum pitch during takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LAUN_ALL_ON/shortDesc</name>
    <message>
      <source>Launch detection</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LAUN_ALL_ON/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LAUN_ALL_ON/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LAUN_CAT_A/shortDesc</name>
    <message>
      <source>Catapult accelerometer threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LAUN_CAT_A/longDesc</name>
    <message>
      <source>LAUN_CAT_A for LAUN_CAT_T serves as threshold to trigger launch detection.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LAUN_CAT_MDEL/shortDesc</name>
    <message>
      <source>Motor delay</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LAUN_CAT_MDEL/longDesc</name>
    <message>
      <source>Delay between starting attitude control and powering up the throttle (giving throttle control to the controller) Before this timespan is up the throttle will be set to FW_THR_IDLE, set to 0 to deactivate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LAUN_CAT_PMAX/shortDesc</name>
    <message>
      <source>Maximum pitch before the throttle is powered up (during motor delay phase)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LAUN_CAT_PMAX/longDesc</name>
    <message>
      <source>This is an extra limit for the maximum pitch which is imposed in the phase before the throttle turns on. This allows to limit the maximum pitch angle during a bungee launch (make the launch less steep).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LAUN_CAT_T/shortDesc</name>
    <message>
      <source>Catapult time threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LAUN_CAT_T/longDesc</name>
    <message>
      <source>LAUN_CAT_A for LAUN_CAT_T serves as threshold to trigger launch detection.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_USE_NPFG/shortDesc</name>
    <message>
      <source>Use NPFG as lateral-directional guidance law for fixed-wing vehicles</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_USE_NPFG/longDesc</name>
    <message>
      <source>Replaces L1.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_USE_NPFG/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_USE_NPFG/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_DAMPING/shortDesc</name>
    <message>
      <source>NPFG damping ratio</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_DAMPING/longDesc</name>
    <message>
      <source>Damping ratio of the NPFG control law.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_EN_MIN_GSP/shortDesc</name>
    <message>
      <source>Enable minimum forward ground speed maintaining excess wind handling logic</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_EN_MIN_GSP/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_EN_MIN_GSP/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_GSP_MAX_TK/shortDesc</name>
    <message>
      <source>Maximum, minimum forward ground speed for track keeping in excess wind</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_GSP_MAX_TK/longDesc</name>
    <message>
      <source>The maximum value of the minimum forward ground speed that may be commanded by the track keeping excess wind handling logic. Commanded in full at the normalized track error fraction of the track error boundary and reduced to zero on track.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_LB_PERIOD/shortDesc</name>
    <message>
      <source>Enable automatic lower bound on the NPFG period</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_LB_PERIOD/longDesc</name>
    <message>
      <source>Avoids limit cycling from a too aggressively tuned period/damping combination. If set to false, also disables the upper bound NPFG_PERIOD_UB.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_LB_PERIOD/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_LB_PERIOD/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_PERIOD/shortDesc</name>
    <message>
      <source>NPFG period</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_PERIOD/longDesc</name>
    <message>
      <source>Period of the NPFG control law.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_PERIOD_SF/shortDesc</name>
    <message>
      <source>Period safety factor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_PERIOD_SF/longDesc</name>
    <message>
      <source>Multiplied by period for conservative minimum period bounding (when period lower bounding is enabled). 1.0 bounds at marginal stability.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_ROLL_TC/shortDesc</name>
    <message>
      <source>Roll time constant</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_ROLL_TC/longDesc</name>
    <message>
      <source>Time constant of roll controller command / response, modeled as first order delay. Used to determine lower period bound. Setting zero disables automatic period bounding.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_SW_DST_MLT/shortDesc</name>
    <message>
      <source>NPFG switch distance multiplier</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_SW_DST_MLT/longDesc</name>
    <message>
      <source>Multiplied by the track error boundary to determine when the aircraft switches to the next waypoint and/or path segment. Should be less than 1. 1/pi (0.32) sets the switch distance equivalent to that of the L1 controller.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_TRACK_KEEP/shortDesc</name>
    <message>
      <source>Enable track keeping excess wind handling logic</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_TRACK_KEEP/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_TRACK_KEEP/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_UB_PERIOD/shortDesc</name>
    <message>
      <source>Enable automatic upper bound on the NPFG period</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_UB_PERIOD/longDesc</name>
    <message>
      <source>Adapts period to maintain track keeping in variable winds and path curvature.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_UB_PERIOD/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_UB_PERIOD/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_WIND_REG/shortDesc</name>
    <message>
      <source>Enable wind excess regulation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_WIND_REG/longDesc</name>
    <message>
      <source>Disabling this parameter further disables all other airspeed incrementation options.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_WIND_REG/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NPFG_WIND_REG/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AIRSPD_MAX/shortDesc</name>
    <message>
      <source>Maximum Airspeed (CAS)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AIRSPD_MAX/longDesc</name>
    <message>
      <source>If the CAS (calibrated airspeed) is above this value, the TECS controller will try to decrease airspeed more aggressively.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AIRSPD_MIN/shortDesc</name>
    <message>
      <source>Minimum Airspeed (CAS)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AIRSPD_MIN/longDesc</name>
    <message>
      <source>The minimal airspeed (calibrated airspeed) the user is able to command. Further, if the airspeed falls below this value, the TECS controller will try to increase airspeed more aggressively.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AIRSPD_STALL/shortDesc</name>
    <message>
      <source>Stall Airspeed (CAS)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_AIRSPD_STALL/longDesc</name>
    <message>
      <source>The stall airspeed (calibrated airspeed) of the vehicle. It is used for airspeed sensor failure detection and for the control surface scaling airspeed limits.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ECO_AD_THRLD/shortDesc</name>
    <message>
      <source>Airspeed threshold for Eco</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ECO_AD_THRLD/longDesc</name>
    <message>
      <source>Eco mode is disabled if the airspeed setpoint is above this value. APX4 custom parameter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ECO_ALT_ERR_O/shortDesc</name>
    <message>
      <source>Eco TECS mode max altitude overshoot</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ECO_ALT_ERR_O/longDesc</name>
    <message>
      <source>Eco mode is disabled if the current altitude is more than this value above the setpoint. APX4 custom parameter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ECO_ALT_ERR_U/shortDesc</name>
    <message>
      <source>Eco TECS mode max altitude undershoot</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ECO_ALT_ERR_U/longDesc</name>
    <message>
      <source>Eco mode is disabled if the current altitude is more than this value below the setpoint. APX4 custom parameter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ECO_ALT_MIN/shortDesc</name>
    <message>
      <source>Eco TECS mode min altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_ECO_ALT_MIN/longDesc</name>
    <message>
      <source>Eco mode is disabled if the current altitude is below this relative altitude to home. APX4 custom parameter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_GND_SPD_MIN/shortDesc</name>
    <message>
      <source>Minimum groundspeed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_GND_SPD_MIN/longDesc</name>
    <message>
      <source>The controller will increase the commanded airspeed to maintain this minimum groundspeed to the next waypoint.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_ALT_TC/shortDesc</name>
    <message>
      <source>Altitude error time constant</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_ALT_TC_E/shortDesc</name>
    <message>
      <source>Eco Mode: Altitude error time constant</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_ALT_TC_E/longDesc</name>
    <message>
      <source>Normally larger than FW_T_ALT_TC to have looser altitude control and in turn less throttle changes. APX4 custom parameter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_CLMB_MAX/shortDesc</name>
    <message>
      <source>Maximum climb rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_CLMB_MAX/longDesc</name>
    <message>
      <source>This is the best climb rate that the aircraft can achieve with the throttle set to THR_MAX and the airspeed set to the default value. For electric aircraft make sure this number can be achieved towards the end of flight when the battery voltage has reduced. The setting of this parameter can be checked by commanding a positive altitude change of 100m in loiter, RTL or guided mode. If the throttle required to climb is close to THR_MAX and the aircraft is maintaining airspeed, then this parameter is set correctly. If the airspeed starts to reduce, then the parameter is set to high, and if the throttle demand required to climb and maintain speed is noticeably less than FW_THR_MAX, then either FW_T_CLMB_MAX should be increased or FW_THR_MAX reduced.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_CLMB_R_SP/shortDesc</name>
    <message>
      <source>Default target climbrate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_CLMB_R_SP/longDesc</name>
    <message>
      <source>The default rate at which the vehicle will climb in autonomous modes to achieve altitude setpoints. In manual modes this defines the maximum rate at which the altitude setpoint can be increased.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_CLMB_R_SP_E/shortDesc</name>
    <message>
      <source>Eco target climbrate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_CLMB_R_SP_E/longDesc</name>
    <message>
      <source>The rate at which the vehicle will climb in autonomous modes to achieve altitude setpoints in Eco mode. APX4 custom parameter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_HRATE_FF/shortDesc</name>
    <message>
      <source>Height rate feed forward</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_I_GAIN_PIT/shortDesc</name>
    <message>
      <source>Integrator gain pitch</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_I_GAIN_PIT/longDesc</name>
    <message>
      <source>This is the integrator gain on the pitch part of the control loop. Increasing this gain increases the speed at which speed and height offsets are trimmed out, but reduces damping and increases overshoot. Set this value to zero to completely disable all integrator action.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_I_GAIN_THR/shortDesc</name>
    <message>
      <source>Integrator gain throttle</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_I_GAIN_THR/longDesc</name>
    <message>
      <source>This is the integrator gain on the throttle part of the control loop. Increasing this gain increases the speed at which speed and height offsets are trimmed out, but reduces damping and increases overshoot. Set this value to zero to completely disable all integrator action.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_PTCH_DAMP/shortDesc</name>
    <message>
      <source>Pitch damping factor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_PTCH_DAMP/longDesc</name>
    <message>
      <source>This is the damping gain for the pitch demand loop. Increase to add damping to correct for oscillations in height. The default value of 0.0 will work well provided the pitch to servo controller has been tuned properly.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_RLL2THR/shortDesc</name>
    <message>
      <source>Roll -&gt; Throttle feedforward</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_RLL2THR/longDesc</name>
    <message>
      <source>Increasing this gain turn increases the amount of throttle that will be used to compensate for the additional drag created by turning. Ideally this should be set to  approximately 10 x the extra sink rate in m/s created by a 45 degree bank turn. Increase this gain if the aircraft initially loses energy in turns and reduce if the aircraft initially gains energy in turns. Efficient high aspect-ratio aircraft (eg powered sailplanes) can use a lower value, whereas inefficient low aspect-ratio models (eg delta wings) can use a higher value.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_SEB_R_FF/shortDesc</name>
    <message>
      <source>Specific total energy balance rate feedforward gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_SINK_MAX/shortDesc</name>
    <message>
      <source>Maximum descent rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_SINK_MAX/longDesc</name>
    <message>
      <source>This sets the maximum descent rate that the controller will use. If this value is too large, the aircraft can over-speed on descent. This should be set to a value that can be achieved without exceeding the lower pitch angle limit and without over-speeding the aircraft.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_SINK_MIN/shortDesc</name>
    <message>
      <source>Minimum descent rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_SINK_MIN/longDesc</name>
    <message>
      <source>This is the sink rate of the aircraft with the throttle set to THR_MIN and flown at the same airspeed as used to measure FW_T_CLMB_MAX.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_SINK_R_SP/shortDesc</name>
    <message>
      <source>Default target sinkrate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_SINK_R_SP/longDesc</name>
    <message>
      <source>The default rate at which the vehicle will sink in autonomous modes to achieve altitude setpoints. In manual modes this defines the maximum rate at which the altitude setpoint can be decreased.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_SPDWEIGHT/shortDesc</name>
    <message>
      <source>Speed &lt;--&gt; Altitude priority</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_SPDWEIGHT/longDesc</name>
    <message>
      <source>This parameter adjusts the amount of weighting that the pitch control applies to speed vs height errors. Setting it to 0.0 will cause the pitch control to control height and ignore speed errors. This will normally improve height accuracy but give larger airspeed errors. Setting it to 2.0 will cause the pitch control loop to control speed and ignore height errors. This will normally reduce airspeed errors, but give larger height errors. The default value of 1.0 allows the pitch control to simultaneously control height and speed. Note to Glider Pilots - set this parameter to 2.0 (The glider will adjust its pitch angle to maintain airspeed, ignoring changes in height).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_SPDWEIGHT_E/shortDesc</name>
    <message>
      <source>Eco Mode: Speed &lt;--&gt; Altitude priority</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_SPDWEIGHT_E/longDesc</name>
    <message>
      <source>APX4 custom parameter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_SPD_OMEGA/shortDesc</name>
    <message>
      <source>Complementary filter "omega" parameter for speed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_SPD_OMEGA/longDesc</name>
    <message>
      <source>This is the cross-over frequency (in radians/second) of the complementary filter used to fuse longitudinal acceleration and airspeed to obtain an improved airspeed estimate. Increasing this frequency weights the solution more towards use of the airspeed sensor, whilst reducing it weights the solution more towards use of the accelerometer data.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_STE_R_TC/shortDesc</name>
    <message>
      <source>Specific total energy rate first order filter time constant</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_STE_R_TC/longDesc</name>
    <message>
      <source>This filter is applied to the specific total energy rate used for throttle damping.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_TAS_R_TC/shortDesc</name>
    <message>
      <source>True airspeed rate first order filter time constant</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_TAS_R_TC/longDesc</name>
    <message>
      <source>This filter is applied to the true airspeed rate.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_TAS_TC/shortDesc</name>
    <message>
      <source>True airspeed error time constant</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_THR_DAMP/shortDesc</name>
    <message>
      <source>Throttle damping factor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_THR_DAMP/longDesc</name>
    <message>
      <source>This is the damping gain for the throttle demand loop. Increase to add damping to correct for oscillations in speed and height.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_VERT_ACC/shortDesc</name>
    <message>
      <source>Maximum vertical acceleration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_T_VERT_ACC/longDesc</name>
    <message>
      <source>This is the maximum vertical acceleration (in m/s/s) either up or down that the controller will use to correct speed or height errors. The default value of 7 m/s/s (equivalent to +- 0.7 g) allows for reasonably aggressive pitch changes if required to recover from under-speed conditions.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_WIND_ARSP_SC/shortDesc</name>
    <message>
      <source>Wind-based airspeed scaling factor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_WIND_ARSP_SC/longDesc</name>
    <message>
      <source>Multiplying this factor with the current absolute wind estimate gives the airspeed offset added to the minimum airspeed setpoint limit. This helps to make the system more robust against disturbances (turbulence) in high wind. The airspeed increase is limited to 3 m/s. APX4 custom parameter. airspeed_min_adjusted = FW_AIRSPD_MIN + FW_WIND_ARSP_SC * wind.length()</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_ACT_EN/shortDesc</name>
    <message>
      <source>Enable Actuator Failure check</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_ACT_EN/longDesc</name>
    <message>
      <source>If enabled, failure detector will verify that for motors, a minimum amount of ESC current per throttle level is being consumed. Otherwise this indicates an motor failure.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_ACT_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_ACT_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_ACT_MOT_C2T/shortDesc</name>
    <message>
      <source>Motor Failure Current/Throttle Threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_ACT_MOT_C2T/longDesc</name>
    <message>
      <source>Motor failure triggers only below this current value</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_ACT_MOT_THR/shortDesc</name>
    <message>
      <source>Motor Failure Throttle Threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_ACT_MOT_THR/longDesc</name>
    <message>
      <source>Motor failure triggers only above this throttle value.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_ACT_MOT_TOUT/shortDesc</name>
    <message>
      <source>Motor Failure Time Threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_ACT_MOT_TOUT/longDesc</name>
    <message>
      <source>Motor failure triggers only if the throttle threshold and the current to throttle threshold are violated for this time.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_BAT_EN/shortDesc</name>
    <message>
      <source>Enable checks on smart batteries that report readiness or faults</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_BAT_EN/longDesc</name>
    <message>
      <source>If enabled, failure detector will verify that all the batteries are in nominal mode and no faults were detected by the batteries. Timeout for receiving a nominal status report from the batteries after arming is 0.5s, if no feedback is received the failure detector will auto disarm the vehicle.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_BAT_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_BAT_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_ESCS_EN/shortDesc</name>
    <message>
      <source>Enable checks on ESCs that report their arming state</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_ESCS_EN/longDesc</name>
    <message>
      <source>If enabled, failure detector will verify that all the ESCs have successfully armed when the vehicle has transitioned to the armed state. Timeout for receiving an acknowledgement from the ESCs is 0.3s, if no feedback is received the failure detector will auto disarm the vehicle.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_ESCS_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_ESCS_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_EXT_ATS_EN/shortDesc</name>
    <message>
      <source>Enable PWM input on for engaging failsafe from an external automatic trigger system (ATS)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_EXT_ATS_EN/longDesc</name>
    <message>
      <source>Enabled on either AUX5 or MAIN5 depending on board. External ATS is required by ASTM F3322-18.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_EXT_ATS_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_EXT_ATS_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_EXT_ATS_TRIG/shortDesc</name>
    <message>
      <source>The PWM threshold from external automatic trigger system for engaging failsafe</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_EXT_ATS_TRIG/longDesc</name>
    <message>
      <source>External ATS is required by ASTM F3322-18.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_FAIL_P/shortDesc</name>
    <message>
      <source>FailureDetector Max Pitch</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_FAIL_P/longDesc</name>
    <message>
      <source>Maximum pitch angle before FailureDetector triggers the attitude_failure flag. The flag triggers flight termination (if @CBRK_FLIGHTTERM = 0), which sets outputs to their failsafe values. On takeoff the flag triggers lockdown (irrespective of @CBRK_FLIGHTTERM), which disarms motors but does not set outputs to failsafe values. Setting this parameter to 0 disables the check</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_FAIL_P_TTRI/shortDesc</name>
    <message>
      <source>Pitch failure trigger time</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_FAIL_P_TTRI/longDesc</name>
    <message>
      <source>Seconds (decimal) that pitch has to exceed FD_FAIL_P before being considered as a failure.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_FAIL_R/shortDesc</name>
    <message>
      <source>FailureDetector Max Roll</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_FAIL_R/longDesc</name>
    <message>
      <source>Maximum roll angle before FailureDetector triggers the attitude_failure flag. The flag triggers flight termination (if @CBRK_FLIGHTTERM = 0), which sets outputs to their failsafe values. On takeoff the flag triggers lockdown (irrespective of @CBRK_FLIGHTTERM), which disarms motors but does not set outputs to failsafe values. Setting this parameter to 0 disables the check</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_FAIL_R_TTRI/shortDesc</name>
    <message>
      <source>Roll failure trigger time</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_FAIL_R_TTRI/longDesc</name>
    <message>
      <source>Seconds (decimal) that roll has to exceed FD_FAIL_R before being considered as a failure.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_IMB_PROP_THR/shortDesc</name>
    <message>
      <source>Imbalanced propeller check threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_IMB_PROP_THR/longDesc</name>
    <message>
      <source>Value at which the imbalanced propeller metric (based on horizontal and vertical acceleration variance) triggers a failure Setting this value to 0 disables the feature.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_WIND_MAX/shortDesc</name>
    <message>
      <source>Maximum wind speed threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FD_WIND_MAX/longDesc</name>
    <message>
      <source>Wind speed threshold above which the emergency action for high wind is triggered and enforced as long as the threshold is exceeded. A negative value disables the feature.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FT_ALT_M/shortDesc</name>
    <message>
      <source>Altitude control mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FT_ALT_M/longDesc</name>
    <message>
      <source>Maintain altitude or track target's altitude. When maintaining the altitude, the drone can crash into terrain when the target moves uphill. When tracking the target's altitude, the follow altitude NAV_MIN_FT_HT should be high enough to prevent terrain collisions due to GPS inaccuracies of the target.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FT_ALT_M/values/0/description</name>
    <message>
      <source>Maintain constant altitude and track XY position only (2D tracking)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FT_ALT_M/values/1/description</name>
    <message>
      <source>Track target's altitude as well (3D tracking)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FT_DST/shortDesc</name>
    <message>
      <source>Distance to follow target from</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FT_DST/longDesc</name>
    <message>
      <source>The distance in meters to follow the target at</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FT_FS/shortDesc</name>
    <message>
      <source>Side to follow target from</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FT_FS/longDesc</name>
    <message>
      <source>The side to follow the target from none         = 0 behind       = 1 front        = 2 front right  = 3 front left   = 4 mid right    = 5 mid left     = 6 behind right = 7 behind left  = 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FT_RS/shortDesc</name>
    <message>
      <source>Dynamic filtering algorithm responsiveness to target movement</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FT_RS/longDesc</name>
    <message>
      <source>lower values increase the responsiveness to changing long lat but also ignore less noise</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_MIN_FT_HT/shortDesc</name>
    <message>
      <source>Minimum follow target altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_MIN_FT_HT/longDesc</name>
    <message>
      <source>The minimum height in meters relative to home for following a target</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_GNSS/shortDesc</name>
    <message>
      <source>GNSS Systems for Primary GPS (integer bitmask)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_GNSS/longDesc</name>
    <message>
      <source>This integer bitmask controls the set of GNSS systems used by the receiver. Check your receiver's documentation on how many systems are supported to be used in parallel. Currently this functionality is just implemented for u-blox receivers. When no bits are set, the receiver's default configuration should be used. Set bits true to enable: 0 : Use GPS (with QZSS) 1 : Use SBAS (multiple GPS augmentation systems) 2 : Use Galileo 3 : Use BeiDou 4 : Use GLONASS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_GNSS/bitmask/0/description</name>
    <message>
      <source>GPS (with QZSS)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_GNSS/bitmask/1/description</name>
    <message>
      <source>SBAS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_GNSS/bitmask/2/description</name>
    <message>
      <source>Galileo</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_GNSS/bitmask/3/description</name>
    <message>
      <source>BeiDou</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_GNSS/bitmask/4/description</name>
    <message>
      <source>GLONASS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_PROTOCOL/shortDesc</name>
    <message>
      <source>Protocol for Main GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_PROTOCOL/longDesc</name>
    <message>
      <source>Select the GPS protocol over serial. Auto-detection will probe all protocols, and thus is a bit slower.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_PROTOCOL/values/0/description</name>
    <message>
      <source>Auto detect</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_PROTOCOL/values/1/description</name>
    <message>
      <source>u-blox</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_PROTOCOL/values/2/description</name>
    <message>
      <source>MTK</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_PROTOCOL/values/3/description</name>
    <message>
      <source>Ashtech / Trimble</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_PROTOCOL/values/4/description</name>
    <message>
      <source>Emlid Reach</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_PROTOCOL/values/5/description</name>
    <message>
      <source>Femtomes</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_1_PROTOCOL/values/6/description</name>
    <message>
      <source>NMEA (generic)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_GNSS/shortDesc</name>
    <message>
      <source>GNSS Systems for Secondary GPS (integer bitmask)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_GNSS/longDesc</name>
    <message>
      <source>This integer bitmask controls the set of GNSS systems used by the receiver. Check your receiver's documentation on how many systems are supported to be used in parallel. Currently this functionality is just implemented for u-blox receivers. When no bits are set, the receiver's default configuration should be used. Set bits true to enable: 0 : Use GPS (with QZSS) 1 : Use SBAS (multiple GPS augmentation systems) 2 : Use Galileo 3 : Use BeiDou 4 : Use GLONASS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_GNSS/bitmask/0/description</name>
    <message>
      <source>GPS (with QZSS)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_GNSS/bitmask/1/description</name>
    <message>
      <source>SBAS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_GNSS/bitmask/2/description</name>
    <message>
      <source>Galileo</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_GNSS/bitmask/3/description</name>
    <message>
      <source>BeiDou</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_GNSS/bitmask/4/description</name>
    <message>
      <source>GLONASS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_PROTOCOL/shortDesc</name>
    <message>
      <source>Protocol for Secondary GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_PROTOCOL/longDesc</name>
    <message>
      <source>Select the GPS protocol over serial. Auto-detection will probe all protocols, and thus is a bit slower.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_PROTOCOL/values/0/description</name>
    <message>
      <source>Auto detect</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_PROTOCOL/values/1/description</name>
    <message>
      <source>u-blox</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_PROTOCOL/values/2/description</name>
    <message>
      <source>MTK</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_PROTOCOL/values/3/description</name>
    <message>
      <source>Ashtech / Trimble</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_PROTOCOL/values/4/description</name>
    <message>
      <source>Emlid Reach</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_PROTOCOL/values/5/description</name>
    <message>
      <source>Femtomes</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_2_PROTOCOL/values/6/description</name>
    <message>
      <source>NMEA (generic)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_DUMP_COMM/shortDesc</name>
    <message>
      <source>Log GPS communication data</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_DUMP_COMM/longDesc</name>
    <message>
      <source>If this is set to 1, all GPS communication data will be published via uORB, and written to the log file as gps_dump message. If this is set to 2, the main GPS is configured to output RTCM data, which is then logged as gps_dump and can be used for PPK.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_DUMP_COMM/values/0/description</name>
    <message>
      <source>Disable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_DUMP_COMM/values/1/description</name>
    <message>
      <source>Full communication</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_DUMP_COMM/values/2/description</name>
    <message>
      <source>RTCM output (PPK)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_UBX_DYNMODEL/shortDesc</name>
    <message>
      <source>u-blox GPS dynamic platform model</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_UBX_DYNMODEL/longDesc</name>
    <message>
      <source>u-blox receivers support different dynamic platform models to adjust the navigation engine to the expected application environment.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_UBX_DYNMODEL/values/2/description</name>
    <message>
      <source>stationary</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_UBX_DYNMODEL/values/4/description</name>
    <message>
      <source>automotive</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_UBX_DYNMODEL/values/6/description</name>
    <message>
      <source>airborne with &lt;1g acceleration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_UBX_DYNMODEL/values/7/description</name>
    <message>
      <source>airborne with &lt;2g acceleration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_UBX_DYNMODEL/values/8/description</name>
    <message>
      <source>airborne with &lt;4g acceleration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_UBX_MODE/shortDesc</name>
    <message>
      <source>u-blox GPS Mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_UBX_MODE/longDesc</name>
    <message>
      <source>Select the u-blox configuration setup. Most setups will use the default, including RTK and dual GPS without heading. The Heading mode requires 2 F9P devices to be attached. The main GPS will act as rover and output heading information, whereas the secondary will act as moving base. Modes 1 and 2 require each F9P UART1 to be connected to the Autopilot. In addition, UART2 on the F9P units are connected to each other. Modes 3 and 4 only require UART1 on each F9P connected to the Autopilot or Can Node. UART RX DMA is required. RTK is still possible with this setup.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_UBX_MODE/values/0/description</name>
    <message>
      <source>Default</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_UBX_MODE/values/1/description</name>
    <message>
      <source>Heading (Rover With Moving Base UART1 Connected To Autopilot, UART2 Connected To Moving Base)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_UBX_MODE/values/2/description</name>
    <message>
      <source>Moving Base (UART1 Connected To Autopilot, UART2 Connected To Rover)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_UBX_MODE/values/3/description</name>
    <message>
      <source>Heading (Rover With Moving Base UART1 Connected to Autopilot Or Can Node At 921600)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_UBX_MODE/values/4/description</name>
    <message>
      <source>Moving Base (Moving Base UART1 Connected to Autopilot Or Can Node At 921600)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_YAW_OFFSET/shortDesc</name>
    <message>
      <source>Heading/Yaw offset for dual antenna GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GPS_YAW_OFFSET/longDesc</name>
    <message>
      <source>Heading offset angle for dual antenna GPS setups that support heading estimation. Set this to 0 if the antennas are parallel to the forward-facing direction of the vehicle and the first antenna is in front. The offset angle increases clockwise. Set this to 90 if the first antenna is placed on the right side and the second on the left side of the vehicle.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PPS_CAP_ENABLE/shortDesc</name>
    <message>
      <source>PPS Capture Enable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PPS_CAP_ENABLE/longDesc</name>
    <message>
      <source>Enables the PPS capture module. This switches mode of FMU channel 7 to be the PPS input channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PPS_CAP_ENABLE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PPS_CAP_ENABLE/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_ACTION/shortDesc</name>
    <message>
      <source>Geofence violation action</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_ACTION/longDesc</name>
    <message>
      <source>Note: Setting this value to 4 enables flight termination, which will kill the vehicle on violation of the fence. Due to the inherent danger of this, this function is disabled using a software circuit breaker, which needs to be reset to 0 to really shut down the system.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_ACTION/values/0/description</name>
    <message>
      <source>None</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_ACTION/values/1/description</name>
    <message>
      <source>Warning</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_ACTION/values/2/description</name>
    <message>
      <source>Hold mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_ACTION/values/3/description</name>
    <message>
      <source>Return mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_ACTION/values/4/description</name>
    <message>
      <source>Terminate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_ACTION/values/5/description</name>
    <message>
      <source>Land mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_ALTMODE/shortDesc</name>
    <message>
      <source>Geofence altitude mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_ALTMODE/longDesc</name>
    <message>
      <source>Select which altitude (AMSL) source should be used for geofence calculations.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_ALTMODE/values/0/description</name>
    <message>
      <source>Autopilot estimator global position altitude (GPS)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_ALTMODE/values/1/description</name>
    <message>
      <source>Raw barometer altitude (assuming standard atmospheric pressure)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_COUNT/shortDesc</name>
    <message>
      <source>Geofence counter limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_COUNT/longDesc</name>
    <message>
      <source>Set how many subsequent position measurements outside of the fence are needed before geofence violation is triggered</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_MAX_HOR_DIST/shortDesc</name>
    <message>
      <source>Max horizontal distance in meters</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_MAX_HOR_DIST/longDesc</name>
    <message>
      <source>Maximum horizontal distance in meters the vehicle can be from home before triggering a geofence action. Disabled if 0.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_MAX_VER_DIST/shortDesc</name>
    <message>
      <source>Max vertical distance in meters</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_MAX_VER_DIST/longDesc</name>
    <message>
      <source>Maximum vertical distance in meters the vehicle can be from home before triggering a geofence action. Disabled if 0.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_SOURCE/shortDesc</name>
    <message>
      <source>Geofence source</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_SOURCE/longDesc</name>
    <message>
      <source>Select which position source should be used. Selecting GPS instead of global position makes sure that there is no dependence on the position estimator 0 = global position, 1 = GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_SOURCE/values/0/description</name>
    <message>
      <source>GPOS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GF_SOURCE/values/1/description</name>
    <message>
      <source>GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/HTE_ACC_GATE/shortDesc</name>
    <message>
      <source>Gate size for acceleration fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/HTE_ACC_GATE/longDesc</name>
    <message>
      <source>Sets the number of standard deviations used by the innovation consistency test.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/HTE_HT_ERR_INIT/shortDesc</name>
    <message>
      <source>1-sigma initial hover thrust uncertainty</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/HTE_HT_ERR_INIT/longDesc</name>
    <message>
      <source>Sets the number of standard deviations used by the innovation consistency test.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/HTE_HT_NOISE/shortDesc</name>
    <message>
      <source>Hover thrust process noise</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/HTE_HT_NOISE/longDesc</name>
    <message>
      <source>Reduce to make the hover thrust estimate more stable, increase if the real hover thrust is expected to change quickly over time.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/HTE_THR_RANGE/shortDesc</name>
    <message>
      <source>Max deviation from MPC_THR_HOVER</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/HTE_THR_RANGE/longDesc</name>
    <message>
      <source>Defines the range of the hover thrust estimate around MPC_THR_HOVER. A value of 0.2 with MPC_THR_HOVER at 0.5 results in a range of [0.3, 0.7]. Set to a large value if the vehicle operates in varying physical conditions that affect the required hover thrust strongly (e.g. differently sized payloads).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/HTE_VXY_THR/shortDesc</name>
    <message>
      <source>Horizontal velocity threshold for sensitivity reduction</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/HTE_VXY_THR/longDesc</name>
    <message>
      <source>Above this speed, the measurement noise is linearly increased to reduce the sensitivity of the estimator from biased measurement. Set to a low value on vehicles with large lifting surfaces.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/HTE_VZ_THR/shortDesc</name>
    <message>
      <source>Vertical velocity threshold for sensitivity reduction</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/HTE_VZ_THR/longDesc</name>
    <message>
      <source>Above this speed, the measurement noise is linearly increased to reduce the sensitivity of the estimator from biased measurement. Set to a low value on vehicles affected by air drag when climbing or descending.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ISBD_READ_INT/shortDesc</name>
    <message>
      <source>Satellite radio read interval. Only required to be nonzero if data is not sent using a ring call</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ISBD_SBD_TIMEOUT/shortDesc</name>
    <message>
      <source>Iridium SBD session timeout</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ISBD_STACK_TIME/shortDesc</name>
    <message>
      <source>Time the Iridium driver will wait for additional mavlink messages to combine them into one SBD message</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ISBD_STACK_TIME/longDesc</name>
    <message>
      <source>Value 0 turns the functionality off</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDFW_AIRSPD_MAX/shortDesc</name>
    <message>
      <source>Fixed-wing land detector: Max airspeed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDFW_AIRSPD_MAX/longDesc</name>
    <message>
      <source>Maximum airspeed allowed in the landed state</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDFW_VEL_XY_MAX/shortDesc</name>
    <message>
      <source>Fixed-wing land detector: Max horizontal velocity threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDFW_VEL_XY_MAX/longDesc</name>
    <message>
      <source>Maximum horizontal velocity allowed in the landed state. A factor of 0.7 is applied in case of airspeed-less flying (either because no sensor is present or sensor data got invalid in flight).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDFW_VEL_Z_MAX/shortDesc</name>
    <message>
      <source>Fixed-wing land detector: Max vertiacal velocity threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDFW_VEL_Z_MAX/longDesc</name>
    <message>
      <source>Maximum vertical velocity allowed in the landed state. A factor of 0.7 is applied in case of airspeed-less flying (either because no sensor is present or sensor data got invalid in flight).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDFW_XYACC_MAX/shortDesc</name>
    <message>
      <source>Fixed-wing land detector: Max horizontal acceleration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDFW_XYACC_MAX/longDesc</name>
    <message>
      <source>Maximum horizontal (x,y body axes) acceleration allowed in the landed state</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDMC_ALT_GND/shortDesc</name>
    <message>
      <source>Ground effect altitude for multicopters</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDMC_ALT_GND/longDesc</name>
    <message>
      <source>The height above ground below which ground effect creates barometric altitude errors. A negative value indicates no ground effect.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDMC_ALT_MAX/shortDesc</name>
    <message>
      <source>Maximum altitude for multicopters</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDMC_ALT_MAX/longDesc</name>
    <message>
      <source>The system will obey this limit as a hard altitude limit. This setting will be consolidated with the GF_MAX_VER_DIST parameter. A negative value indicates no altitude limitation.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDMC_ROT_MAX/shortDesc</name>
    <message>
      <source>Multicopter max rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDMC_ROT_MAX/longDesc</name>
    <message>
      <source>Maximum allowed angular velocity around each axis allowed in the landed state.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDMC_TRIG_TIME/shortDesc</name>
    <message>
      <source>Multicopter land detection trigger time</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDMC_TRIG_TIME/longDesc</name>
    <message>
      <source>Total time it takes to go through all three land detection stages: ground contact, maybe landed, landed when all necessary conditions are constantly met.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDMC_XY_VEL_MAX/shortDesc</name>
    <message>
      <source>Multicopter max horizontal velocity</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDMC_XY_VEL_MAX/longDesc</name>
    <message>
      <source>Maximum horizontal velocity allowed in the landed state</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDMC_Z_VEL_MAX/shortDesc</name>
    <message>
      <source>Multicopter max climb rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LNDMC_Z_VEL_MAX/longDesc</name>
    <message>
      <source>Maximum vertical velocity allowed in the landed state</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LND_FLIGHT_T_HI/shortDesc</name>
    <message>
      <source>Total flight time in microseconds</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LND_FLIGHT_T_HI/longDesc</name>
    <message>
      <source>Total flight time of this autopilot. Higher 32 bits of the value. Flight time in microseconds = (LND_FLIGHT_T_HI &lt;&lt; 32) | LND_FLIGHT_T_LO.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LND_FLIGHT_T_LO/shortDesc</name>
    <message>
      <source>Total flight time in microseconds</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LND_FLIGHT_T_LO/longDesc</name>
    <message>
      <source>Total flight time of this autopilot. Lower 32 bits of the value. Flight time in microseconds = (LND_FLIGHT_T_HI &lt;&lt; 32) | LND_FLIGHT_T_LO.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SENS_POS_X/shortDesc</name>
    <message>
      <source>X Position of IRLOCK in body frame (forward)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SENS_POS_Y/shortDesc</name>
    <message>
      <source>Y Position of IRLOCK in body frame (right)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SENS_POS_Z/shortDesc</name>
    <message>
      <source>Z Position of IRLOCK in body frame (downward)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SENS_ROT/shortDesc</name>
    <message>
      <source>Rotation of IRLOCK sensor relative to airframe</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SENS_ROT/longDesc</name>
    <message>
      <source>Default orientation of Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SENS_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SENS_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SENS_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SENS_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SENS_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SENS_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SENS_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SENS_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_ACC_UNC/shortDesc</name>
    <message>
      <source>Acceleration uncertainty</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_ACC_UNC/longDesc</name>
    <message>
      <source>Variance of acceleration measurement used for landing target position prediction. Higher values results in tighter following of the measurements and more lenient outlier rejection</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_MEAS_UNC/shortDesc</name>
    <message>
      <source>Landing target measurement uncertainty</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_MEAS_UNC/longDesc</name>
    <message>
      <source>Variance of the landing target measurement from the driver. Higher values result in less aggressive following of the measurement and a smoother output as well as fewer rejected measurements.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_MODE/shortDesc</name>
    <message>
      <source>Landing target mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_MODE/longDesc</name>
    <message>
      <source>Configure the mode of the landing target. Depending on the mode, the landing target observations are used differently to aid position estimation. Mode Moving:     The landing target may be moving around while in the field of view of the vehicle. Landing target measurements are not used to aid positioning. Mode Stationary: The landing target is stationary. Measured velocity w.r.t. the landing target is used to aid velocity estimation.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_MODE/values/0/description</name>
    <message>
      <source>Moving</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_MODE/values/1/description</name>
    <message>
      <source>Stationary</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_POS_UNC_IN/shortDesc</name>
    <message>
      <source>Initial landing target position uncertainty</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_POS_UNC_IN/longDesc</name>
    <message>
      <source>Initial variance of the relative landing target position in x and y direction</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SCALE_X/shortDesc</name>
    <message>
      <source>Scale factor for sensor measurements in sensor x axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SCALE_X/longDesc</name>
    <message>
      <source>Landing target x measurements are scaled by this factor before being used</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SCALE_Y/shortDesc</name>
    <message>
      <source>Scale factor for sensor measurements in sensor y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_SCALE_Y/longDesc</name>
    <message>
      <source>Landing target y measurements are scaled by this factor before being used</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_VEL_UNC_IN/shortDesc</name>
    <message>
      <source>Initial landing target velocity uncertainty</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LTEST_VEL_UNC_IN/longDesc</name>
    <message>
      <source>Initial variance of the relative landing target velocity in x and y directions</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_ACC_XY/shortDesc</name>
    <message>
      <source>Accelerometer xy noise density</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_ACC_XY/longDesc</name>
    <message>
      <source>Data sheet noise density = 150ug/sqrt(Hz) = 0.0015 m/s^2/sqrt(Hz) Larger than data sheet to account for tilt error.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_ACC_Z/shortDesc</name>
    <message>
      <source>Accelerometer z noise density</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_ACC_Z/longDesc</name>
    <message>
      <source>Data sheet noise density = 150ug/sqrt(Hz) = 0.0015 m/s^2/sqrt(Hz)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_BAR_Z/shortDesc</name>
    <message>
      <source>Barometric presssure altitude z standard deviation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_EPH_MAX/shortDesc</name>
    <message>
      <source>Max EPH allowed for GPS initialization</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_EPV_MAX/shortDesc</name>
    <message>
      <source>Max EPV allowed for GPS initialization</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FAKE_ORIGIN/shortDesc</name>
    <message>
      <source>Enable publishing of a fake global position (e.g for AUTO missions using Optical Flow)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FAKE_ORIGIN/longDesc</name>
    <message>
      <source>By initializing the estimator to the LPE_LAT/LON parameters when global information is unavailable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FGYRO_HP/shortDesc</name>
    <message>
      <source>Flow gyro high pass filter cut off frequency</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FLW_OFF_Z/shortDesc</name>
    <message>
      <source>Optical flow z offset from center</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FLW_QMIN/shortDesc</name>
    <message>
      <source>Optical flow minimum quality threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FLW_R/shortDesc</name>
    <message>
      <source>Optical flow rotation (roll/pitch) noise gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FLW_RR/shortDesc</name>
    <message>
      <source>Optical flow angular velocity noise gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FLW_SCALE/shortDesc</name>
    <message>
      <source>Optical flow scale</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FUSION/shortDesc</name>
    <message>
      <source>Integer bitmask controlling data fusion</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FUSION/longDesc</name>
    <message>
      <source>Set bits in the following positions to enable: 0 : Set to true to fuse GPS data if available, also requires GPS for altitude init 1 : Set to true to fuse optical flow data if available 2 : Set to true to fuse vision position 3 : Set to true to enable landing target 4 : Set to true to fuse land detector 5 : Set to true to publish AGL as local position down component 6 : Set to true to enable flow gyro compensation 7 : Set to true to enable baro fusion default (145 - GPS, baro, land detector)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FUSION/bitmask/0/description</name>
    <message>
      <source>fuse GPS, requires GPS for alt. init</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FUSION/bitmask/1/description</name>
    <message>
      <source>fuse optical flow</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FUSION/bitmask/2/description</name>
    <message>
      <source>fuse vision position</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FUSION/bitmask/3/description</name>
    <message>
      <source>fuse landing target</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FUSION/bitmask/4/description</name>
    <message>
      <source>fuse land detector</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FUSION/bitmask/5/description</name>
    <message>
      <source>pub agl as lpos down</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FUSION/bitmask/6/description</name>
    <message>
      <source>flow gyro compensation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_FUSION/bitmask/7/description</name>
    <message>
      <source>fuse baro</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_GPS_DELAY/shortDesc</name>
    <message>
      <source>GPS delay compensaton</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_GPS_VXY/shortDesc</name>
    <message>
      <source>GPS xy velocity standard deviation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_GPS_VXY/longDesc</name>
    <message>
      <source>EPV used if greater than this value.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_GPS_VZ/shortDesc</name>
    <message>
      <source>GPS z velocity standard deviation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_GPS_XY/shortDesc</name>
    <message>
      <source>Minimum GPS xy standard deviation, uses reported EPH if greater</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_GPS_Z/shortDesc</name>
    <message>
      <source>Minimum GPS z standard deviation, uses reported EPV if greater</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_LAND_VXY/shortDesc</name>
    <message>
      <source>Land detector xy velocity standard deviation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_LAND_Z/shortDesc</name>
    <message>
      <source>Land detector z standard deviation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_LAT/shortDesc</name>
    <message>
      <source>Local origin latitude for nav w/o GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_LDR_OFF_Z/shortDesc</name>
    <message>
      <source>Lidar z offset from center of vehicle +down</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_LDR_Z/shortDesc</name>
    <message>
      <source>Lidar z standard deviation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_LON/shortDesc</name>
    <message>
      <source>Local origin longitude for nav w/o GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_LT_COV/shortDesc</name>
    <message>
      <source>Minimum landing target standard covariance, uses reported covariance if greater</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_PN_B/shortDesc</name>
    <message>
      <source>Accel bias propagation noise density</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_PN_P/shortDesc</name>
    <message>
      <source>Position propagation noise density</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_PN_P/longDesc</name>
    <message>
      <source>Increase to trust measurements more. Decrease to trust model more.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_PN_T/shortDesc</name>
    <message>
      <source>Terrain random walk noise density, hilly/outdoor (0.1), flat/Indoor (0.001)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_PN_V/shortDesc</name>
    <message>
      <source>Velocity propagation noise density</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_PN_V/longDesc</name>
    <message>
      <source>Increase to trust measurements more. Decrease to trust model more.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_SNR_OFF_Z/shortDesc</name>
    <message>
      <source>Sonar z offset from center of vehicle +down</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_SNR_Z/shortDesc</name>
    <message>
      <source>Sonar z standard deviation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_T_MAX_GRADE/shortDesc</name>
    <message>
      <source>Terrain maximum percent grade, hilly/outdoor (100 = 45 deg), flat/Indoor (0 = 0 deg)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_T_MAX_GRADE/longDesc</name>
    <message>
      <source>Used to calculate increased terrain random walk nosie due to movement.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_VIC_P/shortDesc</name>
    <message>
      <source>Vicon position standard deviation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_VIS_DELAY/shortDesc</name>
    <message>
      <source>Vision delay compensation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_VIS_DELAY/longDesc</name>
    <message>
      <source>Set to zero to enable automatic compensation from measurement timestamps</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_VIS_XY/shortDesc</name>
    <message>
      <source>Vision xy standard deviation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_VIS_Z/shortDesc</name>
    <message>
      <source>Vision z standard deviation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_VXY_PUB/shortDesc</name>
    <message>
      <source>Required velocity xy standard deviation to publish position</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_X_LP/shortDesc</name>
    <message>
      <source>Cut frequency for state publication</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/LPE_Z_PUB/shortDesc</name>
    <message>
      <source>Required z standard deviation to publish altitude/ terrain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_COMP_ID/shortDesc</name>
    <message>
      <source>MAVLink component ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_FWDEXTSP/shortDesc</name>
    <message>
      <source>Forward external setpoint messages</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_FWDEXTSP/longDesc</name>
    <message>
      <source>If set to 1 incoming external setpoint messages will be directly forwarded to the controllers if in offboard control mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_FWDEXTSP/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_FWDEXTSP/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_HASH_CHK_EN/shortDesc</name>
    <message>
      <source>Parameter hash check</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_HASH_CHK_EN/longDesc</name>
    <message>
      <source>Disabling the parameter hash check functionality will make the mavlink instance stream parameters continuously.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_HASH_CHK_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_HASH_CHK_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_HB_FORW_EN/shortDesc</name>
    <message>
      <source>Heartbeat message forwarding</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_HB_FORW_EN/longDesc</name>
    <message>
      <source>The mavlink heartbeat message will not be forwarded if this parameter is set to 'disabled'. The main reason for disabling heartbeats to be forwarded is because they confuse dronekit.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_HB_FORW_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_HB_FORW_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_ODOM_LP/shortDesc</name>
    <message>
      <source>Activate ODOMETRY loopback</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_ODOM_LP/longDesc</name>
    <message>
      <source>If set, it gets the data from 'vehicle_visual_odometry' instead of 'vehicle_odometry' serving as a loopback of the received ODOMETRY messages on the Mavlink receiver.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_ODOM_LP/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_ODOM_LP/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_PROTO_VER/shortDesc</name>
    <message>
      <source>MAVLink protocol version</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_PROTO_VER/values/0/description</name>
    <message>
      <source>Default to 1, switch to 2 if GCS sends version 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_PROTO_VER/values/1/description</name>
    <message>
      <source>Always use version 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_PROTO_VER/values/2/description</name>
    <message>
      <source>Always use version 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_RADIO_TOUT/shortDesc</name>
    <message>
      <source>Timeout in seconds for the RADIO_STATUS reports coming in</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_RADIO_TOUT/longDesc</name>
    <message>
      <source>If the connected radio stops reporting RADIO_STATUS for a certain time, a warning is triggered and, if MAV_X_RADIO_CTL is enabled, the software-flow control is reset.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_SIK_RADIO_ID/shortDesc</name>
    <message>
      <source>MAVLink SiK Radio ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_SIK_RADIO_ID/longDesc</name>
    <message>
      <source>When non-zero the MAVLink app will attempt to configure the SiK radio to this ID and re-set the parameter to 0. If the value is negative it will reset the complete radio config to factory defaults. Only applies if this mavlink instance is going through a SiK radio</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_SYS_ID/shortDesc</name>
    <message>
      <source>MAVLink system ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_S_FORWARD/shortDesc</name>
    <message>
      <source>Enable MAVLink forwarding on TELEM2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_S_FORWARD/longDesc</name>
    <message>
      <source>TELEM2 on Skynode only.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_S_FORWARD/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_S_FORWARD/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/shortDesc</name>
    <message>
      <source>MAVLink airframe type</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/0/description</name>
    <message>
      <source>Generic micro air vehicle</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/1/description</name>
    <message>
      <source>Fixed wing aircraft</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/2/description</name>
    <message>
      <source>Quadrotor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/3/description</name>
    <message>
      <source>Coaxial helicopter</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/4/description</name>
    <message>
      <source>Normal helicopter with tail rotor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/5/description</name>
    <message>
      <source>Ground installation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/6/description</name>
    <message>
      <source>Operator control unit / ground control station</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/7/description</name>
    <message>
      <source>Airship, controlled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/8/description</name>
    <message>
      <source>Free balloon, uncontrolled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/9/description</name>
    <message>
      <source>Rocket</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/10/description</name>
    <message>
      <source>Ground rover</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/11/description</name>
    <message>
      <source>Surface vessel, boat, ship</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/12/description</name>
    <message>
      <source>Submarine</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/13/description</name>
    <message>
      <source>Hexarotor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/14/description</name>
    <message>
      <source>Octorotor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/15/description</name>
    <message>
      <source>Tricopter</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/16/description</name>
    <message>
      <source>Flapping wing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/17/description</name>
    <message>
      <source>Kite</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/18/description</name>
    <message>
      <source>Onboard companion controller</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/19/description</name>
    <message>
      <source>Two-rotor VTOL using control surfaces in vertical operation in addition. Tailsitter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/20/description</name>
    <message>
      <source>Quad-rotor VTOL using a V-shaped quad config in vertical operation. Tailsitter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/21/description</name>
    <message>
      <source>Tiltrotor VTOL</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/22/description</name>
    <message>
      <source>VTOL reserved 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/23/description</name>
    <message>
      <source>VTOL reserved 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/24/description</name>
    <message>
      <source>VTOL reserved 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/25/description</name>
    <message>
      <source>VTOL reserved 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/26/description</name>
    <message>
      <source>Onboard gimbal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_TYPE/values/27/description</name>
    <message>
      <source>Onboard ADSB peripheral</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_USEHILGPS/shortDesc</name>
    <message>
      <source>Use/Accept HIL GPS message even if not in HIL mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_USEHILGPS/longDesc</name>
    <message>
      <source>If set to 1 incoming HIL GPS messages are parsed.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_USEHILGPS/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAV_USEHILGPS/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MBE_ENABLE/shortDesc</name>
    <message>
      <source>Enable online mag bias calibration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MBE_ENABLE/longDesc</name>
    <message>
      <source>This enables continuous calibration of the magnetometers before takeoff using gyro data.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MBE_ENABLE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MBE_ENABLE/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MBE_LEARN_GAIN/shortDesc</name>
    <message>
      <source>Mag bias estimator learning gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MBE_LEARN_GAIN/longDesc</name>
    <message>
      <source>Increase to make the estimator more responsive Decrease to make the estimator more robust to noise</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAN_ARM_GESTURE/shortDesc</name>
    <message>
      <source>Enable arm/disarm stick gesture</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAN_ARM_GESTURE/longDesc</name>
    <message>
      <source>This determines if moving the left stick to the lower right arms and to the lower left disarms the vehicle.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAN_ARM_GESTURE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MAN_ARM_GESTURE/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_GPSF_LT/shortDesc</name>
    <message>
      <source>GPS failure loiter time</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_GPSF_LT/longDesc</name>
    <message>
      <source>The time in seconds the system should do open loop loiter and wait for GPS recovery before it starts descending. Set to 0 to disable. Roll angle is set to FW_GPSF_R. Does only apply for fixed-wing vehicles or VTOLs with NAV_FORCE_VT set to 0.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_GPSF_R/shortDesc</name>
    <message>
      <source>GPS failure fixed roll angle</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/FW_GPSF_R/longDesc</name>
    <message>
      <source>Roll in degrees during the loiter after the vehicle has lost GPS in an auto mode (e.g. mission or loiter). Does only apply for fixed-wing vehicles or VTOLs with NAV_FORCE_VT set to 0.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_DIST_1WP/shortDesc</name>
    <message>
      <source>Maximal horizontal distance from home to first waypoint</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_DIST_1WP/longDesc</name>
    <message>
      <source>Failsafe check to prevent running mission stored from previous flight at a new takeoff location. Set a value of zero or less to disable. The mission will not be started if the current waypoint is more distant than MIS_DIST_1WP from the home position.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_DIST_WPS/shortDesc</name>
    <message>
      <source>Maximal horizontal distance between waypoint</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_DIST_WPS/longDesc</name>
    <message>
      <source>Failsafe check to prevent running missions which are way too big. Set a value of zero or less to disable. The mission will not be started if any distance between two subsequent waypoints is greater than MIS_DIST_WPS.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_FLIGHT_TIME/shortDesc</name>
    <message>
      <source>Maximum allowed flight time</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_FLIGHT_TIME/longDesc</name>
    <message>
      <source>Check to prevent missions that would take too long. Set a value of zero to disable. The mission will not be started if the total flight time is greater than MIS_FLIGHT_TIME. The default is 3540 seconds (59 minutes).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_FLIGHT_TIME/values/0/description</name>
    <message>
      <source>Disable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_LTRMIN_ALT/shortDesc</name>
    <message>
      <source>Minimum Loiter altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_LTRMIN_ALT/longDesc</name>
    <message>
      <source>This is the minimum altitude the system will always obey. The intent is to stay out of ground effect. set to -1, if there shouldn't be a minimum loiter altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_MNT_YAW_CTL/shortDesc</name>
    <message>
      <source>Enable yaw control of the mount. (Only affects multicopters and ROI mission items)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_MNT_YAW_CTL/longDesc</name>
    <message>
      <source>If enabled, yaw commands will be sent to the mount and the vehicle will follow its heading towards the flight direction. If disabled, the vehicle will yaw towards the ROI.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_MNT_YAW_CTL/values/0/description</name>
    <message>
      <source>Disable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_MNT_YAW_CTL/values/1/description</name>
    <message>
      <source>Enable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_TAKEOFF_ALT/shortDesc</name>
    <message>
      <source>Take-off altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_TAKEOFF_ALT/longDesc</name>
    <message>
      <source>This is the minimum altitude the system will take off to.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_TKO_LAND_REQ/shortDesc</name>
    <message>
      <source>Mission landing required</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_TKO_LAND_REQ/longDesc</name>
    <message>
      <source>If set, the mission feasibility checker will check for a planned misson landing at the end of the mission.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_TKO_LAND_REQ/values/0/description</name>
    <message>
      <source>Do not require a mission takeoff nor a mission landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_TKO_LAND_REQ/values/1/description</name>
    <message>
      <source>Require a mission takeoff, do not require a mission landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_TKO_LAND_REQ/values/2/description</name>
    <message>
      <source>Do not require a mission takeoff, require a mission landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_TKO_LAND_REQ/values/3/description</name>
    <message>
      <source>Require a mission takeoff and a mission landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_TKO_LAND_REQ/values/4/description</name>
    <message>
      <source>Require a mission takeoff and a mission landing, or neither of both</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_TKO_LAND_REQ/values/5/description</name>
    <message>
      <source>Same as previous, but require a landing if in air and no valid VTOL landing approach is present</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_YAW_ERR/shortDesc</name>
    <message>
      <source>Max yaw error in degrees needed for waypoint heading acceptance</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_YAW_TMT/shortDesc</name>
    <message>
      <source>Time in seconds we wait on reaching target heading at a waypoint if it is forced</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MIS_YAW_TMT/longDesc</name>
    <message>
      <source>If set &gt; 0 it will ignore the target heading for normal waypoint acceptance. If the waypoint forces the heading the timeout will matter. For example on VTOL forwards transition. Mainly useful for VTOLs that have less yaw authority and might not reach target yaw in wind. Disabled by default.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_YAW_MODE/shortDesc</name>
    <message>
      <source>Yaw mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_YAW_MODE/longDesc</name>
    <message>
      <source>Specifies the heading in Auto.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_YAW_MODE/values/0/description</name>
    <message>
      <source>towards waypoint</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_YAW_MODE/values/1/description</name>
    <message>
      <source>towards home</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_YAW_MODE/values/2/description</name>
    <message>
      <source>away from home</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_YAW_MODE/values/3/description</name>
    <message>
      <source>along trajectory</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_YAW_MODE/values/4/description</name>
    <message>
      <source>towards waypoint (yaw first)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_ACC_RAD/shortDesc</name>
    <message>
      <source>Acceptance Radius</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_ACC_RAD/longDesc</name>
    <message>
      <source>Default acceptance radius, overridden by acceptance radius of waypoint if set. For fixed wing the L1 turning distance is used for horizontal acceptance.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FORCE_VT/shortDesc</name>
    <message>
      <source>Force VTOL mode takeoff and land</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FORCE_VT/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FORCE_VT/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FW_ALTL_RAD/shortDesc</name>
    <message>
      <source>FW Altitude Acceptance Radius before a landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FW_ALTL_RAD/longDesc</name>
    <message>
      <source>Altitude acceptance used for the last waypoint before a fixed-wing landing. This is usually smaller than the standard vertical acceptance because close to the ground higher accuracy is required.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FW_ALT_RAD/shortDesc</name>
    <message>
      <source>FW Altitude Acceptance Radius</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_FW_ALT_RAD/longDesc</name>
    <message>
      <source>Acceptance radius for fixedwing altitude.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_LOITER_RAD/shortDesc</name>
    <message>
      <source>Loiter radius (FW only)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_LOITER_RAD/longDesc</name>
    <message>
      <source>Default value of loiter radius for missions, Hold mode, Return mode, etc. (fixedwing only).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_MC_ALT_RAD/shortDesc</name>
    <message>
      <source>MC Altitude Acceptance Radius</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_MC_ALT_RAD/longDesc</name>
    <message>
      <source>Acceptance radius for multicopter altitude.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_TRAFF_AVOID/shortDesc</name>
    <message>
      <source>Set traffic avoidance mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_TRAFF_AVOID/longDesc</name>
    <message>
      <source>Enabling this will allow the system to respond to transponder data from e.g. ADSB transponders</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_TRAFF_AVOID/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_TRAFF_AVOID/values/1/description</name>
    <message>
      <source>Warn only</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_TRAFF_AVOID/values/2/description</name>
    <message>
      <source>Return mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_TRAFF_AVOID/values/3/description</name>
    <message>
      <source>Land mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_TRAFF_AVOID/values/4/description</name>
    <message>
      <source>Position Hold mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_TRAFF_A_RADM/shortDesc</name>
    <message>
      <source>Set NAV TRAFFIC AVOID RADIUS MANNED</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_TRAFF_A_RADM/longDesc</name>
    <message>
      <source>Defines the Radius where NAV TRAFFIC AVOID is Called For Manned Aviation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_TRAFF_A_RADU/shortDesc</name>
    <message>
      <source>Set NAV TRAFFIC AVOID RADIUS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/NAV_TRAFF_A_RADU/longDesc</name>
    <message>
      <source>Defines the Radius where NAV TRAFFIC AVOID is Called For Unmanned Aviation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AIRMODE/shortDesc</name>
    <message>
      <source>Multicopter air-mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AIRMODE/longDesc</name>
    <message>
      <source>The air-mode enables the mixer to increase the total thrust of the multirotor in order to keep attitude and rate control even at low and high throttle. This function should be disabled during tuning as it will help the controller to diverge if the closed-loop is unstable (i.e. the vehicle is not tuned yet). Enabling air-mode for yaw requires the use of an arming switch.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AIRMODE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AIRMODE/values/1/description</name>
    <message>
      <source>Roll/Pitch</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_AIRMODE/values/2/description</name>
    <message>
      <source>Roll/Pitch/Yaw</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MOT_ORDERING/shortDesc</name>
    <message>
      <source>Motor Ordering</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MOT_ORDERING/longDesc</name>
    <message>
      <source>Determines the motor ordering. This can be used for example in combination with a 4-in-1 ESC that assumes a motor ordering which is different from PX4. ONLY supported for Quads. When changing this, make sure to test the motor response without props first.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MOT_ORDERING/values/0/description</name>
    <message>
      <source>PX4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MOT_ORDERING/values/1/description</name>
    <message>
      <source>Betaflight / Cleanflight</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_DO_STAB/shortDesc</name>
    <message>
      <source>Stabilize the mount</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_DO_STAB/longDesc</name>
    <message>
      <source>Set to true for servo gimbal, false for passthrough. This is required for a gimbal which is not capable of stabilizing itself and relies on the IMU's attitude estimation.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_DO_STAB/values/0/description</name>
    <message>
      <source>Disable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_DO_STAB/values/1/description</name>
    <message>
      <source>Stabilize all axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_DO_STAB/values/2/description</name>
    <message>
      <source>Stabilize yaw for absolute/lock mode.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_PITCH/shortDesc</name>
    <message>
      <source>Auxiliary channel to control pitch (in AUX input or manual mode)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_PITCH/values/0/description</name>
    <message>
      <source>Disable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_PITCH/values/1/description</name>
    <message>
      <source>AUX1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_PITCH/values/2/description</name>
    <message>
      <source>AUX2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_PITCH/values/3/description</name>
    <message>
      <source>AUX3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_PITCH/values/4/description</name>
    <message>
      <source>AUX4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_PITCH/values/5/description</name>
    <message>
      <source>AUX5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_PITCH/values/6/description</name>
    <message>
      <source>AUX6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_ROLL/shortDesc</name>
    <message>
      <source>Auxiliary channel to control roll (in AUX input or manual mode)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_ROLL/values/0/description</name>
    <message>
      <source>Disable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_ROLL/values/1/description</name>
    <message>
      <source>AUX1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_ROLL/values/2/description</name>
    <message>
      <source>AUX2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_ROLL/values/3/description</name>
    <message>
      <source>AUX3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_ROLL/values/4/description</name>
    <message>
      <source>AUX4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_ROLL/values/5/description</name>
    <message>
      <source>AUX5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_ROLL/values/6/description</name>
    <message>
      <source>AUX6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_YAW/shortDesc</name>
    <message>
      <source>Auxiliary channel to control yaw (in AUX input or manual mode)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_YAW/values/0/description</name>
    <message>
      <source>Disable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_YAW/values/1/description</name>
    <message>
      <source>AUX1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_YAW/values/2/description</name>
    <message>
      <source>AUX2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_YAW/values/3/description</name>
    <message>
      <source>AUX3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_YAW/values/4/description</name>
    <message>
      <source>AUX4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_YAW/values/5/description</name>
    <message>
      <source>AUX5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAN_YAW/values/6/description</name>
    <message>
      <source>AUX6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAV_COMPID/shortDesc</name>
    <message>
      <source>Mavlink Component ID of the mount</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAV_COMPID/longDesc</name>
    <message>
      <source>If MNT_MODE_OUT is MAVLink protocol v2, mount configure/control commands will be sent with this component ID.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAV_SYSID/shortDesc</name>
    <message>
      <source>Mavlink System ID of the mount</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MAV_SYSID/longDesc</name>
    <message>
      <source>If MNT_MODE_OUT is MAVLink gimbal protocol v1, mount configure/control commands will be sent with this target ID.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MODE_IN/shortDesc</name>
    <message>
      <source>Mount input mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MODE_IN/longDesc</name>
    <message>
      <source>RC uses the AUX input channels (see MNT_MAN_* parameters), MAVLINK_ROI uses the MAV_CMD_DO_SET_ROI Mavlink message, and MAVLINK_DO_MOUNT the MAV_CMD_DO_MOUNT_CONFIGURE and MAV_CMD_DO_MOUNT_CONTROL messages to control a mount.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MODE_IN/values/-1/description</name>
    <message>
      <source>DISABLED</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MODE_IN/values/0/description</name>
    <message>
      <source>AUTO</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MODE_IN/values/1/description</name>
    <message>
      <source>RC</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MODE_IN/values/2/description</name>
    <message>
      <source>MAVLINK_ROI (protocol v1)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MODE_IN/values/3/description</name>
    <message>
      <source>MAVLINK_DO_MOUNT (protocol v1)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MODE_IN/values/4/description</name>
    <message>
      <source>MAVlink gimbal protocol v2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MODE_OUT/shortDesc</name>
    <message>
      <source>Mount output mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MODE_OUT/longDesc</name>
    <message>
      <source>AUX uses the mixer output Control Group #2. MAVLINK uses the MAV_CMD_DO_MOUNT_CONFIGURE and MAV_CMD_DO_MOUNT_CONTROL MavLink messages to control a mount (set MNT_MAV_SYSID &amp; MNT_MAV_COMPID)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MODE_OUT/values/0/description</name>
    <message>
      <source>AUX</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MODE_OUT/values/1/description</name>
    <message>
      <source>MAVLink gimbal protocol v1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_MODE_OUT/values/2/description</name>
    <message>
      <source>MAVLink gimbal protocol v2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_OB_LOCK_MODE/shortDesc</name>
    <message>
      <source>Mixer value for selecting a locking mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_OB_LOCK_MODE/longDesc</name>
    <message>
      <source>if required for the gimbal (only in AUX output mode)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_OB_NORM_MODE/shortDesc</name>
    <message>
      <source>Mixer value for selecting normal mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_OB_NORM_MODE/longDesc</name>
    <message>
      <source>if required by the gimbal (only in AUX output mode)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_OFF_PITCH/shortDesc</name>
    <message>
      <source>Offset for pitch channel output in degrees</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_OFF_ROLL/shortDesc</name>
    <message>
      <source>Offset for roll channel output in degrees</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_OFF_YAW/shortDesc</name>
    <message>
      <source>Offset for yaw channel output in degrees</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_RANGE_PITCH/shortDesc</name>
    <message>
      <source>Range of pitch channel output in degrees (only in AUX output mode)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_RANGE_ROLL/shortDesc</name>
    <message>
      <source>Range of roll channel output in degrees (only in AUX output mode)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_RANGE_YAW/shortDesc</name>
    <message>
      <source>Range of yaw channel output in degrees (only in AUX output mode)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_RATE_PITCH/shortDesc</name>
    <message>
      <source>Angular pitch rate for manual input in degrees/second</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_RATE_PITCH/longDesc</name>
    <message>
      <source>Full stick input [-1..1] translats to [-pitch rate..pitch rate].</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_RATE_YAW/shortDesc</name>
    <message>
      <source>Angular yaw rate for manual input in degrees/second</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_RATE_YAW/longDesc</name>
    <message>
      <source>Full stick input [-1..1] translats to [-yaw rate..yaw rate].</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_RC_IN_MODE/shortDesc</name>
    <message>
      <source>Input mode for RC gimbal input</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_RC_IN_MODE/values/0/description</name>
    <message>
      <source>Angle</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MNT_RC_IN_MODE/values/1/description</name>
    <message>
      <source>Angular rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PITCHRATE_MAX/shortDesc</name>
    <message>
      <source>Max pitch rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PITCHRATE_MAX/longDesc</name>
    <message>
      <source>Limit for pitch rate in manual and auto modes (except acro). Has effect for large rotations in autonomous mode, to avoid large control output and mixer saturation. This is not only limited by the vehicle's properties, but also by the maximum measurement rate of the gyro.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PITCH_P/shortDesc</name>
    <message>
      <source>Pitch P gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PITCH_P/longDesc</name>
    <message>
      <source>Pitch proportional gain, i.e. desired angular speed in rad/s for error 1 rad.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ROLLRATE_MAX/shortDesc</name>
    <message>
      <source>Max roll rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ROLLRATE_MAX/longDesc</name>
    <message>
      <source>Limit for roll rate in manual and auto modes (except acro). Has effect for large rotations in autonomous mode, to avoid large control output and mixer saturation. This is not only limited by the vehicle's properties, but also by the maximum measurement rate of the gyro.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ROLL_P/shortDesc</name>
    <message>
      <source>Roll P gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ROLL_P/longDesc</name>
    <message>
      <source>Roll proportional gain, i.e. desired angular speed in rad/s for error 1 rad.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YAWRATE_MAX/shortDesc</name>
    <message>
      <source>Max yaw rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YAW_P/shortDesc</name>
    <message>
      <source>Yaw P gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YAW_P/longDesc</name>
    <message>
      <source>Yaw proportional gain, i.e. desired angular speed in rad/s for error 1 rad.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YAW_WEIGHT/shortDesc</name>
    <message>
      <source>Yaw weight</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YAW_WEIGHT/longDesc</name>
    <message>
      <source>A fraction [0,1] deprioritizing yaw compared to roll and pitch in non-linear attitude control. Deprioritizing yaw is necessary because multicopters have much less control authority in yaw compared to the other axes and it makes sense because yaw is not critical for stable hovering or 3D navigation. For yaw control tuning use MC_YAW_P. This ratio has no inpact on the yaw gain.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_YAWRAUTO_MAX/shortDesc</name>
    <message>
      <source>Max yaw rate in auto mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_YAWRAUTO_MAX/longDesc</name>
    <message>
      <source>Limit the rate of change of the yaw setpoint in autonomous mode to avoid large control output and mixer saturation.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CP_DELAY/shortDesc</name>
    <message>
      <source>Average delay of the range sensor message plus the tracking delay of the position controller in seconds</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CP_DELAY/longDesc</name>
    <message>
      <source>Only used in Position mode.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CP_DIST/shortDesc</name>
    <message>
      <source>Minimum distance the vehicle should keep to all obstacles</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CP_DIST/longDesc</name>
    <message>
      <source>Only used in Position mode. Collision avoidance is disabled by setting this parameter to a negative value</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CP_GO_NO_DATA/shortDesc</name>
    <message>
      <source>Boolean to allow moving into directions where there is no sensor data (outside FOV)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CP_GO_NO_DATA/longDesc</name>
    <message>
      <source>Only used in Position mode.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CP_GO_NO_DATA/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CP_GO_NO_DATA/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CP_GUIDE_ANG/shortDesc</name>
    <message>
      <source>Angle left/right from the commanded setpoint by which the collision prevention algorithm can choose to change the setpoint direction</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CP_GUIDE_ANG/longDesc</name>
    <message>
      <source>Only used in Position mode.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_MAN_TILT_TAU/shortDesc</name>
    <message>
      <source>Manual tilt input filter time constant</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_MAN_TILT_TAU/longDesc</name>
    <message>
      <source>Setting this parameter to 0 disables the filter</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_ACC_DOWN_MAX/shortDesc</name>
    <message>
      <source>Maximum vertical acceleration in velocity controlled modes down</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_ACC_HOR/shortDesc</name>
    <message>
      <source>Acceleration for auto and for manual</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_ACC_HOR/longDesc</name>
    <message>
      <source>Note: In manual, this parameter is only used in MPC_POS_MODE 4.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_ACC_HOR_MAX/shortDesc</name>
    <message>
      <source>Maximum horizontal acceleration for auto mode and for manual mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_ACC_HOR_MAX/longDesc</name>
    <message>
      <source>MPC_POS_MODE 1 just deceleration 3 acceleration and deceleration 4 just acceleration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_ACC_UP_MAX/shortDesc</name>
    <message>
      <source>Maximum vertical acceleration in velocity controlled modes upward</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_ALT_MODE/shortDesc</name>
    <message>
      <source>Altitude control mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_ALT_MODE/longDesc</name>
    <message>
      <source>Set to 0 to control height relative to the earth frame origin. This origin may move up and down in flight due to sensor drift. Set to 1 to control height relative to estimated distance to ground. The vehicle will move up and down with terrain height variation. Requires a distance to ground sensor. The height controller will revert to using height above origin if the distance to ground estimate becomes invalid as indicated by the local_position.distance_bottom_valid message being false. Set to 2 to control height relative to ground (requires a distance sensor) when stationary and relative to earth frame origin when moving horizontally. The speed threshold is controlled by the MPC_HOLD_MAX_XY parameter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_ALT_MODE/values/0/description</name>
    <message>
      <source>Altitude following</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_ALT_MODE/values/1/description</name>
    <message>
      <source>Terrain following</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_ALT_MODE/values/2/description</name>
    <message>
      <source>Terrain hold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_HOLD_DZ/shortDesc</name>
    <message>
      <source>Deadzone of sticks where position hold is enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_HOLD_MAX_XY/shortDesc</name>
    <message>
      <source>Maximum horizontal velocity for which position hold is enabled (use 0 to disable check)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_HOLD_MAX_Z/shortDesc</name>
    <message>
      <source>Maximum vertical velocity for which position hold is enabled (use 0 to disable check)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_JERK_AUTO/shortDesc</name>
    <message>
      <source>Jerk limit in auto mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_JERK_AUTO/longDesc</name>
    <message>
      <source>Limit the maximum jerk of the vehicle (how fast the acceleration can change). A lower value leads to smoother vehicle motions, but it also limits its agility.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_JERK_MAX/shortDesc</name>
    <message>
      <source>Maximum jerk limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_JERK_MAX/longDesc</name>
    <message>
      <source>Limit the maximum jerk of the vehicle (how fast the acceleration can change). A lower value leads to smoother vehicle motions, but it also limits its agility (how fast it can change directions or break). Setting this to the maximum value essentially disables the limit. Note: This is only used when MPC_POS_MODE is set to a smoothing mode 3 or 4.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_LAND_ALT1/shortDesc</name>
    <message>
      <source>Altitude for 1. step of slow landing (descend)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_LAND_ALT1/longDesc</name>
    <message>
      <source>Below this altitude descending velocity gets limited to a value between "MPC_Z_VEL_MAX_DN" (or "MPC_Z_V_AUTO_DN") and "MPC_LAND_SPEED" Value needs to be higher than "MPC_LAND_ALT2"</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_LAND_ALT2/shortDesc</name>
    <message>
      <source>Altitude for 2. step of slow landing (landing)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_LAND_ALT2/longDesc</name>
    <message>
      <source>Below this altitude descending velocity gets limited to "MPC_LAND_SPEED" Value needs to be lower than "MPC_LAND_ALT1"</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_LAND_ALT3/shortDesc</name>
    <message>
      <source>Altitude for 3. step of slow landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_LAND_ALT3/longDesc</name>
    <message>
      <source>Below this altitude descending velocity gets limited to "MPC_LAND_CRWL", if LIDAR available. No effect if LIDAR not available</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_LAND_CRWL/shortDesc</name>
    <message>
      <source>Land crawl descend rate. Used below</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_LAND_RC_HELP/shortDesc</name>
    <message>
      <source>Enable user assisted descent speed for autonomous land routine</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_LAND_RC_HELP/longDesc</name>
    <message>
      <source>When enabled, descent speed will be: stick full up - 0 stick centered - MPC_LAND_SPEED stick full down - 2 * MPC_LAND_SPEED</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_LAND_RC_HELP/values/0/description</name>
    <message>
      <source>Fixed descent speed of MPC_LAND_SPEED</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_LAND_RC_HELP/values/1/description</name>
    <message>
      <source>User assisted descent speed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_LAND_SPEED/shortDesc</name>
    <message>
      <source>Landing descend rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_MANTHR_MIN/shortDesc</name>
    <message>
      <source>Minimum manual thrust</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_MANTHR_MIN/longDesc</name>
    <message>
      <source>Minimum vertical thrust. It's recommended to set it &gt; 0 to avoid free fall with zero thrust. With MC_AIRMODE set to 1, this can safely be set to 0.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_MAN_TILT_MAX/shortDesc</name>
    <message>
      <source>Maximal tilt angle in manual or altitude mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_MAN_Y_MAX/shortDesc</name>
    <message>
      <source>Max manual yaw rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_MAN_Y_TAU/shortDesc</name>
    <message>
      <source>Manual yaw rate input filter time constant</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_MAN_Y_TAU/longDesc</name>
    <message>
      <source>Setting this parameter to 0 disables the filter</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_POS_MODE/shortDesc</name>
    <message>
      <source>Manual-Position control sub-mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_POS_MODE/longDesc</name>
    <message>
      <source>The supported sub-modes are: 0 Simple position control where sticks map directly to velocity setpoints without smoothing. Useful for velocity control tuning. 3 Smooth position control with maximum acceleration and jerk limits based on jerk optimized trajectory generator (different algorithm than 1). 4 Smooth position control where sticks map to acceleration and there's a virtual brake drag</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_POS_MODE/values/0/description</name>
    <message>
      <source>Simple position control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_POS_MODE/values/3/description</name>
    <message>
      <source>Smooth position control (Jerk optimized)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_POS_MODE/values/4/description</name>
    <message>
      <source>Acceleration based input</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_THR_CURVE/shortDesc</name>
    <message>
      <source>Thrust curve in Manual Mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_THR_CURVE/longDesc</name>
    <message>
      <source>This parameter defines how the throttle stick input is mapped to commanded thrust in Manual/Stabilized flight mode. In case the default is used ('Rescale to hover thrust'), the stick input is linearly rescaled, such that a centered stick corresponds to the hover throttle (see MPC_THR_HOVER). Select 'No Rescale' to directly map the stick 1:1 to the output. This can be useful in case the hover thrust is very low and the default would lead to too much distortion (e.g. if hover thrust is set to 20%, 80% of the upper thrust range is squeezed into the upper half of the stick range). Note: In case MPC_THR_HOVER is set to 50%, the modes 0 and 1 are the same.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_THR_CURVE/values/0/description</name>
    <message>
      <source>Rescale to hover thrust</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_THR_CURVE/values/1/description</name>
    <message>
      <source>No Rescale</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_THR_HOVER/shortDesc</name>
    <message>
      <source>Hover thrust</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_THR_HOVER/longDesc</name>
    <message>
      <source>Vertical thrust required to hover. This value is mapped to center stick for manual throttle control. With this value set to the thrust required to hover, transition from manual to Altitude or Position mode while hovering will occur with the throttle stick near center, which is then interpreted as (near) zero demand for vertical speed. This parameter is also important for the landing detection to work correctly.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_THR_MAX/shortDesc</name>
    <message>
      <source>Maximum thrust in auto thrust control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_THR_MAX/longDesc</name>
    <message>
      <source>Limit max allowed thrust</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_THR_MIN/shortDesc</name>
    <message>
      <source>Minimum collective thrust in auto thrust control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_THR_MIN/longDesc</name>
    <message>
      <source>It's recommended to set it &gt; 0 to avoid free fall with zero thrust. Note: Without airmode zero thrust leads to zero roll/pitch control authority. (see MC_AIRMODE)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_THR_XY_MARG/shortDesc</name>
    <message>
      <source>Horizontal thrust margin</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_THR_XY_MARG/longDesc</name>
    <message>
      <source>Margin that is kept for horizontal control when prioritizing vertical thrust. To avoid completely starving horizontal control with high vertical error.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_TILTMAX_AIR/shortDesc</name>
    <message>
      <source>Maximum tilt angle in air</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_TILTMAX_AIR/longDesc</name>
    <message>
      <source>Limits maximum tilt in AUTO and POSCTRL modes during flight.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_TILTMAX_LND/shortDesc</name>
    <message>
      <source>Maximum tilt during landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_TILTMAX_LND/longDesc</name>
    <message>
      <source>Limits maximum tilt angle on landing.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_TKO_RAMP_T/shortDesc</name>
    <message>
      <source>Position control smooth takeoff ramp time constant</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_TKO_RAMP_T/longDesc</name>
    <message>
      <source>Increasing this value will make automatic and manual takeoff slower. If it's too slow the drone might scratch the ground and tip over. A time constant of 0 disables the ramp</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_TKO_SPEED/shortDesc</name>
    <message>
      <source>Takeoff climb rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_USE_HTE/shortDesc</name>
    <message>
      <source>Hover thrust source selector</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_USE_HTE/longDesc</name>
    <message>
      <source>Set false to use the fixed parameter MPC_THR_HOVER Set true to use the value computed by the hover thrust estimator</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_USE_HTE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_USE_HTE/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_VELD_LP/shortDesc</name>
    <message>
      <source>Low pass filter cut freq. for numerical velocity derivative</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_VEL_BACK_SC/shortDesc</name>
    <message>
      <source>Ratio between backward and forward maximum velocity</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_VEL_BACK_SC/longDesc</name>
    <message>
      <source>The maximum backward speed is defined by: MPC_VEL_BACK_SC * MPC_VEL_MANUAL</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_VEL_LAT_SC/shortDesc</name>
    <message>
      <source>Ratio between lateral and forward maximum velocity</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_VEL_LAT_SC/longDesc</name>
    <message>
      <source>The maximum lateral speed is defined by: MPC_VEL_LAT_SC * MPC_VEL_MANUAL</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_VEL_MANUAL/shortDesc</name>
    <message>
      <source>Maximum horizontal velocity setpoint for manual controlled mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_VEL_MANUAL/longDesc</name>
    <message>
      <source>If velocity setpoint larger than MPC_XY_VEL_MAX is set, then the setpoint will be capped to MPC_XY_VEL_MAX The maximum lateral and backward speed can be set as a fraction of this parameter using MPC_VEL_LAT_SC and MPC_VEL_BACK_SC, respectively.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_CRUISE/shortDesc</name>
    <message>
      <source>Default horizontal velocity in mission</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_CRUISE/longDesc</name>
    <message>
      <source>Horizontal velocity used when flying autonomously in e.g. Missions, RTL, Goto.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_ERR_MAX/shortDesc</name>
    <message>
      <source>Maximum horizontal error allowed by the trajectory generator</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_ERR_MAX/longDesc</name>
    <message>
      <source>The integration speed of the trajectory setpoint is linearly reduced with the horizontal position tracking error. When the error is above this parameter, the integration of the trajectory is stopped to wait for the drone. This value can be adjusted depending on the tracking capabilities of the vehicle.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_MAN_EXPO/shortDesc</name>
    <message>
      <source>Manual position control stick exponential curve sensitivity</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_MAN_EXPO/longDesc</name>
    <message>
      <source>The higher the value the less sensitivity the stick has around zero while still reaching the maximum value with full stick deflection. 0 Purely linear input curve (default) 1 Purely cubic input curve</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_P/shortDesc</name>
    <message>
      <source>Proportional gain for horizontal position error</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_TRAJ_P/shortDesc</name>
    <message>
      <source>Proportional gain for horizontal trajectory position error</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_VEL_ALL/shortDesc</name>
    <message>
      <source>Overall Horizonal Velocity Limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_VEL_ALL/longDesc</name>
    <message>
      <source>If set to a value greater than zero, other parameters are automatically set (such as MPC_XY_VEL_MAX or MPC_VEL_MANUAL). If set to a negative value, the existing individual parameters are used.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_VEL_D_ACC/shortDesc</name>
    <message>
      <source>Differential gain for horizontal velocity error. Small values help reduce fast oscillations. If value is too big oscillations will appear again</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_VEL_D_ACC/longDesc</name>
    <message>
      <source>defined as correction acceleration in m/s^2 per m/s^2 velocity derivative</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_VEL_I_ACC/shortDesc</name>
    <message>
      <source>Integral gain for horizontal velocity error</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_VEL_I_ACC/longDesc</name>
    <message>
      <source>defined as correction acceleration in m/s^2 per m velocity integral Non-zero value allows to eliminate steady state errors in the presence of disturbances like wind.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_VEL_MAX/shortDesc</name>
    <message>
      <source>Maximum horizontal velocity</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_VEL_MAX/longDesc</name>
    <message>
      <source>Maximum horizontal velocity in AUTO mode. If higher speeds are commanded in a mission they will be capped to this velocity.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_VEL_P_ACC/shortDesc</name>
    <message>
      <source>Proportional gain for horizontal velocity error</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_XY_VEL_P_ACC/longDesc</name>
    <message>
      <source>defined as correction acceleration in m/s^2 per m/s velocity error</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_YAW_EXPO/shortDesc</name>
    <message>
      <source>Manual control stick yaw rotation exponential curve</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_YAW_EXPO/longDesc</name>
    <message>
      <source>The higher the value the less sensitivity the stick has around zero while still reaching the maximum value with full stick deflection. 0 Purely linear input curve (default) 1 Purely cubic input curve</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_MAN_EXPO/shortDesc</name>
    <message>
      <source>Manual control stick vertical exponential curve</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_MAN_EXPO/longDesc</name>
    <message>
      <source>The higher the value the less sensitivity the stick has around zero while still reaching the maximum value with full stick deflection. 0 Purely linear input curve (default) 1 Purely cubic input curve</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_P/shortDesc</name>
    <message>
      <source>Proportional gain for vertical position error</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_VEL_ALL/shortDesc</name>
    <message>
      <source>Overall Vertical Velocity Limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_VEL_ALL/longDesc</name>
    <message>
      <source>If set to a value greater than zero, other parameters are automatically set (such as MPC_Z_VEL_MAX_UP or MPC_LAND_SPEED). If set to a negative value, the existing individual parameters are used.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_VEL_D_ACC/shortDesc</name>
    <message>
      <source>Differential gain for vertical velocity error</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_VEL_D_ACC/longDesc</name>
    <message>
      <source>defined as correction acceleration in m/s^2 per m/s^2 velocity derivative</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_VEL_I_ACC/shortDesc</name>
    <message>
      <source>Integral gain for vertical velocity error</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_VEL_I_ACC/longDesc</name>
    <message>
      <source>defined as correction acceleration in m/s^2 per m velocity integral Non zero value allows hovering thrust estimation on stabilized or autonomous takeoff.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_VEL_MAX_DN/shortDesc</name>
    <message>
      <source>Maximum descent velocity</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_VEL_MAX_DN/longDesc</name>
    <message>
      <source>Descent velocity in manual modes and offboard. For auto modes, see MPC_Z_V_AUTO_DN</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_VEL_MAX_UP/shortDesc</name>
    <message>
      <source>Maximum ascent velocity</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_VEL_MAX_UP/longDesc</name>
    <message>
      <source>Ascent velocity in manual modes and offboard. For auto modes, see MPC_Z_V_AUTO_UP</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_VEL_P_ACC/shortDesc</name>
    <message>
      <source>Proportional gain for vertical velocity error</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_VEL_P_ACC/longDesc</name>
    <message>
      <source>defined as correction acceleration in m/s^2 per m/s velocity error</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_V_AUTO_DN/shortDesc</name>
    <message>
      <source>Automatic descent velocity</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_V_AUTO_DN/longDesc</name>
    <message>
      <source>Descent velocity in auto modes. For manual modes and offboard, see MPC_Z_VEL_MAX_DN</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_V_AUTO_UP/shortDesc</name>
    <message>
      <source>Automatic ascent velocity</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MPC_Z_V_AUTO_UP/longDesc</name>
    <message>
      <source>Ascent velocity in auto modes. For manual modes and offboard, see MPC_Z_VEL_MAX_UP</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_VEHICLE_RESP/shortDesc</name>
    <message>
      <source>Responsiveness</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_VEHICLE_RESP/longDesc</name>
    <message>
      <source>Changes the overall responsiveness of the vehicle. The higher the value, the faster the vehicle will react. If set to a value greater than zero, other parameters are automatically set (such as the acceleration or jerk limits). If set to a negative value, the existing individual parameters are used.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/WV_EN/shortDesc</name>
    <message>
      <source>Enable weathervane</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/WV_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/WV_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/WV_ROLL_MIN/shortDesc</name>
    <message>
      <source>Minimum roll angle setpoint for weathervane controller to demand a yaw-rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/WV_YRATE_MAX/shortDesc</name>
    <message>
      <source>Maximum yawrate the weathervane controller is allowed to demand</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ACRO_EXPO/shortDesc</name>
    <message>
      <source>Acro mode Expo factor for Roll and Pitch</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ACRO_EXPO/longDesc</name>
    <message>
      <source>Exponential factor for tuning the input curve shape. 0 Purely linear input curve 1 Purely cubic input curve</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ACRO_EXPO_Y/shortDesc</name>
    <message>
      <source>Acro mode Expo factor for Yaw</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ACRO_EXPO_Y/longDesc</name>
    <message>
      <source>Exponential factor for tuning the input curve shape. 0 Purely linear input curve 1 Purely cubic input curve</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ACRO_P_MAX/shortDesc</name>
    <message>
      <source>Max acro pitch rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ACRO_P_MAX/longDesc</name>
    <message>
      <source>default: 2 turns per second</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ACRO_R_MAX/shortDesc</name>
    <message>
      <source>Max acro roll rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ACRO_R_MAX/longDesc</name>
    <message>
      <source>default: 2 turns per second</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ACRO_SUPEXPO/shortDesc</name>
    <message>
      <source>Acro mode SuperExpo factor for Roll and Pitch</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ACRO_SUPEXPO/longDesc</name>
    <message>
      <source>SuperExpo factor for refining the input curve shape tuned using MC_ACRO_EXPO. 0 Pure Expo function 0.7 resonable shape enhancement for intuitive stick feel 0.95 very strong bent input curve only near maxima have effect</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ACRO_SUPEXPOY/shortDesc</name>
    <message>
      <source>Acro mode SuperExpo factor for Yaw</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ACRO_SUPEXPOY/longDesc</name>
    <message>
      <source>SuperExpo factor for refining the input curve shape tuned using MC_ACRO_EXPO_Y. 0 Pure Expo function 0.7 resonable shape enhancement for intuitive stick feel 0.95 very strong bent input curve only near maxima have effect</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ACRO_Y_MAX/shortDesc</name>
    <message>
      <source>Max acro yaw rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ACRO_Y_MAX/longDesc</name>
    <message>
      <source>default 1.5 turns per second</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_BAT_SCALE_EN/shortDesc</name>
    <message>
      <source>Battery power level scaler</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_BAT_SCALE_EN/longDesc</name>
    <message>
      <source>This compensates for voltage drop of the battery over time by attempting to normalize performance across the operating range of the battery. The copter should constantly behave as if it was fully charged with reduced max acceleration at lower battery percentages. i.e. if hover is at 0.5 throttle at 100% battery, it will still be 0.5 at 60% battery.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_BAT_SCALE_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_BAT_SCALE_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PITCHRATE_D/shortDesc</name>
    <message>
      <source>Pitch rate D gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PITCHRATE_D/longDesc</name>
    <message>
      <source>Pitch rate differential gain. Small values help reduce fast oscillations. If value is too big oscillations will appear again.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PITCHRATE_FF/shortDesc</name>
    <message>
      <source>Pitch rate feedforward</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PITCHRATE_FF/longDesc</name>
    <message>
      <source>Improves tracking performance.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PITCHRATE_I/shortDesc</name>
    <message>
      <source>Pitch rate I gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PITCHRATE_I/longDesc</name>
    <message>
      <source>Pitch rate integral gain. Can be set to compensate static thrust difference or gravity center offset.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PITCHRATE_K/shortDesc</name>
    <message>
      <source>Pitch rate controller gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PITCHRATE_K/longDesc</name>
    <message>
      <source>Global gain of the controller. This gain scales the P, I and D terms of the controller: output = MC_PITCHRATE_K * (MC_PITCHRATE_P * error + MC_PITCHRATE_I * error_integral + MC_PITCHRATE_D * error_derivative) Set MC_PITCHRATE_P=1 to implement a PID in the ideal form. Set MC_PITCHRATE_K=1 to implement a PID in the parallel form.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PITCHRATE_P/shortDesc</name>
    <message>
      <source>Pitch rate P gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PITCHRATE_P/longDesc</name>
    <message>
      <source>Pitch rate proportional gain, i.e. control output for angular speed error 1 rad/s.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PR_INT_LIM/shortDesc</name>
    <message>
      <source>Pitch rate integrator limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_PR_INT_LIM/longDesc</name>
    <message>
      <source>Pitch rate integrator limit. Can be set to increase the amount of integrator available to counteract disturbances or reduced to improve settling time after large pitch moment trim changes.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ROLLRATE_D/shortDesc</name>
    <message>
      <source>Roll rate D gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ROLLRATE_D/longDesc</name>
    <message>
      <source>Roll rate differential gain. Small values help reduce fast oscillations. If value is too big oscillations will appear again.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ROLLRATE_FF/shortDesc</name>
    <message>
      <source>Roll rate feedforward</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ROLLRATE_FF/longDesc</name>
    <message>
      <source>Improves tracking performance.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ROLLRATE_I/shortDesc</name>
    <message>
      <source>Roll rate I gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ROLLRATE_I/longDesc</name>
    <message>
      <source>Roll rate integral gain. Can be set to compensate static thrust difference or gravity center offset.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ROLLRATE_K/shortDesc</name>
    <message>
      <source>Roll rate controller gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ROLLRATE_K/longDesc</name>
    <message>
      <source>Global gain of the controller. This gain scales the P, I and D terms of the controller: output = MC_ROLLRATE_K * (MC_ROLLRATE_P * error + MC_ROLLRATE_I * error_integral + MC_ROLLRATE_D * error_derivative) Set MC_ROLLRATE_P=1 to implement a PID in the ideal form. Set MC_ROLLRATE_K=1 to implement a PID in the parallel form.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ROLLRATE_P/shortDesc</name>
    <message>
      <source>Roll rate P gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_ROLLRATE_P/longDesc</name>
    <message>
      <source>Roll rate proportional gain, i.e. control output for angular speed error 1 rad/s.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_RR_INT_LIM/shortDesc</name>
    <message>
      <source>Roll rate integrator limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_RR_INT_LIM/longDesc</name>
    <message>
      <source>Roll rate integrator limit. Can be set to increase the amount of integrator available to counteract disturbances or reduced to improve settling time after large roll moment trim changes.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YAWRATE_D/shortDesc</name>
    <message>
      <source>Yaw rate D gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YAWRATE_D/longDesc</name>
    <message>
      <source>Yaw rate differential gain. Small values help reduce fast oscillations. If value is too big oscillations will appear again.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YAWRATE_FF/shortDesc</name>
    <message>
      <source>Yaw rate feedforward</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YAWRATE_FF/longDesc</name>
    <message>
      <source>Improves tracking performance.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YAWRATE_I/shortDesc</name>
    <message>
      <source>Yaw rate I gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YAWRATE_I/longDesc</name>
    <message>
      <source>Yaw rate integral gain. Can be set to compensate static thrust difference or gravity center offset.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YAWRATE_K/shortDesc</name>
    <message>
      <source>Yaw rate controller gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YAWRATE_K/longDesc</name>
    <message>
      <source>Global gain of the controller. This gain scales the P, I and D terms of the controller: output = MC_YAWRATE_K * (MC_YAWRATE_P * error + MC_YAWRATE_I * error_integral + MC_YAWRATE_D * error_derivative) Set MC_YAWRATE_P=1 to implement a PID in the ideal form. Set MC_YAWRATE_K=1 to implement a PID in the parallel form.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YAWRATE_P/shortDesc</name>
    <message>
      <source>Yaw rate P gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YAWRATE_P/longDesc</name>
    <message>
      <source>Yaw rate proportional gain, i.e. control output for angular speed error 1 rad/s.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YR_INT_LIM/shortDesc</name>
    <message>
      <source>Yaw rate integrator limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MC_YR_INT_LIM/longDesc</name>
    <message>
      <source>Yaw rate integrator limit. Can be set to increase the amount of integrator available to counteract disturbances or reduced to improve settling time after large yaw moment trim changes.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/OSD_ATXXXX_CFG/shortDesc</name>
    <message>
      <source>Enable/Disable the ATXXX OSD Chip</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/OSD_ATXXXX_CFG/longDesc</name>
    <message>
      <source>Configure the ATXXXX OSD Chip (mounted on the OmnibusF4SD board) and select the transmission standard.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/OSD_ATXXXX_CFG/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/OSD_ATXXXX_CFG/values/1/description</name>
    <message>
      <source>NTSC</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/OSD_ATXXXX_CFG/values/2/description</name>
    <message>
      <source>PAL</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MOT_SLEW_MAX/shortDesc</name>
    <message>
      <source>Minimum motor rise time (slew rate limit)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/MOT_SLEW_MAX/longDesc</name>
    <message>
      <source>Minimum time allowed for the motor input signal to pass through a range of 1000 PWM units. A value x means that the motor signal can only go from 1000 to 2000 PWM in minimum x seconds. Zero means that slew rate limiting is disabled.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PWM_SBUS_MODE/shortDesc</name>
    <message>
      <source>S.BUS out</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PWM_SBUS_MODE/longDesc</name>
    <message>
      <source>Set to 1 to enable S.BUS version 1 output instead of RSSI.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PWM_SBUS_MODE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PWM_SBUS_MODE/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/THR_MDL_FAC/shortDesc</name>
    <message>
      <source>Thrust to motor control signal model parameter</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/THR_MDL_FAC/longDesc</name>
    <message>
      <source>Parameter used to model the nonlinear relationship between motor control signal (e.g. PWM) and static thrust. The model is: rel_thrust = factor * rel_signal^2 + (1-factor) * rel_signal, where rel_thrust is the normalized thrust between 0 and 1, and rel_signal is the relative motor control signal between 0 and 1.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PLD_BTOUT/shortDesc</name>
    <message>
      <source>Landing Target Timeout</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PLD_BTOUT/longDesc</name>
    <message>
      <source>Time after which the landing target is considered lost without any new measurements.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PLD_FAPPR_ALT/shortDesc</name>
    <message>
      <source>Final approach altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PLD_FAPPR_ALT/longDesc</name>
    <message>
      <source>Allow final approach (without horizontal positioning) if losing landing target closer than this to the ground.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PLD_HACC_RAD/shortDesc</name>
    <message>
      <source>Horizontal acceptance radius</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PLD_HACC_RAD/longDesc</name>
    <message>
      <source>Start descending if closer above landing target than this.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PLD_MAX_SRCH/shortDesc</name>
    <message>
      <source>Maximum number of search attempts</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PLD_MAX_SRCH/longDesc</name>
    <message>
      <source>Maximum number of times to search for the landing target if it is lost during the precision landing.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PLD_SRCH_ALT/shortDesc</name>
    <message>
      <source>Search altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PLD_SRCH_ALT/longDesc</name>
    <message>
      <source>Altitude above home to which to climb when searching for the landing target.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PLD_SRCH_TOUT/shortDesc</name>
    <message>
      <source>Search timeout</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PLD_SRCH_TOUT/longDesc</name>
    <message>
      <source>Time allowed to search for the landing target before falling back to normal landing.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC10_DZ/shortDesc</name>
    <message>
      <source>RC channel 10 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC10_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC10_MAX/shortDesc</name>
    <message>
      <source>RC channel 10 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC10_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC10_MIN/shortDesc</name>
    <message>
      <source>RC channel 10 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC10_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC10_REV/shortDesc</name>
    <message>
      <source>RC channel 10 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC10_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC10_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC10_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC10_TRIM/shortDesc</name>
    <message>
      <source>RC channel 10 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC10_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC11_DZ/shortDesc</name>
    <message>
      <source>RC channel 11 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC11_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC11_MAX/shortDesc</name>
    <message>
      <source>RC channel 11 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC11_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC11_MIN/shortDesc</name>
    <message>
      <source>RC channel 11 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC11_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC11_REV/shortDesc</name>
    <message>
      <source>RC channel 11 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC11_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC11_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC11_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC11_TRIM/shortDesc</name>
    <message>
      <source>RC channel 11 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC11_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC12_DZ/shortDesc</name>
    <message>
      <source>RC channel 12 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC12_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC12_MAX/shortDesc</name>
    <message>
      <source>RC channel 12 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC12_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC12_MIN/shortDesc</name>
    <message>
      <source>RC channel 12 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC12_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC12_REV/shortDesc</name>
    <message>
      <source>RC channel 12 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC12_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC12_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC12_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC12_TRIM/shortDesc</name>
    <message>
      <source>RC channel 12 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC12_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC13_DZ/shortDesc</name>
    <message>
      <source>RC channel 13 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC13_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC13_MAX/shortDesc</name>
    <message>
      <source>RC channel 13 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC13_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC13_MIN/shortDesc</name>
    <message>
      <source>RC channel 13 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC13_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC13_REV/shortDesc</name>
    <message>
      <source>RC channel 13 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC13_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC13_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC13_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC13_TRIM/shortDesc</name>
    <message>
      <source>RC channel 13 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC13_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC14_DZ/shortDesc</name>
    <message>
      <source>RC channel 14 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC14_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC14_MAX/shortDesc</name>
    <message>
      <source>RC channel 14 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC14_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC14_MIN/shortDesc</name>
    <message>
      <source>RC channel 14 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC14_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC14_REV/shortDesc</name>
    <message>
      <source>RC channel 14 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC14_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC14_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC14_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC14_TRIM/shortDesc</name>
    <message>
      <source>RC channel 14 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC14_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC15_DZ/shortDesc</name>
    <message>
      <source>RC channel 15 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC15_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC15_MAX/shortDesc</name>
    <message>
      <source>RC channel 15 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC15_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC15_MIN/shortDesc</name>
    <message>
      <source>RC channel 15 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC15_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC15_REV/shortDesc</name>
    <message>
      <source>RC channel 15 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC15_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC15_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC15_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC15_TRIM/shortDesc</name>
    <message>
      <source>RC channel 15 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC15_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC16_DZ/shortDesc</name>
    <message>
      <source>RC channel 16 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC16_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC16_MAX/shortDesc</name>
    <message>
      <source>RC channel 16 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC16_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC16_MIN/shortDesc</name>
    <message>
      <source>RC channel 16 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC16_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC16_REV/shortDesc</name>
    <message>
      <source>RC channel 16 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC16_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC16_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC16_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC16_TRIM/shortDesc</name>
    <message>
      <source>RC channel 16 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC16_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC17_DZ/shortDesc</name>
    <message>
      <source>RC channel 17 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC17_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC17_MAX/shortDesc</name>
    <message>
      <source>RC channel 17 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC17_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC17_MIN/shortDesc</name>
    <message>
      <source>RC channel 17 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC17_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC17_REV/shortDesc</name>
    <message>
      <source>RC channel 17 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC17_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC17_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC17_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC17_TRIM/shortDesc</name>
    <message>
      <source>RC channel 17 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC17_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC18_DZ/shortDesc</name>
    <message>
      <source>RC channel 18 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC18_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC18_MAX/shortDesc</name>
    <message>
      <source>RC channel 18 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC18_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC18_MIN/shortDesc</name>
    <message>
      <source>RC channel 18 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC18_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC18_REV/shortDesc</name>
    <message>
      <source>RC channel 18 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC18_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC18_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC18_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC18_TRIM/shortDesc</name>
    <message>
      <source>RC channel 18 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC18_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC1_DZ/shortDesc</name>
    <message>
      <source>RC channel 1 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC1_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC1_MAX/shortDesc</name>
    <message>
      <source>RC channel 1 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC1_MAX/longDesc</name>
    <message>
      <source>Maximum value for RC channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC1_MIN/shortDesc</name>
    <message>
      <source>RC channel 1 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC1_MIN/longDesc</name>
    <message>
      <source>Minimum value for RC channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC1_REV/shortDesc</name>
    <message>
      <source>RC channel 1 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC1_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC1_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC1_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC1_TRIM/shortDesc</name>
    <message>
      <source>RC channel 1 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC1_TRIM/longDesc</name>
    <message>
      <source>Mid point value (same as min for throttle)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC2_DZ/shortDesc</name>
    <message>
      <source>RC channel 2 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC2_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC2_MAX/shortDesc</name>
    <message>
      <source>RC channel 2 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC2_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC2_MIN/shortDesc</name>
    <message>
      <source>RC channel 2 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC2_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC2_REV/shortDesc</name>
    <message>
      <source>RC channel 2 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC2_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC2_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC2_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC2_TRIM/shortDesc</name>
    <message>
      <source>RC channel 2 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC2_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC3_DZ/shortDesc</name>
    <message>
      <source>RC channel 3 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC3_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC3_MAX/shortDesc</name>
    <message>
      <source>RC channel 3 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC3_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC3_MIN/shortDesc</name>
    <message>
      <source>RC channel 3 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC3_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC3_REV/shortDesc</name>
    <message>
      <source>RC channel 3 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC3_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC3_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC3_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC3_TRIM/shortDesc</name>
    <message>
      <source>RC channel 3 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC3_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC4_DZ/shortDesc</name>
    <message>
      <source>RC channel 4 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC4_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC4_MAX/shortDesc</name>
    <message>
      <source>RC channel 4 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC4_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC4_MIN/shortDesc</name>
    <message>
      <source>RC channel 4 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC4_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC4_REV/shortDesc</name>
    <message>
      <source>RC channel 4 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC4_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC4_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC4_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC4_TRIM/shortDesc</name>
    <message>
      <source>RC channel 4 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC4_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC5_DZ/shortDesc</name>
    <message>
      <source>RC channel 5 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC5_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC5_MAX/shortDesc</name>
    <message>
      <source>RC channel 5 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC5_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC5_MIN/shortDesc</name>
    <message>
      <source>RC channel 5 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC5_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC5_REV/shortDesc</name>
    <message>
      <source>RC channel 5 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC5_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC5_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC5_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC5_TRIM/shortDesc</name>
    <message>
      <source>RC channel 5 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC5_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC6_DZ/shortDesc</name>
    <message>
      <source>RC channel 6 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC6_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC6_MAX/shortDesc</name>
    <message>
      <source>RC channel 6 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC6_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC6_MIN/shortDesc</name>
    <message>
      <source>RC channel 6 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC6_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC6_REV/shortDesc</name>
    <message>
      <source>RC channel 6 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC6_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC6_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC6_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC6_TRIM/shortDesc</name>
    <message>
      <source>RC channel 6 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC6_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC7_DZ/shortDesc</name>
    <message>
      <source>RC channel 7 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC7_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC7_MAX/shortDesc</name>
    <message>
      <source>RC channel 7 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC7_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC7_MIN/shortDesc</name>
    <message>
      <source>RC channel 7 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC7_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC7_REV/shortDesc</name>
    <message>
      <source>RC channel 7 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC7_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC7_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC7_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC7_TRIM/shortDesc</name>
    <message>
      <source>RC channel 7 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC7_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC8_DZ/shortDesc</name>
    <message>
      <source>RC channel 8 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC8_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC8_MAX/shortDesc</name>
    <message>
      <source>RC channel 8 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC8_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC8_MIN/shortDesc</name>
    <message>
      <source>RC channel 8 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC8_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC8_REV/shortDesc</name>
    <message>
      <source>RC channel 8 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC8_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC8_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC8_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC8_TRIM/shortDesc</name>
    <message>
      <source>RC channel 8 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC8_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC9_DZ/shortDesc</name>
    <message>
      <source>RC channel 9 dead zone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC9_DZ/longDesc</name>
    <message>
      <source>The +- range of this value around the trim value will be considered as zero.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC9_MAX/shortDesc</name>
    <message>
      <source>RC channel 9 maximum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC9_MAX/longDesc</name>
    <message>
      <source>Maximum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC9_MIN/shortDesc</name>
    <message>
      <source>RC channel 9 minimum</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC9_MIN/longDesc</name>
    <message>
      <source>Minimum value for this channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC9_REV/shortDesc</name>
    <message>
      <source>RC channel 9 reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC9_REV/longDesc</name>
    <message>
      <source>Set to -1 to reverse channel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC9_REV/values/-1.0/description</name>
    <message>
      <source>Reverse</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC9_REV/values/1.0/description</name>
    <message>
      <source>Normal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC9_TRIM/shortDesc</name>
    <message>
      <source>RC channel 9 trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC9_TRIM/longDesc</name>
    <message>
      <source>Mid point value (has to be set to the same as min for throttle channel).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_CHAN_CNT/shortDesc</name>
    <message>
      <source>RC channel count</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_CHAN_CNT/longDesc</name>
    <message>
      <source>This parameter is used by Ground Station software to save the number of channels which were used during RC calibration. It is only meant for ground station use.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_FAILS_THR/shortDesc</name>
    <message>
      <source>Failsafe channel PWM threshold</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_FAILS_THR/longDesc</name>
    <message>
      <source>Use RC_MAP_FAILSAFE to specify which channel is used to indicate RC loss via this theshold. By default this is the throttle channel. Set to a PWM value slightly above the PWM value for the channel (e.g. throttle) in a failsafe event, but below the minimum PWM value for the channel during normal operation. Note: The default value of 0 disables the feature (it is below the expected range).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/shortDesc</name>
    <message>
      <source>AUX1 Passthrough RC channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/longDesc</name>
    <message>
      <source>Default function: Camera pitch</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX1/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/shortDesc</name>
    <message>
      <source>AUX2 Passthrough RC channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/longDesc</name>
    <message>
      <source>Default function: Camera roll</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX2/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/shortDesc</name>
    <message>
      <source>AUX3 Passthrough RC channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/longDesc</name>
    <message>
      <source>Default function: Camera azimuth / yaw</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX3/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/shortDesc</name>
    <message>
      <source>AUX4 Passthrough RC channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX4/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/shortDesc</name>
    <message>
      <source>AUX5 Passthrough RC channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX5/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/shortDesc</name>
    <message>
      <source>AUX6 Passthrough RC channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_AUX6/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/shortDesc</name>
    <message>
      <source>Failsafe channel mapping</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/longDesc</name>
    <message>
      <source>Configures which RC channel is used by the receiver to indicate the signal was lost (on receivers that use output a fixed signal value to report lost signal). If set to 0, the channel mapped to throttle is used. Use RC_FAILS_THR to set the threshold indicating lost signal. By default it's below the expected range and hence disabled.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FAILSAFE/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/shortDesc</name>
    <message>
      <source>PARAM1 tuning channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/longDesc</name>
    <message>
      <source>Can be used for parameter tuning with the RC. This one is further referenced as the 1st parameter channel. Set to 0 to deactivate *</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM1/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/shortDesc</name>
    <message>
      <source>PARAM2 tuning channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/longDesc</name>
    <message>
      <source>Can be used for parameter tuning with the RC. This one is further referenced as the 2nd parameter channel. Set to 0 to deactivate *</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM2/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/shortDesc</name>
    <message>
      <source>PARAM3 tuning channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/longDesc</name>
    <message>
      <source>Can be used for parameter tuning with the RC. This one is further referenced as the 3th parameter channel. Set to 0 to deactivate *</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PARAM3/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/shortDesc</name>
    <message>
      <source>Pitch control channel mapping</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/longDesc</name>
    <message>
      <source>The channel index (starting from 1 for channel 1) indicates which channel should be used for reading pitch inputs from. A value of zero indicates the switch is not assigned.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_PITCH/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/shortDesc</name>
    <message>
      <source>Roll control channel mapping</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/longDesc</name>
    <message>
      <source>The channel index (starting from 1 for channel 1) indicates which channel should be used for reading roll inputs from. A value of zero indicates the switch is not assigned.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ROLL/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/shortDesc</name>
    <message>
      <source>Throttle control channel mapping</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/longDesc</name>
    <message>
      <source>The channel index (starting from 1 for channel 1) indicates which channel should be used for reading throttle inputs from. A value of zero indicates the switch is not assigned.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_THROTTLE/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/shortDesc</name>
    <message>
      <source>Yaw control channel mapping</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/longDesc</name>
    <message>
      <source>The channel index (starting from 1 for channel 1) indicates which channel should be used for reading yaw inputs from. A value of zero indicates the switch is not assigned.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_YAW/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/shortDesc</name>
    <message>
      <source>PWM input channel that provides RSSI</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/longDesc</name>
    <message>
      <source>0: do not read RSSI from input channel 1-18: read RSSI from specified input channel Specify the range for RSSI input with RC_RSSI_PWM_MIN and RC_RSSI_PWM_MAX parameters.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_CHAN/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_MAX/shortDesc</name>
    <message>
      <source>Max input value for RSSI reading</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_MAX/longDesc</name>
    <message>
      <source>Only used if RC_RSSI_PWM_CHAN &gt; 0</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_MIN/shortDesc</name>
    <message>
      <source>Min input value for RSSI reading</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RSSI_PWM_MIN/longDesc</name>
    <message>
      <source>Only used if RC_RSSI_PWM_CHAN &gt; 0</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIM_PITCH/shortDesc</name>
    <message>
      <source>Pitch trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIM_PITCH/longDesc</name>
    <message>
      <source>The trim value is the actuator control value the system needs for straight and level flight. It can be calibrated by flying manually straight and level using the RC trims and copying them using the GCS.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIM_ROLL/shortDesc</name>
    <message>
      <source>Roll trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIM_ROLL/longDesc</name>
    <message>
      <source>The trim value is the actuator control value the system needs for straight and level flight. It can be calibrated by flying manually straight and level using the RC trims and copying them using the GCS.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIM_YAW/shortDesc</name>
    <message>
      <source>Yaw trim</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TRIM_YAW/longDesc</name>
    <message>
      <source>The trim value is the actuator control value the system needs for straight and level flight. It can be calibrated by flying manually straight and level using the RC trims and copying them using the GCS.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_ARMSWITCH_TH/shortDesc</name>
    <message>
      <source>Threshold for the arm switch</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_ARMSWITCH_TH/longDesc</name>
    <message>
      <source>0-1 indicate where in the full channel range the threshold sits 0 : min 1 : max sign indicates polarity of comparison positive : true when channel&gt;th negative : true when channel&lt;th</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_GEAR_TH/shortDesc</name>
    <message>
      <source>Threshold for the landing gear switch</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_GEAR_TH/longDesc</name>
    <message>
      <source>0-1 indicate where in the full channel range the threshold sits 0 : min 1 : max sign indicates polarity of comparison positive : true when channel&gt;th negative : true when channel&lt;th</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_KILLSWITCH_TH/shortDesc</name>
    <message>
      <source>Threshold for the kill switch</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_KILLSWITCH_TH/longDesc</name>
    <message>
      <source>0-1 indicate where in the full channel range the threshold sits 0 : min 1 : max sign indicates polarity of comparison positive : true when channel&gt;th negative : true when channel&lt;th</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_LOITER_TH/shortDesc</name>
    <message>
      <source>Threshold for selecting loiter mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_LOITER_TH/longDesc</name>
    <message>
      <source>0-1 indicate where in the full channel range the threshold sits 0 : min 1 : max sign indicates polarity of comparison positive : true when channel&gt;th negative : true when channel&lt;th</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/shortDesc</name>
    <message>
      <source>Acro switch channel (deprecated)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ACRO_SW/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/shortDesc</name>
    <message>
      <source>Arm switch channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/longDesc</name>
    <message>
      <source>Use it to arm/disarm via switch instead of default throttle stick. If this is assigned, arming and disarming via stick is disabled.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_ARM_SW/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/shortDesc</name>
    <message>
      <source>Flaps channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLAPS/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/shortDesc</name>
    <message>
      <source>Single channel flight mode selection</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/longDesc</name>
    <message>
      <source>If this parameter is non-zero, flight modes are only selected by this channel and are assigned to six slots.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTMODE/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/shortDesc</name>
    <message>
      <source>Button flight mode selection</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/longDesc</name>
    <message>
      <source>This bitmask allows to specify multiple channels for changing flight modes using momentary buttons. Each channel is assigned to a mode slot ((lowest channel = slot 1). The resulting modes for each slot X is defined by the COM_FLTMODEX parameters. The functionality can be used only if RC_MAP_FLTMODE is disabled. The maximum number of available slots and hence bits set in the mask is 6.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/0/description</name>
    <message>
      <source>Mask Channel 1 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/1/description</name>
    <message>
      <source>Mask Channel 2 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/2/description</name>
    <message>
      <source>Mask Channel 3 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/3/description</name>
    <message>
      <source>Mask Channel 4 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/4/description</name>
    <message>
      <source>Mask Channel 5 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/5/description</name>
    <message>
      <source>Mask Channel 6 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/6/description</name>
    <message>
      <source>Mask Channel 7 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/7/description</name>
    <message>
      <source>Mask Channel 8 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/8/description</name>
    <message>
      <source>Mask Channel 9 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/9/description</name>
    <message>
      <source>Mask Channel 10 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/10/description</name>
    <message>
      <source>Mask Channel 11 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/11/description</name>
    <message>
      <source>Mask Channel 12 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/12/description</name>
    <message>
      <source>Mask Channel 13 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/13/description</name>
    <message>
      <source>Mask Channel 14 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/14/description</name>
    <message>
      <source>Mask Channel 15 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/15/description</name>
    <message>
      <source>Mask Channel 16 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/16/description</name>
    <message>
      <source>Mask Channel 17 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_FLTM_BTN/bitmask/17/description</name>
    <message>
      <source>Mask Channel 18 as a mode button</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/shortDesc</name>
    <message>
      <source>Landing gear switch channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_GEAR_SW/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/shortDesc</name>
    <message>
      <source>Emergency Kill switch channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_KILL_SW/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/shortDesc</name>
    <message>
      <source>Loiter switch channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_LOITER_SW/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/shortDesc</name>
    <message>
      <source>Manual switch channel mapping (deprecated)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MAN_SW/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/shortDesc</name>
    <message>
      <source>Mode switch channel mapping (deprecated)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/longDesc</name>
    <message>
      <source>This is the main flight mode selector. The channel index (starting from 1 for channel 1) indicates which channel should be used for deciding about the main mode. A value of zero indicates the switch is not assigned.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_MODE_SW/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/shortDesc</name>
    <message>
      <source>Offboard switch channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_OFFB_SW/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/shortDesc</name>
    <message>
      <source>Position Control switch channel (deprecated)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_POSCTL_SW/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/shortDesc</name>
    <message>
      <source>Rattitude switch channel (deprecated)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RATT_SW/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/shortDesc</name>
    <message>
      <source>Return switch channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_RETURN_SW/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/shortDesc</name>
    <message>
      <source>Stabilize switch channel mapping  (deprecated)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_STAB_SW/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/shortDesc</name>
    <message>
      <source>VTOL transition switch channel mapping</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/0/description</name>
    <message>
      <source>Unassigned</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/1/description</name>
    <message>
      <source>Channel 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/2/description</name>
    <message>
      <source>Channel 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/3/description</name>
    <message>
      <source>Channel 3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/4/description</name>
    <message>
      <source>Channel 4</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/5/description</name>
    <message>
      <source>Channel 5</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/6/description</name>
    <message>
      <source>Channel 6</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/7/description</name>
    <message>
      <source>Channel 7</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/8/description</name>
    <message>
      <source>Channel 8</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/9/description</name>
    <message>
      <source>Channel 9</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/10/description</name>
    <message>
      <source>Channel 10</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/11/description</name>
    <message>
      <source>Channel 11</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/12/description</name>
    <message>
      <source>Channel 12</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/13/description</name>
    <message>
      <source>Channel 13</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/14/description</name>
    <message>
      <source>Channel 14</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/15/description</name>
    <message>
      <source>Channel 15</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/16/description</name>
    <message>
      <source>Channel 16</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/17/description</name>
    <message>
      <source>Channel 17</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_MAP_TRANS_SW/values/18/description</name>
    <message>
      <source>Channel 18</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_OFFB_TH/shortDesc</name>
    <message>
      <source>Threshold for selecting offboard mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_OFFB_TH/longDesc</name>
    <message>
      <source>0-1 indicate where in the full channel range the threshold sits 0 : min 1 : max sign indicates polarity of comparison positive : true when channel&gt;th negative : true when channel&lt;th</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RETURN_TH/shortDesc</name>
    <message>
      <source>Threshold for selecting return to launch mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_RETURN_TH/longDesc</name>
    <message>
      <source>0-1 indicate where in the full channel range the threshold sits 0 : min 1 : max sign indicates polarity of comparison positive : true when channel&gt;th negative : true when channel&lt;th</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_TRANS_TH/shortDesc</name>
    <message>
      <source>Threshold for the VTOL transition switch</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RC_TRANS_TH/longDesc</name>
    <message>
      <source>0-1 indicate where in the full channel range the threshold sits 0 : min 1 : max sign indicates polarity of comparison positive : true when channel&gt;th negative : true when channel&lt;th</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_CONE_ANG/shortDesc</name>
    <message>
      <source>Half-angle of the return mode altitude cone</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_CONE_ANG/longDesc</name>
    <message>
      <source>Defines the half-angle of a cone centered around the destination position that affects the altitude at which the vehicle returns.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_CONE_ANG/values/0/description</name>
    <message>
      <source>No cone, always climb to RTL_RETURN_ALT above destination.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_CONE_ANG/values/25/description</name>
    <message>
      <source>25 degrees half cone angle.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_CONE_ANG/values/45/description</name>
    <message>
      <source>45 degrees half cone angle.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_CONE_ANG/values/65/description</name>
    <message>
      <source>65 degrees half cone angle.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_CONE_ANG/values/80/description</name>
    <message>
      <source>80 degrees half cone angle.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_CONE_ANG/values/90/description</name>
    <message>
      <source>Only climb to at least RTL_DESCEND_ALT above destination.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_DESCEND_ALT/shortDesc</name>
    <message>
      <source>Return mode loiter altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_DESCEND_ALT/longDesc</name>
    <message>
      <source>Descend to this altitude (above destination position) after return, and wait for time defined in RTL_LAND_DELAY. Land (i.e. slowly descend) from this altitude if autolanding allowed.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_HDG_MD/shortDesc</name>
    <message>
      <source>RTL heading mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_HDG_MD/longDesc</name>
    <message>
      <source>Defines the heading behavior during RTL</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_HDG_MD/values/0/description</name>
    <message>
      <source>Towards next waypoint.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_HDG_MD/values/1/description</name>
    <message>
      <source>Heading matches destination.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_HDG_MD/values/2/description</name>
    <message>
      <source>Use current heading.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_LAND_DELAY/shortDesc</name>
    <message>
      <source>Return mode delay</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_LAND_DELAY/longDesc</name>
    <message>
      <source>Delay before landing (after initial descent) in Return mode. If set to -1 the system will not land but loiter at RTL_DESCEND_ALT.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_LOITER_RAD/shortDesc</name>
    <message>
      <source>Loiter radius for rtl descend</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_LOITER_RAD/longDesc</name>
    <message>
      <source>Set the radius for loitering to a safe altitude for VTOL transition.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_MIN_DIST/shortDesc</name>
    <message>
      <source>Horizontal radius from return point within which special rules for return mode apply</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_MIN_DIST/longDesc</name>
    <message>
      <source>The return altitude will be calculated based on RTL_CONE_ANG parameter. The yaw setpoint will switch to the one defined by corresponding waypoint.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_PLD_MD/shortDesc</name>
    <message>
      <source>RTL precision land mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_PLD_MD/longDesc</name>
    <message>
      <source>Use precision landing when doing an RTL landing phase.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_PLD_MD/values/0/description</name>
    <message>
      <source>No precision landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_PLD_MD/values/1/description</name>
    <message>
      <source>Opportunistic precision landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_PLD_MD/values/2/description</name>
    <message>
      <source>Required precision landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_RETURN_ALT/shortDesc</name>
    <message>
      <source>Return mode return altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_RETURN_ALT/longDesc</name>
    <message>
      <source>Default minimum altitude above destination (e.g. home, safe point, landing pattern) for return flight. This is affected by RTL_MIN_DIST and RTL_CONE_ANG.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_TYPE/shortDesc</name>
    <message>
      <source>Return type</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_TYPE/longDesc</name>
    <message>
      <source>Return mode destination and flight path (home location, rally point, mission landing pattern, reverse mission)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_TYPE/values/0/description</name>
    <message>
      <source>Return to closest safe point (home or rally point) via direct path.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_TYPE/values/1/description</name>
    <message>
      <source>Return to closest safe point other than home (mission landing pattern or rally point), via direct path. If no mission landing or rally points are defined return home via direct path. Always chose closest safe landing point if vehicle is a VTOL in hover mode.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_TYPE/values/2/description</name>
    <message>
      <source>Return to a planned mission landing, if available, using the mission path, else return to home via the reverse mission path. Do not consider rally points.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_TYPE/values/3/description</name>
    <message>
      <source>Return via direct path to closest destination: home, start of mission landing pattern or safe point. If the destination is a mission landing pattern, follow the pattern to land.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_TIME_FACTOR/shortDesc</name>
    <message>
      <source>RTL time estimate safety margin factor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_TIME_FACTOR/longDesc</name>
    <message>
      <source>Safety factor that is used to scale the actual RTL time estiamte. Time with margin = RTL_TIME_FACTOR * time + RTL_TIME_MARGIN</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_TIME_MARGIN/shortDesc</name>
    <message>
      <source>RTL time estimate safety margin offset</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RTL_TIME_MARGIN/longDesc</name>
    <message>
      <source>Margin that is added to the time estimate, after it has already been scaled Time with margin = RTL_TIME_FACTOR * time + RTL_TIME_MARGIN</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_ADDRESS/shortDesc</name>
    <message>
      <source>Address of the Roboclaw</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_ADDRESS/longDesc</name>
    <message>
      <source>The Roboclaw can be configured to have an address from 0x80 to 0x87, inclusive. It must be configured to match this parameter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_ADDRESS/values/128/description</name>
    <message>
      <source>0x80</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_ADDRESS/values/129/description</name>
    <message>
      <source>0x81</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_ADDRESS/values/130/description</name>
    <message>
      <source>0x82</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_ADDRESS/values/131/description</name>
    <message>
      <source>0x83</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_ADDRESS/values/132/description</name>
    <message>
      <source>0x84</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_ADDRESS/values/133/description</name>
    <message>
      <source>0x85</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_ADDRESS/values/134/description</name>
    <message>
      <source>0x86</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_ADDRESS/values/135/description</name>
    <message>
      <source>0x87</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_BAUD/shortDesc</name>
    <message>
      <source>Roboclaw serial baud rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_BAUD/longDesc</name>
    <message>
      <source>Baud rate of the serial communication with the Roboclaw. The Roboclaw must be configured to match this rate.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_BAUD/values/2400/description</name>
    <message>
      <source>2400 baud</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_BAUD/values/9600/description</name>
    <message>
      <source>9600 baud</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_BAUD/values/19200/description</name>
    <message>
      <source>19200 baud</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_BAUD/values/38400/description</name>
    <message>
      <source>38400 baud</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_BAUD/values/57600/description</name>
    <message>
      <source>57600 baud</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_BAUD/values/115200/description</name>
    <message>
      <source>115200 baud</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_BAUD/values/230400/description</name>
    <message>
      <source>230400 baud</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_BAUD/values/460800/description</name>
    <message>
      <source>460800 baud</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_COUNTS_REV/shortDesc</name>
    <message>
      <source>Encoder counts per revolution</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_COUNTS_REV/longDesc</name>
    <message>
      <source>Number of encoder counts for one revolution. The roboclaw treats analog encoders (potentiometers) as having 2047 counts per rev. The default value of 1200 corresponds to the default configuration of the Aion R1 rover.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_READ_PER/shortDesc</name>
    <message>
      <source>Encoder read period</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_READ_PER/longDesc</name>
    <message>
      <source>How long to wait, in Milliseconds, between reading wheel encoder values over Uart from the Roboclaw</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_WRITE_PER/shortDesc</name>
    <message>
      <source>Uart write period</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RBCLW_WRITE_PER/longDesc</name>
    <message>
      <source>How long to wait, in Milliseconds, between writing actuator controls over Uart to the Roboclaw</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_L1_DAMPING/shortDesc</name>
    <message>
      <source>L1 damping</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_L1_DAMPING/longDesc</name>
    <message>
      <source>Damping factor for L1 control.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_L1_DIST/shortDesc</name>
    <message>
      <source>L1 distance</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_L1_DIST/longDesc</name>
    <message>
      <source>This is the distance at which the next waypoint is activated. This should be set to about 2-4x of GND_WHEEL_BASE and not smaller than one meter (due to GPS accuracy).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_L1_PERIOD/shortDesc</name>
    <message>
      <source>L1 period</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_L1_PERIOD/longDesc</name>
    <message>
      <source>This is the L1 distance and defines the tracking point ahead of the rover it's following. Use values around 2-5m for a 0.3m wheel base. Tuning instructions: Shorten slowly during tuning until response is sharp without oscillation.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_MAN_Y_MAX/shortDesc</name>
    <message>
      <source>Max manual yaw rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_MAX_ANG/shortDesc</name>
    <message>
      <source>Maximum turn angle for Ackerman steering</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_MAX_ANG/longDesc</name>
    <message>
      <source>At a control output of 0, the steering wheels are at 0 radians. At a control output of 1, the steering wheels are at GND_MAX_ANG radians.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SPEED_D/shortDesc</name>
    <message>
      <source>Speed proportional gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SPEED_D/longDesc</name>
    <message>
      <source>This is the derivative gain for the speed closed loop controller</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SPEED_I/shortDesc</name>
    <message>
      <source>Speed Integral gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SPEED_I/longDesc</name>
    <message>
      <source>This is the integral gain for the speed closed loop controller</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SPEED_IMAX/shortDesc</name>
    <message>
      <source>Speed integral maximum value</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SPEED_IMAX/longDesc</name>
    <message>
      <source>This is the maxim value the integral can reach to prevent wind-up.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SPEED_MAX/shortDesc</name>
    <message>
      <source>Maximum ground speed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SPEED_P/shortDesc</name>
    <message>
      <source>Speed proportional gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SPEED_P/longDesc</name>
    <message>
      <source>This is the proportional gain for the speed closed loop controller</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SPEED_THR_SC/shortDesc</name>
    <message>
      <source>Speed to throttle scaler</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SPEED_THR_SC/longDesc</name>
    <message>
      <source>This is a gain to map the speed control output to the throttle linearly.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SPEED_TRIM/shortDesc</name>
    <message>
      <source>Trim ground speed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SP_CTRL_MODE/shortDesc</name>
    <message>
      <source>Control mode for speed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SP_CTRL_MODE/longDesc</name>
    <message>
      <source>This allows the user to choose between closed loop gps speed or open loop cruise throttle speed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SP_CTRL_MODE/values/0/description</name>
    <message>
      <source>open loop control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_SP_CTRL_MODE/values/1/description</name>
    <message>
      <source>close the loop with gps speed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_THR_CRUISE/shortDesc</name>
    <message>
      <source>Cruise throttle</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_THR_CRUISE/longDesc</name>
    <message>
      <source>This is the throttle setting required to achieve the desired cruise speed. 10% is ok for a traxxas stampede vxl with ESC set to training mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_THR_MAX/shortDesc</name>
    <message>
      <source>Throttle limit max</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_THR_MAX/longDesc</name>
    <message>
      <source>This is the maximum throttle % that can be used by the controller. For a Traxxas stampede vxl with the ESC set to training, 30 % is enough</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_THR_MIN/shortDesc</name>
    <message>
      <source>Throttle limit min</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_THR_MIN/longDesc</name>
    <message>
      <source>This is the minimum throttle % that can be used by the controller. Set to 0 for rover</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_WHEEL_BASE/shortDesc</name>
    <message>
      <source>Distance from front axle to rear axle</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/GND_WHEEL_BASE/longDesc</name>
    <message>
      <source>A value of 0.31 is typical for 1/10 RC cars.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_AIRSPD_SCL/shortDesc</name>
    <message>
      <source>Min airspeed scaling factor for takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_AIRSPD_SCL/longDesc</name>
    <message>
      <source>Pitch up will be commanded when the following airspeed is reached: FW_AIRSPD_MIN * RWTO_AIRSPD_SCL</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_HDG/shortDesc</name>
    <message>
      <source>Specifies which heading should be held during runnway takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_HDG/longDesc</name>
    <message>
      <source>0: airframe heading, 1: heading towards takeoff waypoint</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_HDG/values/0/description</name>
    <message>
      <source>Airframe</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_HDG/values/1/description</name>
    <message>
      <source>Waypoint</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_MAX_PITCH/shortDesc</name>
    <message>
      <source>Max pitch during takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_MAX_PITCH/longDesc</name>
    <message>
      <source>Fixed-wing settings are used if set to 0. Note that there is also a minimum pitch of 10 degrees during takeoff, so this must be larger if set.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_MAX_ROLL/shortDesc</name>
    <message>
      <source>Max roll during climbout</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_MAX_ROLL/longDesc</name>
    <message>
      <source>Roll is limited during climbout to ensure enough lift and prevents aggressive navigation before we're on a safe height.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_MAX_THR/shortDesc</name>
    <message>
      <source>Max throttle during runway takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_MAX_THR/longDesc</name>
    <message>
      <source>Can be used to test taxi on runway</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_NAV_ALT/shortDesc</name>
    <message>
      <source>Altitude AGL at which we have enough ground clearance to allow some roll</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_NAV_ALT/longDesc</name>
    <message>
      <source>Until RWTO_NAV_ALT is reached the plane is held level and only rudder is used to keep the heading (see RWTO_HDG). This should be below FW_CLMBOUT_DIFF if FW_CLMBOUT_DIFF &gt; 0.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_PSP/shortDesc</name>
    <message>
      <source>Pitch setpoint during taxi / before takeoff airspeed is reached</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_PSP/longDesc</name>
    <message>
      <source>A taildragger with steerable wheel might need to pitch up a little to keep its wheel on the ground before airspeed to takeoff is reached.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_RAMP_TIME/shortDesc</name>
    <message>
      <source>Throttle ramp up time for runway takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_TKOFF/shortDesc</name>
    <message>
      <source>Runway takeoff with landing gear</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_TKOFF/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RWTO_TKOFF/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_ALGORITHM/shortDesc</name>
    <message>
      <source>Logfile Encryption algorithm</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_ALGORITHM/longDesc</name>
    <message>
      <source>Selects the algorithm used for logfile encryption</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_ALGORITHM/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_ALGORITHM/values/2/description</name>
    <message>
      <source>XChaCha20</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_ALGORITHM/values/3/description</name>
    <message>
      <source>AES</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_BOOT_BAT/shortDesc</name>
    <message>
      <source>Battery-only Logging</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_BOOT_BAT/longDesc</name>
    <message>
      <source>When enabled, logging will not start from boot if battery power is not detected (e.g. powered via USB on a test bench). This prevents extraneous flight logs from being created during bench testing. Note that this only applies to log-from-boot modes. This has no effect on arm-based modes.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_BOOT_BAT/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_BOOT_BAT/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_DIRS_MAX/shortDesc</name>
    <message>
      <source>Maximum number of log directories to keep</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_DIRS_MAX/longDesc</name>
    <message>
      <source>If there are more log directories than this value, the system will delete the oldest directories during startup. In addition, the system will delete old logs if there is not enough free space left. The minimum amount is 300 MB. If this is set to 0, old directories will only be removed if the free space falls below the minimum. Note: this does not apply to mission log files.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_EXCH_KEY/shortDesc</name>
    <message>
      <source>Logfile Encryption key exchange key</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_EXCH_KEY/longDesc</name>
    <message>
      <source>If the logfile is encrypted using a symmetric key algorithm, the used encryption key is generated at logging start and stored on the sdcard RSA2048 encrypted using this key.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_KEY/shortDesc</name>
    <message>
      <source>Logfile Encryption key index</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_KEY/longDesc</name>
    <message>
      <source>Selects the key in keystore, used for encrypting the log. When using a symmetric encryption algorithm, the key is generated at logging start and kept stored in this index. For symmetric algorithms, the key is volatile and valid only for the duration of logging. The key is stored in encrypted format on the sdcard alongside the logfile, using an RSA2048 key defined by the SDLOG_EXCHANGE_KEY</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_MISSION/shortDesc</name>
    <message>
      <source>Mission Log</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_MISSION/longDesc</name>
    <message>
      <source>If enabled, a small additional "mission" log file will be written to the SD card. The log contains just those messages that are useful for tasks like generating flight statistics and geotagging. The different modes can be used to further reduce the logged data (and thus the log file size). For example, choose geotagging mode to only log data required for geotagging. Note that the normal/full log is still created, and contains all the data in the mission log (and more).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_MISSION/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_MISSION/values/1/description</name>
    <message>
      <source>All mission messages</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_MISSION/values/2/description</name>
    <message>
      <source>Geotagging messages</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_MODE/shortDesc</name>
    <message>
      <source>Logging Mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_MODE/longDesc</name>
    <message>
      <source>Determines when to start and stop logging. By default, logging is started when arming the system, and stopped when disarming.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_MODE/values/-1/description</name>
    <message>
      <source>disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_MODE/values/0/description</name>
    <message>
      <source>when armed until disarm (default)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_MODE/values/1/description</name>
    <message>
      <source>from boot until disarm</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_MODE/values/2/description</name>
    <message>
      <source>from boot until shutdown</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_MODE/values/3/description</name>
    <message>
      <source>depending on AUX1 RC channel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_PROFILE/shortDesc</name>
    <message>
      <source>Logging topic profile (integer bitmask)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_PROFILE/longDesc</name>
    <message>
      <source>This integer bitmask controls the set and rates of logged topics. The default allows for general log analysis while keeping the log file size reasonably small. Enabling multiple sets leads to higher bandwidth requirements and larger log files. Set bits true to enable: 0 : Default set (used for general log analysis) 1 : Full rate estimator (EKF2) replay topics 2 : Topics for thermal calibration (high rate raw IMU and Baro sensor data) 3 : Topics for system identification (high rate actuator control and IMU data) 4 : Full rates for analysis of fast maneuvers (RC, attitude, rates and actuators) 5 : Debugging topics (debug_*.msg topics, for custom code) 6 : Topics for sensor comparison (low rate raw IMU, Baro and Magnetomer data) 7 : Topics for computer vision and collision avoidance 8 : Raw FIFO high-rate IMU (Gyro) 9 : Raw FIFO high-rate IMU (Accel)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_PROFILE/bitmask/0/description</name>
    <message>
      <source>Default set (general log analysis)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_PROFILE/bitmask/1/description</name>
    <message>
      <source>Estimator replay (EKF2)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_PROFILE/bitmask/2/description</name>
    <message>
      <source>Thermal calibration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_PROFILE/bitmask/3/description</name>
    <message>
      <source>System identification</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_PROFILE/bitmask/4/description</name>
    <message>
      <source>High rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_PROFILE/bitmask/5/description</name>
    <message>
      <source>Debug</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_PROFILE/bitmask/6/description</name>
    <message>
      <source>Sensor comparison</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_PROFILE/bitmask/7/description</name>
    <message>
      <source>Computer Vision and Avoidance</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_PROFILE/bitmask/8/description</name>
    <message>
      <source>Raw FIFO high-rate IMU (Gyro)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_PROFILE/bitmask/9/description</name>
    <message>
      <source>Raw FIFO high-rate IMU (Accel)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_UTC_OFFSET/shortDesc</name>
    <message>
      <source>UTC offset (unit: min)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_UTC_OFFSET/longDesc</name>
    <message>
      <source>the difference in hours and minutes from Coordinated Universal Time (UTC) for a your place and date. for example, In case of South Korea(UTC+09:00), UTC offset is 540 min (9*60) refer to https://en.wikipedia.org/wiki/List_of_UTC_time_offsets</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_UUID/shortDesc</name>
    <message>
      <source>Log UUID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_UUID/longDesc</name>
    <message>
      <source>If set to 1, add an ID to the log, which uniquely identifies the vehicle</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_UUID/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SDLOG_UUID/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIM_BAT_DRAIN/shortDesc</name>
    <message>
      <source>Simulator Battery drain interval</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIM_BAT_MIN_PCT/shortDesc</name>
    <message>
      <source>Simulator Battery minimal percentage</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIM_BAT_MIN_PCT/longDesc</name>
    <message>
      <source>Can be used to alter the battery level during SITL- or HITL-simulation on the fly. Particularly useful for testing different low-battery behaviour.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_MAG_COMP_TYP/shortDesc</name>
    <message>
      <source>Type of magnetometer compensation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_MAG_COMP_TYP/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_MAG_COMP_TYP/values/1/description</name>
    <message>
      <source>Throttle-based compensation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_MAG_COMP_TYP/values/2/description</name>
    <message>
      <source>Current-based compensation (battery_status instance 0)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_MAG_COMP_TYP/values/3/description</name>
    <message>
      <source>Current-based compensation (battery_status instance 1)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_DPRES_ANSC/shortDesc</name>
    <message>
      <source>Differential pressure sensor analog scaling</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_DPRES_ANSC/longDesc</name>
    <message>
      <source>Pick the appropriate scaling from the datasheet. this number defines the (linear) conversion from voltage to Pascal (pa). For the MPXV7002DP this is 1000. NOTE: If the sensor always registers zero, try switching the static and dynamic tubes.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_DPRES_OFF/shortDesc</name>
    <message>
      <source>Differential pressure sensor offset</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_DPRES_OFF/longDesc</name>
    <message>
      <source>The offset (zero-reading) in Pascal</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_MAXHGT/shortDesc</name>
    <message>
      <source>Maximum height above ground when reliant on optical flow</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_MAXHGT/longDesc</name>
    <message>
      <source>This parameter defines the maximum distance from ground at which the optical flow sensor operates reliably. The height setpoint will be limited to be no greater than this value when the navigation system is completely reliant on optical flow data and the height above ground estimate is valid. The sensor may be usable above this height, but accuracy will progressively degrade.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_MAXR/shortDesc</name>
    <message>
      <source>Magnitude of maximum angular flow rate reliably measurable by the optical flow sensor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_MAXR/longDesc</name>
    <message>
      <source>Optical flow data will not fused by the estimators if the magnitude of the flow rate exceeds this value and control loops will be instructed to limit ground speed such that the flow rate produced by movement over ground is less than 50% of this value.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_MINHGT/shortDesc</name>
    <message>
      <source>Minimum height above ground when reliant on optical flow</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_MINHGT/longDesc</name>
    <message>
      <source>This parameter defines the minimum distance from ground at which the optical flow sensor operates reliably. The sensor may be usable below this height, but accuracy will progressively reduce to loss of focus.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ADC_ADS1115_EN/shortDesc</name>
    <message>
      <source>Enable external ADS1115 ADC</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ADC_ADS1115_EN/longDesc</name>
    <message>
      <source>If enabled, the internal ADC is not used.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ADC_ADS1115_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/ADC_ADS1115_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT1_C_MULT/shortDesc</name>
    <message>
      <source>Capacity/current multiplier for high-current capable SMBUS battery</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT1_SMBUS_MODEL/shortDesc</name>
    <message>
      <source>Battery device model</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT1_SMBUS_MODEL/values/0/description</name>
    <message>
      <source>AutoDetect</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT1_SMBUS_MODEL/values/1/description</name>
    <message>
      <source>BQ40Z50 based</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BAT1_SMBUS_MODEL/values/2/description</name>
    <message>
      <source>BQ40Z80 based</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BATMON_ADDR_DFLT/shortDesc</name>
    <message>
      <source>I2C address for BatMon battery 1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BATMON_DRIVER_EN/shortDesc</name>
    <message>
      <source>Parameter to enable BatMon module</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BATMON_DRIVER_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BATMON_DRIVER_EN/values/1/description</name>
    <message>
      <source>Start on default I2C addr(BATMON_ADDR_DFLT)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/BATMON_DRIVER_EN/values/2/description</name>
    <message>
      <source>Autodetect I2C address (TODO)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_AIR_CMODEL/shortDesc</name>
    <message>
      <source>Airspeed sensor compensation model for the SDP3x</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_AIR_CMODEL/longDesc</name>
    <message>
      <source>Model with Pitot CAL_AIR_TUBED_MM: Not used, 1.5 mm tubes assumed. CAL_AIR_TUBELEN: Length of the tubes connecting the pitot to the sensor. Model without Pitot (1.5 mm tubes) CAL_AIR_TUBED_MM: Not used, 1.5 mm tubes assumed. CAL_AIR_TUBELEN: Length of the tubes connecting the pitot to the sensor. Tube Pressure Drop CAL_AIR_TUBED_MM: Diameter in mm of the pitot and tubes, must have the same diameter. CAL_AIR_TUBELEN: Length of the tubes connecting the pitot to the sensor and the static + dynamic port length of the pitot.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_AIR_CMODEL/values/0/description</name>
    <message>
      <source>Model with Pitot</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_AIR_CMODEL/values/1/description</name>
    <message>
      <source>Model without Pitot (1.5 mm tubes)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_AIR_CMODEL/values/2/description</name>
    <message>
      <source>Tube Pressure Drop</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_AIR_TUBED_MM/shortDesc</name>
    <message>
      <source>Airspeed sensor tube diameter. Only used for the Tube Pressure Drop Compensation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_AIR_TUBELEN/shortDesc</name>
    <message>
      <source>Airspeed sensor tube length</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_AIR_TUBELEN/longDesc</name>
    <message>
      <source>See the CAL_AIR_CMODEL explanation on how this parameter should be set.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_MAG_ROT_AUTO/shortDesc</name>
    <message>
      <source>Automatically set external rotations</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_MAG_ROT_AUTO/longDesc</name>
    <message>
      <source>During calibration attempt to automatically determine the rotation of external magnetometers.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_MAG_ROT_AUTO/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_MAG_ROT_AUTO/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_MAG_SIDES/shortDesc</name>
    <message>
      <source>Bitfield selecting mag sides for calibration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_MAG_SIDES/longDesc</name>
    <message>
      <source>If set to two side calibration, only the offsets are estimated, the scale calibration is left unchanged. Thus an initial six side calibration is recommended. Bits: ORIENTATION_TAIL_DOWN = 1 ORIENTATION_NOSE_DOWN = 2 ORIENTATION_LEFT = 4 ORIENTATION_RIGHT = 8 ORIENTATION_UPSIDE_DOWN = 16 ORIENTATION_RIGHTSIDE_UP = 32</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_MAG_SIDES/values/34/description</name>
    <message>
      <source>Two side calibration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_MAG_SIDES/values/38/description</name>
    <message>
      <source>Three side calibration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CAL_MAG_SIDES/values/63/description</name>
    <message>
      <source>Six side calibration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_ACCEL_CUTOFF/shortDesc</name>
    <message>
      <source>Low pass filter cutoff frequency for accel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_ACCEL_CUTOFF/longDesc</name>
    <message>
      <source>The cutoff frequency for the 2nd order butterworth filter on the primary accelerometer. This only affects the signal sent to the controllers, not the estimators. 0 disables the filter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_DGYRO_CUTOFF/shortDesc</name>
    <message>
      <source>Cutoff frequency for angular acceleration (D-Term filter)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_DGYRO_CUTOFF/longDesc</name>
    <message>
      <source>The cutoff frequency for the 2nd order butterworth filter used on the time derivative of the measured angular velocity, also known as the D-term filter in the rate controller. The D-term uses the derivative of the rate and thus is the most susceptible to noise. Therefore, using a D-term filter allows to increase IMU_GYRO_CUTOFF, which leads to reduced control latency and permits to increase the P gains. A value of 0 disables the filter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_CAL_EN/shortDesc</name>
    <message>
      <source>IMU gyro auto calibration enable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_CAL_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_CAL_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_CUTOFF/shortDesc</name>
    <message>
      <source>Low pass filter cutoff frequency for gyro</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_CUTOFF/longDesc</name>
    <message>
      <source>The cutoff frequency for the 2nd order butterworth filter on the primary gyro. This only affects the angular velocity sent to the controllers, not the estimators. It applies also to the angular acceleration (D-Term filter), see IMU_DGYRO_CUTOFF. A value of 0 disables the filter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_DNF_BW/shortDesc</name>
    <message>
      <source>IMU gyro ESC notch filter bandwidth</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_DNF_BW/longDesc</name>
    <message>
      <source>Bandwidth per notch filter when using dynamic notch filtering with ESC RPM.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_DNF_EN/shortDesc</name>
    <message>
      <source>IMU gyro dynamic notch filtering</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_DNF_EN/longDesc</name>
    <message>
      <source>Enable bank of dynamically updating notch filters. Requires ESC RPM feedback or onboard FFT (IMU_GYRO_FFT_EN).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_DNF_EN/bitmask/0/description</name>
    <message>
      <source>ESC RPM</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_DNF_EN/bitmask/1/description</name>
    <message>
      <source>FFT</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_FFT_EN/shortDesc</name>
    <message>
      <source>IMU gyro FFT enable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_FFT_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_FFT_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_FFT_LEN/shortDesc</name>
    <message>
      <source>IMU gyro FFT length</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_FFT_LEN/values/256/description</name>
    <message>
      <source>256</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_FFT_LEN/values/512/description</name>
    <message>
      <source>512</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_FFT_LEN/values/1024/description</name>
    <message>
      <source>1024</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_FFT_LEN/values/4096/description</name>
    <message>
      <source>4096</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_FFT_MAX/shortDesc</name>
    <message>
      <source>IMU gyro FFT maximum frequency</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_FFT_MIN/shortDesc</name>
    <message>
      <source>IMU gyro FFT minimum frequency</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_FFT_SNR/shortDesc</name>
    <message>
      <source>IMU gyro FFT SNR</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_NF_BW/shortDesc</name>
    <message>
      <source>Notch filter bandwidth for gyro</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_NF_BW/longDesc</name>
    <message>
      <source>The frequency width of the stop band for the 2nd order notch filter on the primary gyro. See "IMU_GYRO_NF_FREQ" to activate the filter and to set the notch frequency. Applies to both angular velocity and angular acceleration sent to the controllers.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_NF_FREQ/shortDesc</name>
    <message>
      <source>Notch filter frequency for gyro</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_NF_FREQ/longDesc</name>
    <message>
      <source>The center frequency for the 2nd order notch filter on the primary gyro. This filter can be enabled to avoid feedback amplification of structural resonances at a specific frequency. This only affects the signal sent to the controllers, not the estimators. Applies to both angular velocity and angular acceleration sent to the controllers. See "IMU_GYRO_NF_BW" to set the bandwidth of the filter. A value of 0 disables the filter.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_RATEMAX/shortDesc</name>
    <message>
      <source>Gyro control data maximum publication rate (inner loop rate)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_RATEMAX/longDesc</name>
    <message>
      <source>The maximum rate the gyro control data (vehicle_angular_velocity) will be allowed to publish at. This is the loop rate for the rate controller and outputs. Note: sensor data is always read and filtered at the full raw rate (eg commonly 8 kHz) regardless of this setting.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_RATEMAX/values/100/description</name>
    <message>
      <source>100 Hz</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_RATEMAX/values/250/description</name>
    <message>
      <source>250 Hz</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_RATEMAX/values/400/description</name>
    <message>
      <source>400 Hz</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_RATEMAX/values/800/description</name>
    <message>
      <source>800 Hz</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_RATEMAX/values/1000/description</name>
    <message>
      <source>1000 Hz</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_GYRO_RATEMAX/values/2000/description</name>
    <message>
      <source>2000 Hz</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_INTEG_RATE/shortDesc</name>
    <message>
      <source>IMU integration rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_INTEG_RATE/longDesc</name>
    <message>
      <source>The rate at which raw IMU data is integrated to produce delta angles and delta velocities. Recommended to set this to a multiple of the estimator update period (currently 10 ms for ekf2).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_INTEG_RATE/values/100/description</name>
    <message>
      <source>100 Hz</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_INTEG_RATE/values/200/description</name>
    <message>
      <source>200 Hz</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_INTEG_RATE/values/250/description</name>
    <message>
      <source>250 Hz</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/IMU_INTEG_RATE/values/400/description</name>
    <message>
      <source>400 Hz</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/INA226_CONFIG/shortDesc</name>
    <message>
      <source>INA226 Power Monitor Config</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/INA226_CURRENT/shortDesc</name>
    <message>
      <source>INA226 Power Monitor Max Current</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/INA226_SHUNT/shortDesc</name>
    <message>
      <source>INA226 Power Monitor Shunt</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/INA228_CONFIG/shortDesc</name>
    <message>
      <source>INA228 Power Monitor Config</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/INA228_CURRENT/shortDesc</name>
    <message>
      <source>INA228 Power Monitor Max Current</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/INA228_SHUNT/shortDesc</name>
    <message>
      <source>INA228 Power Monitor Shunt</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/INA238_CURRENT/shortDesc</name>
    <message>
      <source>INA238 Power Monitor Max Current</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/INA238_SHUNT/shortDesc</name>
    <message>
      <source>INA238 Power Monitor Shunt</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PCF8583_ADDR/shortDesc</name>
    <message>
      <source>PCF8583 rotorfreq (i2c) i2c address</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PCF8583_ADDR/values/80/description</name>
    <message>
      <source>Address 0x50 (80)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PCF8583_ADDR/values/81/description</name>
    <message>
      <source>Address 0x51 (81)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PCF8583_MAGNET/shortDesc</name>
    <message>
      <source>PCF8583 rotorfreq (i2c) pulse count</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PCF8583_MAGNET/longDesc</name>
    <message>
      <source>Nmumber of signals per rotation of actuator</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PCF8583_POOL/shortDesc</name>
    <message>
      <source>PCF8583 rotorfreq (i2c) pool interval</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PCF8583_POOL/longDesc</name>
    <message>
      <source>Determines how often the sensor is read out.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PCF8583_RESET/shortDesc</name>
    <message>
      <source>PCF8583 rotorfreq (i2c) pulse reset value</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/PCF8583_RESET/longDesc</name>
    <message>
      <source>Internal device counter is reset to 0 when overun this value, counter is able to store upto 6 digits reset of counter takes some time - measurement with reset has worse accurancy. 0 means reset counter after every measurement.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BARO_QNH/shortDesc</name>
    <message>
      <source>QNH for barometer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BARO_RATE/shortDesc</name>
    <message>
      <source>Baro max rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BARO_RATE/longDesc</name>
    <message>
      <source>Barometric air data maximum publication rate. This is an upper bound, actual barometric data rate is still dependant on the sensor.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/shortDesc</name>
    <message>
      <source>Board rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the FMU board relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/8/description</name>
    <message>
      <source>Roll 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/9/description</name>
    <message>
      <source>Roll 180°, Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/10/description</name>
    <message>
      <source>Roll 180°, Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/11/description</name>
    <message>
      <source>Roll 180°, Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/12/description</name>
    <message>
      <source>Pitch 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/13/description</name>
    <message>
      <source>Roll 180°, Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/14/description</name>
    <message>
      <source>Roll 180°, Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/15/description</name>
    <message>
      <source>Roll 180°, Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/16/description</name>
    <message>
      <source>Roll 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/17/description</name>
    <message>
      <source>Roll 90°, Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/18/description</name>
    <message>
      <source>Roll 90°, Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/19/description</name>
    <message>
      <source>Roll 90°, Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/20/description</name>
    <message>
      <source>Roll 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/21/description</name>
    <message>
      <source>Roll 270°, Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/22/description</name>
    <message>
      <source>Roll 270°, Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/23/description</name>
    <message>
      <source>Roll 270°, Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/24/description</name>
    <message>
      <source>Pitch 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/25/description</name>
    <message>
      <source>Pitch 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/26/description</name>
    <message>
      <source>Pitch 180°, Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/27/description</name>
    <message>
      <source>Pitch 180°, Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/28/description</name>
    <message>
      <source>Roll 90°, Pitch 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/29/description</name>
    <message>
      <source>Roll 180°, Pitch 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/30/description</name>
    <message>
      <source>Roll 270°, Pitch 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/31/description</name>
    <message>
      <source>Roll 90°, Pitch 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/32/description</name>
    <message>
      <source>Roll 270°, Pitch 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/33/description</name>
    <message>
      <source>Roll 90°, Pitch 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/34/description</name>
    <message>
      <source>Roll 180°, Pitch 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/35/description</name>
    <message>
      <source>Roll 270°, Pitch 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/36/description</name>
    <message>
      <source>Roll 90°, Pitch 180°, Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/37/description</name>
    <message>
      <source>Roll 90°, Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/38/description</name>
    <message>
      <source>Roll 90°, Pitch 68°, Yaw 293°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/39/description</name>
    <message>
      <source>Pitch 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_ROT/values/40/description</name>
    <message>
      <source>Roll 90°, Pitch 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_X_OFF/shortDesc</name>
    <message>
      <source>Board rotation X (Roll) offset</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_X_OFF/longDesc</name>
    <message>
      <source>This parameter defines a rotational offset in degrees around the X (Roll) axis It allows the user to fine tune the board offset in the event of misalignment.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_Y_OFF/shortDesc</name>
    <message>
      <source>Board rotation Y (Pitch) offset</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_Y_OFF/longDesc</name>
    <message>
      <source>This parameter defines a rotational offset in degrees around the Y (Pitch) axis. It allows the user to fine tune the board offset in the event of misalignment.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_Z_OFF/shortDesc</name>
    <message>
      <source>Board rotation Z (YAW) offset</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_BOARD_Z_OFF/longDesc</name>
    <message>
      <source>This parameter defines a rotational offset in degrees around the Z (Yaw) axis. It allows the user to fine tune the board offset in the event of misalignment.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_ADIS164X/shortDesc</name>
    <message>
      <source>Analog Devices ADIS16448 IMU (external SPI)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_ADIS164X/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_ADIS164X/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_BATT/shortDesc</name>
    <message>
      <source>SMBUS Smart battery driver BQ40Z50 and BQ40Z80</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_BATT/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_BATT/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_ETSASPD/shortDesc</name>
    <message>
      <source>Eagle Tree airspeed sensor (external I2C)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_ETSASPD/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_ETSASPD/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_INA226/shortDesc</name>
    <message>
      <source>Enable INA226 Power Monitor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_INA226/longDesc</name>
    <message>
      <source>For systems a INA226 Power Monitor, this should be set to true</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_INA226/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_INA226/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_INA228/shortDesc</name>
    <message>
      <source>Enable INA228 Power Monitor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_INA228/longDesc</name>
    <message>
      <source>For systems a INA228 Power Monitor, this should be set to true</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_INA228/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_INA228/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_INA238/shortDesc</name>
    <message>
      <source>Enable INA238 Power Monitor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_INA238/longDesc</name>
    <message>
      <source>For systems a INA238 Power Monitor, this should be set to true</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_INA238/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_INA238/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_LL40LS/shortDesc</name>
    <message>
      <source>Lidar-Lite (LL40LS)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_LL40LS/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_LL40LS/values/1/description</name>
    <message>
      <source>PWM</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_LL40LS/values/2/description</name>
    <message>
      <source>I2C</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_MB12XX/shortDesc</name>
    <message>
      <source>Maxbotix Sonar (mb12xx)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_MB12XX/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_MB12XX/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_MPDT/shortDesc</name>
    <message>
      <source>Enable Mappydot rangefinder (i2c)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_MPDT/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_MPDT/values/1/description</name>
    <message>
      <source>Autodetect</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_MS4525/shortDesc</name>
    <message>
      <source>TE MS4525 differential pressure sensor (external I2C)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_MS4525/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_MS4525/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_MS5525/shortDesc</name>
    <message>
      <source>TE MS5525 differential pressure sensor (external I2C)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_MS5525/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_MS5525/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_PAW3902/shortDesc</name>
    <message>
      <source>PAW3902 &amp; PAW3903 Optical Flow</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_PAW3902/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_PAW3902/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_PGA460/shortDesc</name>
    <message>
      <source>PGA460 Ultrasonic driver (PGA460)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_PGA460/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_PGA460/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_PMW3901/shortDesc</name>
    <message>
      <source>PMW3901 Optical Flow</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_PMW3901/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_PMW3901/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_PX4FLOW/shortDesc</name>
    <message>
      <source>PX4 Flow Optical Flow</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_PX4FLOW/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_PX4FLOW/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SDP3X/shortDesc</name>
    <message>
      <source>Sensirion SDP3X differential pressure sensor (external I2C)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SDP3X/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SDP3X/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF0X/shortDesc</name>
    <message>
      <source>Lightware Laser Rangefinder hardware model (serial)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF0X/values/1/description</name>
    <message>
      <source>SF02</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF0X/values/2/description</name>
    <message>
      <source>SF10/a</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF0X/values/3/description</name>
    <message>
      <source>SF10/b</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF0X/values/4/description</name>
    <message>
      <source>SF10/c</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF0X/values/5/description</name>
    <message>
      <source>SF11/c</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF0X/values/6/description</name>
    <message>
      <source>SF30/b</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF0X/values/7/description</name>
    <message>
      <source>SF30/c</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF0X/values/8/description</name>
    <message>
      <source>LW20/c</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF1XX/shortDesc</name>
    <message>
      <source>Lightware SF1xx/SF20/LW20 laser rangefinder (i2c)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF1XX/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF1XX/values/1/description</name>
    <message>
      <source>SF10/a</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF1XX/values/2/description</name>
    <message>
      <source>SF10/b</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF1XX/values/3/description</name>
    <message>
      <source>SF10/c</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF1XX/values/4/description</name>
    <message>
      <source>SF11/c</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF1XX/values/5/description</name>
    <message>
      <source>SF/LW20/b</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SF1XX/values/6/description</name>
    <message>
      <source>SF/LW20/c</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SR05/shortDesc</name>
    <message>
      <source>HY-SRF05 / HC-SR05</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SR05/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_SR05/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_THERMAL/shortDesc</name>
    <message>
      <source>Thermal control of sensor temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_THERMAL/values/-1/description</name>
    <message>
      <source>Thermal control unavailable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_THERMAL/values/0/description</name>
    <message>
      <source>Thermal control off</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_THERMAL/values/1/description</name>
    <message>
      <source>Thermal control enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_TRANGER/shortDesc</name>
    <message>
      <source>TeraRanger Rangefinder (i2c)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_TRANGER/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_TRANGER/values/1/description</name>
    <message>
      <source>Autodetect</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_TRANGER/values/2/description</name>
    <message>
      <source>TROne</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_TRANGER/values/3/description</name>
    <message>
      <source>TREvo60m</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_TRANGER/values/4/description</name>
    <message>
      <source>TREvo600Hz</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_TRANGER/values/5/description</name>
    <message>
      <source>TREvo3m</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_VL53L1X/shortDesc</name>
    <message>
      <source>VL53L1X Distance Sensor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_VL53L1X/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EN_VL53L1X/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EXT_I2C_PRB/shortDesc</name>
    <message>
      <source>External I2C probe</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EXT_I2C_PRB/longDesc</name>
    <message>
      <source>Probe for optional external I2C devices.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EXT_I2C_PRB/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_EXT_I2C_PRB/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_ROT/shortDesc</name>
    <message>
      <source>PX4Flow board rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_ROT/longDesc</name>
    <message>
      <source>This parameter defines the yaw rotation of the PX4FLOW board relative to the vehicle body frame. Zero rotation is defined as X on flow board pointing towards front of vehicle. The recommneded installation default for the PX4FLOW board is with the Y axis forward (270 deg yaw).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_FLOW_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_GPS_MASK/shortDesc</name>
    <message>
      <source>Multi GPS Blending Control Mask</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_GPS_MASK/longDesc</name>
    <message>
      <source>Set bits in the following positions to set which GPS accuracy metrics will be used to calculate the blending weight. Set to zero to disable and always used first GPS instance. 0 : Set to true to use speed accuracy 1 : Set to true to use horizontal position accuracy 2 : Set to true to use vertical position accuracy</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_GPS_MASK/bitmask/0/description</name>
    <message>
      <source>use speed accuracy</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_GPS_MASK/bitmask/1/description</name>
    <message>
      <source>use hpos accuracy</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_GPS_MASK/bitmask/2/description</name>
    <message>
      <source>use vpos accuracy</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_GPS_PRIME/shortDesc</name>
    <message>
      <source>Multi GPS primary instance</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_GPS_PRIME/longDesc</name>
    <message>
      <source>When no blending is active, this defines the preferred GPS receiver instance. The GPS selection logic waits until the primary receiver is available to send data to the EKF even if a secondary instance is already available. The secondary instance is then only used if the primary one times out. To have an equal priority of all the instances, set this parameter to -1 and the best receiver will be used. This parameter has no effect if blending is active.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_GPS_TAU/shortDesc</name>
    <message>
      <source>Multi GPS Blending Time Constant</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_GPS_TAU/longDesc</name>
    <message>
      <source>Sets the longest time constant that will be applied to the calculation of GPS position and height offsets used to correct data from multiple GPS data for steady state position differences.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_IMU_MODE/shortDesc</name>
    <message>
      <source>Sensors hub IMU mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_IMU_MODE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_IMU_MODE/values/1/description</name>
    <message>
      <source>Publish primary IMU selection</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_IMU_TEMP/shortDesc</name>
    <message>
      <source>Target IMU temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_IMU_TEMP_FF/shortDesc</name>
    <message>
      <source>IMU heater controller feedforward value</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_IMU_TEMP_I/shortDesc</name>
    <message>
      <source>IMU heater controller integrator gain value</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_IMU_TEMP_P/shortDesc</name>
    <message>
      <source>IMU heater controller proportional gain value</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_INT_BARO_EN/shortDesc</name>
    <message>
      <source>Enable internal barometers</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_INT_BARO_EN/longDesc</name>
    <message>
      <source>For systems with an external barometer, this should be set to false to make sure that the external is used.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_INT_BARO_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_INT_BARO_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MAG_AUTOCAL/shortDesc</name>
    <message>
      <source>Magnetometer auto calibration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MAG_AUTOCAL/longDesc</name>
    <message>
      <source>Automatically initialize magnetometer calibration from bias estimate if available.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MAG_AUTOCAL/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MAG_AUTOCAL/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MAG_MODE/shortDesc</name>
    <message>
      <source>Sensors hub mag mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MAG_MODE/values/0/description</name>
    <message>
      <source>Publish all magnetometers</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MAG_MODE/values/1/description</name>
    <message>
      <source>Publish primary magnetometer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MAG_RATE/shortDesc</name>
    <message>
      <source>Magnetometer max rate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MAG_RATE/longDesc</name>
    <message>
      <source>Magnetometer data maximum publication rate. This is an upper bound, actual magnetometer data rate is still dependant on the sensor.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_0_ROT/shortDesc</name>
    <message>
      <source>MaxBotix MB12XX Sensor 0 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_0_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_0_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_0_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_0_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_0_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_0_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_0_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_0_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_0_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_10_ROT/shortDesc</name>
    <message>
      <source>MaxBotix MB12XX Sensor 10 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_10_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_10_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_10_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_10_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_10_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_10_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_10_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_10_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_10_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_11_ROT/shortDesc</name>
    <message>
      <source>MaxBotix MB12XX Sensor 12 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_11_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_11_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_11_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_11_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_11_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_11_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_11_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_11_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_11_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_1_ROT/shortDesc</name>
    <message>
      <source>MaxBotix MB12XX Sensor 1 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_1_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_1_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_1_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_1_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_1_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_1_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_1_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_1_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_1_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_2_ROT/shortDesc</name>
    <message>
      <source>MaxBotix MB12XX Sensor 2 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_2_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_2_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_2_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_2_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_2_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_2_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_2_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_2_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_2_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_3_ROT/shortDesc</name>
    <message>
      <source>MaxBotix MB12XX Sensor 3 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_3_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_3_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_3_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_3_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_3_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_3_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_3_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_3_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_3_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_4_ROT/shortDesc</name>
    <message>
      <source>MaxBotix MB12XX Sensor 4 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_4_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_4_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_4_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_4_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_4_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_4_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_4_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_4_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_4_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_5_ROT/shortDesc</name>
    <message>
      <source>MaxBotix MB12XX Sensor 5 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_5_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_5_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_5_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_5_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_5_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_5_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_5_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_5_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_5_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_6_ROT/shortDesc</name>
    <message>
      <source>MaxBotix MB12XX Sensor 6 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_6_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_6_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_6_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_6_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_6_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_6_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_6_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_6_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_6_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_7_ROT/shortDesc</name>
    <message>
      <source>MaxBotix MB12XX Sensor 7 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_7_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_7_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_7_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_7_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_7_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_7_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_7_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_7_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_7_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_8_ROT/shortDesc</name>
    <message>
      <source>MaxBotix MB12XX Sensor 8 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_8_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_8_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_8_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_8_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_8_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_8_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_8_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_8_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_8_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_9_ROT/shortDesc</name>
    <message>
      <source>MaxBotix MB12XX Sensor 9 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_9_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_9_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_9_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_9_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_9_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_9_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_9_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_9_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MB12_9_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT0_ROT/shortDesc</name>
    <message>
      <source>MappyDot Sensor 0 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT0_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the Mappydot sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT0_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT0_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT0_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT0_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT0_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT0_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT0_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT0_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT10_ROT/shortDesc</name>
    <message>
      <source>MappyDot Sensor 10 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT10_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the Mappydot sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT10_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT10_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT10_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT10_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT10_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT10_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT10_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT10_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT11_ROT/shortDesc</name>
    <message>
      <source>MappyDot Sensor 12 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT11_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the Mappydot sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT11_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT11_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT11_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT11_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT11_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT11_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT11_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT11_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT1_ROT/shortDesc</name>
    <message>
      <source>MappyDot Sensor 1 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT1_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the Mappydot sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT1_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT1_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT1_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT1_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT1_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT1_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT1_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT1_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT2_ROT/shortDesc</name>
    <message>
      <source>MappyDot Sensor 2 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT2_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the Mappydot sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT2_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT2_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT2_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT2_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT2_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT2_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT2_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT2_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT3_ROT/shortDesc</name>
    <message>
      <source>MappyDot Sensor 3 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT3_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the Mappydot sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT3_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT3_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT3_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT3_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT3_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT3_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT3_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT3_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT4_ROT/shortDesc</name>
    <message>
      <source>MappyDot Sensor 4 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT4_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the Mappydot sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT4_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT4_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT4_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT4_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT4_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT4_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT4_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT4_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT5_ROT/shortDesc</name>
    <message>
      <source>MappyDot Sensor 5 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT5_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the Mappydot sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT5_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT5_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT5_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT5_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT5_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT5_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT5_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT5_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT6_ROT/shortDesc</name>
    <message>
      <source>MappyDot Sensor 6 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT6_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the Mappydot sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT6_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT6_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT6_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT6_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT6_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT6_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT6_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT6_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT7_ROT/shortDesc</name>
    <message>
      <source>MappyDot Sensor 7 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT7_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the Mappydot sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT7_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT7_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT7_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT7_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT7_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT7_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT7_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT7_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT8_ROT/shortDesc</name>
    <message>
      <source>MappyDot Sensor 8 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT8_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the Mappydot sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT8_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT8_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT8_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT8_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT8_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT8_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT8_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT8_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT9_ROT/shortDesc</name>
    <message>
      <source>MappyDot Sensor 9 Rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT9_ROT/longDesc</name>
    <message>
      <source>This parameter defines the rotation of the Mappydot sensor relative to the platform.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT9_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT9_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT9_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT9_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT9_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT9_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT9_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_MPDT9_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_OR_ADIS164X/shortDesc</name>
    <message>
      <source>Analog Devices ADIS16448 IMU Orientation(external SPI)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_OR_ADIS164X/values/0/description</name>
    <message>
      <source>ROTATION_NONE</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_OR_ADIS164X/values/4/description</name>
    <message>
      <source>ROTATION_YAW_180</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SENS_TEMP_ID/shortDesc</name>
    <message>
      <source>Target IMU device ID to regulate temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VOXLPM_SHUNT_BAT/shortDesc</name>
    <message>
      <source>VOXL Power Monitor Shunt, Battery</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VOXLPM_SHUNT_REG/shortDesc</name>
    <message>
      <source>VOXL Power Monitor Shunt, Regulator</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_BARO_OFFSET/shortDesc</name>
    <message>
      <source>Barometer offset in meters</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_BARO_OFFSET/longDesc</name>
    <message>
      <source>Absolute value superior to 10000 will disable barometer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_DISTSNSR_MAX/shortDesc</name>
    <message>
      <source>distance sensor maximun range</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_DISTSNSR_MIN/shortDesc</name>
    <message>
      <source>distance sensor minimun range</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_DISTSNSR_OVR/shortDesc</name>
    <message>
      <source>if &gt;= 0 the distance sensor measures will be overrided by this value</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_DISTSNSR_OVR/longDesc</name>
    <message>
      <source>Absolute value superior to 10000 will disable distance sensor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_GPS_USED/shortDesc</name>
    <message>
      <source>Number of GPS satellites used</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_IXX/shortDesc</name>
    <message>
      <source>Vehicle inertia about X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_IXX/longDesc</name>
    <message>
      <source>The intertia is a 3 by 3 symmetric matrix. It represents the difficulty of the vehicle to modify its angular rate.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_IXY/shortDesc</name>
    <message>
      <source>Vehicle cross term inertia xy</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_IXY/longDesc</name>
    <message>
      <source>The intertia is a 3 by 3 symmetric matrix. This value can be set to 0 for a quad symmetric about its center of mass.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_IXZ/shortDesc</name>
    <message>
      <source>Vehicle cross term inertia xz</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_IXZ/longDesc</name>
    <message>
      <source>The intertia is a 3 by 3 symmetric matrix. This value can be set to 0 for a quad symmetric about its center of mass.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_IYY/shortDesc</name>
    <message>
      <source>Vehicle inertia about Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_IYY/longDesc</name>
    <message>
      <source>The intertia is a 3 by 3 symmetric matrix. It represents the difficulty of the vehicle to modify its angular rate.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_IYZ/shortDesc</name>
    <message>
      <source>Vehicle cross term inertia yz</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_IYZ/longDesc</name>
    <message>
      <source>The intertia is a 3 by 3 symmetric matrix. This value can be set to 0 for a quad symmetric about its center of mass.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_IZZ/shortDesc</name>
    <message>
      <source>Vehicle inertia about Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_IZZ/longDesc</name>
    <message>
      <source>The intertia is a 3 by 3 symmetric matrix. It represents the difficulty of the vehicle to modify its angular rate.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_KDV/shortDesc</name>
    <message>
      <source>First order drag coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_KDV/longDesc</name>
    <message>
      <source>Physical coefficient representing the friction with air particules. The greater this value, the slower the quad will move. Drag force function of velocity: D=-KDV*V. The maximum freefall velocity can be computed as V=10*MASS/KDV [m/s]</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_KDW/shortDesc</name>
    <message>
      <source>First order angular damper coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_KDW/longDesc</name>
    <message>
      <source>Physical coefficient representing the friction with air particules during rotations. The greater this value, the slower the quad will rotate. Aerodynamic moment function of body rate: Ma=-KDW*W_B. This value can be set to 0 if unknown.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_LOC_H0/shortDesc</name>
    <message>
      <source>Initial AMSL ground altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_LOC_H0/longDesc</name>
    <message>
      <source>This value represents the Above Mean Sea Level (AMSL) altitude where the simulation begins. If using FlightGear as a visual animation, this value can be tweaked such that the vehicle lies on the ground at takeoff. LAT0, LON0, H0, MU_X, MU_Y, and MU_Z should ideally be consistent among each others to represent a physical ground location on Earth.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_LOC_LAT0/shortDesc</name>
    <message>
      <source>Initial geodetic latitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_LOC_LAT0/longDesc</name>
    <message>
      <source>This value represents the North-South location on Earth where the simulation begins. A value of 45 deg should be written 450000000. LAT0, LON0, H0, MU_X, MU_Y, and MU_Z should ideally be consistent among each others to represent a physical ground location on Earth.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_LOC_LON0/shortDesc</name>
    <message>
      <source>Initial geodetic longitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_LOC_LON0/longDesc</name>
    <message>
      <source>This value represents the East-West location on Earth where the simulation begins. A value of 45 deg should be written 450000000. LAT0, LON0, H0, MU_X, MU_Y, and MU_Z should ideally be consistent among each others to represent a physical ground location on Earth.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_LOC_MU_X/shortDesc</name>
    <message>
      <source>North magnetic field at the initial location</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_LOC_MU_X/longDesc</name>
    <message>
      <source>This value represents the North magnetic field at the initial location. A magnetic field calculator can be found on the NOAA website Note, the values need to be converted from nano Tesla to Gauss LAT0, LON0, H0, MU_X, MU_Y, and MU_Z should ideally be consistent among each others to represent a physical ground location on Earth.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_LOC_MU_Y/shortDesc</name>
    <message>
      <source>East magnetic field at the initial location</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_LOC_MU_Y/longDesc</name>
    <message>
      <source>This value represents the East magnetic field at the initial location. A magnetic field calculator can be found on the NOAA website Note, the values need to be converted from nano Tesla to Gauss LAT0, LON0, H0, MU_X, MU_Y, and MU_Z should ideally be consistent among each others to represent a physical ground location on Earth.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_LOC_MU_Z/shortDesc</name>
    <message>
      <source>Down magnetic field at the initial location</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_LOC_MU_Z/longDesc</name>
    <message>
      <source>This value represents the Down magnetic field at the initial location. A magnetic field calculator can be found on the NOAA website Note, the values need to be converted from nano Tesla to Gauss LAT0, LON0, H0, MU_X, MU_Y, and MU_Z should ideally be consistent among each others to represent a physical ground location on Earth.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_L_PITCH/shortDesc</name>
    <message>
      <source>Pitch arm length</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_L_PITCH/longDesc</name>
    <message>
      <source>This is the arm length generating the pitching moment This value can be measured with a ruler. This corresponds to half the distance between the front and rear motors.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_L_ROLL/shortDesc</name>
    <message>
      <source>Roll arm length</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_L_ROLL/longDesc</name>
    <message>
      <source>This is the arm length generating the rolling moment This value can be measured with a ruler. This corresponds to half the distance between the left and right motors.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_MAG_OFFSET_X/shortDesc</name>
    <message>
      <source>magnetometer X offset in Gauss</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_MAG_OFFSET_X/longDesc</name>
    <message>
      <source>Absolute value superior to 10000 will disable magnetometer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_MAG_OFFSET_Y/shortDesc</name>
    <message>
      <source>magnetometer Y offset in Gauss</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_MAG_OFFSET_Y/longDesc</name>
    <message>
      <source>Absolute value superior to 10000 will disable magnetometer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_MAG_OFFSET_Z/shortDesc</name>
    <message>
      <source>magnetometer Z offset in Gauss</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_MAG_OFFSET_Z/longDesc</name>
    <message>
      <source>Absolute value superior to 10000 will disable magnetometer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_MASS/shortDesc</name>
    <message>
      <source>Vehicle mass</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_MASS/longDesc</name>
    <message>
      <source>This value can be measured by weighting the quad on a scale.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_Q_MAX/shortDesc</name>
    <message>
      <source>Max propeller torque</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_Q_MAX/longDesc</name>
    <message>
      <source>This is the maximum torque delivered by one propeller when the motor is running at full speed. This value is usually about few percent of the maximum thrust force.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_T_MAX/shortDesc</name>
    <message>
      <source>Max propeller thrust force</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_T_MAX/longDesc</name>
    <message>
      <source>This is the maximum force delivered by one propeller when the motor is running at full speed. This value is usually about 5 times the mass of the quadrotor.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_T_TAU/shortDesc</name>
    <message>
      <source>thruster time constant tau</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_T_TAU/longDesc</name>
    <message>
      <source>the time taken for the thruster to step from 0 to 100% should be about 4 times tau</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_VEHICLE_TYPE/shortDesc</name>
    <message>
      <source>Vehicle type</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_VEHICLE_TYPE/values/0/description</name>
    <message>
      <source>MC</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIH_VEHICLE_TYPE/values/1/description</name>
    <message>
      <source>FW</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIM_BARO_OFF_P/shortDesc</name>
    <message>
      <source>simulated barometer pressure offset</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIM_BARO_OFF_T/shortDesc</name>
    <message>
      <source>simulated barometer temperature offset</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIM_GPS_USED/shortDesc</name>
    <message>
      <source>simulated GPS number of satellites used</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIM_MAG_OFFSET_X/shortDesc</name>
    <message>
      <source>simulated magnetometer X offset</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIM_MAG_OFFSET_Y/shortDesc</name>
    <message>
      <source>simulated magnetometer Y offset</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SIM_MAG_OFFSET_Z/shortDesc</name>
    <message>
      <source>simulated magnetometer Z offset</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_AUTOCONFIG/shortDesc</name>
    <message>
      <source>Automatically configure default values</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_AUTOCONFIG/longDesc</name>
    <message>
      <source>Set to 1 to reset parameters on next system startup (setting defaults). Platform-specific values are used if available. RC* parameters are preserved.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_AUTOCONFIG/values/0/description</name>
    <message>
      <source>Keep parameters</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_AUTOCONFIG/values/1/description</name>
    <message>
      <source>Reset parameters to airframe defaults</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_AUTOSTART/shortDesc</name>
    <message>
      <source>Auto-start script index</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_AUTOSTART/longDesc</name>
    <message>
      <source>CHANGING THIS VALUE REQUIRES A RESTART. Defines the auto-start script used to bootstrap the system.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_BL_UPDATE/shortDesc</name>
    <message>
      <source>Bootloader update</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_BL_UPDATE/longDesc</name>
    <message>
      <source>If enabled, update the bootloader on the next boot. WARNING: do not cut the power during an update process, otherwise you will have to recover using some alternative method (e.g. JTAG). Instructions: - Insert an SD card - Enable this parameter - Reboot the board (plug the power or send a reboot command) - Wait until the board comes back up (or at least 2 minutes) - If it does not come back, check the file bootlog.txt on the SD card</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_BL_UPDATE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_BL_UPDATE/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CAL_ACCEL/shortDesc</name>
    <message>
      <source>Enable auto start of accelerometer thermal calibration at the next power up</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CAL_ACCEL/longDesc</name>
    <message>
      <source>0 : Set to 0 to do nothing 1 : Set to 1 to start a calibration at next boot This parameter is reset to zero when the temperature calibration starts. default (0, no calibration)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CAL_BARO/shortDesc</name>
    <message>
      <source>Enable auto start of barometer thermal calibration at the next power up</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CAL_BARO/longDesc</name>
    <message>
      <source>0 : Set to 0 to do nothing 1 : Set to 1 to start a calibration at next boot This parameter is reset to zero when the temperature calibration starts. default (0, no calibration)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CAL_GYRO/shortDesc</name>
    <message>
      <source>Enable auto start of rate gyro thermal calibration at the next power up</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CAL_GYRO/longDesc</name>
    <message>
      <source>0 : Set to 0 to do nothing 1 : Set to 1 to start a calibration at next boot This parameter is reset to zero when the temperature calibration starts. default (0, no calibration)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CAL_TDEL/shortDesc</name>
    <message>
      <source>Required temperature rise during thermal calibration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CAL_TDEL/longDesc</name>
    <message>
      <source>A temperature increase greater than this value is required during calibration. Calibration will complete for each sensor when the temperature increase above the starting temeprature exceeds the value set by SYS_CAL_TDEL. If the temperature rise is insufficient, the calibration will continue indefinitely and the board will need to be repowered to exit.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CAL_TMAX/shortDesc</name>
    <message>
      <source>Maximum starting temperature for thermal calibration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CAL_TMAX/longDesc</name>
    <message>
      <source>Temperature calibration will not start if the temperature of any sensor is higher than the value set by SYS_CAL_TMAX.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CAL_TMIN/shortDesc</name>
    <message>
      <source>Minimum starting temperature for thermal calibration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CAL_TMIN/longDesc</name>
    <message>
      <source>Temperature calibration for each sensor will ignore data if the temperature is lower than the value set by SYS_CAL_TMIN.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CTRL_ALLOC/shortDesc</name>
    <message>
      <source>Enable Dynamic Control Allocation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CTRL_ALLOC/longDesc</name>
    <message>
      <source>If disabled, the existing mixing implementation is used. If enabled, dynamic control allocation with runtime configuration of the mixing and output functions is used. Note: this is work-in-progress and not all vehicle types are supported yet.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CTRL_ALLOC/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_CTRL_ALLOC/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_DM_BACKEND/shortDesc</name>
    <message>
      <source>Dataman storage backend</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_DM_BACKEND/values/-1/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_DM_BACKEND/values/0/description</name>
    <message>
      <source>default (SD card)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_DM_BACKEND/values/1/description</name>
    <message>
      <source>RAM (not persistent)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_FAC_CAL_MODE/shortDesc</name>
    <message>
      <source>Enable factory calibration mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_FAC_CAL_MODE/longDesc</name>
    <message>
      <source>If enabled, future sensor calibrations will be stored to /fs/mtd_caldata. Note: this is only supported on boards with a separate calibration storage /fs/mtd_caldata.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_FAC_CAL_MODE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_FAC_CAL_MODE/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_FAILURE_EN/shortDesc</name>
    <message>
      <source>Enable failure injection</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_FAILURE_EN/longDesc</name>
    <message>
      <source>If enabled allows MAVLink INJECT_FAILURE commands. WARNING: the failures can easily cause crashes and are to be used with caution!</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_FAILURE_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_FAILURE_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HAS_BARO/shortDesc</name>
    <message>
      <source>Control if the vehicle has a barometer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HAS_BARO/longDesc</name>
    <message>
      <source>Disable this if the board has no barometer, such as some of the Omnibus F4 SD variants. If disabled, the preflight checks will not check for the presence of a barometer.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HAS_BARO/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HAS_BARO/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HAS_GPS/shortDesc</name>
    <message>
      <source>Control if the vehicle has a GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HAS_GPS/longDesc</name>
    <message>
      <source>Disable this if the system has no GPS. If disabled, the sensors hub will not process sensor_gps, and GPS will not be available for the rest of the system.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HAS_GPS/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HAS_GPS/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HAS_MAG/shortDesc</name>
    <message>
      <source>Control if the vehicle has a magnetometer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HAS_MAG/longDesc</name>
    <message>
      <source>Disable this if the board has no magnetometer, such as the Omnibus F4 SD. If disabled, the preflight checks will not check for the presence of a magnetometer.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HAS_MAG/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HAS_MAG/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HAS_NUM_DIST/shortDesc</name>
    <message>
      <source>Control the number of distance sensors on the vehicle</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HAS_NUM_DIST/longDesc</name>
    <message>
      <source>If set to the number of distance sensors, the preflight check will check for their presence and valid data publication. Disable with 0 if no distance sensor present or to disbale the preflight check.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HITL/shortDesc</name>
    <message>
      <source>Enable HITL/SIH mode on next boot</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HITL/longDesc</name>
    <message>
      <source>While enabled the system will boot in Hardware-In-The-Loop (HITL) or Simulation-In-Hardware (SIH) mode and not enable all sensors and checks. When disabled the same vehicle can be flown normally. Set to 'external HITL', if the system should perform as if it were a real vehicle (the only difference to a real system is then only the parameter value, which can be used for log analysis).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HITL/values/-1/description</name>
    <message>
      <source>external HITL</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HITL/values/0/description</name>
    <message>
      <source>HITL and SIH disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HITL/values/1/description</name>
    <message>
      <source>HITL enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_HITL/values/2/description</name>
    <message>
      <source>SIH enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_MC_EST_GROUP/shortDesc</name>
    <message>
      <source>Set multicopter estimator group</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_MC_EST_GROUP/longDesc</name>
    <message>
      <source>Set the group of estimators used for multicopters and VTOLs</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_MC_EST_GROUP/values/1/description</name>
    <message>
      <source>local_position_estimator, attitude_estimator_q (unsupported)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_MC_EST_GROUP/values/2/description</name>
    <message>
      <source>ekf2 (recommended)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_MC_EST_GROUP/values/3/description</name>
    <message>
      <source>Q attitude estimator (no position)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_RGB_MAXBRT/shortDesc</name>
    <message>
      <source>RGB Led brightness limit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_RGB_MAXBRT/longDesc</name>
    <message>
      <source>Set to 0 to disable, 1 for maximum brightness</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_STCK_EN/shortDesc</name>
    <message>
      <source>Enable stack checking</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_STCK_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_STCK_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_USE_IO/shortDesc</name>
    <message>
      <source>Set usage of IO board</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_USE_IO/longDesc</name>
    <message>
      <source>Can be used to use a configure the use of the IO board.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_USE_IO/values/0/description</name>
    <message>
      <source>IO PWM disabled (RC only)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/SYS_USE_IO/values/1/description</name>
    <message>
      <source>IO enabled (RC &amp; PWM)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEL_BST_EN/shortDesc</name>
    <message>
      <source>Blacksheep telemetry Enable</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEL_BST_EN/longDesc</name>
    <message>
      <source>If true, the FMU will try to connect to Blacksheep telemetry on start up</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEL_BST_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEL_BST_EN/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TF_CHECK_DIST/shortDesc</name>
    <message>
      <source>Terrain follower check distance</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TF_CHECK_DIST/longDesc</name>
    <message>
      <source>Look ahead distance the terrain follower will use to detect terrain violation.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TF_TERRAIN_EN/shortDesc</name>
    <message>
      <source>Enable Terrain Data upload</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TF_TERRAIN_EN/longDesc</name>
    <message>
      <source>If enabled, configures the terrain data grid spacing. The recommended value is 100m, or 50m on boards with enough RAM. Whenever the mission, home position or safe points change, terrain data is requested within a rectangular area that includes all of these points. This will then be used during RTL. Note: - this feature requres several KB of RAM. - latitudes beyond +-80 degrees are not supported.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TF_TERRAIN_EN/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TF_TERRAIN_EN/values/50/description</name>
    <message>
      <source>50m grid spacing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TF_TERRAIN_EN/values/100/description</name>
    <message>
      <source>100m grid spacing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TF_TERRAIN_EN/values/200/description</name>
    <message>
      <source>200m grid spacing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TF_TERRAIN_EN/values/400/description</name>
    <message>
      <source>400m grid spacing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TF_TERR_DIST_MAX/shortDesc</name>
    <message>
      <source>Terrain follower maximum distance to terrain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TF_TERR_DIST_MIN/shortDesc</name>
    <message>
      <source>Terrain follower minimum distance to terrain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_1/shortDesc</name>
    <message>
      <source>TEST_1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_2/shortDesc</name>
    <message>
      <source>TEST_2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_3/shortDesc</name>
    <message>
      <source>TEST_3</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_D/shortDesc</name>
    <message>
      <source>TEST_D</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_DEV/shortDesc</name>
    <message>
      <source>TEST_DEV</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_D_LP/shortDesc</name>
    <message>
      <source>TEST_D_LP</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_HP/shortDesc</name>
    <message>
      <source>TEST_HP</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_I/shortDesc</name>
    <message>
      <source>TEST_I</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_I_MAX/shortDesc</name>
    <message>
      <source>TEST_I_MAX</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_LP/shortDesc</name>
    <message>
      <source>TEST_LP</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_MAX/shortDesc</name>
    <message>
      <source>TEST_MAX</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_MEAN/shortDesc</name>
    <message>
      <source>TEST_MEAN</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_MIN/shortDesc</name>
    <message>
      <source>TEST_MIN</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_P/shortDesc</name>
    <message>
      <source>TEST_P</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_PARAMS/shortDesc</name>
    <message>
      <source>TEST_PARAMS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_RC2_X/shortDesc</name>
    <message>
      <source>TEST_RC2_X</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_RC_X/shortDesc</name>
    <message>
      <source>TEST_RC_X</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TEST_TRIM/shortDesc</name>
    <message>
      <source>TEST_TRIM</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_ID/shortDesc</name>
    <message>
      <source>ID of Accelerometer that the calibration is for</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_TMAX/shortDesc</name>
    <message>
      <source>Accelerometer calibration maximum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_TMIN/shortDesc</name>
    <message>
      <source>Accelerometer calibration minimum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_TREF/shortDesc</name>
    <message>
      <source>Accelerometer calibration reference temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_X0_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^0 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_X0_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^0 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_X0_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^0 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_X1_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^1 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_X1_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^1 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_X1_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^1 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_X2_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^2 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_X2_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^2 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_X2_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^2 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_X3_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^3 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_X3_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^3 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A0_X3_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^3 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_ID/shortDesc</name>
    <message>
      <source>ID of Accelerometer that the calibration is for</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_TMAX/shortDesc</name>
    <message>
      <source>Accelerometer calibration maximum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_TMIN/shortDesc</name>
    <message>
      <source>Accelerometer calibration minimum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_TREF/shortDesc</name>
    <message>
      <source>Accelerometer calibration reference temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_X0_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^0 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_X0_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^0 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_X0_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^0 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_X1_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^1 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_X1_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^1 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_X1_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^1 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_X2_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^2 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_X2_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^2 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_X2_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^2 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_X3_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^3 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_X3_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^3 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A1_X3_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^3 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_ID/shortDesc</name>
    <message>
      <source>ID of Accelerometer that the calibration is for</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_TMAX/shortDesc</name>
    <message>
      <source>Accelerometer calibration maximum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_TMIN/shortDesc</name>
    <message>
      <source>Accelerometer calibration minimum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_TREF/shortDesc</name>
    <message>
      <source>Accelerometer calibration reference temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_X0_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^0 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_X0_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^0 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_X0_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^0 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_X1_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^1 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_X1_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^1 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_X1_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^1 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_X2_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^2 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_X2_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^2 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_X2_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^2 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_X3_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^3 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_X3_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^3 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A2_X3_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^3 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_ID/shortDesc</name>
    <message>
      <source>ID of Accelerometer that the calibration is for</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_TMAX/shortDesc</name>
    <message>
      <source>Accelerometer calibration maximum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_TMIN/shortDesc</name>
    <message>
      <source>Accelerometer calibration minimum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_TREF/shortDesc</name>
    <message>
      <source>Accelerometer calibration reference temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_X0_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^0 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_X0_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^0 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_X0_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^0 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_X1_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^1 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_X1_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^1 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_X1_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^1 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_X2_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^2 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_X2_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^2 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_X2_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^2 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_X3_0/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^3 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_X3_1/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^3 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A3_X3_2/shortDesc</name>
    <message>
      <source>Accelerometer offset temperature ^3 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A_ENABLE/shortDesc</name>
    <message>
      <source>Thermal compensation for accelerometer sensors</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A_ENABLE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_A_ENABLE/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B0_ID/shortDesc</name>
    <message>
      <source>ID of Barometer that the calibration is for</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B0_TMAX/shortDesc</name>
    <message>
      <source>Barometer calibration maximum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B0_TMIN/shortDesc</name>
    <message>
      <source>Barometer calibration minimum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B0_TREF/shortDesc</name>
    <message>
      <source>Barometer calibration reference temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B0_X0/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^0 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B0_X1/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^1 polynomial coefficients</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B0_X2/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^2 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B0_X3/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^3 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B0_X4/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^4 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B0_X5/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^5 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B1_ID/shortDesc</name>
    <message>
      <source>ID of Barometer that the calibration is for</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B1_TMAX/shortDesc</name>
    <message>
      <source>Barometer calibration maximum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B1_TMIN/shortDesc</name>
    <message>
      <source>Barometer calibration minimum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B1_TREF/shortDesc</name>
    <message>
      <source>Barometer calibration reference temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B1_X0/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^0 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B1_X1/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^1 polynomial coefficients</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B1_X2/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^2 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B1_X3/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^3 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B1_X4/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^4 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B1_X5/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^5 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B2_ID/shortDesc</name>
    <message>
      <source>ID of Barometer that the calibration is for</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B2_TMAX/shortDesc</name>
    <message>
      <source>Barometer calibration maximum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B2_TMIN/shortDesc</name>
    <message>
      <source>Barometer calibration minimum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B2_TREF/shortDesc</name>
    <message>
      <source>Barometer calibration reference temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B2_X0/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^0 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B2_X1/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^1 polynomial coefficients</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B2_X2/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^2 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B2_X3/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^3 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B2_X4/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^4 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B2_X5/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^5 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B3_ID/shortDesc</name>
    <message>
      <source>ID of Barometer that the calibration is for</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B3_TMAX/shortDesc</name>
    <message>
      <source>Barometer calibration maximum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B3_TMIN/shortDesc</name>
    <message>
      <source>Barometer calibration minimum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B3_TREF/shortDesc</name>
    <message>
      <source>Barometer calibration reference temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B3_X0/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^0 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B3_X1/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^1 polynomial coefficients</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B3_X2/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^2 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B3_X3/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^3 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B3_X4/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^4 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B3_X5/shortDesc</name>
    <message>
      <source>Barometer offset temperature ^5 polynomial coefficient</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B_ENABLE/shortDesc</name>
    <message>
      <source>Thermal compensation for barometric pressure sensors</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B_ENABLE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_B_ENABLE/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_ID/shortDesc</name>
    <message>
      <source>ID of Gyro that the calibration is for</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_TMAX/shortDesc</name>
    <message>
      <source>Gyro calibration maximum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_TMIN/shortDesc</name>
    <message>
      <source>Gyro calibration minimum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_TREF/shortDesc</name>
    <message>
      <source>Gyro calibration reference temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_X0_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^0 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_X0_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^0 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_X0_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^0 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_X1_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^1 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_X1_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^1 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_X1_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^1 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_X2_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^2 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_X2_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^2 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_X2_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^2 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_X3_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^3 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_X3_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^3 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G0_X3_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^3 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_ID/shortDesc</name>
    <message>
      <source>ID of Gyro that the calibration is for</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_TMAX/shortDesc</name>
    <message>
      <source>Gyro calibration maximum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_TMIN/shortDesc</name>
    <message>
      <source>Gyro calibration minimum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_TREF/shortDesc</name>
    <message>
      <source>Gyro calibration reference temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_X0_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^0 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_X0_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^0 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_X0_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^0 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_X1_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^1 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_X1_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^1 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_X1_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^1 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_X2_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^2 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_X2_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^2 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_X2_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^2 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_X3_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^3 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_X3_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^3 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G1_X3_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^3 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_ID/shortDesc</name>
    <message>
      <source>ID of Gyro that the calibration is for</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_TMAX/shortDesc</name>
    <message>
      <source>Gyro calibration maximum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_TMIN/shortDesc</name>
    <message>
      <source>Gyro calibration minimum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_TREF/shortDesc</name>
    <message>
      <source>Gyro calibration reference temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_X0_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^0 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_X0_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^0 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_X0_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^0 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_X1_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^1 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_X1_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^1 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_X1_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^1 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_X2_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^2 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_X2_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^2 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_X2_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^2 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_X3_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^3 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_X3_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^3 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G2_X3_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^3 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_ID/shortDesc</name>
    <message>
      <source>ID of Gyro that the calibration is for</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_TMAX/shortDesc</name>
    <message>
      <source>Gyro calibration maximum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_TMIN/shortDesc</name>
    <message>
      <source>Gyro calibration minimum temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_TREF/shortDesc</name>
    <message>
      <source>Gyro calibration reference temperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_X0_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^0 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_X0_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^0 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_X0_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^0 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_X1_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^1 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_X1_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^1 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_X1_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^1 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_X2_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^2 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_X2_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^2 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_X2_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^2 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_X3_0/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^3 polynomial coefficient - X axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_X3_1/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^3 polynomial coefficient - Y axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G3_X3_2/shortDesc</name>
    <message>
      <source>Gyro rate offset temperature ^3 polynomial coefficient - Z axis</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G_ENABLE/shortDesc</name>
    <message>
      <source>Thermal compensation for rate gyro sensors</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G_ENABLE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/TC_G_ENABLE/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_BITRATE/shortDesc</name>
    <message>
      <source>UAVCAN CAN bus bitrate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_FLOW_ROT/shortDesc</name>
    <message>
      <source>Cannode flow board rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_FLOW_ROT/longDesc</name>
    <message>
      <source>This parameter defines the yaw rotation of the Cannode flow board relative to the vehicle body frame. Zero rotation is defined as X on flow board pointing towards front of vehicle.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_FLOW_ROT/values/0/description</name>
    <message>
      <source>No rotation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_FLOW_ROT/values/1/description</name>
    <message>
      <source>Yaw 45°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_FLOW_ROT/values/2/description</name>
    <message>
      <source>Yaw 90°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_FLOW_ROT/values/3/description</name>
    <message>
      <source>Yaw 135°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_FLOW_ROT/values/4/description</name>
    <message>
      <source>Yaw 180°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_FLOW_ROT/values/5/description</name>
    <message>
      <source>Yaw 225°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_FLOW_ROT/values/6/description</name>
    <message>
      <source>Yaw 270°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_FLOW_ROT/values/7/description</name>
    <message>
      <source>Yaw 315°</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_NODE_ID/shortDesc</name>
    <message>
      <source>UAVCAN Node ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_NODE_ID/longDesc</name>
    <message>
      <source>Read the specs at http://uavcan.org to learn more about Node ID.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_TERM/shortDesc</name>
    <message>
      <source>CAN built-in bus termination</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_TERM/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/CANNODE_TERM/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_BITRATE/shortDesc</name>
    <message>
      <source>UAVCAN CAN bus bitrate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_ENABLE/shortDesc</name>
    <message>
      <source>UAVCAN mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_ENABLE/longDesc</name>
    <message>
      <source>0 - UAVCAN disabled. 1 - Enables support for UAVCAN sensors without dynamic node ID allocation and firmware update. 2 - Enables support for UAVCAN sensors with dynamic node ID allocation and firmware update. 3 - Enables support for UAVCAN sensors and actuators with dynamic node ID allocation and firmware update. Also sets the motor control outputs to UAVCAN.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_ENABLE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_ENABLE/values/1/description</name>
    <message>
      <source>Sensors Manual Config</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_ENABLE/values/2/description</name>
    <message>
      <source>Sensors Automatic Config</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_ENABLE/values/3/description</name>
    <message>
      <source>Sensors and Actuators (ESCs) Automatic Config</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_ESC_IDLT/shortDesc</name>
    <message>
      <source>UAVCAN ESC will spin at specified idle throttle when armed, even if the mixer outputs zero setpoints</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_ANTCL/shortDesc</name>
    <message>
      <source>UAVCAN ANTI_COLLISION light operating mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_ANTCL/longDesc</name>
    <message>
      <source>This parameter defines the minimum condition under which the system will command the ANTI_COLLISION lights on 0 - Always off 1 - When autopilot is armed 2 - When autopilot is prearmed 3 - Always on</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_ANTCL/values/0/description</name>
    <message>
      <source>Always off</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_ANTCL/values/1/description</name>
    <message>
      <source>When autopilot is armed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_ANTCL/values/2/description</name>
    <message>
      <source>When autopilot is prearmed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_ANTCL/values/3/description</name>
    <message>
      <source>Always on</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_LAND/shortDesc</name>
    <message>
      <source>UAVCAN LIGHT_ID_LANDING light operating mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_LAND/longDesc</name>
    <message>
      <source>This parameter defines the minimum condition under which the system will command the LIGHT_ID_LANDING lights on 0 - Always off 1 - When autopilot is armed 2 - When autopilot is prearmed 3 - Always on</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_LAND/values/0/description</name>
    <message>
      <source>Always off</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_LAND/values/1/description</name>
    <message>
      <source>When autopilot is armed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_LAND/values/2/description</name>
    <message>
      <source>When autopilot is prearmed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_LAND/values/3/description</name>
    <message>
      <source>Always on</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_NAV/shortDesc</name>
    <message>
      <source>UAVCAN RIGHT_OF_WAY light operating mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_NAV/longDesc</name>
    <message>
      <source>This parameter defines the minimum condition under which the system will command the RIGHT_OF_WAY lights on 0 - Always off 1 - When autopilot is armed 2 - When autopilot is prearmed 3 - Always on</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_NAV/values/0/description</name>
    <message>
      <source>Always off</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_NAV/values/1/description</name>
    <message>
      <source>When autopilot is armed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_NAV/values/2/description</name>
    <message>
      <source>When autopilot is prearmed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_NAV/values/3/description</name>
    <message>
      <source>Always on</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_STROB/shortDesc</name>
    <message>
      <source>UAVCAN STROBE light operating mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_STROB/longDesc</name>
    <message>
      <source>This parameter defines the minimum condition under which the system will command the STROBE lights on 0 - Always off 1 - When autopilot is armed 2 - When autopilot is prearmed 3 - Always on</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_STROB/values/0/description</name>
    <message>
      <source>Always off</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_STROB/values/1/description</name>
    <message>
      <source>When autopilot is armed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_STROB/values/2/description</name>
    <message>
      <source>When autopilot is prearmed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_LGT_STROB/values/3/description</name>
    <message>
      <source>Always on</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_NODE_ID/shortDesc</name>
    <message>
      <source>UAVCAN Node ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_NODE_ID/longDesc</name>
    <message>
      <source>Read the specs at http://uavcan.org to learn more about Node ID.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_RNG_MAX/shortDesc</name>
    <message>
      <source>UAVCAN rangefinder maximum range</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_RNG_MAX/longDesc</name>
    <message>
      <source>This parameter defines the maximum valid range for a rangefinder connected via UAVCAN.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_RNG_MIN/shortDesc</name>
    <message>
      <source>UAVCAN rangefinder minimum range</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_RNG_MIN/longDesc</name>
    <message>
      <source>This parameter defines the minimum valid range for a rangefinder connected via UAVCAN.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_ASPD/shortDesc</name>
    <message>
      <source>subscription airspeed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_ASPD/longDesc</name>
    <message>
      <source>Enable UAVCAN airspeed subscriptions. uavcan::equipment::air_data::IndicatedAirspeed uavcan::equipment::air_data::TrueAirspeed uavcan::equipment::air_data::StaticTemperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_ASPD/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_ASPD/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_BARO/shortDesc</name>
    <message>
      <source>subscription barometer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_BARO/longDesc</name>
    <message>
      <source>Enable UAVCAN barometer subscription. uavcan::equipment::air_data::StaticPressure uavcan::equipment::air_data::StaticTemperature</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_BARO/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_BARO/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_BAT/shortDesc</name>
    <message>
      <source>subscription battery</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_BAT/longDesc</name>
    <message>
      <source>Enable UAVCAN battery subscription. 1) uavcan::equipment::power::BatteryInfo 2) cuav::equipment::power::CBAT</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_BAT/values/0/description</name>
    <message>
      <source>disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_BAT/values/1/description</name>
    <message>
      <source>default</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_BAT/values/2/description</name>
    <message>
      <source>CUAV battery monitor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_DPRES/shortDesc</name>
    <message>
      <source>subscription differential pressure</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_DPRES/longDesc</name>
    <message>
      <source>Enable UAVCAN differential pressure subscription. uavcan::equipment::air_data::RawAirData</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_DPRES/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_DPRES/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_FLOW/shortDesc</name>
    <message>
      <source>subscription flow</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_FLOW/longDesc</name>
    <message>
      <source>Enable UAVCAN optical flow subscription.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_FLOW/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_FLOW/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_GPS/shortDesc</name>
    <message>
      <source>subscription GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_GPS/longDesc</name>
    <message>
      <source>Enable UAVCAN GPS subscriptions. uavcan::equipment::gnss::Fix uavcan::equipment::gnss::Fix2 uavcan::equipment::gnss::Auxiliary</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_GPS/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_GPS/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_HYGRO/shortDesc</name>
    <message>
      <source>subscription hygrometer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_HYGRO/longDesc</name>
    <message>
      <source>Enable UAVCAN hygrometer subscriptions. dronecan::sensors::hygrometer::Hygrometer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_HYGRO/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_HYGRO/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_ICE/shortDesc</name>
    <message>
      <source>subscription ICE</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_ICE/longDesc</name>
    <message>
      <source>Enable UAVCAN internal combusion engine (ICE) subscription. uavcan::equipment::ice::reciprocating::Status</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_ICE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_ICE/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_IMU/shortDesc</name>
    <message>
      <source>subscription IMU</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_IMU/longDesc</name>
    <message>
      <source>Enable UAVCAN IMU subscription. uavcan::equipment::ahrs::RawIMU</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_IMU/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_IMU/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_MAG/shortDesc</name>
    <message>
      <source>subscription magnetometer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_MAG/longDesc</name>
    <message>
      <source>Enable UAVCAN GPS subscription. uavcan::equipment::ahrs::MagneticFieldStrength uavcan::equipment::ahrs::MagneticFieldStrength2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_MAG/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_MAG/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_RNG/shortDesc</name>
    <message>
      <source>subscription range finder</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_RNG/longDesc</name>
    <message>
      <source>Enable UAVCAN GPS subscription. uavcan::equipment::range_sensor::Measurement</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_RNG/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_SUB_RNG/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_V1_BAUD/shortDesc</name>
    <message>
      <source>UAVCAN/CAN v1 bus bitrate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_V1_ENABLE/shortDesc</name>
    <message>
      <source>UAVCAN v1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_V1_ENABLE/longDesc</name>
    <message>
      <source>0 - UAVCAN disabled. 1 - Enables UAVCANv1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_V1_ENABLE/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_V1_ENABLE/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UCAN1_ACTR_PUB/shortDesc</name>
    <message>
      <source>actuator_outputs uORB over UAVCAN v1 publication port ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UCAN1_BMS_BP_SUB/shortDesc</name>
    <message>
      <source>DS-015 battery parameters subscription  port ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UCAN1_BMS_BS_SUB/shortDesc</name>
    <message>
      <source>DS-015 battery status subscription port ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UCAN1_BMS_ES_SUB/shortDesc</name>
    <message>
      <source>DS-015 battery energy source subscription port ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UCAN1_ESC0_SUB/shortDesc</name>
    <message>
      <source>ESC 0 subscription port ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UCAN1_ESC_PUB/shortDesc</name>
    <message>
      <source>UAVCAN v1 ESC publication port ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UCAN1_GPS0_SUB/shortDesc</name>
    <message>
      <source>GPS 0 subscription port ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UCAN1_GPS1_SUB/shortDesc</name>
    <message>
      <source>GPS 1 subscription port ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UCAN1_GPS_PUB/shortDesc</name>
    <message>
      <source>UAVCAN v1 GPS publication port ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UCAN1_LG_BMS_SUB/shortDesc</name>
    <message>
      <source>UAVCAN v1 leagcy battery port ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UCAN1_SERVO_PUB/shortDesc</name>
    <message>
      <source>UAVCAN v1 Servo publication port ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UCAN1_UORB_GPS/shortDesc</name>
    <message>
      <source>sensor_gps uORB over UAVCAN v1 subscription port ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UCAN1_UORB_GPS_P/shortDesc</name>
    <message>
      <source>sensor_gps uORB over UAVCAN v1 publication port ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_V1_ID/shortDesc</name>
    <message>
      <source>UAVCAN v1 Node ID</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UAVCAN_V1_ID/longDesc</name>
    <message>
      <source>Read the specs at http://uavcan.org to learn more about Node ID.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_DIRCT_PITCH/shortDesc</name>
    <message>
      <source>Direct pitch input</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_DIRCT_ROLL/shortDesc</name>
    <message>
      <source>Direct roll input</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_DIRCT_THRUST/shortDesc</name>
    <message>
      <source>Direct thrust input</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_DIRCT_YAW/shortDesc</name>
    <message>
      <source>Direct yaw input</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_INPUT_MODE/shortDesc</name>
    <message>
      <source>Select Input Mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_INPUT_MODE/values/0/description</name>
    <message>
      <source>use Attitude Setpoints</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_INPUT_MODE/values/1/description</name>
    <message>
      <source>Direct Feedthrough</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_PITCH_D/shortDesc</name>
    <message>
      <source>Pitch differential gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_PITCH_P/shortDesc</name>
    <message>
      <source>Pitch proportional gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_ROLL_D/shortDesc</name>
    <message>
      <source>Roll differential gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_ROLL_P/shortDesc</name>
    <message>
      <source>Roll proportional gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_YAW_D/shortDesc</name>
    <message>
      <source>Yaw differential gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_YAW_P/shortDesc</name>
    <message>
      <source>Yawh proportional gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_GAIN_X_D/shortDesc</name>
    <message>
      <source>Gain of D controller X</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_GAIN_X_P/shortDesc</name>
    <message>
      <source>Gain of P controller X</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_GAIN_Y_D/shortDesc</name>
    <message>
      <source>Gain of D controller Y</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_GAIN_Y_P/shortDesc</name>
    <message>
      <source>Gain of P controller Y</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_GAIN_Z_D/shortDesc</name>
    <message>
      <source>Gain of D controller Z</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_GAIN_Z_P/shortDesc</name>
    <message>
      <source>Gain of P controller Z</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_STAB_MODE/shortDesc</name>
    <message>
      <source>Stabilization mode(1) or Position Control(0)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_STAB_MODE/values/0/description</name>
    <message>
      <source>Position Control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_STAB_MODE/values/1/description</name>
    <message>
      <source>Stabilization Mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_ARSP_BLEND/shortDesc</name>
    <message>
      <source>Transition blending airspeed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_ARSP_BLEND/longDesc</name>
    <message>
      <source>Airspeed at which we can start blending both fw and mc controls. Set to 0 to disable.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_ARSP_TRANS/shortDesc</name>
    <message>
      <source>Transition airspeed</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_ARSP_TRANS/longDesc</name>
    <message>
      <source>Airspeed at which we can switch to fw mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_B_DEC_FF/shortDesc</name>
    <message>
      <source>Backtransition deceleration setpoint to pitch feedforward gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_B_DEC_I/shortDesc</name>
    <message>
      <source>Backtransition deceleration setpoint to pitch I gain</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_B_DEC_MSS/shortDesc</name>
    <message>
      <source>Approximate deceleration during back transition</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_B_DEC_MSS/longDesc</name>
    <message>
      <source>The approximate deceleration during a back transition in m/s/s Used to calculate back transition distance in mission mode. A lower value will make the VTOL transition further from the destination waypoint. For standard vtol and tiltrotors a controller is used to track this value during the transition.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_B_REV_DEL/shortDesc</name>
    <message>
      <source>Delay in seconds before applying back transition throttle</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_B_REV_DEL/longDesc</name>
    <message>
      <source>Set this to a value greater than 0 to give the motor time to spin down. unit s</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_B_REV_OUT/shortDesc</name>
    <message>
      <source>Output on airbrakes channel during back transition</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_B_REV_OUT/longDesc</name>
    <message>
      <source>Used for airbrakes or with ESCs that have reverse thrust enabled on a seperate channel Airbrakes need to be enables for your selected model/mixer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_B_TRANS_DUR/shortDesc</name>
    <message>
      <source>Duration of a back transition</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_B_TRANS_DUR/longDesc</name>
    <message>
      <source>Time in seconds used for a back transition</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_B_TRANS_RAMP/shortDesc</name>
    <message>
      <source>Back transition MC motor ramp up time</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_B_TRANS_RAMP/longDesc</name>
    <message>
      <source>This sets the duration during which the MC motors ramp up to the commanded thrust during the back transition stage.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_B_TRANS_THR/shortDesc</name>
    <message>
      <source>Target throttle value for the transition to hover flight</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_B_TRANS_THR/longDesc</name>
    <message>
      <source>standard vtol: pusher tailsitter, tiltrotor: main throttle Note for standard vtol: For ESCs and mixers that support reverse thrust on low PWM values set this to a negative value to apply active breaking For ESCs that support thrust reversal with a control channel please set VT_B_REV_OUT and set this to a positive value to apply active breaking</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_ELEV_COMP_K/shortDesc</name>
    <message>
      <source>Pitch actuator compensation when alternative motor is on</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_ELEV_COMP_K/longDesc</name>
    <message>
      <source>Pitch_actuator_offset = VT_ELEV_COMP_OFF + throttle_alt * comp_elev_k / p_dynamic.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_ELEV_COMP_OFF/shortDesc</name>
    <message>
      <source>Static offset added to the elevator control as part of the non-zero thrust line offset compensation for the alternate motor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_ELEV_COMP_OFF/longDesc</name>
    <message>
      <source>Pitch_actuator_offset = VT_ELEV_COMP_OFF + throttle_alt * comp_elev_k / p_dynamic.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_ELEV_MC_LOCK/shortDesc</name>
    <message>
      <source>Lock control surfaces in hover</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_ELEV_MC_LOCK/longDesc</name>
    <message>
      <source>If set to 1 the control surfaces are locked at the disarmed value in multicopter mode.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_ELEV_MC_LOCK/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_ELEV_MC_LOCK/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FWD_THRUST_EN/shortDesc</name>
    <message>
      <source>Enable/disable usage of fixed-wing actuators in hover to generate forward force (instead of pitching down)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FWD_THRUST_EN/longDesc</name>
    <message>
      <source>This technique can be used to avoid the plane having to pitch down in order to move forward. This prevents large, negative lift values being created when facing strong winds. Fixed-wing forward actuators refers to puller/pusher (standard VTOL), or forward-tilt (tiltrotor VTOL). Only active if demaded down pitch is below VT_PITCH_MIN, and uses VT_FWD_THRUST_SC to get from demanded down pitch to fixed-wing actuation.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FWD_THRUST_EN/values/0/description</name>
    <message>
      <source>Disable FW forward actuation in hover.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FWD_THRUST_EN/values/1/description</name>
    <message>
      <source>Enable FW forward actuation in hover in altitude, position and auto modes (except LANDING).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FWD_THRUST_EN/values/2/description</name>
    <message>
      <source>Enable FW forward actuation in hover in altitude, position and auto modes if above MPC_LAND_ALT1.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FWD_THRUST_EN/values/3/description</name>
    <message>
      <source>Enable FW forward actuation in hover in altitude, position and auto modes if above MPC_LAND_ALT2.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FWD_THRUST_EN/values/4/description</name>
    <message>
      <source>Enable FW forward actuation in hover in altitude, position and auto modes.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FWD_THRUST_EN/values/5/description</name>
    <message>
      <source>Enable FW forward actuation in hover in altitude, position and auto modes if above MPC_LAND_ALT1 (except LANDING).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FWD_THRUST_EN/values/6/description</name>
    <message>
      <source>Enable FW forward actuation in hover in altitude, position and auto modes if above MPC_LAND_ALT2 (except LANDING).</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FWD_THRUST_SC/shortDesc</name>
    <message>
      <source>Fixed-wing actuator thrust scale for hover forward flight</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FWD_THRUST_SC/longDesc</name>
    <message>
      <source>Scale applied to the demanded down-pitch to get the fixed-wing forward actuation in hover mode. Only active if demaded down pitch is below VT_PITCH_MIN. Enabled via VT_FWD_THRUST_EN.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_ALT_ERR/shortDesc</name>
    <message>
      <source>Adaptive QuadChute</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_ALT_ERR/longDesc</name>
    <message>
      <source>Maximum negative altitude error for fixed wing flight. If the altitude drops below this value below the altitude setpoint the vehicle will transition back to MC mode and enter failsafe RTL.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_DIFTHR_EN/shortDesc</name>
    <message>
      <source>Differential thrust in forwards flight</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_DIFTHR_EN/longDesc</name>
    <message>
      <source>Set to 1 to enable differential thrust in fixed-wing flight.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_DIFTHR_SC/shortDesc</name>
    <message>
      <source>Differential thrust scaling factor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_DIFTHR_SC/longDesc</name>
    <message>
      <source>This factor specifies how the yaw input gets mapped to differential thrust in forwards flight.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_MIN_ALT/shortDesc</name>
    <message>
      <source>QuadChute Altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_MIN_ALT/longDesc</name>
    <message>
      <source>Minimum altitude for fixed wing flight, when in fixed wing the altitude drops below this altitude the vehicle will transition back to MC mode and enter failsafe RTL</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_MOT_OFFID/shortDesc</name>
    <message>
      <source>The channel number of motors that must be turned off in fixed wing mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_PERM_STAB/shortDesc</name>
    <message>
      <source>Permanent stabilization in fw mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_PERM_STAB/longDesc</name>
    <message>
      <source>If set to one this parameter will cause permanent attitude stabilization in fw mode. This parameter has been introduced for pure convenience sake.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_PERM_STAB/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_PERM_STAB/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_QC_P/shortDesc</name>
    <message>
      <source>QuadChute Max Pitch</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_QC_P/longDesc</name>
    <message>
      <source>Maximum pitch angle before QuadChute engages Above this the vehicle will transition back to MC mode and enter failsafe RTL</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_QC_R/shortDesc</name>
    <message>
      <source>QuadChute Max Roll</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_FW_QC_R/longDesc</name>
    <message>
      <source>Maximum roll angle before QuadChute engages Above this the vehicle will transition back to MC mode and enter failsafe RTL</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_F_TRANS_DUR/shortDesc</name>
    <message>
      <source>Duration of a front transition</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_F_TRANS_DUR/longDesc</name>
    <message>
      <source>Time in seconds used for a transition</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_F_TRANS_THR/shortDesc</name>
    <message>
      <source>Target throttle value for the transition to fixed wing flight</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_F_TRANS_THR/longDesc</name>
    <message>
      <source>standard vtol: pusher tailsitter, tiltrotor: main throttle</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_F_TR_OL_TM/shortDesc</name>
    <message>
      <source>Airspeed less front transition time (open loop)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_F_TR_OL_TM/longDesc</name>
    <message>
      <source>The duration of the front transition when there is no airspeed feedback available.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_IDLE_PWM_MC/shortDesc</name>
    <message>
      <source>Idle speed of VTOL when in multicopter mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_LND_PTCH_MIN/shortDesc</name>
    <message>
      <source>Minimum pitch angle during hover landing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_LND_PTCH_MIN/longDesc</name>
    <message>
      <source>Overrides  VT_PTCH_MIN when the vehicle is in LAND mode (hovering). During landing it can be beneficial to allow lower minimum pitch angles as it can avoid the wings generating too much lift and preventing the vehicle from sinking at the desired rate.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_MC_ON_FMU/shortDesc</name>
    <message>
      <source>Enable the usage of AUX outputs for hover motors</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_MC_ON_FMU/longDesc</name>
    <message>
      <source>Set this parameter to true if the vehicle's hover motors are connected to the FMU (AUX) port. Not required for boards that only have a FMU, and no IO. Only applies for standard VTOL and tiltrotor.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_MC_ON_FMU/values/0/description</name>
    <message>
      <source>Disabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_MC_ON_FMU/values/1/description</name>
    <message>
      <source>Enabled</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_MOT_ID/shortDesc</name>
    <message>
      <source>The channel number of motors which provide lift during hover</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_PSHER_RMP_DT/shortDesc</name>
    <message>
      <source>Pusher throttle ramp up window</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_PSHER_RMP_DT/longDesc</name>
    <message>
      <source>Defines the time window during which the pusher throttle will be ramped up linearly to VT_F_TRANS_THR during a transition to fixed wing mode. Zero or negative values will produce an instant throttle rise to VT_F_TRANS_THR.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_PTCH_MIN/shortDesc</name>
    <message>
      <source>Minimum pitch angle during hover</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_PTCH_MIN/longDesc</name>
    <message>
      <source>Minimum pitch angle during hover flight. If the desired pitch angle is is lower than this value then the fixed-wing forward actuation can be used to compensate for the missing thrust in forward direction (see VT_FW_TRHUST_EN)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_THR_ALTER_OFF/shortDesc</name>
    <message>
      <source>Throttle threshold to switch off alternative motor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_THR_ALTER_OFF/longDesc</name>
    <message>
      <source>The alternative fixed-wing motors are switched off if the throttle setpoint raises above this threshold.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_THR_ALTER_ON/shortDesc</name>
    <message>
      <source>Throttle threshold to switch on alternative motor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_THR_ALTER_ON/longDesc</name>
    <message>
      <source>The alternative fixed-wing motors are switched on if the throttle setpoint falls below this threshold.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_THR_ALTER_SC/shortDesc</name>
    <message>
      <source>Scle factor for alternative throttle. Used for throttle scaling in case alternative throttle is used</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_THR_N_ALTER/shortDesc</name>
    <message>
      <source>Neutral throttle of alternative motors. Used for throttle scaling in case alternative throttle is used</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_THR_N_MAIN/shortDesc</name>
    <message>
      <source>Neutral throttle of main motors. Used for throttle scaling in case alternative throttle is used</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_TILT_FW/shortDesc</name>
    <message>
      <source>Position of tilt servo in fw mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_TILT_MC/shortDesc</name>
    <message>
      <source>Position of tilt servo in mc mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_TILT_SPINUP/shortDesc</name>
    <message>
      <source>Tilt actuator control value commanded when disarmed and during the first second after arming</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_TILT_SPINUP/longDesc</name>
    <message>
      <source>This specific tilt during spin-up is necessary for some systems whose motors otherwise don't spin-up freely.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_TILT_TRANS/shortDesc</name>
    <message>
      <source>Position of tilt servo in transition mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_TRANS_MIN_TM/shortDesc</name>
    <message>
      <source>Front transition minimum time</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_TRANS_MIN_TM/longDesc</name>
    <message>
      <source>Minimum time in seconds for front transition.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_TRANS_P2_DUR/shortDesc</name>
    <message>
      <source>Duration of front transition phase 2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_TRANS_P2_DUR/longDesc</name>
    <message>
      <source>Time in seconds it should take for the rotors to rotate forward completely from the point when the plane has picked up enough airspeed and is ready to go into fixed wind mode.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_TRANS_TIMEOUT/shortDesc</name>
    <message>
      <source>Front transition timeout</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_TRANS_TIMEOUT/longDesc</name>
    <message>
      <source>Time in seconds after which transition will be cancelled. Disabled if set to 0.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_TYPE/shortDesc</name>
    <message>
      <source>VTOL Type (Tailsitter=0, Tiltrotor=1, Standard=2)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_TYPE/values/0/description</name>
    <message>
      <source>Tailsitter</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_TYPE/values/1/description</name>
    <message>
      <source>Tiltrotor</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VT_TYPE/values/2/description</name>
    <message>
      <source>Standard</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/WV_GAIN/shortDesc</name>
    <message>
      <source>Weather-vane roll angle to yawrate</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/WV_GAIN/longDesc</name>
    <message>
      <source>The desired gain to convert roll sp into yaw rate sp.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VTO_LOITER_ALT/shortDesc</name>
    <message>
      <source>VTOL Takeoff relative loiter altitude</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VTO_LOITER_ALT/longDesc</name>
    <message>
      <source>Altitude relative to home at which vehicle will loiter after front transition.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VM_INERTIA_XX/shortDesc</name>
    <message>
      <source>Inertia matrix, XX component</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VM_INERTIA_XY/shortDesc</name>
    <message>
      <source>Inertia matrix, XY component</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VM_INERTIA_XZ/shortDesc</name>
    <message>
      <source>Inertia matrix, XZ component</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VM_INERTIA_YY/shortDesc</name>
    <message>
      <source>Inertia matrix, YY component</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VM_INERTIA_YZ/shortDesc</name>
    <message>
      <source>Inertia matrix, YZ component</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VM_INERTIA_ZZ/shortDesc</name>
    <message>
      <source>Inertia matrix, ZZ component</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/VM_MASS/shortDesc</name>
    <message>
      <source>Mass</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/COM_ARM_WO_OBLOG/shortDesc</name>
    <message>
      <source>COM_ARM_WO_OBLOG</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EXFW_HDNG_P/shortDesc</name>
    <message>
      <source>EXFW_HDNG_P</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EXFW_PITCH_P/shortDesc</name>
    <message>
      <source>EXFW_PITCH_P</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/EXFW_ROLL_P/shortDesc</name>
    <message>
      <source>EXFW_ROLL_P</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/RV_YAW_P/shortDesc</name>
    <message>
      <source>RV_YAW_P</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_SKIP_CTRL/shortDesc</name>
    <message>
      <source>Skip the controller</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_SKIP_CTRL/values/0/description</name>
    <message>
      <source>use the module's controller</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>/parameters/UUV_SKIP_CTRL/values/1/description</name>
    <message>
      <source>skip the controller and feedthrough the setpoints</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/category/Developer</name>
    <message>
      <source>Developer</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/category/Standard</name>
    <message>
      <source>Standard</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/category/System</name>
    <message>
      <source>System</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Mount</name>
    <message>
      <source>Mount</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Data Link Loss</name>
    <message>
      <source>Data Link Loss</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/FW NPFG Control</name>
    <message>
      <source>FW NPFG Control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Autotune</name>
    <message>
      <source>Autotune</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/UAVCAN GNSS</name>
    <message>
      <source>UAVCAN GNSS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Roboclaw driver</name>
    <message>
      <source>Roboclaw driver</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/ESC</name>
    <message>
      <source>ESC</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Geofence</name>
    <message>
      <source>Geofence</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/SITL</name>
    <message>
      <source>SITL</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Simulation In Hardware</name>
    <message>
      <source>Simulation In Hardware</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Testing</name>
    <message>
      <source>Testing</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Battery Calibration</name>
    <message>
      <source>Battery Calibration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/GPS</name>
    <message>
      <source>GPS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Local Position Estimator</name>
    <message>
      <source>Local Position Estimator</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Terrain Follower</name>
    <message>
      <source>Terrain Follower</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/PWM Outputs</name>
    <message>
      <source>PWM Outputs</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Magnetometer Bias Estimator</name>
    <message>
      <source>Magnetometer Bias Estimator</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Failure Detector</name>
    <message>
      <source>Failure Detector</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Commander</name>
    <message>
      <source>Commander</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Follow target</name>
    <message>
      <source>Follow target</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Camera Control</name>
    <message>
      <source>Camera Control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Mixer Output</name>
    <message>
      <source>Mixer Output</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Camera trigger</name>
    <message>
      <source>Camera trigger</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/SD Logging</name>
    <message>
      <source>SD Logging</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Circuit Breaker</name>
    <message>
      <source>Circuit Breaker</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Sensor Calibration</name>
    <message>
      <source>Sensor Calibration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/FW Attitude Control</name>
    <message>
      <source>FW Attitude Control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Rover Position Control</name>
    <message>
      <source>Rover Position Control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/VTOL Attitude Control</name>
    <message>
      <source>VTOL Attitude Control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Angular Velocity Control</name>
    <message>
      <source>Angular Velocity Control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Radio Calibration</name>
    <message>
      <source>Radio Calibration</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Mission</name>
    <message>
      <source>Mission</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/MAVLink</name>
    <message>
      <source>MAVLink</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Landing target Estimator</name>
    <message>
      <source>Landing target Estimator</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Multicopter Rate Control</name>
    <message>
      <source>Multicopter Rate Control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Attitude Q estimator</name>
    <message>
      <source>Attitude Q estimator</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/System</name>
    <message>
      <source>System</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/FW TECS</name>
    <message>
      <source>FW TECS</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/FW Launch detection</name>
    <message>
      <source>FW Launch detection</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/VTOL Takeoff</name>
    <message>
      <source>VTOL Takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/UUV Position Control</name>
    <message>
      <source>UUV Position Control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Miscellaneous</name>
    <message>
      <source>Miscellaneous</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Precision Land</name>
    <message>
      <source>Precision Land</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Landing Target Estimator</name>
    <message>
      <source>Landing Target Estimator</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Multicopter Attitude Control</name>
    <message>
      <source>Multicopter Attitude Control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Return To Land</name>
    <message>
      <source>Return To Land</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/OSD</name>
    <message>
      <source>OSD</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Radio Switches</name>
    <message>
      <source>Radio Switches</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Simulator</name>
    <message>
      <source>Simulator</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Airspeed Validator</name>
    <message>
      <source>Airspeed Validator</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/UAVCAN</name>
    <message>
      <source>UAVCAN</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/UUV Attitude Control</name>
    <message>
      <source>UUV Attitude Control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Manual Control</name>
    <message>
      <source>Manual Control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Vehicle Model</name>
    <message>
      <source>Vehicle Model</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Runway Takeoff</name>
    <message>
      <source>Runway Takeoff</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/EKF2</name>
    <message>
      <source>EKF2</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Events</name>
    <message>
      <source>Events</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Land Detector</name>
    <message>
      <source>Land Detector</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Thermal Compensation</name>
    <message>
      <source>Thermal Compensation</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/UAVCANv1</name>
    <message>
      <source>UAVCANv1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Camera Capture</name>
    <message>
      <source>Camera Capture</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Iridium SBD</name>
    <message>
      <source>Iridium SBD</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Telemetry</name>
    <message>
      <source>Telemetry</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/FW L1 Control</name>
    <message>
      <source>FW L1 Control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/UAVCAN v1</name>
    <message>
      <source>UAVCAN v1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/UAVCAN Motor Parameters</name>
    <message>
      <source>UAVCAN Motor Parameters</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Sensors</name>
    <message>
      <source>Sensors</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Multicopter Position Control</name>
    <message>
      <source>Multicopter Position Control</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Hover Thrust Estimator</name>
    <message>
      <source>Hover Thrust Estimator</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>_globals/group/Return Mode</name>
    <message>
      <source>Return Mode</source>
      <translation type="unfinished"/>
    </message>
  </context>
</TS>
