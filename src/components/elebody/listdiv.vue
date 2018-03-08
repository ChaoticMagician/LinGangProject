<template>
  <div>
    <div  class="list-left-col" v-for="product in productList" >
    <h3>{{product.title}}</h3>
    <ul>
        <li v-for="(item,key1) in product.list">
            <i class="el-icon-success"></i>&nbsp;
            <a :href="item.url">{{ item.name }}</a>
            <span v-if="item.hot" class="hot-tag">HOT</span>
        </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'listDiv',
    props: {
      productList: {
          type: Object,
          default: {
            pc: {
              title: 'PC产品',
              list: [
                {
                  name: '假数据统计',
                  url: 'http://starcraft.com'
                },
                {
                  name: '假数据预测',
                  url: 'http://warcraft.com'
                },
                {
                  name: '假流量分析',
                  url: 'http://overwatch.com',
                  hot: true
                },
                {
                  name: '假广告发布',
                  url: 'http://hearstone.com'
                }
                ]
            },
            app: {
              title: '假app产品',
              list: [
                {
                  name: '假数据统计',
                  url: 'http://starcraft.com'
                },
                {
                  name: '假数据预测',
                  url: 'http://warcraft.com'
                },
                {
                  name: '假流量分析',
                  url: 'http://overwatch.com',
                  hot: true
                },
                {
                  name: '假广告发布',
                  url: 'http://hearstone.com'
                }
                ]
            }
            }
        }
    }
}
</script>

<style scoped>
.list-left-col h3 {
  padding: 1px 10px 0px 10px;
  font-weight: bold;
  color: #222;
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.list-left-col ul {
  padding: 0 20px;
  margin: 0;
}
.list-left-col li {
  list-style: none;
  padding: 1px 0;
  /* padding: 5px; */
}
.list-left-col a {
  text-decoration: none;
  color: rgb(61, 61, 61);
  /* padding: 5px; */
}
.list-left-col i {
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
