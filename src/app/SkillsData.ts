// Not exactly using this correctly yet
export interface SkillItem {
  name: string;
  percent: string;
}

interface SkillSet {
  category: string;
  skills: Array<SkillItem>;
}

export interface Skill {
  id: string;
  heading: string;
  subheading: string;
  skillSet: Array<SkillSet>;
}

export const SKILLS: Skill = {
  id: 'skills',
  heading: 'Skills',
  subheading: 'From design to pixel perfect & deployed',
  skillSet: [
    {
      category: 'Front-End',
      skills: [
        {
          name: 'React',
          percent: '100%',
        },
        {
          name: 'HTML/CSS',
          percent: '100%',
        },
        {
          name: 'Javascript',
          percent: '90%',
        },
        {
          name: 'Next.js/Gatsby',
          percent: '90%',
        },
        {
          name: 'SCSS',
          percent: '90%',
        },
        {
          name: 'Unit Testing',
          percent: '90%',
        },
        {
          name: 'Jasmine',
          percent: '80%',
        },
        {
          name: 'Angular',
          percent: '60%',
        },
        {
          name: 'Vue',
          percent: '50%',
        },
        {
          name: 'TypeScript',
          percent: '80%',
        },
      ],
    },
    {
      category: 'Efficiencies',
      skills: [
        {
          name: 'NPM',
          percent: '100%',
        },
        {
          name: 'VIM/CLI',
          percent: '100%',
        },
        {
          name: 'Bitbucket',
          percent: '100%',
        },
        {
          name: 'Git',
          percent: '100%',
        },
        {
          name: 'Gulp/Grunt',
          percent: '90%',
        },
      ],
    },
    {
      category: 'Operations',
      skills: [
        {
          name: 'Agile',
          percent: '100%',
        },
        {
          name: 'Jira',
          percent: '100%',
        },
        {
          name: 'Deployment',
          percent: '80%',
        },
        {
          name: 'A/B Testing',
          percent: '90%',
        },
      ],
    },
  ],
};
