<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page.sync="currentPage"
    :page-size="pageSize"
    background
    layout="total, prev, pager, next"
    :total="totalItems">
  </el-pagination>
</template>

<script>
  export default {
    name: 'pagination',
    props: [
      'totalItems', // 数据总数
      'pageSize', // 每一页的数据数量
      'currentPage' // 当前页的编号
    ],
    data () {
      return {
      }
    },
    methods: {
      // pageSize(每页的数目) 改变时会触发
      handleSizeChange () {
      },
      /**
       * 这里是顺序非常重要,必须先改变页面currentPage,然后再触发页面改变事件
       */
      handleCurrentChange () {
        this.$emit('update:currentPage', this.currentPage)
        this.$emit('currentChange')
      }
    }
  }
</script>

<style scoped>

</style>
