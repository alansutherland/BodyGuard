const pca = [
  {title: 'How to operate an infusion in PCA mode', fadeTitle: '', id: 1, layout3: true,isDark: true, fadeImg: require("../assets/modes2.svg"), modeStart: true, fadeButton: 'Start',
  	
    fadeLists: [
      {
        title: "Overview", items: [
          {text: "Patient Control Analgesia is a program used for patients who require IV pain management or epidural analgesia. Pain management is undertaken by delivering a continuous basal rate, in combination with pre-programmed boluses. The pump will deliver only the boluses corresponding to the preset time intervals. All attempts to obtain a bolus are stored in the pump memory. The physician can read these statistics and adjust the settings as required."},
          {text: "Due to the sensitive nature of PCA infusions, the BodyGuard 323 Color Vision™ has a specific menu to enhance the user experience while programming PCA infusions. The menu organizes the infusion information centrally while maintaining the same programming format as the other infusion modes on the pump."}, 
        ]
      } 
    ],
    lists: [
      {
        items: [
        {text: "Rate: 0.0 to 100 ml/hr in 0.1 ml increments"},
        {text: "Volume: 0.1 to 1000 ml"},
        {text: "Bolus Volume: 0 to 100 ml"},
        {text: "Bolus Rate: 0.1 to 100 ml/hr in 0.1 ml increments, and 100 to 1200 ml/hr in 1 ml increments"},
        ]
      },
  		{
  			title: "In this section", items: [
  				{text: "How to operate an infusion in PCA mode"},
  				{text: "Advanced Features in PCA mode:"},
  				{text: "How to change to concentration screen"},
  				{text: "How to administer a Patient Bolus"},
  				{text: "How to administer a Clinician Bolus"},
  				{text: "Titrating Basal Rate During The Infusion"},
  				{text: "Titrating Bolus During The Infusion"},
  				{text: "Changing Lock Out Time During The Infusion"},
  				{text: "Options during the infusion"},
  				{text: "Options when the infusion is stopped"},
  				{text: "The PCA restart menu screen"}	
  			]
  		}	
  	]
    
  },
  {title: 'How to operate an infusion in PCA mode', fadeTitle: '', id: 3, layout3: true, fadeImg: require("../assets/con1.png"),
  	fadeLists: [
  		{
  			items: [
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
  {title: 'How to operate an infusion in PCA mode: loading of the set', fadeTitle: '', id: 4, layout3: true, fadeImg: require("../assets/con2.png"),
  	fadeLists: [
  		{
  			 items: [
  				{span: "Note:", o: true, text: "Follow the instructions supplied with the individual administration set. Warning: Use of any administration set, other than the MicroSet™, may impair the operation of the pump and the accuracy of the Infusion. Use aseptic technique. Patient infection may result from the use of non-sterile components. Maintain sterility of all disposable components and use only single use consumables."},
  				{text: "Lift the door latch on the right side of the pump to open the door."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in PCA mode: loading of the set', fadeTitle: '', id: 5, layout3: true, fadeImg: require("../assets/con3.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Open the packaging and remove the administration set from the sterile packaging leaving the end caps on the line until the moment of connection."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in PCA mode: loading of the set', fadeTitle: '', id: 6, layout3: true, fadeImg: require("../assets/con4.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Connect the administration set to the medication bag. In the example you see a soft bag but we have many different type of sets available for any of your needs."},
  				
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in PCA mode: loading of the set', fadeTitle: '', id: 7, layout3: true, fadeImg: require("../assets/con5.png"),
  	fadeLists: [
  		{
  			 items: [
  				{text: "Hold the section of tubing with the key (small plastic block) and make sure the flow direction is in line with the flow direction arrows inside the pump door. Insert the IV tubing into the pump by placing the key into the keyway."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in PCA mode', fadeTitle: '', id: 8, layout3: true, fadeImg: require("../assets/con6.png"),
  	fadeLists: [
  		{
  			items: [
  				{text: "Locate the Anti-Stretch locator in the round space on the left side (around the air sensor door) and verify that the BodyValve™ is on the right hand side of the pump."}
  			]
  		}	
  	]
  },
  {title: 'How to operate an infusion in PCA mode', fadeTitle: '', id: 9, layout3: true, fadeImg: require("../assets/con6.png"),
  	fadeLists: [
  		{
  			items: [
  				{text: "Close the pump door until the catch clicks."}
  			]
  		}	
  	]
  },
  {title: 'How to start an infusion in PCA mode', fadeTitle: '', id: 10, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
  	tooltips: [
  	  {
  	    powerButton: true, current: true, items: [
  	      {text: "Turn on the pump by pressing and hold the top left on/off key."}
  	    ]
  	  },
      {
        img: require('../assets/module1-2/M2-S-100-1.png'), startButton: true, items: [
          {text: "The selected program will remain in the pump’s memory until changed by the operator. Therefore if the last program used was PCA Program” when you turn on the pump, PCA Program will appear. If instead the last program used was a different one and you want to switch to PCA, you need to go to the Menu and select “Change Set up”, than “More” and then “Select Program”, & scroll until the required program appears on the screen. If in doubt consult the Directions for Use."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-100-1.png'), startButton: true, current: true, items: [
          {text: "Press the green key to confirm your choice. "}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-102-1.png'), startButton: true, current: true, items: [
          {text: "PCA Menu Screen"},
          {text: "The user interface in PCA centers around the PCA menu."},
          {text: "From the PCA menu, the user can select:"},
          {text: "i. Prime – Prime Administration Set"},
          {text: "ii. Program Infusion – Enter infusion details"},
          {text: "iii. Clinician Bolus – Infuse extra bolus"},
          {text: "iv. Patient History – View infusion history of patient"},
          {text: "v. Review Set up – View pump settings"},
          {text: "vi. Change Set up – Enables user to change pump settings and switch to other infusion modes."},
          {text: "Use the up or down arrow keys or to scroll through options. Select the required option by pressing the green key."},
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-102-1.png'), startButton: true, current: true, items: [
          {text: "Selecting the Prime option from the PCA menu by pressing the green key."},
          {span: "Warning:", o: true, text: "Ensure the set is not connected to the patient!"},
          {span: "Note:", o: true, text: "Priming is disabled during PCA operation. Always prime the set before starting a program."},
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-104-1.png'), startButton: true, items: [
          {text: "After selecting the Prime option from the PCA menu, the screen will show the priming screen. Press the green key to program priming procedure. Warning: Ensure the set is not connected to the patient!"}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-105-1.png'), numbers: true, current: true, items: [
          {text: "Enter the desired priming volume by using the numeric key pad."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-106-1.png'), startButton: true, current: true, items: [
          {text: "Once the required priming volume is entered, confirm by pressing the green key"}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-107-1.png'), stopButton: true, current: true, items: [
          {text: "The display screen will show a graph indicating the prime operation. You can stop the priming at any time by pressing the red key. Once the priming is completed, the display will change back to the previous screen the pump was in before priming. If more priming is needed, repeat procedure. Make sure that all air is removed from the IV line before connecting to the patient."},
          {text: "Once Priming is completed you will go back to last programming screen you where on."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-108-1.png'), startButton: true, current: true, items: [
          {text: "The PCA Menu Screen will appear. Select Program Infusion and press the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-109-1.png'), startButton: true, current: true, items: [
          {text: "Rate/Concentration Selection Screen To program Rate in Milliliters per Hour (ml/hr), press the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-110-1.png'), numbers: true, current: true, items: [
          {text: "Enter the desired basal rate by using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-111-1.png'), startButton: true, current: true, items: [
          {text: "Confirm the desired basal rate by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-112-1.png'), numbers: true, current: true, items: [
          {text: "Rate Titration Limit Screen. Enter the desired maximum rate of titration that can be used by using the numeric keypad. Rate can be ml/hr, mg/hr or mcg/hr depending on program selected."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-113-1.png'), startButton: true, current: true, items: [
          {text: "Confirm the desired Titration rate Maximum by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-114-1.png'), numbers: true, current: true, items: [
          {text: "Bolus Screen  - Bolus can be ml, mg, or mcg depending on the program selected. Enter the desired Bolus Dose by using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-115-1.png'), startButton: true, current: true, items: [
          {text: "Confirm the desired bolus dose by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-116-1.png'), numbers: true, current: true, items: [
          {text: "Bolus Titration Limit Screen. Enter the desired maximum bolus dose. Bolus dose can be ml, mg or mcg depending on program selected."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-117-1.png'), startButton: true, current: true, items: [
          {text: "Confirm the desired maximum Bolus Dose by pressing the green key. NOTE: If the “Maximum Bolus Dose” screen does not appear on the pump during programming."},
          {text: "It needs to be activated by going to the “Change Set up” menu and by activating “Titration Bolus”."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-118-1.png'), numbers: true, current: true, items: [
          {text: "Lock Time Screen. The lock time is the amount of time between patient boluses. Enter the desired lock time in minutes by using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-119-1.png'), startButton: true, current: true, items: [
          {text: "Confirm the desired lock out time by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-120-1.png'), startButton: true, current: true, items: [
          {text: "Hour Limit Screen N.1. As an additional safety precaution, user can program a volume limit over a certain amount of hours. User can set this limit for any amount of time between 1 (One) and 24 (Twenty-Four) hours, or can continue without setting a limit. The default setting is OFF, meaning there is no limit. To confirm press the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-121-1.png'), numbers: true, current: true, items: [
          {text: "If instead you wish to enter a Program limit, select the desired program limit by using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-122-1.png'), startButton: true, current: true, items: [
          {text: "Confirm the desired Program Limit by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-123-1.png'), numbers: true, current: true, items: [
          {text: "Hour Limit Screen N. 2. If an hour limit is entered in previous step, the next step will prompt the user to enter the maximum amount of volume to be infused over that timeframe. Limit can be ml, mg, or mcg. Enter the desired quantity for the selected hours limit by using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-124-1.png'), startButton: true, current: true, items: [
          {text: "Confirm the desired limit by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-125-1.png'), numbers: true, current: true, items: [
          {text: "Bag Volume Screen. Enter the desired bag volume by using the numeric keypad. "}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-126-1.png'), startButton: true, current: true, items: [
          {text: "Confirm the desired Bag Volume by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-127-1.png'), startButton: true, current: true, items: [
          {text: "Locking Screen. The pump automatically locks before a PCA infusion program can be completed.  Press the green key to lock the PCA program and proceed."},
          {text: "If you wish to scroll through the programming again and review or adjust the program, press the red key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-128-1.png'), startButton: true, current: true, items: [
          {text: "Accumulation Screen. The pump displays the accumulation screen with a summary the program entered. Press the green key to confirm parameters and proceed."},
          {text: "If you wish to go back and adjust parameters, press the red key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-129-1.png'), startButton: true, current: true, items: [
          {text: "Press the green key to start the infusion."},
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-130-1.png'), bar: true, current: true, items: [

          {text: "During the operations the pump will show these parameters."}, 
          {text: "Infusion Mode:"},
          {text: "The first line of the display indicates that the pump is in the PCA infusion mode."},

          {text: "Infusion Rate:"},
          {text: "The second line of the display shows the current infusion rate. Depending on whether the user programmed the current protocol in mls or mgs, this will display the rate in either ml/h, mg/h or mcg/h."},

          {text: "Bolus Volume:"},
          {text: "The third line of the display shows the bolus volume for the current protocol. As with infusion rate, this will be displayed in ml, mg or mcg depending on how the current program is set up."},

          {text: "Battery Status"},
          {text: "The battery symbol - user can check the charge level by monitoring the green fill inside the symbol (i.e. completely green symbol indicates a fully charged battery)."},

          {text: "Infusion Status:"},
          {text: "Infusion status indicator moves in circles when the pump is in operation."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-131-1.png'), stopButton: true, current: true, items: [
          {text: 'End of Infusion', b: true},
          {text: "Once the infusion has reached an end (pre-set volume was infused), an alarm sounds and display will show the End of Infusion Screen."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-132-1.png'), stopButton: true, current: true, items: [
          {text: 'End of Infusion', b: true},
          {text: "The alarm will stop after 4 beeps. The pump will show the pre-set KVO rate. The alarm will sound again every 4 minutes until the user changes the bag or stops the pump."}
        ]
      }
  	]
  },
  {title: 'Advanced Features in PCA mode', fadeTitle: '', id: 10, layout4: true, tour: true, fadeImg: require("../assets/device-front.png"),
    tooltips: [
          {
        img: require('../assets/module1-2/M2-S-133-1.png'), startButton: true, current: true, items: [
          {text: 'How to change to concentration screen ', b: true},
          {text: "From the PCA menu screen, scroll to Program Infusion and confirm by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-134-1.png'), stopButton: true, current: true, items: [
          {text: 'How to change to concentration screen ', b: true},
          {text: "Rate/Concentration Selection Screen. To program Concentration in Milligrams per Milliliter (mg/ml), press the red key once."},
          {text: "To program Concentration in Micrograms per Milliliter (mμ/ml), press the red key twice."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-135-1.png'), numbers: true, current: true, items: [
          {text: 'How to change to concentration screen ', b: true},
          {text: "Concentration Screen. Enter the desired value in Milligrams per Milliliter (mg/ml), or in Micrograms per Milliliter (mμ/ml), by using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-136-2.png'), startButton: true, current: true, items: [
          {text: 'How to change to concentration screen ', b: true},
          {text: "Confirm your choice by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-137-1.png'), numbers: true, current: true, items: [
          {text: 'How to change to concentration screen ', b: true},
          {text: "Basal Rate Screen - Enter the desired basal rate by using the numeric keypad. The basal rate will be in mg/hr or mcg/hr according to your previous selection."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-138-2.png'), startButton: true, current: true, items: [
          {text: ' ', b: true},
          {text: "Basal Rate Screen - Confirm your choice by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-139-2.png'), numbers: true, current: true, items: [
          {text: 'How to change to concentration screen ', b: true},
          {text: "Rate Titration Limit screen. Adjust the Maximum Titration rate by using the numeric keypad. The Maximum Titration Rate will be in mg/hr or mcg/hr according to your previous selection."},
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-139-2.png'), startButton: true, current: true, items: [
          {text: 'How to change to concentration screen ', b: true},
          {text: "Rate Titration Limit Screen. Confirm your choice by pressing the green key."},
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-141-1.png'), numbers: true, current: true, items: [
          {text: 'How to change to concentration screen ', b: true},
          {text: "Enter the desired bolus dose by using the numeric keypad. The Bolus Dose will be in mg or mcg according to your previous selection."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-142-2.png'), startButton: true, current: true, items: [
          {text: 'How to change to concentration screen ', b: true},
          {text: "Confirm your choice with the green key."}
        ]
      } , 
      {
        img: require('../assets/module1-2/M2-S-143-2.png'), numbers: true, current: true, items: [
          {text: 'How to change to concentration screen ', b: true},
          {text: "Bolus Titration Limit screen. Adjust the Maximum Bolus Dose by using the numeric keypad. The Maximum bolus Dose will be in mg or mcg according to your previous selection."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-143-2.png'), startButton: true, current: true, items: [
          {text: 'How to change to concentration screen ', b: true},
          {text: "Bolus Titration Limit screen. Confirm your choice by pressing the green key. Proceed in programming the Lock Out time, the hour limit (if requested) and the bag volume as in the ML programming mode."}, 
      {text: "Click here if you wish to review the ML programming mode"}
        ]
      },   
      {
        img: require('../assets/module1-2/M2-S-145-1.png'), primeButton: true, current: true, items: [
          {text: 'How to administer a Patient Bolus ', b: true},
          {text: "A PCA infusion can be programmed to allow the patient to request boluses of a specified volume within predetermined time intervals. The patient can request the bolus by Using the Bolus Cable or by Using the Orange key ."},
          {text: "Different types of bolus cables are available. Some types of bolus cables have a LED that turns green when the bolus is available while others do not have any LED, therefore there is no signal if the bolus is available. In any case the patient will press the bolus cable, to self administer a bolus."},
          {text: "If patient requests more boluses than are allowed, the pump will display “Bolus Locked” and will track the amount of boluses have been requested. The bolus history can be reviewed by scrolling the Info Menu."}
        ]
      } ,  
      {
        img: require('../assets/module1-2/M2-S-146-1.png'), bar: true, current: true, items: [
          {text: 'How to administer a Patient Bolus ', b: true},
          {text: "The Bolusing screen will be displayed."}
        ]
      } ,   
      {
        img: require('../assets/module1-2/M2-S-147-1.png'), primeButton: true, current: true, items: [
          {text: 'How to administer a Patient Bolus ', b: true},
          {text: "A patient bolus can be requested by pressing the orange key."}
        ]
      } ,   
      {
        img: require('../assets/module1-2/M2-S-148-1.png'), startButton: true, current: true, items: [
          {text: 'How to administer a Patient Bolus ', b: true},
          {text: "The Patient Bolus Screen will be displayed. Press the green key to confirm."}
        ]
      } , 
      {
        img: require('../assets/module1-2/M2-S-146-1.png'), bar: true, current: true, items: [
          {text: 'How to administer a Patient Bolus ', b: true},
          {text: "The Bolusing screen will be displayed."}
        ]
      } ,
      {
        img: require('../assets/module1-2/M2-S-150-1.png'), startButton: true, current: true, items: [
          {text: 'How to administer a Clinician Bolus – before starting the PCA infusion ', b: true},
          {text: "To infuse a Clinician Activated Bolus before starting the PCA infusion, make sure you’re in PCA mode and go the PCA menu. Scroll to Clinician Bolus Option. Confirm by pressing the green key. "}
        ]
      } ,
      {
        img: require('../assets/module1-2/M2-S-151-1.png'), numbers: true, current: true, items: [
          {text: 'How to administer a Clinician Bolus – before starting the PCA infusion', b: true},
          {text: "Enter the volume of the Clinician Bolus by using the numeric keypad. The Volume for the Bolus will be in ml, mg or μg depending on the settings of the existing protocol entered for the PCA infusion. To change, go to Program Infusion in the PCA menu and follow the steps until the selection can be made for ml, mg or μg. Please refer to “How to change to concentration” section for more info."}

        ]
      } ,   
      {
        img: require('../assets/module1-2/M2-S-152-1.png'), startButton: true, current: true, items: [
          {text: 'How to administer a Clinician Bolus – before starting the PCA infusion ', b: true},
          {text: "Confirm the desired Clinician Bolus Dose by pressing the green key. "}
        ]
      } ,   
      {
        img: require('../assets/module1-2/M2-S-153-1.png'), stopButton: true, current: true, items: [
          {text: 'How to administer a Clinician Bolus – before starting the PCA infusion ', b: true},
          {text: "The display screen will show a graph indicating the Bolus is being infused. The graphical bar displays the amount of the bolus to be infused (clear) and the amount infused (dark). Once the bolus is completed, the display will change back to the PCA menu. Users can stop a bolus at any time by pressing the red key."}
        ]
      } ,  
      {
        img: require('../assets/module1-2/M2-S-154-1.png'), stopButton: true, current: true, items: [
          {text: 'Titrating Basal Rate During The Infusion ', b: true},
          {text: "To administer a Clinician Bolus during a PCA infusion, press the red key to stop the infusion."}
        ]
      } ,
      {
        img: require('../assets/module1-2/M2-S-155-1.png'), primeButton: true, current: true, items: [
          {text: 'Titrating Basal Rate During The Infusion ', b: true},
          {text: "Once the pump is stopped, press the orange key to give a clinician bolus."}
        ]
      } ,
      {
        img: require('../assets/module1-2/M2-S-156-1.png'), numbers: true, current: true, items: [
          {text: 'Titrating Basal Rate During The Infusion ', b: true},
          {text: "Enter the volume of the Clinician Bolus by using the numeric keypad. The Volume for the Bolus will be in ml, mg or μg depending on the settings of the existing protocol entered for the PCA infusion. To change, go to Program Infusion in the PCA menu and follow the steps until the selection can be made for ml, mg or μg. Please refer to Change to concentration section for more information.."}
        ]
      } ,
      {
        img: require('../assets/module1-2/M2-S-157-1.png'), startButton: true, current: true, items: [
          {text: 'Titrating Basal Rate During The Infusion ', b: true},
          {text: "Confirm the desired Clinician Bolus Dose by pressing the green Key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-158-1.png'), stopButton: true, current: true, items: [
          {text: 'Titrating Basal Rate During The Infusion ', b: true},
          {text: "The display screen will show a graph indicating the Bolus is being infused. The graphical bar displays the amount of the bolus to be infused (clear) and the amount infused (dark). Once the bolus is completed, the display will change back to the PCA menu. Users can stop a bolus at any time by pressing the red key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-159-1.png'), numbers: true, current: true, items: [
          {text: 'Titrating Basal Rate During The Infusion ', b: true},
          {text: "To change Rate during the infusion, enter the new rate using the numeric keypad. A code may be required. Contact your supervisor if needed."},
          {text: "The Rate can be increased up to the “Max Titration Rate” programmed into the specific infusion."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-160-1.png'), startButton: true, current: true, items: [
          {text: 'Titrating Basal Rate During The Infusion ', b: true},
          {text: "Confirm the desired basal rate by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-161-1.png'), infoButton: true, current: true, items: [
          {text: 'Titrating Basal Rate During The Infusion ', b: true},
          {text: "You will go back to the infusion screen and you will hear a beep to signal that the new Rate is implemented in the pump."},
          {text: "To change the Bolus during the infusion, press the INFO button seven times until you reach a screen showing the currently programmed Bolus in ml or mg."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-163-1.png'), numbers: true, current: true, items: [
          {text: 'Changing Lock Out time ', b: true},
          {text: "Once you reach the screen showing the currently programmed bolus, enter the new bolus dose by using the numeric key pad. A security code may be requested. Contact your supervisor if needed."},
          {text: "The Bolus can be increased up to the “Maximum Bolus Dose” programmed into the specific infusion."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-164-1.png'), startButton: true, current: true, items: [
          {text: 'Changing Lock Out time ', b: true},
          {text: "Confirm your choice by pressing the green key."}
        ]
      },

      {
        img: require('../assets/module1-2/M2-S-165-1.png'), stopButton: true, current: true, items: [
          {text: 'Changing Lock Out time ', b: true},
          {text: "You will go to the Infusion Screen and you will hear a beep to signal that the new bolus dose has been implemented."},
          {text: "Stop the current infusion by pressing the red key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-167-1.png'), stopButton: true, current: true, items: [
          {text: 'Changing Lock Out time ', b: true},
          {text: "Once the pump is stopped, hold the red key to access the menu."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-168-1.png'), arrows: true, current: true, items: [
          {text: 'Changing Lock Out time ', b: true},
          {text: "Scroll down to the Menu options using the arrow keys."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-169-1.png'), startButton: true, current: true, items: [
          {text: 'Changing Lock Out time ', b: true},
          {text: "Confirm your choice by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-170-1.png'), arrows: true, current: true, items: [
          {text: 'Changing Lock Out time ', b: true},
          {text: "Scroll down to Program Infusion using the arrows key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-171-1.png'), startButton: true, current: true, items: [
          {text: 'Changing Lock Out time ', b: true},
          {text: "Confirm your choice by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-172-1.png'), stopButton: true, current: true, items: [
          {text: 'Changing Lock Out time ', b: true},
          {text: "Tell the pump that there is NOT a New Patient by pressing the red key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-173-1.png'), stopButton: true, current: true, items: [
          {text: 'Changing Lock Out time ', b: true},
          {text: "And that you don’t want to start a new bag, by pressing the red key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-174-1.png'), startButton: true, current: true, items: [
          {text: 'Changing Lock Out time ', b: true},
          {text: "Follow the same steps as described in the Program a PCA infusion. If you wish to change only the lock out time, confirm all the parameters by pressing the green key till you reach the Lock Out Time screen."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-175-1.png'), numbers: true, current: true, items: [
          {text: 'Changing Lock Out time ', b: true},
          {text: "At that point, adjust the desired lock out time by using the numeric keypad."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-176-1.png'), startButton: true, current: true, items: [
          {text: 'Changing Lock Out time ', b: true},
          {text: "Confirm your choice by pressing the green key."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-167-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a PCA infusion ', b: true},
          {text: "During a PCA infusion you can access different information by pressing the Options key on the left. Please refer also to the Info Menu section for more information."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-178-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a PCA infusion ', b: true},
          {text: "By pressing once, the Volume infused and the Volume still to be infused will be displayed. "}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-179-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a PCA infusion ', b: true},
          {text: "By pressing two times the Battery level will be displayed."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-180-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a PCA infusion ', b: true},
          {text: "By pressing three times, the Boluses current overview will be displayed."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-181-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a PCA infusion ', b: true},
          {text: "By pressing four times, the Time and Date will be displayed.."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-182-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a PCA infusion ', b: true},
          {text: "By pressing five times, the Actual Pressure will be displayed."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-183-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a PCA infusion ', b: true},
          {text: "By pressing 6 times, the program overview will be displayed."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-184-1.png'), infoButton: true, current: true, items: [
          {text: 'Options during a PCA infusion ', b: true},
          {text: "By pressing 7 times the current bolus dose is displayed. It can be adjusted at this stage by using the numeric keypad and confirming by pressing the green key. See Bolus Dose Titration section for more details"}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-185-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the infusion is stopped ', b: true},
          {text: "When the pump is stopped, by pressing the Options key, more information can be accessed. Please see Info Menu section and History sections for more information"}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-186-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the infusion is stopped ', b: true},
          {text: "By pressing once, you will access Bolus attempted, bolus given, and volume given information hour by hour."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-187-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the infusion is stopped ', b: true},
          {text: "By pressing two times, you will access a sumamry of the bolus attempted, bolus given and Volume given in the last 24 hours."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-188-1.png'), infoButton: true, current: true, items: [
          {text: 'Options when the infusion is stopped ', b: true},
          {text: "By pressing three times you will access the Chart of Bolus Delivery During the Last 24 Hours, Hour-by-Hour and Chart of Volume (Including Boluses) Delivered During the Last 24 Hours, Hour-by-Hour."}
        ]
      },
      {
        img: require('../assets/module1-2/M2-S-189-1.png'), startButton: true, current: true, items: [
          {text: 'The PCA Restart Menu Screen ', b: true},
          {text: "This screen displays when: (1) The pump is turned OFF and back ON in PCA mode (2) Infusion is stopped by pressing and holding the red key."},
          {text: "Users can scroll through the following options by pressing the arrow keys:"},
        ],
        lists: [
          {text: "Resume – Starts infusion exactly where it left off previously."},
          {text: "New Bag – Restarts infusion exactly where it left off previously and updates bag volume to be equal to the bag volume originally programmed."},
          {text: "Menu – Brings users back to the PCA Menu. You may need to enter a code. Please ask to your supervisor."},
          {text: "When changing the bag, priming may be needed."}
        ]
      },
    ]
  },
  {title: 'Question 1 of 5', fadeImg: require('../assets/device-front.png'), id: 12, tourQuiz: true, device: true, layout4: true, answer: 'barRight', correct: null, tooltips: [
      {question: "Press on the area which displays the Infusion status indicator", img: require('../assets/module1-2/M2-S-190-1.png'), 
      barRight: true, LED: true, bolus: true, current: true} 
    ]
  },
  {title: 'Question 2 of 5', fadeImg: require('../assets/device-front.png'), id: 12, tourQuiz: true, device: true, layout4: true, answer: 'barRight', correct: null, tooltips: [
      {question: "Press on the area which displays the Battery status indicator", img: require('../assets/module1-2/M2-S-190-1.png'), 
       barRight: true, LED: true, rate: true, current: true} 
    ]
  },
  {title: 'Question 3 of 5', fadeImg: require('../assets/device-front.png'), id: 12, tourQuiz: true, device: true, layout4: true, answer: 'barLeft', correct: null, tooltips: [
      {question: "Press on the area which displays the Infusion Mode", img: require('../assets/module1-2/M2-S-190-1.png'), 
       barLeft: true, LED: true, bolus: true, current: true} 
    ]
  },
  {title: 'Question 4 of 5', fadeImg: require('../assets/device-front.png'), id: 12, tourQuiz: true, device: true, layout4: true, answer: 'rate', correct: null, tooltips: [
      {question: "Press on the area which displays the Programmed infusion rate", img: require('../assets/module1-2/M2-S-190-1.png'), 
       barRight: true, rate: true, bolus: true, current: true}  
    ]
  },
  {title: 'Question 5 of 5', fadeImg: require('../assets/device-front.png'), id: 12, tourQuiz: true, device: true, layout4: true, answer: 'bolus', correct: null, tooltips: [
      {question: "Press on the area which displays the Patient controlled Bolus volume", img: require('../assets/module1-2/M2-S-190-1.png'), 
       barLeft: true, rate: true, bolus: true, current: true}  
    ]
  },
  // {title: 'PCA Mode Complete', img: require('../assets/device.png'),  id: 67 }
]

export default pca
