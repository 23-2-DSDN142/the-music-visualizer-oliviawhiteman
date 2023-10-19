
let firstRun = true

let tree = []; //Empty thingy for tree animation thing
let fire = []

//rain 

let onerain;


// clouds
let cloudOne;
let cloudTwo;
let cloudThree;
let cloudFour;
let cloudFive;
//cloud x position
let onecloudX;
let twocloudX;
let threecloudX;

let onerainy;

var Xtreearray = [50*10,300*10,320*10]; // tree X Coordinate Array (used in tree swaying section)
var Ytreearray = [100*10,500*10,300*10]; // tree Y Coordinate Array  (used in tree swaying section)



function draw_one_frame(vocal,bass,drum,other){
  if (firstRun){
    rectMode (CENTER);

    onerain = loadImage('assets/rain.png');

    cloudOne = loadImage('assets/clouds2.png');
    cloudTwo = loadImage('assets/clouds2.png');
    cloudThree = loadImage('assets/clouds2.png');
    cloudFour = loadImage('assets/clouds2.png');
    cloudFive = loadImage('assets/clouds2.png');
  
    tree.push(loadImage('pine0.png'));
    tree.push(loadImage('pine1.png'));
    tree.push(loadImage('pine2.png'));
    tree.push(loadImage('pine3.png'));

    fire.push(loadImage('assets/fire-01.png'));
    fire.push(loadImage('assets/fire-02.png'));
    fire.push(loadImage('assets/fire-03.png'));
    fire.push(loadImage('assets/fire-04.png'));

    onecloudX = 1000*10
    twocloudX = 300*10
    threecloudX = 700*10
    onerainy = 0

    firstRun = false
  }
  background(225)

  
  push();
  scale(0.1)
  image(onerain,100*10,onerainy)
  pop();
  
  onerainy = onerainy + 550

if (onerainy > 1000*10){
onerainy = 0
}
 
  // Tree Swaying section
  var VocalFrame = int(map(drum,0,100,0,4));//responds to drums
  console.log(VocalFrame);
  push();
  scale(0.1)
  image(tree[VocalFrame],Xtreearray[0],Ytreearray[0])
  image(tree[VocalFrame],Xtreearray[1],Ytreearray[1])
  image(tree[VocalFrame],Xtreearray[2],Ytreearray[2])
  pop();

//fire section
  var fireframe = int(map(bass,0,100,0,4));//responds to drums
  console.log(VocalFrame);
  push();
  scale(0.1)
  image(fire[fireframe],50*10,500*10)//fire grows larger in repsonse to drums
  pop();


let yoffset = map(other,0,100,-100,100)
push();
scale(0.1)
image(cloudOne,onecloudX,100+yoffset)
pop();

onecloudX = onecloudX - 35

if (onecloudX < -cloudOne.width){
onecloudX = 1000*10
}

let twoyoffset = map(other,0,100,-100,100)
push();
scale(0.1)
image(cloudTwo,twocloudX,100+twoyoffset)
pop();

twocloudX = twocloudX - 35

if (twocloudX < -cloudTwo.width){
twocloudX = 1000*10
}

let threeyoffset = map(other,0,100,-100,100)
push();
scale(0.1)
image(cloudThree,threecloudX,100+threeyoffset)
pop();

threecloudX = threecloudX - 35

if (threecloudX < -cloudThree.width){
threecloudX = 1000*10
}


}
