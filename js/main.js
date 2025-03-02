let about = {
    title:"A collection of other people's digital collections",
    author:"",
    range:"",
    link:""
}

let code = [38, 38, 40, 40, 37, 39];
let keysTyped = [];

let aboutOpen = false;

let rocks = [];
let click = false;

let columns;
let spacing;
let topPadding;
let cabSize;
let cabSizeHalf;
let rows;
let canvHeight;

let frameRateTracker = 0;
// let edgeDetectionEnabled = true;
let mode = 0;
let modes = ['ascii', 'text'];

let sort;

let attractmode = false;

let attractInterval = 30;
let attractTimer = 1;
let canvScrollElt;

let rockGenerationTimer = 0;
let rockGenerationInterval = 1;
let rockCounter = 0;

function setupAsciify(){
  p5asciify.fontSize(6);
  
  p5asciify.renderers().get("brightness").update({
    enabled: true,
    characters: "*~><'-+^~ ] ><o/\|. ",
    characterColor: "#000",
    characterColorMode: 'sampled',
    backgroundColor: "#FFF",
    backgroundColorMode: 'fixed',
    invertMode: false,
    fontSize: 16,
    rotationAngle: 0
  });

  // edge detection looked cool but slowed everything down so bad!!
  
  // p5asciify.renderers().get("edge").update({
  //   enabled: false,
  //   characters: "-/|\\-/|\\",
  //   characterColor: "#666",
  //   characterColorMode: "fixed",
  //   backgroundColor: "#FFF",
  //   backgroundColorMode: "fixed",
  //   invertMode: false,
  //   sobelThreshold: 0.05,
  //   sampleThreshold: 16
  // });
}

function setup() {
  columns = floor(constrain((windowWidth / 100), 3, 8));  
  spacing = 100;
  topPadding = 60;
  cabSize = spacing*columns;
  cabSizeHalf = cabSize*0.5;
  click = false;
  rows = collections.length / columns;
  canvHeight = constrain((200 + (rows * spacing)), windowHeight*0.8, 3200);
  console.log(rows);
  // randomSeed(101);

  let c = createCanvas(windowWidth, canvHeight, WEBGL);
  c.parent("#canv");

  pixelDensity(2);
  collections = shuffle(collections);

  // for (i=0; i<collections.length; i++)
  //   {
  //     let newRock = new Rock(0,0);
  //     newRock.collection = collections[i];
  //     rocks.push(newRock);
  //   }

  // for (i=0;i<rocks.length;i++)
  //   {
  //     rocks[i].create();
  //     rocks[i].show();
  //   }

  rockColumnSolver(false);
  document.getElementById('canv').style.height = "" + canvHeight + "px";
  populateTable();
  sort = new Tablesort(document.getElementById('contributors'));
  canvScrollElt = document.getElementById("canv-scroll");

}

function draw() {

  background(240);
  if (mode != 1){
    
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

    disableAsciiOnFramerate();
    steppedRockGenerator();
  }

  if (attractmode)
  {
    DoAttractMode();
  }

  

}

function mousePressed()
{
  if (mouseY < canvScrollElt.scrollTop) return;
  if (touches[0] && touches[0].y < canvScrollElt.scrollTop) return;
  if (mode == 1) return;
  if (aboutOpen) return;

  click = true;
}

function mouseReleased()
{

  click = false;
}


