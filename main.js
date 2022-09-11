harry_potter_song = "";
peter_pan_song = "";


function preload(){
harry_potter_song = loadSound(musicharry.mp3);
peter_pan_song = loadSound(music2.mp3);
}

function draw(){
image(video,0,0,630,500);
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
