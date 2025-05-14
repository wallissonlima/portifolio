import { Route, Routes, useLocation } from "react-router-dom";
import { Inicio } from "./src/pages/home";
import { Skills } from "./src/pages/skills";
import { Resume } from "./src/pages/resume";
import { Portfolio } from "./src/pages/portfolio";
import { Contact } from "./src/pages/contact";
import { About } from "./src/pages/about";

export function Router() {
  const location = useLocation();
  console.log(location);
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/protfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}
