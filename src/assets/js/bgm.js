import { type } from "os";

let bgm = {//name,filename
    'decision22':'decision22'
};

export function play_sound(bgm_element){
    let sound = document.createElement('source');
    sound.src='../assets/music/decision22.mp3';
    sound.type = 'audio/mp3';

    //最後の子要素として追加
    //bgm_element.appendChild(sound);
    console.log(bgm_element)
}
export function stop_sound(){

}

