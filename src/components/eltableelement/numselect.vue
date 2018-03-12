<template>
  <div class="numselect" :style='{background:configinfo.bgcolor}' >
      {{configinfo.bgcolor}}
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
      }
  }
}
</script>

<style scoped>
.numselect{
    height: 12px;
    width: 20px;
    border: black solid 1px;

}
</style>
