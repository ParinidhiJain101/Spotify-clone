console.log("welcome to spotify" );

//Initializing elements
let songIndex = 0;
let audioElement = new Audio('songs/Side To Side.mp3');
let masterPlay = document.getElementById('masterPlay');
let bar = document.getElementById('bar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Side To Side", filePath: "songs/Side To Side.mp3"},
    {songName: "Into You", filePath: "songs/Into You.mp3"},
    {songName: "Everyday", filePath: "songs/Everyday.mp3"},
    {songName: "Dangerous Woman", filePath: "songs/Dangerous Woman.mp3"},
    {songName: "Moonlight", filePath: "songs/Moonlight.mp3"},
    {songName: "Be Alright", filePath: "songs/Be Alright.mp3"},
    {songName: "Let Me Love You", filePath: "songs/Let Me Love You.mp3"},
    {songName: "I Don't Care", filePath: "songs/I Don't Care.mp3"},
    {songName: "Thinking Bout You", filePath: "songs/Thinking Bout You.mp3"}
]

//audioElement.play();

//handle play/pause
document.querySelector('.icons').addEventListener('click', (e)=>{

    if(e.target.id === 'masterPlay'){

        if(audioElement.paused || audioElement.currentTime <= 0)
        {
            audioElement.play();

            masterPlay.className = "ini fa-solid fa-2x fa-circle-pause";
            gif.style.opacity=1;
            console.log(masterPlay.className);
        }

        else
        {
            audioElement.pause();

            masterPlay.className = "ini fa-solid fa-2x fa-circle-play";
            gif.style.opacity=0;
            console.log(masterPlay.className);
        }

    }

});

//listener
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    bar.value=progress;
});

bar.addEventListener('change', ()=>{
    audioElement.currentTime = (bar.value * audioElement.duration)/100;
});

