<template>
  <el-dialog
      title=""
      :visible.sync="visible"
      width="30%"
      :before-close="beforeClose">
      <el-card :body-style="{ padding: '0px'}"
               v-loading="uploadFileLoading"
               element-loading-text="文件上传中...">
        <div slot="header" class="clearfix">
          <span class="upload-text">数据批量导入</span>
        </div>
        <el-row>
          <el-col :span="12" :offset="6">
            <div>
              <el-upload
                ref="upload"
                :action="action"
                :on-preview="fileHandlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :on-error="handleError"
                :file-list="fileList"
                :auto-upload="false">
                <div slot="tip" class="el-upload__tip">{{uploadTip}}</div>
              </el-upload>
            </div>
          </el-col>
        </el-row>
      </el-card>

      <span slot="footer">
        <el-button @click="beforeClose">取 消</el-button>
        <el-button type="primary" @click="submitFileUpload">导入</el-button>
      </span>
    </el-dialog>
</template>

<script>
  export default {
    name: 'file-upload',
    props: ['visible', 'fileList', 'action', 'uploadTip'],
    data () {
      return {
        uploadFileLoading: false
      }
    },
    methods: {
      /**
       * 关闭Dialog对话框关闭加载, 并给父组件返回对话框关闭信息， 将文件列表返回给父组件
       */
      handleClose () {
        this.visible = false
        this.uploadFileLoading = false
        this.$emit('update:visible', false)
        this.$emit('update:fileList', this.fileList)
      },
      /**
       * 处理关闭对话框的钩子
       */
      beforeClose (done) {
        this.$confirm('确认取消文件上传？')
          .then(_ => {
            this.handleClose()
            done()
          })
          .catch(_ => {})
      },
      /**
       * 文件上传成功
       */
      handleSuccess (response, file, fileList) {
        this.$message({
          message: '上传成功',
          type: 'success'
        })
        this.handleClose()
        this.$emit('on-success')  // 触发on-success事件
      },
      handleError (err, file, fileList) {
        this.$log.error(err)
        this.$message({
          message: '上传失败',
          type: 'error'
        })
        this.handleClose()
        this.$emit('on-error') // 触发on-error事件
      },
      /**
       * 点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据
       * @param file 文件对象
       */
      fileHandlePreview (file) {
      },
      /**
       * 文件列表移除文件时的钩子
       * @param file 默认传入的参数
       * @param fileList 存储文件信息的列表
       */
      handleRemove (file, fileList) {
      },
      /**
       * 自定义上传文件方法
       */
      submitFileUpload () {
        this.$refs.upload.submit()  // 调用子组件的submit方法
        this.uploadFileLoading = true // 启用上传加载画面
      }
    }
  }
</script>

<style scoped>

</style>
