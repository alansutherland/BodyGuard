<template>
  <div>
    <md-card class="moduleWrapper">
      <md-card-content class="module">
        <md-card md-with-hover class="card moduleTwo" v-bind:class="{ dark: slides[slidePosition].isDark, layoutTwo: slides[slidePosition].layout2, layoutThree: slides[slidePosition].layout3, layoutFour: slides[slidePosition].layout4, layoutFive: slides[slidePosition].layout5, listLeft: slides[slidePosition].listLeft, tourQuiz: slides[slidePosition].tourQuiz, listsText: slides[slidePosition].listsText, modeStart: slides[slidePosition].modeStart, quizSlide: slides[slidePosition].quiz, tourSlide: slides[slidePosition].tour || slides[slidePosition].device }" > 
          <md-card-area md-inset>
          
          <transition-group name="fade">
            <img v-if="slides[slidePosition].fadeImg" class="device" v-bind:src="slides[slidePosition].fadeImg" alt="Body Guard" v-bind:key="slides[slidePosition].id">
            <div class="copy" v-bind:key="slides[slidePosition].id" >
              <h3 v-if="slides[slidePosition].fadeTitle" v-bind:key="slides[slidePosition].id">{{slides[slidePosition].fadeTitle}}</h3>
              <!-- if list -->
              <div v-for="list in slides[slidePosition].fadeLists" v-bind:key="slides[slidePosition].id">
                <!-- <h2 class="listTitle" v-if="list.title">{{list.title}}</h2> -->
                <p v-for="item in list.items" v-bind:class="{bold: item.b}">
                  <span v-if="item.span" v-bind:class="{bold: item.b, orange: item.o}">{{item.span}}</span>
                  {{item.text}}
                </p>
              </div>
              <ul v-for="list in slides[slidePosition].lists" v-bind:key="slides[slidePosition].id">
                <li class="listTitle" v-if="list.title">{{list.title}}</li>
                <li class="listItem" v-for="item in list.items" v-bind:class="{bold: item.b}">{{item.text}}</li>
              </ul>
              <!-- only show if button needed -->
              <div v-if="slides[slidePosition].fadeButton" v-bind:key="slides[slidePosition].id">
                <md-button class="md-icon-button" @click.native="incrementPosition">{{slides[slidePosition].fadeButton}} </md-button>
              </div>
            </div>

            <!-- tour Quiz -->
            <div class="tourQuizText" v-if="slides[slidePosition].tourQuiz" v-bind:key="slides[slidePosition].id">
              <p v-bind:key="slides[slidePosition].id">{{slides[slidePosition].text}}</p>
              <h3 v-if="slides[slidePosition].tourQuiz" >{{slides[slidePosition].questionNo}}</h3>
              <h4 v-if="slides[slidePosition].tourQuiz" v-for="tip in slides[slidePosition].tooltips">{{tip.question}}</h4>
              <md-button v-if="slides[slidePosition].correct" class="md-accent md-raised"><img src="../assets/tick.png" alt="">Correct</md-button>
              <md-button v-if="slides[slidePosition].correct === false" class="md-accent md-raised"><img src="../assets/cross.png" alt="">Incorrect</md-button>
            </div>

            <!-- device tooltips -->
            <img class="device-tip" v-bind:class="{current: tip.current}" v-if="tip.img" v-for="tip in slides[slidePosition].tooltips" v-bind:src="tip.img"  alt="Body Guard" v-bind:key="slides[slidePosition].id">
            <ul v-for="tip in slides[slidePosition].tooltips" v-if="tip.text" v-bind:class="{current: tip.current}" v-bind:key="slides[slidePosition].id">
              <!-- <img class="device-tip" v-bind:src="tip.img" alt="Body Guard"> -->
              <li class="tipTitle">{{tip.title}}</li>
              <li class="tipItem" v-for="item in tip.items" v-bind:class="{bold: item.b}">{{item.text}}</li>
              <ul class="tipList" v-if="tip.lists">
                <li v-for="list in tip.lists">{{list.text}}</li>
              </ul>
              <!-- only show if tooltip button needed -->
            </ul>

            <div class="glow" v-bind:key="slides[slidePosition].id">
              <div v-if="tip.bar" class="glowButton" v-bind:class="{bar: tip.bar, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
              </div>
              <div v-if="tip.stopButton" class="glowButton" v-bind:class="{stopButton: tip.stopButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
              </div>
              <div v-if="tip.startButton" class="glowButton" v-bind:class="{startButton: tip.startButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
              </div>
              <div v-if="tip.primeButton" class="glowButton" v-bind:class="{primeButton: tip.primeButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
              </div>
              <div v-if="tip.powerButton" class="glowButton" v-bind:class="{powerButton: tip.powerButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
              </div>
              <div v-if="tip.lockButton" class="glowButton" v-bind:class="{lock: tip.lockButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
              </div>
              <div v-if="tip.infoButton" class="glowButton" v-bind:class="{infoButton: tip.infoButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
              </div>
              <div v-if="tip.numbers" class="glowButton" v-bind:class="{numbers: tip.numbers, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
              </div>
              <div v-if="tip.arrows" class="glowButton" v-bind:class="{arrows: tip.arrows, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
              </div>
              <div v-if="tip.LED" class="glowButton" v-bind:class="{LED: tip.LED, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
              </div>
            </div>

            <div class="tourQuiz" v-if="slides[slidePosition].tourQuiz" v-bind:key="slides[slidePosition].id">
              <div class="glowButton" v-bind:class="{bar: tip.bar, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="buttonPressed('bar')"></md-button>
              </div>
              <div class="glowButton" v-bind:class="{barLeft: tip.barLeft, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button" @click.native="buttonPressed('barLeft')"></md-button>
              </div>
              <div class="glowButton" v-bind:class="{barRight: tip.barRight, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button" @click.native="buttonPressed('barRight')"> </md-button>
              </div>
              <div class="glowButton" v-bind:class="{bolus: tip.bolus, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button" @click.native="buttonPressed('bolus')">  </md-button>
              </div>
              <div class="glowButton" v-bind:class="{rate: tip.rate, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button" @click.native="buttonPressed('rate')"> </md-button>
              </div>
              <div class="glowButton" v-bind:class="{stopButton: tip.stopButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="buttonPressed('stop')"></md-button>
              </div>
              <div class="glowButton" v-bind:class="{startButton: tip.startButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="buttonPressed('start')"></md-button>
              </div>
              <div class="glowButton" v-bind:class="{primeButton: tip.primeButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="buttonPressed('prime')"></md-button>
              </div>
              <div class="glowButton" v-bind:class="{powerButton: tip.powerButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="buttonPressed('power')"></md-button>
              </div>
              <div class="glowButton" v-bind:class="{lock: tip.lockButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="buttonPressed('lock')"></md-button>
              </div>
              <div class="glowButton" v-bind:class="{infoButton: tip.infoButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="buttonPressed('info')"></md-button>
              </div>
              <div class="glowButton" v-bind:class="{numbers: tip.numbers, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="buttonPressed('numbers')"></md-button>
              </div>
              <div class="glowButton" v-bind:class="{arrows: tip.arrows, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="buttonPressed('arrows')"></md-button>
              </div>
              <div class="glowButton" v-bind:class="{LED: tip.LED, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                <md-button class="md-icon-button"@click.native="buttonPressed('LED')"></md-button>
              </div>
            </div>
            
            <img v-if="slides[slidePosition].img" class="device" v-bind:src="slides[slidePosition].img" alt="Body Guard" v-bind:key="slides[slidePosition].id">
            <div v-if="slides[slidePosition].quiz" class="quiz" v-bind:key="slides[slidePosition].id">
              <h4>{{slides[slidePosition].question}}</h4>
              <div v-if="slides[slidePosition].singleAnswerOne">
                <md-radio v-if="slides[slidePosition].answers[0]" v-model="answer2" id="answer1" name="group1" md-value="1" @click.native="answer(1)">{{slides[slidePosition].answers[0].text}}</md-radio>
                <md-radio v-if="slides[slidePosition].answers[1]" v-model="answer2" id="answer2" name="group1" md-value="2" @click.native="answer(2)">{{slides[slidePosition].answers[1].text}}</md-radio>
                <md-button v-if="slides[slidePosition].correct" class="md-accent md-raised"><img src="../assets/tick.png" alt="">Correct</md-button>
                <md-button v-if="slides[slidePosition].incorrect" class="md-accent md-raised"><img src="../assets/cross.png" alt="">Incorrect</md-button>
                <p v-if="slides[slidePosition].incorrect">The correct answer is True</p>
              </div> 
            </div>

          </transition-group>

          <transition-group name="slide-left">
              <!-- <h3 v-if="slides[slidePosition].title" v-bind:key="slides[slidePosition].id">{{slides[slidePosition].title}}</h3> -->
              <p v-for="line in slides[slidePosition].lines" v-bind:key="slides[slidePosition].id" v-bind:class="{bold: line.b}">{{line.text}}</p>
              <!-- if list -->
              <!-- <ul class="copy" v-for="list in slides[slidePosition].lists" v-bind:key="slides[slidePosition].id">
                <li class="listTitle" v-if="list.title">{{list.title}}</li>
                <li class="listItem" v-for="item in list.items" v-bind:class="{bold: item.b}">{{item.text}}</li>
              </ul> -->
              <a v-bind:key="slides[slidePosition].id" v-bind:href="slides[slidePosition].linkHref" target="_blank">{{slides[slidePosition].linkText}}</a>
              <!-- <img v-if="slides[slidePosition].img" class="device" v-bind:src="slides[slidePosition].img" alt="Body Guard" v-bind:key="slides[slidePosition].id"> -->
              <!-- /if second image -->
              <div v-if="slides[slidePosition].img2" class="shiftWrap" v-bind:key="slides[slidePosition].id">
                <img v-bind:src="slides[slidePosition].img2" alt="Body Guard">
              </div>
              
              <!-- video slide -->
              <div v-if="slides[slidePosition].video" class="video" v-bind:key="slides[slidePosition].id">
                <div style="position:relative;height:0;padding-bottom:75.0%"><iframe v-bind:src="slides[slidePosition].video" width="480" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>
              </div>
              <!-- only show if button needed -->
              <div v-if="slides[slidePosition].button" v-bind:key="slides[slidePosition].id">
                <md-button class="md-icon-button" @click.native="incrementPosition">{{slides[slidePosition].button}} </md-button>
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
          <div class="imgWrap next" v-bind:class="{disabled: disableBtn, tourHide: tourStarting, quizDisable: quizDisable, moduleEnd: moduleEnd}" v-on:click="incrementPosition(slidePosition)">
            <p>Next</p><img src="../assets/arrow-right-thick.svg" alt="Next">
          </div>
          <div v-if="moduleEnd" class="imgWrap next">
            <router-link v-on:click.native="modeComplete(3)" to='/module-2'><p>Next</p><img src="../assets/arrow-right-thick.svg" alt="Next"></router-link>
          </div>
          <div class="imgWrap prev md-disabled" v-on:click="decrementPosition">
            <img src="../assets/arrow-left-thick.svg" alt="Prev"><p>Prev</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="x/templates">

import tpn from '../components/tpn.js'
import mixin from '../components/mixin.js'

const slideCount = tpn.length
const step = 100 / slideCount

let pos = 0;

export default {
  name: 'tpn',
  data () {
    return {
      slides: tpn,
      moduleTitle: 'Module 2 - <span>Modes of operation</span>',
      progressPercent: step
    }
  },
  mixins: [mixin]
}

</script>
