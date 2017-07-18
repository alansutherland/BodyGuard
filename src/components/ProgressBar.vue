<template>
  <div id="progress">
  		<md-progress :md-progress="progressPercent"></md-progress>
  		<span class="progText">Progress <b>{{progressPercent}}%</b></span>
  		<div class="progNav" v-if="moduleView">
	  		<router-link v-on:click="moduleSelected(0)" to='/front'>
				<md-icon class="home">home</md-icon>
	  		</router-link>
  		</div>
  </div>
</template>

<script type="x/templates">

export default {
  name: 'progress',
  data () {
    return {
      progressPercent: 40,
      slidePosition: 0
    }
  },
}

</script>

<style lang="scss">

$grey: #404041;
$orange: #f27707;
$indi: #0A4790;
$lightGrey: #eaeaea;


#progress{
  background: $lightGrey;
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1;

  .md-progress{
  	height: 15px;
  	width: 325px;
    position: relative;
    margin-top: 15px;
    float: left;
    margin-left: 145px;
  	.md-progress-track{
  		background: #8d2a90;
  	}
  }
  .progText{
  	position: relative;
    margin-top: 13px;
    float: left;
    margin-left: 15px;
    font-family: 'Helvetica', sans-serif;
  }
  .progNav{
  	float: right;
  	margin-top: -25px;
  	margin-right: 20px;
  	display: flex;
  	z-index: 1;
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
  	    	width: 35px;
  	    	z-index: 1;
  	    }
  	}
  	a{
  		margin-right: 25px;
  		text-decoration: none;
  	}
  	.imgWrap{
		margin: 0 75px 0 0;
		position: relative;
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
  }
  .progNav.modulated{
  	  margin-right: 270px;
  }
}

</style>
