import { type } from "os";

let bgm = {//name,filename
    'talk':'decision22'
};
let myAudio = new Audio();
let bgmAudio = new Audio();
let isSound = false;
export function play_sound(){
    isSound = true;
    myAudio.src= require('../media/nervous.mp3');
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
    console.log(bgm[filename])
    if(isSound != true)return false;
    console.log("音なれ")
    bgmAudio.src = require('../media/'+ bgm[filename] +'.mp3');
    bgmAudio.play();
}