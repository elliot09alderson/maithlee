import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, logout }) => {
  return (
    <nav>
      <Link to="/">Home Ojsav </Link> |<Link to="/about">About Feature</Link> |
      {isAuthenticated ? (
        <>
          <Link to="/dashboard">Dashboard</Link> |
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
