<template>
<div id='message_board' class='border' v-if='display_message_board' @click='Close_or_NextPage()'>
    {{serif}}
</div>
</template>

<script>
export default {
    name: 'message',
    data() {
        return {
            serif:'',
            display_message_board:false,
            board_page:1,
            now_page:1
        }
    },
    methods: {
        throw_event(event_content) {
            if(this.display_message_board == true){
                this.Close_or_NextPage();
                return false;
                }
            this.display_message_board = true;
            this.serif = event_content[1];
        },
        Close_or_NextPage(){
            if(this.board_page == this.now_page){
                this.display_message_board = false;
            }
        }
    }
}
</script>

<style scoped>
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

#message_board:after {
    content: '\f0dd';
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    right: 0;
    bottom: 0;
    padding-bottom: 10px;
    padding-right: 10px;
    position: absolute;

}
</style>
