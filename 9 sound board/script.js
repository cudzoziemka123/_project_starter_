const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const stopSongs = () => {
  sounds.forEach((sound) => {
    document.getElementById(sound).pause();
    document.getElementById(sound).currentTime = 0;
  });
};
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});
