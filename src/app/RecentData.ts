interface Stack {
  name: string
}
export interface Site {
  link: string;
  background: string;
  heading: string;
  subheading: string;
  techStack: Array<Stack>; 
  description: string;
}
export interface Recent {
  heading: string;
  sites: Array<Site>;
}

export const RECENT: Recent = {
  heading: "Projects I've Worked On Recently",
  sites: [
    {
      link: 'https://www.bluehost.com',
      background:
        'https://res.cloudinary.com/calebmastersdev/image/upload/v1620844282/cmdev/bluehost_bc3c2l.jpg',
      heading: 'Bluehost.com',
      subheading: 'Tech Stack:',
      techStack: [
        { name: 'React/Next.js' },
        { name: 'SCSS' },
        { name: 'Styled Components' },
        { name: 'Contentful' },
        { name: 'Enzyme' },
        { name: 'Optimizely' },
        { name: 'AWS' },
        { name: 'Bitbucket' },
        { name: 'Confluence' },
        { name: 'Jira' },
      ],
      description:
        'Created React components for an in house framework based on Next.js to allow pages to be generated dynamically using Contentful as a CMS.',
    },
    {
      link: 'https://www.hostgator.com',
      background:
        'https://res.cloudinary.com/calebmastersdev/image/upload/v1620845531/cmdev/hostgator_vzcs0u.jpg',
      heading: 'HostGator.com',
      subheading: 'Tech Stack:',
      techStack: [
        { name: 'Mason' },
        { name: 'Perl' },
        { name: 'JS' },
        { name: 'SCSS' },
        { name: 'Jest' },
        { name: 'Sketch' },
        { name: 'Invision' },
        { name: 'Monetate' },
        { name: 'Git' },
        { name: 'Jira' },
      ],
      description:
        'Created custom components and pages in the Perl based platform Mason, optimized the HTML/CSS of the legacy site, & created new landing pages utilizing an in house content management system.',
    },
    {
      link: 'https://www.calebmasters.dev/',
      background:
        'https://res.cloudinary.com/calebmastersdev/image/upload/v1621370702/cmdev/calebmastersdev_cjbyeh.jpg',
      heading: 'This Website',
      subheading: 'Tech Stack:',
      techStack: [
        { name: 'Angular.JS' },
        { name: 'SCSS' },
        { name: 'Jasmine' },
        { name: 'Photoshop' },
        { name: 'Netlify' },
        { name: 'NPM' },
        { name: 'Git' },
      ],
      description:
        'Designed and built minimally as both a static html/CSS website and as a React app, to demonstrate my skillset. Please take a look at the code, run a Lighthouse report, or click here to toggle the tech stack.',
    },
  ],
};
