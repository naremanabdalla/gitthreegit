var myVedio = document.getElementsByTagName('video')[0]
document.getElementById('play').addEventListener('click', function () {
    myVedio.play()
})
document.getElementById('stop').addEventListener('click', function () {
    myVedio.pause()
})
document.getElementById('lowSpeed').addEventListener('click', function () {
    myVedio.playbackRate -= 0.5
})
document.getElementById('backSec').addEventListener('click', function () {
    myVedio.currentTime -= 10
})
document.getElementById('forwardSec').addEventListener('click', function () {
    myVedio.currentTime += 10
})
document.getElementById('heightSpeed').addEventListener('click', function () {
    myVedio.playbackRate += 0.5
})
document.getElementById('mute').addEventListener('click', function () {
    myVedio.muted = myVedio.muted ? false : true
    document.getElementById('mute').innerText = myVedio.muted == true ? "unmute" : "mute"

})
var myInput = document.getElementById('input')
var VoiceInput = document.getElementById('VoiceInput')
var speedInput = document.getElementById('speedInput')
var value = document.getElementById('value');
var durationvalue = document.getElementById('durationvalue');


value.textContent = input.value;
durationvalue.textContent = input.value;
myVedio.addEventListener('timeupdate', function () {
    myInput.value = myVedio.currentTime;
    value.textContent = (myVedio.currentTime / 60).toFixed(2)
    durationvalue.textContent = (myVedio.duration / 60).toFixed(2)

});
myInput.addEventListener("input", function () {
    myVedio.currentTime = myInput.value;
});

VoiceInput.addEventListener("input", function () {
    myVedio.volume = VoiceInput.value;
});
speedInput.addEventListener("input", function () {
    myVedio.playbackRate = speedInput.value;
});


////////////////////////////////////////////////////////////////////////
var red = document.getElementById('red')
var green = document.getElementById('green')
var blue = document.getElementById('blue')
var myhead = document.getElementById('head')


red.addEventListener("input", function () {
    myhead.style.color = `rgb(${red.value},${green.value},${blue.value})`

});
green.addEventListener("input", function () {
    myhead.style.color = `rgb(${green.value},${green.value},${blue.value})`

});
blue.addEventListener("input", function () {
    myhead.style.color = `rgb(${blue.value},${green.value},${blue.value})`

});





















