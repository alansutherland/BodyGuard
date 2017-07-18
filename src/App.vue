<template>
  <div id="app">
      <logo></logo>
      <navigator moduleTitle=moduleTitle ></navigator>
      <transition name="slide-left">
          <router-view class="view" v-bind:class="{ landing: true}"></router-view>
      </transition>
      <div id="progress" class="progBG"></div>
  </div>
</template>

<script type="x/templates">

import Logo from '@/components/Logo'
import Navigator from '@/components/Navigator'

export default {
  name: 'app',
  components: {
    'logo': Logo,
    'navigator': Navigator
  },
  data () {
    return {
      transitionName: 'slide-left',
      landing: true,
      moduleTitle: ''
    }
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  }
}
</script>

<style lang="scss">

$grey: #404041;
$midGrey: #666667;
$lightGrey: #eaeaea;
$orange: #f27707;
$purple: #8d2a90;
$indi: #0A4790;
html,body{
  overflow-y: hidden;
  height: 100vh;

}
#app {
  font-family: 'Verdana', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $grey;
  min-width: 985px;
  .md-card{
    box-shadow: none;
    min-width: 985px;
  }
  .view{
    min-height: 100vh;
  }
}
body.md-theme-default{
  background: $midGrey;
}
h1 img{
  width: 150px;
  margin-right: 30px;
  padding: 10px;
}
button{
  cursor: pointer;
}
.nav li a.md-list-item-container{
  justify-content: space-around;
}
.md-card .md-card-content.module .md-card.layoutThree.moduleTwo ul.nav{
  width: 100%;
  padding: 0;
  li{
    .md-list-item-container:hover{
      background: transparent;
      a{
        text-decoration: none;
      }
    }
    img{
      width: 55px;
    }
    .imgWrap{
      margin: 0 auto;
    }
    p{
      margin-bottom: 5px;
    }
    span{
      color: #fff;
      font-weight: 700;
      margin-bottom: 15px;
    }
  }
}
.md-card .md-card-content.module .md-card.layoutThree.moduleSeven {
  ul.nav{
    /*width: 65%;*/
    width: 540px;
    float: right;
  }
}
.md-card .md-card-content.module .md-card.layoutThree.moduleSeven{
  .orange{
    color: #fff;
    font-size: 14px;
    font-weight: 400;
  }
  .start, .btnWrap{
    float: left;
    /*width: 35%;*/
    width: 275px;
  }
}

