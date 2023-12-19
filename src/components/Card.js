import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <header>
        <span className="profile-pic">
          <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg" />
        </span>
        <div className="actions">
          <p className="date">13/06/2023</p>
          <button className="zap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="23"
              viewBox="0 0 18 23"
              fill="none"
            >
              <path
                d="M14.6837 2.68237C15.2047 2.02337 14.7137 1.07937 13.8477 1.07937H7.13169C6.94984 1.07805 6.7707 1.12353 6.61151 1.21144C6.45231 1.29936 6.31841 1.42675 6.22269 1.58137L1.14069 10.0374C0.739688 10.7034 1.24369 11.5344 2.04869 11.5344H5.47769L2.24769 19.5994C1.78069 20.6194 3.04269 21.5524 3.89069 20.8144L16.9997 8.41037H10.1507L14.6837 2.68237Z"
                stroke="#636363"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="save">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="23"
              viewBox="0 0 18 23"
              fill="none"
            >
              <path
                d="M14.7139 1H3.28535C2.67914 1 2.09776 1.24082 1.6691 1.66947C1.24045 2.09812 0.999634 2.67951 0.999634 3.28571V20.5863C0.999666 20.6864 1.02598 20.7847 1.07593 20.8714C1.12589 20.9581 1.19773 21.0301 1.28429 21.0804C1.37084 21.1306 1.46906 21.1572 1.56913 21.1575C1.6692 21.1579 1.7676 21.1319 1.85449 21.0823L7.86592 17.648C8.21121 17.4508 8.60198 17.347 8.99963 17.347C9.39729 17.347 9.78806 17.4508 10.1333 17.648L16.1448 21.0834C16.2318 21.1331 16.3303 21.1591 16.4304 21.1587C16.5306 21.1583 16.6289 21.1316 16.7155 21.0812C16.8021 21.0309 16.8739 20.9586 16.9238 20.8718C16.9736 20.7849 16.9998 20.6864 16.9996 20.5863V3.28571C16.9996 2.67951 16.7588 2.09812 16.3302 1.66947C15.9015 1.24082 15.3201 1 14.7139 1Z"
                stroke="#636363"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </header>
      <div className="content">
        <p className="text">
          Have you ever been ashamed to tell people what you do for a living?
          <br />
          <br />
          I have...
          <br />
          <br />
          Like when I worked for one of those timeshare companies that
          high-pressure sell you on a dream vacation that ends up being more
          dream than vacation
        </p>
        <h3>more...</h3>
      </div>
      <div className="actions">
        <button className="like">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M2.90909 6.54548V15.2727H0V6.54548H2.90909ZM5.81818 15.2727C5.43241 15.2727 5.06244 15.1195 4.78966 14.8467C4.51688 14.5739 4.36364 14.204 4.36364 13.8182V6.54548C4.36364 6.14548 4.52364 5.78184 4.79273 5.52002L9.57818 0.727295L10.3491 1.4982C10.5455 1.69457 10.6691 1.96366 10.6691 2.26184L10.6473 2.49457L9.95636 5.8182H14.5455C14.9312 5.8182 15.3012 5.97145 15.574 6.24423C15.8468 6.51701 16 6.88698 16 7.27275V8.72729C16 8.91639 15.9636 9.09093 15.8982 9.2582L13.7018 14.3855C13.4836 14.9091 12.9673 15.2727 12.3636 15.2727H5.81818ZM5.81818 13.8182H12.3855L14.5455 8.72729V7.27275H8.15273L8.97455 3.40366L5.81818 6.5673V13.8182Z"
              fill="#136FA0"
            />
          </svg>
          115
        </button>
        <div className="right">
          <button className="edit">Edit & Post</button>
          <button className="more">
            <svg
              width="10"
              height="2"
              viewBox="0 0 10 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1" cy="1" r="1" fill="#136FA0" />
              <circle cx="5" cy="1" r="1" fill="#136FA0" />
              <circle cx="9" cy="1" r="1" fill="#136FA0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
