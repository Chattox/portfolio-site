import { Affix, Container, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowBigUpLinesFilled } from '@tabler/icons-react';
import { AnimatedButtonWrapper } from '../AnimatedButtonWrapper';
import { useStyles } from './index.styles';

interface ScrollToTopProps {
  triggerPoint: number;
  bottom?: string | number;
  right?: string | number;
  left?: string | number;
  top?: string | number;
}

export const ScrollToTop = ({ triggerPoint, bottom, right, left, top }: ScrollToTopProps) => {
  const [scroll, scrollTo] = useWindowScroll();
  const { classes } = useStyles();
  return (
    <Affix position={{ bottom: bottom, right: right, left: left, top: top }}>
      <Transition transition="slide-up" mounted={scroll.y > triggerPoint}>
        {(transitionStyles) => (
          <Container style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
            <AnimatedButtonWrapper>
              <IconArrowBigUpLinesFilled size={48} className={classes.scrollButton} />
            </AnimatedButtonWrapper>
          </Container>
        )}
      </Transition>
    </Affix>
  );
};