function Rock(x, y){
  this.pos = createVector(0,0);
  this.targetPos = createVector(x,y)
  this.r = 50;
  this.collection = {title:"",author:"",range:"",link:""};
  this.active = false;
  this.over = function()
  {
    if (!touches[0])
    {
        if    (mouseX-width/2 > this.pos.x-this.r && 
            mouseX-width/2 < this.pos.x+this.r && 
            mouseY-height/2 > this.pos.y-this.r && 
            mouseY-height/2 < this.pos.y+this.r)
        {
          return true;
        } 
    }
        
    else if (touches[0] && touches[0].x-width/2 > this.pos.x-this.r && 
            touches[0].x-width/2 < this.pos.x+this.r && 
            touches[0].y-height/2 > this.pos.y-this.r && 
            touches[0].y-height/2 < this.pos.y+this.r)
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
      this.rgb = [random(0,100), random(0,255), random(0,255)];
      this.randomScale = createVector(random(0.5,1.33),random(0.5,1.33));
  }
  this.randomRotation = random(0,TWO_PI);
  this.rotationMod = 0;
  this.scaleMod = 1;
  this.fillMod = 0;
  
  this.show = function(){
      
    if (this.pos != this.targetPos)
    {
      this.pos = p5.Vector.lerp(this.pos,this.targetPos,0.2);
    }

    stroke(0);
    strokeWeight(4);
    if (this.active)
    {
      this.rotationMod+=0.05;
    }

    if (this.over())
      {
        this.rotationMod+=0.05;
        this.scaleMod = 1.1;
        
        if (click)
          {
            this.scaleMod = 1.66;
          }
      }
    else
      {
        this.fillMod = 0;
        this.scaleMod = 1;
      }
  
    push();
      translate(this.pos.x, this.pos.y);
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

function mouseClicked()
{

  if (mouseY < canvScrollElt.scrollTop) return;
  if (touches[0] && touches[0].y < canvScrollElt.scrollTop) return;
  if (mode == 1) return;
  if (aboutOpen) return;

  let rockClicked = false;
  let rockInd = 0;
  for (i=0;i<rocks.length;i++)
  {
    if (rocks[i].over())
    {
      rockClicked = true;
      rockInd = i;
      rocks[i].active = true;
      console.log("rock was clicked!");
      changeCollectionInfo(
        rocks[i].collection.title,
        rocks[i].collection.author,
        rocks[i].collection.range,
        rocks[i].collection.link,
        );

      if (attractmode)
      {
        window.open(rocks[i].collection.link, "newwindow", "top=0, left=0");
      }
    }
  }
  if (rockClicked)
  {
    rocks.forEach(rock => (rock.active = false));
    rocks[rockInd].active = true;
  }

}

function touchEnded()
{
  if (mouseY < canvScrollElt.scrollTop) return;
  if (touches[0] && touches[0].y < canvScrollElt.scrollTop) return;
  if (mode == 1) return;
  if (aboutOpen) return;

  let rockClicked = false;
  let rockInd = 0;
    for (i=0;i<rocks.length;i++)
    {
      if (rocks[i].over())
      {
        rockClicked = true;
        rockInd = i;
        rocks[i].active = true;
        changeCollectionInfo(
          rocks[i].collection.title,
          rocks[i].collection.author,
          rocks[i].collection.range,
          rocks[i].collection.link,
          );
      }
    }
    if (rockClicked)
    {
      rocks.forEach(rock => (rock.active = false));
      rocks[rockInd].active = true;
    }

    touches[0] = createVector(-width/2, -height/2);
}

function changeCollectionInfo(title,author,range,link)
{
  let nav = document.getElementById("nav");
  let titleP = document.getElementById("rock-title");
  let authorP = document.getElementById("rock-author");
  let rangeP = document.getElementById("rock-range");
  let linkP = document.getElementById("rock-link");
  let visitP = document.getElementById("rock-visit");

  titleP.innerHTML = title;
  authorP.innerHTML = author;
  rangeP.innerHTML = range;
  linkP.href = link;

  if (link == "")
  {
    visitP.innerHTML = ""
  }
  else
  {
    visitP.innerHTML = "visit this collection >";
  }

  nav.scrollTo(0, nav.scrollHeight);
}

function showAbout(show)
{
  let about = document.getElementById("about-block");
  
  if (show)
  {
    about.style.left = "0vw";
    about.style.opacity = "1";
    aboutOpen = true;
  }
  else
  {
    about.style.left = "100vw";
    about.style.opacity = "0";
    aboutOpen = false;
  }
  rocks.forEach(rock => (rock.active = false));
}

function windowResized()
{
  rockColumnSolver(false);
  resizeCanvas(windowWidth, canvHeight);
  document.getElementById('canv').style.height = "" + canvHeight + "px";
  console.log(canvHeight);

}

function rockColumnSolver(imm)
{
  columns = floor(constrain((windowWidth / 100), 3, 8));
  cabSize = spacing*columns;
  cabSizeHalf = cabSize*0.5;
  rows = collections.length / columns;
  canvHeight = constrain((200 + (rows * spacing)), windowHeight*0.8, 3200);

  for (i=0;i<rocks.length;i++)
  {
    let vec = createVector(
      spacing*0.5 + map((i%columns)*spacing, 0, cabSize, -cabSizeHalf, cabSizeHalf), 
      -canvHeight*0.5 + topPadding + spacing*0.5+floor(i/columns)*spacing);
      rocks[i].targetPos = vec;
      if (imm)
      {
        rocks[i].pos = vec;
      }
  }
}

function shuffleRocks()
{
  rocks = shuffle(rocks);
  rockColumnSolver(false);
}

function toggleMode()
{
  let tmtable = document.getElementById("text-mode-table");
  let gmcanvas = document.getElementById("canv");
  let modeToggle = document.getElementById("mode");

  mode = (mode + 1) % modes.length;
  console.log(mode);

  if (mode == 0) // ascii mode
  {
    gmcanvas.style.display = "block";
    tmtable.style.display = "none";
    modeToggle.innerHTML = "mode: " + modes[mode];
    pixelDensity(2);
    p5asciify.renderers().get("brightness").enable();
    // if (edgeDetectionEnabled)
    // {
    //   p5asciify.renderers().get("edge").enable();
    // }
    
  }
  else if (mode == 1) // textmode
  {
    gmcanvas.style.display = "none";
    tmtable.style.display = "block";
    modeToggle.innerHTML = "mode: " + modes[mode];
    for (i=0;i<rocks.length;i++)
    {
      rocks[i].active = false;
    }
    changeCollectionInfo(about.title,about.author,about.range,about.link);
    p5asciify.renderers().disable();
    sort.refresh();
  }

  else if (mode == 2)
  {
    gmcanvas.style.display = "block";
    tmtable.style.display = "none";
    modeToggle.innerHTML = "mode: " + modes[mode];
    p5asciify.renderers().disable();
    pixelDensity(0.25);
  }
}

function disableAsciiOnFramerate()
{
  if (frameRate() < 10)
  {
    frameRateTracker++;
  }
  else
  {
    frameRateTracker = 0;
  }

  // if (frameRateTracker > 20 && edgeDetectionEnabled)
  // {
  //   console.log("edge detection turned off due to low framerates");
  //   edgeDetectionEnabled = false;
  //   p5asciify.renderers().get("edge").update({
  //       enabled: false,
  //   });
  // } 
}

function keyReleased()
{
  keysTyped.push(keyCode)
  if (keysTyped.length > 6)
  {
    keysTyped.splice(0,1);
  }

  if (keysTyped.length === code.length && keysTyped.every(function(value, index) { return value === code[index]}))
  {
    attractmode = !attractmode;
  }
}

function DoAttractMode()
{
  if (attractTimer > 0)
  {
    attractTimer -= deltaTime*0.001;
  }
  else
  {
    shuffleRocks();
    attractTimer = attractInterval;
    for (i=0;i<rocks.length;i++)
    {
      rocks[i].active = false;
      rocks[i].scaleMod = 1;
    }

    let choice = round(random(rocks.length));
    rocks[choice].active = true;
    rocks[choice].scaleMod = 1.1;
    window.open(rocks[choice].collection.link, "newwindow", "top=0, left=0");
  }
}

function steppedRockGenerator()
{
  rockGenerationTimer++;

  if (rockGenerationTimer > rockGenerationInterval)
  {

    rockGenerationTimer = 0;

    if (rocks.length < collections.length)
    {
      let newRock = new Rock(-10000,-10000);
      newRock.collection = collections[rockCounter];
      rocks.push(newRock);
      rocks[rockCounter].create();
      rocks[rockCounter].show();
      rockCounter++;
      rockColumnSolver(true);
    } 
  } 
  
}

