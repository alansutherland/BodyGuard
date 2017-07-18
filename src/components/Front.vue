<template>
  <div class="front">
    
    <md-card>
      <md-card-content class="single">
            <md-card md-with-hover class="card">
              <md-card-area md-inset>
                <div class="copy">
                  <p>The course has a number of chapters. If it’s the first time you go through the course it may be advisable for you to follow the schedule proposed here.</p>
                  <p>If you have already completed the course please select any chapter required by clicking on it. You can return to it any time.
                  <p>The pump can be set up in many ways but you will always follow your local policy and procedures first. </p>
                  Make sure you are well informed about your local policy and procedure before operating the pump.</p>
                  <p>To be set up in the seven main areas in the same manner as aic. </p>
                </div>
                <md-list class="nav">
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
              </md-card-area>
            </md-card>
      </md-card-content>
    </md-card>
    <div id="progress"></div>
  </div>
</template>

<script type="x/templates">

export default {
  name: 'front',
  data () {
    return {
      
    }
  },
  methods: {
    moduleSelected(e){
      this.$bus.$emit('moduleChosen', e)
    }
  },
  mounted: function(){
    this.moduleSelected(0)
  },
}

</script>

<style lang="scss" scoped>

$grey: #404041;
$lightGrey: #eaeaea;
$orange: #f27707;
$indi: #0A4790;

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
  height: 100vh;
  .md-card .md-card-area{
    text-align: left;
    /*max-height: 420px;*/
    overflow-y: scroll;
    height: 440px;
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
    /*width: 68%;*/
    width: 580px;
    /*max-width: 650px;*/
    padding-left: 10px;
  }
  .md-list-item{
    display: inline-block;
    width: 130px;
    margin-bottom: 20px;
    vertical-align: top;
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
      a{
        color: $grey;
        font-size: 14px;
        &:hover{
          text-decoration: none;
        }
      }
      p{
        width: 100%;
        text-align: center;
        line-height: 1.3;
        font-weight: 700;
        font-size: 14px;
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
        margin: 0 auto 15px;
      }
      img{
        width: 55px;
        height: 55px;
      }
    }
  } 
}

@media (max-width: 850px){
  .md-card .md-card-content.single{
    padding-left: 66px;
    overflow: scroll;
    padding-bottom: 300px;
    p{
      padding-bottom: 20px;
      width: auto;
    }
    .md-list{
      padding-left: 0;
      max-width: none;
      /*width: 100%;*/
      text-align: center;
    }
  } 
}


</style>
