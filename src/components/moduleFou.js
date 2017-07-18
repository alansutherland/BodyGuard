const moduleFour = [
  {title: '', id: 1, layout3: true, fadeImg: require("../assets/mod4.png"), fadeButton: 'Start', isDark: true,
  	fadeLists: [
  		  {title: "", links: [
  		  {a: "Battery operations", b: true, jump: 1},
  		  {a: "Changing the battery", b: true, jump: 2},
  		  {a: "Charging the pump", b: true, jump: 3},
  		  {a: "Cleaning and storage", jump: 4},
  		  {a: "In this section we will cover the most important things you need to know as a user to keep the pump operating effectively. "},
  		  {a: "The pump needs periodical maintenance which must be carried out by a trained technician. However the pump requires the battery to operate effectively and cleaning is required periodically between patients."},
  		]
  	  }	
  	] 
  },
  
  {title: 'Battery Operations', id: 2, layout3: true, fadeImg: require("../assets/mod4.png"),
  	fadeLists: [
  		{
  			title: "", items: [ 
          {text: "The BodyGuard 323 Color Vision™ pump can operate on battery power which enables operation when the patient is being moved or during electrical power failure. "},
          {text: "When the pump operates on battery power, the AC icon is off. At full charge, the standard battery provides up to 15 hours of operation at an infusion rate of 125 ml/hr. Make sure the battery is charged at the minimum level requested by your local policy. "},
          {text: "Caution: Leaving the battery in an uncharged state for a long period of time may damage the battery. "}, 
          {text: "Whenever possible, use the pump connected to an AC power supply via the charging unit. This preserves the battery power supply for emergency use or for situations where the AC power is not available. Replace the battery once every two years. Hours of battery operation may vary depending on pump usage and/or the battery's condition. "},
          {text: "To change the battery pull the lever at the back of the pump upwards. The battery will automatically unleash from its setting."},
  			]
  		}	
  	]
    
  },
  {title: 'How to change the battery', id: 3, layout3: true, fadeImg: require("../assets/con1.png"),
  	fadeLists: [
  		{
  			title: "", items: [
  				{text: "Place the new battery in the appropriate location, starting from the left side. Then push the battery down in order to install it in its setting and create a contact on the right side."}
  			]
  		}	
  	]
  },
  {title: 'Battery charging', id: 4, layout3: true, fadeImg: require("../assets/con2.png"),
  	fadeLists: [
  		{
  			 title: "", items: [
          {text: "The pump is protected against overcharging. In order to keep your battery fully charged, connect the pump to the mains via the Charger whenever possible. Be sure that the battery is fully charged at all times. Warning: If the battery is removed during operation while pump is not connected to a charger connected to mains, the pump will turn off. "},
          {text: "Connect the charger unit to AC power and verify that the AC indicator is lit."},
          {text: "Put the pump into the charger (top first) until it clicks into place."},
          {text: "The battery is charging when the red battery LED on the front of the charger is lit. The battery is fully charged when the battery LED symbol turns green. If the LED does not light or does not turn green after more than 8 hours, pls. replace battery."},
          {text: "Remove the pump from the charger by pressing the release button (located next to the LED indicators on the charger) and lift the pump out of the charger bottom first."},
          {text: "Caution: Leaving the battery fully depleted for a long period of time may damage the battery."},
  			]
  		}	
  	]
  },
  {title: 'Cleaning & Storage', id: 5, layout4: true, fadeImg: require("../assets/con3.png"),
  	fadeLists: [
  		{
  			 title: "", items: [
          {text: "Before connecting the pump to a patient, and periodically during use, clean the unit using a lint-free cloth lightly dampened with warm water and a mild detergent or disinfectant in accordance with your local policy."},
          {text: "Warning: Always turn the pump off and remove the battery before cleaning.", b: true},
          {text: "Warning: Always unplug the charger from AC power before cleaning.  ", b: true}, 
          {text: "Caution: Do not clean the pump or charger with chemicals such as Xylene, Acetone or similar solvents. These chemicals can cause damage to plastic components and paint. Use a lint-free cloth dampened with warm water and a mild detergent or disinfectant.  ", b: true},
          {text: "Caution: Do not soak or immerse any part of the pump or charger in water.  ", b: true}, 
          {text: "Storage", b: true},
          {text: "If the pump is to be stored for an extended period, it should be cleaned and the battery fully charged. Store in a clean, dry atmosphere at room temperature and, if available, employ the original packaging for protection. Perform functional tests and ensure that battery is fully charged once every three months."},
          {text: "Periodic maintenance (PM) should be performed by a trained technician once a year."},
  			]
  		}	
  	]
  },

  // {title: 'Module 4 Complete', img: require('../assets/device.png'),  id: 67 }
]

export default moduleFour