.md-card .md-card-content.module .md-card.layoutFive{
  p{
    width: auto;
    margin-right: 0;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  li.md-list-item{
    margin-right: 15px;
  }
  li.md-list-item .md-list-item-container{
    flex-direction: column;
    width: 100%;
   /* padding: 0;
    margin-right: 10px;*/
  }
  li.md-list-item .md-list-item-container .modeImg{
    width: 130px; height: 130px;
  }
  .modeTitle{
    font-size: 14px;
    margin-top: 10px;
    font-weight: 700 !important;
  }
}
.fade-enter-active {
  transition-property: opacity;
  transition-duration: .5s;
}
.fade-enter-active {
  transition-delay: .1s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.md-card .md-card-content:last-child{
  overflow: hidden;
}
.module .md-button.md-icon-button .md-ink-ripple{
  border-radius: 0;
}
.md-card .md-card-content.module .md-radio{
  display: block;
  margin: 8px 0;
}
.md-card .md-card-content.module .md-radio .md-radio-container{
  display: inline-block;
  vertical-align: top;
}
.moduleWrapper.md-card .md-card-content.module .quiz p{
  font-weight: 400;
  text-align: left;
  font-size: 16px;
  color: #f27707;
  float: left;
  width: 296px;
  /*text-align: center;*/
  margin-top: 10px;
  line-height: 1.2;
}
.quizSlide{
  h3{
    margin-left: 125px;
    margin-top: 0;
    padding-top: 20px;
    font-size: 16px;
    font-weight: 400;
  }
}
.quiz, .tourQuizText{
  max-width: 500px;
  display: inline-block;
  width: 43%;
  vertical-align: top;
  h4{
    font-size: 14px;
    font-weight: 700;
    margin: 0;
  }
  h5{
    margin: 10px 0;
  }
  h6{
    color: $orange;
    margin-bottom: 0;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
  }
  button.md-theme-default.md-button:not([disabled]).md-accent.md-raised{
    width: 296px;
    background: $orange;
    color: #fff;
    font-size: 20px;
    margin: 15px 0 0;
    padding: 10px 20px;
    display: block;
    img{
      padding: 0;
      width: 58px;
      top: 5px;
      left: 9px;
      position: absolute;
    }
  }
  .md-radio .md-radio-label{
    font-size: 14px;
    font-weight: 400;
  }
  .md-checkbox{
    &:last-of-type{
      margin-bottom: 10px;
      /*margin-bottom: 50px;*/
    };
    label{
      font-size: 14px;
      font-weight: 400;
    }
  }
}
.imgWrap.prev, .imgWrap.next{
    border-radius: 50%;
    vertical-align: top;
    display: inline-block;
    display: flex;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: $orange;
    text-align: center;
    color: #fff;
    margin: 0 10px;
    justify-content: center;
    margin: -26px 75px 0 0;
    position: relative;
    cursor: pointer;
    z-index: 2;
    float: right;
    position: relative;
    .md-icon{
      font-size: 30px;
      width: 30px;
    }
    img{
      width: 35px;
      z-index: 1;
    }
    p{
      font-size: 14px;
      position: absolute;
      background: $orange;
      right: -60px;
      padding: 5px 10px 7px 40px;
      border-radius: 30px;
      margin: 10px;
      font-weight: 700;
    }
}
.imgWrap.next{
  background: $indi;
  margin: -26px 45px 0 50px;
  p{
    background: $indi;
    left: -60px;
    right: 0;
    padding: 5px 40px 7px 10px;
  }
}
/*Progress Bar*/
#progress{
  background: $lightGrey;
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  min-width: 985px;
  z-index: 1;
  .slideWrap{
    width: 325px;
    height: 15px;
    margin-left: 145px;
    margin-top: 18px;
    float: left;
    position: relative;
    .spikes{
      position: absolute;
      width: 100%;
      height: 15px;
      z-index: 10;
      span{
        /*width: 1px;*/
        width: calc(100%/20);
        height: 13px;
        margin-bottom: 4px;
        border-right: 1px solid #dadada;
        display: inline-block;
        position: relative;
        &:last-of-type{
          border: 0;
        }
        &:after{
          content: '';
          height: 10px;
          width: 1px;
          background: #dadada;
          position: absolute;
          top: -10px;
          right: -1px;
          transition: .5s;
        }
        &:before{
          content: '';
          height: 7px;
          width: 7px;
          background: #dadada;
          position: absolute;
          border-radius: 50%;
          top: -12px;
          right: -4px;
          transition: .5s;
        }
        &:last-of-type:after, &:last-of-type:before{
          display: none;
        }
        &:nth-of-type(2):before{
          right: -5px;
        }
        &:nth-of-type(2):after{
          right: -2px;
        }
      }
      /*span:nth-of-type(-n+2)*/
      span:first-child, span.past{
        border-right-color: $purple;
        &:before, &:after{
          background: $purple;
        }
      }
    }
  } 
  .md-progress{
    height: 15px;
    width: 100%;
    position: relative;
    
    float: left;
    /*margin-left: 145px;*/
    border: 1px solid #dadada;
    .md-progress-track{
      background: #8d2a90;
    }
  }
  .progText{
    position: relative;
    margin-top: 15px;
    float: left;
    font-size: 14px;
    color: $grey;
    margin-left: 15px;
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    span{
      font-weight: 700;
    }
  }
  .progNav{
    float: right;
    margin-top: -25px;
    margin-right: 20px;
    display: flex;
    /*z-index: 1;*/
    position: relative;
    a, .imgWrap{
        border-radius: 50%;
        vertical-align: top;
        display: inline-block;
        display: flex;
        justify-content: center;
        width: 50px;
        height: 50px;
        background: $orange;
        text-align: center;
        color: #fff;
        margin: 0 10px;
        justify-content: center;
        .md-icon{
          font-size: 30px;
          width: 30px;
        }
        img{
          width: 40px;
          z-index: 1;
          display: inline-block;
          vertical-align: top;
          height: 50px;
        }
    }
    .imgWrap.moduleEnd{
      display: none;
    }
    a{
      margin-right: 25px;
      text-decoration: none;
      z-index: 1;
    }
    .imgWrap{
      margin: 0 75px 0 0;
      position: relative;
      a{
        margin: 0;
        background: transparent;
      }
      p{
        font-size: 14px;
        position: absolute;
        font-family: Verdana, sans-serif;
        background: $orange;
        right: -60px;
        padding: 5px 10px 7px 40px;
        border-radius: 30px;
        margin: 10px;
        font-weight: 700 !important;
        text-align: center;
        width: auto !important;
        }
      }
      .next{
        background: $indi;
        margin: 0 0 0 50px;
        p{
          background: $indi;
          left: -60px;
          right: 0;
          padding: 5px 40px 7px 10px;
        }
      }
      .tourHide{
        display: none;
      }
      .imgWrap.disabled, .imgWrap.quizDisable{
        pointer-events: none;
        background: #9c9c9c;
        cursor: none;
        visibility: hidden;
        p{
          background: #9c9c9c;
        }
      }
      
  }
  .progNav.modulated{
      margin-right: 270px;
  }
}
.ten #progress .slideWrap .spikes span{
  width: calc(100%/10);
}
#progress.progBG{
  z-index: 0;
}
.single .md-list-item .md-list-item-container{
  display: inline-block;
  vertical-align: top;
  text-align: center;
  padding: 0;
  cursor: pointer;
}

