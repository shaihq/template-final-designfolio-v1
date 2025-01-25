import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Minimal from "./pages/Minimal";
import PortfolioEmptyState from "./pages/Portfolio-empty-state";
import MinimalEmptyState from "./pages/Minimal-empty-state";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/minimal" element={<Minimal />} />
        <Route path="/portfolio-empty-state" element={<PortfolioEmptyState />} />
        <Route path="/minimal-empty-state" element={<MinimalEmptyState />} />
      </Routes>
    </Router>
  );
}

export default App;