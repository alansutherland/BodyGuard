<template>
  <md-card-header class="md-primary header">
      <h1 class="md-title logo"><router-link to='/' v-on:click.native="moduleSelected(0)"><img src="../assets/logo.svg" alt="BodyGuard Logo"></router-link><p>BodyGuard 323 <span>ColorVision ™</span></p></h1>
  </md-card-header>
</template>

<script type="x/templates">

export default {
  name: 'logo',
  methods: {
    moduleSelected(e){
      this.$bus.$emit('moduleChosen', e)
    }
  }
}

</script>

<style lang="scss" scoped>

$orange: #f27707;

.md-card-header.header{
	padding: 0;
	text-align: left;
    background: white;
}

.md-card-header .logo{
	margin-top: 0;
	font-weight: 700;
	font-size: 16px;
	border-bottom: 2px solid $orange;
	margin-bottom: 0;
	img{
		margin-right: 10px;
		width: 135px;
		padding: 15px;
	}
	p{
		display: inline-block;
		margin: 0;
		vertical-align: middle;
	    width: 140px;
	    line-height: 1.2;
	    font-family: 'Verdana-Bold', 'Verdana', sans-serif;
	}
	span{
		font-weight: 400;
		font-size: 14px;
		font-family: 'Verdana', sans-serif;
	}
}

</style>