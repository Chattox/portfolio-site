import { Global } from '@mantine/core';

export const PortfolioGlobalStyles = () => {
  return (
    <Global
      styles={(theme) => ({
        '*::-webkit-scrollbar': {
          width: '10px',
        },
        '*::-webkit-scrollbar-track': {
          backgroundColor: theme.colorScheme === 'light' ? theme.white : theme.black,
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor:
            theme.colorScheme === 'light' ? theme.colors.gray[4] : theme.colors.gray[7],
          borderRadius: '8px',
        },
      })}
    />
  );
};
