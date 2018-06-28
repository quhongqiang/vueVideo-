<template>
  <div class="container">
  	<img class="zyimg" :src="zylogo" v-show="zyimg"/>
    <child :url='videoURL' :poster="poster" ref="child" @start="start" @ended="ended"></child>
		<div class="bg-img" v-show="show">
			<img id="img" :src="img" v-show="isShow"/>
		</div>
  </div>
</template>
<script>
	import child from '@/components/videoChild'
	export default {
	  name: 'app',
	  data () {
	    return {
		    videoURL: 'https://h5-file.oss-cn-hangzhou.aliyuncs.com/zy_bank/201805_520/video/0.mp4',
		    poster: '../static/start1.png',
	      isShow: true,
	      show: true,
	      zyimg: true,
	      img: '../static/left.png',
	      zylogo: '../static/zylogo.png'
	    }
  },
  components: {
    child
  },
  mounted () {
    setInterval(() => {
      if (!this.isShow) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }, 300)
  },
  methods: {
    start () {
      this.show = false
      this.zyimg = false
      this.poster = '../static/5201.jpg'
    },
    ended () {
      this.$router.push('/videoOne')
	    }
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.container{
		width: 100%;
		height: 100%;
	}
	#img{
		width: 70%;
    position: fixed;
    margin: auto;
    top: -8%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
	}
	.zyimg{
		width: 40%;
		position: fixed;
		margin: auto;
		left: 0;
		right: 0;
		top: 50px;
		z-index: 9990;
	}
</style>
