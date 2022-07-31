import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";

import "./App.css";
import Home from "./components/Home";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#93D7AF",
        main: "#27AE60",
        dark: "#157b40",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#EB5757",
        dark: "#ba000d",
        contrastText: "#000",
      },
      info: {
        main: "#FFF",
        light: "#F0F",
        dark: "0FF",
        contrastText: "#FFF",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
