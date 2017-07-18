<template>
  <div>
    <md-card class="moduleWrapper">
      <md-card-content class="module">
        <md-card md-with-hover class="card" v-bind:class="{ dark: slides[slidePosition].isDark, layoutTwo: slides[slidePosition].layout2, layoutThree: slides[slidePosition].layout3, layoutFour: slides[slidePosition].layout4, layoutFive: slides[slidePosition].layout5, listLeft: slides[slidePosition].listLeft, tourQuiz: slides[slidePosition].tourQuiz, listsText: slides[slidePosition].listsText }" > 
          <md-card-area md-inset>
          
          <transition-group name="slide-left" class="twoCol">
                <md-list class="nav" v-if="slides[slidePosition].modes" v-bind:key="slides[slidePosition].id">
                    <md-list-item class="md-accent">
                      <router-link to='/module-2/continous'><div v-on:click="moduleSelected(8)" :class="{ active: activeId == '1' }"><img class="modeImg" src="../assets/modes1.svg" alt=""><p class="modeTitle">Continous</p></div></router-link>
                    </md-list-item>
                    <md-list-item class="md-accent">
                      <router-link to='/module-2/pca'><div v-on:click="moduleSelected(9)" :class="{ active: activeId == '1' }"><img class="modeImg" src="../assets/modes2.svg" alt=""><p class="modeTitle">PCA</p></div></router-link>
                    </md-list-item>
                    <md-list-item class="md-accent">
                      <router-link to='/module-2/tpn'><div v-on:click="moduleSelected(10)" :class="{ active: activeId == '1' }"><img class="modeImg" src="../assets/modes3.svg" alt=""><p class="modeTitle">TPN</p></div></router-link>
                    </md-list-item>
                    <md-list-item class="md-accent">
                      <router-link to='/module-2/intermittent'><div v-on:click="moduleSelected(11)" :class="{ active: activeId == '1' }"><img class="modeImg" src="../assets/modes4.svg" alt=""><p class="modeTitle">Intermittent</p></div></router-link>
                    </md-list-item>
                    <md-list-item class="md-accent">
                      <router-link to='/module-2/25-steps'><div v-on:click="moduleSelected(12)" :class="{ active: activeId == '1' }"><img class="modeImg" src="../assets/modes5.svg" alt=""><p class="modeTitle">25 Steps</p></div></router-link>
                    </md-list-item>
                    <md-list-item class="md-accent">
                      <router-link to='/module-2/drug-library'><div v-on:click="moduleSelected(13)" :class="{ active: activeId == '1' }"><img class="modeImg" src="../assets/modes6.svg" alt=""><p class="modeTitle">Drug Library</p></div></router-link>
                    </md-list-item>
                </md-list>
            
          </transition-group>

          <transition-group name="slide-left" class="twoCol">
              <h3 v-if="slides[slidePosition].title" v-bind:key="slides[slidePosition].id">{{slides[slidePosition].title}}</h3>
              <p v-for="line in slides[slidePosition].lines" v-bind:key="slides[slidePosition].id" v-bind:class="{bold: line.b}">{{line.text}}</p>
              <p v-for="link in slides[slidePosition].links" v-bind:class="{bold: link.b, orange: link.o}" v-on:click="jumpTo(link.jump)"">{{link.a}}</p>
              <!-- if list -->
              <ul v-for="list in slides[slidePosition].lists" v-bind:key="slides[slidePosition].id">
                <li class="listTitle" v-if="list.title">{{list.title}}</li>
                <li class="listItem" v-for="item in list.items" v-bind:class="{bold: item.b}">{{item.text}}</li>
              </ul>
              <a v-bind:key="slides[slidePosition].id" v-bind:href="slides[slidePosition].linkHref" target="_blank">{{slides[slidePosition].linkText}}</a>
              <img v-if="slides[slidePosition].img" class="device" v-bind:src="slides[slidePosition].img" alt="Body Guard" v-bind:key="slides[slidePosition].id">
              <!-- /if second image -->
              <div v-if="slides[slidePosition].img2" class="shiftWrap" v-bind:key="slides[slidePosition].id">
                <img v-bind:src="slides[slidePosition].img2" alt="Body Guard">
              </div>

              <!-- only show if button needed -->
              <div v-if="slides[slidePosition].button" v-bind:key="slides[slidePosition].id">
                <md-button class="md-icon-button"><div v-on:click="incrementPosition">{{slides[slidePosition].button}}</div> </md-button>
              </div>

           </transition-group>
          </md-card-area>
        </md-card>
    </md-card-content>
    </md-card>
    <div id="progress">
      <!-- <div class="slideWrap">
        <div class="spikes" >
          <span v-for="slide in slides"></span>
        </div>
        <md-progress :md-progress="progressPercent"></md-progress>
      </div> -->
      <!-- <span class="progText">Progress <b>{{Math.trunc(progressPercent)}}%</b></span> -->
      <div class="progNav" >
        <router-link to='/front'>
          <img class="home" src="../assets/home.svg" alt="Front Page">
        </router-link>
        <div v-if="notFirstSlide">
          <div class="imgWrap next" v-bind:class="{disabled: disableBtn, tourHide: tourStarting, quizDisable: quizDisable, moduleEnd: moduleEnd}" v-on:click="incrementPosition(slidePosition)">
            <p>Next</p><img src="../assets/arrow-right-thick.svg" alt="Next">
          </div>
          <div v-if="moduleEnd" class="imgWrap next">
            <router-link v-on:click.native="moduleComplete(2, 3)" to='/module-3'><p>Next</p><img src="../assets/arrow-right-thick.svg" alt="Next"></router-link>
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

import moduleTwo from '../components/moduleTwo.js'
import mixin from '../components/mixin.js'

const slideCount = moduleTwo.length
const step = 100 / slideCount

let pos = 0;

export default {
  name: 'module2',
  data () {
    return {
      slides: moduleTwo,
      moduleTitle: 'Module 2 - <span>Modes of operation</span>',
      progressPercent: step
    }
  },
  mixins: [mixin],
  methods: {
    moduleSelected(e){
      this.$bus.$emit('moduleChosen', e)
    }
  }
}

</script>


