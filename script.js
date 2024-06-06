'use strict';

// Data
const projects = [
  {
    name: 'The MET Gallery',
    year: '2023',
    image: './content/img/screenshot_themet.png',
    paragraphs: [
      'As an art enthusiast, I wanted my first vanilla javascript project to use the MET Museum API to display some of their art on the web. This app fetched a list of artwork then fetched more information about the art such as image and title. Users can enlarge the art to show more detail, and they can hide information. This app will detect if they are on mobile to show small size images for faster load times.',
    ],
    githubLink: '#github',
    liveLink: '#live',
    liveUserNameGuest: '',
    livePasswordGuest: '',
    liveUserNameAdmin: '',
    livePasswordAdmin: '',
    technical: [
      'Vanila Javascript',
      'CSS',
      'HTML',
      'Responsive',
      'The MET API(RESTful)',
      'Figma',
    ],
    client: 'n/a',
    featuresUser: [
      'View artwork from The MET API',
      'Enlarge/minimize artwork',
      'Hide/show information',
      'Show next artwork',
      'Small image in mobile',
    ],
    featuresAdmin: [],
  },

  {
    name: 'Slide',
    year: '2023',
    image: './content/img/screenshot_slide01.jpg',
    paragraphs: [
      'One of my friends had asked me about financial budgeting basics. Rather than just tell her about it, I built a simple to use javascript app! This is a mobile-first app where the user inputs their salary, and it will recommend how much they should spend on items such as housing, food, transportation, etc. The app is called Slide because I added the ability for the user to adjust the values. They can also add and delete fields to their liking.',
    ],
    githubLink: '#github',
    liveLink: '#live',
    liveUserNameGuest: '',
    livePasswordGuest: '',
    liveUserNameAdmin: '',
    livePasswordAdmin: '',
    technical: ['Vanila Javascript', 'CSS', 'HTML', 'Mobile-first', 'Figma'],
    client: 'n/a',
    featuresUser: [
      'Input number',
      'Adjust budget with sliders',
      'Add category',
      'Delete category',
    ],
    featuresAdmin: [],
  },

  {
    name: 'Maikallaneza.com',
    year: '2024',
    image: './content/img/screenshot_ml.png',
    paragraphs: [
      'This was my first React project, which I built for a published author. Since she occasionally updates her bio and literary works, I decided to build her a custom content manager in addition to her landing page. The challenge was then to allow her to sign in, create, update, and delete her bio, photo, and literary works.',
      'She also requested that her site be accessible. I made her site responsive to mobile screens and readers and tested it for accessibility. Her website is currently live to show her fans, prospective editors and publishers.',
    ],
    githubLink: '#github',
    liveLink: '#live',
    liveUserNameGuest: '',
    livePasswordGuest: '',
    liveUserNameAdmin: '',
    livePasswordAdmin: '',
    technical: [
      'React',
      'Javascript',
      'CSS',
      'Responsive',
      'Vite',
      'Styled components',
      'React query',
      'React hook forms',
      'React router',
      'Supabase(RESTful API)',
      'CRUD app',
      'High accessibility score',
      'Figma',
    ],
    client: 'Maika Llaneza',
    featuresUser: ['Read data from Supabase'],
    featuresAdmin: [
      'Add bio and projects',
      'Edit bio projects, and photo',
      'Delete projects',
      'Sign in/out',
    ],
  },

  {
    name: 'Magis',
    year: '2024',
    image: './content/img/screenshot_magis.png',
    paragraphs: [
      'As a design enthusiast, I was interested to create a digital experience that reflects this company’s artistic aesthetics. I looked at their current website (which is made for industry professionals) and wanted to create a mock consumer website with ecommerce features such as selecting colors, adding, editing, deleting items in a shopping cart, and signing in/out checking previous orders.',
      'I further challenged myself by creating a content management app, where the business can sign in/out, then add, edit, and delete products, images, and variants of those products.',
    ],
    githubLink: '#github',
    liveLink: '#live',
    liveUserNameGuest: ' guest@test.com',
    livePasswordGuest: 'guest123',
    liveUserNameAdmin: ' guest@test.com',
    livePasswordAdmin: 'guest123',
    technical: [
      'React',
      'Javascript',
      'CSS',
      'Responsive',
      'Vite',
      'Styled components',
      'React query',
      'React hook forms',
      'React router',
      'Context Api',
      'Supabase(RESTful API)',
      'CRUD app',
      'Figma',
    ],
    client:
      'Disclaimer: The company is real, but this is a fictional project for portfolio only. It is NOT a clone.',
    featuresUser: [
      'Filter/sort products',
      'Select variants',
      'Add, edit, remove items in the cart',
      'Place order',
      'View previous orders',
      'Sign in/out, and sign up',
    ],
    featuresAdmin: [
      'Filter/sort products',
      'Add, edit, and remove products',
      'Edit variant inventory',
      'Add multiple gallery photos',
      'Add variant photos',
      'Sign in/out',
    ],
  },
];

