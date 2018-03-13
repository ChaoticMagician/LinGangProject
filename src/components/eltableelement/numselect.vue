<template>
  <div class="numselect" :style='{background:configinfo.bgcolor}' >
      <div class="numselect-btn" @click="minus" > - </div>
      <input type="text" class="numselect-input" v-model="num" @keyup="inputnum" >
      <div class="numselect-btn" @click="add" > + </div>
  </div>
</template>

<script>
export default {
  name:'NumSelect',
  props: {
      configinfo: {
          default: {
            minnum: 1,
            maxnum: 5,
            ifuse: true,
            default: 1,
            bgcolor: "#ffffff"
          }
      },
      thisname: {
        default: '2222'
      }
  },
  data (){
    return{
    num: this.configinfo.default
    }
  },
  watch: {
    num: function(newnum,oldnum){
      let key = this.thisname
      let num = this.num
      // backobj[this.thisname] = this.num
      this.$emit('on-chance',key,num)
    }
  },
  methods: {
    inputnum () {
        let fix
        fix = Number(this.num.toString().replace(/\D/g, ''))
        if (fix >= this.configinfo.maxnum || fix <= this.configinfo.minnum) {
        fix = this.configinfo.minnum
      }
        this.num = fix
    },
    minus () {
        if (this.num <= this.configinfo.minnum) {
        return
    }
        this.num --
    },
    add () {
        if (this.num >= this.configinfo.maxnum) {
        return
    }
        this.num ++
    }
  }
}
</script>

<style scoped>
.numselect {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.numselect-input {
  float: left;
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  width: 30px;
  line-height: 23px;
  outline: none;
  text-indent: 4px;
}
.numselect-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.numselect-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}

</style>
