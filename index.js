// standard ANSI Colours
const black = '#000000';
const red = '#ff2600';
const green = '#b7fa34ff';
const yellow = '#ffe500';
const blue = '#00d6ffff';
const magenta = '#ff308fff';
const cyan = '#00c5c7';
const white = '#f8f8f2ff';
const lightBlack = '#557da0';
const lightRed = '#ff0000';
const lightGreen = '#33ff00';
const lightYellow = '#ffff00';
const lightBlue = '#1478DB';
const lightMagenta = '#cc00ff';
const lightCyan = '#00ffff';
const lightWhite = '#ffffff';

// custom colours
const monokaiCobaltBlue = '#2d3b45';

exports.decorateConfig = config =>
  Object.assign({}, config, {
    cursorColor: yellow,
    foregroundColor: white,
    backgroundColor: monokaiCobaltBlue,
    borderColor: 'rgba(255,255,255,0.1)',
    selectionColor: '#485e6b',
    css: `
    ${config.css || ''}
    .tab_active {
      background: #485e6d;
      border-bottom: 1px solid ${yellow} !important;
      border-color: ${yellow};
    }

    .tabs_nav {
      border-bottom: 1px solid rgba(255,255,255,0.1)  !important;
    }
  `,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed,
      lightGreen,
      lightYellow,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite,
    },
  });