const playSound = (music) => {
    music.pause();
    music.volume = 0.5;
    music.currentTime = 0;
    music.play();
};

export default playSound