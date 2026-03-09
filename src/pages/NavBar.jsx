import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#1a1a1a] text-white">
      <h2 className="text-xl font-bold">ResumeAI</h2>
      <ul className="flex flex-row items-center gap-5 list-none">
        <Link to="./" className="hover:text-indigo-400 transition-colors">
          Home
        </Link>
        <Link
          to="./features"
          className="hover:text-indigo-400 transition-colors"
        >
          Features
        </Link>
        <Link
          to="./pricing"
          className="hover:text-indigo-400 transition-colors"
        >
          Pricing
        </Link>
        <Link
          to="./testimonials"
          className="hover:text-indigo-400 transition-colors"
        >
          Testimonials
        </Link>
        <Link
          to="./knowledge-grid"
          className="hover:text-indigo-400 transition-colors"
        >
          Knowledge
        </Link>
        <Link to="./login" className="hover:text-indigo-400 transition-colors">
          Login
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
