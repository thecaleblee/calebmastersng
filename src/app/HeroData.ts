// Not exactly using this correctly yet
export interface Hero {
  id: string;
  tagline: string;
  emHeading: string;
  heading: string;
  listItems: Array<string>;
}

export const HERO = { 
  id: 'hero',
  tagline:  "hero works",
  emHeading:  "emphasis text",
  heading:  "text",
  listItem: [{ title: "Front-End Engineer."}, { title: "UX Promoter." }, { title: "Hobby Collector."}],  
}
