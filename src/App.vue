<template>
  <div id="app">
    <ele-head id="firathead" 
    :username="username"
    :issuccess="issuccess"
    @on-open='openslot'
    >
    </ele-head>
    <router-view class="allcompoents"></router-view>
    <ele-foot id="firafoot">
    </ele-foot>
    <user-slot :isShow='logif' @closeall='closeall'>
      <user-land></user-land>
    </user-slot>
  </div>
</template>

<script>
import userLand from '@/components/elslot/userland'
import userSlot from '@/components/elslot/userslot'
import eleFoot from '@/components/elfoot/ElFoot'
import eleHead from '@/components/elhead/ElHead'
export default {
  name: 'App',
  components: {eleHead, eleFoot, userSlot,userLand},
  data (){
    return{
      username: 'liguo',
      issuccess: false,
      logif: false
      
    }
  },
  methods: {
    openslot: function (nu){
      switch (nu){
        case 1:this.logif = true;break;
        case 2:console.log (nu);break;
        case 3:console.log (nu);break;
        case 4:console.log (nu);break;
        default: null;
      }
    },
    closeall: function (){
      this.logif = false
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 972px;
  overflow-x: hidden;
  overflow-y: hidden; 
}
.allcompoents {
  /* width: 988px;
  height: 270px;*/
  width: 99.6%;
  height: 830px;
  padding: 4px;
  background: #f5f5f5;
}
</style>
