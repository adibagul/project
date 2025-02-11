// Song list
const songs = [
    { title: "Song 1", src: "ass1.mp3" },
    { title: "Song 2", src: "ass2.mp3" },
    { title: "Song 3", src: "ass3.mp3" }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById("audio-player");
const songTitle = document.getElementById("song-title");
const playPauseBtn = document.getElementById("play-pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function loadSong(index) {
    audioPlayer.src = songs[index].src;
    songTitle.textContent = songs[index].title;
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = "⏸";
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "▶";
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
}

// Load first song on start
loadSong(currentSongIndex);

// Event listeners
playPauseBtn.addEventListener("click", togglePlayPause);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);