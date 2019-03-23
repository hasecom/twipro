
//stage
//ground(見える範囲 12*14)
let ground = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,//0~11
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];

//groundの上
let ground_top = [
    //0,0,0,0,0,0,0,0,0,0,0,0
]
//groundの下
let ground_bottom = [
    //  0,0,0,0,0,0,0,0,0,0,0,0
]
//groundの左 (上がgroundの右側に接する)
let ground_left = [
    // 1,1,1,1,1,1,1,1,1,1,1,1,
];
//groundの右
let ground_right = [
    //1,1,1,1,1,1,1,1,1,1,1,1,
];

export const STAGE_DISPLAY = {

    0: 'field1',
    1: 'yama1'
}


let select = { 'ground': ground };

//読み込み専用
export function read(arr) {
    return select[arr];
}

export function move(direction) {
    switch (direction) {
        case 'top':
            for (let m = 0; m < 12; m++) {
                //groundに追加
                //unshift=>先頭に追加
                ground.unshift(ground_top[(ground_top.length - 12) + m]);
                //bottomに追加
                ground_bottom.unshift(ground[(ground.length - 12) + m]);
                //topの末尾12桁削除
            }
            ground_top.splice(ground_top.length - 12, 12)
            ground.splice(ground.length - 12, 12);//groundの末端削除
            break;
        case 'left':
            let ground_temp = [];
            for (let p = 0; p < 12; p++) {
                let temp_col_arr = [];
                for (let o = 0; o < 12; o++) {
                    temp_col_arr[o] = ground[o + (p * 12)];
                }
                //temp_col_arrにground_leftからunshift
                temp_col_arr.unshift(ground_left[p]);
                //temp_col_arrのlengthをground_rightにunshift
                ground_right.unshift(temp_col_arr[temp_col_arr.length-1]);
                for (let q = 0; q < 12; q++) {
                    ground_temp.push(temp_col_arr[q]);
                }
            }
            //ground_leftのlength - 12から12個slice
            ground_left.splice(0, 12);//groundの末端削除
            for (let r = 0; r < ground.length; r++) {
                ground[r] = ground_temp[r];
            }
            break;
        case 'right':
            let ground_temp_ = [];
            for (let s = 0; s < 12; s++) {
                let temp_col_arr_ = [];
                for (let t = 0; t < 12; t++) {
                    temp_col_arr_[t] = ground[t + (s * 12)];
                }
                //temp_col_arrにground_rightからpush 
                temp_col_arr_.push(ground_right[s]);
                //temp_col_arrのlengthをground_leftにunshift
                ground_left.unshift(temp_col_arr_[0]);
                temp_col_arr_.splice(0,1);
                for (let u = 0; u < 12; u++) {
                    ground_temp_.push(temp_col_arr_[u]);
                }
            }

            //ground_rightのlength - 12から12個slice
            ground_right.splice(0, 12);//groundの末端削除        
            for (let v = 0; v < ground.length; v++) {
                ground[v] = ground_temp_[v];
            }
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
