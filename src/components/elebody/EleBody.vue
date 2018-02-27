<template>
  <div class='EleBody'>
    <el-row>
      <el-col :span="6" :offset="1"  >
        <div class="list-left-div">
        <h2>全部产品</h2>
        <template v-for="(product,key) in productList" >
          <h3 class="list-left-h3" >{{product.title}}</h3>
          <ul>
            <li v-for="(item,key1) in product.list">
              <i class="el-icon-success"></i>&nbsp;
              <a :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
        </template>
        </div>
      </el-col>
      <el-col :span="16">
        <photoyuan class="ppt-right-div"></photoyuan>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import photoyuan from '@/components/photochere/photoYuan.vue'
export default {
  name: 'EleBody',
  components: {photoyuan},
  data () {
    return {
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      }
    }
  }
}
</script>

<style scoped>
.ppt-right-div{
  width: 99%;
  height: 300px;
  margin: 10px;
}
.list-left-div{
  background: #ffffff;
}
.list-left-div h2{
  background: #4fc08d;
  color: #fff;
  font-size: 15px;
  padding: 10px 15px;
  text-align: left;
  margin: 10px 0;
}
.list-left-h3 {
  padding: 1px 10px 0px 10px;
  font-weight: bold;
  color: #222;
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.list-left-div ul {
  padding: 0 20px;
  margin: 0;
}
.list-left-div li {
  list-style: none;
  padding: 1px 0;
  /* padding: 5px; */
}
.list-left-div a {
  text-decoration: none;
  color: rgb(61, 61, 61);
  /* padding: 5px; */
}
.list-left-div i {
  text-decoration: none;
  color: #71cca3;
  /* padding: 5px; */
}
.hot-tag {
  background: red;
  color: #fff;
  font-size: 12px;
}
</style>
