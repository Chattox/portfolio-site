import helpingHand from '../../images/cards/helpinghand-logo.png';
import slavbot from '../../images/cards/slavbot.jpg';
import ncNews from '../../images/cards/nc-news.png';

export default [
  {
    title: 'Helping Hand',
    bgImage: `url(${helpingHand})`,
    link: 'https://www.youtube.com/watch?v=0aof27FyHCc',
    description:
      'Cross-platform mobile app helping the elderly and vulnerable with their shopping',
  },
  {
    title: 'Slavbot',
    bgImage: `url(${slavbot})`,
    link: 'https://github.com/Chattox/slavbot_v3',
    description:
      'A modular, lightweight Discord bot with an easily expandable command structure',
  },
  {
    title: 'NC News Front-end',
    bgImage: `url(${ncNews})`,
    link: 'https://github.com/Chattox/fe-nc-news',
    description: 'News aggregation front-end written in ReactJS',
  },
  {
    title: 'NC News Back-end',
    bgImage: `url(${ncNews})`,
    link: 'https://github.com/Chattox/nc-news',
    description: 'A RESTful news server back-end API',
  },
];
