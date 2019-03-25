<template>
<div id='player' class='d-inline Woods1'></div>
</template>

<script>
export default {
    name: 'character',
    mounted:function(){
        console.log("k")
    }
}
</script>

<style scoped>
#player {
    position: fixed;
    width: 30px;
    height: 30px;
    left: 42%;
    z-index: 1;
  
}
.Woods1 {
  background: url("../assets/img/chara/man_front.png") no-repeat center center;
  object-fit: cover;
}

</style>
