let is_message_display = false;
export function read_message_display_(){
    return is_message_display;
}
export function read_message_display_toggle(val){
    is_message_display = val;
}