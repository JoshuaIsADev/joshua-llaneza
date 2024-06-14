'use strict';

// Data
const projects = [
  {
    name: 'The MET Gallery',
    year: '2023',
    image: './content/img/screenshot_themet.png',
    paragraphs: [
      "As an art enthusiast, I wanted my first vanilla JavaScript project to showcase the MET Museum's European paintings collection by using their API to display some of their art on the web. This app fetches a list of artwork and then fetches to get the details and image. Users can enlarge the images to view more details and have the option to hide the information. The app displays high quality images if the user is on desktop but fetch smaller images on mobile for faster load times.",
    ],
    githubLink: 'https://github.com/JoshuaIsADev/The-MET-v3',
    liveLink: 'https://the-met-gallery.netlify.app/',
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
      'One of my friends asked me about the basics of financial budgeting. Instead of simply explaining it, I decided to build a user-friendly JavaScript app! This mobile-first app allows users to input their salary and receive recommendations on how much to spend on various categories such as housing, food, and transportation. Users can also adjust the values using sliders, and add or delete fields according to their preferences.',
    ],
    githubLink: 'https://github.com/JoshuaIsADev/Slide',
    liveLink: 'http://slide-budget.netlify.app',
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
      'This was my first React project, which I built for a published author. Since she occasionally updates her bio and literary works, I decided to build a custom content manager in addition to her landing page. The challenge was to enable her to sign in, create, update, and delete her bio, photo, and literary works.',

      'She also requested that her site be accessible, so I tested it extensively for accessibility. It achieved a perfect score of 100 from Google Lighthouse and was manually tested with Microsoft Narrator. The website is now live, allowing her to share it with her fans, prospective editors, and publishers.',
    ],
    githubLink: 'https://github.com/JoshuaIsADev/Maika-Llaneza-v2',
    liveLink: 'http://maikallaneza.com',
    liveUserNameGuest: '',
    livePasswordGuest: '',
    liveUserNameAdmin: 'CMS demo available during interview',
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
      'Supabase(RESTful)',
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
      'As a design enthusiast, I was inspired to create a digital experience that reflects the artistic aesthetics of this company. After reviewing their current website, which caters to industry professionals, I decided to design a mock consumer website. This new site features e-commerce functionalities such as selecting colors, adding, editing, and deleting items in a shopping cart, as well as signing in and out to check previous orders.',

      'To further challenge myself, I developed a content management application. This allows the business to sign in and out, and provides capabilities to add, edit, and delete products, images, and product variants.',
    ],
    githubLink: 'https://github.com/JoshuaIsADev/magis',
    liveLink: 'https://magis-portfolio-project.netlify.app/',
    liveUserNameGuest: 'guestuser@email.com',
    livePasswordGuest: 'GuestUser!1234',
    liveUserNameAdmin: 'CMS demo available during interview',
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
      'Context Api',
      'Supabase(RESTful)',
      'Figma',
    ],
    client:
      'Disclaimer: The company is real, but this is a mock project for portfolio only. It is also NOT a clone.',
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
                <a href=${proj.githubLink} target="_blank">Github</a>
              </ul>
              <ul class="vertical-ul">
                <a href=${proj.liveLink} target="_blank">View live</a>
              </ul>
              ${
                proj.liveUserNameAdmin.length > 0
                  ? `<ul class='vertical-ul'>
                    <li><h4 class="font-xs">Admin login</h4></li>
                    <li>Username: ${proj.liveUserNameAdmin}</li>
                     ${
                       proj.livePasswordAdmin.length > 0
                         ? `<li>Password: ${proj.liveUserPasswordAdmin}`
                         : ''
                     }</li>
                  </ul>`
                  : ''
              }
              ${
                proj.liveUserNameGuest.length > 0
                  ? `<ul class='vertical-ul'>
                    <li><h4 class="font-xs">Consumer login</h4></li>
                    <li>Username: ${proj.liveUserNameGuest}</li>
                    <li>Password: ${proj.livePasswordGuest}</li>
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
