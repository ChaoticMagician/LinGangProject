<template>
  <div id="app">
    <ele-head id="firathead">
    </ele-head>
    <router-view class="allcompoents"></router-view>
    <ele-foot id="firafoot">
    </ele-foot>
  </div>
</template>

<script>
import eleHead from '@/components/elhead/ElHead'
import eleFoot from '@/components/elfoot/ElFoot'
export default {
  name: 'App',
  components: {eleHead, eleFoot}
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
