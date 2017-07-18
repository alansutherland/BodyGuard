var mixin = {
  data () {
    return {
      slidePosition: 0,
      notFirstSlide: false,
      tourStarting: false,
      moduleEnd: false,
      disableBtn: false,
      isDark: false,
      layout2: false,
      layout3: false,
      layout4: false,
      layout5: false,
      stopButton: false,
      startButton: false,
      primeButton: false,
      powerButton: false,
      glowButtonFive: false,
      lockButton: false,
      rateButton: false,
      bolusButton: false,
      barRightButton: false,
      barLeftButton: false,
      displayButton: false,
      chargerButton: false,
      pumpButton: false,
      releaseButton: false,
      noButton: false,
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      open6: false,
      open7: false,
      open8: false,
      open9: false,
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      answer5: '',
      answer6: '',
      answer7: '',
      answer8: '',
      correct: false,
      incorrect: false,
      quizDisable: false,
      tourQuiz: false,
      pos: 0,
      b: false,
      moduleTitle: '',
      sub: '',
      modules: [
        {id: 0, title: ''},
        {id: 1, title: 'Module 1 - <span>Features</span>'},
        {id: 2, title: 'Module 2 - <span>Modes of operation</span>'},
        {id: 21, title: 'Module 2 - <span>Modes of operation - Continuous</span>'},
        {id: 22, title: 'Module 2 - <span>Modes of operation - PCA</span>'},
        {id: 23, title: 'Module 2 - <span>Modes of operation - TPN</span>'},
        {id: 24, title: 'Module 2 - <span>Modes of operation - Intermittent</span>'},
        {id: 25, title: 'Module 2 - <span>Modes of operation - 25 Steps</span>'},
        {id: 26, title: 'Module 2 - <span>Modes of operation - Drug Library</span>'},
        {id: 3, title: 'Module 3 - <span>Alarms &amp; Trouble Shooting</span>'},
        {id: 4, title: 'Module 4 - <span>Care &amp; Maintenance</span>'},
        {id: 5, title: 'Module 5 - <span>Accessories</span>'},
        {id: 6, title: 'Module 6 - <span>Additional Features</span>'},
        {id: 7, title: 'Module 7 - <span>Course Summary &amp; Assessment</span>'}
      ],
      activeId: null,
      user: ''
    }
  },
  methods: {
      incrementPosition: function (e) {
        this.slidePosition = this.slidePosition + 1
        this.progressPercent = this.progressPercent + (100 / this.slides.length)
        this.pos = 0
        this.notFirstSlide = true
        if(this.slides[this.slidePosition].tour || this.slides[this.slidePosition].tourQuiz || this.slides[this.slidePosition].quiz){
          this.notFirstSlide = true
          this.disableBtn = true
          this.noButton = false
        } else {
          this.disableBtn = true
        }
        if(this.slides[this.slidePosition].tooltips){
          this.slides[this.slidePosition].tooltips.forEach(function(tip){
            tip.current = false
          })
          this.slides[this.slidePosition].tooltips[0].current = true;
        }
        // if its the end of the module change next button to front link
        if( (this.slidePosition + 2) > this.slides.length ){
          this.moduleEnd = true
        }

      },
      decrementPosition: function () {
        this.slidePosition = this.slidePosition - 1
        this.progressPercent = this.progressPercent - (100 / this.slides.length)
        this.pos = 0;
        this.moduleEnd = false
        if(this.slidePosition === 0){
          this.notFirstSlide = false
        }
        if(this.slides.tooltips){
          this.slides.tooltips.forEach(function(tip){
            tip.current = false
          })
          this.slides.tooltips[0].current = true;
        }   
        // if theres a tour
        if(this.slides[this.slidePosition].tour || this.slides[this.slidePosition].tourQuiz || this.slides[this.slidePosition].quiz){
          this.notFirstSlide = true
          this.disableBtn = true
          this.noButton = false
        } else {
          this.disableBtn = false
        }
        // cycle tips
        if(this.slides[this.slidePosition].tooltips){
          this.slides[this.slidePosition].tooltips.forEach(function(tip){
            tip.current = false
          })
          this.slides[this.slidePosition].tooltips[0].current = true;
        }

        if( (this.slidePosition + 3) > this.slides.length ){
            this.quizDisable = false
        }

      },
      nextTip: function (tip, tipArray) {
        this.pos = this.pos + 1;
        tip.current = false;
        tipArray[this.pos].current = true;
        // check if its the last tip
        if( (this.pos + 2) > tipArray.length ){
          this.disableBtn = false;
          this.tourStarting = false;
          this.noButton = true
        } else {
          this.disableBtn = true;
          this.noButton = false
        }
      },
      moduleComplete(e, c){
        this.$bus.$emit('moduleChosen', c)
      },
      answer: function(e){
        if (e == this.slides[this.slidePosition].answer){
          this.slides[this.slidePosition].correct = true
          this.slides[this.slidePosition].incorrect = false
          this.quizDisable = false
          this.disableBtn = true
        } else {
          this.slides[this.slidePosition].incorrect = true
          this.slides[this.slidePosition].correct = false
          this.quizDisable = false
          this.disableBtn = true
        }
      },
      checkAnswer: function(e){
        const checkboxes = this.$el.querySelectorAll('.md-checkbox-container input')
        const checkboxChecked = [];
        for(var i = 0; i < checkboxes.length; i++) {
          if(checkboxes[i].checked && (checkboxes[i].value === "true")) {
              checkboxChecked.push(checkboxes[i]);
          }
        }
        if(checkboxChecked.length === e) {
          this.incorrect = false
          this.correct = true
          this.disableBtn = false 
        } 
        else {
          this.incorrect = true
          this.correct = false
          this.disableBtn = false
        }
      },
      buttonPressed: function(e){
        if(e === this.slides[this.slidePosition].answer){
          this.slides[this.slidePosition].correct = true
          this.disableBtn = false;
        } else {
          this.slides[this.slidePosition].correct = false
          this.disableBtn = false;
        }
      },
      openDialog(ref) {
        this.$refs[ref].open();
      },
      closeDialog(ref) {
        this.$refs[ref].close();
      },
      onOpen() {
        console.log('Opened');
      },
      onClose(type) {
        console.log('Closed', type);
      },
      moduleSelected(e){
        this.moduleTitle = this.modules[e].title;
      },
      print: function(){
        window.print()
      }
    },
    created: function() {
       var self = this;
       this.$bus.$on('moduleTitle', function (e) {
          self.moduleTitle = self.modules[e].title;
          self.slidePosition = 0
       })
    }
}

export default mixin
