/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
}

//Home Page
const greeting = {
  title: 'Hi',
  title2: ' My name is Thapanan Kulab',

  // nickname: "harry / picleric",
  full_name: 'Thapan Kulab',
  subTitle1: 'Software Engineer.',
  subTitle2: 'Web Developer',
  resumeLink:
    'https://drive.google.com/file/d/1W1p62nmkF60DYTb-okKIMxNeu0XANHmm/view?usp=sharing',
  transcriptLink:
    'https://drive.google.com/file/d/1A1ROzBbdNHjrovAcUPbV5W53tUfzyXH3/view?usp=sharing',

  mail: 'mailto:thapanan.kularb@gmail.com',
}

const socialMediaLinks = {
  /* Your Social Media Link */
  github: 'https://github.com/ThapananKulab',
  linkedin: 'https://www.linkedin.com/in/sumitsharma002',
  gmail: 'thapanan.kularb@gmail.com',
  twitter: 'https://twitter.com/sumitsharma002',
}

const skills = {
  data: [
    {
      _id: '354c54b7-ffd8-40f1-972f-1d006733df25',
      title: 'My Skills Development',
      fileName: 'FullStackImg',
      skills: [
        '🌐 Web Application',
        '📈 Data Science',
        '☁️ Cloud Computing',
        '🛢️ Database',
      ],
      softwareSkills: [
        {
          skillName: 'HTML5',
          fontAwesomeClassname: 'simple-icons:html5',
          style: {
            color: '#E34F26',
          },
        },
        {
          skillName: 'CSS3',
          fontAwesomeClassname: 'fa-css3',
          style: {
            color: '#1572B6',
          },
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
          style: {
            backgroundColor: '#FFFFFF',
            color: '#F7DF1E',
          },
        },
        {
          skillName: 'ReactJS',
          fontAwesomeClassname: 'simple-icons:react',
          style: {
            color: '#61DAFB',
          },
        },
        {
          skillName: 'NodeJS',
          fontAwesomeClassname: 'simple-icons:nodedotjs',
          style: {
            color: '#339933',
          },
        },
        {
          skillName: 'Express',
          fontAwesomeClassname: 'simple-icons:express',
          style: {
            color: 'gray',
          },
        },
        {
          skillName: 'Material UI',
          fontAwesomeClassname: 'simple-icons:uikit',
          style: {
            color: '#007FFF',
          },
        },
        {
          skillName: 'Tailwind CSS',
          fontAwesomeClassname: 'logos:tailwindcss-icon',
          style: {
            color: '#635BFF',
            width: '1em',
            height: '1em',
          },
        },
        {
          skillName: 'Bootstrap',
          fontAwesomeClassname: 'simple-icons:bootstrap',
          style: {
            color: '#563d7c',
          },
        },
        {
          skillName: 'Postman',
          fontAwesomeClassname: 'simple-icons:postman',
          style: {
            color: '#FF6C37',
          },
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassname: 'simple-icons:mongodb',
          style: {
            color: '#439743',
          },
        },
        {
          skillName: 'MySQL',
          fontAwesomeClassname: 'simple-icons:mysql',
          style: {
            color: '#4479A1',
          },
        },
        {
          skillName: 'Git',
          fontAwesomeClassname: 'simple-icons:git',
          style: {
            color: '#E94E32',
          },
        },
        {
          skillName: 'PHP',
          fontAwesomeClassname: 'simple-icons:php',
          style: {
            color: '#3776AB',
          },
        },
      ],
    },
  ],
}

const degrees = {
  degrees: [
    {
      title: 'King Mongkut s University of Technology North Bangkok',
      subtitle: 'Electronics Computer Teachnology',
      logo_path: 'kmu.png',
      alt_name: 'Amrita University',
      duration: '2022 - Now',
      descriptions: [
        'I learn Intelligence, Machine Learning, Computer Vision etc.',
      ],
      website_link: 'https://www.amrita.edu/',
    },
    {
      title: 'Attawit Commercial Technology College',
      subtitle: 'Information Technology',
      logo_path: 'amrita_logo.png',
      alt_name: 'Amrita University',
      duration: '2017 - 2022',
      descriptions: ['⚡ I have learn OOP , Maintenance Computer'],
      website_link: 'https://www.amrita.edu/',
    },
  ],
}

