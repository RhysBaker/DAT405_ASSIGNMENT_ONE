//creates array variable
let circleArray = [];
//assigns 100 to variable arraySize
let arraySize = 100;
//creates varaibles for rgb sliders
var rSlider, gSlider, bSlider;


function setup() {
  //assigns canvas to variable
  var canvas = createCanvas(594, 841);
  //assigns class to canvas
  canvas.class("canvasContainer");
  canvas.parent("canvasContainer");
  //assings the range of the rgb sliders and the starting value
  //positions sliders on page
  rSlider = createSlider(0, 255, 255);
  rSlider.position(650, 380);
  gSlider = createSlider(0, 255, 255);
  gSlider.position(650, 410);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(650, 440);
  //creates an object for the circles
  //needed so that when mouse is clicked it creates new object
  for (let i = 0; i < arraySize; i++) {
    circleArray[i] = new Circle;
  }
}


function draw() {

  //assingns variables to slider values
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  //set background depending on slider values
  //has a transparency so shapes have trail effect
  background(r, g, b, 20);



//creates the arrey and binds arreny length to array(100)
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].moveFunction();
    circleArray[i].displayCircle();

//creates a new object whereever the mouse is positiond and when the mouse is clicked
//assigns random speeds and sizes to the shapes
    if (mouseIsPressed) {
      for (let i = 0; i < arraySize; i++) {
        circleArray[i] = new Circle(mouseX, mouseY, random(-2, 2), random(-2, 2), random(1, 25));
      }
    }

  }
}


//Definition of the class Circle
class Circle {

//creating the constructor so that the object can use aruments
  constructor(x, y, speedX, speedY, size) {
    //Setup of class' variables

    //assigning the parameters to the arguments
    //done for x and y position
    //speed
    //and colour
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;

    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = 100;
  }

  //Class function that takes care of motion and collision
  //creating a function that allows the shapes to move away from the starting point
  moveFunction() {
    //Motion system - current position and speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    //Based on boundaries collision, reverse direction for x and y
    //if the left arrow key is held down the shapes will vounce off of the boundries
    if (keyIsDown(LEFT_ARROW)) {
      if (this.x > width || this.x < 0) {
        this.speedX *= -1;
      }
      if (this.y > (height) || this.y < 0) {
        this.speedY *= -1;
      }
      //if no key is held down the shapes will go past the canvas boundries
    } else {
      if (this.x > width || this.x < 0) {}
      if (this.y > (height) || this.y < 0) {}
    }
  }


  //Class function that displays the ellipse
  displayCircle() {
    noStroke();
    //assigning colour to the shapes
    this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    fill(this.fillcol);
    //if the right arrow key is held down the shapes will change to rectangles
    if (keyIsDown(RIGHT_ARROW)) {
      rect(this.x, this.y, this.size, this.size);
      //if no key is held down then shapes will be ellipses
    } else {
      ellipse(this.x, this.y, this.size, this.size);
    }
  }
}
