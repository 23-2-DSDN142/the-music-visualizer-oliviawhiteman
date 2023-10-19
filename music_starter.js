
let firstRun = true

let tree = []; //Empty thingy for tree animation thing
let fire = []
let pencil;
let cloudX;


var Xtreearray = [50*10,300*10,320*10]; // tree X Coordinate Array (used in tree swaying section)
var Ytreearray = [100*10,500*10,300*10]; // tree Y Coordinate Array  (used in tree swaying section)


function draw_one_frame(vocal,bass,drum,other){
  if (firstRun){
    rectMode (CENTER);

    pencil = loadImage('assets/clouds2.png');
  
    tree.push(loadImage('pine0.png'));
    tree.push(loadImage('pine1.png'));
    tree.push(loadImage('pine2.png'));
    tree.push(loadImage('pine3.png'));

    fire.push(loadImage('assets/fire-01.png'));
    fire.push(loadImage('assets/fire-02.png'));
    fire.push(loadImage('assets/fire-03.png'));
    fire.push(loadImage('assets/fire-04.png'));

    cloudX = 1000*10


    firstRun = false
  }
  background(225)

 
  // Tree Swaying section
  var VocalFrame = int(map(drum,0,100,0,5));//responds to drums
  console.log(VocalFrame);
  push();
  scale(0.1)
  image(tree[VocalFrame],Xtreearray[0],Ytreearray[0])
  image(tree[VocalFrame],Xtreearray[1],Ytreearray[1])
  image(tree[VocalFrame],Xtreearray[2],Ytreearray[2])
  pop();

//fire section
  var fireframe = int(map(bass,0,100,0,5));//responds to drums
  console.log(VocalFrame);
  push();
  scale(0.1)
  image(fire[fireframe],50*10,500*10)//fire grows larger in repsonse to drums
  pop();


let yoffset = map(other,0,100,-100,100)
push();
scale(0.1)
image(pencil,cloudX,100+yoffset)
pop();

cloudX = cloudX - 35

if (cloudX < -pencil.width){
cloudX = 1000*10
}

}