let about = {
  title:"A collection of other people's digital collections",
  author:"",
  range:"",
  link:""
}

let aboutOpen = false;

let collections = [
    {
        title:"A collection of Questions",
        author:"Hue",
        range:"2019 – present",
        link:"https://www.are.na/hue-ho_8g3p7r7y/practicing-compassionate-curiosity"
    },
    {
        title:"A collection of security patterns found in envelope liners",
        author:"Brandon Alvarado",
        range:"2018 – present",
        link:"https://www.are.na/brandon-alvarado/envelope-liners"
    },
    {
        title:"A collection of Naoto's memories",
        author:"Naoto Hieda",
        range:"2022",
        link:"https://soup.glitches.me/"
    },
    {
        title:"A collection of every officially licensed mew and mewtwo plush",
        author:"Kyle Robateau",
        range:"2024 – present",
        link:"collections/robateau-plushes.pdf"
    },
    {
        title:"A collection of signs telling us what not to do around the world",
        author:"Laura Sinisterra",
        range:"2022 – present",
        link:"https://www.are.na/laura-sinisterra/observing-signs"
    },
    {
        title:"A collection of stills from Ratatouille (2007)",
        author:"eastmountain",
        range:"May 2021",
        link:"./collections/eastmountain.html"
    },
    {
        title:"A collection of every data graphic in Star Trek",
        author:"Emily Fuhrman",
        range:"2016-2021",
        link:"https://startrekvis.tumblr.com/"
    },
    {
        title:"A collection of floor plans",
        author:"Emily Fuhrman",
        range:"May 2014-2016",
        link:"https://emilyfuhrman.co/interactive/Y2014002/"
    },
    {
      title:"A collection of scans from my mom and uncle's stamp collection",
      author:"Vidya Giri",
      range:"1960s-1990s",
      link:"https://stamps.vidyagiri.com/"
    },
    {
      title:"A collection of dudes with doves",
      author:"Karla Krey",
      range:"2023–present",
      link:"https://www.are.na/karla-krey/dudes-with-doves"
    },
    {
      title:"A collection of intentional and stream of consciousness lists for various aspects of my life",
      author:"Amaryllis Ara",
      range:"1960s-1990s",
      link:""
    },
    {
      title:"A collection of sacred invocations and memefied musings on the internet space.",
      author:"Prayer on the Internet",
      range:"2023-present",
      link:"https://www.are.na/marshall-wang/prayer-on-the-internet"
    },
    {
      title:"A collection of urinals I've used.",
      author:"Ashton Reeder",
      range:"2023-present",
      link:""
    },
    {
      title:"A collection of pictures of computer screens",
      author:"Rachael Previti",
      range:"2024-present",
      link:"https://drive.google.com/drive/folders/1zfa1hbGTCpfltIM-NQ_qmXV-SM0eU1gm?usp=sharing"
    },
    {
      title:"typography",
      author:"@type.gram",
      range:"2019-present",
      link:"https://www.instagram.com/type.gram/"
    },
    {
      title:"A collection of lost Chinese feminist websites from before social media took over - kind of like digital ghosts of what feminist spaces on the Chinese internet used to look like in the early 2000s",
      author:"ephemeral:data\ (Crassula Shang, i-want-cookies, and YoEve)",
      range:"2023-present",
      link:"https://chinese-cyberfeminism-archive.com/"
    },
    {
      title:"A collection of visual fragments - diagrams, images, and graphic elements - gathered from materials in the Cybernetics Library",
      author:"cha.ski",
      range:"2024-present",
      link:"https://cyberneticsimagelibrary.netlify.app/"
    },
    {
      title:"A collection of songs that have captured the vibes of specific days in my life",
      author:"mk zariel",
      range:"2025 onward",
      link:"https://open.spotify.com/playlist/5EVVes9QqhUriZ8NiCM6hb?si=b8927efd96f844de"
    },
    {
      title:"A collection of people selling old tvs",
      author:"Kiko_ Tv for sale",
      range:"2021-present",
      link:"https://www.are.na/gio-kikoria-5ofhwxzjrc0/ree40esscps"
    },
    {
      title:"A collection of good morning images and quotes from my family WhatsApp groups",
      author:"Marina Cardoso",
      range:"2020-present",
      link:""
    },
    {
      title:"A collection of personal episode rankings and data points for Star Trek: The Next Generation",
      author:"Lucia Gomez",
      range:"2024-present",
      link:"https://deciduous-ring-e37.notion.site/10b00f12549080e08d90c0ddc00bdeac?v=10b00f12549080788a10000c93ce9250"
    },
    {
      title:"A collection of notes app drawings that i drew with my finger while on long phone conversations—primarily with my friend malia.",
      author:"christine (cynical pinay)",
      range:"2020-present",
      link:"https://drive.google.com/drive/folders/1-Yz2j05CI_Co0ysXwYHIlJe5LsDtE2f9?usp=sharing"
    },
    {
      title:"A collection of google maps user submitted photos of grocery stores",
      author:"Vanessa Anderson",
      range:"2024-present",
      link:"https://grocerygoblin.substack.com/p/25-grocery-stores"
    },
    {
      title:"A collection of 11:11",
      author:"Amelia K.",
      range:"2022-present",
      link:""
    },
    {
      title:"A collection of google maps user submitted photos of grocery stores",
      author:"Vanessa Anderson",
      range:"2024-present",
      link:"https://grocerygoblin.substack.com/p/25-grocery-stores"
    },
    {
      title:"A collection of internet comments",
      author:"Spencer Chang",
      range:"2024-present",
      link:"https://acknowledge.our-inter.net/"
    },
    {
      title:"A collection of typefaces and fonts I've used for many projects over the years. Some are good, some are bad, and some are just ok.",
      author:"Jonathan Sangster",
      range:"2021-2025",
      link:"https://drive.google.com/drive/folders/1Oqg2mfic30gx6S7lfeWfA-qosVWYhhGB?usp=sharing"
    }

]

