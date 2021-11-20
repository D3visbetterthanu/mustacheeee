noseX=0;
noseY=0;
function preload(){

filter_img=loadImage('https://i.postimg.cc/43rCDmHV/moustache.png');


}

function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size=(350,350);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw(){
    image(video, 0, 0, 350, 350);
    image(filter_img, noseX-160, noseY-125, 85, 85 )

    
        
    
}
function modelLoaded(){
    console.log("PoseNet is initiallized");
}

function gotPoses(results){
     if(results.length>0){
         console.log(results);
         console.log("noseX= "+ noseX);
         console.log("noseY= "+noseY);
         noseX=results[0].pose.nose.x;
         noseY=results[0].pose.nose.y;
     }
}

function take_snap(){
     save('FilterPic.png');
}