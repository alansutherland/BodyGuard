const tpn = [

  {title: 'How to operate an infusion in TPN mode', fadeTitle: '', id: 1, layout3: true, isDark: true, modeStart: true, fadeImg: require("../assets/modes3.svg"), fadeButton: 'Start',
  	fadeLists: [
      {
        title: "Overview", items: [
          {text: "The TPN program is used Total Parenteral Nutrition - This mode delivers an infusion while automatically tapering up and down. The pattern of the program is a trapezoid. The program has a taper up/taper down pattern. The parameters to be set are: Total Volume, Time Up, Time Down and Total Time. The pump will calculate the ramping infusion rates."},
          {text: "On a TPN Program the operator may set the total volume (from1 to 9999 ml) which corresponds to the size of the bag to be infused, the total time, and the up and down time. Program operation will start from 2 ml/h and will increase to the maximal rate. During the flat session the rate will not change. During the last part of the program, the program will start to decrease the infusion rate according to the set taper down time. Up and down time can be set to zero. A TPN program with up and down time set to zero, is a continuous program."}, 
        ]
      } 
    ],
    lists: [
  		{
  			title: "In this section", items: [
  				{text: "How to start an infusion in TPN mode"},
  				{text: "Advanced Features in TPN mode:"},
  				{text: "Early taper down options during a TPN infusion"},
  				{text: "Options when the infusion is stopped"},	
  			]
  		}	
  	]
    
  },
  {title: 'How to operate an infusion in TPN mode', fadeTitle: '', id: 3, layout3: true, fadeImg: require("../assets/con1.png"),
  	fadeLists: [
  		{
  			title: "How to start an infusion in TPN mode", items: [
  				{text: "The MicroSet™ administration set contains a one-way BodyValve™. Therefore, the line cannot be primed using gravity and must be primed either using the BodyGuard 323 Color Vision™ pump priming function or by pressing on the manual priming valve if one exists on the set. In case manual priming is required, use an administration set with special manual priming valve."},
  				{text: "Prime function is used:"},
  				{text: "1. Before starting a program"},
  				{text: "2. After air in line alarm"},
  				{span: "Warning:", o: true, text: "Always disconnect IV tubing from patient before starting priming procedure."},
  				{span: "Note:", o: true, text: "The default priming flow rate is 600 ml/hr. During priming, the air in line alarm is disabled."},
  				{text: "In case of any doubt please consult the manual."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in TPN mode', fadeTitle: '', id: 4, layout3: true, fadeImg: require("../assets/con2.png"),
  	fadeLists: [
  		{
  			 items: [
  				{span: "Note:", o: true, text: "Follow the instructions supplied with the individual administration set. Warning: Use of any administration set, other than the MicroSet™, may impair the operation of the pump and the accuracy of the Infusion. Use aseptic technique. Patient infection may result from the use of non-sterile components. Maintain sterility of all disposable components and use only single use consumables."},
  				{text: "Lift the door latch on the right side of the pump to open the door."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in TPN mode', fadeTitle: '', id: 5, layout3: true, fadeImg: require("../assets/con3.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Open the packaging and remove the administration set from the sterile packaging leaving the end caps on the line until the moment of connection."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in TPN mode: loading of the set', fadeTitle: '', id: 6, layout3: true, fadeImg: require("../assets/con4.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Connect the administration set to the medication bag. In the example you see a soft bag but we have many different type of sets available for any of your needs."},
  				
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in TPN mode: loading of the set', fadeTitle: '', id: 7, layout3: true, fadeImg: require("../assets/con5.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Hold the section of tubing with the key (small plastic block) and make sure the flow direction is in line with the flow direction arrows inside the pump door. Insert the IV tubing into the pump by placing the key into the keyway."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in TPN mode', fadeTitle: '', id: 8, layout3: true, fadeImg: require("../assets/con6.png"),
  	fadeLists: [
  		{
  			items: [
  				{text: "Locate the Anti-Stretch locator in the round space on the left side (around the air sensor door) and verify that the BodyValve™ is on the right hand side of the pump."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in TPN mode', fadeTitle: '', id: 9, layout3: true, fadeImg: require("../assets/con6.png"),
  	fadeLists: [
  		{
  			items: [
  				{text: "Close the pump door until the catch clicks."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in TPN mode', fadeTitle: '', id: 10, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
  	tooltips: [
  	  {
  	    powerButton: true, current: true, items: [
  	      {text: "Turn on the pump by pressing and hold the top left on/off key."}
  	    ]
  	  },
      {
        img: require('../assets/module2/M2-S-200-1.png'), startButton: true, items: [
          {span: "Note:", o: true, text: "Before operating the pump in TPN program, make sure that the IV bag contains an additional 5 ml of total volume to be infused. This ensures adequate volume for KVO during End Program. If Delay Before Start is set, you must include enough volume for the delay period in addition to the 5 ml KVO volume."},
          {text: "The selected program will remain in the pump’s memory until changed by the operator. Therefore if the last program used was TPN Program when you turn on the pump, TPN Program will appear. If instead the last program used was a different one and you want to switch to TPN, you need to go to the Menu and select “Change Set up”, than “More” and then “Select Program”, & scroll until the required program appears on the screen. If in doubt consult the Directions for Use."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-201-1.png'), primeButton: true, current: true, items: [
          {text: "Once the first programming screen, press the orange key to start the priming procedure."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-202-1.png'), startButton: true, current: true, items: [
          {text: "The Prime screen will be displayed. Press the green key to start priming. Ensure the set is not connected to the patient!"}
        ]
      },
      {
        img: require('../assets/module2/M2-S-203-1.png'), numbers: true, current: true, items: [
          {text: "Enter the desired priming volume by using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-204-1.png'), startButton: true, items: [
          {text: "Confirm by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-205-1.png'), bar: true, current: true, items: [
          {text: "The priming screen will be displayed. Once the Priming procedure is completed, you will go back to the Programming screen."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-206-1.png'), numbers: true, current: true, items: [
          {text: "The Bag Volume Screen will appear. Enter the desired volume using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-207-1.png'), startButton: true, current: true, items: [
          {text: "Press the green key to confirm."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-208-1.png'), numbers: true, current: true, items: [
          {text: "Volume To Be Infused (TBI) Screen"},
          {text: "Enter the desired volume to be infused using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-209-1.png'), startButton: true, current: true, items: [
          {text: "Press the green key to confirm your choice."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-210-1.png'), numbers: true, current: true, items: [
          {text: "Total time screen."},
		  {text: "Enter the total time using the numeric keypad. First two digits represent hours and last two digits represent minutes (for example, enter 0-2-0-0 for 2 hours.). Use a point to move from hours to minutes.."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-211-1.png'), startButton: true, current: true, items: [
          {text: "Confirm your choice with the green key. "}
        ]
      },
      {
        img: require('../assets/module2/M2-S-212-1.png'), numbers: true, current: true, items: [
          {text: "Up time screen."},
		  {text: "Enter the desired value using the numeric keypad -  from 00:00 to 04:15 hours."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-213-1.png'), startButton: true, current: true, items: [
          {text: "Confirm your choice by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-214-1.png'), numbers: true, current: true, items: [
          {text: "Down time screen."},
  		  {text: "This is the time for rate to taper down. Enter the desired value using the numeric keypad -  from 00:00 to 04:15 hours."}
        ]
      },
      {
	      img: require('../assets/module2/M2-S-215-1.png'), startButton: true, current: true, items: [
	        {text: "Down time screen."},
			{text: "Confirm your choice with the green key."}
	      ]
      },
      {
        img: require('../assets/module2/M2-S-216-1.png'), numbers: true, current: true, items: [
          {text: "KVO Rate screen."},
		  {text: "Enter the desired value using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-217-1.png'), startButton: true, current: true, items: [
          {text: "KVO Rate screen."},
		  {text: "Confirm your choice with the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-218-1.png'), startButton: true, current: true, items: [
          {text: "Accumulation screen."},
          {text: "The pump calculates the set data and displays the accumulation screen with the maximal rate for the program to be infused during flat period. Press the green key to confirm parameters and start infusion or enter delay time, if applicable. For further information regarding delay options, refer to the delay program section."},
          {text: "To go back to volume setting screen, press the red key."},
        ]
      },
      {
        img: require('../assets/module2/M2-S-219-1.png'), startButton: true, current: true, items: [
          {text: "Press the green key to start the infusion."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-220-1.png'), stopButton: true, current: true, items: [
          {text: 'End of Infusion', b: true},
          {text: "Once the infusion had reached an end (pre-set volume was infused), an alarm sounds and display will show the End of Infusion Screen."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-221-1.png'), stopButton: true, current: true, items: [
          {text: 'End of Infusion', b: true},
          {text: "The alarm will stop after 4 beeps. The pump will show the pre-set KVO rate. The alarm will sound again every 4 minutes until the user changes the bag or stops the pump."}
        ]
      },
  	]
  },
  {title: 'Advanced Features in TPN mode', fadeTitle: '', id: 10, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
          {
        img: require('../assets/module2/M2-S-222-1.png'), stopButton: true, current: true, items: [
          {text: 'Early taper down', b: true},
          {text: "If the program must be interrupted early and the planned taper down time must commence immediately, press and hold the red key to show the Taper Down screen."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-223-1.png'), startButton: true, current: true, items: [
          {text: 'Early taper down', b: true},
          {text: "When the Early Taper Down Screen appears, if you wish to start the taper down process immediately press the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-223-1.png'), numbers: true, current: true, items: [
          {text: 'Early taper down', b: true},
          {text: "When the Early Taper Down Screen appears, if you wish to start the taper down earlier, enter the new time time for taper down, using the numeric keys. Taper down time should be lower than the ongoing taper down time. Press the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-225-1.png'), startButton: true, current: true, items: [
          {text: 'Early taper down', b: true},
          {text: "Press the green key to confirm the new taper down time. "}
        ]
      },
      {
        img: require('../assets/module2/M2-S-226-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a TPN infusion', b: true},
          {text: "During an intermittent infusion, by pressing the Options key on the bottom left you will have access to more information.  "}
        ]
      },
      {
        img: require('../assets/module2/M2-S-227-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a TPN infusion', b: true},
          {text: "By pressing once, the volume infused and the volume still to be infused will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-228-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a TPN infusion', b: true},
          {text: "By pressing two times, the battery level will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-229-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a TPN infusion', b: true},
          {text: "By pressing three times, the program status will be displayed in a graphic format."},
        ]
      },
      {
        img: require('../assets/module2/M2-S-230-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a TPN infusion', b: true},
          {text: "By pressing four times, the current time and date will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-231-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a TPN infusion', b: true},
          {text: "By pressing five times the Actual pressure will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-232-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the TPN infusion is stopped', b: true},
          {text: "After you have stopped the pump, you can access more information by pressing the options key on the left bottom side. Please refer to the info menu and history menu sections for more information."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-233-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the TPN infusion is stopped', b: true},
          {text: "By pressing once, the volume Infused and the volume still to be infused will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-234-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the TPN infusion is stopped', b: true},
      {text: "By pressing two times, Volume infused gives you an overview of the volume infused and volume to be infused."},
      {text: "Program lock – gives you the option to lock the current program."},
      {text: "Review Set up – gives you the option to scroll down and review the different settings. Nothing can be changed, only reviewed."},
      {text: "Change set up – gives you the possibility to change the setting of the pump."},
      {text: "History – gives you the possibility to review the past events. The events history carries the last 2000 user events (i.e. changes to programs, pump started/stopped, etc) and the status of the pump (i.e. battery charge, pressure levels, etc). It is not patient specific."},
        ]
      },
    ]
  },
  {title: 'Question 1 of 2', fadeImg: require('../assets/device-front.png'), question: "The infusion status will appear when pressing:", quiz: true, device: true, singleAnswerOne: true, answer: 1, correct: false, incorrect: false, id: 65, layout4: true, answers: [
      {text: "The info key three times during the infusion"},
      {text: "The info key once after stopping the infusion"},
   ],
   tooltips: [ { img: require('../assets/module2/M2-S-235-1.png') }, ]
  },
  {title: 'Question 2 of 2', question: "", img: require('../assets/device-front.png'), id: 65, tourquiz: true, device: true, quiz: true, layout4: true, answer: 'stop', correct: null, tooltips: [
      {question: "Click on the key you need to press and hold to start the taper down process immediately or earlier than planned", img: require('../assets/module2/M2-S-236-1.png'), 
      stopButton: true, primeButton: true, infoButton: true, current: true} 
    ]
  },


  // {title: 'TPN Mode Complete', img: require('../assets/device.png'),  id: 67 }
]

export default tpn
