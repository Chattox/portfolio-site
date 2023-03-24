import { Stack } from '@mantine/core';
import { ExperienceBackground } from '../../components/experience/ExperienceBackground';
import { ExperienceItem } from '../../components/experience/ExperienceItem/ExperienceItem';
import { expItemData } from '../../components/experience/ExperienceItem/expItemData';

export const Experience = () => {
  return (
    <ExperienceBackground>
      <Stack align="center" justify="flex-start">
        {expItemData.map((item, i) => {
          return (
            <ExperienceItem
              side={i % 2 === 0 ? 'left' : 'right'}
              imgSrc={item.imgSrc}
              title={item.title}
              content={item.content}
              dates={item.dates}
            />
          );
        })}
      </Stack>
    </ExperienceBackground>
  );
};
