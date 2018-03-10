<template>
    <div class="productlist">
        <ul>
            <li  v-for="teamone in product" >{{teamone.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    created: function(){
      this.$http.get('api/product').then(
          (res)=>
              this.product = res.data.data
          ),(err) => {
              console.log(err)
          }
    },
    data () {
      return {
         product: []
      }
    }
}
</script>

<style scoped>
.productlist {
    width: 100%;
    background-color: #ffffff;
    box-shadow: 4 4 1px #ddd;
    text-align:center;
}
.productlist ul {
    padding: 0;
}
.productlist li {
    list-style: none;
    font-size: 18px;
    font-weight: 600;
    padding: 5px 0;
}
.productlist li:hover {
    list-style: none;
    font-size: 18px;
    font-weight: 600;
    padding: 5px 0;
    background: #9be4c3;
}
</style>
