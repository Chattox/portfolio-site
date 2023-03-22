import { Parallax } from 'react-parallax';

export const ExperienceBackground = (props: { children: React.ReactNode }) => {
  return (
    <Parallax bgImage={require('../images/moon-splash-light.jpg')} strength={2000}>
      {props.children}
    </Parallax>
  );
};
