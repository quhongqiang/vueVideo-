<template>
  <div class="container" :class="[{an:isAndroid,ios:isiOS}]">
    <video id="first-video"
    			 width="100%"
    			 height="100%"
    			 x5-video-player-type="h5"
    			 x5-video-player-fullscreen="true"
    			 x5-playsinline=""
    			 playsinline
    			 webkit-playsinline=""
    			 preload="auto"
    			 :src="url"
    			 :poster="poster"
    			 x-webkit-airplay="allow"
    			 @click="pauseVideo"
    			 @ended="onPlayerEnded($event)"
    >
    </video>
    <img v-show="isVideoShow" class="play" @click="playvideo" v-if="isiOS" :src="poster" />
  	<img v-show="isShow" class="platStart" @click="androidPlay" v-if="isAndroid"  :src="poster">
		
  </div>
</template>
<script>
	export default {
	  name: 'videoChild',
	  props: {
	    'url': String,
	    'poster': String
	  },
	  data () {
	    var u = navigator.userAgent
	    return {
	      isVideoShow: true,
	      isShow: true,
	      video: null,
	      status: 'ios',
	      isAndroid: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
	      isiOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
	    }
	  },
	  methods: {
	    playvideo () {
	      this.$emit('start')
	      if (this.isiOS) {
	        let video = document.querySelector('video')
	        this.isVideoShow = false
	        video.play()
	        window.onresize = function () {
	          video.style.width = window.innerWidth + 'px'
	          video.style.height = window.innerHeight + 'px'
	        }
	      } else {
	        let video = document.querySelector('video')
	        this.isShow = false
	        video.play()
	      }
	    },
	    pauseVideo () {
	      let video = document.querySelector('video')
	      video.play()
	    },
	    onPlayerEnded () {
	      this.$emit('ended')
	      this.isVideoShow = false
	      this.isShow = false
	    },
	    androidPlay () {
	      this.$emit('start')
	      let video = document.querySelector('video')
	      this.isShow = false
	      video.play()
	    }
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#first-video{
    object-fit: fill;
  }
  .container {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
  }
  .play,.platStart{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
</style>
