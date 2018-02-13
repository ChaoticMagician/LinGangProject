<template>
  <div>
    <div>
      <base-head>
      </base-head>
    </div>
    <el-container>
      <el-main>
        <div class="content">
          <el-card>
            <div slot="header">
              <el-row>
                <el-col :span="22">
                  <el-breadcrumb separator=">">
                    <el-breadcrumb-item
                      v-for="(thePath, index) in $route.meta.paths" :key="index"
                      :to="{ path: index === ($route.meta.paths.length-1) ? $route.path : thePath.url }">
                      {{thePath.name}}
                    </el-breadcrumb-item>
                  </el-breadcrumb>
                </el-col>
                <el-col :span="2">
                  <!--<span>返回上一级</span>-->
                </el-col>
              </el-row>

            </div>
            <router-view></router-view>

          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import footDown from '@/components/footer/foot'
  import baseHead from '@/components/header/baseHead'
  export default {
    name: 'main-base',
    data () {
      return {
      }
    },
    components: {
      baseHead,
      footDown,
      'remote-js': {
        render (createElement) {
          return createElement('script', {attrs: {type: 'text/javascript', src: this.src}})
        },
        props: {
          src: {type: String, required: true}
        }
      }
    }
  }
</script>

<style scoped>
.content {
  /*margin-top: 1%;*/
}
</style>
