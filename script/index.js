import logo from "./skills_icons.svg";
import trusshine from "../img/portfolio_img/trusshine.svg";
import Forkify from "../img/portfolio_img/Forkify.svg";
import zoho from "../img/portfolio_img/zoho.svg";
import bank from "../img/portfolio_img/bank.svg";
import map from "../img/portfolio_img/map.svg";
import guess from "../img/portfolio_img/guess.svg";
import travel from "../img/portfolio_img/travel.svg";
import split from "../img/portfolio_img/split.svg";
import school from "../img/portfolio_img/school.svg";

/// My log animi function

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

const atagEl = document.querySelector(".atag");
const skills_iconEl = document.querySelector(".skills_icon");
const portfoliosEl = document.querySelector(".portfolios_bio");
const about_experience_2021El = document.querySelectorAll(".about_experience_2021");
const ex2021 = document.querySelectorAll(`.experience_hr_2021`);

const Skill_dashArray = document.querySelectorAll(".skill-strokeDash");
const skills_hover_array = document.querySelectorAll(".skills-hover");

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
                        
<use href="./img/skils_icons.svg#icon-${icons}"></use> 

                    */

const skillsIcon = [
  { language: "html", skill: "Intermediate", percentage: "60%" },
  { language: "css", skill: "Intermediate", percentage: "60%" },
  { language: "js", skill: "Intermediate", percentage: "60%" },
  { language: "nodejs", skill: "Beginner", percentage: "60%" },
  { language: "mongodb", skill: "Beginner", percentage: "60%" },
  { language: "git", skill: "Intermediate", percentage: "60%" },
  { language: "sass", skill: "Intermediate", percentage: "60%" },
  { language: "ubuntu", skill: "good", percentage: "70%" },
  { language: "reactjs", skill: "Beginner", percentage: "35%" },
];

const addSkillEl = function () {
  let htmlEl = ``;
  skillsIcon.forEach((icons) => {
    htmlEl += `<div class="skills skills-${icons.language}">
                <span class="skill-icon">
                    <svg width="80" height="80" fill="none">
                        <use href="${logo}#icon-${icons.language}"></use> 

                    </svg>
                  </span><br>
                  <span class="skill-name">${icons.language}</span>

                  <div class="skills-hover">
                  <p>${icons.skill}
                  </p>
                  <div>
                  <div class="skill-percentage" ;"></div>
                  </div>
                  </div>
              </div> `;
  });

  skills_iconEl.innerHTML = htmlEl;
  skillsEl = document.querySelectorAll(".skills");
};

addSkillEl();
skillsEl.forEach((acc, i) => {
  acc.addEventListener("mouseenter", function (a) {
    let closestSkills = a.target.closest(".skills");
    let skillPercentage = closestSkills.querySelector(".skill-percentage");
    skillPercentage.style.width = skillsIcon[i].percentage;
  });
});

skillsEl.forEach((acc, i) => {
  acc.addEventListener("mouseleave", function (a) {
    let closestSkills = a.target.closest(".skills");
    let skillPercentage = closestSkills.querySelector(".skill-percentage");
    skillPercentage.style.width = "0%";
  });
});

///skills add html tag

///portfolio add html

const portfolio_LinkEl = [
  `https://www.trushine-uae.com/`,
  `https://anandhan.netlify.app/`,
  `https://zohoold.netlify.app/`,
  `https://freebank1.netlify.app/`,
  `https://mapty122.netlify.app/`,
  `https://guessmynumber12.netlify.app/"`,
  `https://travelcheck12.netlify.app`,
  `https://eatsplit12.netlify.app`,
  `https://schadm.netlify.app/`,
];

const portfolio_content = [
  `is the provider to consider if you are looking for a cleaning service...`,
  `Do you want a detailed recipe for cooking? Visit this link for more...`,
  `This is just for Zoho's old site without any functionality at the time I started.`,
  `A banking site with minimal functionality to keep the site as a simple banking site.`,
  "first third-party library integration with the Leaflet library",
  `A simple game to find a number, just for creating a learning experience.`,
  `First basic React travel checklist app`,
  `Creating split application for expenses`,
  `SCHADM ERP. Together, let's shape a smarter tomorrow.`,
];

const portfolioHeadings = [
  `TruShine`,
  `Forkify`,
  `Zoho`,
  `Bank`,
  `Leaflate`,
  `Guess Number`,
  `Travel List`,
  `Eat Split`,
  `SCHADM`,
];

const portfolio_img = [trusshine, Forkify, zoho, bank, map, guess, travel, split, school];

/* <div class="portfolios portfolios_trushine">
    <div class="portfolios_hover hover_trushine">
        <div class="portfolios_links">
            <h2>Atala</h2>
            <span>is the provider to consider if you are looking for a cleaning service....</span><br>
            <a href="./My Project/Zoho.com/zoho.html" target="_blank">See more &#8594;</a>
        </div>
     </div>
                           
</div> */

const addPortFolio = function () {
  let htmlEl = ``;

  portfolioHeadings.forEach((acc, i) => {
    const val = acc.toLocaleLowerCase().split(" ").join("");

    htmlEl += `<div class="portfolios portfolios_${val}">
        <div class="portfolios_hover hover_${val}">
            <div class="portfolios_links">
                <h2>${acc}</h2>
                <span>${portfolio_content[i]}</span><br>
                <a href="${portfolio_LinkEl[i]}" target="_blank">See more &#8594;</a>
            </div>
         </div>

    </div>`;
  });

  portfoliosEl.innerHTML = htmlEl;

  const portfolios_imgadd = document.querySelectorAll(`.portfolios`);

  portfolios_imgadd.forEach((acc, i) => {
    acc.style.backgroundImage = `url(${portfolio_img[i]})`;
  });
};

addPortFolio();
// experience find hight

about_experience_2021El.forEach((acc, i) => {
  let find2021 = Number.parseFloat(window.getComputedStyle(acc).height);
  ex2021[i].style.height = `${find2021 - 30}px`;
});

const open_emialEl = document.querySelector(".open_emial");

open_emialEl.addEventListener("click", function (a) {
  a.preventDefault();

  const subject = "Testing";

  const body = "testing2";
  const recipient = "anandhan.sm@zohocorp.com";

  // Redirecting to Gmail compose
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`
  );
});

const nav_linkEl = document.querySelector(".nav_link");

nav_linkEl.addEventListener("click", function (a) {
  a.preventDefault();
  if (!a.target.className.includes("alink")) return;
  const value = a.target.dataset.nav;
  const findView = document.getElementById(value);
  findView.scrollIntoView({ behavior: "smooth" });
});

const my_Form = document.querySelector(".form_check");

my_Form.addEventListener("submit", function (a) {
  a.preventDefault();
  const formElement = my_Form.elements;

  const sentMail = async function () {
    const form_data = {
      fromAddress: "anandhan.sm@zohocorp.com",
      toAddress: `${formElement[1].value}`,
      subject: "Thanks for reaching out to us.",
      content: `<p>Hi ${formElement[0].value},</p><br><p>We have received your information, and we will get back to you soon, </p></span>`,
      askReceipt: "yes",
    };

    const responce = await fetch(
      "https://app-10088653757.development.catalystappsail.com/sendmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form_data),
      }
    );

    const data = await responce.json();
    console.log(data);
  };

  sentMail();

  my_Form.reset();
});
