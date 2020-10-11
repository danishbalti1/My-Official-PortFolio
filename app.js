class ProjectData {
  projects = [];
  constructor() {
    console.log("created a new projectData");
  }
  add(link, img, name) {
    this.projects.push({ link, img, name });
  }
}
const data = new ProjectData();

data.add(
  "https://danishbalti1.github.io/Chef/",
  "Project_Images/dani.png",
  "Dani Chef"
);

data.add(
  "https://danishbalti1.github.io/DeFlex/",
  "Project_Images/netflix.png",
  "Dani Chef"
);

data.add(
  "https://danishbalti1.github.io/Our-Portfolio/",
  "Project_Images/our-portfolio.png",
  "My Team Portfolio"
);

data.add(
  "https://flamboyant-panini-649821.netlify.app/",
  "Project_Images/news.png",
  "News Grid Article"
);

data.add(
  "https://danishbalti1.github.io/Responsive-Website/",
  "Project_Images/feel-the-music.png",
  "MircorSoft Clone"
);
data.add(
  "https://danishbalti1.github.io/Responsive-Website/",
  "Project_Images/microsoft.png",
  "MircorSoft Clone"
);

data.add(
  "https://danishbalti1.github.io/EdgeLedger-/",
  "Project_Images/edgeledger.png",
  "EdgeLedger"
);

data.add(
  "https://danishbalti1.github.io/Hotel/",
  "Project_Images/hotel.png",
  "HTB Hotel"
);
data.add(
  "https://danishbalti1.github.io/GymSo/",
  "Project_Images/gymso.png",
  "Gymso Gym"
);
data.add(
  "https://danishbalti1.github.io/Portfolio/",
  "Project_Images/portfolio.png",
  "Portfolio"
);
data.add(
  "https://danishbalti1.github.io/HeadPhone-Blog/",
  "Project_Images/blog.png",
  "HeadPhone Blog"
);
data.add(
  "https://danishbalti1.github.io/Khan-Academy/",
  "Project_Images/khan.png",
  "Khan Academy"
);
data.add(
  "https://danishbalti1.github.io/Testing/",
  "Project_Images/namzo.png",
  "Namzo"
);
data.add(
  "https://danishbalti1.github.io/CSS-Grid-Test/",
  "Project_Images/grid.png",
  "NianZo"
);

data.add(
  "https://danishbalti1.github.io/Dice-Game/",
  "Project_Images/dice-game.png",
  "Dice Game"
);
data.add(
  "https://danishbalti1.github.io/UniPorject/",
  "Project_Images/uni-project.png",
  "First University Project"
);
data.add(
  "https://danishbalti1.github.io/Template-/",
  "Project_Images/template-clone.png",
  "SeyanZo"
);

const projects = document.querySelector(".project-container");

for (let i = 0; i < data.projects.length; i++) {
  const html = `<div class="project">
    <a href=${data.projects[i].link} target="_blank">
      <div class="overflow">
        <img src=${data.projects[i].img}>
      </div>
      <div class="details">
        <h2>${data.projects[i].name}</h2>
        <p class="para">Build with:<span>HTML5, CSS3 & JavaScript<span</p>            
  </div>
  </a>
  </div>`;
  projects.insertAdjacentHTML("beforeend", html);
}
