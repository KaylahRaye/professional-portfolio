export interface NavigationItem {
  label: string;
  href: string;
  highlighted?: boolean;
}

export interface LinkContent {
  label: string;
  href: string;
  external?: boolean;
}

export type ButtonVariant = 'primary' | 'secondary';

export interface ActionLinkContent extends LinkContent {
  variant: ButtonVariant;
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
  status: string;
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
    primaryAction: ActionLinkContent;
    secondaryAction: ActionLinkContent;
    focusLabel: string;
    focusAreas: string[];
    lensLabel: string;
    lensAreas: string[];
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
  contact: {
    label: string;
    heading: string;
    description: string;
    links: ActionLinkContent[];
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
      { label: 'Contact', href: '#contact', highlighted: true },
    ],
  },
  hero: {
    eyebrow: 'Software Engineering Manager | Frontend Technologist',
    name: 'Shikaylah Fewell',
    title: 'Building teams and digital experiences that help people thrive.',
    positioning: 'A technical people leader helping teams, systems, and emerging talent grow with clarity and care.',
    introduction:
      'I bring frontend craft, engineering leadership, and thoughtful coaching together to create reliable products, aligned teams, and clear execution.',
    primaryAction: { label: 'Explore my work', href: '#work', variant: 'primary' },
    secondaryAction: { label: 'Connect with me', href: '#contact', variant: 'secondary' },
    focusLabel: 'Focused on',
    focusAreas: ['Engineering leadership', 'Frontend systems', 'Delivery and coaching', 'AI-assisted workflows'],
    lensLabel: 'Leadership lens',
    lensAreas: ['Clarity', 'Care', 'Technical judgment', 'Sustainable execution'],
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
        status: 'Current Build',
        title: 'Professional Portfolio',
        description:
          'A Stencil and TypeScript landing page built to practice web component architecture while creating a polished professional home online.',
      },
      {
        category: 'Technical Leadership',
        status: 'In Exploration',
        title: 'AI-Assisted Workflow Experiments',
        description:
          'Exploring how AI, structured notes, and lightweight developer workflows can support knowledge management, planning, and technical leadership.',
      },
      {
        category: 'Thought Leadership',
        status: 'Forthcoming',
        title: 'Soul & Syntax',
        description:
          'A forthcoming writing space for reflections on code, culture, and calling.',
      },
    ],
  },
  contact: {
    label: 'Contact',
    heading: 'Let’s connect.',
    description:
      'If you are interested in engineering leadership, frontend craft, coaching, or thoughtful technical collaboration, I would be glad to hear from you.',
    links: [
      {
        label: 'Connect on LinkedIn',
        href: 'https://www.linkedin.com/in/shikaylahfewell/',
        external: true,
        variant: 'primary',
      },
    ],
    footer: 'Shikaylah Fewell | Technical leadership with clarity and care.',
  },
};
