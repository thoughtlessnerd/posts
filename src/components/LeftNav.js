import { Link } from "react-router-dom";
import "./leftNav.css";

const LeftNav = ({ setRightSliderVisible }) => {
  return (
    <nav className="leftNav">
      <ul>
        <li>
          <button onClick={() => setRightSliderVisible(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.8045 1.1154C18.3591 0.670091 17.7551 0.419922 17.1253 0.419922C16.4955 0.419922 15.8914 0.670091 15.446 1.1154L14.3992 2.16222L17.7577 5.5207L18.8045 4.47389C19.2498 4.0285 19.5 3.42447 19.5 2.79465C19.5 2.16483 19.2498 1.56079 18.8045 1.1154ZM16.7978 6.48066L13.4393 3.12217L2.44638 14.1151C1.888 14.6732 1.47754 15.3616 1.25209 16.1182L0.528278 18.5475C0.493333 18.6647 0.490726 18.7892 0.520735 18.9078C0.550744 19.0264 0.612251 19.1347 0.698749 19.2212C0.785248 19.3077 0.89352 19.3692 1.01211 19.3992C1.1307 19.4292 1.25519 19.4266 1.37242 19.3916L3.80172 18.6678C4.5583 18.4424 5.24677 18.0319 5.80486 17.4735L16.7978 6.48066Z"
                fill="white"
              />
            </svg>
            Write a post
          </button>
        </li>
        <li className="active">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M15.6689 7.79626L8.3992 0.531901C8.34686 0.479455 8.28468 0.437847 8.21624 0.409457C8.1478 0.381068 8.07443 0.366455 8.00033 0.366455C7.92623 0.366455 7.85286 0.381068 7.78442 0.409457C7.71598 0.437847 7.6538 0.479455 7.60146 0.531901L0.331803 7.79626C0.120014 8.00805 0 8.29573 0 8.59577C0 9.21878 0.506529 9.72531 1.12954 9.72531H1.89551V14.9088C1.89551 15.2212 2.14789 15.4736 2.46028 15.4736H6.87079V11.5202H8.84749V15.4736H13.5404C13.8528 15.4736 14.1052 15.2212 14.1052 14.9088V9.72531H14.8711C15.1712 9.72531 15.4588 9.60706 15.6706 9.39351C16.1101 8.95228 16.1101 8.23749 15.6689 7.79626Z"
                fill="#F3F3F3"
              />
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link to="/status">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
            >
              <path
                d="M1.14286 0.205566H6.85714C7.16025 0.205566 7.45094 0.325974 7.66527 0.540302C7.87959 0.754629 8 1.04532 8 1.34842C8 1.65153 7.87959 1.94222 7.66527 2.15655C7.45094 2.37087 7.16025 2.49128 6.85714 2.49128H1.14286C0.839753 2.49128 0.549062 2.37087 0.334735 2.15655C0.120408 1.94222 0 1.65153 0 1.34842C0 1.04532 0.120408 0.754629 0.334735 0.540302C0.549062 0.325974 0.839753 0.205566 1.14286 0.205566ZM9.14286 9.34842H14.8571C15.1602 9.34842 15.4509 9.46883 15.6653 9.68316C15.8796 9.89749 16 10.1882 16 10.4913C16 10.7944 15.8796 11.0851 15.6653 11.2994C15.4509 11.5137 15.1602 11.6341 14.8571 11.6341H9.14286C8.83975 11.6341 8.54906 11.5137 8.33474 11.2994C8.12041 11.0851 8 10.7944 8 10.4913C8 10.1882 8.12041 9.89749 8.33474 9.68316C8.54906 9.46883 8.83975 9.34842 9.14286 9.34842ZM1.14286 4.777H14.8571C15.1602 4.777 15.4509 4.8974 15.6653 5.11173C15.8796 5.32606 16 5.61675 16 5.91985C16 6.22296 15.8796 6.51365 15.6653 6.72797C15.4509 6.9423 15.1602 7.06271 14.8571 7.06271H1.14286C0.839753 7.06271 0.549062 6.9423 0.334735 6.72797C0.120408 6.51365 0 6.22296 0 5.91985C0 5.61675 0.120408 5.32606 0.334735 5.11173C0.549062 4.8974 0.839753 4.777 1.14286 4.777Z"
                fill="#636363"
              />
            </svg>
            My Status
          </Link>
        </li>
        <li>
          <Link to="/queue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M17 7.71992V8.91992C17 12.6911 17 14.5767 15.828 15.7479C14.6576 16.9199 12.7712 16.9199 9 16.9199C5.2288 16.9199 3.3432 16.9199 2.1712 15.7479C1 14.5775 1 12.6911 1 8.91992C1 8.01752 1 7.22232 1.016 6.51992M10.2 0.919922H9C5.2288 0.919922 3.3432 0.919922 2.1712 2.09112C1.8192 2.44392 1.572 2.86152 1.4 3.37592"
                stroke="#636363"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M5 10.5198L6.4376 8.79502C7.0072 8.11102 7.292 7.76942 7.6664 7.76942C8.0416 7.76942 8.3264 8.11102 8.896 8.79502L9.104 9.04462C9.6736 9.72862 9.9584 10.0702 10.3336 10.0702C10.708 10.0702 10.9928 9.72862 11.5624 9.04462L13 7.31982"
                stroke="#636363"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M14.6 5.71992C15.9255 5.71992 17 4.64541 17 3.31992C17 1.99444 15.9255 0.919922 14.6 0.919922C13.2745 0.919922 12.2 1.99444 12.2 3.31992C12.2 4.64541 13.2745 5.71992 14.6 5.71992Z"
                stroke="#636363"
                stroke-width="1.5"
              />
            </svg>
            My Queue
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftNav;
