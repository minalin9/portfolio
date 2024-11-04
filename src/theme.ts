import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    notepad?: {
      primary?: { main?: string };
      background?: { default?: string };
    };
    crochet?: {
      primary?: {
        main?: string;
        light?: string;
        dark?: string;
        red?: string;
        pink?: string;
        violet?: string;
        blue?: string;
        green?: string;
      };
      background?: { default?: string };
    };
  }
  interface PaletteOptions {
    notepad?: {
      primary?: { main?: string };
      background?: { default?: string };
    };
    crochet?: {
      primary?: {
        main?: string;
        light?: string;
        dark?: string;
        red?: string;
        pink?: string;
        purple?: string;
        blue?: string;
        aqua?: string;
        green?: string;
        yellow?: string;
        lightYellow?: string;
        beige?: string;
      };
      background?: { default?: string };
    };
  }
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#57AF57",
      light: "#92d192",
      dark: "#477F47",
    },
    secondary: {
      main: "#777c85",
      light: "#b3b9c5",
      dark: "#2d2d2d",
    },
    notepad: {
      primary: {
        main: "#57AF57",
      },
      background: {
        default: "#FAF9F7",
      },
    },
    crochet: {
      primary: {
        main: "#FF7B15",
        light: "#fca369",
        dark: "#DB550E",
        red: "#f2777a",
        pink: "#F38AB4",
        purple: "#e1a6f2",
        blue: "#6AB0F3",
        aqua: "#76d4d6",
        green: "#92d192",
        yellow: "#ffd479",
        lightYellow: "#ffeea6",
        beige: "#ac8d58",
      },
      background: {
        default: "#FAF7F7",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#ffd479",
          },
        },
        contained: {
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        },
      },
    },
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
      lineHeight: "18px",
    },
    h5: {
      fontSize: 12,
      lineHeight: "18px",
    },
    body1: {
      fontSize: 14,
      lineHeight: "18px",
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
