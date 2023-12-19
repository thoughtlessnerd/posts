import DashBoardNav from "../components/DashBoardNav";
import LeftNav from "../components/LeftNav";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div class="homepage">
      <DashBoardNav />
      <LeftNav />
      <main></main>
    </div>
  );
};

export default HomePage;
