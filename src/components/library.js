const library = [
  {title: 'How to start an infusion in Drug Library mode', fadeTitle: '', id: 1, layout3: true, modeStart: true, fadeImg: require("../assets/modes6.svg"), fadeButton: 'Start',isDark: true,
  	fadeLists: [
      {
        title: "Overview", items: [
          {text: "The pump has 128 drugs referred to as protocols."}, 
          {text: "Each protocol represents a drug, including all of its infusion parameters. The different protocols are allocated to one department or more of the 24 available departments."},
          {text: "Each department will be able to view ONLY the protocols allocated to that department for ease of use. Protocols to be viewed on the pump should already be created and uploaded. "},
          {text: "Please refer to your local policy and contact your supervisor for more information."},
          {text: "In case of any doubt please consult the DFU."},
        ]
      } 
    ],
    lists: [
  		{
  			title: "In this section", items: [
  				{text: "How to start an infusion in Drug Library mode"},
  				{text: "Advanced Features in Drug Library mode:"},
  				{text: "Drug Library Bolus"},
  				{text: "Options during the infusion"},
  				{text: "Options when the infusion is stopped"},
  				{text: "How to stop the infusion"},
  				{text: "How to resume the infusion"},
  				{text: "How to change mode"},	 

  			]
  		}	
  	] 
  },
  {title: 'How to start an infusion in Drug Library mode', fadeTitle: '', id: 3, layout3: true, fadeImg: require("../assets/con1.png"),
  	fadeLists: [
  		{
  			title: "How to start an infusion in Drug Library mode", items: [
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
  {title: 'How to start an infusion in Drug Library mode', fadeTitle: '', id: 4, layout3: true, fadeImg: require("../assets/con2.png"),
  	fadeLists: [
  		{
  			 items: [
  				{span: "Note:", o: true, text: "Follow the instructions supplied with the individual administration set. Warning: Use of any administration set, other than the MicroSet™, may impair the operation of the pump and the accuracy of the Infusion. Use aseptic technique. Patient infection may result from the use of non-sterile components. Maintain sterility of all disposable components and use only single use consumables."},
  				{text: "Lift the door latch on the right side of the pump to open the door."}
  			]
  		}	
  	]
  },
  {title: 'How to start an infusion in Drug Library mode', fadeTitle: '', id: 5, layout3: true, fadeImg: require("../assets/con3.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Open the packaging and remove the administration set from the sterile packaging leaving the end caps on the line until the moment of connection."}
  			]
  		}	
  	]
  },
  {title: 'How to start an infusion in Drug Library mode: loading of the set', fadeTitle: '', id: 6, layout3: true, fadeImg: require("../assets/con4.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Connect the administration set to the medication bag. In the example you see a soft bag but we have many different type of sets available for any of your needs."},
  				
  			]
  		}	
  	]
  },
  {title: 'How to start an infusion in Drug Library mode', fadeTitle: '', id: 7, layout3: true, fadeImg: require("../assets/con5.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Hold the section of tubing with the key (small plastic block) and make sure the flow direction is in line with the flow direction arrows inside the pump door. Insert the IV tubing into the pump by placing the key into the keyway."}
  			]
  		}	
  	]
  },
  {title: 'How to start an infusion in Drug Library mode', fadeTitle: '', id: 8, layout3: true, fadeImg: require("../assets/con6.png"),
  	fadeLists: [
  		{
  			items: [
  				{text: "Locate the Anti-Stretch locator in the round space on the left side (around the air sensor door) and verify that the BodyValve™ is on the right hand side of the pump."}
  			]
  		}	
  	]
  },
  {title: 'How to start an infusion in Drug Library mode', fadeTitle: '', id: 9, layout3: true, fadeImg: require("../assets/con6.png"),
  	fadeLists: [
  		{
  			items: [
  				{text: "Close the pump door until the catch clicks."}
  			]
  		}	
  	]
  },
  {title: 'How to start an infusion in Drug Library mode', fadeTitle: '', id: 10, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
  	tooltips: [
  	  {
  	    powerButton: true, current: true, items: [
  	      {text: "Turn on the pump by pressing and hold the top left on/off key."}
  	    ]
  	  },
      {
        img: require('../assets/module2/M2-S-326-1.png'), startButton: true, items: [
          {text: "The selected program will remain in the pump’s memory until changed by the operator. Therefore if the last program used was Drug Library Program when you turn on the pump, Drug Library Program will appear. If instead the last program used was a different one and you want to switch to Drug Library, you need to go to the Menu and select “Change Set up”, than “More” and then “Select Program”, & scroll until the required program appears on the screen. If in doubt consult the Directions for Use."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-327-1.png'), arrows: true, current: true, items: [
          {text: "The list of all available departments will appear. Scroll down with the arrows keys till you reach the desired department.."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-328-1.png'), startButton: true, current: true, items: [
          {text: "Confirm your choice by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-329-1.png'), startButton: true, current: true, items: [
          {text: "The «restart the pump» selection will be highlighted. Confirm by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-330-1.png'), startButton: true, items: [
          {text: "The pump will display the program name and status, in either program or lock mode if it is locked. To unlock please refer to the Locking section. Confirm your choice by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-331-1.png'), arrows: true, current: true, items: [
          {text: "Scroll through the available drugs by using the arrow keys till you find the desired one."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-332-1.png'), startButton: true, current: true, items: [
          {text: "Confirm your choice by pressing the green key. "}
        ]
      },
      {
        img: require('../assets/module2/M2-S-333-1.png'), primeButton: true, current: true, items: [
          {text: "Before programming, remember to prime the line, by pressing the orange key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-334-1.png'), startButton: true, current: true, items: [
          {text: "The Prime screen will be displayed. Confirm by pressing the green key. Ensure the set is not connected to the patient!"}
        ]
      },
      {
        img: require('../assets/module2/M2-S-335-1.png'), numbers: true, current: true, items: [
          {text: "Enter the desired Priming volume by using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-336-1.png'), startButton: true, current: true, items: [
          {text: "Confirm the desired Priming volume by pressing the green key. "}
		  
        ]
      },
      {
        img: require('../assets/module2/M2-S-337-1.png'), startButton: true, current: true, items: [
          {text: "The Prime screen will be displayed. When the Priming is completed the programming screen will be displayed again."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-338-1.png'), numbers: true, current: true, items: [
          {text: "Enter the requested patient weight by using the numeric keyboard."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-339-1.png'), startButton: true, current: true, items: [
          {text: "Confirm your choice by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-340-1.png'), numbers: true, current: true, items: [
          {text: "Enter the desired dose by pressing the numeric keypad. NOTE: dose rate units can be change only during drug protocol creation."},
        ]
      },
      {
	      img: require('../assets/module2/M2-S-340-1.png'), startButton: true, current: true, items: [
			{text: "Confirm your choice by pressing the green key."}
	      ]
      },
      {
        img: require('../assets/module2/M2-S-342-1.png'), startButton: true, current: true, items: [
		  {text: "In case you enter a value outside of the predefined limits."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-343-1.png'), stopButton: true, current: true, items: [
		  {text: "An exceed hard/soft limits will be displayed. When exceeding the lower or upper hard limit, the program can not proceed. Press the red key to adjust the data. When exceeding the soft limits, the operator can choose to press the red key and adjust the data or press the green key to override and proceed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-345-1.png'), numbers: true, current: true, items: [
          {text: "Enter the desired volume to be infused by using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-345-1.png'), startButton: true, current: true, items: [
          {text: "Confirm your choice by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-346-1.png'), startButton: true, current: true, items: [
          {text: "The accumulation screen will be displayed. To confirm all the parameters, press the green key. To go back press the red key. "}
        ]
      },
      {
        img: require('../assets/module2/M2-S-347-1.png'), startButton: true, current: true, items: [
          {text: "Press the green key to start the infusion."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-347-2.png'), infoButton: true, current: true, items: [
          {text: "During program operation, the pump displays the rate in which the program is operating. "}
        ]
      },
      {
        img: require('../assets/module2/M2-S-349-1.png'), stopButton: true, current: true, items: [
          {text: 'End of Infusion', b: true},
          {text: "Once the infusion has reached an end (pre-set volume was infused), an alarm sounds and display will show the End of Infusion Screen."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-350-1.png'), stopButton: true, current: true, items: [
          {text: 'End of Infusion', b: true},
          {text: "The alarm will stop after 4 beeps. The pump will show the pre-set KVO rate. The alarm will sound again every 4 minutes until the user changes the bag or stops the pump."}
        ]
      },
  	]
  },
  {title: 'Advanced Features in Drug Library mode', fadeTitle: '', id: 10, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
          {
        img: require('../assets/module2/M2-S-351-1.png'), primeButton: true, current: true, items: [
          {text: 'Drug Library Bolus', b: true},
          {text: "Bolus operation can be in two modes: weight or volume. The drug bolus mode is configured during drug protocol creation. During operation, press the orange key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-352-1.png'), numbers: true, current: true, items: [
          {text: 'Drug Library Bolus', b: true},
          {text: "In bolus volume, enter the desired bolus volume using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-352-1.png'), startButton: true, current: true, items: [
          {text: 'Drug Library Bolus', b: true},
          {text: "Confirm your choice by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-354-1.png'), startButton: true, current: true, items: [
          {text: 'Drug Library Bolus', b: true},
          {text: "The accumulation screen will be displayed. Press the red key to go back or the green key to confirm the chosen parameters."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-355-1.png'), startButton: true, current: true, items: [
          {text: 'Drug Library Bolus', b: true},
          {text: "The Bolusing Screen will be displayed. The display screen will show a graph indicating the bolus is being infused. The graphical bar displays the amount of the bolus to be infused (clear) and the amount infused (blue)."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-356-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the infusion', b: true},
          {text: "When operating a Drug Library Infusion, by pressing the options key repeatedly you can access more information. Please refer to the Info Mode section for more details."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-357-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the infusion', b: true},
          {text: "By pressing once, you can access to the Volume Infused and the Volume still to be infused information."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-358-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the infusion', b: true},
          {text: "By pressing two times, you have access to the following options:"},
          {text: "Volume infused gives you an overview of the volume infused and volume to be infused."},
          {text: "Program lock – gives you the option to lock the current program."},
          {text: "Review Set up – gives you the option to scroll down and review the different settings. Nothing can be changed, only reviewed."},
          {text: "Change set up – gives you the possibility to change the setting of the pump."},
          {text: "History – gives you the possibility to review the past events. The events history carries the last 2000 user events (i.e. changes to programs, pump started/stopped, etc) and the status of the pump (i.e. battery charge, pressure levels, etc). It is not patient specific."},
        ]
      },
      {
        img: require('../assets/module2/M2-S-359-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the infusion', b: true},
          {text: "By pressing three times you will access battery status information."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-360-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the infusion', b: true},
          {text: "By pressing four times, you will access Time left information."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-361-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the infusion', b: true},
          {text: "By pressing five times, you will access the actual time and date information."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-362-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the infusion', b: true},
          {text: "By pressing six times you can access actual pressure information."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-363-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the infusion', b: true},
          {text: "By pressing seven times, you will access the current program summary."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-364-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the infusion is stopped', b: true},
        ]
      },
      {
        img: require('../assets/module2/M2-S-365-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the infusion is stopped', b: true},
          {text: "By pressing once, the volume infused and the volume left to infused will be displayed"}
        ]
      },
      {
        img: require('../assets/module2/M2-S-366-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the infusion is stopped', b: true},
          {text: "By pressing two times, you have access to the following options:"},
          {text: "Volume infused gives you an overview of the volume infused and volume to be infused."},
          {text: "Program lock – gives you the option to lock the current program."},
          {text: "Review Set up – gives you the option to scroll down and review the different settings. Nothing can be changed, only reviewed."},
          {text: "Change set up – gives you the possibility to change the setting of the pump."},
          {text: "History – gives you the possibility to review the past events. The events history carries the last 2000 user events (i.e. changes to programs, pump started/stopped, etc) and the status of the pump (i.e. battery charge, pressure levels, etc). It is not patient specific."},
        ]
      },
    ]
  },

  // {title: 'Drug Library Mode Complete', img: require('../assets/device.png'),  id: 67 }
]

export default library
