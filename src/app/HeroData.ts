// Not exactly using this correctly yet
interface Items {
  title: string;
}

export interface Hero {
  id: string;
  tagline: string;
  emHeading: string;
  heading: string;
  listItems: Array<Items>;
  linkText: string;
  linkHref: string;
  linkImgURL: string;
  linkAriaLabel: string;
  linkClass: string;
}

export const HERO: Hero = { 
  id: 'hero',
  tagline:  "Portfolio for",
  emHeading:  "Caleb",
  heading:  "Masters",
  listItems: [{ title: "Front-End Engineer."}, { title: "UX Promoter." }, { title: "Hobby Collector."}],
  linkText: "View Code on Github",
  linkHref: "https://github.com/thecaleblee/calebmastersng",
  linkImgURL: "https://res.cloudinary.com/calebmastersdev/image/upload/v1628621456/cmdev/github_e5vqv0.svg",
  linkAriaLabel: "This websites code on Github",
  linkClass: "github"
}
