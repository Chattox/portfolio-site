import { ExperienceBackground } from '../../components/experience/ExperienceBackground';
import {
  ExperienceItem,
  ExperienceItemProps,
} from '../../components/experience/ExperienceItem/ExperienceItem';

const expItemData: Array<ExperienceItemProps> = [
  {
    side: 'right',
    title: 'Umami bomb',
    content: 'Chef speak for "mushroom"',
  },
  {
    side: 'left',
    title: 'Umami bomb',
    content: 'Chef speak for "mushroom"',
  },
];

export const Experience = () => {
  return (
    <ExperienceBackground>
      {expItemData.map((item) => {
        return (
          <ExperienceItem
            side={item.side}
            imgSrc={item.imgSrc}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </ExperienceBackground>
  );
};
