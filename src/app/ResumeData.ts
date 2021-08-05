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
  downloadText: "download resumé pdf",
  downloadUrl: "/assets/cmasters-2021-resume-one-page.pdf",
  contactText: "Contact via Linkedin",
  urlText: "linkedin.com/in/caleb-masters-atx/",
  url: "https://www.linkedin.com/in/caleb-masters-atx/",
  location: "Austin, TX.",
  summary: "Frontend engineer with 10+ years experience building enterprise-grade, pixel-perfect, accessible, lightweight, component based, mobile-first, conversion-generating web experiences. Natural propensity toward community building, curiosity driven technical exploration, and problem solving. Hobby collector.",
  experienceTitle: "Experience",
  references: "Professional and Personal references available upon request"
}
