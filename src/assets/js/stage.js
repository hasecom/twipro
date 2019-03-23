
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
    1,1,1,1,1,1,1,1,1,1,1,1,
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

export function move(direction){
    switch (direction) {
        case 'top':
            for (let m = 0; m < 12; m++) {
                //groundに追加
                ground.unshift(ground[(ground_top.length -12) + m]);
                ground.length = 144;
                //bottomに追加
                ground_bottom.unshift(ground[(ground.length -12) + m]);
            } 
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
            if(n == 0)ground.splice(0, 12);
            ground.push(ground_bottom[n]);
            //ground.length = 144;
        }  
        console.log(ground) 
        break;
        default:
            break;
    }
    
}
