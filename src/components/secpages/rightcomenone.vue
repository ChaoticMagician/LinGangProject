<template>
    <div class="productlist">
        <h2>{{productInfo.head}}</h2>
        <p>{{productInfo.info}}</p>
        <table v-for="(item,index) in productInfo.table" :key="index" >
            <tr>
                <td>{{item.title}}:</td>
                <td><component :is="item.type" :configinfo="item.vminfo"  ></component></td>
            </tr>
        </table>
        <el-button size="medium" round class="buy-right-button" >购&emsp;买</el-button>
    </div>
</template>

<script>
import NumSelect from '@/components/eltableelement/numselect'
export default {
    components: {'numselect': NumSelect},
    props: {
        thisRouth: {
        default: 'forecast'
        }
    },
    created: function(){
        this.$http.get('/api/buyPageInfo',this.thisRouth).then(
          (res)=>{
                this.productInfo = res.data
              console.log(this.productInfo)
          },(err) => {
              console.log(err)
          }
        )
    },
    data (){
        return{
          productInfo: {},
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
.buy-right-button{
    background-color: #4fc08d;
    color: #ffffff;
}
</style>
