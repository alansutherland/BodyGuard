const moduleSix = [
  {title: '', id: 1, layout3: true, fadeImg: require("../assets/mod6.png"), fadeButton: 'Start', isDark: true,
  	fadeLists: [
  		{
  			title: "", items: [	
  				{b: true, text: "Locking"},
  				{b: true, text: "Event Log"},
  				{b: true, text: "Changing current Program"},
  				{b: true, text: "Program delay"}, 
  				{b: true, text: "Pump Set Up"},
  			]
  		}	
  	]
  },
  // {title: 'Changing current program', id: 2, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
  // 	tooltips: [
  // 	  {
  // 	    img: require('../assets/module6/M6-S-420-1.png'), arrows: true, current: true, items: [
  // 	      {text: "Changing current program", b: true},
  // 	      {text: "More functions of the change Set Up menu will be displayed. Scroll up using the upwards key till «Select Program»"}
  // 	    ]
  // 	  },
  //   ]
  // },
  {title: 'Locking', id: 2, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        img: require('../assets/module6/M6-S-420-1.png'), lockButton: true, items: [
      {text: "Locking", b: true, o: true },
      {text: "The BodyGuard 323 Color Vision™ provides three different level of locking:", b: true},
		  {text: "Level A Keypad Locking", b: true, o: true },
		  {text: "During operation, all keys are disabled excluding the red key and options key. We saw this type of locking in the first chapter at the beginning of the course. "},
		  {text: "Level B Program Locking", o: true}, 
		  {text: "This feature enables the operator to lock out the setting keys, so that entered parameters and set programs cannot be changed once they are set. This option is important, for example, with children as users, when there is a danger that the child might play with the pump and unknowingly change the program; or for home-care patients who repeat the same program every day. Locking the program prevents mistakes in setting."},
		  {text: "Level C Maximal Rate Locking", o: true},
		  {text: "This feature enables the operator to set a maximal rate for the pump to accept. The program rate then can be adjusted only up to a preset limit."},
        ]
      },
      {
        img: require('../assets/module6/M6-S-422-1.png'), infoButton: true, current: true, items: [
          {text: "Locking - Program", b: true, o: true },
          {text: "Let’s go directly to Level B: how to lock a program. Press the Options key twice from STOP or setting mode."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-423-1.png'), arrows: true, current: true, items: [
          {text: "Locking - Program", b: true, o: true },
          {text: "Scroll down to Program Lock using the down arrow key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-424-1.png'), startButton: true, current: true, items: [
          {text: "Locking - Program", b: true, o: true },
          {text: "Once selected “Program Lock” confirm by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-425-1.png'), arrows: true, items: [
          {text: "Locking - Program", b: true, o: true },
          {text: "The default setting is OFF. Press or to change from OFF, scroll down with the arrow key to ON."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-426-1.png'), startButton: true, current: true, items: [
          {text: "Locking - Program", b: true, o: true },
          {text: "Once on ON, confirm your choice by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-427-1.png'), infoButton: true, current: true, items: [
          {text: "Locking - Maximal Rate", b: true, o: true },
          {text: "Press twice from STOP or setting mode."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-428-1.png'), arrows: true, current: true, items: [
          {text: "Locking - Maximal Rate", b: true, o: true },
          {text: "Scroll down to Change Set Up by using the down arrow key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-429-1.png'), startButton: true, current: true, items: [
          {text: "Locking - Maximal Rate", b: true, o: true },
          {text: "Volume To Be Infused (TBI) Screen"},
          {text: "Once selected «Change Set up» confirm by using the green key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-430-1.png'), arrows: true, current: true, items: [
          {text: "Locking - Maximal Rate", b: true, o: true },
          {text: "Scroll down to More by using the down arrow key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-431-1.png'), startButton: true, current: true, items: [
          {text: "Locking - Maximal Rate", b: true, o: true },
		  {text: "Once selected «More» confirm your selection by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-432-1.png'), arrows: true, current: true, items: [
          {text: "Locking - Maximal Rate", b: true, o: true },
          {text: "Scroll up to to «Maximum rate» using the upwards arrow key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-433-1.png'), startButton: true, current: true, items: [
          {text: "Locking - Maximal Rate", b: true, o: true },
		  {text: "Once «Maximum Rate» is selected confirm your choice by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-434-1.png'), numbers: true, current: true, items: [
          {text: "Locking - Maximal Rate", b: true, o: true },
          {text: "Enter the desired Maximum Rate using the numeric keypad"}
        ]
      },
      {
        img: require('../assets/module6/M6-S-434-1.png'), startButton: true, current: true, items: [
          {text: "Locking - Maximal Rate", b: true, o: true },
  		  {text: "Confirm your choice by pressing the green key."}
        ]
      },
      ]
    },
    {title: 'Events Log', id: 2, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
	      img: require('../assets/module6/M6-S-436-1.png'), startButton: true, current: true, items: [
          {text: "Events Log", b: true, o: true },
	        {text: "To access the history of events, you need to access Change Set Up. An Access Code may be requested. The events history carries the last 2000 user events (i.e. changes to programs, pump started/ stopped, etc) and the status of the pump (i.e. battery charge, pressure levels, etc). It is not patient specific (i.e. the 2000 events are likely to span multiple patients recently treated with that particular pump)."},
	        {text: "To access the events history, from the main menu scroll to Change Set Up and confirm your selection by pressing the green key."},
	      ]
      },
      {
        img: require('../assets/module6/M6-S-437-1.png'), startButton: true, current: true, items: [
          {text: "Events Log", b: true, o: true },
          {text: "Scroll to More. Confirm your selection by pressing the green key."},
        ]
      },
      {
        img: require('../assets/module6/M6-S-438-1.png'), startButton: true, current: true, items: [
          {text: "Events Log", b: true, o: true },
		  {text: "Scroll to History and Confirm your selection by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-439-1.png'), arrows: true, current: true, items: [
          {text: "Events Log", b: true, o: true },
          {text: "The screen will now show the most current user event, date, time, etc. Press the arrows keys and to scroll through events. Each event is assigned a new number and the pump stores the last 2000 in memory. After some time, the first event to appear when you enter the events history may be number 754. This means there have been 754 events in this pumps life and events 255-754 are stored in this history. The pump deletes the oldest event in the log each time a new event occurs."},

        ]
      },
      ]
    },
    {title: 'Changing current program', id: 2, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        img: require('../assets/module6/M6-S-439-1.png'), powerButton: true, current: true, items: [
          {text: "Changing current program", b: true, o: true },
          {text: "Turn on the pump by pressing the top left button."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-441-1.png'), infoButton: true, current: true, items: [
          {text: "Changing current program", b: true, o: true },
          {text: "When a programming screen or infusion summary is displayed, press the option button (question mark button) twice."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-442-1.png'), arrows: true, current: true, items: [
          {text: "Changing current program", b: true, o: true },
          {text: "The change set up menu will be displayed, scroll down by using the down arrow key to «More»"}
        ]
      },
      {
        img: require('../assets/module6/M6-S-443-1.png'), arrows: true, current: true, items: [
          {text: "Changing current program", b: true, o: true },
          {text: "Scroll down to «Change Set Up» by using the down arrow key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-444-1.png'), arrows: true, current: true, items: [
          {text: "Changing current program", b: true, o: true },
          {text: "More functions of the change Set Up menu will be displayed. Scroll up using the upwards key till «Select Program»"}
        ]
      },
      {
        img: require('../assets/module6/M6-S-445-1.png'), startButton: true, current: true, items: [
          {text: "Changing current program", b: true, o: true },
          {text: "Once the «Change set up» function is selected, confirm by pressing the green key. "}
        ]
      },
      {
        img: require('../assets/module6/M6-S-446-1.png'), startButton: true, current: true, items: [
          {text: "Changing current program", b: true, o: true },
          {text: "Once «more» is selected, confirm your choice by pressing the green key. Please be aware that a security code might be required to Change the Set up. "}
        ]
      },
      {
        img: require('../assets/module6/M6-S-447-1.png'), startButton: true, current: true, items: [
          {text: "Changing current program", b: true, o: true },
          {text: "Once «Select Program» is selected, confirm by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-448-1.png'), arrows: true, current: true, items: [
          {text: "Changing current program", b: true, o: true },
          {text: "The last program used will display, scroll up or down with the arrows key till the required program will appear."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-448-1.png'), startButton: true, current: true, items: [
          {text: "Changing current program", b: true, o: true },
          {text: "Then confirm by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-450-1.png'), startButton: true, current: true, items: [
          {text: "Changing current program", b: true, o: true },
          {text: "Press the green key to re-start the pump The selected program will remain in the pump’s memory until changed by the operator."},
        ]
      },
      {
        powerButton: true, current: true, items: [
          {text: "Changing current program - short way", b: true, o: true },
          {text: "Turn on the pump by pressing the top left button."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-452-1.png'), startButton: true, current: true, items: [
          {text: "Changing current program - short way", b: true, o: true },
          {text: "Once the Initial Self-Test is completed, immediately press and hold the red button for two seconds. The Program selection mode will be displayed."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-453-1.png'), arrows: true, current: true, items: [
          {text: "Changing current program - short way", b: true, o: true },
          {text: "Scroll with the arrow keys till the required program appears."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-454-1.png'), startButton: true, current: true, items: [
          {text: "Changing current program - short way", b: true, o: true },
          {text: "Confirm your choice by pressing the green button."}
        ]
      },
      ]
    },
    {title: 'Program Delay', id: 2, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        img: require('../assets/module6/M6-S-455-1.png'), startButton: true, current: true, items: [
          {text: "Program Delay", b: true, o: true },
          {text: "To enable the program delay go to the change set up option and confirm by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-456-1.png'), startButton: true, current: true, items: [
          {text: "Program Delay", b: true, o: true },
          {text: "Go to More and than select «Caregiver Delay» by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-457-1.png'), arrows: true, current: true, items: [
          {text: "Program Delay", b: true, o: true },
          {text: "Turn the Caregiver Delay option ON using the arrows keys."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-457-1.png'), startButton: true, current: true, items: [
          {text: "Program Delay", b: true, o: true },
          {text: "Confirm your choice by pressing the green key. The screen will display «Restart pump»"}
        ]
      },
      {
        img: require('../assets/module6/M6-S-459-1.png'), startButton: true, current: true, items: [
          {text: "Program Delay", b: true, o: true },
          {text: "After entering the program data, the pump enables delay setting, when Delay Before Start is turned ON. The Start time screen will be displayed. NOTE: The delay time is set according to a 24 hour clock. This means that hours are viewed as follows 10:00, 11:00, 12:00, 13:00, 14:00, 15:00 etc. NOTE: The pump automatically displays the current time and date. To start pump immediately, press to confirm the existing time and date and start infusion. 	"},
          {text: "NOTE: If the time and/or date automatically displayed by the pump are not correct, go to the Settings Menu and select “Set Time & Date” to reset the clock in the pump. "},
        ]
      },
      {
        img: require('../assets/module6/M6-S-459-1.png'), startButton: true, current: true, items: [
          {text: "Program Delay", b: true, o: true },
          {text: "To change the Start Time, type the desired start time using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-461-1.png'), startButton: true, current: true, items: [
          {text: "Program Delay", b: true, o: true },
          {text: "Confirm your choice by pressing the green key. NOTE: To start pump at 9:30 AM, enter 0-9-3-0. To start the pump at 9:30 PM, enter 2-1-3-0."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-462-1.png'), arrows: true, current: true, items: [
          {text: "Program Delay", b: true, o: true },
          {text: "Start Date Screen  will be displayed. To start the program on the same day do not type anything and confirm with the green key. To change the Start Date, type the desired start date using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-462-1.png'), startButton: true, current: true, items: [
          {text: "Program Delay", b: true, o: true },
          {text: "Confirm your choice with the green key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-464-1.png'), startButton: true, current: true, items: [
          {text: "Program Delay", b: true, o: true },
          {text: "KVO During Delay Screen ", b: true},
          {text: "During delay time, pump will operate in KVO mode. Time left will count down until 00:00 and will then automatically start the progrmamed infusion. During the delay, this screen will be displayed showing when the infusion will start. After delay time, pump will beep once and infusion will start automatically. "},
          {text: "NOTE: KVO rate is configured in 'change set-up' menu. Please refer to Change Set up section for more information."},
        ]
      },
      ]
    },
    {title: 'Pump Setup', id: 2, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        img: require('../assets/module6/M6-S-465-1.png'), infoButton: true, current: true, items: [
          {text: "Review Setup", b: true, o: true },
          {text: "The Review Set up feature is designed to allow you to view the programmable options and other information about the pump. In Review Set up, settings can be viewed, but not changed. Press the Options key twice from STOP or setting mode."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-466-1.png'), arrows: true, current: true, items: [
          {text: "Review Setup", b: true, o: true },
          {text: "Scroll down to Review Set up using the down arrow key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-467-1.png'), startButton: true, current: true, items: [
          {text: "Review Setup", b: true, o: true },
          {text: "Once “Review Set up” is highlighted, confirm your selection by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-467-1.png'), startButton: true, current: true, items: [
          {text: "Review Setup", b: true, o: true },
          {text: "The Review Set Up menu will appear. To view the setting for a particular option, select the desired option and press the green key. "},
          {text: "You can review the following options: "},
          {text: "1. Battery level: it goes from Empty to full."},
          {text: "2. Program Lock: Options are ON or OFF."},
          {text: "3. Time, Date: the current time and date appears."},
          {text: "4. Buzzer level:  the current buzzer volume setting appears."},
          {text: "5. Pressure level: the current pressure level setting appears."},
          {text: "6. Pressure Default: the current pressure default setting appears."},
          {text: "7. Priming Rate: current Priming rate setting appears."},
          {text: "8. Select Program: the current Selected program appears."},
          {text: "9. Maximum Bolus Volume: the Maximum Bolus Volume setting appears."},
          {text: "10.Bolus Rate: the current Bolus Rate setting appears."},
          {text: "11. Maximum Rate: the current Maximum rate setting appears."},
          {text: "12. KVO Rate: the current KVO rate setting appears."},
          {text: "13. Flow Control: the current Flow controls setting in drops per millimeter appears."},
          {text: "14. Air Bubble Size: the current Air bubble size setting appears."},
          {text: "15. Store Last Program: the current status of the “store last program” option appears. Options are ON or OFF."},
          {text: "16. Keystroke beep: the current status of the “Keystroke beep” option appears. Options are ON or OFF."},
          {text: "17. Time options: he current status of the “Time option” appears. Options are ON or OFF."},
          {text: "18. WiFi module: the current status of the “WiFi module” appears. Options are ON or OFF."},
          {text: "19. Caregiver delay: the current status of the “Caregiver delay” options appears. Options are ON or OFF."},
          {text: "20. Language: the current pump messages language appears."},
          {text: "21. Serial Number: the Pump Serial Number appears."},
          {text: "22. Production Date: the Pump Production Date appears."},
          {text: "23. Operation Time: hours Since Last Service Calibration appears."},
          {text: "24. Software Version: the pump software version appears. "},
          {text: "25. Volume Calibration: the volumetric calibration values appears."},
          {text: "26. Pressure Delta: the Pressure Calibration – delta Value appears."},
          {text: "27. Pressure CAP: the pressure calibration – CAP value appears."},
          {text: "28. History: The History of the last events appears. For more details on each event press the Options key."},
          {text: "29 Exit.  You exit 'Review Set up' menu."},
        ]
      },
      {
        img: require('../assets/module6/M6-S-469-1.png'), infoButton: true, current: true, items: [
          {text: "Change Setup", b: true, o: true },
          {text: "The Change setup mode allows you to make changes to the adjustable parameters. Please be aware that a security code may be requested to perform these types of operations. This code should be available only to authorized personnel in accordance with your local policy and procedures. Please refer to your supervisor in case of questions."},
          {text: "To access the change set up press the options key twice from stop or setting mode."},
        ]
      },
      {
        img: require('../assets/module6/M6-S-470-1.png'), arrows: true, current: true, items: [
          {text: "Change Setup", b: true, o: true },
          {text: "Scroll down to Change Set up using the down arrow key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-471-1.png'), startButton: true, current: true, items: [
          {text: "Change Setup", b: true, o: true },
          {text: "Once “Change Set Up” is selected, confirm your choice by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module6/M6-S-472-1.png'), startButton: true, current: true, items: [
          {text: "Change Setup", b: true, o: true },
          {text: "A number of parameters can be changed in the “Change Set up Menu”. Please refer to the DFUs"},
          {text: "The pressure level"},
          {text: "The buzzer level"},
          {text: "The more options will give you access to more parameters that can be changed in this menu as:"},
          {text: "The pressure level which - from 100mmHg up to 1500mmHg "},
          {text: "The program of infusion"},
          {text: "The priming rate – normally fixed at 1,200 ml/H"},
          {text: "The maximum bolus volume - from 0-100 "},
          {text: "The bolus titration which can be enabled (ON) or disabled (OFF)"},
          {text: "The bolus rate - from 0-1200 ml/hr"},
          {text: "The maximum rate - 0.1-1200 ml/h"},
          {text: "The KVO rate – from "},
          {text: "The Flow control - 0 to 20 drops per ml"},
          {text: "The Set loading test which can be enabled or disabled "},
          {text: "The air bubble size - 0.1 - 2.0 ml "},
          {text: "The store last program function – that can be enabled or disabled"},
          {text: "The keystroke beep – that can be enabled and disabled"},
          {text: "The time option – that can be enabled or disabled. While time option is ON, Continuous, Intermittent and 25 Steps program will be set to Volume over Time"},
          {text: "WiFi module – that can be enabled or disabled"},
          {text: "The caregiver delay – that can be enabled or disabled"},
          {text: "The language option"},
          {text: "Set time and date"},
          {text: "The history function"},
        ]
      },
      {
        img: require('../assets/module6/M6-S-472-2.png'), startButton: true, current: true, items: [
          {text: "Change Setup", b: true, o: true },
          {text: "A number of parameters can be changed in the “Change Set up Menu”. Please refer to the DFUs"},
          {text: "The pressure level"},
          {text: "The buzzer level"},
          {text: "The more options will give you access to more parameters that can be changed in this menu as:"},
          {text: "The pressure level which - from 100mmHg up to 1500mmHg "},
          {text: "The program of infusion"},
          {text: "The priming rate – normally fixed at 1,200 ml/H"},
          {text: "The maximum bolus volume - from 0-100 "},
          {text: "The bolus titration which can be enabled (ON) or disabled (OFF)"},
          {text: "The bolus rate - from 0-1200 ml/hr"},
          {text: "The maximum rate - 0.1-1200 ml/h"},
          {text: "The KVO rate – from "},
          {text: "The Flow control - 0 to 20 drops per ml"},
          {text: "The Set loading test which can be enabled or disabled "},
          {text: "The air bubble size - 0.1 - 2.0 ml "},
          {text: "The store last program function – that can be enabled or disabled"},
          {text: "The keystroke beep – that can be enabled and disabled"},
          {text: "The time option – that can be enabled or disabled. While time option is ON, Continuous, Intermittent and 25 Steps program will be set to Volume over Time"},
          {text: "WiFi module – that can be enabled or disabled"},
          {text: "The caregiver delay – that can be enabled or disabled"},
          {text: "The language option"},
          {text: "Set time and date"},
          {text: "The history function"},
        ]
      },
      
      // {
      //   items: [
      //     {text: "Click next to continue"}
      //   ]
      // },
  	]
  },

  // {title: 'Module Six Complete', img: require('../assets/device.png'),  id: 67 }
]

export default moduleSix
