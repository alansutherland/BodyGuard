<template>
  <div id="nav">
    <div class="topBar">
      <div class="title">
        <p class="moduleTitle" v-html="moduleTitle"></p>
      </div>
      <div class="moduleNav">
        <md-list class="nav">
            <md-list-item class="md-accent">
              <router-link to='/module-1'><div class="imgWrap" v-on:click="moduleSelected(1)" :class="{ active: activeId == '1' }"><img src="../assets/1.svg" alt="Module 1"></div></router-link>
            </md-list-item>
            <md-list-item class="md-accent">
              <router-link to='/module-2'><div class="imgWrap" v-on:click="moduleSelected(2)" :class="{ active: activeId == '2' }"><img src="../assets/2.svg" alt="Module 2"></div></router-link>
            </md-list-item>
            <md-list-item class="md-accent">
              <router-link to='/module-3'><div class="imgWrap" v-on:click="moduleSelected(3)" :class="{ active: activeId == '3' }"><img src="../assets/3.svg" alt="Module 3"></div></router-link>
            </md-list-item>
            <md-list-item class="md-accent">
              <router-link to='/module-4'><div class="imgWrap" v-on:click="moduleSelected(4)" :class="{ active: activeId == '4' }"><img src="../assets/4.svg" alt="Module 4"></div></router-link>
            </md-list-item>
            <md-list-item class="md-accent">
              <router-link to='/module-5'><div class="imgWrap" v-on:click="moduleSelected(5)" :class="{ active: activeId == '5' }"><img src="../assets/5.svg" alt="Module 5"></div></router-link>
            </md-list-item>
            <md-list-item class="md-accent">
              <router-link to='/module-6'><div class="imgWrap" v-on:click="moduleSelected(6)" :class="{ active: activeId == '6' }"><img src="../assets/6.svg" alt="Module 1"></div></router-link>
            </md-list-item>
            <md-list-item class="md-accent">
              <router-link to='/module-7'><div class="imgWrap" v-on:click="moduleSelected(7)" :class="{ active: activeId == '7' }"><img src="../assets/7.svg" alt="Module 7"></div></router-link>
            </md-list-item>
        </md-list>
      </div>
    </div>
    <!-- Sidenav -->
    <div class="phone-viewport">
      <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
        <md-toolbar class="md-large">
          <div class="md-toolbar-container">
            <h3 class="md-title">Contents</h3>
          </div>
          <md-button class="md-icon-button md-disabled" @click.native="toggleLeftSidenav">
            <img v-if="menuHidden" src="../assets/menu.svg" alt="Menu">
            <img v-else src="../assets/close.svg" alt="Close Menu">
          </md-button>
        </md-toolbar>
        <md-list class="nav">
            <md-list-item class="md-accent">
              <router-link v-on:click.native="moduleSelected(0)" to='/front' @click.native="toggleLeftSidenav"><p>Course content</p></router-link>
            </md-list-item>
            <md-list-item class="md-accent">
              <router-link v-on:click.native="moduleSelected(1)" v-bind:class="{active: activeId == '1'}" to='/module-1' @click.native="toggleLeftSidenav"><p>Module 1</p><span>Features</span><img v-bind:class="{completed: modules[1].complete === true }" src="../assets/tick.svg" alt="Module 1 Complete"></router-link>
            </md-list-item>
            <md-list-item class="md-accent">
              <router-link v-on:click.native="moduleSelected(2)" v-bind:class="{active: activeId == '2'}" to='/module-2' @click.native="toggleLeftSidenav"><p>Module 2</p><span>Modes of operation</span><img v-bind:class="{completed: modules[2].complete === true }" src="../assets/tick.svg" alt="Module 2 Complete"></router-link>
            </md-list-item>
            <md-list-item class="md-accent">
              <router-link v-on:click.native="moduleSelected(3)" v-bind:class="{active: activeId == '3'}" to='/module-3' @click.native="toggleLeftSidenav"><p>Module 3</p><span>Alarms &amp; Trouble Shooting</span><img v-bind:class="{completed: modules[3].complete === true }" src="../assets/tick.svg" alt="Module 3 Complete"></router-link>
            </md-list-item>
            <md-list-item class="md-accent">
              <router-link v-on:click.native="moduleSelected(4)" v-bind:class="{active: activeId == '4'}" to='/module-4' @click.native="toggleLeftSidenav"><p>Module 4</p><span>Care &amp; Maintenance</span><img v-bind:class="{completed: modules[4].complete === true }" src="../assets/tick.svg" alt="Module 4 Complete"></router-link>
            </md-list-item>
            <md-list-item class="md-accent">
              <router-link v-on:click.native="moduleSelected(5)" v-bind:class="{active: activeId == '5'}" to='/module-5' @click.native="toggleLeftSidenav"><p>Module 5</p><span>Accessories</span><img v-bind:class="{completed: modules[5].complete === true }" src="../assets/tick.svg" alt="Module 5 Complete"></router-link>
            </md-list-item>
            <md-list-item class="md-accent">
              <router-link v-on:click.native="moduleSelected(6)" v-bind:class="{active: activeId == '6'}" to='/module-6' @click.native="toggleLeftSidenav"><p>Module 6</p><span>Additional Features</span><img v-bind:class="{completed: modules[6].complete === true }" src="../assets/tick.svg" alt="Module 6 Complete"></router-link>
            </md-list-item>
            <md-list-item class="md-accent">
              <router-link v-on:click.native="moduleSelected(7)" v-bind:class="{active: activeId == '7'}" to='/module-7' @click.native="toggleLeftSidenav"><p>Module 7</p><span>Course Summary &amp; Assessment</span><img v-bind:class="{completed: modules[7].complete === true }" src="../assets/tick.svg" alt="Module 7 Complete"></router-link>
            </md-list-item>
        </md-list>
      </md-sidenav>
    </div>
    <!-- Sidenav Ends -->
  </div>
