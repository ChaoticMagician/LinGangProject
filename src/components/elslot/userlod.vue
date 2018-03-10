<template>
  <div class="user-land">
    <h3>用户登录</h3>
    用户名：<el-input type="input"
    size="medium"
    placeholder="请输入内容"
    v-model="username"
    clearable/><br/>
    密&emsp;码：<el-input type="input"
    size="medium"
    placeholder="请输入内容"
    v-model="userpoword"
    clearable/><br/>
    <p class="errorim">{{errorText}}{{nameerrorim.errorim}}{{passworderrorim.errorim}}</p>
    <el-button size="medium" round class="user-land-button" @click="lodthis" >登&emsp;陆</el-button>
     <!-- 这里是登陆面板底部的动画,,,,,,本来要做动画的做了一天做不出来，先不做了 -->
    <div class="user-land-svg"></div>
  </div>
</template>

<script>
export default {
    name: 'userland',
    data () {
      return{
        username:'',
        userpoword: '',
        errorText: ''
      }
    },
    computed: {
      nameerrorim: function (){
        let iferror,errorim
        if(!/@/g.test(this.username)){
          iferror = true,
          errorim = '用户名缺少“@”，',
          this.errorText = ''
        }else{
          iferror =false,
          errorim = ''
        }
        if (!this.username) {
          errorim = ''
        }
        return {
          iferror,errorim
        }
      },
      passworderrorim: function (){
        let iferror,errorim
        if(!/^\w{1,6}$/g.test(this.userpoword)){
          iferror = true,
          errorim = '密码为1-6位字母数字',
          this.errorText = ''
        }else{
          iferror =false,
          errorim = ''
        }
        if (!this.userpoword) {
          errorim = ''
        }
        return {
          iferror,errorim
        }
      },
    },
    methods: {
      lodthis:  function(){
        console.log(this.username,this.userpoword)
        if(this.nameerrorim.iferror||this.passworderrorim.iferror){
          this.errorText = ''
        }else if(!this.username||!this.userpoword){
          this.errorText = '用户名或密码为空'
        }else{
          this.errorText = ''
          this.$http.get('api/login')
          .then((res) => {
            this.$emit('lod-success', res.data.data),
            this.$emit('closeall')
          }, (error) => {
            console.log(error)
          })
        }
      }
    }
}
</script>

<style scoped>
.user-land {
  width: 300px;
  height: 300px;
  padding-top: 0;
  font-size: 16px;
  float: left;
}
.user-land h3 {
  width: 300px;
  color: #68ecb1;
  text-align: center;
  font-size: 28px;
  margin-top: 0;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(90, 90, 90, 0.657);
}
.el-input {
  width: 230px;
  margin-bottom: 10px;  
}
.el-button{
  margin: 10px 0 0 140px;
  color: #ffffff;
  background-color: #4fc08d;
}
.errorim{
  margin: 0;
  color: red;
  text-align: center;
}
.user-land-svg{
  position:  absolute;
  bottom:  0px;
  width: 390px;
  height:  90px;
  left: 0;
  background: url(../../../static/wave/城市剪影.svg);
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>
