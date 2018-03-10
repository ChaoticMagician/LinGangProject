<template>
  <div id="app">
    <ele-head id="firathead" 
    :username="username"
    :issuccess="issuccess"
    @on-open='openslot'
    >
    </ele-head>
    <router-view class="allcompoents"></router-view>
    <ele-foot id="firafoot">
    </ele-foot>
    <!-- 用户登录 -->
    <user-slot :isShow='logif' @closeall='closeall'>
      <user-lod @lod-success='lodsuccess' @closeall='closeall' ></user-lod>
    </user-slot>
    <!-- 用户注册 -->
    <user-slot :isShow='loginif' @closeall='closeall'>
      <user-lodin></user-lodin>
    </user-slot>
    <!-- 个人中心 -->
    <user-slot :isShow='Personalif' @closeall='closeall'>
      你好！！这里是个人中心，不能给你提供任何服务的
    </user-slot>
    <!-- 注销登陆 -->
    <user-slot :isShow='downlodif' @closeall='closeall'>
      是否注销该账户？<br/>
      <el-button size="medium" round @click="downlod" type="success" >注&emsp;销</el-button>
    </user-slot>

    <!-- 系统问题弹窗 -->
    <user-slot :isShow='errorwordif' @closeall='closeall'>
      现在还没有错误可以弹窗，，就问你厉不厉害！！！
    </user-slot>
  </div>
</template>

<script>
import userLodin from '@/components/elslot/userlogin'
import userLod from '@/components/elslot/userlod'
import userSlot from '@/components/elslot/userslot'
import eleFoot from '@/components/elfoot/ElFoot'
import eleHead from '@/components/elhead/ElHead'
export default {
  name: 'App',
  components: {eleHead, eleFoot, userSlot,userLod,userLodin},
  data (){
    return{
      username: 'liguo',
      userId: '321',
      issuccess: false, //是否登陆成功
      // 这里之下是solt的开启控制数据
      logif: false,
      loginif: false,
      Personalif: false,
      downlodif: false,
      errorwordif: false
      // 这里之上是solt的开启控制数据



    }
  },
  methods: {
    openslot: function (nu){
      switch (nu){
        case 1:this.logif = true;break;
        case 2:this.loginif = true;break;
        case 3:this.Personalif = true;break;
        case 4:this.downlodif = true;break;
        case 5:this.errorwordif = true;break;
        default: null;
      }
    },
    closeall: function (){
      this.logif = false,
      this.loginif = false,
      this.Personalif = false,
      this.downlodif = false,
      this.errorwordif = false
    },

    lodsuccess: function (userlodim){
      this.username = userlodim.username,
      this.userId = userlodim.userId,
      this.issuccess = true
    },
    downlod: function (){
      this.username = "",
      this.userId = "",
      this.issuccess = false,
      this.downlodif = false
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 972px;
  overflow-x: hidden;
  overflow-y: hidden; 
}
.allcompoents {
  /* width: 988px;
  height: 270px;*/
  width: 99.6%;
  height: 830px;
  /* height: auto; */
  padding: 4px;
  background: #f5f5f5;
}
</style>
