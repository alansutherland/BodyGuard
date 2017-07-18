const Steps = [
  {title: 'How to operate an infusion in 25 Steps mode', fadeTitle: '', id: 1, layout3: true,isDark: true, modeStart: true, fadeImg: require("../assets/modes5.svg"), fadeButton: 'Start',
  	fadeLists: [
      {
        title: "Overview", items: [
          {text: "This protocol permits programming of up to twenty-five different steps. Each step has its own rate and volume. Step accumulation is limited to a Volume of ten (10) liters. Protocol steps are delivered sequentially until all steps are completed."},
          {text: "Please note, before operating the pump in 25 Steps Protocol, make sure that the IV bag contains an additional 5 ml of total volume to be infused. This ensures adequate volume for KVO during End Program. "},
          {text: "If Delay Before Start is set, you must include enough volume for the delay period, in addition to the 5 ml KVO volume."},
          {text: "Please refer to the DFU in case of any doubt"},
        ]
      } 
    ],
    lists: [
  		{
  			title: "In this section", items: [
  				{text: "How to start an infusion in 25 Steps mode"},
  				{text: "Advanced Features in 25 Steps mode:"},
  				{text: "Options during the infusion"},
  				{text: "Options when the infusion is stopped"},
  				{text: "How to stop the infusion"},
  				{text: "How to resume the infusion"},
  				{text: "How to change mode"},	 
  			]
  		}	
  	] 
  },
  {title: 'How to operate an infusion in 25 Steps mode', fadeTitle: '', id: 3, layout3: true, fadeImg: require("../assets/con1.png"),
  	fadeLists: [
  		{
  			title: "How to start an infusion in 25 Steps mode", items: [
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
  {title: 'How to operate an infusion in 25 Steps mode', fadeTitle: '', id: 4, layout3: true, fadeImg: require("../assets/con2.png"),
  	fadeLists: [
  		{
  			 items: [
  				{span: "Note:", o: true, text: "Follow the instructions supplied with the individual administration set. Warning: Use of any administration set, other than the MicroSet™, may impair the operation of the pump and the accuracy of the Infusion. Use aseptic technique. Patient infection may result from the use of non-sterile components. Maintain sterility of all disposable components and use only single use consumables."},
  				{text: "Lift the door latch on the right side of the pump to open the door."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in 25 Steps mode', fadeTitle: '', id: 5, layout3: true, fadeImg: require("../assets/con3.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Open the packaging and remove the administration set from the sterile packaging leaving the end caps on the line until the moment of connection."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in 25 Steps mode: loading of the set', fadeTitle: '', id: 6, layout3: true, fadeImg: require("../assets/con4.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Connect the administration set to the medication bag. In the example you see a soft bag but we have many different type of sets available for any of your needs."},
  				
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in 25 Steps mode', fadeTitle: '', id: 7, layout3: true, fadeImg: require("../assets/con5.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Hold the section of tubing with the key (small plastic block) and make sure the flow direction is in line with the flow direction arrows inside the pump door. Insert the IV tubing into the pump by placing the key into the keyway."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in 25 Steps mode', fadeTitle: '', id: 8, layout3: true, fadeImg: require("../assets/con6.png"),
  	fadeLists: [
  		{
  			items: [
  				{text: "Locate the Anti-Stretch locator in the round space on the left side (around the air sensor door) and verify that the BodyValve™ is on the right hand side of the pump."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in 25 Steps mode', fadeTitle: '', id: 9, layout3: true, fadeImg: require("../assets/con6.png"),
  	fadeLists: [
  		{
  			items: [
  				{text: "Close the pump door until the catch clicks."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in 25 Steps mode', fadeTitle: '', id: 10, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
  	tooltips: [
  	  {
  	    powerButton: true, current: true, items: [
  	      {text: "Turn on the pump by pressing and hold the top left on/off key."}
  	    ]
  	  },
      {
        img: require('../assets/module2/M2-S-291-1.png'), startButton: true, items: [
          {text: "The selected program will remain in the pump’s memory until changed by the operator. Therefore if the last program used was 25 Steps Program when you turn on the pump, 25 Steps Program will appear. If instead the last program used was a different one and you want to switch to 25 Steps, you need to go to the Menu and select “Change Set up”, than “More” and then “Select Program”, & scroll until the required program appears on the screen. If in doubt consult the Directions for Use."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-292-1.png'), primeButton: true, current: true, items: [
          {text: "The Rate Screen Step 1 will be displayed  - to start the priming procedure press the orange key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-293-1.png'), startButton: true, current: true, items: [
          {text: "The prime screen will be displayed. To confirm, press the green key. Make sure the set is not connected to the patient!"}
        ]
      },
      {
        img: require('../assets/module2/M2-S-294-1.png'), numbers: true, current: true, items: [
          {text: "Enter the desired priming volume by using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-295-1.png'), startButton: true, items: [
          {text: "Confirm by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-296-1.png'), bar: true, current: true, items: [
          {text: "The priming screen will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-297-1.png'), numbers: true, current: true, items: [
          {text: "The Rate Screen Step 1 will be displayed again. Enter the desired rate by using the numeric keypad. "}
        ]
      },
      {
        img: require('../assets/module2/M2-S-298-1.png'), startButton: true, current: true, items: [
          {text: "Confirm the desired bag volume by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-299-1.png'), numbers: true, current: true, items: [
          {text: "Enter the desired volume to be infused using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-300-1.png'), startButton: true, current: true, items: [
          {text: "Confirm the chosen dose volume by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-301-1.png'), numbers: true, current: true, items: [
          {text: "The Rate Screen – Step 2 will appear. The Pump displays the rate for step 2. Repeat directions as for step 1 and repeat until the required number of steps have been entered."}
		  
        ]
      },
      {
        img: require('../assets/module2/M2-S-302-1.png'), startButton: true, current: true, items: [
          {text: "After entering the last required step, press without entering a rate. "},
          {span: "Note:", o: true, text: "If pump is in Delay Mode, enter KVO rate. For further information regarding the Delay Option, refer to Delay Program section."},
        ]
      },
      {
        img: require('../assets/module2/M2-S-303-1.png'), startButton: true, current: true, items: [
          {text: "The Accumulation Screen will appear. To start the infusion press to confirm the existing parameters."},
          {text: "In case you wish to go back to rate screen setting, press the red key. NOTE: If pump is in Delay Mode, enter Start Time (24 Hour Clock) and Start Date. For further information regarding the Delay Option, refer to Delay Program section."},
        ]
      },
      {
        img: require('../assets/module2/M2-S-304-1.png'), startButton: true, current: true, items: [
          {text: "Press the green key to Start Infusion."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-305-1.png'), bar: true, current: true, items: [
          {text: "During program operation, the display identifies which step is currently running, and the rate."},
        ]
      },
      {
	      img: require('../assets/module2/M2-S-306-1.png'), stopButton: true, current: true, items: [
          {text: 'End of Infusion', b: true},
    			{text: "Once the infusion had reached an end (pre-set volume was infused), an alarm sounds and display will show the End of Infusion Screen."}
	      ]
      },
      {
        img: require('../assets/module2/M2-S-307-1.png'), stopButton: true, current: true, items: [
          {text: 'End of Infusion', b: true},
    		  {text: "The alarm will stop after 4 beeps. The pump will show the pre-set KVO rate. The alarm will sound again every 4 minutes until the user changes the bag or stops the pump."}
        ]
      },
      
  	]
  },
  {title: 'Advanced Features in 25 Steps mode', fadeTitle: '', id: 10, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
          {
        img: require('../assets/module2/M2-S-308-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the 25 steps infusion', b: true},
      {text: "By pressing the Options key, you can access information during a 25 step infusion. Please refer to Info Menu for more details."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-309-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the 25 steps infusion', b: true},
          {text: "By pressing once, the volume infused, the total volume to still be infused and the volume still to be infused of the current step will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-310-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the 25 steps infusion', b: true},
          {text: "By pressing twice, the battery level will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-311-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the 25 steps infusion', b: true},
          {text: "By pressing three times, the current time and date will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-312-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during the 25 steps infusion', b: true},
          {text: "By pressing four times, the actual pressure will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-313-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the 25 steps infusion is stopped', b: true},
          {text: "When the 25 steps infusion is stopped by pressing the Options key you have access to more information. Please refer to the info mode section for more details."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-314-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the 25 steps infusion is stopped', b: true},
          {text: "By pressing once, the volume infused, the total volume to still be infused and the volume still to be infused of the current step will be displayed."}
        ]
      },
      {
        img: require('../assets/module2/M2-S-315-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the 25 steps infusion is stopped', b: true},
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
  {title: 'Question 1 of 1', question: 'When programming a 25 steps infusion:', img: require('../assets/module2/M2-S-316-1.png'), quiz: true, device: true, singleAnswer: true, id: 65, layout5: true, fadeImg: require("../assets/device-front.png"),
  	answers: [
  	      {text: "The rate and the volume of each one of the desired steps need to be entered"},
  	      {text: "Only a total time and a number of steps need to be entered "},
  	   ]
  },


  // {title: '25 Steps Mode Complete', img: require('../assets/device.png'),  id: 67 }
]

export default Steps
