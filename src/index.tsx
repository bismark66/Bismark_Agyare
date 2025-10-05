import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Portfolio } from "./screens/PortoflioDark/Portfolio";
import { ThemeProvider } from "./contexts/ThemeContext";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  </StrictMode>,
);
