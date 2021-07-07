noseX = 0
noseY = 0
hairX = 0
hairY = 0

function preload() {
    clown_nose =loadImage("https://i.postimg.cc/XYzpf7bn/clown-removebg-preview.png");
    clown_hair =loadImage("https://i.postimg.cc/SsDsKyD0/bruh-you-creepy-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotPoses)

}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x -62;
        noseY = result[0].pose.nose.y -64;
        hairX = result[0].pose.nose.x -140;
        hairY = result[0].pose.nose.y -185;
        console.log("Nose_X=" + result[0].noseX);
        console.log("Nose_Y=" + result[0].noseY);

    }
}

function modelloaded() {
    console.log("PoseNet");
}

function draw() {
    image(video, 0, 0, 500, 500);
    image(clown_nose, noseX, noseY, 125, 125 )
    image(clown_hair, hairX, hairY, 265, 215 )
}

function takeSnapshot() {
    save("FiteredImage.png")
}