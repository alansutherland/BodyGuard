<template>
  <div>
    <md-card class="moduleWrapper">
      <md-card-content class="module">
        <md-card md-with-hover class="card moduleTwo moduleSeven" v-bind:class="{ dark: slides[slidePosition].isDark, layoutTwo: slides[slidePosition].layout2, layoutThree: slides[slidePosition].layout3, layoutFour: slides[slidePosition].layout4, layoutFive: slides[slidePosition].layout5, listLeft: slides[slidePosition].listLeft, tourQuiz: slides[slidePosition].tourQuiz, listsText: slides[slidePosition].listsText, modeStart: slides[slidePosition].modeStart, cert: slides[slidePosition].cert, thanks: slides[slidePosition].thanks, tourSlide: slides[slidePosition].tour || slides[slidePosition].device }" > 
          <md-card-area md-inset>
          
          <transition-group name="fade">

            <img v-if="slides[slidePosition].fadeImg" class="device" v-bind:src="slides[slidePosition].fadeImg" alt="Body Guard" v-bind:key="slides[slidePosition].id">
            
            <div v-if="slides[slidePosition].quiz" class="quiz" v-bind:key="slides[slidePosition].id">
              <h4>{{slides[slidePosition].question}}</h4>
              
              <div v-if="slides[slidePosition].singleAnswerOne">
                <md-radio v-if="slides[slidePosition].answers[0]" v-model="answer1" id="answer1" name="group1" md-value="1" @click.native="test(1)">{{slides[slidePosition].answers[0].text}}</md-radio>
                <md-radio v-if="slides[slidePosition].answers[1]" v-model="answer1" id="answer2" name="group1" md-value="2" @click.native="test(2)">{{slides[slidePosition].answers[1].text}}</md-radio>
                <md-radio v-if="slides[slidePosition].answers[2]" v-model="answer1" id="answer3" name="group1" md-value="3" @click.native="test(3)">{{slides[slidePosition].answers[2].text}}</md-radio>
                <md-radio v-if="slides[slidePosition].answers[3]" v-model="answer1" id="answer4" name="group1" md-value="4" @click.native="test(4)">{{slides[slidePosition].answers[3].text}}</md-radio>
                <md-button v-if="slides[slidePosition].correct" class="md-accent md-raised"><img src="../assets/tick.png" alt="">Correct</md-button>
                <md-button v-if="slides[slidePosition].incorrect" class="md-accent md-raised"><img src="../assets/cross.png" alt="">Incorrect</md-button>
                <h6>Question 1 of 5</h6>
                <!-- <p v-if="slides[slidePosition].incorrect">The correct answer is supplies information about the pump and its programs</p> -->
              </div>

              <div v-if="slides[slidePosition].multiAnswer">
                <md-checkbox v-if="slides[slidePosition].answers[0]" id="answer1" v-model="answer5" value="right" class="md-primary" >{{slides[slidePosition].answers[0].text}}</md-checkbox>
                <md-checkbox v-if="slides[slidePosition].answers[1]" id="answer2" v-model="answer6" value="right" class="md-primary" >{{slides[slidePosition].answers[1].text}}</md-checkbox>
                <md-checkbox v-if="slides[slidePosition].answers[2]" id="answer3" v-model="answer7" value="right" class="md-primary" >{{slides[slidePosition].answers[2].text}}</md-checkbox>
                <md-button class="md-accent md-raised" @click.native="testMulti()">Check Answer</md-button>
                <md-button v-if="slides[slidePosition].correct" class="md-accent md-raised"><img src="../assets/tick.png" alt="">Correct</md-button>
                <md-button v-if="slides[slidePosition].incorrect" class="md-accent md-raised"><img src="../assets/cross.png" alt="">Incorrect</md-button>
                <h6>Question 2 of 5</h6>
              </div>

              <div v-if="slides[slidePosition].singleAnswerTwo">
                <md-radio v-if="slides[slidePosition].answers[0]" v-model="answer2" id="answer1" name="group1" md-value="1" @click.native="test(1)">{{slides[slidePosition].answers[0].text}}</md-radio>
                <md-radio v-if="slides[slidePosition].answers[1]" v-model="answer2" id="answer2" name="group1" md-value="2" @click.native="test(2)">{{slides[slidePosition].answers[1].text}}</md-radio>
                <md-radio v-if="slides[slidePosition].answers[2]" v-model="answer2" id="answer3" name="group1" md-value="3" @click.native="test(3)">{{slides[slidePosition].answers[2].text}}</md-radio>
                <md-radio v-if="slides[slidePosition].answers[3]" v-model="answer2" id="answer4" name="group1" md-value="4" @click.native="test(4)">{{slides[slidePosition].answers[3].text}}</md-radio>
                <md-button v-if="slides[slidePosition].correct" class="md-accent md-raised"><img src="../assets/tick.png" alt="">Correct</md-button>
                <md-button v-if="slides[slidePosition].incorrect" class="md-accent md-raised"><img src="../assets/cross.png" alt="">Incorrect</md-button>
                <h6>Question 3 of 5</h6>
                <!-- <p v-if="slides[slidePosition].incorrect">The correct answer is True.</p> -->
              </div>

              <div v-if="slides[slidePosition].singleAnswerThree">
                <md-radio v-if="slides[slidePosition].answers[0]" v-model="answer3" id="answer1" name="group1" md-value="1" @click.native="test(1)">{{slides[slidePosition].answers[0].text}}</md-radio>
                <md-radio v-if="slides[slidePosition].answers[1]" v-model="answer3" id="answer2" name="group1" md-value="2" @click.native="test(2)">{{slides[slidePosition].answers[1].text}}</md-radio>
                <md-radio v-if="slides[slidePosition].answers[2]" v-model="answer3" id="answer3" name="group1" md-value="3" @click.native="test(3)">{{slides[slidePosition].answers[2].text}}</md-radio>
                <md-radio v-if="slides[slidePosition].answers[3]" v-model="answer3" id="answer4" name="group1" md-value="4" @click.native="test(4)">{{slides[slidePosition].answers[3].text}}</md-radio>
                <md-button v-if="slides[slidePosition].correct" class="md-accent md-raised"><img src="../assets/tick.png" alt="">Correct</md-button>
                <md-button v-if="slides[slidePosition].incorrect" class="md-accent md-raised"><img src="../assets/cross.png" alt="">Incorrect</md-button>
                <h6>Question 4 of 5</h6>
                <!-- <p v-if="slides[slidePosition].incorrect">The correct answer is upto 25 doses.</p> -->
              </div>

              <div v-if="slides[slidePosition].singleAnswerFour">
                <md-radio v-if="slides[slidePosition].answers[0]" v-model="answer4" id="answer1" name="group1" md-value="1" @click.native="test(1)">{{slides[slidePosition].answers[0].text}}</md-radio>
                <md-radio v-if="slides[slidePosition].answers[1]" v-model="answer4" id="answer2" name="group1" md-value="2" @click.native="test(2)">{{slides[slidePosition].answers[1].text}}</md-radio>
                <md-radio v-if="slides[slidePosition].answers[2]" v-model="answer4" id="answer3" name="group1" md-value="3" @click.native="test(3)">{{slides[slidePosition].answers[2].text}}</md-radio>
                <md-radio v-if="slides[slidePosition].answers[3]" v-model="answer4" id="answer4" name="group1" md-value="4" @click.native="test(4)">{{slides[slidePosition].answers[3].text}}</md-radio>
                <md-button v-if="slides[slidePosition].correct" class="md-accent md-raised"><img src="../assets/tick.png" alt="">Correct</md-button>
                <md-button v-if="slides[slidePosition].incorrect" class="md-accent md-raised"><img src="../assets/cross.png" alt="">Incorrect</md-button>
                <h6>Question 5 of 5</h6>
                <!-- <p v-if="slides[slidePosition].incorrect">The correct answer is 1,200 ml/hr.</p> -->
              </div>
              <p v-if="slides[slidePosition].correct || slides[slidePosition].incorrect">Your current score is {{score}}</p>
            </div>

          </transition-group>

          <transition-group name="slide-left">

               <md-list class="nav" v-bind:key="slides[slidePosition].id" v-if="slides[slidePosition].modes">
                  <md-list-item class="md-accent" >
                    <span v-on:click="moduleSelected(1)"><router-link to='/module-1'><div class="imgWrap"><img src="../assets/1.svg" alt="Module 1"></div><p>Module 1</p><span>Features</span></router-link></span>
                  </md-list-item>
                  <md-list-item class="md-accent">
                    <span v-on:click="moduleSelected(2)"><router-link to='/module-2'><div class="imgWrap"><img src="../assets/2.svg" alt="Module 2"></div><p>Module 2</p><span>Modes of operation</span></router-link></span>
                  </md-list-item>
                  <md-list-item class="md-accent">
                    <span v-on:click="moduleSelected(3)"><router-link to='/module-3'><div class="imgWrap"><img src="../assets/3.svg" alt="Module 3"></div><p>Module 3</p><span>Alarms &amp; Trouble Shooting</span></router-link></span>
                  </md-list-item>
                  <md-list-item class="md-accent">
                    <span v-on:click="moduleSelected(4)"><router-link to='/module-4'><div class="imgWrap"><img src="../assets/4.svg" alt="Module 4"></div><p>Module 4</p><span>Care &amp; Maintenance</span></router-link></span>
                  </md-list-item>
                  <md-list-item class="md-accent">
                    <span v-on:click="moduleSelected(5)"><router-link to='/module-5'><div class="imgWrap"><img src="../assets/5.svg" alt="Module 5"></div><p>Module 5</p><span>Accessories</span></router-link></span>
                  </md-list-item>
                  <md-list-item class="md-accent">
                    <span v-on:click="moduleSelected(6)"><router-link to='/module-6'><div class="imgWrap"><img src="../assets/6.svg" alt="Module 1"></div><p>Module 6</p><span>Additional Features</span></router-link></span>
                  </md-list-item>
                  <md-list-item class="md-accent">
                    <span v-on:click="moduleSelected(7)"><router-link to='/module-7'><div class="imgWrap"><img src="../assets/7.svg" alt="Module 7"></div><p>Module 7</p><span>Course Summary &amp; Assessment</span></router-link></span>
                  </md-list-item>
              </md-list>
              <!-- <h3 v-if="slides[slidePosition].title" v-bind:key="slides[slidePosition].id">{{slides[slidePosition].title}}</h3> -->
              <p v-for="line in slides[slidePosition].lines" v-bind:key="slides[slidePosition].id" v-bind:class="{bold: line.b, orange: line.o, start: line.s}">{{line.text}}</p>
        
              <a v-bind:key="slides[slidePosition].id" v-if="slides[slidePosition].linkHref"  v-bind:href="slides[slidePosition].linkHref" target="_blank">{{slides[slidePosition].linkText}}</a>
              <img v-if="slides[slidePosition].img" class="device" v-bind:src="slides[slidePosition].img" alt="Body Guard" v-bind:key="slides[slidePosition].id">
              <!-- /if second image -->
              <div v-if="slides[slidePosition].img2" class="shiftWrap" v-bind:key="slides[slidePosition].id">
                <img v-bind:src="slides[slidePosition].img2" alt="Body Guard">
              </div>
              
              <!-- only show if button needed -->
              <div v-if="slides[slidePosition].button" class="btnWrap" v-bind:key="slides[slidePosition].id">
                <md-button class="md-icon-button" @click.native="startTest">{{slides[slidePosition].button}} </md-button>
                <md-button v-if="score >= 80" class="md-icon-button certJump" v-bind:key="slides[slidePosition].id">Get Certificate</md-button>
              </div>

              <div v-if="slides[slidePosition].results" class="results" v-bind:key="slides[slidePosition].id">
                <p>Your score: {{score}}%</p>
                <p>Recommended score: 80%</p>
                <p>Result: <span v-if="score >= 80">Pass!</span><span v-else>Fail</span></p>
                <p>You can either re-try the quiz to improve your score or if you have passed continue to receive your certificate</p>
                <md-button class="md-icon-button" @click.native="resetTest"><router-link to='/module-7'>Retry</router-link></md-button>
                <md-button v-if="score >= 80" class="md-icon-button" @click.native="incrementPosition(slidePosition)">Next</md-button>
              </div>

              <div v-if="slides[slidePosition].cert" class="results" v-bind:key="slides[slidePosition].id">
                <!-- <md-input-container>
                  <label>Enter here your name and surname:</label>
                  <md-input v-model="user" class="md-primary" type="text"></md-input>
                </md-input-container> -->
                <p>Thank you for completing this course. This course has given you a basis to understand how the BodyGuard 323 Color Vision works but further competences need to be developed by use and experience. It’s important you continue to develop your current level of competence. You can review any aspect of the pump by referring to this course content list.</p>
                <!-- // modal -->
                <md-button class="md-primary md-raised modal" id="modal" @click.native="openDialog('pop')" v-bind:key="slides[slidePosition].id">Get Your Certificate</md-button>
                <md-dialog v-if="slides[slidePosition].modal" class="certificate" md-open-from="#modal" md-close-to="#modal" ref="pop" v-bind:key="slides[slidePosition].id">
                  <md-dialog-content> 
                    <md-button class="md-primary close" @click.native="closeDialog('pop')">X</md-button>
                    <md-button class="md-button md-raised print" @click.native="print">Print Your Certificate</md-button>

                    
                  </md-dialog-content>
                </md-dialog>

              </div>

           </transition-group>
          </md-card-area>
        </md-card>
    </md-card-content>
    </md-card>
    <div id="progress">
      <div class="slideWrap">
        <!-- <div class="spikes" >
          <span v-for="slide in slides"></span>
        </div> -->
        <md-progress :md-progress="progressPercent"></md-progress>
      </div>
      <span class="progText">Progress <b>{{Math.trunc(progressPercent)}}%</b></span>
      <div class="progNav" >
        <router-link to='/front'>
          <img class="home" src="../assets/home.svg" alt="Front Page">
        </router-link>
        <div v-if="notFirstSlide">
          <!-- <div class="imgWrap next" v-bind:class="{disabled: disableBtn, tourHide: tourStarting, quizDisable: quizDisable, moduleEnd: moduleEnd}" v-on:click="incrementPosition(slidePosition)">
            <p>Next</p><img src="../assets/arrow-right-thick.svg" alt="Next">
          </div> -->
          <div v-if="moduleEnd" class="imgWrap next">
            <router-link v-on:click.native="moduleComplete(7, 0)" to='/front'><p>Next</p><img src="../assets/arrow-right-thick.svg" alt="Next"></router-link>
          </div>
          <!-- <div class="imgWrap prev md-disabled disabled" v-on:click="decrementPosition">
            <img src="../assets/arrow-left-thick.svg" alt="Prev"><p>Prev</p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script type="x/templates">

