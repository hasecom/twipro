<template>
<div id='bgm'>
    <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="customSwitch1" v-model="bgm_toggle">
        <label class="custom-control-label" for="customSwitch1">BGM</label>
    </div>
 
</div>
</template>

<script>
import * as bgmjs from "../assets/js/bgm.js";

export default {
    data() {
        return {
            bgm_toggle: false,
            bgm_label : 'back01'
        }
    },
    watch: {
        bgm_toggle(to, from) {
            this.bgm_toggle_func(to);
        }
    },mounted:function(){
     bgmjs.load_sound(this.bgm_label);
    },
    methods: {
        bgm_toggle_func(toggle) {
            if(toggle == true){
                bgmjs.play_sound(this.bgm_label);
            }else{
                bgmjs.stop_sound(this.bgm_label);
            }
        },
    }
}

</script>

<style scoped>
#bgm {
    position: absolute;
    top: 400px;
    color: white;
    width: 10px;
}
</style>
