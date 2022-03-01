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
    "/assets/files/HQ/WBH.mp3",
    "/assets/files/US-UK/Cheap Thrills.mp3",
    "/assets/files/US-UK/Faded.mp3",
    "/assets/files/US-UK/See you again.mp3",
    "/assets/files/US-UK/Best Song Ever.mp3",
    "/assets/files/VN/Giua Dai Lo Dong Tay.mp3",
    "/assets/files/US-UK/In The End.mp3",
    "/assets/files/US-UK/I Do.mp3",
    "/assets/files/US-UK/Alone.mp3",
    "/assets/files/VN/Ke Theo Duoi Anh Sang.mp3",
    "/assets/files/US-UK/Something Just Like This.mp3",
    "/assets/files/US-UK/What Makes You Beautiful.mp3",
    "/assets/files/VN/Noi Nay Co Anh.mp3",
    "/assets/files/VN/Thai Binh Mo Hoi Roi.mp3",
    "/assets/files/US-UK/Unstoppable.mp3",
];

let thumbnails = [
    "https://i1.sndcdn.com/artworks-000510745995-27mcj7-t500x500.jpg",
    "https://i1.sndcdn.com/artworks-000578385494-1tcoaj-t500x500.jpg",
    "https://giaingo.info/wp-content/uploads/2021/05/faded-la-gi-3-e1620443561356.jpg?ezimgfmt=rs:368x207/rscb1/ng:webp/ngcb1",
    "https://amatrendy.net/cdn/files/see-you-again---wiz-khalifa-charlie-puth.jpg",
    "https://i1.sndcdn.com/artworks-000144372998-i6pk8u-t500x500.jpg",
    "https://i.ytimg.com/vi/HF3p1GeQilI/sddefault.jpg",
    "https://avatar-ex-swe.nixcdn.com/song/2019/04/02/9/b/0/c/1554206099536_640.jpg",
    "https://img.youtube.com/vi/O6mizTWwmTQ/hqdefault.jpg",
    "https://media.distractify.com/brand-img/yRHjW-rvf/0x0/alone-1628798955381.jpg",
    "https://i.scdn.co/image/ab67616d0000b2736e26ad2d7d6f55de27298783",
    "https://i1.sndcdn.com/artworks-000464148666-wd4snm-t500x500.jpg",
    "https://upload.wikimedia.org/wikipedia/vi/c/c7/One_Direction_-_What_Makes_You_Beautiful.jpg",
    "https://upload.wikimedia.org/wikipedia/vi/1/1d/N%C6%A1i_n%C3%A0y_c%C3%B3_anh_-_Single_Cover.jpg",
    "https://i.ytimg.com/vi/5Jm9g0YdGDU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDsp5xdgNfB-4v4lamdtJzG7fEN8A",
    "https://www.voca.vn/assets/img/news/loi-dich-bai-hat-unstoppable1611308172.jpeg",
];

let songArtists = ["Shaun", "Sia ft Sean Paul", "Alan Walker", "Wiz Khalifa ft Charlie Puthn",
    "One Direction", "Uyên Linh", "Linkin Park", "911 Band", "Alan Walker", "Huy Vạc", "The Chainsmokers",
    "One Direction", "Sơn Tùng M-TP", "Sơn Tùng M-TP", "Sia"
    ];
let songTitles = ["Way Back Home", "Cheap Thrills", "Faded", "See You Again",
    "Best Song Ever", "Giữa Đại Lộ Đông Tây", "In The End", "I Do", "Alone", "Kẻ Theo Đuổi Ánh Sáng",
    "Somethings Just Like This", "What Makes You Beautiful", "Nơi Này Có Anh",
    "Thái Bình Mồ Hôi Rơi", "Unstoppable"
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