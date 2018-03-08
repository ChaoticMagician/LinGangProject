<template>
  <el-row class='slot-wrap' type="flex" justify="center" align="center">
    <div class="slot-cover" v-if="isShow" @click="closemyself"></div>
  <transition name="drop">
    <el-col span="12" offset="6"
    class="slot-content"
    v-if="isShow">
      <p class="slot-close" @click="closemyself" ><i class="el-icon-close"></i></p>
      <slot class="slot-self">empty</slot>
    </el-col>
  </transition>
  </el-row>
</template>

<script>
export default {
  name: 'UserSlot',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closemyself: function (){
      this.$emit('closeall')
    }
  }
}
</script>

<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-750px);
}
.drop-leave-active {
  transform: translateY(-750px);
}
.slot-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.slot-cover {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: .5;
  top: 0em;
}
.slot-content {
  position: fixed;
  top: 25%;
  height: auto;
  width: auto;
  padding: 30px 45px 0 45px;
  border: 2px solid rgb(218, 216, 216);
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  border-radius: 20px;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
}
.slot-close {
  position: absolute;
  right: -11px;
  top: -11px;
  width: 40px;
  height: 40px;
  margin: 0;
  display:table-cell;
  vertical-align:bottom;
  font-size: 30px;
  font-weight: bolder;
  background: #4fc08d;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  border-radius: 20px;

}
.el-icon-close {
  color: #ffffff;
  position: absolute;
  left: 1px;
  bottom: 1px;
  font-weight: bold;
}
.slot-self {
  margin: 0 auto;
}
</style>
