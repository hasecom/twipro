<template>
<div class='main'>
    <div id='scene'>
        <div class='ground'>
            <div class='ground_row row' v-for='n in 14' :key='n'>
                <div class='ground_child col-1' v-for='m in 12' :key='m'>
                    <!-- 中央にキャラクター配置(row:7,col:7) -->
                    <div v-if='n==7 && m == 6'>
                        <Chara />
                    </div>
                </div>
            </div>
        </div>
        <Control v-on:stage_reload="reload_call" />
    </div>
</div>
</template>

<script>
import * as mainjs from '../assets/js/index.js';
import * as stagejs from '../assets/js/stage.js';
import Chara from './character.vue';
import Control from './controller.vue';
import {
    log
} from 'util';

export default {
    name: 'game',
    data() {
        return {

        }
    },
    components: {
        Chara,
        Control
    },
    mounted() {
        this.load_call();
    },
    methods: {
        //初期ロード
        load_call() {
            this.dedication_id();
            this.stage_load();
        },
        //移動時ロード
        reload_call(direction) {
            //一つ前のgroundのクラスをremove
            this.remove_class(stagejs.read('ground'));
            //方向判定
            stagejs.move(direction);
            //stage再描画(class付与)
            this.stage_load();

        },
        dedication_id() {
            //各フィールドにid付与
            let dedication_element = document.getElementsByClassName('ground_child');
            for (let i = 0; i < dedication_element.length; i++) {
                dedication_element[i].setAttribute("id", "ground_child_" + i);
            }
        },
        stage_load() {
            //ステージロード
            let stage_load_arr = stagejs.read('ground');
            for (let j = 0; j < stage_load_arr.length; j++) {
                document.getElementById('ground_child_' + j).classList.add(stagejs.STAGE_DISPLAY[stage_load_arr[j]]);
            }
        },
        remove_class(stage_temp_arr) {
            for (let k = 0; k < stage_temp_arr.length; k++) {
                document.getElementById('ground_child_' + k).classList.remove(stagejs.STAGE_DISPLAY[stage_temp_arr[k]]);
            }
        }
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

.ground_row {
    margin: 0px !important;
}

.ground_child {

    width: 30px;
    height: 30px;
    margin: 0 !important;

}

.field1 {
    background: url('../assets/img/field/field1.png') no-repeat center center;
    object-fit: cover;
}

.yama1 {
    background: url('../assets/img/field/yama1.png') no-repeat center center;
    object-fit: cover;
}
</style>
