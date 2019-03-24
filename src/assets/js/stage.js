
//stage
let ground = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,//0~11
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];
//display_stage(見える範囲 12*12)
let display_stage = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
};
//表示されている今の画面
export let display_temp_stage = [];

//画像のあるオブジェ
export const STAGE_DISPLAY = {

    0: 'field1',
    1: 'yama1',
    undefined:'blackout'
}
//障害物
export const OBBSTACLE = {
    0: 'yama1',
    1:'blackout'
}


let select = { 'ground': ground };

//読み込み専用
export function read(arr) {
    return select[arr];
}
//見える範囲を制定
export function display_stage_reflect(col, row, stage_name) {
    let stg_length = select[stage_name].length;
    let stg_sqrt = Math.sqrt(stg_length);
    let temp_display_arr = [];
    for (let w = 0; w < 12; w++) {
        for (let v = 0; v < 12; v++) {
            if (col + v < 0 || stg_sqrt - 1 < col + v) {
                display_stage[w][v] = undefined;
            } else {
                display_stage[w][v] = select[stage_name][((row + w) * stg_sqrt) + col + v];
            }
        }
        for (let y = 0; y < display_stage[w].length; y++) {
            temp_display_arr.push(display_stage[w][y]);
        }
    }
    display_temp_stage = temp_display_arr;

    return temp_display_arr;
}

export function move(direction) {
    switch (direction) {
        case 'top':

            break;
        case 'left':

            break;
        case 'right':

            break;
        case 'bottom':

            break;
        default:
            break;
    }

}

export function judge_hit(now_display_arr, col, row, now_col, now_row) {
    //次に進むところ

    let return_judg = false;
    let next_ =77+col+(row*12);
    let have_next_class = document.getElementById('ground_child_' + (next_)).classList;
    //障害物有無
    for (let y = 0; y < Object.keys(OBBSTACLE).length; y++) {

        for (let x = 0; x < have_next_class.length; x++) {
            if (have_next_class[x] == OBBSTACLE[y]) {
                return_judg = true;
            }
        }
    }
    return return_judg;
}