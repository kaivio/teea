
export default  myTheme = {
  useCustomProperties: true,
  useColorSchemeMediaQuery: true,
  fonts: {
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
    heading: "inherit",
  },
  fontSizes: [16, 18, 20, 24, 30, 36, 40, 48, 64, 72, 96],
  fontWeights: {
    lite: 200,
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  colors: {
    primary: "#50ad9c",
    secondary: "#d0824b",
    background: "#eed0b3",
    text: "#6c7c8a",
    textLite: '#91a7ba',
    link:'#df7e88',
    blue: "#6ec4ec",
    cyan: "#77cad8",
    gray: "#ccad91",
    green: "#a7cda2",
    purple: "#c1b6ec",
    orange: "#fcb36d",
    pink: "#f3d0d4",
    red: "#efb1b2",
    white: "#fff",
    yellow: "#fde9bb",
    lite: "#e9ebd5",
    selection:'#b9a38d77',
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        lite: "#333",
      },
    },
  },
  buttons: {
    primary: {
      color: 'lite',
      bg: 'primary',
      borderColor: 'primary',
      '&:hover': {
        color: 'lite',
        bg: 'green',
        borderColor: 'primary',
      }
    },
    secondary: {
      color: 'yellow',
      bg: 'secondary',
      '&:hover': {
        bg: 'orange',
        borderColor: 'orange',
      }
    },
    disable: {
      bg:'lite',
      color:'textLite'
    },
    link: {
      bg:'transparent',
      color: 'link',
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderColor: 'text',
      '&:focus': {
        borderColor: 'secondary',
        outline: 'none',
      },
    },
    select: {
      borderColor: 'text'
    },
    textarea: {
      borderColor: 'text',
      '&:focus': {
        borderColor: 'secondary',
        boxShadow: t => `0 0 0 1px ${t.colors.secondary}`,
        outline: 'none',
      },
    },
    slider: {
      color:"text",
      '&:focus': {
        color:'secondary'
      },
    }
  },
  styles: {
    spinner: {
      color: 'red',
    },
  },
  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '.2em',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    display: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontSize: [6, 7, 8],
      fontWeight: 'display',
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128],
  breakpoints: ["32em", "48em", "64em", "80em"],
  radii: [0, 3, 6],
  shadows: {
    card: "0 0 4px rgba(0, 0, 0, .125)",
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
  },
}
