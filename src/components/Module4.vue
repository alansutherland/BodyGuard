<template>
  <div>
    <md-card class="moduleWrapper">
      <md-card-content class="module">
        <md-card md-with-hover class="card moduleTwo" v-bind:class="{ dark: slides[slidePosition].isDark, layoutTwo: slides[slidePosition].layout2, layoutThree: slides[slidePosition].layout3, layoutFour: slides[slidePosition].layout4, layoutFive: slides[slidePosition].layout5, listLeft: slides[slidePosition].listLeft, tourQuiz: slides[slidePosition].tourQuiz, listsText: slides[slidePosition].listsText, modeStart: slides[slidePosition].modeStart, tourSlide: slides[slidePosition].tour || slides[slidePosition].device }" > 
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
                <p v-for="link in list.links" v-bind:class="{bold: link.b, orange: link.o}" v-on:click="jumpTo(link.jump)"">{{link.a}}</p>
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

          </transition-group>

          <transition-group name="slide-left">
              <!-- <h3 v-if="slides[slidePosition].title" v-bind:key="slides[slidePosition].id">{{slides[slidePosition].title}}</h3> -->
              <p v-for="line in slides[slidePosition].lines" v-bind:key="slides[slidePosition].id" v-bind:class="{bold: line.b}">{{line.text}}</p>
              
              <a v-bind:key="slides[slidePosition].id" v-bind:href="slides[slidePosition].linkHref" target="_blank">{{slides[slidePosition].linkText}}</a>
              <img v-if="slides[slidePosition].img" class="device" v-bind:src="slides[slidePosition].img" alt="Body Guard" v-bind:key="slides[slidePosition].id">
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
            <router-link v-on:click.native="moduleComplete(4, 5)" to='/module-5'><p>Next</p><img src="../assets/arrow-right-thick.svg" alt="Next"></router-link>
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

import moduleFour from '../components/moduleFou.js'
import mixin from '../components/mixin.js'

const slideCount = moduleFour.length
const step = 100 / slideCount

let pos = 0;

export default {
  name: 'module4',
  data () {
    return {
      slides: moduleFour,
      moduleTitle: 'Module 4 - <span>Care &amp; Maintenance</span>',
      progressPercent: step
    }
  },
  mixins: [mixin]
}

</script>


