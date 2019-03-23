<template>
<div id='controllers'>
    <div class="row">
        <div id='control_top' class='col-6' @click='top_click()'>a</div>
        <div id='control_right' class='col-6' @click='right_click()'>a</div>
    </div>
    <div class="row">
        <div id='control_left' class='col-6' @click='left_click()'>a</div>
        <div id='control_bottom' class='col-6' @click='bottom_click()'>a</div>
    </div>
</div>
</template>

<script>
import * as stagejs from '../assets/js/stage.js';

export default {
    name: 'control',
    methods: {
        top_click() {
            stagejs.top_move();
            this.$emit('stage_reload');
        },
        left_click() {
            console.log("left")
        },
        right_click() {
            console.log("right")
        },
        bottom_click() {
            console.log("bottom")
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
    background: white;
    width: 140px;
    height: 140px;
    margin: 0 auto;
    /* clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); */
    transform: rotate(45deg);
}

#control_top {
    width: 70px;
    height: 70px;
    background: blue;
}

#control_right {
    width: 70px;
    height: 70px;
    background: red;
}

#control_left {
    width: 70px;
    height: 70px;
    background: yellow;
}

#control_bottom {
    width: 70px;
    height: 70px;
    background: green;
}
</style>
