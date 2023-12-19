import "./ActionButtons.css";

const ActionButtons = () => {
  return (
    <div className="action-buttons">
      <button className="zap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="27"
          viewBox="0 0 22 27"
          fill="none"
        >
          <path
            d="M18.1049 3.00382C18.7562 2.18006 18.1424 1.00004 17.0599 1.00004H8.66476C8.43744 0.998375 8.21352 1.05523 8.01452 1.16512C7.81552 1.27502 7.64815 1.43427 7.52849 1.62755L1.17586 12.1978C0.674603 13.0303 1.30462 14.069 2.31088 14.069H6.59722L2.55964 24.1505C1.97588 25.4255 3.55341 26.5918 4.61343 25.6693L21 10.164H12.4386L18.1049 3.00382Z"
            stroke="#636363"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button className="create">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M18.8045 1.19548C18.3591 0.750169 17.7551 0.5 17.1253 0.5C16.4955 0.5 15.8914 0.750169 15.446 1.19548L14.3992 2.2423L17.7577 5.60078L18.8045 4.55397C19.2498 4.10858 19.5 3.50455 19.5 2.87473C19.5 2.2449 19.2498 1.64087 18.8045 1.19548ZM16.7978 6.56074L13.4393 3.20225L2.44638 14.1951C1.888 14.7532 1.47754 15.4417 1.25209 16.1983L0.528278 18.6276C0.493333 18.7448 0.490726 18.8693 0.520735 18.9879C0.550744 19.1065 0.612251 19.2148 0.698749 19.3013C0.785248 19.3877 0.89352 19.4493 1.01211 19.4793C1.1307 19.5093 1.25519 19.5067 1.37242 19.4717L3.80172 18.7479C4.5583 18.5225 5.24677 18.112 5.80486 17.5536L16.7978 6.56074Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default ActionButtons;
