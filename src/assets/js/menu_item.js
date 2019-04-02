export const DETAILS_ITEM = [
    {
       param:'item',
       func:function(){
        details_display_set =this.param;
        details_output = 'Hello'
        }
    },
    {
        param:'save',
        func:function(){
            console.log(this.param)
         }
    },
    {
        param:'end',
        func:function(){
            console.log("KK")
         }
    },
    {
        param:'and',
        func:function(){
            console.log("KK")
         }
    }

]

export let details_display_set = 'menu';

export function details_display_initialize(){
        details_display_set = 'menu';
        return 'menu'
}
export let details_output = '';