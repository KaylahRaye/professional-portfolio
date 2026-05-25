export interface NavigationItem {
  label: string;
  href: string;
}

export interface LinkContent {
  label: string;
  href: string;
  external?: boolean;
}

export interface CardContent {
  title: string;
  description: string;
}

export interface ExperienceHighlight extends CardContent {
  detail: string;
}

export interface ProjectContent extends CardContent {
  category: string;
  link?: LinkContent;
}

export interface ProfileContent {
  brand: {
    name: string;
    descriptor: string;
    homeLabel: string;
    navigationLabel: string;
    navigation: NavigationItem[];
  };
  hero: {
    eyebrow: string;
    name: string;
    title: string;
    positioning: string;
    introduction: string;
    primaryAction: LinkContent;
    secondaryAction: LinkContent;
    focusLabel: string;
    focusAreas: string[];
  };
  about: {
    label: string;
    heading: string;
    paragraphs: string[];
    statement: string;
  };
  whatIDo: {
    label: string;
    heading: string;
    introduction: string;
    services: CardContent[];
  };
  experience: {
    label: string;
    heading: string;
    introduction: string;
    highlights: ExperienceHighlight[];
  };
  projects: {
    label: string;
    heading: string;
    introduction: string;
    items: ProjectContent[];
  };
  writing: {
    label: string;
    heading: string;
    publication: string;
    description: string;
    status: string;
    link?: LinkContent;
  };
  contact: {
    label: string;
    heading: string;
    description: string;
    links: LinkContent[];
    footer: string;
  };
}

export const profileContent: ProfileContent = {
  brand: {
    name: 'Shikaylah Fewell',
    descriptor: 'Technical People Leader',
    homeLabel: 'Shikaylah Fewell, home',
    navigationLabel: 'Primary navigation',
    navigation: [
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#work' },
      { label: 'Projects', href: '#projects' },
      { label: 'Writing', href: '#writing' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  hero: {
    eyebrow: 'Software Engineering Manager | Frontend Technologist',
    name: 'Shikaylah Fewell',
    title: 'Building teams and digital experiences that help people thrive.',
    positioning: 'A technical people leader helping teams, systems, and emerging talent grow with clarity and care.',
    introduction:
      'I bring frontend craft, engineering leadership, and thoughtful coaching together to create reliable products, aligned teams, and clear execution.',
    primaryAction: { label: 'Explore my work', href: '#work' },
    secondaryAction: { label: 'Connect with me', href: '#contact' },
    focusLabel: 'Focused on',
    focusAreas: ['Engineering leadership', 'Frontend systems', 'Delivery and coaching'],
  },
  about: {
    label: 'About',
    heading: 'Technical leadership with a human point of view.',
    paragraphs: [
      'I am a software engineering manager and frontend technologist who cares about how well-made systems enable people to do their best work.',
      'My approach pairs technical clarity with deliberate coaching, inclusive team practices, and communication that makes complexity approachable.',
      'I bring curiosity and rigor to planning, risk, delivery, and thoughtful AI-assisted workflows that help teams work with greater clarity.',
    ],
    statement: 'Good engineering leadership creates room for quality, growth, and belonging.',
  },
  whatIDo: {
    label: 'What I Do',
    heading: 'Leadership grounded in craft.',
    introduction:
      'I work where engineering practice, people development, and clear product experiences meet.',
    services: [
      {
        title: 'Technical Leadership',
        description:
          'Guide teams through sound frontend decisions, sustainable systems, and execution shaped by quality and purpose.',
      },
      {
        title: 'People Leadership',
        description:
          'Coach engineers, cultivate trust, and build team environments where feedback and growth are part of the work.',
      },
      {
        title: 'Frontend Experience',
        description:
          'Champion accessible, maintainable user interfaces that balance polished design with resilient implementation.',
      },
      {
        title: 'Delivery and Clarity',
        description:
          'Surface risk early, communicate priorities clearly, and support steady execution through change and complexity.',
      },
    ],
  },
  experience: {
    label: 'Experience Highlights',
    heading: 'A practice built across people, products, and execution.',
    introduction:
      'My work is centered on bringing technical judgment and thoughtful leadership to meaningful challenges.',
    highlights: [
      {
        title: 'Engineering Management',
        detail: 'Team health and delivery',
        description:
          'Leading engineering teams with an emphasis on alignment, steady execution, career growth, and sustainable collaboration.',
      },
      {
        title: 'Frontend Engineering',
        detail: 'Interfaces and systems',
        description:
          'Applying frontend expertise to create clear experiences and component practices that scale with product needs.',
      },
      {
        title: 'Delivery Leadership',
        detail: 'Risk and clarity',
        description:
          'Bringing structure to planning, surfacing delivery risks, and communicating clearly across technical and stakeholder conversations.',
      },
    ],
  },
  projects: {
    label: 'Featured Projects',
    heading: 'Current work and thoughtful experiments.',
    introduction:
      'Selected work that reflects my interests in frontend architecture, technical leadership, and considered ways of working.',
    items: [
      {
        category: 'Frontend Engineering',
        title: 'Professional Portfolio',
        description:
          'A Stencil and TypeScript landing page built to practice web component architecture while creating a polished professional home online.',
      },
      {
        category: 'Technical Leadership',
        title: 'AI-Assisted Workflow Experiments',
        description:
          'Exploring how AI, structured notes, and lightweight developer workflows can support knowledge management, planning, and technical leadership.',
      },
      {
        category: 'Forthcoming Writing',
        title: 'Soul & Syntax',
        description:
          'A forthcoming writing space for reflections on code, culture, and calling.',
        link: { label: 'Writing details', href: '#writing' },
      },
    ],
  },
  writing: {
    label: 'Writing',
    heading: 'Soul & Syntax',
    publication: 'A forthcoming writing space for reflections on code, culture, and calling.',
    description:
      'Soul & Syntax will be a home for personal and professional writing shaped by curiosity about engineering, teams, and meaningful work.',
    status: 'Forthcoming - external link to come',
  },
  contact: {
    label: 'Contact',
    heading: 'Let us connect.',
    description:
      'Interested in engineering leadership, frontend work, coaching, delivery, or thoughtful technical collaboration? I would be glad to connect.',
    links: [
      {
        label: 'LinkedIn placeholder',
        href: 'https://www.linkedin.com/',
        external: true,
      },
      {
        label: 'Email placeholder',
        href: 'mailto:hello@kaylahraye.com',
      },
    ],
    footer: 'Shikaylah Fewell | Technical leadership with clarity and care.',
  },
};
