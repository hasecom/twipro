let is_message_display = false;
let is_details_display = false;
export function read_message_display_(){
    return is_message_display;
}
export function read_message_display_toggle(val){
    is_message_display = val;
}
export function read_details_display_(){
    return is_details_display;
}
export function read_details_display_toggle(val){
    is_details_display = val;
}
