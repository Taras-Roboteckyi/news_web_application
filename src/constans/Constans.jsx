const MONTSERRAT = `'Montserrat'`;

export const Constants = {
  fonts: {
    $monts: MONTSERRAT,
  },

  fontSize: {
    montsSize: '12px',
    montsHeroSize: '16px',
  },

  lineHeight: {
    montsHeight: '1.2',
  },

  colors: {
    $white: '#FFFFFF',
    $blue: '#1E90FF',
    $blueDark: '#6495ED',
    $green: 'linear-gradient(180deg, #00DC4B 0%, #009231 100%)',
    $red: 'linear-gradient(180deg, #E70000 0%, #B70000 100%)',
    $violet: 'linear-gradient(180deg, #BD00FF 0%, #74009C 100%)',
    $lightGrey: '#B4B4B4',
    $black: '#000000',
  },

  spacing: value => `${4 * value}px`,

  options: {
    radius: '5px',
    buttonShadow: `-5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5)`,
    dropShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    gradient: ' linear-gradient(180deg, #5a8fff 0%, #003094 100%)',
  },

  breakpoints: {
    desktop: '1280px',
    tablet: '768px',
    mobile: '320px',
  },
};
