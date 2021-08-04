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
}

export const HERO: Hero = { 
  id: 'hero',
  tagline:  "hero works",
  emHeading:  "emphasis text",
  heading:  "text",
  listItems: [{ title: "Front-End Engineer."}, { title: "UX Promoter." }, { title: "Hobby Collector."}],  
}
