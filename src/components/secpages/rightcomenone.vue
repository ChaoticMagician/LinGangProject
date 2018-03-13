<template>
    <div class="productlist">
        <h2>{{productInfo.head}}</h2>
        <p>{{productInfo.info}}</p>
        <table v-for="(item,index) in productInfo.table" :key="index" >
            <tr>
                <td>{{item.title}}:</td>
                <td><component :is="item.type" 
                :configinfo="item.vminfo" 
                :thisname="item.thisname" 
                @on-chance="chancebuyinfo"></component></td>
            </tr>
        </table>
        <span>当前价格：{{price}}</span><br/><br/>
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
              this.productInfo.table.forEach(element => {
                  this.nowbuyinfo[element.thisname] = element.vminfo.default
              });

            this.price = this.$options.methods.chanceprice(this);

            // let sunnum = 0
            // for (let key in this.nowbuyinfo){
            //     sunnum = sunnum +Number(this.nowbuyinfo[key])
            // }
            // this.price = sunnum

          },(err) => {
              console.log(err)
          }
        )
    },
    data (){
        return{
          productInfo: {},
          nowbuyinfo: {},
          price: 2
        }
    },
    methods: {
        chancebuyinfo: function(key,value){
            // let key = Object.keys(el)[0].toString()
            this.nowbuyinfo[key] = value
            console.log(this.nowbuyinfo)
            console.log(key,value)

            this.$options.methods.chanceprice(this);

            // let sunnum = 0
            // for (let key in this.nowbuyinfo){
            //     sunnum = sunnum +Number(this.nowbuyinfo[key])
            // }
            // this.price = sunnum
            //     console.log(this.price)

        },
        chanceprice: function(Obj){
            Obj.$http.get('/api/getPrice', Obj.nowbuyinfo).then(
                (res)=>{
                    Obj.price = res.data.amount
                },(err)=>{
                    console.log(err)
                }
            )
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