</template>

<script type="x/templates">

const check1 = JSON.parse(localStorage.getItem('module1Complete'));
const check2 = JSON.parse(localStorage.getItem('module2Complete'));

const check3 = JSON.parse(localStorage.getItem('module3Complete'));
const check4 = JSON.parse(localStorage.getItem('module4Complete'));
const check5 = JSON.parse(localStorage.getItem('module5Complete'));
const check6 = JSON.parse(localStorage.getItem('module6Complete'));
const check7 = JSON.parse(localStorage.getItem('module7Complete'));

const score1 = JSON.parse(localStorage.getItem('module1Score'));
const score2 = JSON.parse(localStorage.getItem('module2Score'));
const score3 = JSON.parse(localStorage.getItem('module3Score'));
const score4 = JSON.parse(localStorage.getItem('module4Score'));
const score5 = JSON.parse(localStorage.getItem('module5Score'));
const score6 = JSON.parse(localStorage.getItem('module6Score'));
const score7 = JSON.parse(localStorage.getItem('module7Score'));

export default {
  name: 'nav',
  data () {
    return {
      menuHidden: true,
      moduleTitle: '',
      modules: [
        {id: 0, title: ''},
        {id: 1, title: 'Module 1 - <span>Features</span>', complete: check1, score: score1},
        {id: 2, title: 'Module 2 - <span>Modes of operation</span>', complete: check2, score: score2},
        {id: 3, title: 'Module 3 - <span>Alarms &amp; Trouble Shooting</span>', complete: check3, score: score3},
        {id: 4, title: 'Module 4 - <span>Care &amp; Maintenance</span>', complete: check4, score: score4},
        {id: 5, title: 'Module 5 - <span>Accessories</span>', complete: check5, score: score5},
        {id: 6, title: 'Module 6 - <span>Additional Features</span>', complete: check6, score: score6},
        {id: 7, title: 'Module 7 - <span>Course Summary &amp; Assessment</span>', complete: check7, score: score7},
      ],
      activeId: null,
    }
  },
  methods: {
      toggleLeftSidenav() {
        this.$refs.leftSidenav.toggle();
      },
      open(ref) {
        this.menuHidden = false;
      },
      close(ref) {
        this.menuHidden = true;
      },
      moduleSelected(e){
        this.moduleTitle = this.modules[e].title;
        localStorage.setItem('currentTitle', e)
        this.activeId = this.activeId === e ? null : e
        this.slidePosition = 0
        this.$bus.$emit('moduleTitle', e)
      },
  },
  mounted: function(){
    const currentTitle = Number(localStorage.getItem('currentTitle'))
    this.moduleSelected(currentTitle)
  },
  created: function() {
     var self = this;
     this.$bus.$on('moduleChosen', function (e) {
        self.moduleTitle = self.modules[e].title;
        self.activeId = self.activeId === e ? null : e
        self.slidePosition = 0
     })
     this.$bus.$on('moduleFinished', function (e) {
        // set module complete to true
        self.modules[e].complete = true;
        localStorage.setItem('module'+[e]+'Complete', true)
        // set score
        localStorage.setItem('module'+[e]+'Score', 10)
     })
  }
}

</script>

<style lang="scss">

$grey: #404041;
$midGrey: #666667;
$lightGrey: #eaeaea;
$orange: #f27707;
$indi: #0A4790;
$purple: #8d2a90;

