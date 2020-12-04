var numHouse = 256;
var bColor = "#012244";
var userNumHouseSlider;
var userNumHouse;

var numHouseValue;
var textPmoved;

function setup() {
 textSize(15);
  noStroke();
    let canvas = createCanvas(windowWidth * .8, windowHeight * .8);
    canvas.parent('vote');
    dWidth = width;
    dHeight = height;
    // noStroke();

    // background(color(bColor));

    sliders();
}

function draw() {
    background(bColor);
    ellipse(100,100, userNumHouseSlider.value(), userNumHouseSlider.value());
    var textP = userNumHouseSlider.value();
    userNumHouse = createInput(textP);
    userNumHouse.position(userNumHouseSlider.x + userNumHouseSlider.width, 200);
}


function sliders() {

    console.log(numHouseValue);
    userNumHouseSlider = createSlider(0, 255, 100);
    userNumHouseSlider.position(200, 200);




    // let p = createElement('label', 'lakjsdlajsd');
    // p.position(100, 400);





    //userNumHouse.size(60);



}
