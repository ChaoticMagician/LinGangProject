<template>
  <div class="user-land">
    <h3>用户登录</h3>
    用户名：<el-input type="input"
    size="medium"
    placeholder="请输入内容"
    clearable/><br/>
    邮&emsp;箱：<el-input type="input"
    size="medium"
    placeholder="请输入内容"
    clearable/><br/>
    电&emsp;话：<el-input type="input"
    size="medium"
    placeholder="请输入内容"
    clearable/><br/>
    密&emsp;码：<el-input type="input"
    size="medium"
    placeholder="请输入内容"
    clearable/><br/>
    确&emsp;认：<el-input type="input"
    size="medium"
    placeholder="请输入内容"
    clearable/><br/>
    验证码：<el-input type="input"
    size="medium"
    placeholder="请输入内容"
    clearable/><br/>
    <el-button size="medium" round class="user-land-button" >注&emsp;册</el-button>
     <!-- 这里是登陆面板底部的动画,,,,,,本来要做动画的做了一天做不出来，先不做了 -->
    <div class="user-land-svg"></div>
  </div>
</template>

<script>
export default {
    name: 'userland'
}
</script>

<style scoped>
.user-land {
  width: 400px;
  height: 450px;
  padding-top: 0;
  font-size: 16px;
  float: left;
}
.user-land h3 {
  width: 400px;
  color: #68ecb1;
  text-align: center;
  font-size: 28px;
  margin-top: 0;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(90, 90, 90, 0.657);
}
.el-input {
  width: 330px;
  margin-bottom: 10px;  
}
.el-button{
  margin: 10px 0 0 160px;
  color: #ffffff;
  background-color: #4fc08d;
}
.user-land-svg{
  position:  absolute;
  bottom:  0px;
  width: 490px;
  height:  90px;
  left: 0;
  background: url(../../../static/wave/城市剪影.svg);
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>
