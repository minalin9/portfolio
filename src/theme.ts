import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    notepad?: {
      primary?: { main?: string };
      background?: { default?: string };
    };
  }
  interface PaletteOptions {
    notepad?: {
      primary?: { main?: string };
      background?: { default?: string };
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#34A446",
      light: "#64BA72",
      dark: "#197B35",
    },
    secondary: {
      main: '#757575',
      light: '#a4a4a4',
      dark: '#494949',
    },
    notepad: {
      primary: {
        main: "#20B72F",
      },
      background: {
        default: "#FAF9F7",
      },
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {},
        shrink: {
          transform: "none",
          display: "none",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "none",
          },
          "&:hover:before": {
            borderBottom: "none",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: 0,
          transition: "none",
          "&:before, &:after": { backgroundColor: "transparent" },
          "&:hover": {
            backgroundColor: "transparent",
            transition: "none",
          },
        },
      },
    },
    // filled input은 내용용
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          "&:before, &:after": { backgroundColor: "transparent" },
          "&:hover, &:focus": {
            backgroundColor: "transparent",
            "&:before, &:hover:before, &:focus:before,&:after,&:hover:after,&:focus:after":
              {
                backgroundColor: "transparent",
                borderBottom: "none",
              },
          },
          fontSize: "16px",
          padding: 0,
          lineHeight: "34px",
        },
        underline: {
          "&:before,&:hover:before,&:focus:before,&:after,&:hover:after,&:focus:after":
            {
              borderBottom: "none",
            },
        },
      },
    },
    // outlined input은 제목용
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: 0,
          height: "34px",
          fontSize: "24px",
          fontWeight: 700,
        },
        notchedOutline: {
          border: "none",
        },
      },
    },
  },
  typography: {
    fontSize: 16,
    h1: {
      fontWeight: "bold",
      fontSize: 24,
    },
    h2: {
      fontSize: 18,
    },
    h3: {
      fontSize: 16,
    },
    h4: {
      fontSize: 14,
      lineHeight:'18px',
    },
    h5:{
      fontSize: 12,
      lineHeight:'18px',
    },
    body1: {
      fontSize: 14,
      lineHeight:'18px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280,
    },
  },
});

export default theme;
