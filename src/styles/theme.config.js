export const themeConfig = {
  light: {
    palette: {
      mode: 'light',
      primary: {
        light: '#F8A1C4',
        main: '#D63484',
        dark: '#A61E5D',
      },
      background: {
        default: '#F0EBE3',
        paper: '#F5F0E9',
      },
      text: {
        primary: '#564E58',
        secondary: '#A195A2',
        contrast: '#FFFFFF',
      },
      divider: '#C5B1BC',
    },
    typography: {
      headline: {
        h1: {
          fontFamily: "'Arial', sans-serif",
          fontWeight: 'bold',
          fontSize: '96px',
          lineHeight: 1.2,
        },
      },
      heading: {
        h2: {
          fontFamily: "'Consolas', 'Courier New', monospace",
          fontWeight: 'bold',
          fontSize: '56px',
          lineHeight: 1.2,
        },
        h3: {
          fontFamily: "'Consolas', 'Courier New', monospace",
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: 1.2,
        },
        h4: {
          fontFamily: "'Consolas', 'Courier New', monospace",
          fontWeight: 'bold',
          fontSize: '32px',
          lineHeight: 1.2,
        },
      },
      body: {
        large: {
          fontFamily: "'Arial', sans-serif",
          fontWeight: 'normal',
          fontSize: '20px',
          lineHeight: 1.6,
        },
        regular: {
          fontFamily: "'Arial', sans-serif",
          fontWeight: 'normal',
          fontSize: '16px',
          lineHeight: 1.6,
        },
      },
      responsive: {
        mobile: {
          headline: { h1: { fontSize: '48px' } },
          heading: {
            h2: { fontSize: '40px' },
            h3: { fontSize: '32px' },
            h4: { fontSize: '24px' },
          },
          body: {
            large: { fontSize: '18px' },
            regular: { fontSize: '14px' },
          },
        },
        small: {
          headline: { h1: { fontSize: '36px' } },
          heading: {
            h2: { fontSize: '32px' },
            h3: { fontSize: '24px' },
            h4: { fontSize: '20px' },
          },
          body: {
            large: { fontSize: '16px' },
            regular: { fontSize: '14px' },
          },
        },
      },
    },
  },
  dark: {
    palette: {
      mode: 'dark',
      primary: {
        light: '#ff9bd2',
        main: '#D63484',
        dark: '#fde2e4',
      },
      background: {
        default: '#0a0a0f',
        paper: '#0f0a15',
      },
      text: {
        primary: '#F8F4EC',
        secondary: '#F8F4EC',
        contrast: '#FFFFFF',
      },
      divider: '#E6E6EB',
    },
    typography: {
     
      headline: {
        h1: {
          fontFamily: "'Arial', sans-serif",
          fontWeight: 'bold',
          fontSize: '96px',
          lineHeight: 1.2,
        },
      },
      heading: {
        h2: {
          fontFamily: "'Consolas', 'Courier New', monospace",
          fontWeight: 'bold',
          fontSize: '56px',
          lineHeight: 1.2,
        },
        h3: {
          fontFamily: "'Consolas', 'Courier New', monospace",
          fontWeight: 'normal',
          fontSize: '24px',
          lineHeight: 1.2,
        },
        h4: {
          fontFamily: "'Consolas', 'Courier New', monospace",
          fontWeight: 'bold',
          fontSize: '32px',
          lineHeight: 1.2,
        },
      },
      body: {
        large: {
          fontFamily: "'Arial', sans-serif",
          fontWeight: 'normal',
          fontSize: '20px',
          lineHeight: 1.6,
        },
        regular: {
          fontFamily: "'Arial', sans-serif",
          fontWeight: 'normal',
          fontSize: '16px',
          lineHeight: 1.6,
        },
      },
      responsive: {
        mobile: {
          headline: { h1: { fontSize: '48px' } },
          heading: {
            h2: { fontSize: '40px' },
            h3: { fontSize: '32px' },
            h4: { fontSize: '24px' },
          },
          body: {
            large: { fontSize: '18px' },
            regular: { fontSize: '14px' },
          },
        },
        small: {
          headline: { h1: { fontSize: '36px' } },
          heading: {
            h2: { fontSize: '32px' },
            h3: { fontSize: '24px' },
            h4: { fontSize: '20px' },
          },
          body: {
            large: { fontSize: '16px' },
            regular: { fontSize: '14px' },
          },
        },
      },
    },
  },
};


export const getTheme = (mode) => {
  return themeConfig[mode] || themeConfig.dark;
};

export const applyThemeVariables = (mode) => {
  const theme = getTheme(mode);
  const root = document.documentElement;

  root.style.setProperty('--color-primary-light', theme.palette.primary.light);
  root.style.setProperty('--color-primary-main', theme.palette.primary.main);
  root.style.setProperty('--color-primary-dark', theme.palette.primary.dark);
  root.style.setProperty('--color-background-default', theme.palette.background.default);
  root.style.setProperty('--color-background-paper', theme.palette.background.paper);
  root.style.setProperty('--color-text-primary', theme.palette.text.primary);
  root.style.setProperty('--color-text-secondary', theme.palette.text.secondary);
  root.style.setProperty('--color-text-contrast', theme.palette.text.contrast);
  root.style.setProperty('--color-divider', theme.palette.divider);

  if (mode === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};
