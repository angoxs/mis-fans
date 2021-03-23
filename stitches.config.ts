import { createCss } from '@stitches/react';


export const { styled, css, global, keyframes, getCssString } = createCss({
    theme: {
        fonts: {
            system: 'system-ui',
          },
          colors: {
            hiContrast: 'hsl(206,10%,5%)',
            loContrast: 'white',
          },
          fontSizes: {
            1: '13px',
            2: '15px',
            3: '17px',
          },
    },
    media: {
      'bp1': '(max-width: 640px)',
      'bp2': '(max-width: 768px)',
      'bp3': '(max-width: 1024px)',
    },
    utils: {},
    prefix: '',
    // insertionMethod: 'append | prepend ',
    // themeMap: '',
  });

