const intermittent = [
  {title: 'How to operate an intermittent infusion', fadeTitle: '', id: 1, layout3: true, modeStart: true, fadeImg: require("../assets/modes4.svg"), fadeButton: 'Start',isDark: true,
  	fadeLists: [
      {
        title: "Overview", items: [
          {b: true, text: "The Intermittent Infusion program is a special program which enables the design of a dose delivery protocol at set intervals."}, 
          {b: true, text: "Each dose is given at a set time. "},
          {b: true, text: "The pump will Keep Vein Open between the doses. The infusion program continues until the total volume to be infused is delivered. "},
        ]
      } 
    ],
    lists: [
  		{
  			title: "In this section", items: [
  				{text: "How to start an infusion in Intermittent mode"},
  				{text: "Advanced Features in Intermittent mode:"},
  				{text: "Rate titration during an infusion"},
  				{text: "Options during the infusion"},
  				{text: "Options when the infusion is stopped"},	 
  			]
  		}	
  	] 
  },
  {title: 'How to operate an intermittent infusion', fadeTitle: '', id: 3, layout3: true, fadeImg: require("../assets/con1.png"),
  	fadeLists: [
  		{
  			title: "How to start an infusion in Intermittent mode", items: [
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
  {title: 'How to operate an intermittent infusion', fadeTitle: '', id: 4, layout3: true, fadeImg: require("../assets/con2.png"),
  	fadeLists: [
  		{
  			 items: [
  				{span: "Note:", o: true, text: "Follow the instructions supplied with the individual administration set. Warning: Use of any administration set, other than the MicroSet™, may impair the operation of the pump and the accuracy of the Infusion. Use aseptic technique. Patient infection may result from the use of non-sterile components. Maintain sterility of all disposable components and use only single use consumables."},
  				{text: "Lift the door latch on the right side of the pump to open the door."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an intermittent infusion', fadeTitle: '', id: 5, layout3: true, fadeImg: require("../assets/con3.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Open the packaging and remove the administration set from the sterile packaging leaving the end caps on the line until the moment of connection."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an intermittent infusion: loading of the set', fadeTitle: '', id: 6, layout3: true, fadeImg: require("../assets/con4.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Connect the administration set to the medication bag. In the example you see a soft bag but we have many different type of sets available for any of your needs."},
  				
  			]
  		}	
  	]
  },
  {title: 'How to operate an intermittent infusion', fadeTitle: '', id: 7, layout3: true, fadeImg: require("../assets/con5.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Hold the section of tubing with the key (small plastic block) and make sure the flow direction is in line with the flow direction arrows inside the pump door. Insert the IV tubing into the pump by placing the key into the keyway."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an intermittent infusion', fadeTitle: '', id: 8, layout3: true, fadeImg: require("../assets/con6.png"),
  	fadeLists: [
  		{
  			items: [
  				{text: "Locate the Anti-Stretch locator in the round space on the left side (around the air sensor door) and verify that the BodyValve™ is on the right hand side of the pump."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an intermittent infusion', fadeTitle: '', id: 9, layout3: true, fadeImg: require("../assets/con6.png"),
  	fadeLists: [
  		{
  			items: [
  				{text: "Close the pump door until the catch clicks."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an intermittent infusion', fadeTitle: '', id: 10, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
  	tooltips: [
  	  {
  	    powerButton: true, current: true, items: [
  	      {text: "Turn on the pump by pressing and hold the top left on/off key."}
  	    ]
  	  },
      {
        img: require('../assets/module2/M2-S-246-1.png'), startButton: true, items: [
          {text: "The selected program will remain in the pump’s memory until changed by the operator. Therefore if the last program used was Intermittent Program when you turn on the pump, Intermittent Program will appear. If instead the last program used was a different one and you want to switch to Intermittent, you need to go to the Menu and select “Change Set up”, than “More” and then “Select Program”, & scroll until the required program appears on the screen. If in doubt consult the Directions for Use."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-247-1.png'), primeButton: true, current: true, items: [
          {text: "The bag volume screen will be displayed. Press the orange key to start the priming procedure."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-248-1.png'), startButton: true, current: true, items: [
          {text: "The Prime screen will be displayed. Press the green key to start priming. Ensure the set is not connected to the patient!"}
        ]
      },
      {
        img: require('../assets/module2/M2-S-249-1.png'), numbers: true, current: true, items: [
          {text: "Enter the desired priming volume by using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-250-1.png'), startButton: true, items: [
          {text: "Confirm by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-251-1.png'), bar: true, current: true, items: [
          {text: "The priming screen will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-252-1.png'), numbers: true, current: true, items: [
          {text: "Once the priming procedure is completed you will go back to the programming screen. The bag volume screen will be displayed again."},
          {text: "Enter the desired bag volume using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-253-1.png'), startButton: true, current: true, items: [
          {text: "Confirm the desired bag volume by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-254-1.png'), numbers: true, current: true, items: [
          {text: "Enter the desired volume to be infused using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-254-1.png'), startButton: true, current: true, items: [
          {text: "Confirm the chosen dose volume by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-256-1.png'), numbers: true, current: true, items: [
          {text: "Dose rate screen."},
		  {text: "Select the desired dose rate by using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-257-1.png'), startButton: true, current: true, items: [
          {text: "Confirm your choice with the green key. "}
        ]
      },
      {
        img: require('../assets/module2/M2-S-258-1.png'), numbers: true, current: true, items: [
          {text: "Select the minimum number of doses by using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-259-1.png'), startButton: true, current: true, items: [
          {text: "Confirm the minimum number of doses by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-260-1.png'), numbers: true, current: true, items: [
          {text: "Select the desired interval time by using the numeric keypad . NOTE: Interval time is counted from starting time of one dose until starting time of the following dose"},
        ]
      },
      {
	      img: require('../assets/module2/M2-S-261-1.png'), startButton: true, current: true, items: [
			{text: "Confirm your choice with the green key."}
	      ]
      },
      {
        img: require('../assets/module2/M2-S-262-1.png'), numbers: true, current: true, items: [
          {text: "KVO Rate screen."},
		  {text: "Enter the desired value using the numeric keypad - you can enter a value from 0.1 to 5 ml/h."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-263-1.png'), startButton: true, current: true, items: [
          {text: "KVO Rate screen."},
		  {text: "Confirm your choice with the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-264-1.png'), startButton: true, current: true, items: [
          {text: "The Accumulation screen will appear. Press the green key to confirm the existing parameters and start infusion. Press the red key if you wish to go back and adjust the program."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-265-1.png'), startButton: true, current: true, items: [
          {text: "Press the green key to start the infusion."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-266-1.png'), bar: true, current: true, items: [
          {text: "During program operation, the pump displays the rate in which the program is operating."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-267-1.png'), stopButton: true, current: true, items: [
          {text: 'End of Infusion', b: true},
          {text: "Once the infusion had reached an end (pre-set volume was infused), an alarm sounds and display will show the End of Infusion Screen."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-268-1.png'), stopButton: true, current: true, items: [
          {text: 'End of Infusion', b: true},
          {text: "The alarm will stop after 4 beeps. The pump will show the pre-set KVO rate. The alarm will sound again every 4 minutes until the user changes the bag or stops the pum"}
        ]
      },
  	]
  },
  {title: 'Advanced Features in Intermittent mode', fadeTitle: '', id: 10, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
          {
        img: require('../assets/module2/M2-S-269-1.png'), numbers: true, current: true, items: [
          {text: 'Rate titration', b: true},
          {text: "The pump allows rate titration during the Intermittent Program. To change the rate during the infusion, use numeric keypad to enter the new desired rate during operation. "}
        ]
      },
      {
        img: require('../assets/module2/M2-S-270-1.png'), numbers: true, current: true, items: [
          {text: 'Rate titration', b: true},
          {text: "The pump allows rate titration during the Intermittent Program. To change the rate during the infusion, use numeric keypad to enter the new desired rate during operation. "}
        ]
      },
      {
        img: require('../assets/module2/M2-S-271-1.png'), startButton: true, current: true, items: [
          {text: 'Rate titration', b: true},
          {text: "Confirm your choice during the infusion. A security code may be requested. Please refer to your supervisor if needed. "}
        ]
      },
      {
        img: require('../assets/module2/M2-S-272-1.png'), bar: true, current: true, items: [
          {text: 'Rate titration', b: true},
          {text: "The pump will briefly alarm and the infusion will resume at the adjusted rate."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-272-1.png'), current: true, items: [
          {text: 'Options during the intermittent infusion', b: true},
          {text: "By pressing once, the volume infused and the volume still to be infused will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-274-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the intermittent infusion', b: true},
          {text: "By pressing two times, the battery level will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-275-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the intermittent infusion', b: true},
          {text: "By pressing three times, the time left will be displayed."},
        ]
      },
      {
        img: require('../assets/module2/M2-S-276-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the intermittent infusion', b: true},
          {text: "By pressing four times, the current time and date will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-277-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the intermittent infusion', b: true},
          {text: "By pressing five times the actual pressure will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-278-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the intermittent infusion is stopped', b: true},
          {text: "When the intermittent infusion is stopped, by pressing on the Options key, more informationcan be accessed. Please refer to the info menu and the History sections for more information."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-279-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the intermittent infusion is stopped', b: true},
          {text: "By pressing once, the volume Infused and the volume still to be infused will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-280-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the intermittent infusion is stopped', b: true},
      {text: "By pressing two times, Volume infused gives you an overview of the volume infused and volume to be infused."},
      {text: "Program lock – gives you the option to lock the current program."},
      {text: "Review Set up – gives you the option to scroll down and review the different settings. Nothing can be changed, only reviewed."},
      {text: "Change set up – gives you the possibility to change the setting of the pump."},
      {text: "History – gives you the possibility to review the past events. The events history carries the last 2000 user events (i.e. changes to programs, pump started/stopped, etc) and the status of the pump (i.e. battery charge, pressure levels, etc). It is not patient specific."},
        ]
      },
    ]
  },
  {title: 'Question 1 of 1', fadeImg: require('../assets/device-front.png'), question: "The intermittent program:", quiz: true, device: true, singleAnswerOne: true, answer: 2, correct: false, incorrect: false, id: 65, layout4: true, answers: [
      {text: "Is design is a dose delivery protocol where each dose is given at a set time. The pump will Keep Vein Open between the doses"},
          {text: "Is designed to deliver different doses at different intervals"},
   ]
  },


  // {title: 'Intermittent Mode Complete', img: require('../assets/device.png'),  id: 67 }
]

export default intermittent