.md-card .md-card-header:last-child{
  margin-bottom: 0;
}
.md-card .md-card-media.md-16-9 {
    height: 550px;
}
.md-card .md-subhead{
  opacity: 1;
}
.md-theme-default.md-button:not([disabled]).md-primary.md-raised, .md-theme-default.md-button:not([disabled]).md-primary.md-fab {
    background-color: white;
    width: 100%;
}
.md-theme-default.md-button:not([disabled]).md-primary.md-raised a{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.md-theme-default.md-button:not([disabled]).md-primary.md-raised:hover, .md-theme-default.md-button:not([disabled]).md-primary.md-fab:hover {
    background-color: #2c3e50;
}
.md-theme-default.md-button:not([disabled]).md-primary.md-raised:hover a{
  color: #fff;
}
.md-theme-default.md-card{
  border-radius: 0;
}
.md-card.moduleWrapper{
  overflow-x: hidden;
}
.front .md-card .md-card-content.single .copy{
  /*width: 235px;*/
  /*max-width: 400px;*/
  /*width: 30%;*/
  width: 280px;
  display: inline-block;
  p{
    margin-bottom: 10px;
    width: auto;
  }
}

.md-card .md-card-content.module{
  transition: .7s ease-in-out;
  /*width: 1000vw;*/
  overflow-y: hidden; 
  
  padding: 0;
  .md-card{
    padding-left: 145px;
    /*padding-top: 15px;*/
    background: #fff;
    color: $grey;
    /*height: 755px;*/
    height: 100vh;
    min-height: 768px;
    font-weight: 700;
    font-size: 18px;
    float: left;
    width: 100vw;
    .device{
      width: 173px;
      display: inline-block;
      vertical-align: top;
      margin-bottom: 30px;
    }
    .md-button{
      width: 160px;
      background: #fff;
      border-radius: 5px;
      display: block;
      color: $indi;

      font-weight: 700;
      font-size: 16px;
      text-transform: capitalize;
      font-family: 'Helvetica Bold', sans-serif;
      span{
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        padding: 8px 0;
      }
    }
  }
  .md-card.dark{
    background: $midGrey;
    color: #fff;
    ul{
      background: transparent;
      li a{
        background: transparent;
        &:hover{
          background: transparent;
        }
        p{
          color: #fff !important;
        }
      }
    }
  }
  .md-card.layoutTwo{
    h3{
      margin-top: 0;
      font-size: 20px;
      font-family: 'Helvetica-Bold', sans-serif;
    }
    p{
      font-family: 'Helvetica-Bold', sans-serif;
      color: $orange;
      margin-bottom: 10px;
      font-size: 16px;
      max-width: 375px;
      &:nth-of-type(n+4){
        margin-top: 20px;
        font-family: 'Helvetica', sans-serif;;
        font-weight: 400;
        font-size: 20px;
        color: $grey;
      }
      &:last-of-type{
        margin-top: 0;
        padding-top: 10px;
        border-top: 2px solid $orange;
      }
    }
    .shiftWrap{
      display: inline-block;
      width: 230px;
      margin-left: -80px;
    }
    img{
      width: 230px;
      margin-left: 33px;
    }
    .device{
      width: 132px;
      position: relative;
      margin-top: 44px;
      margin-left: -42px;
      z-index: 1;
      display: inline-block;
    }
  }
  .md-card.layoutThree{
    .listWrap{
      /*width: 360px;*/
      width: 500px;
      display: inline-block;
      vertical-align: top;
      max-height: 440px;
      overflow-y: scroll; 
      @media(max-width: 1100px){
        /*max-height: 500px;*/
        max-height: 410px;
        
      }
    }
    ul{
      list-style: none;
      display: block;
      vertical-align: top;
      padding-left: 70px;
      margin-top: 0;
      &:first-of-type{
        li{font-weight: 700}
        /*&:after{
          content: "";
          background: $orange;
          position: absolute;
          right: -2px;
          top: 72px;
          width: 230px;
          height: 230px;
          border-radius: 50%;
        }*/
      } 
      /*&:last-of-type{
        padding-left: 235px;
        .listTitle{
          color: $grey;
          list-style: none;
        }
        .listItem{
          margin-top: 0;
          padding-left: 2em; 
          text-indent: -.7em;
          position: relative;
          &:before{
            content: "• ";
            color: $orange;
            font-size: 36px;
            position: absolute;
            left: 8px;
          }
        }
      } */
    }

    li{
      font-size: 14px;
      font-family: 'Helvetica', sans-serif;
      margin-top: 0;
      font-weight: 400;
    }
    /*.device{
      position: absolute;
      top: 23px;
      margin-left: 45px;
      width: 230px;
    }*/
  }
  .md-card.layoutThree.moduleTwo ul{
    padding-left: 0;
  }
  .md-card.layoutFour{
    img{
      width: 70%;
      max-width: 500px;
      float: left;
      padding-bottom: 200px;
      /*margin-right: -60px;*/
    }
    ul{
      float: left;
      list-style: none;
      display: none;
      padding-top: 76px;
      padding-left: 0;
      background: #fff;
      position: relative;
      font-size: 16px;
      width: 185px;
      /*margin-left: -28px;*/
      &:first-of-type button{
        display: block;
      }
    }
    .device-tip{
      position: absolute;
      width: 158px;
      left: -336px;
      top: 37px;
      padding: 0;
      z-index: 0;
      border-radius: 6px;
    }
    .tooltips{
      padding-top: 0;
      /*padding-right: 0px;*/
      max-height: 397px;
      max-width: 400px;
      overflow-y: scroll;
    }
    .current{
      z-index: 1;
      display: block;

      .tipList{
        display: block;
        height: auto;
        font-weight: 400;
        margin-top: 10px;
        li{
          margin-top: 0;
          padding-left: 2em; 
          /*text-indent: -.7em;*/
          position: relative;
          &:before{
            content: "• ";
            color: $orange;
            font-size: 26px;
            position: absolute;
            left: 8px;
            top: -1px;
          }
        }
      }
    }
    button{
      color: #fff;
      border-radius: 5px;
      margin-top: 30px;
      background: #8d2a90;
      display: none;
    }
   /* .tipButton button{
      position: fixed;
      bottom: -25px;
      margin-left: 323px;
      width: 100px;
      height: 50px;
    }*/
    .glow, .tourQuiz{
      position: absolute;
      top: 0;
    }
    .glowButton button{
      display: block;
      position: absolute;
      border-radius: 7px;
      background: transparent;
      min-width: 0;
      min-height: 0;
      width: 27px;
      height: 22px;
      margin: 0;
      top: 53px;
      left: -166px;
      opacity: 1;
      box-shadow: 0 0 0 0 rgba(141, 42, 144, 0.7);
      -webkit-animation: glow 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      -moz-animation: glow 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      -ms-animation: glow 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      animation: glow 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      span{
        background: transparent;
      }
    }
    @-webkit-keyframes glow {to {box-shadow: 0 0 0 45px rgba(141, 42, 144, 0); }}
    @-moz-keyframes glow {to {box-shadow: 0 0 0 45px rgba(141, 42, 144, 0); }}
    @-ms-keyframes glow {to {box-shadow: 0 0 0 45px rgba(141, 42, 144, 0); }}
    @keyframes glow {to {box-shadow: 0 0 0 45px rgba(141, 42, 144, 0); }}
    .glowTwo button{
      top: 82px;
    }
    .glowThree button{
      top: 111px;
    }
    .glowFour button{
      top: 55px;
      left: -367px;
    }
  }
  .md-card.layoutFive{
    li.md-list-item .md-list-item-container{
      .imgWrap{
        padding: 0;
        width: 125px;
        height: 125px;
        img{
          width: 100%;
          height: auto;
        }
      }
      p{
        color: $grey;
      }
      
    } 
    .twoCol{
      width: 425px;
      display: inline-block;
      vertical-align: top;
      /*padding-right: 10px;*/
      h3{
        font-size: 18px;
        margin-top: 0;
      }
      &:last-of-type{
        width: 390px;
        padding-left: 10px;
      }
    }
    ul.md-list {
      width: 100%;
      padding-left: 0;
      li.md-list-item{
        margin-right: 5px;
      }
    }
  }
  
  
  .video{
    padding-right: 95px;
  }
  .md-card .md-card-area{
    text-align: left;
    /*max-width: 730px;*/
    max-width: 900px;
    width: 100%;
    padding-top: 30px;
  }  
  /*p{
    text-align: left;
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    font-size: 18px;
    width: 442px;
    margin: 0 90px 20px 0;
    line-height: 1.5;
    float: left;
    &:first-child{
      font-family: 'Helvetica Bold', sans-serif;
      font-weight: 700;
    }
  }*/
  .md-list{
    display: inline-block;
    vertical-align: top;
    padding-top: 0;
    width: 65%;
    max-width: 650px;
    padding-left: 20px;
  }
  li.md-list-item{
    display: inline-block;
    width: 130px;
    .md-list-item-container{
      flex-direction: column;
      color: $grey;
      justify-content: center;
      font-size: 14px;
      font-family: 'Helvetica-Bold', 'Helvetica', sans-serif;
      padding: 0;
      margin: 0 0 15px;
      &:hover{
        background: #fff;
      }
      p{
        width: 100%;
        text-align: center;
        line-height: 1.3;
        font-weight: 700;
      }
      span{
        font-family: 'Helvetica', sans-serif;
        white-space: normal;
        line-height: 1.3;
        text-align: center;
      }
      .imgWrap{
        border-radius: 50%;
        padding: 25px;
        width: 105px;
        height: 105px;
        background: $orange;
        margin-bottom: 10px;
        text-align: center;
      }
      img{
        width: 55px;
        height: 55px;
      }
    }
  } 
  
}

.md-card .md-card-header:last-child{
  margin-bottom: 0;
}
.md-card .md-card-media.md-16-9 {
    height: 550px;
}
.md-card .md-subhead{
  opacity: 1;
}
.md-theme-default.md-button:not([disabled]).md-primary.md-raised, .md-theme-default.md-button:not([disabled]).md-primary.md-fab {
    background-color: white;
    width: 100%;
}
.md-theme-default.md-button:not([disabled]).md-primary.md-raised a{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.md-theme-default.md-button:not([disabled]).md-primary.md-raised:hover, .md-theme-default.md-button:not([disabled]).md-primary.md-fab:hover {
    background-color: #2c3e50;
}
.md-theme-default.md-button:not([disabled]).md-primary.md-raised:hover a{
  color: #fff;
}
.md-theme-default.md-card{
  border-radius: 0;
}
.md-card.moduleWrapper{
  overflow-x: hidden;
}
.md-card .md-card-content.module{
  transition: .7s ease-in-out;
  /*width: 1000vw;*/
  overflow-y: hidden; 
  
  padding: 0;
  .md-card{
    padding-left: 145px;
    /*padding-top: 15px;*/
    background: #fff;
    color: $grey;
    /*height: 755px;*/
    height: 100vh;
    font-weight: 700;
    font-size: 18px;
    float: left;
    width: 100vw;
    /*@media(max-width: 1100px){
      height: 77.7vh;
      min-height: 0;
    }*/
    .device{
      width: 173px;
      display: inline-block;
      vertical-align: top;
      margin-bottom: 30px;
    }
    .md-button{
      width: 160px;
      background: #fff;
      border-radius: 5px;
      display: block;
      color: $indi;
      font-weight: 700;
      font-size: 16px;
      padding: 0;
      text-transform: capitalize;
      font-family: 'Helvetica Bold', sans-serif;
      span{
        position: relative;
        display: block;
        width: 100%;
        top: 0;
        left: 0;
        padding: 8px 0;
        background: #666667;
        color: #fff;
        z-index: 99;
      }
    }
  }
  .md-card.dark{
    background: $midGrey;
    color: #fff;
    .md-button span{
      background: #fff;
      color: $grey;
      border-radius: 5px;
    }
  }
  .md-card.layoutTwo{
    h3{
      margin-top: 0;
      font-size: 20px;
      font-family: 'Helvetica-Bold', sans-serif;
    }
    p{
      font-family: 'Helvetica-Bold', sans-serif;
      color: $orange;
      margin-bottom: 10px;
      font-size: 16px;
      max-width: 375px;
      &:nth-of-type(n+4){
        margin-top: 20px;
        font-family: 'Helvetica', sans-serif;;
        font-weight: 400;
        font-size: 20px;
        color: $grey;
      }
      &:last-of-type{
        margin-top: 0;
        padding-top: 10px;
        border-top: 2px solid $orange;
      }
    }
    .shiftWrap{
      display: inline-block;
      width: 230px;
      margin-left: -80px;
    }
    img{
      width: 230px;
      margin-left: 33px;
    }
    .device{
      width: 132px;
      position: relative;
      margin-top: 44px;
      margin-left: -42px;
      z-index: 1;
      display: inline-block;
      @media(max-width: 940px){
        margin-left: 0;
      }
    }
  }
  .md-card.layoutThree, .md-card.listLeft{
    ul{
      list-style: none;
      display: block;
      vertical-align: top;
      padding-left: 70px;
      margin-top: 0;

      .listTitle{
        color: $orange;
        list-style: none;
      }
      .listItem{
        margin-top: 0;
        padding-left: 2em; 
        text-indent: -.7em;
        position: relative;
        &:before{
          content: "• ";
          color: $orange;
          font-size: 36px;
          position: absolute;
          left: 8px;
        }
      }

      &:first-of-type{
        /*padding-right: 70px;*/
        li{
          font-weight: 700;
          padding-left: 0;
          text-indent: 0;
          &:before{display: none;}
        }
        /*&:after{
          content: "";
          background: $orange;
          position: absolute;
          right: -2px;
          top: 72px;
          width: 230px;
          height: 230px;
          border-radius: 50%;
        }*/
      } 
      /*&:last-of-type{
        .listTitle{
          color: $orange;
          list-style: none;
        }
        .listItem{
          margin-top: 0;
          padding-left: 2em; 
          text-indent: -.7em;
          position: relative;
          &:before{
            content: "• ";
            color: $orange;
            font-size: 36px;
            position: absolute;
            left: 8px;
          }
        }
      } */
    }
    .listTitle{
      font-family: 'Helvetica-Bold', sans-serif;
      color: $grey;
      font-size: 16px;
      margin-bottom: 10px;
    }
    h2.listTitle{
      font-size: 22px;
      margin-top: 0;
    }
    li{
      font-size: 14px;
      font-family: 'Helvetica', sans-serif;
      margin-top: 0;
      font-weight: 400;
    }
    .device{
      /*position: absolute;*/
      top: 23px;
      margin: 0 auto;
      width: 236px;

    }
    .modal{
      width: auto;
      background: $orange;
      color: #fff;
      font-size: 20px;
      margin: 15px auto 0;
      /*position: absolute;*/
      padding: 10px 20px;
      display: block;
      /*top: 300px;*/
      /*right: 255px;*/
      img{
        width: 60px;
      }
      &:hover{
        background: $orange;
      }
    }
    .wrap{
      display: inline-block;
      vertical-align: text-bottom;
    }
  }
  .md-card.layoutThree.moduleTwo ul:first-of-type .listItem{
      margin-top: 0;
      padding-left: 2em; 
      text-indent: -.7em;
      position: relative;
      font-weight: 400;
      &:before{
        content: "• ";
        color: $orange;
        font-size: 36px;
        position: absolute;
        left: 8px;
        display: block;
      }
  }
  .md-card.listLeft .md-card-area{
    h3{
      margin-top: 0;
    }
    ul{
      /*width: 65%;*/
      padding-right: 0;
      padding-left: 0;
      .listItem{
        text-indent: 0;
      }
    }
  }
  .md-card.layoutFour{
    img{
      width: 70%;
      max-width: 500px;
      float: left;
      padding-bottom: 200px;
    }
    img.charger{
      max-width: 370px;
    }
    ul{
      float: left;
      list-style: none;
      display: none;
      /*padding-top: 76px;*/
      padding-left: 0;
      background: #fff;
      position: relative;
      font-size: 16px;
      /*width: 185px;*/
      width: 48%;
      /*max-width: 360px;*/
      padding-right: 10px;
      padding-bottom: 70px;
      background: transparent;
      max-height: 615px;
      overflow-y: scroll;
      /*margin-left: -28px;*/
      &:first-of-type button{
        display: block;
      }
      @media(min-width: 1200px){
        width: 50%;
        max-width: 380px;
      }
    }
    .device-tip{
      position: absolute;
      width: 158px;
      /*transition: none;*/
      opacity: 0;
      /*transform: translateX(0);*/
      /*left: -336px;*/
      /*top: 37px;*/
      display: none;
      left: 164px;
      top: 81px;
      padding: 0;
      z-index: 0;
      border-radius: 6px;
    }
    .tipTitle{
      color: $orange;
      text-transform: capitalize;
    }
    .tipItem{
      font-weight: 400;
      font-size: 14px;
      /*margin-top: 0;*/
    }
    .current{
      z-index: 1;
      display: block;
      opacity: 1;
    }
    @keyframes fade{
      from{
        opacity: 0;
      }
      to{
        opacity: 1;
      }
    }
    button{
      color: #fff;
      border-radius: 5px;
      margin-top: 30px;
      background: #8d2a90;
      display: none;
    }
   /* .tipButton button{
      position: fixed;
      bottom: -25px;
      margin-left: 323px;
      width: 100px;
      height: 50px;
    }*/
    .glowButton button{
      display: none;
      position: absolute;
      border-radius: 7px;
      background: transparent;
      min-width: 0;
      min-height: 0;
      width: 27px;
      height: 22px;
      margin: 0;
      opacity: 1;
      z-index: 2;
      cursor: pointer;
      box-shadow: 0 0 0 0 rgba(141, 42, 144, 0.7);
      -webkit-animation: glow 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      -moz-animation: glow 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      -ms-animation: glow 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      animation: glow 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  
      span{
        height: 100%;
      }
    }
    @-webkit-keyframes glow {to {box-shadow: 0 0 0 45px rgba(141, 42, 144, 0); }}
    @-moz-keyframes glow {to {box-shadow: 0 0 0 45px rgba(141, 42, 144, 0); }}
    @-ms-keyframes glow {to {box-shadow: 0 0 0 45px rgba(141, 42, 144, 0); }}
    @keyframes glow {to {box-shadow: 0 0 0 45px rgba(141, 42, 144, 0); }}
    
    .current.glowButton button{
      display: block;
    }
    .bar button{
      width: 158px;
      height: 18px;
      top: 83px;
      left: 164px;
      padding: 5px;
    }
    .barLeft button{
      width: 78px;
      height: 14px;
      top: 81px;
      left: 164px;
      padding: 5px;
    }
    .barRight button{
      width: 78px;
      height: 14px;
      top: 81px;
      left: 242px;
      padding: 5px;
    }
    .stopButton button{
      left: 334px;
      top: 99px;
    }
    .startButton button{
      left: 334px;
      top: 127px;
    }
    .primeButton button{
      left: 334px;
      top: 157px;
    }
    .powerButton button{
      top: 101px;
      left: 133px;
    }
    .lock button{
      top: 130px;
      left: 133px;
    }
    .bolus button{
      top: 145px;
      left: 165px;
      width: 140px;
    }
    .rate button{
      top: 114px;
      left: 165px;
      width: 140px;
      height: 30px;
    }
    .infoButton button{
      top: 158px;
      left: 133px;
    }
    .numbers button{
      width: 112px;
      height: 58px;
      top: 209px;
      left: 133px;
      /*padding: 5px;*/
    }
    .arrows button{
      width: 109px;
      height: 58px;
      top: 209px;
      left: 256px;
      /*padding: 5px;*/
    }
    .LED button{
      left: 178px;
      width: 12px;
      height: 8px;
      top: 62px;
      padding: 0;
    }

    .display button{
      width: 131px;
      height: 41px;
      top: 54px;
      left: 120px;
    }

    .release button{
      width: 31px;
      height: 31px;
      top: 416px;
      left: 171px;
    }

    .charger button{
      width: 12px;
      height: 10px;
      top: 414px;
      left: 146px;
    }

    .pump button{
      width: 12px;
      height: 10px;
      top: 420px;
      left: 146px;
    }

    .open1 button{
      width: 10px;
      height: 10px;
      top: 122px;
      left: 336px;
    }
    .open2 button{
      width: 10px;
      height: 10px;
      top: 136px;
      left: 306px;
    }
    .open3 button{
      width: 10px;
      height: 10px;
      top: 149px;
      left: 316px;
    }
    .open4 button{
      width: 10px;
      height: 10px;
      top: 161px;
      left: 313px;
    }
    .open5 button{
      width: 10px;
      height: 10px;
      top: 181px;
      left: 323px;
    }
    .open6 button{
      width: 10px;
      height: 10px;
      top: 211px;
      left: 353px;
    }
    .open7 button{
      width: 10px;
      height: 10px;
      top: 149px;
      left: 153px;
    }
    .open8 button{
      width: 10px;
      height: 10px;
      top: 166px;
      left: 170px;
    }
    .open9 button{
      width: 10px;
      height: 10px;
      top: 182px;
      left: 162px;
    }

    .glowButton.noButton{
      display: none;
    }
  }
  .layoutFour.tourQuiz{
    .tourQuizText{
      /*float: right;*/
      /*width: 41%;*/
    }
    .feedback{
      background: $orange;
      text-transform: uppercase;
      font-weight: 700;
      color: #fff;
      padding: 15px 21px;
      border-radius: 5px;
      font-size: 20px;
      float: left;
      span{
        margin-right: 20px;
        border-radius: 50%;
        background: #fff;
        color: $orange;
        width: 40px;
        padding: 0;
        height: 40px;
        /*display: inline-block;*/
        text-align: center;
        display: none;
        vertical-align: middle;
      }
    }
    p{
      width: auto;
      margin-right: 0;
    }
    .glowButton button{
    /*  -webkit-animation: none;
      -moz-animation: none;
      -ms-animation: none;
      animation: none;*/
      
    }
  } 
  #multi .glowButton button{
      -webkit-animation: glow 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      -moz-animation: glow 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      -ms-animation: glow 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      animation: glow 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  }
  .layoutThree.listsText{
    max-height: 500px;
    overflow: scroll;
    padding-bottom: 100px;
    .md-inset{
      height: 445px;
      overflow-y: scroll;
      padding-bottom: 40px;
    }
    .listWrap{
      overflow: visible;
    }
    ul{
      padding: 0px;
      display: block;
      max-height: none;
      overflow-y: visible;
      &:last-of-type{
        padding-left: 0;
      }
    }
    a{
      display: block;
      font-size: 14px;
    }
    p{
      width: 100%;
      display: block;
    }
  }
  .md-card.layoutThree.moduleTwo, .md-card.layoutThree.moduleThree{
    ul{
      /*padding: 0;*/
      /*float: right;*/
      &:last-of-type .listItem{
         /*text-indent: 0;*/
      }
    }
    img{
      /*float: left;*/
      position: relative;
      margin: 0;
      width: 40%;
      top: 0;
    }
    button{
    /*  clear: both;
      float: right;*/
      /*background: #404041;*/
      /*color: white;*/
      margin-left: 0;
    }
    .copy{
      width: 490px;
      display: inline-block;
      vertical-align: top;
      padding-left: 30px;
      padding-right: 30px;
      /*max-height: 550px;*/
      height: 420px;
      overflow-y: scroll;
      padding-bottom: 150px;
      @media(max-width: 1100px){
        padding-bottom: 50px;
        height: 400px;
      }
      p{
        margin: 0 0 10px;
        font-weight: 400;
        /*margin: 0 0 5px;*/
        font-size: 14px;
        &:last-of-type{
          margin-bottom: 30px;
        }
      }
    }
  }
  .md-card.layoutThree.moduleTwo.moduleSeven button, .md-card.layoutThree.moduleTwo.moduleSeven .btnWrap{
    /*display: inline-block;*/
    margin-bottom: 20px;
    /*&.certJump{
      width:300px;
    }*/
  }
  .md-card.layoutThree.moduleTwo.modeStart{
    .listTitle{
      color: $orange;
    }
    img{
      width: 130px;
      padding-right: 100px;
      box-sizing: content-box;
    }
  }
  
/*force scrollbars to always show*/
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}

.md-card.layoutFour.moduleTwo, .md-card.layoutFour.moduleThree{
    ul{
      cursor: initial;
      font-size: 14px;
      padding: 0;
      /*width: 310px;*/
      width: 400px;
      padding-right: 20px;
      height: 390px;
      overflow-x: hidden;
      margin-top: 0;
    }
    .bold{
      font-weight: 700 !important;
    }
    span.orange{
      color: $orange;
      font-weight: 700 !important;
    }

  }
  .bold{
    font-weight: 700 !important;
  }
  span.orange{
    color: $orange;
    font-weight: 700 !important;
  }
  .padImg{
    width: 130px;
    padding-right: 230px;
    box-sizing: content-box;
  }

  .video{
    padding-right: 95px;
  }
  .md-card .md-card-area{
    text-align: left;
    /*max-width: 730px;*/
    max-width: 900px;
    padding-right: 15px;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 100px;
    overflow: hidden;

    @media(max-width: 1100px){
      /*padding-bottom: 200px;*/
      /*max-height: 700px;*/
    }
    /*max-height: 600px;*/
    /*overflow-y: scroll;*/
    /*@media(min-width: 1200px){
      max-width: 100%;
      padding-right: 20px;
      .copy{
        width: 70% !important;
      }
    }*/
  }  
  .md-card.tourSlide .md-card-area{
    margin-left: -100px;
    max-width: 1000px;
    width: 980px;
  }
  .fin.md-card .md-card-area{
    padding-bottom: 140px;
  }
  .lineWrap{
    display: inline-block;
    vertical-align: top;
    width: 442px;
    margin-right: 90px;
  }
  p{
    text-align: left;
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    font-size: 18px;
    /*width: 442px;*/
    margin-bottom: 20px;
    line-height: 1.5;
    float: none;
    /*display: inline-block;*/
    /*vertical-align: top;*/
    &:first-child{
      font-family: 'Helvetica Bold', sans-serif;
      font-weight: 700;
      margin-top: 0;
    }
  }
  .md-list{
    display: inline-block;
    vertical-align: top;
    padding-top: 0;
    width: 65%;
    max-width: 650px;
    padding-left: 20px;
  }
  li.md-list-item{
    display: inline-block;
    width: 130px;
    .md-list-item-container{
      flex-direction: column;
      color: $grey;
      justify-content: center;
      font-size: 14px;
      font-family: 'Helvetica-Bold', 'Helvetica', sans-serif;
      padding: 0;
      margin: 0 0 15px;
      &:hover{
        background: #fff;
      }
      p{
        width: 100%;
        text-align: center;
        line-height: 1.3;
        font-weight: 700;
      }
      span{
        font-family: 'Helvetica', sans-serif;
        white-space: normal;
        line-height: 1.3;
        text-align: center;
      }
      .imgWrap{
        border-radius: 50%;
        padding: 25px;
        width: 105px;
        height: 105px;
        background: $orange;
        margin-bottom: 10px;
        text-align: center;
      }
      img{
        width: 55px;
        height: 55px;
      }
    }
  } 
  
}