let find = document.querySelector('.projects-container');

const containerProjects = document.querySelector('.projects-container');

const displayProjects = function (projects) {
  projects.forEach((proj, i) => {
    // console.log(proj);
    const html = `
      <article class="project-wrapper">
        <h2 class="font-l">${proj.name}</h2>
        <p class="font-s">${proj.year}</p>
        <img alt="${proj.name} project screenshot" src=${
      proj.image
    } class="project-img"/>
          <div class="about-container">
            <h3 class="font-s">About project</h3>
            <div class="about-wrapper">
              ${proj.paragraphs
                .map((paragraph) => `<p>${paragraph}</p>`)
                .join('')}
            </div>
          </div>
          <div class="details-container">
            <div class="links-container">
              <h3 class="font-s">Links</h3>
              <ul class="vertical-ul">
                <a href=${proj.githubLink}>Github</a>
              </ul>
              <ul class="vertical-ul">
                <a href=${proj.liveLink}>View live</a>
              </ul>
              ${
                proj.liveUserNameAdmin.length > 0
                  ? `<ul class='vertical-ul'>
                    <li>(consumer login)</li>
                    <li>username: ${proj.liveUserNameAdmin}</li>
                    <li>password: ${proj.liveUserPasswordAdmin}</li>
                  </ul>`
                  : ''
              }
              ${
                proj.liveUserNameGuest.length > 0
                  ? `<ul class='vertical-ul'>
                    <li>(consumer login)</li>
                    <li>username: ${proj.liveUserNameGuest}</li>
                    <li>password: ${proj.liveUserPasswordGuest}</li>
                  </ul>`
                  : ''
              }
            </div>
            <div class="technical-container">
              <h3 class="font-s">Made with</h3>
                <ul class="technical-ul">
                ${proj.technical
                  .map((technical) => `<li>${technical}</li>`)
                  .join('')}
                </ul>
            </div>
          </div>
          <aside class="project-aside" aria-label="project client and features list">
            <div class="client-container">
              <h3 class="font-s">Client</h3>
              <ul class="technical">
                <li>
                  ${proj.client}
                </li>
              </ul>
            </div>
            <div class="features-container">
              <h3 class="font-s">Features</h3>
              ${
                proj.featuresAdmin.length > 0
                  ? `<h4 class="font-xs">Admin features</h4>
              <ul class="vertical-ul">
              ${proj.featuresAdmin
                .map((adminFeatures) => `<li>${adminFeatures}</li>`)
                .join('')}
              </ul>`
                  : ''
              }
              ${
                proj.featuresUser.length > 0
                  ? `<h4 class="font-xs">User features</h4>
              <ul class="vertical-ul">
              ${proj.featuresUser
                .map((userFeatures) => `<li>${userFeatures}</li>`)
                .join('')}
              </ul>`
                  : ''
              }
            </div>
          </aside>
      </article>
    `;
    containerProjects.insertAdjacentHTML('afterbegin', html);
  });
};

displayProjects(projects);
