const track = document.getElementById("track");
const thumbnail = document.getElementById("thumbnail");
const artist = document.getElementById("m-artist");
const title = document.getElementById("m-title");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let next = document.getElementById("next-track");
let prev = document.getElementById("prev-track");
trackIndex = 0;

tracks = [
  "https://res.cloudinary.com/dapv0bmzq/video/upload/v1686123867/Tipper_-_Broken_Soul_Jamboree_-_01_Big_Question_Small_Head_gdni78.mp3",
  "https://res.cloudinary.com/dapv0bmzq/video/upload/v1686123876/Tipper_-_Broken_Soul_Jamboree_-_02_Cuckoo_uz91xh.mp3",
  "https://res.cloudinary.com/dapv0bmzq/video/upload/v1686123887/Tipper_-_Broken_Soul_Jamboree_-_03_Class_5_Roaming_Vapour_toj4gu.mp3",
  "https://res.cloudinary.com/dapv0bmzq/video/upload/v1686123892/Tipper_-_Broken_Soul_Jamboree_-_04_Brocken_Spectre_olrv5w.mp3",
  "https://res.cloudinary.com/dapv0bmzq/video/upload/v1686123898/Tipper_-_Broken_Soul_Jamboree_-_05_Dead_Soon_ltrw2n.mp3",
  "https://res.cloudinary.com/dapv0bmzq/video/upload/v1686123905/Tipper_-_Broken_Soul_Jamboree_-_06_Cinder_Cone_mlt1la.mp3",
  "https://res.cloudinary.com/dapv0bmzq/video/upload/v1686123908/Tipper_-_Broken_Soul_Jamboree_-_07_Herriot_Method_ecq8br.mp3",
  "https://res.cloudinary.com/dapv0bmzq/video/upload/v1686123917/Tipper_-_Broken_Soul_Jamboree_-_08_Neuron_Huskie_dz4xm5.mp3",
  "https://res.cloudinary.com/dapv0bmzq/video/upload/v1686123923/Tipper_-_Broken_Soul_Jamboree_-_09_Tit_For_Tat_veyfw9.mp3",
  "https://res.cloudinary.com/dapv0bmzq/video/upload/v1686123929/Tipper_-_Broken_Soul_Jamboree_-_10_Reality_Harshness_Defender_ygvdrq.mp3",
  "https://res.cloudinary.com/dapv0bmzq/video/upload/v1686123940/Tipper_-_Broken_Soul_Jamboree_-_11_Royal_Dragon_Sir_s1dp4e.mp3",
  "https://res.cloudinary.com/dapv0bmzq/video/upload/v1686123948/Tipper_-_Broken_Soul_Jamboree_-_12_Hourglass_Infringement_stytuy.mp3",
  "https://res.cloudinary.com/dapv0bmzq/video/upload/v1686123957/Tipper_-_Broken_Soul_Jamboree_-_13_Ever_Decreasing_Circles_oevoye.mp3",
];

thumbnail_img =
  "https://res.cloudinary.com/dapv0bmzq/image/upload/v1686122562/cover_fst8zq.jpg";
music_artist = "Tipper";
music_titles = ["Big Question Small Head", "Cuckoo", "Class 5 Roaming Vapour", "Brocken Spectre", "Dead Soon",
  "Cinder Cone",
  "Herriot Method",
  "Neuron Huskie",
  "Tit For Tat",
  "Reality Harshness Defender",
  "Royal Dragon Sir",
  "Hourglass Infringement",
  "Ever Decreasing Circles",
];

let playing = true;

function pausePlay() {
  if (playing) {
    play.style.display = "none";
    pause.style.display = "block";
    artist.textContent = music_artist;
    title.textContent = music_titles[trackIndex];
    track.play();
    playing = false;
    console.log(music_titles[trackIndex]);
  } else {
    pause.style.display = "none";
    play.style.display = "block";
    artist.textContent = music_artist;
    title.textContent = music_titles[trackIndex];
    track.pause();
    playing = true;
    console.log(music_titles[trackIndex]);
  }
}
play.addEventListener("click", pausePlay);
pause.addEventListener("click", pausePlay);

track.addEventListener("ended", nextTrack);

function nextTrack() {
  trackIndex++;
  if (trackIndex > tracks.length - 1) {
    trackIndex = 0;
  }
  track.src = tracks[trackIndex];
  thumbnail.src = thumbnail_img;
  artist.textContent = music_artist;
  title.textContent = music_titles[trackIndex];
  playing = true;
  pausePlay();
}
next.addEventListener("click", nextTrack);

function prevTrack() {
  trackIndex--;
  if (trackIndex < 0) {
    trackIndex = tracks.length - 1;
  }
  track.src = tracks[trackIndex];
  thumbnail.src = thumbnail_img;
  artist.textContent = music_artist;
  title.textContent = music_titles[trackIndex];
  playing = true;
  pausePlay();
}
prev.addEventListener("click", prevTrack);

function progressBarValue() {
  progressBar.max = track.duration;
  progressBar.value = track.currentTime;
  currentTime.textContent = formatTime(track.currentTime);
  durationTime.textContent = formatTime(track.duration);
}
setInterval(progressBarValue, 500);

function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function changeProgressBar() {
  track.currentTime = progressBar.value;
}
progressBar.addEventListener("click", changeProgressBar);


