const moduleOne = [
  {title: '', img: require('../assets/device.png'), id: 1, button: 'Start', isDark: true,
    lines: [
      { text: "The course has a number of chapters. If it’s the first time you go through the course it may be advisable for you to follow the schedule proposed here."},
      { text: "If you have already completed the course please select any chapter required by clicking on it. You can return to it any time."},
      { text: "The pump can be set up in many ways but you will always follow your local policy and procedures first. Make sure you are well informed about your local policy and procedure before operating the pump."}
    ]
  },

  {title: 'Pump main features & uses', img: require('../assets/device.png'), img2: require('../assets/patient.jpg'),  id: 3, button: '', layout2: true,
    links: [
      { a: "Overview", jump: 2},
      { a: "Main elements", jump: 3},
      { a: "Access codes", jump: 4},
      { a: "Keypad description & function", jump: 5},
      { a: "MicroSet™ dedicated administration sets"}
    ]
  },

  {title: 'Pump main features & uses - Overview', modalImg: require('../assets/device-orb.png'), modalIcon: require('../assets/info.png'), modal: true,  id: 2, button: '', layout3: true,
    lists: [
      {
        title: "Uses", items: [
          { text: "Maintenance medication"},
          { text: "Analgesics"},
          { text: "PCA"},
          { text: "Parenteral"},
          { text: "Chemotherapeutic"},
          { text: "General fluids therapy"}
        ]
      },
      {
        title: "Features", items: [
          { text: "Small, light and compact"},
          { text: "Highly accurate"},
          { text: "Safe administration set"},
          { text: "Rechargeable lithium-polymer"},
          { text: "battery or alkaline"},
          { text: "Battery charged or with"},
          { text: "A/C adaptor"},
          { text: "Quiet operation"},
          { text: "For both ambulatory or"},
          { text: "bedside usage"},
          { text: "Suitable for use in ambulances"}
        ]
      },
      {
        title: "Many safety features such as", items: [
          { text: "Air in line accumulation system"},
          { text: "Anti-bolus function"},
          { text: "Free flow protection valve in the sets"},
          { text: "Multiple programs"}
        ]
      },
    ]
  },

  {title: 'Pump main features & uses - Main Elements', img: require('../assets/device.png'),  id: 3, listLeft: true, layout3: true, elements: true,
    lists: [
      {
        title: "The BodyGuard 323 Color Vision infusion system comes with:", items: [
          { text: "1. BodyGuard 323 Color Vision™ infusion pump"},
          { text: "2. Charging Cradle"},
          { text: "3. Power Cord or Battery Charging Cable"},
          { text: "4. Rechargeable Battery Pack 1800mAh (inside the pump)"},
          { text: "5. Operation Manual  (in digital or print-out format)"},
          { text: "6. PCA bolus cable (optional)"},
          { text: "7. Please make sure you also have access to, and use the dedicated MicroSet™ in line with intended use and your local policy and guidlines."}
        ]
      },
    ],
    els: [
      {img: require('../assets/cradle.png'), t: "Charging Cradle"},
      {img: require('../assets/cable.jpg'), t: "Power Cord or Battery Charging Cable"},
      {img: require('../assets/battery.png'), t: "Rechargeable Battery Pack"},
      {img: require('../assets/manual.png'), t: "Operation Manual"},
      {img: require('../assets/bolus.png'), t: "PCA Bolus Pack"},
    ]  
    
  },

  {title: 'Pump main features & uses - Access Codes', img: require('../assets/device-front.png'), device: true, id: 4, layout4: true, 
    tooltips: [
      {
        title: "Access Codes", img: require('../assets/module1-2/M1-S-8-1.png'), current: true, items: [
          { text: "To operate and program the pump, Access Codes are required."},
          { text: "The Level One or Technician Code*** allows you to change the set up of the pump, titrate Rate during the infusion, titrate the Bolus Dose and access the Events History."},
          { text: "The Level Two Code*** allows authorized users to lock and unlock the pump, deliver a Clinician Bolus and access the PCA menu."},
          { text: "Please refer your request to senior clinical or lead service personnel, in the event that you need access to these codes. "}
        ]
      },
    ]
  },

  {title: 'Locking', img: require('../assets/device-front.png'), device: true, id: 5, layout4: true, 
    tooltips: [
      {
        title: "Locking", img: require('../assets/module1-2/M1-S-8-1.png'), current: true, items: [
          {b: true, text: "The BodyGuard 323 Color Vision™ provides three different levels of locking:"},
          {o: true, text: "Level A Keypad Locking"},
          { text: "During operation, all keys are disabled excluding the red key and the options key. This option is required to prevent any unintended changes in settings, for example in a homecare environment."},
          {o: true, text: "Level B: Program Locking"},
          { text: "This feature enables the operator to lock out the setting keys, so parameters and programs cannot be changed once they are set. This option is important with children as users, when there is a danger that the child may play with the pump and unknowingly change the program, or for home-care patients who repeat the same program every day. Locking the program prevents mistakes in setting."},
          {o: true, text: "Level C: Maximal Rate Locking"},
          { text: "This feature enables the operator to set a maximal acceptable pump rate. The program rate then can be adjusted up to a preset limit  only."},
          { text: "Some of these locking features may require an access code. Please refer to senior clinical or biomedical personnel if needed."},
          { text: "Level B: Program Locking and level C: Maximal Rate Locking will be discussed later in this course, in the Additional Features section. Please refer to that section for more information."}
          
        ]
      }
    ]
  },

  {title: 'Locking', img: require('../assets/device-front.png'), tour: true,  id: 6, layout4: true,
    tooltips: [
      {
        title: "Locking", img: require('../assets/module1-2/M1-S-10-1.png'), lockButton: true, current: true, items: [
          { text: "To lock the keypad, press and hold the lock button until the entire graph becomes yellow, and a beep is heard."}
        ]
      },
      {
        title: "Locking", img: require('../assets/module1-2/M1-S-10-2.png'), current: false, items: [
         {text: "The beep indicates that the locking program is turned ON."}
       ]
      }
    ]
  },
  {title: 'Unlocking', img: require('../assets/device-front.png'), tour: true, id: 7, layout4: true,
    tooltips: [
      {
        title: "Unlocking", img: require('../assets/module1-2/M1-S-11-1.png'), lockButton: true, current: true, items: [
          { text: "To unlock the keypad, press and hold the lock button until the entire graph is clear and a beep is heard. "}
        ]
      },
      {
        title: "Unlocking", img: require('../assets/module1-2/M1-S-11-2.png'), current: false, items: [
         {text: "The beep indicates that the locking program is turned OFF."}
       ]
      }
    ]
  },

  {title: 'Pump main features & uses - Question 1 of 3', img: require('../assets/device-front.png'), device: true, question: "The BodyGuard 323 Color Vision™ system has several safety features – including…  tick all that apply:", quiz: true, multiAnswer: true, id: 6, layout4: true, answers: [
      { text: 'Air in line accumulation system'},
      { text: 'Anti-bolus function'},
      { text: 'Free flow protection valve in the sets'}
   ]
  },

  {title: 'Pump main features & uses - Question 2 of 3', img: require('../assets/device-front.png'), device: true, question: "The BodyGuard 323 Color Vision™ offers", quiz: true, singleAnswerOne: true, answer: 1, correct: false, incorrect: false, id: 8, layout4: true, answers: [
      { text: 'Multiple programs to adapt to different clinical applications'},
      { text: 'Mainly pain management procotols'}
   ]
  },

  {title: 'Pump main features & uses - Question 3 of 3', img: require('../assets/device-front.png'), device: true, question: "The BodyGuard 323 Color Vision™ includes a rechargeable battery pack", quiz: true, singleAnswerTwo: true, correct: false, incorrect: false, answer: 1, id: 6, layout4: true, answers: [
      { text: 'True'},
      { text: 'False, the battery has to be bought separately'}
   ]
  },
  {title: 'Keypad description and functions – Front', img: require('../assets/device-front.png'), tour: true, id: 9, layout4: true,
    tooltips: [
      {
        title: "1. Display Screen:", img: require('../assets/module1-2/M1-S-15-1.png'), bar: true, current: true, items: [
          {text: "Displays pump and infusion status "},
          {text: "Displays programming choices and instructions"}
        ]
      },
      {
        title: "2. STOP/NO:", img: require('../assets/module1-2/M1-S-15-1.png'), stopButton: true, current: false, items: [
          {text: "Stops infusion"},
          {text: "Silences an alarm condition"},
          {text: "Pause priming"},
          {text: "Zeroes the displayed value during programming"}
        ]
      },
      {
        title: "3. START/ OK:", img: require('../assets/module1-2/M1-S-15-1.png'), startButton: true, current: false, items: [
          {text: "Starts infusion "},
          {text: "Confirms selection and setting"}
        ]
      },
      {
        title: "4. PRIME/BOLUS:", img: require('../assets/module1-2/M1-S-15-1.png'), primeButton: true, current: false, items: [
          {text: "Pressing Prime/Bolus key during data setting: Enables Priming procedure. A graph appears on the display screen showing the priming volume with the current value increasing until reaching the set volume."},
          {text: "Pressing Prime/Bolus key during Continuous program operation: Enables Secondary (Piggy) Infusion or Bolus"},
          {text: "Pressing Prime/Bolus key during PCA program operation: Enables bolus procedure"}
        ]
      },
      {
        title: "5. Power ON/OFF:", img: require('../assets/module1-2/M1-S-15-1.png'), powerButton: true, current: false, items: [
          {text: "Turn the system ON by pressing and holding the button until the Self-Test screen appears."},
          {text: "Turn the system OFF by pressing and holding the button until the graph is red and a beep is generated."}
        ]
      },

      {
        title: "6. Lock Operation:", img: require('../assets/module1-2/M1-S-15-1.png'), lockButton: true, current: false, items: [
          {text: "Will lock keys to prevent settings changes."}
        ]
      },
      {
        title: "7. INFO:", img: require('../assets/module1-2/M1-S-15-1.png'), infoButton: true, current: false, items: [
          {text: "Supplies information about the pump and its programs"}
        ]
      },
      {
        title: "8. Numeric Keys:", img: require('../assets/module1-2/M1-S-15-1.png'), numbers: true, current: false, items: [
          {text: "Enters numeric parameters during programming."}
        ]
      },
      {
        title: "9. Arrows:", img: require('../assets/module1-2/M1-S-15-1.png'), arrows: true, current: false, items: [
          {text: "Scrolls up, down, right and left through options"}
        ]
      },
      {
        title: "10. Operation LED:", img: require('../assets/module1-2/M1-S-15-1.png'), LED: true, current: false, items: [
          {text: "Green Indicator"},
          {text: "Lights during system Self-Test"},
          {text: "An intermittent green light indicates infusion delivery"},
          {text: "Red Indicator"},
          {text: "Indicates an alarm state with a continuous red light"}
        ]
      },
      {
        title: "Click next to continue", img: require('../assets/module1-2/M1-S-15-1.png'), current: false,
      },
    ]
  },
  {title: 'Keypad description and functions – Pump with open door', img: require('../assets/open.png'), tour: true, id: 10, layout4: true, tooltips: [
      { title: "Pump with open door", current: true, open1: true, items: [
        {text: "1. Latch Holder: Holds the door closed when latch is in vertical position."},
       ] 
      },
      { title: "Pump with open door", current: false, open2: true, items: [
          {text: "2. Flow Direction: Shows direction of pump operation"},
       ] 
      },
      { title: "Pump with open door", current: false, open3: true, items: [
          {text: "3. Pressure Sensor: Detects downstream tubing restriction and occlusion. Alarm level can be adjusted to suit patient needs."},
       ] 
      },
      { title: "Pump with open door", current: false, open4: true, items: [
          {text: "4. Keyway Guides the IV line"},
       ] 
      },
      { title: "Pump with open door", current: false, open5: true, items: [
          {text: "5. Pressing Plate Connected to the door by two springs"},
       ] 
      },
      { title: "Pump with open door", current: false, open6: true, items: [
          {text: "6. Pump Door Covers the pressing plate"},
       ] 
      },
      { title: "Pump with open door", current: false, open7: true, items: [
          {text: "7. Anti-Stretch locator (Optional): Locates the tube in the correct length from the key"},
       ] 
      },
      { title: "Pump with open door", current: false, open8: true, items: [
          {text: "8. Air sensor – Front: Ultrasonic air detector, which is mounted on the front housing."},
       ] 
      },
      { title: "Pump with open door", current: false, open9: true, items: [
          {text: "9. Air sensor - Door Mounted on the door"},
       ] 
      }, 
      {
        title: "Click next to continue", current: false,
      },
    ]
  },
  {title: 'Keypad description and functions – Charger', img: require('../assets/device-charger.jpg'), id: 11, tour: true, charger: true, layout4: true, tooltips: [
      { title: "Charger", current: true, displayButton: true, items: [
        {text: "1. Charger Display Displays major pump messages and operation values"},
       ] 
      },
      { title: "Charger", current: false, releaseButton: true, items: [
        {text: "2. Release Handle Push to release the pump from the charger"},
       ] 
      },
      { title: "Charger", current: false, chargerButton: true, items: [
        {text: "3. Charger LED (orange) Indicates connection to mains"},
       ] 
      },
      { title: "Charger", current: false, pumpButton: true, items: [
        {text: "4. Pump Battery LED (red/green) Indicates battery charge status"},
       ] 
      },
      {
        title: "Click next to continue", current: false,
      },
    ]
  },

  {title: 'Question 1 of 5', text: 'There are 5 questions in this section', questionNo: 'Question 1.', img: require('../assets/device-front.png'), id: 12, tour: true, tourQuiz: true, layout4: true, answer: 'start', correct: null, tooltips: [
      {question: "Click on the key to start the infusion", img: require('../assets/module1-2/M1-S-15-1.png'), 
      startButton: true, powerButton: true, infoButton: true, current: true} 
    ]
  },
  {title: 'Question 2 of 5', text: 'There are 5 questions in this section', questionNo: 'Question 2.', img: require('../assets/device-front.png'), id: 13,tour: true, tourQuiz: true, layout4: true, answer: 'power', correct: null, tooltips: [
      {question: "Which key powers on/off the pump?", img: require('../assets/module1-2/M1-S-15-1.png'), 
      startButton: true, powerButton: true, primeButton: true, current: true} 
    ]
  },
  {title: 'Question 3 of 5', text: 'There are 5 questions in this section', questionNo: 'Question 3.', img: require('../assets/device-front.png'), id: 14,tour: true, tourQuiz: true, layout4: true, answer: 'stop', correct: null, tooltips: [
      {question: "Which key stops the infusion?", img: require('../assets/module1-2/M1-S-15-1.png'), 
      stopButton: true, startButton: true, powerButton: true, current: true} 
    ]
  },
  {title: 'Question 4 of 5', text: 'There are 5 questions in this section', questionNo: 'Question 4.', img: require('../assets/device-front.png'), id: 15,tour: true, tourQuiz: true, layout4: true, answer: 'info', correct: null, tooltips: [
      {question: "Which one is the info key?", img: require('../assets/module1-2/M1-S-15-1.png'), 
      stopButton: true, primeButton: true, infoButton: true, current: true} 
    ]
  },
  {title: 'Question 5 of 5', text: 'There are 5 questions in this section', questionNo: 'Question 5.', img: require('../assets/device-front.png'), id: 16,tour: true, tourQuiz: true, layout4: true, answer: 'LED', correct: null, tooltips: [
      {question: "Press on the pump battery LED that indicates the battery charge status ", img: require('../assets/module1-2/M1-S-15-1.png'), 
      bar: true, primeButton: true, LED: true, current: true} 
    ]
  },
  
  {title: 'MicroSet™ dedicated administration Sets', fin: true,  id: 17, button: '', layout3: true, listsText: true,
    lines: [
      {text: "The BodyGuard 323 Color Vision™ infusion system should be operated only with MicroSet™ dedicated Infusion sets for different needs: general IV, PCA, Epidural, Oncology, TPN, Blood. Do not operate the BodyGuard 323 Color Vision™ infusion system with any administration set, other than the MicroSet™. The MicroSet™ Infusion Sets are equipped with a free flow protection valve, to prevent a gravity free flow hazard. Using a different set may essentially change the delivering rate and expose the patient to a free flow, which can cause serious injury or even death"},
      // {b:true, text: "The BodyValve™"},
      {b:true, text: "The Anti-Free Flow valve, BodyValve™, enhances pump functioning by:"},
    ],
    lists: [
      { items: [
        {text: "Preventing free-flow in the event the set is detached from the pump. "},
        {text: "Preventing back-flow (reflux) in the event several infusion pumps are connected simultaneously to the same patient. "},
        {text: "Preventing free-flow in the event of a mechanical malfunction. "},
        {text: "Preventing reflux of blood into the administration set."} 
        ]
      },
      {
        title: "Specific sets for different applications:", items: [
          { text: "General IV"},
          { text: "Blood"},
          { text: "Oncology"},
          { text: "PCA"},
          { text: "Epidural"},
          { text: "TPN"}
        ]
      },
      {
        title: "For different uses:", items: [
          { text: "Bedside"},
          { text: "Ambulatory"}
        ]
      },
      {
        title: "With different characterstics:", items: [
          { text: "Low sorbing"},
          { text: "Syringe adaptor"},
          { text: "With filters"},
          { text: "With drip chambers"},
          { text: "Light resistant"},
          { text: "Vented/non vented"},
          { text: "With smartsites"}
        ]
      },
    ],
    linkText: 'For more information visit our eCatalogue', 
    linkHref: "http://www.bd-products.com/products/ivsets/products.php?q=Microset",
    
  },
  
  // {title: 'Module 1 Complete', img: require('../assets/device.png'),  id: 7 }
]

export default moduleOne