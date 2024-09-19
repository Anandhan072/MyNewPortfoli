import logo from "../img/skils_icons.svg";
import trusshine from "../img/portfolio_img/trusshine.svg";
import Forkify from "../img/portfolio_img/Forkify.svg";
import zoho from "../img/portfolio_img/zoho.svg";
import bank from "../img/portfolio_img/bank.svg";
import map from "../img/portfolio_img/map.svg";
import guess from "../img/portfolio_img/guess.svg";

/// My log animi function
import axios from "axios";
import "core-js/stable";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

const atagEl = document.querySelector(".atag");
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
                        
<use href="./img/skils_icons.svg#icon-${icons}"></use> 

                    */

const skillsIcon = [`html`, `css`, `js`, `nodejs`, `mongodb`, `git`, `sass`, `ubuntu`];

const addSkillEl = function () {
  let htmlEl = ``;
  skillsIcon.forEach((icons) => {
    htmlEl += `<div class="skills skills-${icons}">
                <span class="skill-icon">
                    <svg width="80" height="80" fill="none">
                        <use href="${logo}#icon-${icons}"></use> 

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

const portfolio_img = [trusshine, Forkify, zoho, bank, map, guess];

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
    acc.style.backgroundImage = `url(${portfolio_img[i]})`;
  });
};

addPortFolio();
// experience find hight

about_experience_2021El.forEach((acc, i) => {
  let find2021 = Number.parseFloat(window.getComputedStyle(acc).height);
  ex2021[i].style.height = `${find2021 - 30}px`;
});
// const find2021 = Number.parseFloat(window.getComputedStyle(about_experience_2021El).height);

// console.log(find2021);

// const checcc = document.querySelector(`.experience_hr_2021`);
// console.log(checcc);

// checcc.style.height = `${find2021 - 10}px`;

// open mail

const open_emialEl = document.querySelector(".open_emial");

open_emialEl.addEventListener("click", function (a) {
  a.preventDefault();

  const subject = "Testing";

  const body = "testing2";
  const recipient = "someone@example.com";

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

const dragElement = document.getElementById("file_id");

dragElement.addEventListener("change", function (a) {
  a.preventDefault();
  const file = dragElement.files[0].name;
  console.log(file);
  console.log("hello");
});

const username_idEl = document.querySelector("#username_id");
const email_idEl = document.querySelector("#email_id");
const phone_idEl = document.querySelector("#phone_id");
const describe_idEl = document.querySelector("#describe_id");
const submit_idEl = document.querySelector("#submit_id");

const my_Form = document.querySelector(".form_check");

my_Form.addEventListener("submit", function (a) {
  a.preventDefault();

  const emailData = {
    fromAddress: "anandhan.sm@zohocorp.com",
    toAddress: email_idEl.value,
    subject: "Email - Always and Forever",
    content: `<p>Hi Team,</p>
<span>&ensp;&ensp;<p>User Name: ${username_idEl.value} </p>
<p>Email ID: ${email_idEl.value}</p>
<p>Phone Number: ${phone_idEl.value}</p>
<p>content: ${describe_idEl.value}</p>
</span>
`,
    askReceipt: "yes",
  };

  const sentMail = async function () {
    fetch("https://app-10088653757.development.catalystappsail.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        username_idEl.value = "";
        email_idEl.value = "";
        phone_idEl.value = "";
        describe_idEl.value = "";
      })
      .catch((error) => console.error("Error:", error));
  };

  sentMail();
});
