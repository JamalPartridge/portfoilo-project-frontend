import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <h1>
        <Link to="/agents">Agents</Link>
      </h1>
      <button>
        <Link to="/agents/new">New Agent</Link>
      </button>
    </nav>
  );
}