.md-card div.md-card-content.moduleOne.module .md-card.layoutThree{
  .listTitle{
    color: $orange;
  }
}

.md-card div.md-card-content.moduleOne.module .md-card.layoutThree.elements{
  max-height: 500px;
  overflow-y: scroll;
  h3{
    color: $orange;
  }
  .listWrap{
    width: 480px;


  }
  .listTitle{
    color: $grey;
  }
  .listItem{
    font-weight: 400;
  }
  .device{
    width: 166px;
    margin-right: 100px;
  }
  .els{
    /*margin-top: 15px;*/
    display: inline-block;
    width: calc(100%/5 - 20px);
    margin: 0 10px;
    vertical-align: top;
    &:first-of-type{
      margin-left: 0;
    }
    img, p{
      display: block;
      text-align: center;
      font-size: 12px;
    }
    img{
      width: 40%;
      margin: 0 auto;
    }
    .wrap{
      height: 86px;
      display: flex;
      align-items: center;
    }
  }
}

.md-card div.md-card-content.moduleOne.module .md-card.layoutThree.fin{
  .lineWrap{
    width: 100%;
    padding-right: 20px;
    p, a{
      font-size: 14px;
      &:first-child{
        font-weight:400;
      }
    }
  }
  .listWrap{
    width: 100%
  }
  ul{
    width: 100%;
      &:first-of-type{
        li{
          font-weight:400;
        }
        .listTitle{
          display: none;
        }
      }
  }
  .bold{
    margin-bottom: 5px;
  }
}


