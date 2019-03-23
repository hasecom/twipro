<template>
<div id='player' class='border d-inline'>Al</div>
</template>

<script>
export default {
    name: 'character',
}
</script>

<style scoped>
#player {
    position: fixed;
    width: 30px;
    height: 30px;
    left: 42%;
    z-index: 1;
    background: blue;
}
</style>
