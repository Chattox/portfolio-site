import { useParallax } from 'react-scroll-parallax';
import {
  ScrollArea,
  Title,
  BackgroundImage,
  Container,
  useMantineColorScheme,
} from '@mantine/core';

export const Experience = () => {
  const parallax = useParallax<HTMLDivElement>({
    speed: -20,
  });
  const { colorScheme } = useMantineColorScheme();

  return (
    <ScrollArea type="hover" h="100vh">
      <BackgroundImage
        ref={parallax.ref}
        src={
          colorScheme === 'light'
            ? require('../../images/moon-splash-light.jpg')
            : require('../../images/moon-splash-dark.jpg')
        }
      >
        <Container h="2828px">
          <Title>ME SMASH KEYBOARD LONG TIME MAKE COMPUTER THINK</Title>
        </Container>
      </BackgroundImage>
    </ScrollArea>
  );
};
