// NavBar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    /* .navbar: flex, justify-between, bg-dark */
    <nav className="flex justify-between items-center px-8 py-4 bg-[#1a1a1a] text-white">
      <h2 className="text-xl font-bold">ResumeAI</h2>
      
      {/* ul & li: flex-row, gap, no-bullets */}
      <ul className="flex flex-row items-center gap-5 list-none">
        <Link to="./Features" className="hover:text-indigo-400 transition-colors">Features</Link>
        <Link to="./Pricing" className="hover:text-indigo-400 transition-colors">Pricing</Link>
        <Link to="./Testimonials" className="hover:text-indigo-400 transition-colors">Testimonials</Link>
        <Link to="./Login" className="hover:text-indigo-400 transition-colors">Login</Link>
        <Link to="./product" className="hover:text-indigo-400 transition-colors">Product</Link> 
        <Link to="./knowledgeGrid" className="hover:text-indigo-400 transition-colors">Knowledge</Link>
      </ul>
    </nav>
  );
}

export default Navbar;