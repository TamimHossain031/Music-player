let progress = document.querySelector('#progress');
let song = document.querySelector('#song');
let ctrlIcon = document.querySelector('#ctrlIcon');
let volume = document.querySelector('#valume');

song.onloadedmetadata = function(){
    progress.max = song.duration; 
    volume.value = song.volume * 100;
    
}
function playPause(){
    if(ctrlIcon.classList.contains('fa-pause')){
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    }else{
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },200);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play')
}

volume.onchange = function(){
    song.volume = volume.value / 100
}
