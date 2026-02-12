let inputBar;
let button;
let Username = "";
let ErrorMes = "";

function setup(){
    createCanvas(300,200);
    inputBar = createInput('');
        inputBar.position(40,260);
        inputBar.size(190,30);
    button = createButton('Submit');
    button.position(240,260);
    button.mousePressed(submit);
   

      
}
function draw(){
     background(240);
       text('Username: '+ Username,90,150);
    
}
 function submit(){
    Username = inputBar.value().trim();
    inputBar.value('');
    

 }

