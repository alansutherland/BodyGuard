const moduleThree = [
  {title: '', id: 1, layout3: true, fadeImg: require("../assets/mod3.png"), fadeButton: 'Start', isDark: true,
  	fadeLists: [
  		{
  			title: " ", items: [
  				{b: true, text: "Alarms conditions"}, 
          {b: true, text: "Air/Up occlusions"},
          {b: true, text: "Down occlusion"},
          {b: true, text: "Pump unattended"},
          {b: true, text: "Door open"},
          {b: true, text: "Low battery"},
           {b: true, text: "End battery"},
           {b: true, text: "Restart pump"},
          {b: true, text: "End program"},
          {b: true, text: "Missing key"},
          {b: true, text: "Program lockout"},
          {b: true, text: "Key pad lock mode"},
          {b: true, text: "Wrong TPN data"},
  			]
  		}	
  	] 
  },
  
  {title: 'Alarms conditions', id: 2, layout4: true, device: true, fadeImg: require("../assets/device-front.png"),
  	tooltips: [
  	  {
  	    title: "Alarms conditions", img: require('../assets/module3/M3-S-368-1.png'), current: true, items: [
  	      {text: "When the infusion pump detects a problem, four things occur:"},
  	    ],
        lists: [
          {text: "The infusion stops."},
          {text: "An audible alarm is activated."},
          {text: "A message appears on the display screen indicating the cause of the alarm, and"},
          {text: "The LED indicator will change from green to red."},
          {text: "NOTE: Pressing the red key during an alarm mutes the alarm for two minutes."},
        ]
  	  }
  	]
  },
  {title: 'Air/Up occlusions', id: 2, layout4: true, device: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        title: "Air/Up occlusions", img: require('../assets/module3/M3-S-369-1.png'), current: true, items: [
          {text: "Result", b: true},
          {text: "Infusion stops and an alarm is activated"},
          {text: "Possible Cause", b: true},
          {text: "Air is present in the administration Set."},
          {text: "The line was not loaded correctly."},
          {text: "The roller or clip on the administration set is closed upstream of the pump."},
          {text: "Required Action", b: true},
          {text: "Disconnect line from patient, press  the red key. Remove the air, as described on priming section."},
          {text: "Open clamp/clip."},
          {text: "Re-load the IV line."}
        ]
      },
    ]
  },
  {title: 'Down occlusion', id: 2, layout4: true, device: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        title: "Down occlusion", img: require('../assets/module3/M3-S-370-1.png'), current: true, items: [
          {text: "Result", b: true},
          {text: "Infusion stops and an alarm is activated"},
          {text: "Possible Cause", b: true},
          {text: "The roller or clip on the administration set is closed upstream of the pump."},
          {text: "Administration set is kinked."},
          {text: "Cannula is blocked"},
          {text: "Administration set  was not loaded correctly."},
          {text: "Required Action", b: true},
          {text: "Open clamp/clip."},
          {text: "Straighten the set"},
          {text: "Change the Cannula"},
          {text: "Re-load the IV line."}
        ]
      },
    ]
  },
  {title: 'Pump unattended', id: 2, layout4: true, device: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        title: "Pump unattended", img: require('../assets/module3/M3-S-371-1.png'), current: true, items: [
          {text: "Result", b: true},
          {text: "Infusion stops and an alarm is activated"},
          {text: "Possible Cause", b: true},
          {text: "Two minutes has elapsed without a button press during programming."},
          {text: "Required Action", b: true},
          {text: "Press to green key to resume."},
        ]
      },
    ]
  },
  {title: 'Door open', id: 2, layout4: true, device: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        title: "Door open", img: require('../assets/module3/M3-S-372-1.png'), current: true, items: [
          {text: "Result", b: true},
          {text: "Infusion stops and an alarm is activated"},
          {text: "Possible Cause", b: true},
          {text: "The door of the pump was not closed prior to operation."},
          {text: "The door has accidentally opened during operation"},
          {text: "Required Action", b: true},
          {text: "Close the door of the pump"},
          {text: "Send the pump for service."},
        ]
      },
    ]
  },
  {title: 'Low battery', id: 2, layout4: true, device: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        title: "Low battery", img: require('../assets/module3/M3-S-373-1.png'), current: true, items: [
          {text: "Result", b: true},
          {text: "Pump will only run for another 30 minutes if it is not connected to mains"},
          {text: "Possible Cause", b: true},
          {text: "30 Minutes of battery life are remaining."},
          {text: "Required Action", b: true},
          {text: "Place the pump in charger and connect to mains"},
        ]
      },
    ]
  },
  {title: 'End battery', id: 2, layout4: true, device: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        title: "End battery", img: require('../assets/module3/M3-S-374-1.png'), current: true, items: [
          {text: "Result", b: true},
          {text: "Pump operation stops. The pump cannot be used before being connected to mains."},
          {text: "Possible Cause", b: true},
          {text: "Battery is depleted"},
          {text: "Required Action", b: true},
          {text: "Place the pump in charger and connect to mains. Wait 2 minutes before operating"},
        ]
      },
    ]
  },
  {title: 'Restart pump', id: 2, layout4: true, device: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        title: "Restart pump", img: require('../assets/module3/M3-S-375-1.png'), current: true, items: [
          {text: "Result", b: true},
          {text: "Infusion stops"},
          {text: "Possible Cause", b: true},
          {text: "Fatal internal error has occurred"},
          {text: "Required Action", b: true},
          {text: "Restart the pump. If the alarm does not stop pack the pump properly, in its original packaging, and send it for service."},
        ]
      },
    ]
  },
  {title: 'End program', id: 2, layout4: true, device: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        title: "End program", img: require('../assets/module3/M3-S-376-1.png'), current: true, items: [
          {text: "Result", b: true},
          {text: "Program ends, pump will turn to KVO mode"},
          {text: "Possible Cause", b: true},
          {text: "Current infusion program has been completed"},
          {text: "Required Action", b: true},
          {text: "Press the red key to restart a new program or turn the pump OFF."},
        ]
      },
    ]
  },
  {title: 'Missing key', id: 2, layout4: true, device: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        title: "Missing key", img: require('../assets/module3/M3-S-377-1.png'), current: true, items: [
          {text: "Result", b: true},
          {text: "Pump will not start"},
          {text: "Possible Cause", b: true},
          {text: "Administration set loaded incorrectly (the key was not located in its place correctly)."},
          {text: "A set different than the MicroSet™ was loaded in the pump."},

          {text: "Required Action", b: true},
          {text: "Reload the set into the pump as per the instructions."},
          {text: "Change the set to a MicroSet™ and load it according to instructions."}
        ]
      },
    ]
  },
  {title: 'Program lockout', id: 2, layout4: true, device: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        title: "Program lockout", img: require('../assets/module3/M3-S-378-1.png'), current: true, items: [
          {text: "Result", b: true},
          {text: "Setting cannot be changed"},
          {text: "Possible Cause", b: true},
          {text: "Lock Out mode is turned on."},
          {text: "Required Action", b: true},
          {text: "No action required. If changing program is required, unlock the pump and refer to lock section for further instructions."},
        ]
      },
    ]
  },
  {title: 'Key pad lock mode', id: 2, layout4: true, device: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        title: "Key pad lock mode", img: require('../assets/module3/M3-S-379-1.png'), current: true, items: [
          {text: "Result", b: true},
          {text: "Setting keys do not function"},
          {text: "Possible Cause", b: true},
          {text: "Lock Out mode is turned on."},
          {text: "Required Action", b: true},
          {text: "No action required. If changing program is required, unlock the pump and refer to lock section for further instructions."}
        ]
      },
    ]
  },
  {title: 'Wrong TPN data', id: 2, layout4: true, device: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
      {
        title: "Wrong TPN data", img: require('../assets/module3/M3-S-380-1.png'), current: true, items: [
          {text: "Result", b: true},
          {text: "Program will not start operating"},
          {text: "Possible Cause", b: true},
          {text: "The set parameters are impossible to perform. Volume or time parameters are incorrect."},
          {text: "Required Action", b: true},
          {text: "Check data and change accordingly"},
        ]
      },
    ]
  },

  {title: 'Question 1 of 8', correct: false, answer: 1, incorrect: false, question: 'Now its your turn! You are required to identify the possible cause and required actions for some alarms/alerts. You need to select the correct cause and action required from the list for each alarm shown on the screen.', quiz: true, device: true, singleAnswerOne: true, id: 65, layout4: true, fadeImg: require("../assets/device-front.png"),
    answers: [
          {text: "Administration sets loaded incorrectly "},
          {text: "30 Minutes of battery life are remaining."},
          {text: "Two minutes has elapsed without a button press during programming"},
          {text: "Air is present in the administration Set."},
  	   ],
       tooltips:[{img: require('../assets/module3/M3-S-377-1.png')}]
  },
  {title: 'Question 2 of 8', correct: false, answer: 1, incorrect: false, question: 'Now its your turn! You are required to identify the possible cause and required actions for some alarms/alerts. You need to select the correct cause and action required from the list for each alarm shown on the screen.', quiz: true, device: true, singleAnswerTwo: true, id: 65, layout4: true, fadeImg: require("../assets/device-front.png"),
    answers: [
          {text: "Reload the set into the pump as per the instructions."},
          {text: "Place the pump in charger and connect to mains"},
          {text: "Press to green key to resume."},
          {text: "Disconnect line from patient, press the red key. Remove the air, as described on priming section."},
       ],
       tooltips:[{img: require('../assets/module3/M3-S-377-1.png')}]
  },

  {title: 'Question 3 of 8', correct: false, answer: 2, incorrect: false, question: 'Now its your turn! You are required to identify the possible cause and required actions for some alarms/alerts. You need to select the correct cause and action required from the list for each alarm shown on the screen.', quiz: true, device: true, singleAnswerThree: true, id: 65, layout4: true, fadeImg: require("../assets/device-front.png"),
    answers: [
          {text: "Administration sets loaded incorrectly "},
          {text: "30 Minutes of battery life are remaining."},
          {text: "Two minutes has elapsed without a button press during programming"},
          {text: "Air is present in the administration Set."},
       ],
       tooltips:[{img: require('../assets/module3/M3-S-373-1.png')}]
  },
  {title: 'Question 4 of 8', correct: false, answer: 2, incorrect: false, question: 'Now its your turn! You are required to identify the possible cause and required actions for some alarms/alerts. You need to select the correct cause and action required from the list for each alarm shown on the screen.', quiz: true, device: true, singleAnswerFour: true, id: 65, layout4: true, fadeImg: require("../assets/device-front.png"),
    answers: [
          {text: "Reload the set into the pump as per the instructions."},
          {text: "Place the pump in charger and connect to mains"},
          {text: "Press to green key to resume."},
          {text: "Disconnect line from patient, press the red key. Remove the air, as described on priming section."},
       ],
       tooltips:[{img: require('../assets/module3/M3-S-373-1.png')}]
  },

  {title: 'Question 5 of 8', correct: false, answer: 3, incorrect: false, question: 'Now its your turn! You are required to identify the possible cause and required actions for some alarms/alerts. You need to select the correct cause and action required from the list for each alarm shown on the screen.', quiz: true, device: true, singleAnswerFive: true, id: 65, layout4: true, fadeImg: require("../assets/device-front.png"),
    answers: [
          {text: "Administration sets loaded incorrectly "},
          {text: "30 Minutes of battery life are remaining."},
          {text: "Two minutes has elapsed without a button press during programming"},
          {text: "Air is present in the administration Set."},
       ],
       tooltips:[{img: require('../assets/module3/M3-S-371-1.png')}]
  },
  {title: 'Question 6 of 8', correct: false, answer: 3, incorrect: false, question: 'Now its your turn! You are required to identify the possible cause and required actions for some alarms/alerts. You need to select the correct cause and action required from the list for each alarm shown on the screen.', quiz: true, device: true, singleAnswerSix: true, id: 65, layout4: true, fadeImg: require("../assets/device-front.png"),
    answers: [
          {text: "Reload the set into the pump as per the instructions."},
          {text: "Place the pump in charger and connect to mains"},
          {text: "Press to green key to resume."},
          {text: "Disconnect line from patient, press the red key. Remove the air, as described on priming section."},
       ],
       tooltips:[{img: require('../assets/module3/M3-S-371-1.png')}]
  },

  {title: 'Question 7 of 8', correct: false, answer: 4, incorrect: false, question: 'Now its your turn! You are required to identify the possible cause and required actions for some alarms/alerts. You need to select the correct cause and action required from the list for each alarm shown on the screen.', quiz: true, device: true, singleAnswerSeven: true, id: 65, layout4: true, fadeImg: require("../assets/device-front.png"),
    answers: [
          {text: "Administration sets loaded incorrectly "},
          {text: "30 Minutes of battery life are remaining."},
          {text: "Two minutes has elapsed without a button press during programming"},
          {text: "Air is present in the administration Set."},
       ],
       tooltips:[{img: require('../assets/module3/M3-S-369-1.png')}]
  },
  {title: 'Question 8 of 8', correct: false, answer: 4, incorrect: false, question: 'Now its your turn! You are required to identify the possible cause and required actions for some alarms/alerts. You need to select the correct cause and action required from the list for each alarm shown on the screen.', quiz: true, device: true, singleAnswerEight: true, id: 65, layout4: true, fadeImg: require("../assets/device-front.png"),
    answers: [
          {text: "Reload the set into the pump as per the instructions."},
          {text: "Place the pump in charger and connect to mains"},
          {text: "Press to green key to resume."},
          {text: "Disconnect line from patient, press the red key. Remove the air, as described on priming section."},
       ],
       tooltips:[{img: require('../assets/module3/M3-S-369-1.png')}]
  },

  // {title: 'Module 3 Complete', img: require('../assets/device.png'),  id: 67 }
]

export default moduleThree
