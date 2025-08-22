import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Nihar",
  lastName: "Devmurari",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "React Native Developer",
  avatar: "/images/avatar.jpg",
  email: "nihardevmurari7@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  availability: "Open to US & UK shifts, flexible remote",
  languages: ["English", "Hindi", "Gujarati"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nihar777",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nihar-d-a71022116/",
  },
  {
    name: "Twitter",
    icon: "x",
    link: "https://x.com/devmurari_nih",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
 headline: <>Building seamless mobile experiences</>,
featured: {
  display: true,
  title: (
    <>
      Recent projects: <strong className="ml-4">Emari Roast Cafe</strong> {" "} & {" "}
      <strong>Referaly</strong>
    </>
  ),
  href: "/work",
},
subline: (
  <>
    I'm Nihar, a mobile app developer specializing in{" "}
    <strong>React Native</strong>, where I craft high-quality, cross-platform
    apps.<br />Beyond client work, I love building and experimenting with my
    own projects.
  </>
),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/nihar-devmurari-7",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Nihar Devmurari is an Ahmedabad-based React Native mobile app developer
        with 4.7 years of experience crafting high-performance, cross-platform
        applications. Skilled in React Native, JavaScript, TypeScript, and
        modern UI/UX practices, he is passionate about building seamless digital
        experiences for Android and iOS. Open to remote opportunities worldwide,
        he blends technical expertise with a focus on delivering user-centric
        mobile solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Ninjatech",
        timeframe: "May 2024 - Present",
        role: "Senior Software Developer",
        achievements: [
          <>
            Led development of the Referaly app with React Native, collaborating
            with a UK team for an international client.
          </>,
          <>
            Boosted app performance by 40–70% through optimized rendering and
            memory management.
          </>,
        ],
        images: [
         
        ],
      },
      {
        company: "Konzept Solutions",
        timeframe: "Aug 2023 - May 2024",
        role: "Mobile Application Developer",
        achievements: [
          <>
            Built cross-platform apps using React Native, Redux Toolkit, and
            TanStack Query.
          </>,
          <>
            Optimized performance by 60–85% through efficient state management
            and code splitting.
          </>,
        ],
        images: [],
      },
      {
        company: "Shine Infosoft",
        timeframe: "Mar 2023 - Aug 2023",
        role: "Sr. Mobile App Developer",
        achievements: [
          <>
            Led development of Credit Mountain, a USA FinTech app, achieving 20%
            client acquisition growth and 99% uptime.
          </>,
          <>
            Collaborated with international clients across time zones for
            seamless delivery.
          </>,
        ],
        images: [],
      },
      {
        company: "Shine Infosoft",
        timeframe: "Jun 2021 - Mar 2023",
        role: "Jr. React Native Developer",
        achievements: [
          <>
            Built apps like Skill India Digital and Whimstay, achieving 98%
            deployment success on Play Store and App Store.
          </>,
          <>
            Implemented robust API integrations and state management using Redux
            and React Query for efficient data handling.
          </>,
        ],
        images: [],
      },
      {
        company: "Silicon Valley WebDev Services",
        timeframe: "Jan 2021 - Jun 2021",
        role: "React Native Developer",
        achievements: [
          <>
            Initiated cross-platform projects and integrated APIs for apps like
            Tabella Catholic.
          </>,
          <>
            Improved API response time by 15% for Tabella Catholic through
            optimized integration techniques.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Saurashtra University, Gujarat",
        description: (
          <>
            Completed Bachelor's in Computer Applications with a focus on
            computer science and software development.
          </>
        ),
      },
      {
        name: "Sabarmati University, Gujarat",
        description: (
          <>
            Currently pursuing a Master's degree in an external program,
            specializing in computer science.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>
            Proficient in using Figma to design and prototype mobile
            applications, and skilled at translating design files into
            responsive, high-quality React Native apps.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/skills/figma-01.jpg",
          //   alt: "Figma mobile app design",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/skills/figma-02.jpg",
          //   alt: "UI prototyping in Figma",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "React Native (CLI & Expo)",
        description: (
          <>
            Experienced in building cross-platform mobile applications using
            both React Native CLI and Expo, with expertise in performance
            optimization, state management, and smooth deployment workflows.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/skills/react-native-01.jpg",
          //   alt: "React Native project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "JavaScript & TypeScript",
        description: (
          <>
            Strong command of JavaScript (ES5, ES6) and TypeScript for
            developing scalable, maintainable, and type-safe mobile application
            codebases.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/skills/js-ts-01.jpg",
          //   alt: "JavaScript and TypeScript coding",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Redux Toolkit & React Query",
        description: (
          <>
            Skilled in efficient state management and data fetching using Redux
            Toolkit and React Query, enabling optimal performance and smooth
            user experiences.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/skills/redux-query-01.jpg",
          //   alt: "State management architecture",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "REST APIs & Firebase",
        description: (
          <>
            Adept at integrating RESTful APIs, Google APIs, and Firebase
            services into mobile applications for dynamic and real-time
            functionality.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/skills/api-firebase-01.jpg",
          //   alt: "API integration diagram",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
