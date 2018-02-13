<template>
  <el-dialog
    title=""
    :visible.sync="visible"
    width="30%"
    :before-close="beforeClose">
    <div>
      <el-row>
        <el-col :span="4" :offset="10">
          <div>
            <i class="el-icon-circle-check-outline icon-success"></i>
          </div>
        </el-col>
        <el-col :span="8" :offset="8">
          <div class="tip-div">
            <span class="big-tip">提交完成!</span>
          </div>
        </el-col>
        <el-col :span="12" :offset="6">
          <div class="tip-div-text">
            <span class="small-tip">您已经成功添加</span>
            <span class="small-tip-bold">{{tipText}}</span>
            <span class="small-tip">信息</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: 'submit-form',
    props: ['visible', 'tipText'],
    data () {
      return {
      }
    },
    methods: {
      /**
       * 关闭Dialog对话框关闭加载, 并给父组件返回对话框关闭信息， 将文件列表返回给父组件
       */
      handleClose () {
        this.visible = false
        this.$emit('update:visible', false)
        this.$emit('on-close')
      },
      beforeClose () {
        this.handleClose()
      }
    }
  }
</script>

<style scoped>
  .icon-success{
    font-size: 80px;
    color: #7EC368;
  }
  .tip-div {
    margin-top: 25%;
  }
  .big-tip {
    font-size: 28px;
    margin-left: 15%;
  }
  .tip-div-text {
    margin-top: 5%;
  }
  .small-tip {
    font-size: 18px;
  }
  .small-tip-bold {
    font-size: 18px;
    font-weight: bold;
  }
</style>
