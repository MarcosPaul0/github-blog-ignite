import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./themes/defaultTheme";
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}
