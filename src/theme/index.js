import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: '"Bai Jamjuree", sans-serif',
    },
  },
});

//For dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1F2336",
      white: "#ffffff",
      semiWhite: "#b2b2b4",
      active: "#797FFF",
      icon: "#72799B",
      cardBg: "#25293D",
      border: "#2B3046",
      border2: "#85858585",
      grid: "#2B3046",
    },
    background: {
      main: "#1F2336",
      btnBg: "#313852",
      listItemBg: "#313852",
      inputBg: "#40405647",
      inputLabelBg: "#535b79",
      accordionBgColor: "#2F3349"
    },
    text: {
      white: "#ffffff",
      semiWhite: "#b2b2b4",
      default: "#666D8D",
      placeholder: "#666D8D",
      selectedItem: "#5a5a5ab5",
      activeTab: "#ffffff",
      inputLabelColor: "#fff",
    },
    table: {
      borderColor: "#797FFF",
      headerBgColor: "#797FFF",
    },
    
  },
});

//For light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F7FAFF",
      white: "#0D175D",
      semiWhite: "#333335",
      active: "#797FFF",
      icon: "#72799B",
      cardBg: "#FFFFff",
      border: "#ACACAC29",
      border2: "#aca9a9a8",
      grid: "#E5E5E5",
    },
    background: {
      main: "#F7FAFF",
      btnBg: "#313852",
      listItemBg: "#ffffff",
      inputBg: "#dedeef42",
      inputLabelBg: "#d3d9f2",
      accordionBgColor: "#fff"
    },
    text: {
      white: "#0D175D",
      semiWhite: "#55555dd9",
      default: "#B7BAD1",
      placeholder: "#B7BAD1",
      selectedItem: "#5a5a5ab5",
      activeTab: "#797FFF",
      inputLabelColor: "#444b7b",
    },
    table: {
      borderColor: "#85858585",
      headerBgColor: "#797FFF",
    },
    
  },
});
