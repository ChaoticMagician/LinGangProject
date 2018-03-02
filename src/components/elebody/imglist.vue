<template>
  <div >
    <div class="right-list"
    v-for="(item, index) in boardList"
    :class="{'right-list-right' : index % 2 !==0}"
    >
      <div :style="{background: 'url('+item.urll+') no-repeat',backgroundPosition: '12px 12px'}">
        <h3>{{item.title}}</h3>
        <p>{{item.description}}</p>
        <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'imgList',
    props: {
      boardList: {
        type: Array,
        default: [
        {
          title: 'jjj开放产品',
          description: '是一款开放产品',
          urll: '/static/projectlogo/car.png',
          toKey: 'analysis',
          saleout: false
        },
        {
          title: 'jjj品牌营销',
          description: '帮助你的产品更好地找到定位',
          urll: '/static/projectlogo/earth.png',
          toKey: 'count',
          saleout: false
        },
        {
          title: 'jjj使命必达',
          description: '快速迭代永远保持最前端的速度',
          urll: '/static/projectlogo/loud.png',
          toKey: 'forecast',
          saleout: true
        },
        {
          title: 'jjj勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          urll: '/static/projectlogo/hill.png',
          toKey: 'publish',
          saleout: false
        }
       ]
      }
    }
}
</script>
<style scoped>
.right-list {
  width: 49.4%;
  height: 125px;
  margin: 10px 0 0 0;
  background-color: #ffffff;
  box-shadow: 0 0 1px #ddd;
  overflow: hidden;
  display: inline-block;
}
.right-list h3 {
  margin: 0;
  padding: 8px 0 0 4px;
}
.right-list div {
  min-height: 125px;
  padding-left: 150px;

}
.right-list p {
  width: 16em;
  margin: 0;
  padding: 8px 0 25px 0;
  
}
.button {
  padding: 10px 20px;
  margin-left: 60px;
  text-decoration:none;
  background: #71cca3;
  color: #ffffff;
}
.right-list-right {
  float: right;
  margin-right: 0;
}
</style>
