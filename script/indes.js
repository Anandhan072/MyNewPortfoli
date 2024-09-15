"use strict";

/// My log animi function
const atagEl = document.querySelector("#atag");
const skills_iconEl = document.querySelector(".skills_icon");
const portfoliosEl = document.querySelector(".portfolios_bio");
const about_experience_2021El = document.querySelectorAll(".about_experience_2021");
const ex2021 = document.querySelectorAll(`.experience_hr_2021`);
let skillsEl = "";

let percentage = 0;
let offsetValue = 0;

const dasharraySett = function (val) {
  const value = offsetValue - (offsetValue / 100) * val;
  atagEl.style.strokeDashoffset = value;
};

const intersection = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      if (entry.isIntersecting) {
        percentage = 0;
        offsetValue = Number.parseFloat(window.getComputedStyle(entry.target).strokeDasharray);

        const clearInt = setInterval(() => {
          if (percentage >= 100) {
            clearInterval(clearInt);
          } else {
            percentage++;
            dasharraySett(percentage);
          }
        }, 40);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0,
  }
);

intersection.observe(atagEl);

/// My log animi function

///skills add html tag

/*
                        


                    */

const skillsIcon = [`html`, `css`, `js`, `nodejs`, `mongodb`, `git`, `sass`, `ubuntu`];

const addSkillEl = function () {
  let htmlEl = ``;
  skillsIcon.forEach((icons) => {
    htmlEl += `<div class="skills skills-${icons}">
                <span class="skill-icon">
                    <svg width="80" height="80" fill="none">
                        <use href="./img/skils_icons.svg#icon-${icons}"></use> 

                    </svg>
                  </span><br>
                  <span class="skill-name">${icons}</span>
              </div> `;
  });

  skills_iconEl.innerHTML = htmlEl;
  skillsEl = document.querySelectorAll(".skills");
};

addSkillEl();

let values = 1;
skillsEl.forEach((acc) => {
  acc.addEventListener("click", function (a) {
    a.preventDefault();
    if (values === 1) {
      values = a.target.closest(`.skills`);
      values.classList.add(`skills_active`);
    } else {
      values.classList.remove(`skills_active`);
      values = a.target.closest(`.skills`);
      values.classList.add(`skills_active`);
    }
  });
});

///skills add html tag

///portfolio add html

const portfolio_LinkEl = [
  `https://www.trushine-uae.com/`,
  `https://anandhan.netlify.app/`,
  `./My Project/Zoho.com/zoho.html`,
  `./My Project/basic_banks_site/index.html`,
  `./My Project/leaflate map/index.html`,
  `./My Project/Guess_Number/guess.html"`,
];

const portfolio_content = [
  `is the provider to consider if you are looking for a cleaning service...`,
  `Do you want a detailed recipe for cooking? Visit this link for more...`,
  `This is just for Zoho's old site without any functionality at the time I started.`,
  `A banking site with minimal functionality to keep the site as a simple banking site.`,
  "first third-party library integration with the Leaflet library",
  `A simple game to find a number, just for creating a learning experience.`,
];

const portfolioHeadings = [`TruShine`, `Forkify`, `Zoho`, `Bank`, `Leaflate`, `Guess Number`];

const portfolio_img = [
  `../img/portfolio_img/trusshine.svg`,
  `../img/portfolio_img/Forkify.svg`,
  `../img/portfolio_img/zoho.svg`,
  `../img/portfolio_img/bank.svg`,
  `../img/portfolio_img/map.svg`,
  `../img/portfolio_img/guess.svg`,
];

/* <div class="portfolios portfolios_trushine">
    <div class="portfolios_hover hover_trushine">
        <div class="portfolios_links">
            <h2>Atala</h2>
            <span>is the provider to consider if you are looking for a cleaning service....</span><br>
            <a href="./My Project/Zoho.com/zoho.html">See more &#8594;</a>
        </div>
     </div>
                           
</div> */

const addPortFolio = function () {
  let htmlEl = ``;

  portfolioHeadings.forEach((acc, i) => {
    const val = acc.toLocaleLowerCase().split(" ").join("");
    console.log(val);
    htmlEl += `<div class="portfolios portfolios_${val}">
        <div class="portfolios_hover hover_${val}">
            <div class="portfolios_links">
                <h2>${acc}</h2>
                <span>${portfolio_content[i]}</span><br>
                <a href="${portfolio_LinkEl[i]}">See more &#8594;</a>
            </div>
         </div>

    </div>`;
  });

  portfoliosEl.innerHTML = htmlEl;

  const portfolios_imgadd = document.querySelectorAll(`.portfolios`);

  portfolios_imgadd.forEach((acc, i) => {
    console.log(window.getComputedStyle(acc).backgroundImage);
    acc.style.backgroundImage = `url(${portfolio_img[i]})`;
  });
};

// experience find hight

about_experience_2021El.forEach((acc, i) => {
  console.log(acc);
  let find2021 = Number.parseFloat(window.getComputedStyle(acc).height);
  ex2021[i].style.height = `${find2021 - 30}px`;
});
// const find2021 = Number.parseFloat(window.getComputedStyle(about_experience_2021El).height);

// console.log(find2021);

// const checcc = document.querySelector(`.experience_hr_2021`);
// console.log(checcc);

// checcc.style.height = `${find2021 - 10}px`;
