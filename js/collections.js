let collections = [
    {
        title:"A collection of Questions",
        author:"Hue",
        range:"2019 – present",
        link:"https://www.are.na/hue-ho_8g3p7r7y/practicing-compassionate-curiosity",
        method:""
    },
    {
        title:"A collection of security patterns found in envelope liners",
        author:"Brandon Alvarado",
        range:"2018 – present",
        link:"https://www.are.na/brandon-alvarado/envelope-liners",
        method:""
    },
    {
        title:"A collection of Naoto's memories",
        author:"Naoto Hieda",
        range:"2022",
        link:"https://soup.glitches.me/",
        method:""
    },
    {
        title:"A collection of every officially licensed mew and mewtwo plush",
        author:"Kyle Robateau",
        range:"2024 – present",
        link:"collections/robateau-plushes.pdf",
        method:""
    },
    {
        title:"A collection of signs telling us what not to do around the world",
        author:"Laura Sinisterra",
        range:"2022 – present",
        link:"https://www.are.na/laura-sinisterra/observing-signs",
        method:""
    },
    {
        title:"A collection of stills from Ratatouille (2007)",
        author:"eastmountain",
        range:"May 2021",
        link:"./collections/eastmountain.html",
        method:""
    },
    {
        title:"A collection of every data graphic in Star Trek",
        author:"Emily Fuhrman",
        range:"2016-2021",
        link:"https://startrekvis.tumblr.com/",
        method:""
    },
    {
        title:"A collection of floor plans",
        author:"Emily Fuhrman",
        range:"May 2014-2016",
        link:"https://emilyfuhrman.co/interactive/Y2014002/",
        method:""
    },
    {
      title:"A collection of scans from my mom and uncle's stamp collection",
      author:"Vidya Giri",
      range:"1960s-1990s",
      link:"https://stamps.vidyagiri.com/",
      method:""
    },
    {
      title:"A collection of dudes with doves",
      author:"Karla Krey",
      range:"2023–present",
      link:"https://www.are.na/karla-krey/dudes-with-doves",
      method:""
    },
    {
      title:"A collection of intentional and stream of consciousness lists for various aspects of my life",
      author:"Amaryllis Ara",
      range:"1960s-1990s",
      link:"",
      method:""
    },
    {
      title:"A collection of sacred invocations and memefied musings on the internet space.",
      author:"Prayer on the Internet",
      range:"2023-present",
      link:"https://www.are.na/marshall-wang/prayer-on-the-internet",
      method:""
    },
    {
      title:"A collection of urinals I've used.",
      author:"Ashton Reeder",
      range:"2023-present",
      link:"",
      method:""
    },
    {
      title:"A collection of pictures of computer screens",
      author:"Rachael Previti",
      range:"2024-present",
      link:"https://drive.google.com/drive/folders/1zfa1hbGTCpfltIM-NQ_qmXV-SM0eU1gm?usp=sharing",
      method:""
    },
    {
      title:"A collection of typography",
      author:"@type.gram",
      range:"2019-present",
      link:"https://www.instagram.com/type.gram/",
      method:""
    },
    {
      title:"A collection of lost Chinese feminist websites from before social media took over - kind of like digital ghosts of what feminist spaces on the Chinese internet used to look like in the early 2000s",
      author:"ephemeral:data\ (Crassula Shang, i-want-cookies, and YoEve)",
      range:"2023-present",
      link:"https://chinese-cyberfeminism-archive.com/",
      method:""
    },
    {
      title:"A collection of visual fragments - diagrams, images, and graphic elements - gathered from materials in the Cybernetics Library",
      author:"cha.ski",
      range:"2024-present",
      link:"https://cyberneticsimagelibrary.netlify.app/",
      method:""
    },
    {
      title:"A collection of songs that have captured the vibes of specific days in my life",
      author:"mk zariel",
      range:"2025 onward",
      link:"https://open.spotify.com/playlist/5EVVes9QqhUriZ8NiCM6hb?si=b8927efd96f844de",
      method:""
    },
    {
      title:"A collection of people selling old tvs",
      author:"Kiko_ Tv for sale",
      range:"2021-present",
      link:"https://www.are.na/gio-kikoria-5ofhwxzjrc0/ree40esscps",
      method:""
    },
    {
      title:"A collection of good morning images and quotes from my family WhatsApp groups",
      author:"Marina Cardoso",
      range:"2020-present",
      link:"",
      method:""
    },
    {
      title:"A collection of personal episode rankings and data points for Star Trek: The Next Generation",
      author:"Lucia Gomez",
      range:"2024-present",
      link:"https://deciduous-ring-e37.notion.site/10b00f12549080e08d90c0ddc00bdeac?v=10b00f12549080788a10000c93ce9250",
      method:""
    },
    {
      title:"A collection of notes app drawings that i drew with my finger while on long phone conversations—primarily with my friend malia.",
      author:"christine (cynical pinay)",
      range:"2020-present",
      link:"https://drive.google.com/drive/folders/1-Yz2j05CI_Co0ysXwYHIlJe5LsDtE2f9?usp=sharing",
      method:""
    },
    {
      title:"A collection of google maps user submitted photos of grocery stores",
      author:"Vanessa Anderson",
      range:"2024-present",
      link:"https://grocerygoblin.substack.com/p/25-grocery-stores",
      method:""
    },
    {
      title:"A collection of 11:11",
      author:"Amelia K.",
      range:"2022-present",
      link:"",
      method:""
    },
    {
      title:"A collection of google maps user submitted photos of grocery stores",
      author:"Vanessa Anderson",
      range:"2024-present",
      link:"https://grocerygoblin.substack.com/p/25-grocery-stores",
      method:""
    },
    {
      title:"A collection of internet comments",
      author:"Spencer Chang",
      range:"2024-present",
      link:"https://acknowledge.our-inter.net/",
      method:""
    },
    {
      title:"A collection of typefaces and fonts I've used for many projects over the years. Some are good, some are bad, and some are just ok.",
      author:"Jonathan Sangster",
      range:"2021-2025",
      link:"https://drive.google.com/drive/folders/1Oqg2mfic30gx6S7lfeWfA-qosVWYhhGB?usp=sharing",
      method:""
    }

]



function populateTable()
{
    let preSorted = collections;

    let tableBody = document.getElementById("table-body");
  
    for (i=0;i<collections.length;i++)
    {
        let row = document.createElement("tr");
        let a = document.createElement("td");
        let b = document.createElement("td");
        let c = document.createElement("td");
        let d = document.createElement("td");
        let e = document.createElement("td");

        a.innerHTML = preSorted[i].title;
        b.innerHTML = preSorted[i].author;
        c.innerHTML = preSorted[i].range;
        d.innerHTML = "<a target='_blank' href='" + preSorted[i].link + "'>visit this collection></a>";
        e.innerHTML = preSorted[i].method;
        
        row.appendChild(b);
        row.appendChild(a);
        row.appendChild(c);
        row.appendChild(d);
        row.appendChild(e);
        tableBody.appendChild(row);
    }       
}
