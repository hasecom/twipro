<template>
<div id='bgm'>
    <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="customSwitch1" v-model="bgm_toggle">
        <label class="custom-control-label" for="customSwitch1">BGM</label>
    </div>
    <audio id="bgm_play" loop autoplay muted >
        <!-- <source src="../assets/music/nervous.mp3" type="audio/mp3"> -->
        <source src="../assets/music/decision22.mp3" type="audio/mp3">
        
    </audio>
</div>
</template>

<script>
import * as bgmjs from "../assets/js/bgm.js";

export default {
    data() {
        return {
            bgm_toggle: false,
            file_path:'../assets/music/decision22.mp3'
        }
    },
    watch: {
        bgm_toggle(to, from) {
            this.bgm_toggle_func();
        }
    },mounted:function(){
     let bgm_audio = document.getElementById('bgm_play');
     bgm_audio.muted = true;
     bgmjs.play_sound(bgm_audio);
    },
    methods: {
        bgm_toggle_func() {
            let bgm_audio = document.getElementById('bgm_play');
            if (bgm_audio.muted) {
                bgm_audio.muted = false;
            } else {
                bgm_audio.muted = true;
            }
        }
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
