<template>
  <div class="user-land">
    用户名：<el-input type="input" size="medium"/><br/><br/><br/>
    密&emsp;码：<el-input type="input" size="medium"/><br/><br/><br/>
    <el-button size="medium" round class="user-land-button" >登陆</el-button>
  </div>
</template>

<script>
export default {
    name: 'userland'
  
}
</script>

<style scoped>
.user-land {
  width: 300px;
  height: 300px;
  padding-top: 80px;
  font-size: 16px;
  
  float: left;
}
.el-input {
  width: 230px;
}
.el-button{
  margin: 0 130px;
  color: #ffffff;
  background-color: #4fc08d;
}
</style>
