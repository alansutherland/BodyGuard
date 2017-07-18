const continuous = [
  {title: 'How to operate an infusion in continuous mode', fadeTitle: '', id: 1, layout3: true, isDark: true, fadeImg: require("../assets/modes1.svg"), modeStart: true, fadeButton: 'Start',
  	fadeLists: [
      {
        title: "Overview", items: [
          {b: true, text: "In the Continuous Program, you will program a rate and a volume. The Rate can be programmed from 0.1 to 100 ml/hr in 0.1 ml increments, and from 100 to 1200 ml/hr in 1 ml increments. The total Volume to be Infused can be programmed from 0.1 to 9999 ml."},
          {b: true, text: "This program offers the possibility to program an infusion as rate over volume or volume over time."},
          {b: true, text: "You have the option to program also a secondary infusion (piggy) or a bolus."}
        ]
      } 
    ],
    lists: [
  		{
  			title: "In this section", items: [
  				{text: "How to operate an infusion in continuous mode"},
  				{text: "Advanced Features in continuous mode:"},
  				{text: "How to change to  concentration screen"},
  				{text: "How to change rate during the infusion"},
  				{text: "How to change rate in stop mode"},
  				{text: "Bolus infusion during continuous infusion"},
  				{text: "Secondary Infusion during continuous infusion"},
  				{text: "Options during a continuous infusion"},
  				{text: "Options on hold"}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in continuous mode', fadeTitle: '', id: 3, layout3: true, fadeImg: require("../assets/s-27.svg"),
  	fadeLists: [
  		{
  			title: "", items: [
  				{text: "The MicroSet™ administration set contains a one-way BodyValve™. Therefore, the line cannot be primed using gravity and must be primed either using the BodyGuard 323 Color Vision™ pump priming function or by pressing on the manual priming valve if one exists on the set. In case manual priming is required, use an administration set with special manual priming valve."},
  				{text: "Prime function is used:", b: true},
  				{text: "1. Before starting a program"},
  				{text: "2. After air in line alarm"},
  				{span: "Warning:", o: true, text: "Always disconnect IV tubing from patient before starting priming procedure."},
  				{span: "Note:", o: true, text: "The default priming flow rate is 600 ml/hr. During priming, the air in line alarm is disabled."},
  				{text: "In case of any doubt please consult the manual."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in continuous mode', fadeTitle: '', id: 4, layout3: true, fadeImg: require("../assets/con2.png"),
  	fadeLists: [
  		{
  			 items: [
  				{span: "Note:", o: true, text: "Follow the instructions supplied with the individual administration set. Warning: Use of any administration set, other than the MicroSet™, may impair the operation of the pump and the accuracy of the Infusion. Use aseptic technique. Patient infection may result from the use of non-sterile components. Maintain sterility of all disposable components and use only single use consumables."},
  				{text: "Lift the door latch on the right side of the pump to open the door."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in continuous mode', fadeTitle: '', id: 5, layout3: true, fadeImg: require("../assets/con3.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Open the packaging and remove the administration set from the sterile packaging leaving the end caps on the line until the moment of connection."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in continuous mode', fadeTitle: '', id: 6, layout3: true, fadeImg: require("../assets/con4.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Connect the administration set to the medication bag. In the example you see a soft bag but we have many different type of sets available for any of your needs."},
  				
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in continuous mode', fadeTitle: '', id: 7, layout3: true, fadeImg: require("../assets/con5.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Hold the section of tubing with the key (small plastic block) and make sure the flow direction is in line with the flow direction arrows inside the pump door. Insert the IV tubing into the pump by placing the key into the keyway."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in continuous mode', fadeTitle: '', id: 8, layout3: true, fadeImg: require("../assets/con6.png"),
  	fadeLists: [
  		{
  			items: [
  				{text: "Locate the Anti-Stretch locator in the round space on the left side (around the air sensor door) and verify that the BodyValve™ is on the right hand side of the pump."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in continuous mode', fadeTitle: '', id: 9, layout3: true, fadeImg: require("../assets/con6.png"),
  	fadeLists: [
  		{
  			items: [
  				{text: "Close the pump door until the catch clicks."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in Continuous mode', fadeTitle: '', id: 10, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
  	tooltips: [
  	  {
  	    powerButton: true, current: true, items: [
  	      {text: "Turn on the pump by pressing and hold the top left on/off key."}
  	    ]
  	  },
      {
        img: require('../assets/module1-2/M2-S-35-1.png'), startButton: true, items: [
          {text: "The selected program will remain in the pump’s memory until changed by the operator. Therefore if the last program used was “Continuous Program” when you turn on the pump, Continuous Program will appear. If instead the last program used was a different one and you want to switch to continuous, you need to go to the Menu and select “Change Set up”, than “More” and then “Select Program”, & scroll until the required program appears on the screen. If in doubt consult the Directions for Use."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-35-1.png'), startButton: true, current: true, items: [
          {text: "Press the green key to confirm your choice. "}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-37-1.png'), primeButton: true, current: true, items: [
          {text: "Once the first programming screen or parameter appears, press the orange button to start the Priming procedure"}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-38-1.png'), startButton: true, items: [
          {text: "The Prime screen will be displayed, press the green button to confirm. Ensure the set is not connected to the patient!"}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-39-1.png'), numbers: true, current: true, items: [
          {text: "Enter the Volume of fluid required to prime the set by using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-40-1.png'), startButton: true, current: true, items: [
          {text: "Once the required priming volume is entered, confirm by pressing the green key"}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-41-1.png'), stopButton: true, current: true, items: [
          {text: "The display screen will show a graph indicating the prime operation. You can stop the priming at any time by pressing the red key. Once the priming is completed, the display will change back to the previous screen the pump was in before priming. If more priming is needed, repeat procedure. Make sure that all air is removed from the IV line before connecting to the patient."},
          {text: "Once Priming is completed you will go back to last programming screen you where on."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-42-1.png'), startButton: true, current: true, items: [
          {text: "Press the green key to confirm ml/hr as your programming units. Warning: do not press the keyboard numbers before you confirm the ml/hr choice with the green key - that will change the set up in mg/ml instead."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-43-1.png'), numbers: true, current: true, items: [
          {text: "Enter the desired rate by pressing the numeric keypad. The rate can be set between 0.1-1200ml/h."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-44-1.png'), startButton: true, current: true, items: [
          {text: "Once the desired rate is entered, confirm your choice by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-45-1.png'), numbers: true, current: true, items: [
          {text: "Enter the desired volume by pressing the numeric keypad. Volume can be set  between 0.1 to 99.9 ml in 0.1ml increments or 1 to 9999 ml in 1ml increments."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-46-1.png'), startButton: true, current: true, items: [
          {text: "Confirm your choice by pressing the green key. In case you want to adjust or change any of the numbers you entered, press the red button "}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-47-1.png'), startButton: true, current: true, items: [
          {text: "The accumulation screen will appear with a summary of all parameters. To confirm press the green key. If you want to go back, press the red key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-48-1.png'), startButton: true, current: true, items: [
          {text: "Press the green key to start the infusion."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-49-1.png'), bar: true, current: true, items: [
          {text: "The infusion rate and the pressure bar will appear. The pressure bar displays the actual pressure in the line.  Verify that pressure is not building in the IV line before attending to other patients. The screen also shows: actual time and battery level."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-50-1.png'), stopButton: true, current: true, items: [
          {text: 'End of Infusion', b: true},
          {text: "Once the infusion had reached an end (pre-set volume was infused), an alarm sounds and display will show the End of Infusion Screen."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-51-1.png'), stopButton: true, current: true, items: [
          {text: 'End of Infusion', b: true},
          {text: "The alarm will stop after 4 beeps. The pump will show the pre-set KVO rate. The alarm will sound again every 4 minutes until the user changes the bag or stops the pump."}
        ]
      },
  	]
  },
  {title: 'Advanced Features in Continuous mode', fadeTitle: '', id: 10, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        img: require('../assets/module1-2/M2-S-52-1.png'), stopButton: true, current: true, items: [
          {text: 'How to change to concentration screen', b: true},
          {text: "Let’s see some of the more Advance features in continuous mode."},
          {text: "After selecting the Continuous Program, you have the option to program your infusion in ml/hr or switch to Concentration. Press the red key to switch to concentration"}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-53-1.png'), stopButton: true, current: true, items: [
          {text: 'How to change to concentration screen', b: true},
          {text: "Press the red key once to switch to mg/ml units, enter the desired concentration with the numeric key pad and than confirm with the green key. To switch from mg/mcg units to ml/h enter a value of “0” and press the green keypad."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-54-1.png'), startButton: true, current: true, items: [
          {text: 'How to change to concentration screen', b: true},
          {text: "Example when its running in mg/h."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-55-1.png'), startButton: true, current: true, items: [
          {text: 'How to change to concentration screen', b: true},
          {text: "Press the red key twice to switch to mcg/ml units, enter the desired concentration with the numeric key pad and than confirm with the green key. To switch from mg/mcg units to ml/h enter a value of “0” and press the green keypad."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-56-1.png'), numbers: true, current: true, items: [
          {text: 'How to change rate during the infusion', b: true},
          {text: "The pump allows rate titration during the default Rate Over Volume Program. Use numeric keypad to enter the new desired rate during operation."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-57-1.png'), startButton: true, current: true, items: [
          {text: 'How to change rate during the infusion', b: true},
          {text: "Then press the green key within five seconds. The pump will briefly alarm and the infusion will resume at the adjusted rate. Please note that if the rate change is not confirmed within ten seconds, the pump will continue operation at the original rate and the display will return to the previous setting."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-58-1.png'), stopButton: true, current: true, items: [
          {text: 'How to change rate in stop mode', b: true},
          {text: "1. To stop the pump during the infusion press on the red key. "}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-58-1.png'), numbers: true, current: true, items: [
          {text: 'How to change rate in stop mode', b: true},
          {text: "2. Then press any number on the keypad twice to return to the rate screen. "}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-59-1.png'), startButton: true, current: true, items: [
          {text: 'How to change rate in stop mode', b: true},
          {text: "Once on the rate screen, press the green key to continue."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-60-1.png'), numbers: true, current: true, items: [
          {text: 'How to change rate in stop mode', b: true},
          {text: "1. Adjust the rate by using the numeric keypad."},
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-60-1.png'), startButton: true, current: true, items: [
          {text: 'How to change rate in stop mode', b: true},
          {text: "2. Press the green key to confirm"}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-61-1.png'), startButton: true, current: true, items: [
          {text: 'How to change rate in stop mode', b: true},
          {text: "1. Adjust the volume by using the numeric keypad."},
          {text: "2. Press the green key to confirm."},
          {text: "Remember that during programming you may always backspace using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-62-1.png'), infoButton: true, current: true, items: [
          {text: 'Volume over time', b: true},
          {span: "Note:", o: true, text: "Before operating the pump in Volume Over Time, make sure that you are in the Continuous Program and that the IV bag contains an additional 5 ml of volume to be infused. This ensures adequate volume for KVO during End Program."},
          {text: "To set Volume Over Time, you need to enable the time function. Press the info key two times in order to see the Menu."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-63-1.png'), startButton: true, current: true, items: [
          {text: 'Volume over time', b: true},
          {text: "1. Scroll down to the Change Set Up option"},
          {text: "2. Then press the green key"}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-64-1.png'), startButton: true, current: true, items: [
          {text: 'Volume over time', b: true},
          {text: "1. Scroll down to more."},
          {text: "2. Then press the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-65-1.png'), startButton: true, current: true, items: [
          {text: 'Volume over time', b: true},
          {text: "1. Scroll down to Time Option."},
          {text: "2. Then press the green key"}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-66-1.png'), startButton: true, current: true, items: [
          {text: 'Volume over time', b: true},
          {text: "The default set up is OFF. Turn it on by scrolling down with the arrow keys and confirm with the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-67-1.png'), startButton: true, current: true, items: [
          {text: 'Volume over time', b: true},
          {text: "The Bag Volume screen will appear. Press to confirm the existing parameters, or enter the desired volume using the numeric keypad, and press the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-68-1.png'), startButton: true, current: true, items: [
          {text: 'Volume over time', b: true},
          {text: "The infusion item screen will appear. Enter the desired total time using the numeric keypad (for example enter 0-2-0-0 for two hours) and press the green key. First two digits represent hours and last two digits represent minutes."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-69-1.png'), startButton: true, current: true, items: [
          {text: 'Volume over time', b: true},
          {text: "The Rate screen will appear. The pump calculates the rate based on the time and volume entered, and displays the rate on the screen. Press to confirm the existing parameters or press to go back to volume setting screen."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-70-1.png'), startButton: true, current: true, items: [
          {text: 'Volume over time', b: true},
          {text: "The summary screen will appear. Press the green key if you wish to confirm"}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-71-1.png'), primeButton: true, current: true, items: [
          {text: 'Bolus during continuous infusion', b: true},
          {span: "Note:", o: true, text: "To perform a bolus infusion during Continuous operation, the Maximum Bolus Volume in the Set up Menu should be defined as greater than 0ml as the default set up."},
          {text: "To give a bolus during Continuous operation, press the Orange key once."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-72-1.png'), numbers: true, current: true, items: [
          {text: 'Bolus during continuous infusion', b: true},
          {text: "Enter the bolus dose with the numeric keypad and confirm with the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-73-1.png'), startButton: true, current: true, items: [
          {text: 'Bolus during continuous infusion', b: true},
          {text: "Confirm your choice with the green key."}
        ]
      } , 
      {
        img: require('../assets/module1-2/M2-S-74-1.png'), startButton: true, current: true, items: [
          {text: 'Bolus during continuous infusion', b: true},
          {text: "The summary page will appear. Press the green key to start bolus."}
        ]
      },   
      {
        img: require('../assets/module1-2/M2-S-75-1.png'), bar: true, current: true, items: [
          {text: 'Bolus during continuous infusion', b: true},
          {text: "The bolusing screen will appear."}
        ]
      } ,  
      {
        img: require('../assets/module1-2/M2-S-76-1.png'), primeButton: true, current: true, items: [
          {text: 'Secondary Infusion during continuous infusion', b: true},
          {span: "Note:", o: true, text: "To perform a secondary infusion during Continuous operation, the Maximum Bolus Volume in the Set up Menu should be defined as 0ml"},
          {text: "Press the orange key once during operations."}
        ]
      } ,   
      {
        img: require('../assets/module1-2/M2-S-77-1.png'), numbers: true, current: true, items: [
          {text: 'Secondary Infusion during continuous infusion', b: true},
          {text: "Enter the desired secondary infusion (Piggy) rate by using the numeric keypad."}
        ]
      } ,   
      {
        img: require('../assets/module1-2/M2-S-78-1.png'), startButton: true, current: true, items: [
          {text: 'Secondary Infusion during continuous infusion', b: true},
          {text: "Confirm your chosen rate by pressing the green key."}
        ]
      } , 
      {
        img: require('../assets/module1-2/M2-S-79-1.png'), startButton: true, current: true, items: [
          {text: 'Secondary Infusion during continuous infusion', b: true},
          {text: "Confirm your chosen rate by pressing the green key."}
        ]
      } ,
      {
        img: require('../assets/module1-2/M2-S-80-1.png'), startButton: true, current: true, items: [
          {text: 'Secondary Infusion during continuous infusion', b: true},
          {text: "Confirm your chosen rate by pressing the green key. Pump will beep once and resume the Primary Infusion when the Secondary Infusion is completed."}
        ]
      } ,   
      {
        img: require('../assets/module1-2/M2-S-81-1.png'), current: true, items: [
          {text: 'Options during a continuous infusion', b: true},
          {text: "During the continuous infusion, you can access different information by pressing the Options key on the left bottom. "}
        ]
      } ,   
      {
        img: require('../assets/module1-2/M2-S-82-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a continuous infusion', b: true},
          {text: "By pressing once, the Volume Infused and the Volume to be Infused will be displayed "}
        ]
      } ,  
      {
        img: require('../assets/module1-2/M2-S-83-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a continuous infusion', b: true},
          {text: "By pressing two times, the Battery level will be displayed."}
        ]
      } ,
      {
        img: require('../assets/module1-2/M2-S-84-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a continuous infusion', b: true},
          {text: "By pressing three times, the Time left will be displayed."}
        ]
      } ,
      {
        img: require('../assets/module1-2/M2-S-85-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a continuous infusion', b: true},
          {text: "By pressing four times, the current Date & Time will be displayed."}
        ]
      } ,
      {
        img: require('../assets/module1-2/M2-S-86-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a continuous infusion', b: true},
          {text: "By pressing five times, the Actual Pressure will be displayed."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-87-1.png'), stopButton: true, current: true, items: [
          {text: 'Options on hold', b: true},
          {text: "To put the pump on hold, press the red key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-88-1.png'), infoButton: true, current: true, items: [
          {text: 'Options on hold', b: true},
          {text: "Press the Options key on the bottom left."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-89-1.png'), infoButton: true, current: true, items: [
          {text: 'Options on hold', b: true},
          {text: "By pressing once, the Volume Infused and the Volume still to be infused will be displayed."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-90-1.png'), infoButton: true, current: true, items: [
          {text: 'Options on hold', b: true},
          {text: "By pressing twice, the following options will appear:"},
          {text: "Volume infused gives you an overview of the volume infused and volume to be infused."},
          {text: "Program lock – gives you the option to lock the current program."},
          {text: "Review Set up – gives you the option to scroll down and review the different settings. Nothing can be changed, only reviewed."},
          {text: "Change set up – gives you the possibility to change the setting of the pump."},
          {text: "History – gives you the possibility to review the past events. The events history carries the last 2000 user events (i.e. changes to programs, pump started/stopped, etc) and the status of the pump (i.e. battery charge, pressure levels, etc). It is not patient specific."}
        ]
      },
    ]
  },
  {title: 'Question 1 of 2', fadeImg: require('../assets/device-front.png'), question: "When programming in continuous mode in ml/hr which information do you need to enter?", quiz: true, device: true, singleAnswerOne: true, answer: 2, correct: false, incorrect: false, id: 65, layout4: true, 
    answers: [
      { text: 'Multiple programs to adapt to different clinical applications'},
      { text: 'Mainly pain management procotols'}
   ]
  },

  {title: 'Question 2 of 2', question: 'You can visualize the volume infused and the volume to be infused by:', quiz: true, device: true, singleAnswerTwo: true, answer: 1, correct: false, incorrect: false, id: 66, layout3: true, fadeImg: require("../assets/device-front.png"),
  	answers: [
  	      { text: 'Multiple programs to adapt to different clinical applications'},
  	      { text: 'Mainly pain management procotols'}
  	   ]
  },

  // {title: 'Continuous Mode Complete', img: require('../assets/device.png'),  id: 67 }
]

export default continuous
