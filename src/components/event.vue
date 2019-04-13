<template>
<div id='event_board' v-if='event_display' class='border'>
    {{event}}
</div>
</template>

<script>
import * as mainjs from "../assets/js/index.js";
export default {
    data() {
        return {
            event_display: false,
            event: ''
        }
    },
    methods: {
        event_start() {
            this.event = 'i';
     this.event_display = mainjs.read_items_message_display_() == true ? false : true;
            console.log(this.event_display)
            mainjs.read_items_message_display_toggle(this.event_display);
        }
    }

}
</script>

<style scoped>
:root {
    --message_background: white;
}

#event_board {
    position: absolute;
    display: block;
    color: white;
    top: 300px;
    width: 100%;
    height: 60px;
    background: black;
    padding: 3px 10px 3px 10px;
}
</style>
