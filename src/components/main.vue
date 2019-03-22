<template>
<div class='main'>
    <div id='scene'>
        <div class='ground'>
            <div class='ground_row row' v-for='n in 14' :key='n'>
              <div class='ground_child col-1'  v-for='n in 12' :key='n'></div>
              </div>
           
        </div>
    </div>
</div>
</template>

<script>
import * as mainjs from '../assets/js/index.js';
import * as stagejs from '../assets/js/stage.js';

console.log(stagejs.read('ground'))
export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }

}
</script>

<style scoped>
.main {
    width: inherit;
    height: inherit;
}

#scene {
    position: relative;
    width: 360px;
    height: inherit;
    margin: 0 auto;
    
}
.ground {
    /* width: 30px;
    height: 30px;
    position: relative;
    overflow: hidden; */
}
.ground_row{
    margin: 0px !important;
}
.ground_child{
    background: url('../assets/img/field/field1.png') no-repeat center center;
    object-fit: cover;
    width:30px;
    height:30px;
    margin:0 !important;

}

</style>
