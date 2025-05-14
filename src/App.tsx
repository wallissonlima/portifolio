import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../Router";
import { ParticlesPortfolio } from "./util/Particles";

function App() {
  const renderParticleJsinhomePage = location.pathname === "/";
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        {renderParticleJsinhomePage && <ParticlesPortfolio />}
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
