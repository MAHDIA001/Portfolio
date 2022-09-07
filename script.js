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
  
let projects = [
  {
    name: "Tonic",
    desc: ["Canopy", "images/Circle.svg", "Backend dev", "2015"],
    image: "images/cards.svg",
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    technologies: ["html", "css", "javascript", "ruby", "bootstrap", "github"],
    live: "https://mahdia001.github.io/Portfolio/",
    source: "#",
  },
  {
    name: "Multi-Post Stories",
    desc: ["Facebook", "images/Circle.svg", "Fullstack dev", "2015"],
    image: "images/multi.svg",
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    technologies: ["html", "css", "javascript", "ruby", "bootstrap", "github"],
    live: "https://mahdia001.github.io/Portfolio/",
    source: "#",
  },
  {
    name: "Facebook 360",
    desc: ["Facebook", "images/Circle.svg", "Fullstack dev", "2015"],
    image: "images/cards.svg",
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    technologies: ["html", "css", "javascript", "ruby", "bootstrap", "github"],
    live: "#",
    source: "#",
  },
  {
    name: "Uber Navigation",
    desc: ["uber", "images/Circle.svg", "lead developer", "2018"],
    image: "images/Snapshoot.svg",
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    technologies: ["html", "css", "javascript", "ruby", "bootstrap", "github"],
    live: "https://mahdia001.github.io/Portfolio/",
    source: "#",
  },
];
const createCards = (nameValue,descValue,imageValue,pValue,techValue,liveValue,sourceValue) => {
 const cards = document.createElement('div');
 cards.classList.add('cards');
 const image = document.createElement('img');
 image.setAttribute('src',imageValue);
 const projects = document.createElement('div');
 projects.classList.add('projects');
 const projectSection = document.createElement("div");
 projects.classList.add("project-section");
 const projectTitle = document.createElement('h2');
 projectTitle.classList.add('project-title');
 projectTitle.innerHTML=nameValue;
 const extraInfo =document.createElement('div');
 extraInfo.classList.add('extra-info');
 const p = document.createElement('p');
 p.classList.add('proj-name');
 p.innerHTML = descValue[0];
 const images = document.createElement('img');
 image.setAttribute('src',descValue[1]);
 const p2 = document.createElement("p");
 p2.classList.add('job-title');
 p2.innerHTML = descValue[2];
const p3 = document.createElement("p");
p3.classList.add("job-title");
p3.innerHTML = descValue[3];
const details = document.createElement('p');
details.classList.add('details');
details.innerHTML = pValue;
const ul = document.createElement('ul');
ul.classList.add('lang-tags');
const li = document.createElement('li');
const works = document.querySelector('.works');
works.appendChild(cards);
cards.appendChild(image);
cards.appendChild(projects);
cards.appendChild(details);
cards.appendChild(ul);
projects.appendChild(projectSection);
projectSection.appendChild(projectTitle);
projectSection.appendChild(extraInfo);
extraInfo.appendChild(p);
extraInfo.appendChild(images);
extraInfo.appendChild(p2);
extraInfo.appendChild(images);
extraInfo.appendChild(p3);
ul.appendChild(li);
ul.appendChild(li);
ul.appendChild(li);
li.innerHTML = techValue[1];
li.innerHTML = techValue[2];
}


  projects.forEach((p) => {
  createCards(p.name,p.desc,p.image,p.paragraphp,p.technologies,p.live,p.source);
  });

