<template>
<div id='controllers'>
    <div class="row">
        <div id='control_top' class='col-6 control_btn border pointer' @click='top_click()'  @mousedown="sample()" @mouseup='release_btn()'>
            <div class='control_kn'><i class="fas fa-arrow-up"></i></div>
        </div>
        <div id='control_right' class='col-6 control_btn border pointer' @click='right_click()'>
            <div class='control_kn'><i class="fas fa-arrow-right"></i></div>
        </div>
    </div>
    <div class="row">
        <div id='control_left' class='col-6 control_btn border pointer' @click='left_click()'>
            <div class='control_kn'><i class="fas fa-arrow-left"></i></div>
        </div>
        <div id='control_bottom' class='col-6 control_btn border pointer' @click='bottom_click()'>
            <div class='control_kn'><i class="fas fa-arrow-down"></i></div>
        </div>
    </div>
</div>
</template>

<script>
import * as stagejs from '../assets/js/stage.js';

export default {
    name: 'control',
    data() {
        return {
            stop_count: 1000,
            nowcount: 0,
            now_put:false
        }
    },
    methods: {
        top_click() {
            this.$emit('stage_reload', 0, -1, 'top');
        },
        left_click() {
            this.$emit('stage_reload', -1, 0, 'left');
        },
        right_click() {
            this.$emit('stage_reload', 1, 0, 'right');
        },
        bottom_click() {
            this.$emit('stage_reload', 0, 1, 'bottom');
        },
        sample() {
            
            let this_ = this;
            var count = 0;     
            var countup = function () { 
                count++;
                this_.nowcount = count;
                var id = setTimeout(countup, 100);
                if (count > this_.stop_count ) {
                    clearTimeout(id); //idをclearTimeoutで指定している
                    this_.stop_count  =1000;
                    this_.nowcount = 0;
                }
                if(count > 3){ this_.now_put = true;}
                if(this_.now_put == true){ 
                this_.top_click();
                }
            }
            countup();
            
        },
        release_btn() {
            this.now_put = false;
            console.log(this.nowcount)
            this.stop_count = this.nowcount;
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
    width: 100px;
    height: 100px;
    margin: 0 auto;
    /* clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); */
    transform: rotate(45deg);
}

#control_top {
    background: gray;
    width: 50px;
    height: 50px;
}

#control_right {
    background: gray;
    width: 50px;
    height: 50px;
}

#control_left {
    background: gray;
    width: 50px;
    height: 50px;
}

#control_bottom {
    background: gray;
    width: 50px;
    height: 50px;
}

.control_btn {
    border-radius: 50%;
}

.control_kn {
    color: white;

    transform: rotate(-45deg);
    margin: 0 auto;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding-top: 0px;
    padding-right: 30px;
    padding-left: 0px;
    font-size: 25px;
}
.pointer{
    cursor: pointer;
}
</style>
