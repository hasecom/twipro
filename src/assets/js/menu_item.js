import * as stagejs from './stage.js';


export let item_list = [
    {
        param: 'yakusou',
        name: '薬草',
        message:'何も起こらなかった',
        func: function () {
        }
    },
    {
        param: 'sora',
        name: 'Aのカギ',
        message:'美味しそうだ',
        func: function () {
        }
    },
    {
        param: 'kyuu',
        name:'Bのカギ',
        message:'遠くの方で音がした',
        func: function () {
        }
    },
    {
        param: 'kagi',
        name:'Cのカギ',
        message:'扉が開きそうだ',
        func: function () {
        }
    }
]


//item詳細(現在の持ち物)
export let DETAILS_ITEM = [
    {
        param: 'item',
        obj: {
            0: ['yakusou', '薬草'],
            1: ['sora', 'そら豆'],
            2: ['kyuu', 'きゅうり'],

        },
        func: function () {
            details_display_set = this.param;
            details_output = this.obj
        }
    },
    {
        param: 'save',
        func: function () {
            console.log(this.param)
        }
    },
    {
        param: 'end',
        func: function () {
            console.log("KK")
        }
    },
    {
        param: 'and',
        func: function () {
            console.log("KK")
        }
    }

]
//item追加の処理 temp
DETAILS_ITEM[0]['obj'][Object.keys(DETAILS_ITEM[0]['obj']).length] = [item_list[3].param,item_list[3].name];


export let details_display_set = 'menu';

export function details_display_initialize() {
    details_display_set = 'menu';
    return 'menu'
}
export let details_output = '';