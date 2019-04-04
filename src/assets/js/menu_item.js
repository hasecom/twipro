export let item_list = [
    {
        param:'yaku',
        func:function(){
            console.log(this.param)
         }
    }
]

export const DETAILS_ITEM = [
    {
       param:'item',
       obj:{
       0: ['yaku', '薬草'],
       1: ['sora', 'そら豆'],
       2: ['kyuu', 'きゅうり'],
       3: ['kagi', 'カギ']
    },
       func:function(){
        details_display_set =this.param;
        details_output = this.obj
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