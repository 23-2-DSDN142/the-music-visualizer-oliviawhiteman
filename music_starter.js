
let firstRun = true


let fire = []
//BACKGROUND//
let hills; 


//RAIN//

let onerain;
let tworain;
let threerain;
let fourrain;
let fiverain;
let sixrain;

let onerainy;
let tworainy;
let threerainy;
let fourrainy;
let fiverainy;
let sixrainy;


// CLOUDS//
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


//TREES//

let tree = []; //Empty thingy for tree animation thing
var Xtreearray = [-200*10,-150*10,0*10,100*10,200*10,300*10,500*10,100*10]; // tree X Coordinate Array (used in tree swaying section)
var Ytreearray = [20*5,50*15]; // tree Y Coordinate Array  (used in tree swaying section)
var Xtreearraytwo = [-280*6,-100*6,0*6,170*6,230*6,]


function draw_one_frame(vocal,bass,drum,other){
  if (firstRun){
    rectMode (CENTER);

    //BACKGROUND//

    hills= loadImage('assets/hills.png')

//RAIN//

    onerain = loadImage('assets/finrain.png');
    tworain = loadImage('assets/finrain.png');
    threerain = loadImage('assets/finrain.png');
    fourrain = loadImage('assets/finrain.png');
    fiverain = loadImage('assets/finrain.png');
    sixrain = loadImage('assets/finrain.png');

    onerainy = -500*2
    tworainy = -500*2
    threerainy = 500*2
    fourrainy = 500*2
    fiverainy = 0
    sixrainy = 0


//CLOUDS//
    cloudOne = loadImage('assets/Fclouds1.png');
    cloudTwo = loadImage('assets/Fclouds2.png');
    cloudThree = loadImage('assets/Fclouds3.png');
    cloudFour = loadImage('assets/Fclouds4.png');
    cloudFive = loadImage('assets/Fclouds5.png');
    cloudSix = loadImage('assets/Fclouds6.png');

    onecloudX = 1000*10
    twocloudX = 250*10
    threecloudX = 750*10
    fourcloudX = 500*10
    fivecloudX = 100*10
    sixcloudX = 400*10

//TREES//
    tree.push(loadImage('assets/pines-01.png'));
    tree.push(loadImage('assets/pines-02.png'));
    tree.push(loadImage('assets/pines-03.png'));
    tree.push(loadImage('assets/pines-04.png'));

    //FIRE//

    fire.push(loadImage('assets/Ffire-01.png'));
    fire.push(loadImage('assets/Ffire-02.png'));
    fire.push(loadImage('assets/Ffire-03.png'));
    fire.push(loadImage('assets/Ffire-04.png'));

    

    firstRun = false
  }
  background(225)



  //CLOUD SECTION START// 

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
// CLOUD SECTION END //
//image(hills,0,0)
 
  // TREE SECTION START//

  var treeoneFrame = int(map(drum,0,100,0,4));//responds to drums
  console.log(treeoneFrame);
  push();
  scale(0.15)
 image(tree[treeoneFrame],Xtreearraytwo[0],Ytreearray[1])
  image(tree[treeoneFrame],Xtreearraytwo[1],Ytreearray[1])
  image(tree[treeoneFrame],Xtreearraytwo[2],Ytreearray[1])
  image(tree[treeoneFrame],Xtreearraytwo[3],Ytreearray[1])
  image(tree[treeoneFrame],Xtreearraytwo[4],Ytreearray[1])
  pop();

  
  var VocalFrame = int(map(drum,0,100,0,4));//responds to drums
  console.log(VocalFrame);
  push();
  scale(0.2)
  image(tree[VocalFrame],Xtreearray[0],Ytreearray[0])
  image(tree[VocalFrame],Xtreearray[1],Ytreearray[0])
  image(tree[VocalFrame],Xtreearray[2],Ytreearray[0])
  image(tree[VocalFrame],Xtreearray[3],Ytreearray[0])
  image(tree[VocalFrame],Xtreearray[4],Ytreearray[0])
  image(tree[VocalFrame],Xtreearray[5],Ytreearray[0])
  image(tree[VocalFrame],Xtreearray[6],Ytreearray[0])
  image(tree[VocalFrame],Xtreearray[7],Ytreearray[0])
  pop();
// TREE SECTION END//

//FIRE SECTION START//
  var fireframe = int(map(bass,0,100,0,4));//responds to drums
  console.log(fireframe);
  push();
  scale(0.1)
  image(fire[fireframe],50*10,500*10)//fire grows larger in repsonse to drums
  pop();

// FIRE SECTION END//
//RAIN SECTION START//

//rain square one
push();
scale(0.5)
 image(onerain,1,onerainy)
 pop();
 
 onerainy = onerainy + 35

if (onerainy > 1000*2){
onerainy = -500*2
}

//rain square two
push();
scale(0.5)
 image(tworain,1000,tworainy)
 pop();
 
 tworainy = tworainy + 35

if (tworainy > 1000*2){
tworainy = -500*2
}


//rain square three
push();
scale(0.5)
 image(threerain,1000,threerainy)
 pop();
 
 threerainy = threerainy + 35

if (threerainy > 1000*2){
threerainy = -500*2
}

//rain square four 
push();
scale(0.5)
 image(fourrain,0,fourrainy)
 pop();
 
 fourrainy = fourrainy + 35

if (fourrainy > 1000*2){
fourrainy = -500*2
}

//rain square five 
push();
scale(0.5)
 image(fiverain,0,fiverainy)
 pop();
 
 fiverainy = fiverainy + 35

if (fiverainy > 1000*2){
fiverainy = -500*2
}
// rain square six
push();
scale(0.5)
 image(sixrain,1000,sixrainy)
 pop();
 
 sixrainy = sixrainy + 35

if (sixrainy > 1000*2){
sixrainy = -500*2
}

//RAIN SECTION END//


 

}




