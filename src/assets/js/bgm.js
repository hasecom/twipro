import { type } from "os";

let bgm = {//name,filename
    'talk':'decision22'
};
let load_bgm = {};

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


    for(let i = 0; i < Object.keys(bgm).length; i++){
        load_bgm[Object.keys(bgm)[i]] = new Audio(require('../media/' + bgm[Object.keys(bgm)[i]] +'.mp3'));
        load_bgm[Object.keys(bgm)[i]].load();
    }
    
}
export function Bgm_sound(filename){
    if(isSound != true)return false;
    load_bgm[filename].play();
}