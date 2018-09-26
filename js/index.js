// plays sounds based off specific key that was hit
function playSound(e) {
    // ES6 Template literals to select DOM elements
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // if audio files doesn't exist exit function
    audio.currentTime = 0; // reset audio file to 0 so you dont have to wait for audio file to end before playing again
    audio.play();
    key.classList.add('playing');
}
// removes 'playing' class when transition ends
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // if event propertyName isn't transform, ignore
    this.classList.remove('playing'); // 'this' refers to 'key' because 'this' is always equal to what got called against it. 
}                                     // addEventListener got called and 'key' was called against it
//select all key elements and iterate through them to add event lister transitionend and remove 'playing' class 
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
// whenever a key is touched run playSound function
document.addEventListener('keydown', playSound);
