
 //stage
 //ground(見える範囲 12*14)
 let ground = [
    1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1
];
//groundの上
let ground_top =[
    1,1,1,1,1,1,1,1,1,1,1,1
]
//groundの下
let ground_bottom =[
    1,1,1,1,1,1,1,1,1,1,1,1
]

export const STAGE_DISPLAY = {
    0:'field1',
    1:'yama1'
}


let select = {'ground':ground};

//読み込み専用
export function read(arr){
    return select[arr];
}

export function top_move(){
    document.getElementById('ground_child_0').classList.remove(STAGE_DISPLAY[1]);
    ground[0] = 0;
    
}
