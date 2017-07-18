const moduleSeven = [
  {title: '', id: 1, layout3: true, modes: true, button: "Start Test", isDark: true,
    lines: [
      {s: true, o: true, text: "Thanks for attending this training. During this course we went through: Key features and controls of the BodyGuard 323 ColorVision ™, How to operate it in practice, its range of alarms, how to care and maintain the pump, some of the accessories and some of the additional features available. "},
      {s: true, o: true, text: "To finish up there will be a short test to review some of the concepts we went through. You will receive a certificate at the end"}
    ]
  },
  {title: 'Question 1 of 5', question: 'The INFO key', quiz: true, device: true, singleAnswerOne: true, answer: 1, correct: false, incorrect: false, id: 2, layout4: true, fadeImg: require("../assets/device-front.png"),
  	answers: [
  	      {text: "Supplies information about the pump and its programs"},
  	      {text: "Enables Priming procedure"},
  	      {text: "Start up the pump "},
  	   ]
  },

  {title: 'Question 2 of 5', question: 'Use of any administration set, other than the MicroSet™- tick all that apply:', correct: false, incorrect: false, quiz: true, device: true, multiAnswer: true, id: 3, layout4: true, fadeImg: require("../assets/device-front.png"),
  	answers: [
  	      {text: "May impair the operation of the pump "},
  	      {text: "May impair the accuracy of the Infusion"},
  	      {text: "It has no consequence"},
  	   ]
  },
  {title: 'Question 3 of 5', question: 'With the BG323CV, in PCA mode you can adminsiter a loading doe before starting the PCA infusion:',answer: 1, correct: false, incorrect: false, quiz: true, device: true, singleAnswerTwo: true, id: 4, layout4: true, fadeImg: require("../assets/device-front.png"),
  	answers: [
  	      {text: "True"},
  	      {text: "False"},
  	   ]
  },
  {title: 'Question 4 of 5', question: 'In the dose program you can implement:', quiz: true, device: true, singleAnswerThree: true,answer: 2, correct: false, incorrect: false, id: 5, layout4: true, fadeImg: require("../assets/device-front.png"),
  	answers: [
  		  {text: "Up to 32 doses"},
  		  {text: "Up to 25 doses"},
  		  {text: "Up to 5 doses"},
  	   ]
  },
  {title: 'Question 5 of 5', question: 'In the BG323CV you can program a rate up to:', quiz: true, device: true, singleAnswerFour: true,answer: 1, correct: false, incorrect: false, id: 6, layout4: true, fadeImg: require("../assets/device-front.png"),
  	answers: [
  	      {text: "1,200 ml/hr"},
    		  {text: "200 ml/hr"},
    		  {text: "600 ml/hr"},
  	   ]
  },
  {title: 'Final Test', results: true, isDark: true, id: 7, layout3: true, },
  {title: '', cert: true, modal: true, id: 8, layout3: true},
  {title: 'Disclaimers- legal mentions and references', id: 9, layout3: true, img: require("../assets/credit.png"),
    lines: [
      {text: "Manufactured by CME. This product is distributed by BD on behalf of the manufacturer. BodyGuard ColorVision ™, T34™, BodyGuard 121 Twins™, BodyGuard Quadro™, MicroSets™, BodyValve™ and BodyComm™ are trademarks of Caesarea Medical Electronics Ltd."},
      {text: "©2016 BD or one of its subsidiaries. 0000MS07648"},
      {text: "Please contact your BD representative for further information."}
    ]
  },
  {title: 'Thank You', id: 10, layout3: true, img: require("../assets/bd.png"), thanks: true},
  
]

export default moduleSeven
