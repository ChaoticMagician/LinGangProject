<template>
  <div class='EleBody'>
    <el-row>
      <el-col :span="6" :offset="1"  >
        <div class="list-left-div">
        <h2>全部产品</h2>
        <list-div :productList="productList" ></list-div>
        </div>
      </el-col>
      <el-col :span="16">
        <photoyuan class="ppt-right-div" :inv="inv" :slides="slides" ></photoyuan>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import photoyuan from '@/components/photochere/photoYuan.vue'
import listDiv from '@/components/elebody/listdivtest.vue'
export default {
  name: 'EleBody',
  components: {photoyuan,listDiv},
  data () {
    return {
      el: "test",
      //这是轮播图的数据部分
      inv: 4500,
      slides: [
        {
          src: require('../../assets/img/temp/lingang1.jpg'),
          title: '俯视美景',
          href: 'null'
        },
        {
          src: require('../../assets/img/temp/lingang2.jpg'),
          title: '商务楼宇',
          href: 'null'
        },
        {
          src: require('../../assets/img/temp/lingang3.jpg'),
          title: '滨海桥',
          href: 'null'
        },
        {
          src: require('../../assets/img/temp/lingang4.jpg'),
          title: '海河夜景',
          href: 'null'
        }
      ],
      //这是list的数据部分
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
</style>
