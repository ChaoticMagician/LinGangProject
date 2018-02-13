<template>
  <!--多选表格-->
  <el-table :data="activeData" stripe style="width:100%;"
            @selection-change="handleSelectionChange"
            @row-click="rowClick"
            @cell-click="handlerCellClick">
      <el-table-column type="selection"
                       width="55"></el-table-column>
      <el-table-column v-for="(item, index) in projectTable"
                       :key="index"
                       :prop="item.key"
                       :label="item.label"
                       :width="item.width">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!--自定义区域 scoped-slot可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据-->
          <!--这里有一个Bug， 多组表格数据 slot名字重复-->
          <!--通过index, 和row向父组件传递行号和行数据, 父组件通过slot-scope取得本组件的插槽的index和row信息-->
          <slot name="myBaseTableC" :index="scope.$index" :row="scope.row">
            这里是自定义的列, 只有父组件没有数据分发的时候才会显示这里的内容
          </slot>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
  export default {
    name: 'base-table',
    /**
     * activeData: 表格数据
     * projectTable: 表格的表头信息
     * selectData: 传递给父组件的多选数据
     */
    props: ['activeData', 'projectTable', 'selectData', 'currentRow'],
    data () {
      return {
      }
    },
    mounted () {
      // alert('basetable')
    },
    methods: {
      /**
       * 将选择的多行数据传递给调用它的父组件
       */
      handleSelectionChange (val) {
        this.$emit('update:selectData', val)
      },
      /**
       * s
       * @param row 行数据
       * @param column
       * @param cell
       * @param event
       */
      rowClick (row, column, cell, event) {
        this.$emit('update:currentRow', row)
      },
      handlerCellClick (row, column, cell, event) {
      }
    }

  }
</script>

<style scoped>
</style>
