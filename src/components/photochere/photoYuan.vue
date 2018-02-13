<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <!-- <a :href="slides[nowIndex].href"> -->
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      <!-- </a> -->
    </div>
    <h2>{{ slides[nowIndex].title }}
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item, index) in slides"
      @click="goto(index)"
      :key="item"
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
  data () {
    return {
      nowIndex: 0,
      isShow: true,
      inv: 4500,
      slides: [
        {
          src: require('../../assets/img/temp/lingang1.jpg'),
          title: '俯视美景',
          href: 'null'
        },
        {
          src: require('../../assets/img/temp/lingang2.jpg'),
          title: '商务楼宇',
          href: 'null'
        },
        {
          src: require('../../assets/img/temp/lingang3.jpg'),
          title: '滨海桥',
          href: 'null'
        },
        {
          src: require('../../assets/img/temp/lingang4.jpg'),
          title: '海河夜景',
          href: 'null'
        }
      ]
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
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(989px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-989px);
}
.slide-show {
  position: relative;
  width:  989px;
  height: 270px;
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
  height: 30px;
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
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
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
