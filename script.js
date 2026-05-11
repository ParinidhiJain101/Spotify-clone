console.log("welcome to spotify" );

//Initializing elements
let songIndex = 0;
let audioElement = new Audio('songs/Side To Side.mp3');
let masterPlay = document.getElementById('masterPlay');
let bar = document.getElementById('bar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songNameB = document.getElementById('songNameB');

let songs = [
    {songName: "Side To Side", filePath: "songs/Side To Side.mp3", coverPath: "cover1.jpg"},
    {songName: "Into You", filePath: "songs/Into You.mp3", coverPath: "cover1.jpg"},
    {songName: "Everyday", filePath: "songs/Everyday.mp3", coverPath: "cover1.jpg"},
    {songName: "Dangerous Woman", filePath: "songs/Dangerous Woman.mp3", coverPath: "cover1.jpg"},
    {songName: "Moonlight", filePath: "songs/Moonlight.mp3", coverPath: "cover1.jpg"},
    {songName: "Be Alright", filePath: "songs/Be Alright.mp3", coverPath: "cover1.jpg"},
    {songName: "Let Me Love You", filePath: "songs/Let Me Love You.mp3", coverPath: "cover1.jpg"},
    {songName: "I Don't Care", filePath: "songs/I Don't Care.mp3", coverPath: "cover1.jpg"},
    {songName: "Thinking Bout You", filePath: "songs/Thinking Bout You.mp3", coverPath: "cover1.jpg"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("songPlay")[0].setAttribute("data-index", i);
})

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
            document.querySelectorAll('.songPlay').forEach(el => {
                el.classList.add("fa-circle-play");
                el.classList.remove("fa-circle-pause");            
            });
        }

    }

});

//listener
audioElement.addEventListener('timeupdate', ()=>{
       //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    bar.value=progress;
});

bar.addEventListener('change', ()=>{
    audioElement.currentTime = (bar.value * audioElement.duration)/100;
});



document.querySelectorAll('.songPlay').forEach(el => {
    el.addEventListener('click', ()=>{
        if(el.classList.contains("fa-circle-pause")){
            el.classList.remove("fa-circle-pause");
            el.classList.add("fa-circle-play");
            masterPlay.classList.add("fa-circle-play");
            masterPlay.classList.remove("fa-circle-pause");
            audioElement.pause();
             gif.style.opacity = 0;
        }
        else{
            let index = el.dataset.index; 
            document.querySelectorAll('.songPlay').forEach(el => {
                el.classList.add("fa-circle-play");
                el.classList.remove("fa-circle-pause");
            });
            console.log("Song index", index);
            console.log("song name", songs[index].songName);
        
            songIndex = index;
            audioElement.src = songs[index].filePath;
            audioElement.currentTime = 0;
            audioElement.play();
            el.classList.add("fa-circle-pause");
            el.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause");
            masterPlay.classList.remove("fa-circle-play");
            gif.style.opacity = 1;
            songNameB.innerText = songs[index].songName;
        }
    })
})

