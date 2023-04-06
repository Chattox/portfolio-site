import { useMantineTheme } from '@mantine/core';

interface BindruneProps {
  height: string;
  width: string;
  strokeWidth: string;
  linecap?: 'butt' | 'round' | 'square' | undefined;
  corners?: 'round' | 'miter' | 'bevel' | undefined;
  className?: string;
}

export const Bindrune = ({
  height,
  width,
  strokeWidth,
  linecap,
  corners,
  className,
}: BindruneProps) => {
  const theme = useMantineTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      className={className}
    >
      <path
        id="Bindrune Logo"
        fill="none"
        stroke={theme.fn.primaryColor()}
        stroke-width={strokeWidth}
        strokeLinecap={linecap}
        strokeLinejoin={corners}
        d="M 512.00,960.00
           C 512.00,960.00 288.00,736.00 288.00,736.00
             288.00,736.00 512.00,512.00 512.00,512.00
             512.00,512.00 736.00,288.00 736.00,288.00
             736.00,288.00 512.00,64.00 512.00,64.00
             512.00,64.00 512.00,960.00 512.00,960.00M 512.00,736.00
           C 512.00,736.00 736.00,512.00 736.00,512.00
             736.00,512.00 512.00,288.00 512.00,288.00M 736.00,736.00
           C 736.00,736.00 512.00,512.00 512.00,512.00"
      />
    </svg>
  );
};