.topBar{
  background: $grey;
  color: #fff;
  padding: 0;
  text-align: left;
  display: flex;
  align-items: center;
  height: 50px;

  .moduleTitle, .sub{
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin: 0 0 0 145px;
    text-transform: capitalize;
    span{
      font-family: 'Helvetica Bold', 'Helvetica', sans-serif;
      font-weight: 700;
    }
  }
  .sub{
    font-size: 16px;
    text-transform: none;
  }
}

.phone-viewport{

  .md-sidenav.md-left .md-sidenav-content {
      left: 0;
      transform: translate3D(-83.7%,72px,0);
      background: $lightGrey;
      pointer-events: all;
      .md-sidenav-backdrop{
        background: transparent;
      }
      .md-theme-default.md-list, .md-theme-default.md-toolbar{
        background: #eaeaea;
      }
      .md-list{
        margin-right: 50px;
        padding: 0;
      }
      .md-list-item{
        background: #fff;
        padding: 6px 0;
        margin-bottom: 2px;

        &:hover{
          .md-button{
            background: transparent;
          }
          .md-list-item-container a{
            color: $orange;
          }
        } 

        .md-list-item-container{
          padding: 0 25px;
          justify-content: flex-start;
          /*flex: 1 0 0;*/
          font-size: 14px;
          font-weight: 700;
          font-family: 'Helvetica Bold', sans-serif;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          line-height: 1.2;
          height: 48px;
          color: $indi;
          transition: none;

          &:hover{
            color: $orange;
            background-color: #fff;
            text-decoration: none;
          }
          &:visited, &:active{
            color: $purple !important;
          }
          p{
            margin: 0;
          }
          span{
            font-family: 'Helvetica', sans-serif;
            font-weight: 400;
          }
          img{
            position: absolute;
            right: 20px;
            width: 31px;
            top: 10px;
            display: none;
          }
          img.completed{
            display: block;
          }
        }
        .active.md-list-item-container{
          border-left: 5px #8d2a90 solid;
          padding-left: 20px;
        }
      } 
  }
  .md-sidenav.md-active{
    .md-sidenav-content{
      box-shadow: none;
    }
    .md-sidenav-backdrop{
      background: transparent;
    }
    .md-sidenav-content{
      transform: translate3D(0,72px,0);
      width: 400px;
    }
  }
  .md-sidenav .md-backdrop{
    background: transparent;
  }

  .md-button.md-icon-button{
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    background: $orange;
    border-radius: 0;
    width: 50px;
    height: 50px;
    margin: 0;
    img{
      /*height: 34px;*/
      display: inline-block;
      vertical-align: top;
      height: initial;
    }
  }
  .md-button.md-icon-button:not([disabled]):hover{
    background: $orange;
  }
  .md-button.md-icon-button{
    color: #fff;
    font-size: 34px;
    font-weight: 700;
    margin: 0;
    text-align: left;
    width: 50px;
    text-align: center;
    .md-icon{
      top: 9px;
      font-size: 30px;
      font-weight: 700;
      margin: 0;
      width: 50px;
      height: 50px;
    }
  }
  .md-theme-default.md-toolbar{
    padding: 0; 
    min-height: 50px;
    text-align: left;

    .md-title:first-child{
      margin-left: 20px;
      font-weight: 700;
      font-family: 'Verdana-Bold', 'Verdana', sans-serif;
      font-size: 18px;
    }
  }
  .md-sidenav-content .md-toolbar-container{
      height: 50px;
      width: 100%;
      background: #404041;
      color: #fff;
  }

}
.moduleNav{
  .md-theme-default.md-list{
    display: block;
    background: transparent;
    padding: 0;
    /*margin-top: -50px;*/
    top: 50px;
    position: absolute;
    right: 20px;
    .md-list-item.md-accent{
      display: inline-block;
      width: 45px;
      margin-right: 2px;
      .md-list-item-container{
        padding: 0;
        display: block;
        min-width: 0;
        width: 45px;
        &:hover{
          background: none;
          .imgWrap{
            background: $orange;
          }
        }
      }
      .md-ink-ripple{
        border-radius: 50%;
      }
    }
  }
  .imgWrap{
    border-radius: 50%;
    padding: 25px;
    width: 45px;
    height: 45px;
    background: $midGrey;
    text-align: center;
    padding: 0;
    img:not(.md-image){
      width: 23px;
      height: 23px;
      margin-top: 5px;
    }
  }
  .imgWrap.active{
    background: $orange;
  }

}

@media (max-width: 678px){
  .moduleNav .md-theme-default.md-list{
    display: none;
  }
  .phone-viewport .md-sidenav.md-active .md-sidenav-content{
    width: 320px;
  }
}
 

</style>
