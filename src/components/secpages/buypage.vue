<template>

  <el-row :gutter="20" >
      <el-col :span="6" :offset="1">
          <div class="productlist"   >
            <img :src='imgurl'>
            <router-link 
            v-for="team in product" 
            :key="team.path"
            :to="{path: team.path}"
            tag="li"
            active-class="fovusli"
            replace
            >
                {{team.name}}
            </router-link>
          </div>
      </el-col>
      <el-col :span="16">
          <router-view class="productlist" :thisRouth = 'lastPath' ></router-view>
          <router-view class="productlist" name="second" :thisRouth = 'lastPath' ></router-view>
      </el-col>
  </el-row>

</template>

<script>
export default {
    created: function(){
      this.$http.get('api/product').then(
          (res)=>
              this.product = res.data.data
          ,(err) => {
              console.log(err)
          }),

      this.$http.get('api/imgMap').then(
          (res)=>{
              this.imgmap = res.data.data
          },(err)=>{
              console.log(err)
          })
    },
    data () {
      return {
         product: [],
         imgmap: {}
      }
    },
    computed: {
        imgurl (){
            let localpath = this.$route.path
            return this.imgmap[localpath]
        },
        lastPath (){
            let localpath = this.$route.path
            let pathArry = localpath.split('/')
            let pathNum = pathArry.length-1
            let last = pathArry[pathNum]
            return last
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
    padding: 0 0;
}
.productlist li {
    display: block;
    list-style: none;
    font-size: 18px;
    font-weight: 600;
    padding: 5px 0;
    cursor:pointer;
}
.productlist li:hover {
    display: block;
    list-style: none;
    font-size: 18px;
    font-weight: 600;
    padding: 5px 0;
    background: #9be4c3;
    cursor:pointer;
}
.fovusli {
    background: #4dbe8b;
}
</style>
