import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Minimal from "./pages/Minimal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/minimal" element={<Minimal />} />
      </Routes>
    </Router>
  );
}

export default App;