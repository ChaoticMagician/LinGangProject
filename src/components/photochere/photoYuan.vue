<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <router-link 
      tag="a"
      :to="{path: slides[nowIndex].href}">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </router-link>
    </div>
    <h2>{{ slides[nowIndex].title }}
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item,index) in slides"
      @click="goto(index)"
      :key="index"
      >
        <a :class="{on: index === nowIndex}">{{ index + 1 }}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all .7s;
}
.slide-trans-enter {
  transform: translateX(100%);
}
.slide-trans-old-leave-active {
  transition: all .7s;
  transform: translateX(-100%);
}
.slide-show {
  position: relative;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  margin: 0;
  width: 100%;
  height: 100%;
  color: rgb(255, 255, 255);
  /* background: #000; */
  opacity: .5;
  bottom: 0;
  height: 10%;
  text-align: left;
  padding-left: 15px;
}
.slide-show h2:hover{
  position: absolute;
  margin: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 10%;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
  height: 100%;
}
.slide-img img {
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
}
.slide-pages {
  position: absolute;
  right: 15px;
  bottom: 0px;
  margin-bottom: 6px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
  font-size: 14px ;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>
