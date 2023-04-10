let canvas;
let mound = [];
function setup(){
    // Creates a canvas with 800px width and 600px height
    canvas = createCanvas(windowWidth, windowHeight);

    canvas.style('z-index', -1);
    angleMode(DEGREES);
    rectMode(CENTER);
    
    canvas.position(0,0);
    
    background(255);
    for (let i = 0; i < 30; i++) {
        mound.push(new Sand());
    }
  }
  function windowResized()
  {
      resizeCanvas(windowWidth, windowHeight);
  }

function draw()
{ 
  background(255);
   for (let i = 0; i < mound.length; i++) 
    {
        mound[i].move();
        mound[i].display();
    }
}



class Sand 
{
    constructor() 
    {
      this.x = random(width);
      this.y = random(height);
      this.a = random(220, 250);
      this.rotate = random(-1, 1);
      this.angle = 0;
      
      this.size = random(55, 150);
      this.speedY = random(-1.5, 1.5);
      
      if(this.speedY === 0 && this.speedY <= 0.2 || this.speedY >= -0.2 )
      {
        this.speedY = 1;
      }
      
      if(this.rotate >= 0)// && this.rotate <= 1 || this.rotate >= -1  
      {
          this.rotate = 0.5;
      }
    }
  
    move() 
    {
      if(this.y > height + 70)
      {
        this.x = random(width);
        this.y = -60;
      }
      
      if(this.y < -70)
      {
        this.x = random(width);
        this.y = height + 60;
      }

      this.y += this.speedY;
    }
    
  
    display() 
    {
      noStroke();
      
      push();
      translate(this.x, this.y); 
      rotate(this.angle);
      let squareColor = (240, 240, 240, this.a);
      fill(squareColor);
      square(0, 0, this.size, 10);
      pop();
     
      
      this.angle += this.rotate;
     
     
    }
}
