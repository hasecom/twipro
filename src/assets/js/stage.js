
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
    //1,1,1,1,1,1,1,1,1,1,1,1
 0,0,0,0,0,0,0,0,0,0,0,0
]
//groundの下
let ground_bottom =[
    0,0,0,0,0,0,0,0,0,0,0,0
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

export function move(direction){
    switch (direction) {
        case 'top':
            for (let m = 0; m < 12; m++) {
                //groundに追加
                //unshift=>先頭に追加
                ground.unshift(ground_top[(ground_top.length -12) + m]);
                //bottomに追加
                ground_bottom.unshift(ground[(ground.length -12) + m]);
                //topの末尾12桁削除
            } 
            ground_top.splice(ground_top.length - 12,12)
            ground.splice(ground.length -12, 12);//groundの末端削除

        break;
        case 'left':
            
        break;
        case 'right':
            
        break;
        case 'bottom':  
        for (let n = 0; n < 12; n++) {
            
            //Topに追加
            ground_top.push(ground[n]);
            //groundに追加
            ground.push(ground_bottom[n]);
        }    
        //ground_bottom削除
        ground.splice(0, 12);  
        ground_bottom.splice(0, 12);  
        
        break;
        default:
            break;
    }
    
}
