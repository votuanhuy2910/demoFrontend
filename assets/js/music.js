let playing = true;
let random = false;

const playButton = document.querySelector(".player-play");
const nextButton = document.querySelector(".player-next");
const prevButton = document.querySelector(".player-prev");
const thumbnail = document.querySelector(".player-img");
const song = document.querySelector("#song");
const songList = document.querySelectorAll(".song");
const songArtist = document.querySelector(".player-author");
const songTitle = document.querySelector(".player-title");
const progressBar = document.querySelector("#progress-bar");

let songIndex = 0;

let songs = [
    "/assets/files/WBH.mp3",
    "/assets/files/Cheap Thrills.mp3",
    "/assets/files/Faded.mp3",
    "/assets/files/See you again.mp3",
    "/assets/files/Best Song Ever.mp3",
    "/assets/files/In The End.mp3",
    "/assets/files/I Do.mp3",
    "/assets/files/Alone.mp3",
    "/assets/files/Something Just Like This.mp3",
    "/assets/files/What Makes You Beautiful.mp3",
    "/assets/files/Unstoppable.mp3",
];

let thumbnails = [
    "https://i1.sndcdn.com/artworks-000510745995-27mcj7-t500x500.jpg",
    "https://i1.sndcdn.com/artworks-000578385494-1tcoaj-t500x500.jpg",
    "https://giaingo.info/wp-content/uploads/2021/05/faded-la-gi-3-e1620443561356.jpg?ezimgfmt=rs:368x207/rscb1/ng:webp/ngcb1",
    "https://amatrendy.net/cdn/files/see-you-again---wiz-khalifa-charlie-puth.jpg",
    "https://i1.sndcdn.com/artworks-000144372998-i6pk8u-t500x500.jpg",
    "https://avatar-ex-swe.nixcdn.com/song/2019/04/02/9/b/0/c/1554206099536_640.jpg",
    "https://img.youtube.com/vi/O6mizTWwmTQ/hqdefault.jpg",
    "https://media.distractify.com/brand-img/yRHjW-rvf/0x0/alone-1628798955381.jpg",
    "https://i1.sndcdn.com/artworks-000464148666-wd4snm-t500x500.jpg",
    "https://upload.wikimedia.org/wikipedia/vi/c/c7/One_Direction_-_What_Makes_You_Beautiful.jpg",
    "https://www.voca.vn/assets/img/news/loi-dich-bai-hat-unstoppable1611308172.jpeg",
];

let songArtists = ["Shaun", "Sia ft Sean Paul", "Alan Walker", "Wiz Khalifa ft Charlie Puthn",
    "One Direction", "Linkin Park", "911 Band", "Alan Walker", "The Chainsmokers", "One Direction", "Sia"
    ];
let songTitles = ["Way Back Home", "Cheap Thrills", "Faded", "See You Again",
    "Best Song Ever", "In The End", "I Do", "Alone", "Somethings Just Like This", "What Makes You Beautiful", "Unstoppable"
    ];
function handleClickEachSong(e) {
    const index = parseInt(e.target.dataset.index);
    nextSong(index);
}

function playPause() {
    if (playing) {
        const song = document.querySelector("#song");
        song.play();
        thumbnail.classList.add("is-playing");
        playButton.classList.add("fa-pause");

        playing = false;
    } 
    else {
        thumbnail.classList.remove("is-playing");
        playButton.classList.remove("fa-pause");
        song.pause();
        playing = true;
    }
}

function nextSong(index = -1) {
    if (index >= 0) {
        songIndex = index;
    }
    else {
        songIndex++;
    }

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 1;
    }

    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

function updateProgressValue() {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    document.querySelector(".player-remaining").innerHTML = formatTime(
    Math.floor(song.currentTime));

    if (document.querySelector(".player-duration").innerHTML === "NaN:NaN") {
        document.querySelector(".player-duration").innerHTML = "0:00";
    } 
    else {
        document.querySelector(".player-duration").innerHTML = formatTime(
            Math.floor(song.duration));
    }
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds - min * 60);
    if (sec < 10) {
    sec = `0${sec}`;
    }
    return `${min}:${sec}`;
}
setInterval(updateProgressValue, 500);

function changeProgressBar() {
    song.currentTime = progressBar.value;
}

progressBar.addEventListener("change", changeProgressBar);
playButton.addEventListener("click", playPause);
nextButton.addEventListener("click", nextSong);
prevButton.addEventListener("click", previousSong);
song.addEventListener("ended", function () {
    nextSong();
});

songList.forEach((el) => el.addEventListener("click", handleClickEachSong));