let rocks = [];
let click = false;

let columns;
let spacing;
let topPadding;
let cabSize;
let cabSizeHalf;

let frameRateTracker = 0;
let edgeDetectionEnabled = true;

// let finalOptions = {
//   enabled: true,
//   characters: "o*~ .><'-+^~ ] ><o/\|. ",
//   characterColor: "#000",
//   characterColorMode: 'sampled',
//   backgroundColor: "#FFF",
//   backgroundColorMode: 'fixed',
//   invertMode: false,
//   fontSize: 16,
//   rotationAngle: 0
// };

function setupAsciify(){
  p5asciify.fontSize(6);
  
  p5asciify.renderers().get("brightness").update({
    enabled: true,
    characters: "o*~ .><'-+^~ ] ><o/\|. ",
    characterColor: "#000",
    characterColorMode: 'sampled',
    backgroundColor: "#FFF",
    backgroundColorMode: 'fixed',
    invertMode: false,
    fontSize: 16,
    rotationAngle: 0
  });
  
  p5asciify.renderers().get("edge").update({
    enabled: true,
    characters: "-/|\\-/|\\",
    characterColor: "#666",
    characterColorMode: "fixed",
    backgroundColor: "#FFF",
    backgroundColorMode: "fixed",
    invertMode: false,
    sobelThreshold: 0.01,
    sampleThreshold: 16,
  });
}

function setup() {

  // randomSeed(100);

  let c = createCanvas(windowWidth, windowHeight, WEBGL);
  c.parent("#canv");

  columns = floor(constrain((windowWidth / 200), 2, 6));
  spacing = 100;
  topPadding = 100;
  cabSize = spacing*columns;
  cabSizeHalf = cabSize*0.5;
  click = false;

  collections = shuffle(collections);
  
  for (i=0; i<collections.length; i++)
    {
        let newRock = new Rock(0,0);
    
        newRock.collection = collections[i];
        rocks.push(newRock);
    }
  for (i=0;i<rocks.length;i++)
    {
        rocks[i].create();
        rocks[i].show();
    }
  rockColumnSolver();
  
}

function draw() {
  background(240);
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

    // ascii();

    if (frameRate() < 10)
    {
      frameRateTracker++;
    }
    else
    {
      frameRateTracker = 0;
      // console.log("edge detection turned on");
      // p5asciify.renderers().get("edge").update({
      //   enabled: true,
      // });
    }

    if (frameRateTracker > 5 && edgeDetectionEnabled)
    {
      console.log("edge detection turned off due to low framerates");
      edgeDetectionEnabled = false;
      // p5asciify.renderers().enable(true);
      p5asciify.renderers().get("edge").update({
        enabled: false,
      });
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
  this.pos = createVector(0,0);
  this.targetPos = createVector(x,y)
  this.r = 50;
  this.collection = {title:"",author:"",range:"",link:""};
  this.active = false;
  this.over = function()
  {
    if (!touches[0])
    {
      if  (mouseX-width/2 > this.pos.x-this.r && 
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

    stroke(255);
    strokeWeight(1);
    if (this.active)
    {
      // strokeWeight(10);
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
  resizeCanvas(windowWidth, windowHeight);

  rockColumnSolver();
  
}

function rockColumnSolver()
{
  columns = floor(constrain((windowWidth / 200), 3, 6));
  spacing = 100;
  topPadding = 100;
  cabSize = spacing*columns;
  cabSizeHalf = cabSize*0.5;

  for (i=0;i<rocks.length;i++)
  {
    rocks[i].targetPos = createVector(spacing*0.5 + map((i%columns)*spacing, 0, cabSize, -cabSizeHalf, cabSizeHalf), 
    -windowHeight*0.5 + topPadding +  spacing*0.5+floor(i/columns)*spacing);
  }
}

function shuffleRocks()
{
  rocks = shuffle(rocks);
  for (i=0;i<rocks.length;i++)
  {
    rocks[i].targetPos = createVector(spacing*0.5 + map((i%columns)*spacing, 0, cabSize, -cabSizeHalf, cabSizeHalf), 
    -windowHeight*0.5 + topPadding +  spacing*0.5+floor(i/columns)*spacing);
  }
}

function ascii()
{
  push();
  translate(-width/2, -height/2);
  for (i=0;i<width;i+=10)
  {
    for (j=0;j<height;j+=10)
    {
      stroke(0);
      noFill();
      rect(i,j,10,10);
    }
  }
  pop();
}