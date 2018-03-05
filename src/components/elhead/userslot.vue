<template>
  <el-row class='slot-wrap' type="flex" justify="center" align="center" >
    <div class="slot-cover" v-if="isShow" ></div>
  <transition name="drop">
    <el-col span="12" offset="6"
    class="slot-content"
    v-if="isShow">
      <p class="slot-close" ><i class="el-icon-close"></i></p>
      <slot>empty</slot>
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
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
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
.slot-content{
  position: fixed;
  top: 25%;
  height: auto;
  width: auto;
  padding: 10px 50px 0 50px;
  border: 2px solid rgb(218, 216, 216);
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  border-radius: 20px;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
}
.slot-close{
  position: absolute;
  right: -4px;
  top: -4px;
  width: 30px;
  height: 30px;
  margin: 0;
  display:table-cell;
  vertical-align:bottom;
  font-size: 20px;
  font-weight: bolder;
  background: #4fc08d;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  border-radius: 15px;

}
.el-icon-close{
  color: #ffffff;
  position: absolute;
  left: 1px;
  bottom: 1px;
  font-weight: bold;
}
</style>
