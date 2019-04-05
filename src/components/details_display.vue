<template>
<div>
    <div id='details' v-if='isDetails'>
        <div id="cotent" class='row' v-if='display_details == "menu"'>
            <div :id='items[n-1][0]' :ref='items[n-1][0]' class='items_list col-6 ' :class='make_class(n)' v-for='n in Object.keys(items).length' :key="n">
                {{items[n-1][1]}}
            </div>
        </div>
        <div id="cotent" class='row' v-if='display_details == "item"'>
            <div :id='details_output[n-1][0]' :ref='details_output[n-1][0]' class='items_list col-6 ' :class='make_class(n)' v-for='n in Object.keys(details_output).length' :key="n">
                {{details_output[n-1][1]}}
            </div>
        </div>
    </div>
    <div id='details_display' class='border pointer' @click="details_click()">
        <div id="inner_details">
            <i class="fas fa-briefcase"></i>
        </div>
    </div>
</div>
</template>

<script>
import * as mainjs from "../assets/js/index.js";
import * as menu_item from "../assets/js/menu_item.js";
import {
    log
} from 'util';

export default {
    data() {
        return {
            isDetails: false,
            items: {
                0: ['item', 'アイテム'],
                1: ['save', 'セーブ'],
                2: ['end', '終わる'],
                3: ['and', 'る'],
            },
            now_area: 0,
            display_details: '',
            details_output: []
        }
    },
    mounted: function () {
        this.details_display_chk();
        this.details_output = this.items;
    },
    methods: {
        details_click() {
            if (mainjs.read_message_display_() != false) return false;
            if (this.isDetails == false) {
                //open
                this.isDetails = true;
                mainjs.read_details_display_toggle(true);

            } else {
                //close
                this.isDetails = false;
                mainjs.read_details_display_toggle(false);
                //クローズ時に開くメニューを初期化
                this.display_details = menu_item.details_display_initialize();
            }

        },
        details_controller(direction) {
            //移動域
            let move_area = Math.ceil(Object.keys(this.details_output).length / 2);
            let _this = this;
            let direction_processing = {
                top: {
                    param: 'top',
                    func: function (move_area) {
                        if (move_area > _this.now_area) return 0;
                        return -move_area;
                    }
                },
                bottom: {
                    param: 'bottom',
                    func: function (move_area) {
                        if (move_area <= _this.now_area) return 0;
                        return move_area;
                    }
                },
                right: {
                    param: 'right',
                    func: function () {
                        if (_this.now_area >= Object.keys(_this.items).length - 1) return 0;
                        return 1;
                    }

                },
                left: {
                    param: 'left',
                    func: function (move_area) {
                        if (_this.now_area <= 0) return 0;
                        return -1;
                    }

                }
            };

            this.now_area = this.now_area + direction_processing[direction].func(move_area);
        },
        make_class(num) { //ロード時のselectクラス付与
            if (num != this.now_area + 1) return false;
            return 'select';
        },
        decision_click() {
            let this_ = this;
    
            //現在表示により処理を分岐
            let loopitems = {
                'menu':menu_item.DETAILS_ITEM,
                'item':menu_item.item_list
                };
                loopitems[menu_item.details_display_set].forEach(function (val, key) {
                    if (this_.details_output[this_.now_area][0] == val.param){
                         val.func();
                    }
                });


            this.details_display_chk();
            this.details_output = menu_item.details_output;
        },
        details_display_chk() {
            this.display_details = menu_item.details_display_set;
        }
    }
}
</script>

<style scoped>
#details_display {
    color: white;
    width: 50px;
    height: 50px;
    background: rgba(49, 116, 224, 1.0);
    position: absolute;
    top: 500px;
    right: 60px;
    border-radius: 50%;
}

#inner_details {
    color: black;
    font-size: 30px;
    width: 30px;
    height: 30px;
    margin: 0 auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
}

#details {
    color: white;
    position: absolute;
    top: 150px;
    bottom: 0;
    right: 0;
    left: 0;
    width: inherit;
    margin-right: 10px;
    margin-left: 10px;
    padding: 5px 10px;
    border: 1px solid white;
    height: 100px;
    background: black;
    z-index: 3;
}

#cotent {
    width: inherit;
    height: inherit;
}

.select {
    font-weight: bold;
}

.select:before {
    content: '▶︎'
}
</style>
