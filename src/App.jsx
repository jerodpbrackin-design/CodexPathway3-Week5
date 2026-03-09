import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/NavBar";
import Features from "./pages/Features";
import Login from "./pages/Login";
import KnowledgeCards from './pages/KnowledgeCards';
import ProductLanding from "./pages/ProductLanding";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductLanding />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/knowledge-cards" element={<KnowledgeCards />} />
      </Routes>
    </>
  );
}

export default App;
