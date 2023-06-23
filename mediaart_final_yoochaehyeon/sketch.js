
let x = 100
let y = 100

let a = 100
let b = 100

let img;
let imgHead;
let fr = 3;
let h=0;


function preload() {
    img = loadImage('image/top.jpeg') 
    imgHead = loadImage('image/head.png')
    imgTop = loadImage('image/top.png')
    //fontBug = loadFont('image/OFL.txt');
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    stroke(100, 100, 100);
    fill(220);
    imageMode(CENTER);
    frameRate(fr);
    pg = createGraphics(400, 250);
     b1 = color(255);
  b2 = color(0);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);
  

   
}


function draw() {
    //background(255);
    //  blendMode( overlay ) ; 

    x += random(-5, 5);
    y += random(-5, 5);
    a += random(-5, 5);
    b += random(-5, 5);


    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);

    let lo = random(50, 100)
    let ko = random(30, 50)
    let ro = random(20, 30)
    let po = random(20, 100)
    let body = [];
stroke(10,10,10)
strokeWeight(20)
 
    strokeWeight(1)
    stroke(ro + 150, ko + 100, lo + 0)
    
    for(let i = po; i < width; i += 3) {
        framelate=(10)
        body[i]= image(imgHead,i,0,i,width-i*20,10,10)
        
      }
  
    
    

    fill(ro + 250, ko + 250, lo + 50)
    for ( let a = ro; a < lo; a++ ) {
        for( let b = ro; b< lo; b++ ){
   body[a] = ellipse(height/2-100+b*0.5,width/2+b,10,10);
   body[b] = ellipse(height/2+40+b,width/2+b,10,10);
   line(height/2+40+b,width/2+b,height/2-100+b*0.5,width/2+b);


   body[a] = ellipse(height/2+400,width/2+4*a-250,10,10);
   body[b] = ellipse(height/2+540,width/2+4*a-250,10,10);
   body[b] = ellipse(height/2+470,width/2+a-180,10,10);
   body[b] = ellipse(height/2+425,width/2+a*2-130,10,10);
   line(height/2+400,width/2+4*a-250,height/2+540,width/2+4*a-250);
   
        }
    }
    fill(ro+250,ko + 250, lo + 50)
     // textFont('fontBug');
     //textSize(width / 3);
     //textAlign(CENTER, CENTER);
     // text('서로를 갉아먹는,공간 사이를 틈입하는 벌레', windowWidth/2, windowHeight/2);
}
   