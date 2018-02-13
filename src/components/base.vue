<template>
  <div>
    <div>
      <base-head>
      </base-head>
    </div>
    <el-container>
      <el-main>
        <div class="content">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    import footDown from '@/components/footer/foot'
    import baseHead from '@/components/header/baseHead'

    export default {
      name: 'base',
      data () {
        return {

        }
      },
      components: {
        baseHead,
        footDown
      }
    }
</script>

<style scoped>
.content {
}
</style>
