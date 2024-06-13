const playSound = (music) => {
    music.pause();
    music.currentTime = 0;
    // music.play();
};

export default playSound