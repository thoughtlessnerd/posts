import { Link } from "react-router-dom";
import "./leftNav.css";

const LeftNav = () => {
  return (
    <nav className="leftNav">
      <ul>
        <li>
          <button>Write a post</button>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/status">My Status</Link>
        </li>
        <li>
          <Link to="/queue">My Queue</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftNav;