/*.slide-left-leave-active {
  display: none;
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}*/



.slide-left-enter-active {
  transition: all .4s ease-in-out;
}
.slide-left-leave-active, .slide-left-leave-to, .slide-enter-leave-active {
  /*position: absolute;*/
  opacity: 0;
  /*transition: all .4s ease-in-out;*/
  transition: 0s;
}

.slide-left-enter, .slide-left-leave-to, .slide-enter-leave-active {
  transform: translateX(800px);
}

/*.slide-left-enter-active {
  transition: all .4s ease;
}
.slide-left-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-left-enter, .slide-left-leave-to {
  transform: translateX(800px);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-800px);
}*/

.bold{
  font-weight: 700;
}
.orange{
  color: $orange;
}
.md-dialog-content:first-child{
  padding-top: 0 !important;
}
.md-dialog .md-dialog-content{
  /*padding: 0;*/
  /*height: 535px;*/
  p{
    margin-bottom: 10px;
  }
  .inner{
    max-height: 550px;
    overflow-y: scroll;
    padding: 24px;
  }
  ul{
    list-style: none;
    padding-left: 0;
    margin-top: 5px;
    &:last-of-type li:last-of-type{
      margin-bottom: 30px;
    }
  }
  li{
    margin-top: 0;
    padding-left: 2em; 
    /*text-indent: -.7em;*/
    position: relative;
    &:before{
      content: "• ";
      color: $orange;
      font-size: 36px;
      position: absolute;
      left: 8px;
    }
  }
}
.moduleSeven .md-input-container{width: 400px;}
.md-input-container input{
  /*box-shadow: 0px 1px #fff;*/
}
.md-card .md-card-content.module .moduleSeven li.md-list-item .md-list-item-container{
  margin: 0;
}
.md-theme-default.md-input-container label, .md-input-container input, .md-input-container.md-input-focused input{
  color: $grey !important;
  font-weight: 700;
}
.md-card .md-card-content.module .md-card.layoutThree.moduleSeven.cert button{
    /*background: $grey;*/
    color: #fff;
    width: 300px;
    padding: 10px 20px;
    box-sizing: content-box;
    margin-top: 30px;
    
}

