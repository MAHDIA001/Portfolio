const nav = document.querySelector(".nav-items");
const humburger = document.querySelector(".humburger");
const modal = document.querySelector('#pop');
humburger.addEventListener("click", () => {
  humburger.classList.toggle("active");
  nav.classList.toggle("active");
});
document.querySelectorAll(".nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    humburger.classList.remove("active");
    nav.classList.remove("active");
  })
);
  
let proj = [
  {
    name: "Tonic",
    desc: ["Canopy", "images/Circle.svg", "Backend dev", "2015"],
    image: ["images/cards.svg",'images/Snapshoot.svg'],
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    technologies: ["html", "css", "javascript", "ruby", "bootstrap", "github"],
    live: "https://mahdia001.github.io/Portfolio/",
    source: "#",
  },
  {
    name: "Multi-Post Stories",
    desc: ["Facebook", "images/Circle.svg", "Fullstack dev", "2015"],
    image: ["images/multi.svg","images/multo.svg"],
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    technologies: ["html", "css", "javascript", "ruby", "bootstrap", "github"],
    live: "https://mahdia001.github.io/Portfolio/",
    source: "#",
  },
  {
    name: "Facebook 360",
    desc: ["Facebook", "images/Circle.svg", "Fullstack dev", "2015"],
    image: ["images/cards.svg","images/tonic.svg"],
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    technologies: ["html", "css", "javascript", "ruby", "bootstrap", "github"],
    live: "#",
    source: "#",
  },
  {
    name: "Uber Navigation",
    desc: ["uber", "images/Circle.svg", "lead developer", "2018"],
    image: ["images/Snapshoot.svg","images/multi.svg"],
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    technologies: ["html", "css", "javascript", "ruby", "bootstrap", "github"],
    live: "https://mahdia001.github.io/Portfolio/",
    source: "#",
  },
];
 const projectContainer = document.querySelector(".works");
const createCards = (nameValue,descValue,imageValue,pValue,techValue,liveValue,sourceValue) => {
 const section = document.createElement("div");
section.classList.add("section-4");
projectContainer.appendChild(section);
const cards = document.createElement("div");
cards.classList.add("cards");
section.appendChild(cards)
const picture = document.createElement('picture');
const source1 = document.createElement('source');
const source2 = document.createElement("source");
cards.appendChild(picture);
picture.appendChild(source1);
picture.appendChild(source2);
const img = document.createElement("img");
img.src = imageValue[0];
img.classList.add("tonic");
picture.appendChild(img);
source1.media='(max-width:768px)';
source1.srcset=imageValue[1];
source2.media = "(max-width:768px)";
source2.srcset = imageValue[1];
const projects = document.createElement("div");
projects.classList.add("projects");
cards.appendChild(projects);
const projectSection = document.createElement("div");
projectSection.classList.add('project-section');
projects.appendChild(projectSection);
const paragraph = document.createElement('p');
projects.appendChild(paragraph);
paragraph.innerHTML=pValue;
paragraph.classList.add('details');
const ul = document.createElement('ul');
ul.classList.add('lang-tags');
projects.appendChild(ul);
const li = document.createElement('li');
li.innerHTML=techValue[0];
ul.appendChild(li);
const li2 = document.createElement('li');
li2.innerHTML=techValue[1];
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerHTML = techValue[2];
ul.appendChild(li3);
const li4 = document.createElement("li");
li4.innerHTML = techValue[3];
ul.appendChild(li4);
const projectTitle = document.createElement('h2');
projectTitle.classList.add('project-title');
projectTitle.innerHTML=nameValue;
projectSection.appendChild(projectTitle);
const extraInfo = document.createElement('div');
extraInfo.classList.add('extra-info');
projectSection.appendChild(extraInfo);
const projectname = document.createElement('p');
projectname.innerHTML=descValue[0];
extraInfo.appendChild(projectname);
const image = document.createElement("img");
extraInfo.appendChild(image);
image.src=descValue[1];
const p1 = document.createElement('p');
p1.classList.add('job-title');
p1.innerHTML=descValue[2];
extraInfo.appendChild(p1);
const image1 = document.createElement('img');
extraInfo.appendChild(image1);
image1.src = descValue[1];
const jobTitle = document.createElement('p');
jobTitle.classList.add('job-title');
jobTitle.innerHTML=descValue[3];
extraInfo.appendChild(jobTitle);
const button = document.createElement('button');
button.type='submit';
button.classList.add('link');
button.innerHTML='see project';
projects.appendChild(button);
let counter =proj.length;
if(counter%2===0){
  cards.appendChild(picture);
  cards.appendChild(projects);
}else{
  cards.appendChild(projects);
  cards.appendChild(picture);
}
}
  proj.forEach((p) => {
  createCards(p.name,p.desc,p.image,p.paragraph,p.technologies,p.live,p.source); 
});

