export interface LinkProps {
  url: string;
  icon: string;
  tooltip?: string;
}

export interface PortfolioProps {
  imgSrc: Record<string, string>;
  tags?: Array<string>;
  title: string;
  tagline?: string;
  description: string;
  links?: Array<LinkProps>;
  imageContain?: boolean;
  bgColor?: string;
}

export const portfolioData: Array<PortfolioProps> = [
  {
    imgSrc: { light: require('./images/slavbot.jpg'), dark: require('./images/slavbot.jpg') },
    tags: ['Discord', 'JS', 'Back-end'],
    title: 'Slavbot',
    tagline: 'Modular Discord bot',
    description: 'A modular, lightweight Discord bot with an easily expandable command structure',
    links: [
      {
        url: 'https://github.com/chattox/slavbot_v3',
        icon: 'github',
      },
    ],
    imageContain: false,
  },
  {
    imgSrc: {
      light: require('./images/helpinghand-logo.png'),
      dark: require('./images/helpinghand-logo.png'),
    },
    tags: ['Mobile', 'Dart', 'JS', 'Full-stack'],
    title: 'HelpingHand',
    tagline: 'Mobile app helping the vulnerable with their shopping',
    description: 'Cross-platform mobile app helping the elderly and vulnerable with their shopping',
    links: [
      {
        url: 'https://github.com/Chattox/helping-hand-backend',
        icon: 'github',
        tooltip: 'Back-end',
      },
      {
        url: 'https://github.com/Chattox/helping-hand-frontend',
        icon: 'github',
        tooltip: 'Front-end',
      },
      {
        url: 'https://www.youtube.com/watch?v=0aof27FyHCc',
        icon: 'youtube',
      },
    ],
    imageContain: true,
    bgColor: '#66BB6A',
  },
  {
    imgSrc: { light: require('./images/raddle.png'), dark: require('./images/raddle.png') },
    tags: ['Webapp', 'React', 'JS', 'Front-end'],
    title: 'Raddle',
    tagline: 'React-based Wordle clone',
    description: 'A Wordle clone built in React, because all the cool kids are doing it these days',
    links: [
      {
        url: 'https://github.com/chattox/raddle',
        icon: 'github',
      },
      {
        url: 'https://raddle.netlify.app',
        icon: 'play',
      },
    ],
    imageContain: true,
    bgColor: '#FFF',
  },
  {
    imgSrc: {
      light: require('./images/rainbow-fitbit.png'),
      dark: require('./images/rainbow-fitbit.png'),
    },
    tags: ['Fitbit', 'JS', 'Front-end'],
    title: 'Simple Rainbow',
    tagline: 'Custom Fitbit clockface',
    description:
      'Clean, simple, custom Fitbit clockface with time, date, battery % and real time heart rate display',
    links: [
      {
        url: 'https://github.com/chattox/fitbit-custom-clock-faces/tree/main/simple-rainbow',
        icon: 'github',
      },
      {
        url: 'https://gallery.fitbit.com/details/becef6eb-7fd3-4adb-a46c-9ada0287cf67',
        icon: 'fitbit',
      },
    ],
    imageContain: true,
    bgColor: '#000',
  },
  {
    imgSrc: { light: require('./images/mazegen.png'), dark: require('./images/mazegen.png') },
    tags: ['Webapp', 'Typescript', 'Python', 'Full-stack'],
    title: 'MazeGen',
    tagline: 'Configurable maze generator',
    description:
      'User configurable maze generator for all your dungeoning needs (dragons not included)',
    links: [
      {
        url: 'https://github.com/Chattox/MazeGen',
        icon: 'github',
        tooltip: 'Back-end',
      },
      {
        url: 'https://github.com/Chattox/MazeGen-FE',
        icon: 'github',
        tooltip: 'Front-end',
      },
      {
        url: 'https://chattox-mazegen.netlify.app',
        icon: 'play',
      },
    ],
    imageContain: true,
    bgColor: '#FFF',
  },
  {
    imgSrc: {
      light: require('./images/portfolio-light.png'),
      dark: require('./images/portfolio-dark.png'),
    },
    tags: ['React', 'Typescript', 'Front-end'],
    title: 'Portfolio',
    tagline: "What you're looking at right now!",
    description: "You're already looking at it, but you can check out the code too",
    links: [
      {
        url: 'https://github.com/Chattox/Chattox.github.io',
        icon: 'github',
      },
    ],
    imageContain: true,
  },
];
