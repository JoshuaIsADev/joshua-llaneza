'use strict';

// Data
const title = { name: 'Joshua Llaneza', url: '' };

const navigation = [
  { name: 'About', url: './index.html' },
  { name: 'Landscape Architecture', url: './landscapearchitecture.html' },
  { name: 'Photography', url: './photography.html' },
  { name: 'Web Development', url: './webdevelopment.html' },
  { name: 'Email', url: 'mailto:joshuallaneza@outlook.com' },
];

const footer = 'Website and projects - copyright © Joshua Llaneza 2024';

const projects = [
  './content/img/screenshot_ml.jpg',
  './content/img/screenshot_magis1.jpg',
  './content/img/screenshot_magis2.jpg',
  './content/img/screenshot_magis3.jpg',
  './content/img/screenshot_themet.jpg',
  './content/img/screenshot_slide.jpg',
];

let find = document.querySelector('.projects-container');

const containerHeader = document.querySelector('.header-container');
const containerHeaderNav = document.querySelector('.header-nav');
const containerFooter = document.querySelector('.footer-container');
const containerProjects = document.querySelector('.projects-container');

const displayHeader = function (title) {
  const html = `
    <div class="text-row">
        <h1 class="font-l">${title.name}</h1>
      </div>
    `;
  containerHeader.insertAdjacentHTML('afterbegin', html);
};

const displayHeaderNav = function (navigation) {
  navigation.forEach((nav, i) => {
    const html = `
    <li class="text-row">
    <a href="${nav.url}" class="font-l">${nav.name}</a>
    </li>
    `;
    containerHeaderNav.insertAdjacentHTML('beforebegin', html);
  });
};

const displayFooter = function (footer) {
  const html = `
   <div class="text-row">
      <p class="font-l">
        ${footer}
      </p>
    </div>
    `;
  containerFooter.insertAdjacentHTML('afterbegin', html);
};

const displayProjects = function (projects) {
  projects.forEach((proj, i) => {
    const html = `
    
    <img alt="project screenshot ${i}" src=${proj} class="project-img"/>
    
    `;
    containerProjects.insertAdjacentHTML('beforeend', html);
  });
};

displayHeader(title);
displayHeaderNav(navigation);
displayFooter(footer);
displayProjects(projects);
