import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import PortfolioEmpty from "./pages/PortfolioEmpty";
import Index from "./pages/Index";
import Minimal from "./pages/Minimal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-empty" element={<PortfolioEmpty />} />
        <Route path="/minimal" element={<Minimal />} />
      </Routes>
    </Router>
  );
}

export default App;