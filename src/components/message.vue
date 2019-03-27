<template>
<div id='message_board' class='border' v-if='display_message_board' :data-person='who' @click='Close_or_NextPage()'>
    {{animation_serif}}
</div>
</template>

<script>
import * as mainjs from "../assets/js/index.js";
import * as bgmjs from "../assets/js/bgm.js";
export default {
    name: 'message',
    data() {
        return {
            who: '',
            serif: '',
            animation_serif:'',
            display_message_board: false,
            board_page: 1,
            now_page: 1,
            page_content: [],
            event_content: []
        }
    },
    methods: {
        throw_event(event_content) {
            this.event_content = event_content;
            if (this.display_message_board == true) {
                this.Close_or_NextPage();
                return false;
            }
            //bgm
           // bgmjs.Bgm_sound(this.event_content[2]);
            // '/'で分けられた項目をページ単位にして配列に格納
            this.page_content = this.event_content[1].split('/');
            //ページ数
            this.board_page = this.page_content.length;
            //message_board表示非表示
            mainjs.read_message_display_toggle(true);
            this.display_message_board = true;
            this.output_content();
        },
        output_content() {
            this.who = this.event_content[0];
            var close_ = '';
            var open_ = '';
            if (this.now_page == 1) open_ = '「 ';
            if (this.board_page == this.now_page) close_ = ' 」';
            this.serif = open_ + this.page_content[this.now_page - 1] + close_;
           this.animate_serif_fnc();
        },
        Close_or_NextPage() {
            if (this.board_page == this.now_page) {
                mainjs.read_message_display_toggle(false);
                this.display_message_board = false;
                this.now_page = 1;
                this.animation_serif = '';
                this.serif = '';
            } else {
                this.now_page++;
                this.output_content();

            }
        },
        animate_serif_fnc() {
            var count = 0;
            let this_ = this;
            let message_board_color = 1;
            bgmjs.Bgm_sound(this.event_content[3]);
            var countup = function () {
                count++;
                
            }
            var id = setInterval(function () {
                this_.animation_serif = this_.serif.slice(0,count);
                if (count >= this_.serif.split('').length) {
                    clearInterval(id); //idをclearIntervalで指定している
                bgmjs.Bgm_stop(this_.event_content[3]);
                    
                }
                if(count%5 ==0){
                    if(message_board_color == 1){
                    document.querySelector('#message_board').style.setProperty('--message_background', 'black'); // 書き換え
                    message_board_color = 0;
                    }else{
                        document.querySelector('#message_board').style.setProperty('--message_background', 'white'); // 書き換え
                    message_board_color = 1;
                    }
                }
                countup();
            }, 50);
        }

    }
}
</script>

<style scoped>
:root{
    --message_background:white;
}
#message_board {
    position: absolute;
    display: block;
    color: white;
    top: 300px;
    width: 100%;
    height: 60px;
    background: black;
    padding: 3px 10px 3px 10px;
}
#message_board:before {
    content:attr(data-person);
    left: 0;
    top:-40px;
    width:80px;
    background:black;
    padding:10px;
    padding-right: 10px;
    padding-left:10px;
    padding-top:5px;
    padding-bottom:5px;
    border:1px solid white;
    position: absolute;
    color:white;
}

#message_board:after {
    content: '\f0dd';
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    right: 0;
    bottom: 0;
    padding-bottom: 10px;
    padding-right: 10px;
    position: absolute;
    color:var(--message_background);
}

</style>
