noseX=0;
noseY=0;

function preload() {
 clown_nose = loadimage('https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Ffree%2Fmustache-transparent-background.html&psig=AOvVaw2IixoFOJzl2_xAMSy5blGI&ust=1666100319373000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPC2ir-x5_oCFQAAAAAdAAAAABAE');
}


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}


function draw() {
  image(video, 0, 0, 300, 300);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(noseX, noseY, 20);
  image(clown_nose, noseX, noseY, 30, 30);
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function take_snapshot(){
    save('myFilterImage.png');
}