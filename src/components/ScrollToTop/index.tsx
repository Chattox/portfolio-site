import { Affix, Container, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconChevronUp } from '@tabler/icons-react';
import { AnimatedButtonWrapper } from '../AnimatedButtonWrapper';
import { useStyles } from './index.styles';

export const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const { classes } = useStyles();
  return (
    <Affix position={{ bottom: '2rem', right: '50%' }}>
      <Transition transition="slide-up" mounted={scroll.y > 10}>
        {(transitionStyles) => (
          <Container style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
            <AnimatedButtonWrapper>
              <IconChevronUp size={64} className={classes.scrollButton} />
            </AnimatedButtonWrapper>
          </Container>
        )}
      </Transition>
    </Affix>
  );
};
