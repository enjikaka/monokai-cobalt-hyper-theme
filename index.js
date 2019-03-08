// standard ANSI Colours
const black = '#000000';
const red = '#f92e8a'; // Keyword
const green = '#b7fa34'; // Class name
const yellow = '#ffe500'; // String
const blue = '#00d6ff'; // Function name
const magenta = '#d947ff'; // Number, constant
const cyan = blue; // Function argument
const white = '#f8f8f0';
const lightBlack = black;
const lightRed = '#ff308f';
const lightGreen = green;
const lightYellow = yellow;
const lightBlue = '#fd971f'; // (Actually orange)
const lightMagenta = magenta;
const lightCyan = cyan;
const lightWhite = '#f8f8f2';

// Custom colours
const monokaiCobalt = '#2d3b45';
const monokaiCobaltLineHighlight = 'rgb(72, 94, 107, 0.5)';

exports.decorateConfig = config =>
  Object.assign({}, config, {
    cursorColor: yellow,
    foregroundColor: 'rgba(255,255,255,0.8)',
    backgroundColor: monokaiCobalt,
    borderColor: 'rgba(255,255,255,0.1)',
    selectionColor: monokaiCobaltLineHighlight,
    css: `
    ${config.css || ''}
    .tab_active {
      background: #485e6d;
      border-bottom: 1px solid ${magenta} !important;
      border-color: ${magenta};
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