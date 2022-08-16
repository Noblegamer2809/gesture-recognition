noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup()
{
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 500);
canvas.position(600, 100);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotResults)
}

function draw()
{
    background('#0FDCF5');
    document.getElementById("size").innerHTML="width and height of the square will be = " + difference;
  fill("#0B24C0");
  stroke("#0B24C0");
  square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log("model has been loaded");

}



function gotResults(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX = "+ noseX +"noseY = " + noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX) ;
    console.log("leftWristX=" + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference)  }
}