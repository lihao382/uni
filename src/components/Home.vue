<template>
  <div class="hello">
    <uniheader></uniheader>
    <router-view></router-view>
    <!-- <uninav></uninav>
    <unimain></unimain> -->
  </div>
</template>

<script>
import uniheader from './uni_header';
// import uninav from './uni_nav';
// import unimain from './uni_main'
export default {
  name: "Home",
  components:{
    uniheader,
    // uninav,unimain
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  overflow: hidden;
}
</style>
