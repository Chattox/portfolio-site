import { PortfolioCardProps } from '.';

export const cardData: Array<PortfolioCardProps> = [
  {
    cardImgSrc: require('./images/slavbot.jpg'),
    tags: ['Discord', 'JS', 'Back-end'],
    title: 'Slavbot',
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
    cardImgSrc: require('./images/helpinghand-logo.png'),
    tags: ['Mobile', 'Dart', 'JS', 'Full-stack'],
    title: 'HelpingHand',
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
    cardImgSrc: require('./images/raddle.png'),
    tags: ['Webapp', 'React', 'JS', 'Front-end'],
    title: 'Raddle',
    description: 'A World clone built in React, because all the cool kids are doing it these days',
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
    cardImgSrc: require('./images/rainbow-fitbit.png'),
    tags: ['Fitbit', 'JS', 'Front-end'],
    title: 'Simple Rainbow',
    description:
      'Clean, simple, custom Fitbit clockface with time, date, battery % and real time heart rate display',
    links: [
      {
        url: 'https://github.com/chattox/fitbit-custom-clock-faces/tree/main/simple-rainbow',
        icon: 'github',
      },
    ],
    imageContain: true,
    bgColor: '#000',
  },
  {
    cardImgSrc: require('./images/mazegen.png'),
    tags: ['Webapp', 'Typescript', 'Python', 'Full-stack'],
    title: 'MazeGen',
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
];
