<template>
  <div>
    <md-card class="moduleWrapper">
      <md-card-content class="module moduleOne">
        <md-card md-with-hover class="card" v-bind:class="{ dark: slides[slidePosition].isDark, layoutTwo: slides[slidePosition].layout2, layoutThree: slides[slidePosition].layout3, layoutFour: slides[slidePosition].layout4, listLeft: slides[slidePosition].listLeft, tourSlide: slides[slidePosition].tour || slides[slidePosition].device, tourQuiz: slides[slidePosition].tourQuiz, listsText: slides[slidePosition].listsText, elements: slides[slidePosition].elements, fin: slides[slidePosition].fin, quizSlide: slides[slidePosition].quiz }" > 
          <md-card-area md-inset>
          
          <transition-group name="fade">
            <!-- <p v-bind:key="slides[slidePosition].id" v-model="sub">{{slides[slidePosition].title}}</p> -->
          </transition-group>
          <transition-group name="slide-left">
              <!-- <h3 v-if="slides[slidePosition].title" v-bind:key="slides[slidePosition].id">{{slides[slidePosition].title}}</h3> -->
              <div class="lineWrap" v-if="slides[slidePosition].lines || slides[slidePosition].links" v-bind:key="slides[slidePosition].id">
                <p v-for="line in slides[slidePosition].lines" v-bind:class="{bold: line.b, orange: line.o}">{{line.text}}</p>
                <p v-for="link in slides[slidePosition].links" v-bind:class="{bold: link.b, orange: link.o}" v-on:click="jumpTo(link.jump)"">{{link.a}}</p>
              </div>
              
              <img v-if="slides[slidePosition].img" class="device" v-bind:src="slides[slidePosition].img" v-bind:class="{charger: slides[slidePosition].charger}" alt="Body Guard" v-bind:key="slides[slidePosition].id">

              <!-- // modal -->
              <div class="wrap" v-if="slides[slidePosition].modal" v-bind:key="slides[slidePosition].id">
                <img class="device" v-bind:src="slides[slidePosition].modalImg" alt="Body Guard" v-bind:key="slides[slidePosition].id">
                <md-button v-if="slides[slidePosition].modal" class="md-primary md-raised modal" id="modal" @click.native="openDialog('pop')" v-bind:key="slides[slidePosition].id"><img v-bind:src="slides[slidePosition].modalIcon" alt="Features">Full list of features</md-button>
                <md-dialog v-if="slides[slidePosition].modal" md-open-from="#modal" md-close-to="#modal" ref="pop" v-bind:key="slides[slidePosition].id">
                  <md-dialog-content> 
                    <div class="inner">
                      <md-button class="md-primary close" @click.native="closeDialog('pop')">X</md-button>
                      <p class="bold">The BodyGuard 323 Color Vision™ system is intended for patients who require maintenance medication, analgesics, PCA therapy, parenteral, chemotherapeutic agents, and general fluids therapy in hospital and home care environments. </p>

                      <p class="bold">The BodyGuard 323 Color Vision™ infusion pump system is designed for infusion of medications or fluids requiring continuous or intermittent delivery at precisely-controlled infusion rates through clinically acceptable routes of administration, including intravenous, subcutaneous, percutaneous, intra-arterial, epidural, in close proximity to nerves, and into an intraoperative site (soft tissue/body cavity/surgical wound site).</p>

                      <p class="orange bold">The BodyGuard 323 Color Vision™ system provides the following features:</p>
                      <ul>
                        <li>Small, light and compact pump ideal for ambulatory use both in hospital and homecare environment.</li>
                        <li>Highly accurate fluid delivery operated with a custom safe administration set</li>
                        <li>Rechargeable internal lithium-Polymer battery or alkaline 2X9V batteries</li>
                        <li>Battery charged in a pole mount charging cradle or with an A/C adaptor</li>
                        <li>Quiet operation</li>
                        <li>Used for ambulatory care in a carrying pouch or mounted on an IV pole</li>
                        <li>AEA – Suitable to be used in ambulances</li>
                        <li>Access to events log and history functions</li>
                      </ul>

                      <p class="orange bold">Safety features: </p>
                      <ul>
                        <li>Free flow protection valve standard on every CME administration set</li>
                        <li>Air-in-line accumulation system in addition to the standard single bubble detection</li>
                        <li>The anti-bolus function designed to reduce the bolus that may occur upon the release of an occlusion following a downstream occlusion alarm.</li>
                      </ul>

                      <p class="orange bold">Multiple Programs makes it adaptable to different clinical applications:</p>
                      <p class="bold">1.Continous</p>
                      <ul>
                        <li>Infusion Rate: 0.1 to 1200 ml/hr</li>
                        <li>Volume: 0.1 to 99.9 ml in 0.1ml increments or 1 to 9999 ml in 1ml increments</li>
                        <li>Secondary Infusion programmable and Bolus programmable</li>
                      </ul>
                      <p class="bold">2. PCA</p>
                      <ul> 
                        <li>Patient Control Analgesia: Continuous delivery plus /or programmed boluses.</li>
                        <li>Bolus Volume: 0-25.5 ml</li>
                        <li>Clinician Bolus Volume: 0.1-100ml</li>
                        <li>Bolus Rate: 0.1-1200 ml/h</li>
                      </ul>
                      <p class="bold">3. TPN</p>
                      <ul>
                        <li>Total Parenteral Nutrition Rate Taper program with programmable up and down times.</li>
                      </ul>
                      <p class="bold">4. Intermittent</p>
                      <ul>
                        <li>A set dose delivered in set intervals. Between Intervals the pump will keep vain open (KVO Mode).</li>
                      </ul>
                      <p class="bold">5. 25 Steps</p>
                      <ul>
                        <li>Operator can design a specific protocol for drug delivery which contains up to 25 steps.</li>
                        <li>Infusion Rate: 0.1 to 1200 ml/hr</li>
                        <li>Volume: up to 9999ml, for each step</li>
                        <li>Accumulated Volume for all steps – up to 10 liters, or in volume over time mode.</li>
                      </ul>
                      <p class="bold">6. Drug Library</p>
                      <ul> 
                        <li>Continuous program, as above, comprises 128 drug protocols based on patient data. Protocols have hard and soft limits for added patient safety.</li>
                        <li>Please always refer to the DFU (direction for use) in case of any doubt.</li>
                      </ul>
                    </div>
                  </md-dialog-content>
                </md-dialog>
              </div>
              
              <!-- if list -->
              <div v-if="slides[slidePosition].lists" class="listWrap" v-bind:key="slides[slidePosition].id">
                <ul v-for="list in slides[slidePosition].lists" >
                  <li class="listTitle" v-if="list.title" v-bind:class="{bold: list.b, orange: list.o}">{{list.title}}</li>
                  <li class="listItem" v-for="item in list.items" v-bind:class="{bold: list.b, orange: list.o}">{{item.text}}</li>
                </ul>
                <a v-bind:key="slides[slidePosition].id" v-if="slides[slidePosition].linkHref" v-bind:href="slides[slidePosition].linkHref" target="_blank">{{slides[slidePosition].linkText}}</a>
              </div>
              <!-- elements -->
              <div class="els" v-if="slides[slidePosition].els" v-for="el in slides[slidePosition].els" v-bind:key="slides[slidePosition].id">
                <div class="wrap">
                  <img v-bind:src="el.img" alt="Body Guard">
                </div>
                <p>{{el.t}}</p>
              </div>
              <!-- /if second image -->
              <div v-if="slides[slidePosition].img2" class="shiftWrap" v-bind:key="slides[slidePosition].id">
                <img v-bind:src="slides[slidePosition].img2" alt="Body Guard">
              </div>
              <!-- tour Quiz -->
              <div class="tourQuizText" v-if="slides[slidePosition].tourQuiz" v-bind:key="slides[slidePosition].id">
                <p v-bind:key="slides[slidePosition].id">{{slides[slidePosition].text}}</p>
                <!-- <h3 v-if="slides[slidePosition].tourQuiz" >{{slides[slidePosition].questionNo}}</h3> -->
                <h4 v-if="slides[slidePosition].tourQuiz" v-for="tip in slides[slidePosition].tooltips">{{tip.question}}</h4>
                <!-- <p v-if="slides[slidePosition].correct" class="feedback"><img src="../assets/tick.png" alt="">Correct</p> -->
                <!-- <p v-if="slides[slidePosition].correct === false" class="feedback"><img src="../assets/cross.png" alt="">Incorrect</p> -->
                <md-button v-if="slides[slidePosition].correct" class="md-accent md-raised"><img src="../assets/tick.png" alt="">Correct</md-button>
                <md-button v-if="slides[slidePosition].correct === false" class="md-accent md-raised"><img src="../assets/cross.png" alt="">Incorrect</md-button>
              </div>
              <!-- device tooltips -->
              <img class="device-tip" v-bind:class="{current: tip.current}" v-if="tip.img" v-for="tip in slides[slidePosition].tooltips" v-bind:src="tip.img"  alt="Body Guard" v-bind:key="slides[slidePosition].id">
              <ul v-for="tip in slides[slidePosition].tooltips" class="tooltips" v-bind:class="{current: tip.current}" v-bind:key="slides[slidePosition].id">
                <!-- <img class="device-tip" v-bind:src="tip.img" alt="Body Guard"> -->
                <li class="tipTitle" v-bind:class="{bold: tip.b, orange: tip.o}">{{tip.title}}</li>
                <li class="tipItem" v-for="item in tip.items" v-bind:class="{bold: item.b, orange: item.o}">{{item.text}}</li>
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
                <div class="glowButton" v-bind:class="{display: tip.displayButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                  <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
                </div>
                <div class="glowButton" v-bind:class="{release: tip.releaseButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                  <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
                </div>
                <div class="glowButton" v-bind:class="{charger: tip.chargerButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                  <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
                </div>
                <div class="glowButton" v-bind:class="{pump: tip.pumpButton, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                  <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
                </div>
                <div class="glowButton" v-bind:class="{open1: tip.open1, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                  <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
                </div>
                <div class="glowButton" v-bind:class="{open2: tip.open2, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                  <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
                </div>
                <div class="glowButton" v-bind:class="{open3: tip.open3, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                  <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
                </div>
                <div class="glowButton" v-bind:class="{open4: tip.open4, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                  <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
                </div>
                <div class="glowButton" v-bind:class="{open5: tip.open5, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                  <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
                </div>
                <div class="glowButton" v-bind:class="{open6: tip.open6, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                  <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
                </div>
                <div class="glowButton" v-bind:class="{open7: tip.open7, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                  <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
                </div>
                <div class="glowButton" v-bind:class="{open8: tip.open8, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                  <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
                </div>
                <div class="glowButton" v-bind:class="{open9: tip.open9, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                  <md-button class="md-icon-button"@click.native="nextTip(tip, slides[slidePosition].tooltips)"></md-button>
                </div>
              </div>

              <div class="tourQuiz" v-if="slides[slidePosition].tourQuiz" v-bind:key="slides[slidePosition].id">
                <div class="glowButton" v-bind:class="{bar: tip.bar, current: tip.current, noButton: noButton}" v-for="tip in slides[slidePosition].tooltips">
                  <md-button class="md-icon-button"@click.native="buttonPressed('bar')"></md-button>
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
              <!-- video slide -->
              <div v-if="slides[slidePosition].video" class="video" v-bind:key="slides[slidePosition].id">
                <div style="position:relative;height:0;padding-bottom:75.0%"><iframe v-bind:src="slides[slidePosition].video" width="480" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>
              </div>
              <!-- only show if button needed -->
              <div v-if="slides[slidePosition].button" v-bind:key="slides[slidePosition].id">
                <md-button class="md-icon-button" @click.native="incrementPosition">{{slides[slidePosition].button}} </md-button>
              </div>

              <div v-if="slides[slidePosition].quiz" class="quiz" v-bind:key="slides[slidePosition].id">
                <h4>{{slides[slidePosition].question}}</h4>
                <div v-if="slides[slidePosition].multiAnswer">
                  <md-checkbox v-if="slides[slidePosition].answers[0]" id="answer1" v-model="answer1" value="right" class="md-primary" >{{slides[slidePosition].answers[0].text}}</md-checkbox>
                  <md-checkbox v-if="slides[slidePosition].answers[1]" id="answer2" v-model="answer2" value="right" class="md-primary" >{{slides[slidePosition].answers[1].text}}</md-checkbox>
                  <md-checkbox v-if="slides[slidePosition].answers[2]" id="answer3" v-model="answer3" value="right" class="md-primary" >{{slides[slidePosition].answers[2].text}}</md-checkbox>
                  <md-button class="md-accent md-raised" @click.native="checkAnswer(3)">Check Answer</md-button>
                  <md-button v-if="correct" class="md-accent md-raised"><img src="../assets/tick.png" alt="">Correct</md-button>
                  <md-button v-if="incorrect" class="md-accent md-raised"><img src="../assets/cross.png" alt="">Incorrect</md-button>
                  <p v-if="incorrect">The correct answer is all three</p>
                </div>
                
                <div v-if="slides[slidePosition].singleAnswerOne">
                  <md-radio v-if="slides[slidePosition].answers[0]" v-model="answer1" id="answer1" name="group1" md-value="1" @click.native="answer(1)">{{slides[slidePosition].answers[0].text}}</md-radio>
                  <md-radio v-if="slides[slidePosition].answers[1]" v-model="answer1" id="answer2" name="group1" md-value="2" @click.native="answer(2)">{{slides[slidePosition].answers[1].text}}</md-radio>
                  <!-- <md-button class="md-accent md-raised" @click.native="checkAnswer(3)">Check Answer</md-button> -->
                  <md-button v-if="slides[slidePosition].correct" class="md-accent md-raised"><img src="../assets/tick.png" alt="">Correct</md-button>
                  <md-button v-if="slides[slidePosition].incorrect" class="md-accent md-raised"><img src="../assets/cross.png" alt="">Incorrect</md-button>
                  <p v-if="slides[slidePosition].incorrect">The correct answer is multiple programs to adapt to different clinical applications</p>
                </div>

                <div v-if="slides[slidePosition].singleAnswerTwo">
                  <md-radio v-if="slides[slidePosition].answers[0]" v-model="answer2" id="answer1" name="group1" md-value="1" @click.native="answer(1)">{{slides[slidePosition].answers[0].text}}</md-radio>
                  <md-radio v-if="slides[slidePosition].answers[1]" v-model="answer2" id="answer2" name="group1" md-value="2" @click.native="answer(2)">{{slides[slidePosition].answers[1].text}}</md-radio>
                  <md-button v-if="slides[slidePosition].correct" class="md-accent md-raised"><img src="../assets/tick.png" alt="">Correct</md-button>
                  <md-button v-if="slides[slidePosition].incorrect" class="md-accent md-raised"><img src="../assets/cross.png" alt="">Incorrect</md-button>
                  <p v-if="slides[slidePosition].incorrect">The correct answer is True</p>
                </div>
                
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
        <router-link to='/front' >
          <img class="home" src="../assets/home.svg" alt="Front Page">
        </router-link>
        <div v-if="notFirstSlide">
          <div class="imgWrap next" v-bind:class="{disabled: disableBtn, tourHide: tourStarting, quizDisable: quizDisable, moduleEnd: moduleEnd}" v-on:click="incrementPosition(slidePosition)">
            <p>Next</p><img src="../assets/arrow-right-thick.svg" alt="Next">
          </div>
          <div v-if="moduleEnd" class="imgWrap next">
            <router-link v-on:click.native="moduleComplete(1, 2)" to='/module-2'><p>Next</p><img src="../assets/arrow-right-thick.svg" alt="Next"></router-link>
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

import moduleOne from '../components/moduleOne.js'
import mixin from '../components/mixin.js'

const slideCount = moduleOne.length
const step = 100 / slideCount
let pos = 0;

export default {
  name: 'module1',
  data () {
    return {
      slides: moduleOne,
      moduleTitle: 'Module 1 - <span>Features</span>',
      progressPercent: step,
    }
  },
  mixins: [mixin]
}

</script>
