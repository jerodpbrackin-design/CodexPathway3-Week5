import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/NavBar";
import Hero from "./pages/Hero"; // Fixed the leading space herees";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";
import ProductCard from './pages/ProductCard';
import KnowledgeGrid from './pages/KnowledgeGrid';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<ProductCard />} />
        <Route path="/knowledgeGrid" element={<KnowledgeGrid />} />
      </Routes>
    </>
  );
}

export default App;
