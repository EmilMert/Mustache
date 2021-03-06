mustacheX = "0";
mustacheY = "0";
function preload() {
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
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
    
    function draw() {
    image(video, 0, 0, 400, 400);
    image(mustache, mustacheX, mustacheY, 100, 100);
    }

    function take_snapshot(){
        save("name.png");
    }
    function modelLoaded() {
        console.log('PoseNet Is Initiaalized');
    }
    function gotPoses(results)
    {
        if(results.length > 0)
        {
            mustacheX = results[0].pose.nose.x+15;
            mustacheY = results[0].pose.nose.y+5;
            console.log(results);
            console.log("mustache x =" + results[0].pose.nose.x);
            console.log("mustache y =" + results[0].pose.nose.y);
        }
    }