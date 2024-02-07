export interface Resume {
  id: string,
  heading: string,
  subheading: string,
  title: string,
  downloadText: string,
  downloadUrl: string,
  contactText: string,
  urlText: string,
  url: string,
  location: string,
  summary: string,
  experienceTitle: string,
  references: string,
}

export const RESUME: Resume = {
  id: "resume",
  heading: 'Resumé',
  subheading: 'Me as a piece of paper',
  title: "Caleb Masters",
  downloadText: "Request on LinkedIn",
  downloadUrl: "https://www.linkedin.com/in/caleb-masters-az/",
  contactText: "Contact via Linkedin",
  urlText: "linkedin.com/in/caleb-masters-az/",
  url: "https://www.linkedin.com/in/caleb-masters-az/",
  location: "Greater Tucson Area, AZ.",
  summary: "Full-Stack engineer with 10+ years experience in Front-End and 3+ in Back-End building enterprise-grade, pixel-perfect, accessible, lightweight, component based, mobile-first, conversion-generating web experiences. Natural propensity toward community building, curiosity driven technical exploration, and problem solving. Hobby collector.",
  experienceTitle: "Experience",
  references: "Professional and Personal references available upon request"
}
