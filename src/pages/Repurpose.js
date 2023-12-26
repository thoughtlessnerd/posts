import DashBoardNav from "../components/DashBoardNav";
import LeftNav from "../components/LeftNav";
import "./Repurpose.css";

const Repurpose = () => {
  return (
    <div className="homepage">
      <DashBoardNav />
      <LeftNav />
      <main>
        <h1>Repurpose Content Into Posts</h1>

        <p>Craft Linkedin posts that answer your specific needs.</p>

        <div className="repurpose">
          <div className="select">
            <select>
              <option value="post1">Sakcham Singh</option>
              <option value="post2">Post 2</option>
              <option value="post3">Post 3</option>
            </select>
          </div>
          <button className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
            >
              <path
                d="M14.6837 2.60303C15.2047 1.94403 14.7137 1.00003 13.8477 1.00003H7.13169C6.94984 0.9987 6.7707 1.04418 6.61151 1.1321C6.45231 1.22001 6.31841 1.34741 6.22269 1.50203L1.14069 9.95803C0.739688 10.624 1.24369 11.455 2.04869 11.455H5.47769L2.24769 19.52C1.78069 20.54 3.04269 21.473 3.89069 20.735L16.9997 8.33103H10.1507L14.6837 2.60303Z"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Generate
          </button>
        </div>
      </main>
    </div>
  );
};

export default Repurpose;
