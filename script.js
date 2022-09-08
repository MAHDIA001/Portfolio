const nav = document.querySelector(".nav-items");
const humburger = document.querySelector(".humburger");
const modal = document.querySelector("#pop");
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
    image: ["images/Portfolio.png", "images/Snapshoot.svg"],
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    technologies: ["html", "css", "javascript", "ruby", "bootstrap", "github"],
    live: "https://mahdia001.github.io/Portfolio/",
    source: "#",
  },
  {
    name: "Multi-Post Stories",
    desc: ["Facebook", "images/Circle.svg", "Fullstack dev", "2015"],
    image: ["images/multi.svg", "images/multo.svg"],
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    technologies: ["html", "css", "javascript", "ruby", "bootstrap", "github"],
    live: "https://mahdia001.github.io/Portfolio/",
    source: "#",
  },
  {
    name: "Facebook 360",
    desc: ["Facebook", "images/Circle.svg", "Fullstack dev", "2015"],
    image: ["images/Portfolio.png", "images/tonic.svg"],
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    technologies: ["html", "css", "javascript", "ruby", "bootstrap", "github"],
    live: "#",
    source: "#",
  },
  {
    name: "Uber Navigation",
    desc: ["uber", "images/Circle.svg", "lead developer", "2018"],
    image: ["images/Snapshoot.svg", "images/multi.svg"],
    paragraph:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    technologies: ["html", "css", "javascript", "ruby", "bootstrap", "github"],
    live: "https://mahdia001.github.io/Portfolio/",
    source: "#",
  },
];
const projectContainer = document.querySelector(".works");
const createCards = (
  nameValue,
  descValue,
  imageValue,
  pValue,
  techValue,
  liveValue,
  sourceValue,
  count
) => {
  if (count === 0 || count % 2 === 0) {
    projectContainer.innerHTML += `
      <div class="section-4">
        <div class="cards">
            <picture>
                <source media="(max-width:768px)" srcset="${imageValue[0]}">
                <source media="(max-width:768px)" srcset="${imageValue[1]}">
                <img src="${imageValue[0]}" class="tonic">
            </picture>
            <div class="projects">
                <div class="project-section">
                    <h2 class="project-title">${nameValue}</h2>
                    <div class="extra-info">
                        <p>${descValue[0]}</p>
                        <img src="${descValue[1]}">
                        <p class="job-title">${descValue[2]}</p>
                        <img src="${descValue[1]}">
                        <p class="job-title">${descValue[3]}</p>
                    </div>
                </div>
                <p class="details">${pValue}</p>
                <ul class="lang-tags">
                    <li>${techValue[0]}</li>
                    <li>${techValue[1]}</li>
                    <li>${techValue[2]}</li>
                    <li>${techValue[3]}</li>
                </ul>
                <button ${count} type="button" class="link project-btn">see project</button>
            </div>
        </div>
      </div>
  `;
  } else {
    projectContainer.innerHTML += `
      <div class="section-4">
        <div class="cards">
            <div class="projects">
                <div class="project-section">
                    <h2 class="project-title">${nameValue}</h2>
                    <div class="extra-info">
                        <p>${descValue[0]}</p>
                        <img src="${descValue[1]}">
                        <p class="job-title">${descValue[2]}</p>
                        <img src="${descValue[1]}">
                        <p class="job-title">${descValue[3]}</p>
                    </div>
                </div>
                <p class="details">${pValue}</p>
                <ul class="lang-tags">
                    <li>${techValue[0]}</li>
                    <li>${techValue[1]}</li>
                    <li>${techValue[2]}</li>
                    <li>${techValue[3]}</li>
                </ul>
                <button id="${count}" type="button" class="link project-btn">see project</button>
            </div>
            <picture>
                <source media="(max-width:768px)" srcset="${imageValue[0]}">
                <source media="(max-width:768px)" srcset="${imageValue[1]}">
                <img src="${imageValue[0]}" class="tonic">
            </picture>
        </div>
      </div>
  `;
  }
};

proj.forEach((p, index) => {
  createCards(
    p.name,
    p.desc,
    p.image,
    p.paragraph,
    p.technologies,
    p.live,
    p.source,
    index
  );
});

const projectBtn = document.querySelectorAll(".project-btn");

for (let count = 0; count < projectBtn.length; count++) {
  projectBtn[count].addEventListener("click", () => {
       modal.style.display = "flex";
       modal.style.visibility = "visible";
    modal.innerHTML=
      `<div class="popup-container">
                    <h2 class="project-title">${proj[count].name}</h2>
            
                    <div class="extra-info">
                        <p>${proj[count].desc[0]}</p>
                        <img src="${proj[count].desc[1]}">
                        <p class="job-title">${proj[count].desc[2]}</p>
                        <img src="${proj[count].desc[1]}">
                        <p class="job-title">${proj[count].desc[3]}</p>
                </div>
                <div class="right-block">
                                <div class="close1"><img src="${proj[count].image[0]}"></div>
                <p class="details">${proj[count].paragraph}</p>
                <ul class="lang-tags">
                    <li>${proj[count].technologies[0]}</li>
                    <li>${proj[count].technologies[1]}</li>
                    <li>${proj[count].technologies[2]}</li>
                    <li>${proj[count].technologies[3]}</li>
                </ul>
                <hr>
                <button  type="button" class="seelive">${proj[count].live}<img src="images/GitHub-Icon.png"></button>
                <button  type="button" class="seelive">${proj[count].source}<img src="images/Icon.png"> </button>
               </div>
                </div>
        </div>
      </div>
  `;

  });
    projectBtn[count].addEventListener("click", () =>{
      modal.style.display='none';
    });
}
