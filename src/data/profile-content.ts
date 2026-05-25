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
    link: LinkContent;
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
      'I bring frontend craft, engineering leadership, and meaningful mentorship together to create thoughtful products and stronger pathways into technology.',
    primaryAction: { label: 'Explore my work', href: '#work' },
    secondaryAction: { label: 'Connect with me', href: '#contact' },
    focusLabel: 'Focused on',
    focusAreas: ['Engineering leadership', 'Frontend systems', 'Mentorship and access'],
  },
  about: {
    label: 'About',
    heading: 'Technical leadership with a human point of view.',
    paragraphs: [
      'I am a software engineering manager and frontend technologist who cares about how well-made systems enable people to do their best work.',
      'My approach pairs technical clarity with deliberate coaching, inclusive team practices, and communication that makes complexity approachable.',
      'My pathway into technology shapes how I lead and advocate: with curiosity, rigor, and a commitment to widening access for the talent coming next.',
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
        title: 'Mentorship and Advocacy',
        description:
          'Support emerging talent and create practical, welcoming pathways toward opportunity in technology.',
      },
    ],
  },
  experience: {
    label: 'Experience Highlights',
    heading: 'A practice built across people, products, and possibility.',
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
        title: 'Community Investment',
        detail: 'Mentorship and tech access',
        description:
          'Extending leadership beyond product delivery through education, mentorship, and initiatives that open doors.',
      },
    ],
  },
  projects: {
    label: 'Featured Projects',
    heading: 'Work with purpose beyond the roadmap.',
    introduction:
      'Selected initiatives that reflect my interest in access, learning, and honest conversations about technology.',
    items: [
      {
        category: 'Tech Access Initiative',
        title: 'Tech in Bloom',
        description:
          'An initiative focused on helping emerging talent find community, confidence, and practical pathways into technology.',
      },
      {
        category: 'Writing Platform',
        title: 'Soul & Syntax',
        description:
          'A space for writing about technical leadership, growth, identity, and building a career with intention.',
        link: { label: 'Writing details', href: '#writing' },
      },
      {
        category: 'Mentorship',
        title: 'Emerging Talent Support',
        description:
          'Coaching and advocacy work that helps early-career technologists navigate learning, opportunity, and belonging.',
      },
    ],
  },
  writing: {
    label: 'Writing',
    heading: 'Soul & Syntax',
    publication: 'Essays on leadership, technology, and growth.',
    description:
      'Thoughtful writing for technologists and leaders who want to build strong systems while staying connected to the people inside them.',
    status: 'Future home on Substack',
    link: {
      label: 'Visit Substack placeholder',
      href: 'https://substack.com/',
      external: true,
    },
  },
  contact: {
    label: 'Contact',
    heading: 'Let us connect.',
    description:
      'Interested in engineering leadership, frontend work, mentorship, speaking, or building more equitable paths into tech? I would be glad to connect.',
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
