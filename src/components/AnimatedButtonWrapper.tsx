import { createStyles } from '@mantine/core';
import { motion } from 'framer-motion';

const useStyles = createStyles(() => ({
  animatedButton: {
    padding: '16px',
  },
}));

export const AnimatedButtonWrapper = ({ ...props }) => {
  const { classes } = useStyles();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={classes.animatedButton}
    >
      {props.children}
    </motion.div>
  );
};
