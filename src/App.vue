<template>
  <div id="app" :style='initial_value'>
   <Main></Main>
  </div>
</template>

<script>
import Main from './components/main.vue'

const WIDTH = innerWidth;
const HEIGHT = innerHeight;

export default {
  name: 'app',
  components: {
    Main
  },
  mounted:function(){
  
  },
  computed:{
    initial_value(){
      return{
        'over-flow':'hidden',
        '--body_width':WIDTH + 'px',
        '--body_height':HEIGHT + 'px',
      }
    }
  }
}

</script>

<style>
:root{
  --body_width:0px;
  --body_height:0px;
}
#app{
  width:var(--body_width);
  height:var(--body_height);
}
</style>
