<template>
  <div>
    <div class="right-list"
    v-for="(item, index) in boardList"
    :class="{'right-list-right' : index % 2 !==0}"
    >
      <img :src='item.urll'/>
      <h3>{{item.title}}</h3>
      <p>{{item.description}}</p>
      <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
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
          description: '开放产品是一款开放产品',
          urll: '../../assets/img/projectlogo/car.png',
          toKey: 'analysis',
          saleout: false
        },
        {
          title: 'jjj品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          urll: '../../assets/img/projectlogo/earth.png',
          toKey: 'count',
          saleout: false
        },
        {
          title: 'jjj使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          urll: '../../assets/img/projectlogo/loud.png',
          toKey: 'forecast',
          saleout: true
        },
        {
          title: 'jjj勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          urll: '../../assets/img/projectlogo/hill.png',
          toKey: 'publish',
          saleout: false
        }
       ]
      }
    }
}
</script>

<style scoped>




</style>
