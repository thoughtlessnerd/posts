import "./SignUp.css";

const SignUp = () => {
  const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77g2qs1vzdvggt&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flinkedin&state=asdac123asbwAS1212&scope=email%20w_member_social%20profile%20openid`;

  return (
    <div className="signup notMain">
      <main>
        <div>
          <h1>Add Your Linkedin Account</h1>
          <p>Connect to LinkedIn</p>
        </div>

        <center>
          <button
            className="linkedin"
            onClick={() => {
              window.location.href = url;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M0.5 1.719C0.5 0.7695 1.289 0 2.2625 0H22.7375C23.711 0 24.5 0.7695 24.5 1.719V22.281C24.5 23.2305 23.711 24 22.7375 24H2.2625C1.289 24 0.5 23.2305 0.5 22.281V1.719ZM7.9145 20.091V9.2535H4.313V20.091H7.9145ZM6.1145 7.773C7.37 7.773 8.1515 6.942 8.1515 5.901C8.129 4.8375 7.3715 4.029 6.1385 4.029C4.9055 4.029 4.1 4.839 4.1 5.901C4.1 6.942 4.8815 7.773 6.0905 7.773H6.1145ZM13.4765 20.091V14.0385C13.4765 13.7145 13.5005 13.3905 13.5965 13.1595C13.856 12.513 14.4485 11.8425 15.4445 11.8425C16.748 11.8425 17.2685 12.8355 17.2685 14.2935V20.091H20.87V13.875C20.87 10.545 19.094 8.997 16.724 8.997C14.813 8.997 13.9565 10.047 13.4765 10.7865V10.824H13.4525C13.4605 10.8115 13.4685 10.799 13.4765 10.7865V9.2535H9.8765C9.9215 10.2705 9.8765 20.091 9.8765 20.091H13.4765Z"
                fill="white"
              />
            </svg>
            Connect
          </button>
          <p>We will never without you explicitly allowing it.</p>

          <span>
            This page should auto-refresh after you have connected your account.
            If it doesn’t, try refreshing it manually .
          </span>
        </center>
      </main>
    </div>
  );
};

export default SignUp;