import moduleSeven from '../components/moduleSeven.js'
import mixin from '../components/mixin.js'

const slideCount = moduleSeven.length
const step = 100 / slideCount

let pos = 0;

const score = JSON.parse(localStorage.getItem('score'));

export default {
  name: 'module7',
  data () {
    return {
      slides: moduleSeven,
      moduleTitle: 'Module 7 - <span>Course Summary &amp; Assessment</span>',
      progressPercent: step,
      score: 0 || score
    }
  },
  mixins: [mixin],
  methods: {
    startTest: function(){
      this.score = 0;
      localStorage.setItem('score', 0)
      this.slidePosition = this.slidePosition + 1
    },
    test: function(e){
      if (e == this.slides[this.slidePosition].answer){
        this.slides[this.slidePosition].correct = true
        this.slides[this.slidePosition].incorrect = false
        this.score = this.score + 20
      } else {
        this.slides[this.slidePosition].incorrect = true
        this.slides[this.slidePosition].correct = false
      }
      var self = this;
      if(this.slides[this.slidePosition].singleAnswerFour){
        localStorage.setItem('score', self.score)
      }
    },
    testMulti: function(){
      if(this.answer5 && this.answer6 && !this.answer7){
        this.slides[this.slidePosition].correct = true
        this.slides[this.slidePosition].incorrect = false
        this.score = this.score + 20
      } else {
        this.slides[this.slidePosition].correct = false
        this.slides[this.slidePosition].incorrect = true
      }
    },
    resetTest: function(){
      location.reload();
    },
    moduleSelected(e){
      this.$bus.$emit('moduleChosen', e)
    }
  }
}

</script>