.md-card .md-card-content.module .results p:first-child{
  font-weight: 400;
}
.certificate.md-dialog-container.md-active{
  margin: 20px auto;
}
.certificate .md-dialog{
    /*width: 100%;*/
    max-width: none;
    /*height: 100vh;*/
    max-height: none;
    text-align: center;

    button{
      margin-top: 30px;
      border-radius: 5px;
      /*background: $orange !important;*/
      /*color: #fff !important;*/
      font-weight: 700;
    }

    .close{
      /*background: $indi;*/
      width: auto;
      min-width: 0;
      border-radius: 50%;
      height: 42px;
      font-weight: 700;
      font-size: 16px;
      position: absolute;
      position: fixed;
      right: 20px;
      margin-top: 10px;
      text-align: center;
      &:hover{
        background: $grey;
      }
    }
}
.md-button.close{
  color: #fff;
  background: #000;
  /*float: right;*/
  position: fixed;
  right: 30px;
  min-width: auto;
  border-radius: 50%;
  height: 41px;
  font-weight: 700;
  margin-top: -10px;
  margin-right: -10px;
  cursor: pointer;
}
#print img{
  max-width: 90vw;
}
@media print {
  body * {
    visibility: hidden;
    writing-mode: tb-rl;
  }
  html, body {
    height:100%; 
    margin: 0 !important; 
    padding: 0 !important;
    overflow: hidden;
  }
  #print, #print * {
    visibility: visible;
  }
  #print {
    /*position: absolute;*/
    left: 0;
    top: 0;
    img{
      width: 100%;
      height: 100%;
    }
  }
  @page {size: landscape}
}

.md-card .md-card-content.module .md-card.layoutThree.moduleSeven.thanks{
  background: #004593;
  h3, img{
    color: #fff;
    display: inline-block;
    font-size: 40px;
    vertical-align: top;
    margin-top: 132px;
    margin-right: 100px;
    font-weight: 400;
  }
  img{
    width: 254px;
    margin-top: 74px;
  }
}

</style>
