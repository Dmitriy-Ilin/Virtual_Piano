
document.addEventListener("keydown", function (e) {
    let audioA = new Audio("white-keys/A.mp3");

    if (e.code == "KeyA") {
       return audioA.play();
   } else if (e.code == "KeyS") {
       return audioA.play();
   } else if (e.code == "KeyD") {
       return audioA.play();
   } else if (e.code == "KeyF") {
       return audioA.play();
   } else if (e.code == "KeyG") {
       return audioA.play();
   } else if (e.code == "KeyH") {
       return audioA.play();
   } else if (e.code == "KeyJ") {
       return audioA.play();
   } else if (e.code == "KeyW") {
       return audioA.play();
   } else if (e.code == "KeyE") {
       return audioA.play();
   } else if (e.code == "KeyT") {
       return audioA.play();
   } else if (e.code == "KeyY") {
       return audioA.play();
   } else if (e.code == "KeyU") {
       return audioA.play();
   } else {
       console.log("Wrong key");
   }
});