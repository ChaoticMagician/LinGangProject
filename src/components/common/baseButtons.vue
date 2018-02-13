<template>
  <div>
    <el-button v-for="(bt, index) in buttons.slice(0, btShowCount)"
               :key="index"
               @click="activeButtonId(bt)"
               class="top-button" plain
               :style="bt.id  === activeId ? styleObj.button[0] : styleObj.button[1]">
      {{ bt.name }}
    </el-button>
    <!--<h2>{{btShowCount}}</h2>-->
    <el-dropdown v-if="showOtherButtons" @command="handleCommand">
      <!--当显示的数目不等于总数时候显示其它选择-->
      <el-button class="top-button" plain
                 :style="activeId >= btShowCount ? styleObj.button[0] : styleObj.button[1]">
        {{otherButtonName}}<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(bt, index) in buttons.slice(btShowCount, buttons.length)"
                          :key="index"
                          :command="bt">{{bt.name}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

</template>

<script>
  export default {
    name: 'base-buttons',
    props: {
      buttons: Array,
      acBtKey: String,
      showCount: {
        type: Number,
        default: -1
      }
    },
    data () {
      return {
        activeId: 0,  // 默认激活第一个按钮
        styleObj: {
          button: [
            {
              // 激活按钮样式
              color: '#ffff',
              backgroundColor: '#4988D1'
            },
            {
              // 非激活按钮样式
              color: '#4988D1',
              backgroundColor: '#ffff'
            }
          ]
        },
        otherButtonName: '其它'
      }
    },
    mounted () {
    },
    computed: {
      // submitData () {
      //   return {
      //     username: this.RegisterForm.username,
      //     password: this.RegisterForm.password
      //   }
      // },
      showOtherButtons () {
        // 全部显示
        if ((this.showCount !== -1) && (this.showCount !== this.buttons.length)) {
          return true
        } else {
          return false
        }
      },
      btShowCount () {
        if (this.showCount === -1) {
          // 默认显示全部
          return this.buttons.length
        } else {
          return this.showCount
        }
      }
    },
    methods: {
      activeButtonId (bt) {
        this.activeId = bt.id
        this.otherButtonName = '其它'
        this.$emit('update:acBtKey', bt.key)
        this.$emit('button-changed')
      },
      handleCommand (bt) {
        this.activeId = bt.id
        this.otherButtonName = bt.name
        this.$emit('update:acBtKey', bt.key)
      }
    }
  }
</script>

<style scoped>
  .top-button{
    height: 50px;
    width: 130px;
    font-size: 18px;
    margin-left: 25px;
  }
</style>
