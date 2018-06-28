<template>
  <div class="container">
    <child :url='videoURL' :poster="poster" ref="child" @ended="ended"></child>
		<div class="bg-img" @click="start" v-show="isShow"></div>
    <img id="img" :src="logo" @click="start" v-show="isShowImg" />
    <div class="bg-imgs" v-show="show">
    	<img class="img" :src="staticB"/>
    	<img class="img-jump" :src="jumpImg" @click="jump"/>
    </div>
  </div>
</template>
<script>
	import child from '@/components/videoChild'
	export default {
	  name: 'app',
	  data () {
	    return {
	      videoURL: 'https://h5-file.oss-cn-hangzhou.aliyuncs.com/zy_bank/201805_520/video/1.mp4',
	      poster: '../static/5202.jpg',
      isShow: true,
      isShowImg: true,
      show: false,
      logo: '../static/logo.png',
      staticB: '../static/B.jpg',
      jumpImg: '../static/jump.jpg'
    }
  },
  components: {
    child
  },
  methods: {
    start () {
      this.isShow = false
      this.isShowImg = false
      this.$refs.child.playvideo()
    },
    ended () {
      this.show = true
    },
    jump () {
      window.location.href = 'https://www.baidu.com/' //跳转页面
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bg-img{
		width: 3200px;
		height: 3200px;
    position: fixed;
    margin: auto;
    background: url(https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=752130035,3767757969&fm=200&gp=0.jpg) no-repeat center center;
		background-size: cover;
    top: 2%;
    bottom: 0;
    left: -55%;
    right: 0;
    z-index: 999;
    animation:circle 4s infinite linear;
    -webkit-animation:circle 4s infinite linear;
	}
	@-webkit-keyframes circle{
    0%{ transform:rotate(0deg); }
    100%{ transform:rotate(-360deg); }
  }
  @keyframes circle{
  	0%{ transform:rotate(0deg); }
    100%{ transform:rotate(-360deg); }
  }
	#img{
		width: 690px;
		height: 440px;
		position: fixed;
		top: 0;bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		z-index: 9999;
	}
	.img{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		z-index: 9999;
	}
	.img-jump{
		z-index: 10000;
    width: 700px;
    position: fixed;
    margin: auto;
    bottom: 18%;
    left: 0;
    right: 0;
	}
</style>
