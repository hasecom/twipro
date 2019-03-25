<template>
<div>
    <div id='controllers'>
        <div class="row">
            <div id='control_top' class='col-6 control_btn border pointer' @click='top_click()' @touchstart="put_btn('top')" @touchend='release_btn()'>
                <div class='control_kn'><i class="fas fa-arrow-up"></i></div>
            </div>
            <div id='control_right' class='col-6 control_btn border pointer' @click='right_click()' @touchstart="put_btn('right')" @touchend='release_btn()'>
                <div class='control_kn'><i class="fas fa-arrow-right"></i></div>
            </div>
        </div>
        <div class="row">
            <div id='control_left' class='col-6 control_btn border pointer' @click='left_click()' @touchstart="put_btn('left')" @touchend='release_btn()'>
                <div class='control_kn'><i class="fas fa-arrow-left"></i></div>
            </div>
            <div id='control_bottom' class='col-6 control_btn border pointer' @click='bottom_click()' @touchstart="put_btn('bottom')" @touchend='release_btn()'>
                <div class='control_kn'><i class="fas fa-arrow-down"></i></div>
            </div>
        </div>

    </div>
    <div id='click_btn' class='border pointer' @click='click_btn()'>
        <span class='click_btn_inner'>
        <i class="far fa-hand-point-up"></i>
        </span>
        </div>
</div>
</template>

<script>
import * as stagejs from '../assets/js/stage.js';
import Chara from "./character.vue";

export default {
    name: 'control',
    data() {
        return {
            stop_count: 1000,
            nowcount: 0,
            now_put: false
        }
    },
    components: {
        Chara
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
        click_btn(){
          this.$emit('btn_click');
          
        },
        put_btn(put_cnt) {
            //長押し処理=>バグが多いため停止
            // let this_ = this;
            // var count = 0;
            // var countup = function () {
            //     count++;
            //     this_.nowcount = count;
            //     var id = setTimeout(countup, 300);
            //     if (count > this_.stop_count) {
            //         clearTimeout(id); //idをclearTimeoutで指定している
            //         this_.stop_count = 1000;
            //         this_.nowcount = 0;
            //     }
            //     if (count > 3) {
            //         this_.now_put = true;
            //     }

            //     if (this_.now_put == true) {
            //         console.log(put_cnt)
            //         switch (put_cnt) {
            //             case 'top':
            //                 this_.top_click();
            //                 break;
            //             case 'left':
            //                 this_.left_click();
            //                 break;
            //             case 'right':
            //                 this_.right_click();
            //                 break;
            //             case 'bottom':
            //                 this_.bottom_click();
            //                 break;

            //             default:
            //                 break;
            //         }

            //     }
            //    }
            //    countup();

        },
        release_btn() {
            this.now_put = false;
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
#control_top:active{
    background-color:rgba(0,0,0,1);
    color:white;
}

#control_right {
    background: gray;
    width: 50px;
    height: 50px;
}
#control_right:active{
    background-color:rgba(0,0,0,1);
    color:white;
}
#control_left {
    background: gray;
    width: 50px;
    height: 50px;
}
#control_left:active{
    background-color:rgba(0,0,0,1);
    color:white;
}

#control_bottom {
    background: gray;
    width: 50px;
    height: 50px;
}
#control_bottom:active{
    background-color:rgba(0,0,0,1);
    color:white;
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

.pointer {
    cursor: pointer;
}
#click_btn{
    width:50px;
    height:50px;
    background:rgba(49,116,224,1.0);
    position:absolute;
    top:400px;
    right:60px;
    border-radius: 50%;
}
.click_btn_inner{
    color:rgba(0,0,0,0.7);
    font-size:30px;
    width:30px;
    height:30px;
    margin: 0 auto;
    top:0;
    bottom:0;
    right:0;
    left:0;
    position:absolute;
}
#click_btn:active{
    background:rgba(49,116,224,0.4);
    color:white;
}
</style>
