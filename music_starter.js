
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
let cloudSix;
//cloud x position
let onecloudX;
let twocloudX;
let threecloudX;
let fourcloudX;
let fivecloudX;
let sixcloudX;

let onerainy;

var Xtreearray = [50*10,300*10,320*10]; // tree X Coordinate Array (used in tree swaying section)
var Ytreearray = [100*10,500*10,300*10]; // tree Y Coordinate Array  (used in tree swaying section)



function draw_one_frame(vocal,bass,drum,other){
  if (firstRun){
    rectMode (CENTER);

    onerain = loadImage('assets/rain.png');
    onerainy = 0

    cloudOne = loadImage('assets/Fclouds1.png');
    cloudTwo = loadImage('assets/Fclouds2.png');
    cloudThree = loadImage('assets/Fclouds3.png');
    cloudFour = loadImage('assets/Fclouds4.png');
    cloudFive = loadImage('assets/Fclouds5.png');
    cloudSix = loadImage('assets/Fclouds6.png');
  
    tree.push(loadImage('assets/pines-01.png'));
    tree.push(loadImage('assets/pines-02.png'));
    tree.push(loadImage('assets/pines-03.png'));
    tree.push(loadImage('assets/pines-04.png'));

    fire.push(loadImage('assets/fire-01.png'));
    fire.push(loadImage('assets/fire-02.png'));
    fire.push(loadImage('assets/fire-03.png'));
    fire.push(loadImage('assets/fire-04.png'));

    onecloudX = 1000*10
    twocloudX = 250*10
    threecloudX = 750*10
    fourcloudX = 500*10
    fivecloudX = 100*10
    sixcloudX = 400*10

    firstRun = false
  }
  background(225)

  // BEGGINNING OF CLOUD SECTION// 

 //CLOUD ONE
let yoffset = map(other,0,100,-250,-150)
push();
scale(0.25)
image(cloudOne,onecloudX,1+yoffset)
pop();

onecloudX = onecloudX - 35

if (onecloudX < -cloudOne.width){
onecloudX = 1000*4
}
//CLOUD TWO
let twoyoffset = map(other,0,100,-100,0)
push();
scale(0.25)
image(cloudTwo,twocloudX,0+twoyoffset)
pop();

twocloudX = twocloudX - 35

if (twocloudX < -cloudTwo.width){
twocloudX = 1000*4
}
//CLOUD THREE
let threeyoffset = map(other,0,100,-100,0)
push();
scale(0.25)
image(cloudThree,threecloudX,0+threeyoffset)
pop();

threecloudX = threecloudX - 35

if (threecloudX < -cloudThree.width){
threecloudX = 1000*4
}

//CLOUD FOUR
let fouryoffset = map(other,0,100,-350,-250,)
push();
scale(0.25)
image(cloudFour,fourcloudX,0+fouryoffset)
pop();

fourcloudX = fourcloudX - 35

if (fourcloudX < -cloudFour.width){
fourcloudX = 1000*4
}
//CLOUD FIVE
let fiveyoffset = map(other,0,100,-200,-100)
push();
scale(0.25)
image(cloudFive,fivecloudX,0+fiveyoffset)
pop();

fivecloudX = fivecloudX - 35

if (fivecloudX < -cloudFive.width){
fivecloudX = 1000*4
}
//CLOUDSIX
let sixyoffset = map(other,0,100,-300,-200)
push();
scale(0.25)
image(cloudSix,sixcloudX,0+sixyoffset)
pop();

sixcloudX = sixcloudX - 35

if (sixcloudX < -cloudSix.width){
sixcloudX = 1000*4
}
// END OF CLOUD SECTION//
//   push();
//  scale(0.5)
//   image(onerain,1,onerainy)
//   pop();
  
//   onerainy = onerainy + 550

// if (onerainy > 1000*10){
// onerainy = 0
// }
 
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




 

}