const certifications = {
  certifications: [
    {
      title: 'MikroTik',
      subtitle: '',
      logo_path: 'mikro.png',
      certificate_link: '/#/education',
      alt_name: 'IBM',
      color_code: '#096ce1',
    },
    {
      title: 'Cisco',
      subtitle: '',
      logo_path: 'cisco.png',
      certificate_link: '/#/education',
      alt_name: 'IBM',
      color_code: '#096ce1',
    },
    {
      title: 'MikroTik Academy',
      subtitle: '',
      logo_path: 'ibm_logo.jpg',
      certificate_link: '/#/education',
      alt_name: 'IBM',
      color_code: '#096ce1',
    },
  ],
}

// Experience Page
const experience = {
  title: 'Experience',
  subtitle: 'Internship',
  description: 'I have 2 internships at a school bank and at a biolab.',
  header_image_path: 'experience.svg',
  sections: {
    title: 'Work Experience',
    experiences: [
      {
        title: 'Internship',
        company: 'Biolab',
        company_url: 'https://ottonomy.io/',
        logo_path: 'bio.png',
        alt_name: 'ottonomy-logo',
        duration: '(April - July, 2018 )',
        location: 'Noida (On-Site)',
        description: '<li> Installing and Configuring Computer Systems </li>',
        color: '#000000',
      },
      {
        title: 'Internship',
        company: 'ATC Bank',
        company_url: 'https://ottonomy.io/',
        logo_path: 'amrita_logo.png',
        alt_name: 'ottonomy-logo',
        duration: '(April - July, 2021 )',
        location: 'Noida (On-Site)',
        description: '<li> Key Data of Student deposit and withdraw </li>',
        color: '#000000',
      },
    ],
  },
}

// Projects Page
const projectsHeader = {
  title: 'Projects',
  description: 'This is All project development',
  avatar_image_path: 'projects_image.svg',
}

const projects = {
  data: [
    {
      id: 'project-0',
      name: 'Cafe-Project',
      repoUrl: 'https://github.com/thapanankulab25/project-cafe.git',
      description: 'fina-project',
      languages: [
        {
          name: 'React',
          iconifyClass: 'logos:react',
        },
        {
          name: 'Express',
          iconifyClass: 'simple-icons:express',
        },
        {
          name: 'Nodejs',
          iconifyClass: 'logos:nodejs',
        },
        {
          name: 'MongoDB',
          iconifyClass: 'vscode-icons:file-type-mongo',
        },
        {
          name: 'Tailwind',
          iconifyClass: 'vscode-icons:file-type-tailwind',
        },
        {
          name: 'Cloudinary',
          iconifyClass: 'logos:cloudinary-icon',
        },
      ],
    },
    {
      id: 'project-1',
      name: 'Sek Loso FC',
      repoUrl: 'https://github.com/ThapananKulab/app-quiz.git',
      description: 'this sek loso project',
      languages: [
        {
          name: 'React',
          iconifyClass: 'logos:react',
        },
      ],
    },
    {
      id: 'project-2',
      name: 'Book-Store',
      url: '',
      repoUrl: 'https://github.com/thapanankulab25/thapanankulab25.git',
      description: 'Book-Store project to use with ATC',
      languages: [
        {
          name: 'PHP',
          iconifyClass: 'logos:php',
        },
        {
          name: 'PHP',
          iconifyClass: 'logos:mysql',
        },
      ],
    },
    {
      id: 'project-4',
      name: 'App Quiz',
      url: '',
      repoUrl: 'https://github.com/ThapananKulab/app-quiz.git',
      description: 'Example Quiz to learn in class',
      languages: [
        {
          name: 'React',
          iconifyClass: 'logos-react',
        },
      ],
    },
  ],
}

const contactPageData = {
  contactSection: {
    title: 'Contact Me',
    profile_image_path: 'port-2.png',
    description: '📞 Phone: 081-913-9936',
  },
}

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
}
