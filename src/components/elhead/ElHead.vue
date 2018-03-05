<template>
    <el-menu id='eleHead'
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1"><img src="../../assets/logo.png" class="logo-img" ></el-menu-item>
    <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4">订单管理</el-menu-item>
    <!-- 这里是用户登陆的组块 -->
      <ul class="userloder-ul">
        <li v-if="issuccess" @click="MyClick(4)">欢迎&nbsp;&nbsp;&nbsp;{{username}}</li>
        <li index="6" v-if="issuccess" @click="MyClick('3')">注销</li>
        <li index="7" v-if="!issuccess" @click="logClick">登录</li>
        <li index="8" v-if="!issuccess" @click="MyClick('2')">注册</li>
      </ul>
    </el-menu>
</template>

<script>
export default {
  name: 'eleHead',
  props: {
    username: {
      default: '12'
    },
    issuccess: {
      default: false
    }
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    logClick (){
        this.$emit('on-open',1)
    },
    MyClickCover (nu) {
      switch (nu){
        case 1:this.$emit('on-open',1);break;
        case 2:this.$emit('on-open',2);break;
        case 3:this.$emit('on-open',3);break;
        case 4:this.$emit('on-open',4);break;
        default: null;
      }
    }
  }
}
</script>

<style scoped>
.logo-img{
  width: 40px;
  height: 40px;
}
.userloder-ul{
  float: right;
  height: 58px;
  padding-left: 0px;
}
.userloder-ul li{
  height: 58px;
  padding: 0px 10px;
  line-height: 58px;
  float: left;
  color: rgb(255,255, 255);
  list-style: none;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
}
.userloder-ul li:hover{
  height: 58px;
  padding: 0px 10px;
  line-height: 58px;
  float: left;
  background-color: rgb(67, 74, 80);
  color: rgb(255, 208, 75);
  list-style: none;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
}
</style>
