
let firstRun = true

let tree = [];


var Xtreearray = [50*10,300*10,320*10];
var Ytreearray = [100*10,500*10,300*10];


function draw_one_frame(vocal,bass,drum,other){
  if (firstRun){
    rectMode (CENTER);
    tree.push(loadImage('pine0.png'))
    tree.push(loadImage('pine1.png'))
    tree.push(loadImage('pine2.png'))
    tree.push(loadImage('pine3.png'))


    firstRun = false
  }
  background(225)
  
  
  var VocalFrame = int(map(drum,0,100,0,5));
  console.log(VocalFrame);
  push();
  scale(0.1)
  image(tree[VocalFrame],Xtreearray[0],Ytreearray[0])
  image(tree[VocalFrame],Xtreearray[1],Ytreearray[1])
  image(tree[VocalFrame],Xtreearray[2],Ytreearray[2])
  pop();



  
}