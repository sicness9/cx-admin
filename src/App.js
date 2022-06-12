import { useState } from "react";

// components
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

// styles
import { GlobalStyles } from "./GloblaStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";

function App() {
  const [themeState, setThemeState] = useState("light");

  return (
    <div>
      <ThemeProvider theme={themeState === "light" ? lightTheme : darkTheme}>
        <Header themeState={themeState} setThemeState={setThemeState} />
        <Main />
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;
