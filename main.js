nose_x=0;
nose_y=0;
leftwrist_x=0;
rightwrist_x=0;
difference=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#5196e3");
    textSize(difference);
    text("Samiksha", nose_x,nose_y);

}

function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);
        nose_x= results[0].pose.nose.x;
    nose_y= results[0].pose.nose.y;
    leftwrist_x= results[0].pose.leftWrist.x;
    rightwrist_x= results[0].pose.rightWrist.x;
    difference= Math.floor(leftwrist_x-rightwrist_x);
        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}


