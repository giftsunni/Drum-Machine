// Get all drum pads and the display element
const drumPads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');

// Play audio and update display when a drum pad is clicked
drumPads.forEach(pad => {
    pad.addEventListener('click', () => {
        const audio = pad.querySelector('.clip');
        audio.play();
        display.innerText = pad.id;
    });
});

// Play audio and update display when the corresponding key is pressed
document.addEventListener('keydown', event => {
    const key = event.key.toUpperCase();
    const audioElement = document.getElementById(key);
    
    if (audioElement) {
        const drumPad = audioElement.parentElement;
        audioElement.play();
        display.innerText = drumPad.id;
    }
});
