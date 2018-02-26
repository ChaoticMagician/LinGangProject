<template>
    <div v-for="(product,key) in productList" class="list-left-col" >
        <h3 class="list-left-h3" >{{product.title}}</h3>
        <ul>
            <li v-for="(item,key1) in product.list">
                <i class="el-icon-success"></i>&nbsp;
                <a :href="item.url">{{ item.name }}</a>
                <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "没有产品"
        },
        list: {
            type: Array,
            default: []
        }
    }
}
</script>

<style scoped>
.list-left-h3 {
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
}
</style>
