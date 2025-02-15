let rocks = [];
let click = false;

let finalOptions = {
  enabled: true,
  characters: "o*~ .><'-+^~ ] ><o/\|",
  characterColor: "#000",
  characterColorMode: 'sampled',
  backgroundColor: "#FFF",
  backgroundColorMode: 'fixed',
  invertMode: false,
  fontSize: 16,
  rotationAngle: 0
};

function setupAsciify(){
  p5asciify.fontSize(6);
  
  p5asciify.renderers().get("brightness").update({
    enabled: finalOptions.enabled,
    characters: finalOptions.characters,
    characterColor: finalOptions.characterColor,
    characterColorMode: finalOptions.characterColorMode,
    backgroundColor: finalOptions.backgroundColor,
    backgroundColorMode: finalOptions.backgroundColorMode,
    invertMode: finalOptions.invertMode,
    rotationAngle: finalOptions.rotationAngle
  });
  
  p5asciify.renderers().get("edge").update({
        enabled: true,
        characters: "-/|\\-/|\\",
        characterColor: "#AAA",
        characterColorMode: "fixed",
        backgroundColor: "#FFF",
        backgroundColorMode: "fixed",
        invertMode: false,
        sobelThreshold: 0.01,
        sampleThreshold: 16,
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(255);
  let rows = 4;
  let columns = 4;
  let spacing = 100;
  let topPadding = 100;
  let cabSize = spacing*columns;
  let cabSizeHalf = cabSize*0.5;
  click = false;
  
  for (i=0; i<16; i++)
    {
      let newRock = new Rock(
        spacing*0.5 + map((i%columns)*spacing, 0, cabSize, -cabSizeHalf, cabSizeHalf), 
        -windowHeight*0.5 + topPadding +  spacing*0.5+floor(i/columns)*spacing);
      rocks.push(newRock)
    }
  for (i=0;i<rocks.length;i++)
    {
      rocks[i].create();
      rocks[i].show();
    }
  
}

function draw() {
  background(255);
  var changeCursor = false;
  for (i=0;i<rocks.length;i++)
    {
      rocks[i].show();
      if (rocks[i].over())
        {
          changeCursor = true;
        }
    }
  
  if (changeCursor)
    {
      cursor(CROSS);
    }
  else
    {
      cursor(ARROW);
    }

}

function mousePressed()
{
  click = true;
}

function mouseReleased()
{
  click = false;
}


function Rock(x, y){
  this.position = createVector(x,y);
  this.r = 50;
  this.over = function()
  {
    if (mouseX-width/2 > this.position.x-this.r && 
        mouseX-width/2 < this.position.x+this.r && 
        mouseY-height/2 > this.position.y-this.r && 
        mouseY-height/2 < this.position.y+this.r)
      {
        return true;
      }
    else if (touches[0] && touches[0].x-width/2 > this.position.x-this.r && 
             touches[0].x-width/2 < this.position.x+this.r && 
             touches[0].y-height/2 > this.position.y-this.r && 
             touches[0].y-height/2 < this.position.y+this.r)
      {
        return true;       
      }      
    else
      {
        return false;
      }
  }
  this.create = function()
  {
    this.pulls = [
    createVector(random(25,35),random(-25,-35)),
    createVector(random(25,35),random(25,35)),
    createVector(random(-25,-35),random(25,35)),
    createVector(random(-12,-25),random(-12,-25))
    ];
    this.verts = [
      createVector(random(-5,5),random(-25,-35)),
      createVector(random(25,35),random(-5,5)),
      createVector(random(-5,5),random(25,35)),
      createVector(random(-25,-35),random(-5,5))
    ];
    this.rgb = [random(0,100), random(255), random(255)];
    this.randomScale = createVector(random(0.5,1.33),random(0.5,1.33));
  }
  this.randomRotation = random(0,TWO_PI);
  this.rotationMod = 0;
  this.scaleMod = 1;
  this.fillMod = 0;
  
  this.show = function(){
    
    if (this.over())
      {
        this.rotationMod+=0.05;
        // stroke(0);
        // strokeWeight(6);
        this.scaleMod = 1.2;
        
        if (click)
          {
            this.scaleMod = 1.66;
            // this.fillMod = 255;
          }
        else
          {
            // this.fillMod = 0;
          }
      }
    else
      {
        // noStroke();
        this.fillMod = 0;
        this.scaleMod = 1;
      }
    
      push();
        translate(this.position.x, this.position.y);
        fill(this.fillMod + this.rgb[0]); 
        rotate(this.randomRotation + this.rotationMod);
        scale(this.randomScale.x,this.randomScale.y);
        scale(this.scaleMod)

       beginShape();
        vertex(this.verts[0].x,
               this.verts[0].y);
        quadraticVertex(this.pulls[0].x,
                        this.pulls[0].y,
                        this.verts[1].x,
                        this.verts[1].y);
        quadraticVertex(this.pulls[1].x,
                        this.pulls[1].y,
                        this.verts[2].x,
                        this.verts[2].y);
        quadraticVertex(this.pulls[2].x,
                        this.pulls[2].y,
                        this.verts[3].x,
                        this.verts[3].y);
        quadraticVertex(this.pulls[3].x,
                        this.pulls[3].y,
                        this.verts[0].x,
                        this.verts[0].y);
        endShape(CLOSE);
      pop();
  }
}

    // beginShape();
    // vertex(50,50)
    // vertex(random(75,80),random(40,55))
    //   quadraticVertex(random(60,80),random(90,125),0,random(60,80))
    // vertex(random(25,50),random(35,60))
    // vertex(50,50)
    // endShape(CLOSE);