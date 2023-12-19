import { Link } from "react-router-dom";
import "./DashBoardNav.css";

const DashBoardNav = () => {
  return (
    <div className="dashboard-nav">
      <ul>
        <li>
          <Link to="/contactus">Contact us</Link>
        </li>
        <li>
          <Link to="/faq">FAQs</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
      <button className="logout-btn">Log Out</button>
    </div>
  );
};

export default DashBoardNav;
