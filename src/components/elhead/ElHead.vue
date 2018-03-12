<template>
    <el-menu id='eleHead'
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router= true>
    <el-menu-item index="/"  >
        <img src="../../assets/logo.png" class="logo-img" >
    </el-menu-item>
    <el-submenu index="2">
        <template slot="title">产品详情</template>
        <el-menu-item index="/detail/analysis">流量分析</el-menu-item>
        <el-menu-item index="/detail/count">数据统计</el-menu-item>
        <el-menu-item index="/detail/forecast">数据预测</el-menu-item>
        <el-submenu index="/detail/publish">
        <template slot="title">广告发布</template>
        <el-menu-item index="/detail/publish">选项1</el-menu-item>
        <el-menu-item index="/detail/publish">选项2</el-menu-item>
        <el-menu-item index="/detail/publish">选项3</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4">订单管理</el-menu-item>
    <!-- 这里是用户登陆的组块 -->
      <ul class="userloder-ul">
        <li v-if="issuccess" @click="MyClickCover(3)">欢迎&nbsp;&nbsp;&nbsp;{{username}}</li>
        <li index="6" v-if="issuccess" @click="MyClickCover(4)">注销</li>
        <li index="7" v-if="!issuccess" @click="MyClickCover(1)">登录</li>
        <li index="8" v-if="!issuccess" @click="MyClickCover(2)">注册</li>
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
    logClick:function (){
        this.$emit('on-open',1)
    },
    MyClickCover:function (nu) {
      this.$emit('on-open',nu);
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
