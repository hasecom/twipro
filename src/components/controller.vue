<template>
<div id='controllers'>
    <div class="row">
        <div id='control_top' class='col-6 control_btn border' @click='top_click()'><div class='control_kn'><i class="fas fa-arrow-up"></i></div></div>
        <div id='control_right' class='col-6 control_btn border' @click='right_click()'><div class='control_kn'><i class="fas fa-arrow-right"></i></div></div>
    </div>
    <div class="row">
        <div id='control_left' class='col-6 control_btn border' @click='left_click()'><div class='control_kn'><i class="fas fa-arrow-left"></i></div></div>
        <div id='control_bottom' class='col-6 control_btn border' @click='bottom_click()'><div class='control_kn'><i class="fas fa-arrow-down"></i></div></div>
    </div>
</div>
</template>

<script>
import * as stagejs from '../assets/js/stage.js';

export default {
    name: 'control',
    methods: {
        top_click() {
            this.$emit('stage_reload',0,-1,'top');
        },
        left_click() {
            this.$emit('stage_reload',-1,0,'left');
        },
        right_click() {
            this.$emit('stage_reload',1,0,'right');
        },
        bottom_click() {
            this.$emit('stage_reload',0,1,'bottom');
        }
    }
}
</script>

<style scoped>
.row {
    margin: 0;
}

#controllers {
    text-align: center;
    width: 120px;
    height: 120px;
    margin: 0 auto;
    /* clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); */
    transform: rotate(45deg);
}

#control_top {
    width: 60px;
    height: 60px;
}

#control_right {
    width: 60px;
    height: 60px;
}

#control_left {
    width: 60px;
    height: 60px;
}

#control_bottom {
    width: 60px;
    height:60px;
}
.control_btn{
    border-radius: 50%;
}
.control_kn{
   color:white; 
   transform:rotate(-45deg);
   margin:0 auto;
   top:10;
   right:0;
   left:0;
   bottom:0;
   padding-top:5px;
   padding-right:5px;
   font-size:30px;
}
</style>
