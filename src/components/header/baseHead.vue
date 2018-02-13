<template>
  <el-header class="header-nav" style="height: 80px;">
    <el-row>
      <div class="nav-content">
        <el-col :span="16">
          <el-row>
            <router-link to="/index">
              <el-col :span="2">
                <img src="../../assets/img/logo.png" class="header-logo"/>
              </el-col>
              <el-col :span="22">
            <span class="nav-text">
              天津临港经济区建设服务中心建筑工程管理系统
            </span>
              </el-col>
            </router-link>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-col :span="11">
            <div>
              <el-input
                placeholder="请输入关键字"
                suffix-icon="el-icon-search"
                class="nav-input"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="message">
              <el-badge :value="12" class="nav-badge">
                <icon name="bell" class="my-icon"></icon>
              </el-badge>
            </div>
          </el-col>
          <el-col :span="3">
            <div>
              <img src="https://chengfy.com/_uploads/files/staneyffer.jpg" class="user-img"/>
            </div>
          </el-col>
          <el-col :span="5">
            <el-menu mode="horizontal" background-color="#303048" text-color="#ffff">
              <el-submenu index="1">
                <template slot="title">{{user.fullname}}</template>
                <el-menu-item index="1-1" @click="changPassword">修改密码</el-menu-item>
                <el-menu-item index="1-2" @click="changPortrait">更换头像</el-menu-item>
                <el-menu-item index="1-3" @click="setting">设置</el-menu-item>
                <el-menu-item index="1-4" @click="logoutSubmit">退出</el-menu-item>
              </el-submenu>
            </el-menu>

          </el-col>
        </el-col>

      </div>
    </el-row>

  </el-header>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'app',

    data () {
      return {
        layout: {
          menu: {
            bgColor: '#303048',
            textColor: '#ffff'
          }
        },
        userInfo: {
          name: '',
          username: '',
          aboutMe: '',
          age: null,
          email: null,
          gender: '未知',
          id: null,
          number: null,
          phone: null
        }
      }
    },
    mounted () {
      this.getUserInfo()
    },
    computed: {
      ...mapGetters({
        user: 'getUser'
      })
    },
    methods: {
      ...mapActions([
        'getUserInfo',
        'logout'
      ]),
      logoutSubmit () {
        this.logout()
        this.$router.push('/')
      },
      changPassword () {
      },
      changPortrait () {
      },
      setting () {
      }
    }
  }
</script>

<style scoped>
  .header-nav {
    background-color: #303048;
  }

  .nav-content {
    margin-top: 0.7%;
  }

  .header-logo {
    margin-left: 18%;
    margin-top: -2px;
  }

  .nav-input {
    margin-top: 5%;
  }

  .nav-text {
    font-size: 30px;
    color: #ffffff;
    height: 40px;
    display:block;
    margin-left: -10px;
    margin-top: 7px;
  }

  .nav-badge {
    margin-top: 20%;
  }
  .message {
    margin-left: 50%
  }
  .nav-text small {
    font-size: 10px;
  }

  .my-icon {
    width: auto;
    height: 1em; /* 或任意其它字体大小相对值 */
    font-size: 35px;
    color: white;
    /* 要在 Safari 中正常工作，需要再引入如下两行代码 */
    max-width: 100%;
    max-height: 100%;
  }

  .user-img {
    border-radius: 50%;
    margin-top: 12%;
    height: 45px;
    width: 45px;
  }
</style>
