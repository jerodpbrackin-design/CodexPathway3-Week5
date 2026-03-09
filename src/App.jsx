import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/NavBar";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";
import KnowledgeGrid from './pages/KnowledgeGrid';
import ProductLanding from "./pages/ProductLanding";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductLanding />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/login" element={<Login />} />
        <Route path="/knowledge-grid" element={<KnowledgeGrid />} />
      </Routes>
    </>
  );
}

export default App;
