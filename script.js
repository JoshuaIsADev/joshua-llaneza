'use strict';

// Data
const projects = [
  {
    name: 'Magis',
    image: '#image',
    paragraphs: [
      'I was inspired to make an ecommerce app after seeing products from this designer furniture company. As a design enthusiast, I was excited to create a digital experience that reflects this company’s forward-thinking aesthetics.',
      'I looked at their current website (which is geared for interior design professionals) and wanted to create a consumer-facing experience with storefront features such as selecting colors, adding, editing, deleting items in a shopping cart, and signing in/out checking previous orders.',
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
      'Styled components',
      'React query',
      'React hook forms',
      'React router',
      'Context Api',
      'Supabase',
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
  {
    name: 'Maikallaneza.com',
    image: '#image',
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
      'Styled components',
      'React query',
      'React hook forms',
      'React router',
      'Supabase',
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
];

let find = document.querySelector('.projects-container');

const containerProjects = document.querySelector('.projects-container');

const displayProjects = function (projects) {
  projects.forEach((proj, i) => {
    console.log(proj);
    const html = `
      <article class="project-wrapper">
        <h2 class="font-l">${proj.name}</h2>
        <img alt="${proj.name} project screenshot" src=${proj.image} />
        <div class="project-info-container">
          <div class="about-container">
            <h3>About project</h3>
            ${proj.paragraphs
              .map((paragraph) => `<p>${paragraph}</p>`)
              .join('')}
            
          </div>
          <div class="links-container">
            <h3>Links</h3>
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
          <h3>Technical</h3>
            <ul class="technical">
            ${proj.technical
              .map((technical) => `<li class="technical-li">${technical}</li>`)
              .join('')}
            </ul>
          </div>
          <div class="client-container">
            <h3>Client</h3>
            <ul class="technical">
              <li>
                ${proj.client}
              </li>
            </ul>
          </div>
          <div class="features-container">
            <h3>Features</h3>
            ${
              proj.featuresAdmin.length > 0
                ? `<h2>Admin features</h2>
            <ul class="vertical-ul">
            ${proj.featuresAdmin
              .map((adminFeatures) => `<li>${adminFeatures}</li>`)
              .join('')}
            </ul>`
                : ''
            }
            ${
              proj.featuresUser.length > 0
                ? `<h2>User features</h2>
            <ul class="vertical-ul">
            ${proj.featuresUser
              .map((userFeatures) => `<li>${userFeatures}</li>`)
              .join('')}
            </ul>`
                : ''
            }
            
          </div>
        </div>
      </article>
    `;

    containerProjects.insertAdjacentHTML('beforebegin', html);
  });
};

displayProjects(projects);
