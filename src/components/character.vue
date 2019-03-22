<template>
<div id='player' class='border d-inline'>A</div>
</template>

<script>
export default {
    name: 'character',

}
</script>

<style scoped>
#player {
    position: fixed;
    width:30px;
    height:30px;
    left: 50%;
    z-index: 1;
    background:red;
}
</style>
