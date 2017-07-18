<template>
  <div>
    <md-card v-if="password" class="landing single">
      <md-card-content>
          <img class="bg" src="../assets/landing.svg" alt="Body Guard">
          <md-card class="card">
            <md-card-area md-inset>
              <md-card-header class="md-primary header">
                  <h1 class="md-title logo"><router-link to='/'><img src="../assets/logo.svg" alt="BodyGuard Logo"></router-link><p>BodyGuard 323 <span>ColorVision ™</span></p></h1>
              </md-card-header>
              <div class="subLanding">
                <p><span>Your digital </span><span>training guide</span></p>
                <router-link to='/front'>Start</router-link>
                <img class="device" src="../assets/device.png" alt="Body Guard">
              </div>
            </md-card-area>
          </md-card>
      </md-card-content>
    </md-card>
    <md-card v-else class="single password">
      <md-card-content>
          <md-card class="card">
            <md-card-area md-inset>
              <div class="subLanding">
                <h2>Enter Password To Continue</h2>
                <input type="text" v-model="answer">
                <input type="submit" v-on:click="checkPassword(answer)">
              </div>
            </md-card-area>
          </md-card>
      </md-card-content>
    </md-card>
  </div>
</template>

<script type="x/templates">


export default {
  name: 'landing',
  data () {
    return {
      landing: true,
      password: false,
      answer: ''
    }
  },
  methods: {
    landed: function(){
      this.landing = false
    },
    checkPassword: function(e){
      if(e === 'staging'){
        this.password = true
      } else {
        this.password = false
      }
    }
  }
}

</script>

<style lang="scss" scoped>

$grey: #404041;
$lightGrey: #eaeaea;
$orange: #f27707;
$indi: #0A4790;

.password{
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  padding-top:50px;
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

.md-card .md-card-content.single{
  padding-left: 145px;
  padding-top: 45px;
  .md-card .md-card-area{
    text-align: left;
  }  
  p{
    text-align: left;
    font-family: 'ArialMT', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 16px;
    width: 235px;
    margin: 0;
    line-height: 1.5;
    display: inline-block;
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

.md-card.single.landing{
  /*position: absolute;*/
  top: -122px;
  z-index: 10;
  width: 100%;
  height: 100vh;
  .md-card-content{
    padding: 0;
    /*background: url('../assets/landing.svg') no-repeat;*/
    /*background-size: 100% 288px;
    background-position-y: 183px;*/
    /*background-size: 100% 100%;*/
    /*background-position-y: 50px;*/
    @media (max-width: 960px){
      background-position-y: -90px;
    }
    @media (max-width: 670px){
      background-size: 180% 288px;
      background-position-y: 190px;
    }
    .bg{
      position: absolute;
      width: 100%;
      height: 700px;
      height: 100vh;
      left: 0;
      top: -100px;;
      @media(max-width: 1100px){
        top: -20px;
      }
    }

    .md-card{
      background: transparent;
      .subLanding{
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 915px;
        padding-right: 110px;
        margin: 0 auto;
        height: 435px;
        p{
          font-family: 'Helvetica',sans-serif;
          font-weight: 400;
          font-size: 30px;
          color: #fff;
          width: 205px;
          text-align: left;
          line-height: 1.1;
          margin: 10px 0 0;
          span:last-child{
            font-family: 'Helvetica-Bold', 'Helvetica Bold', 'Helvetica';
            font-weight: 700;
          }
        }
        a{
          background: $orange;
          font-size: 16px;
          color: #fff;
          font-family: 'Helvetica-Bold', 'Helvetica Bold', 'Helvetica';
          font-weight: 700;
          padding: 9px;
          border-radius: 5px;
          height: 41px;
          width: 125px;
          margin-top: 25px;
          margin-left: 63px;
          &:hover{
            text-decoration: none;
          }
        }
      }
    }
  }
  .device{
    width: 308px;
  }
  .md-card .md-card-header{
    /*padding-left: 109px;*/
    padding-top: 40px;
    padding-bottom: 0;
  }
  h1{
    display: flex;
    max-width: 915px;
    margin: 0 auto;
    img{
      width: 157px;
      display: inline-block;
      text-align: left;
      padding: 0;
      margin: 0 23px 0 0;
    }
    p{
      width: 215px;
      text-align: left;
      margin: 7px 0 0;
      font-family: 'Verdana Bold', 'Verdana', sans-serif;
      font-weight: 700;
      font-size: 24px;
      line-height: 1;
      span{
        font-family: 'Helvetica', sans-serif;
        font-weight: 400;
        font-size: 20px;
      }
    }
  }
  @media (max-width: 960px){
    h1{
      justify-content: center;
      p{
        padding: 5px 0 0 10px;
      }
      p, p span{
        font-size: 16px;
      }
    }
     .md-card-content .md-card .subLanding{
      padding-right: 0;
      display: block;
      p{
        margin: 190px 0 0;
        display: inline-block;
      }
      a{
        padding: 10px 40px;
      }
      img{
        display: block;
        margin: 90px auto 30px;
        padding: 0 30px;
      }
    }
  }
  @media (max-width: 450px){
    .md-card-content .md-card .subLanding{
      p{
        margin: 200px 30px 0;
        display: block;
      }
      a{
        margin: 100px auto 0;
        display: block;
        width: 250px;
      }
      img{
        margin: 40px auto 30px;
      }
    }
  }
}

.landing.slide-left-enter-active, .landing.slide-left-leave-active,  .landing.slide-left-enter, .landing.slide-left-leave-to, .landing.slide-enter-leave-active {
  transition: none;
  transform: translateX(0);
  opacity: 1;
  display: block;
}



</style>
