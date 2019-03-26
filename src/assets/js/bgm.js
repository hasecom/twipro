import { type } from "os";

let bgm = {//name,filename
    'talk':'decision22'
};
let myAudio = new Audio(require('../media/nervous.mp3'));
let isSound = false;
export function play_sound(){
    isSound = true;
    myAudio.play();
}
export function stop_sound(){
    isSound = false;
    myAudio.pause();
}
export function load_sound(){
    isSound = false;
    myAudio.load();
    myAudio.pause();
    myAudio.currentTime = 0;
}
export function Bgm_sound(filename){
    let bgmAudio = new Audio(require('../media/'+ bgm[filename] +'.mp3'));
    bgmAudio.load();
    if(isSound != true)return false;
    
    bgmAudio.play();
}