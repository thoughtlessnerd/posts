import Card from "../components/Card";
import { useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [visibleRightSlider, setVisibleRightSlider] = useState(true);

  return (
    <main>
      <header>
        <div className="content">
          <h1>
            Post Inspiration
            <button className="post-inspiration-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 -0.000999451C15.524 -0.000999451 20.002 4.477 20.002 10.001C20.002 15.524 15.524 20.001 10 20.001C4.476 20.002 1.6749e-07 15.524 1.6749e-07 10.001C-0.000999833 4.477 4.476 -0.000999451 10 -0.000999451ZM10 1.499C8.87581 1.48681 7.76036 1.6977 6.71822 2.11947C5.67607 2.54124 4.72793 3.16552 3.92866 3.95617C3.12939 4.74681 2.49487 5.68813 2.06182 6.72564C1.62877 7.76315 1.4058 8.87624 1.4058 10.0005C1.4058 11.1248 1.62877 12.2379 2.06182 13.2754C2.49487 14.3129 3.12939 15.2542 3.92866 16.0448C4.72793 16.8355 5.67607 17.4598 6.71822 17.8815C7.76036 18.3033 8.87581 18.5142 10 18.502C12.2388 18.4777 14.3776 17.5713 15.9521 15.9796C17.5267 14.3879 18.4098 12.2394 18.4098 10.0005C18.4098 7.7616 17.5267 5.61307 15.9521 4.02137C14.3776 2.42966 12.2388 1.52328 10 1.499ZM9.996 8.499C10.1774 8.49877 10.3528 8.56429 10.4896 8.68344C10.6264 8.80258 10.7153 8.96728 10.74 9.147L10.747 9.249L10.751 14.751C10.7529 14.9424 10.6817 15.1273 10.5517 15.2678C10.4218 15.4083 10.2431 15.4938 10.0521 15.5069C9.86118 15.5199 9.67248 15.4595 9.52466 15.3379C9.37684 15.2163 9.28108 15.0429 9.257 14.853L9.251 14.752L9.247 9.25C9.247 9.05109 9.32602 8.86032 9.46667 8.71967C9.60732 8.57902 9.79809 8.5 9.997 8.5L9.996 8.499ZM10.001 5.002C10.1348 4.99777 10.2681 5.02046 10.3929 5.06873C10.5177 5.11701 10.6316 5.18988 10.7277 5.28301C10.8239 5.37615 10.9003 5.48766 10.9525 5.61091C11.0047 5.73416 11.0316 5.86665 11.0316 6.0005C11.0316 6.13435 11.0047 6.26684 10.9525 6.39009C10.9003 6.51334 10.8239 6.62485 10.7277 6.71799C10.6316 6.81112 10.5177 6.88399 10.3929 6.93227C10.2681 6.98054 10.1348 7.00323 10.001 6.999C9.74165 6.99079 9.49567 6.882 9.31512 6.69564C9.13456 6.50928 9.0336 6.25998 9.0336 6.0005C9.0336 5.74102 9.13456 5.49172 9.31512 5.30536C9.49567 5.119 9.74165 5.01021 10.001 5.002Z"
                  fill="white"
                />
              </svg>
            </button>
          </h1>
          <p>
            Use these high-performing posts as inspirations for your next
            content! Our AI engine selected these for you.
          </p>
        </div>
        <div className="actions">
          <button className="filters">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
            >
              <path
                d="M0.75 0.25H15.25C15.4489 0.25 15.6397 0.329018 15.7803 0.46967C15.921 0.610322 16 0.801088 16 1C16 1.19891 15.921 1.38968 15.7803 1.53033C15.6397 1.67098 15.4489 1.75 15.25 1.75H0.75C0.551088 1.75 0.360322 1.67098 0.21967 1.53033C0.0790176 1.38968 0 1.19891 0 1C0 0.801088 0.0790176 0.610322 0.21967 0.46967C0.360322 0.329018 0.551088 0.25 0.75 0.25ZM3 5C3 4.80109 3.07902 4.61032 3.21967 4.46967C3.36032 4.32902 3.55109 4.25 3.75 4.25H12.25C12.4489 4.25 12.6397 4.32902 12.7803 4.46967C12.921 4.61032 13 4.80109 13 5C13 5.19891 12.921 5.38968 12.7803 5.53033C12.6397 5.67098 12.4489 5.75 12.25 5.75H3.75C3.55109 5.75 3.36032 5.67098 3.21967 5.53033C3.07902 5.38968 3 5.19891 3 5ZM6 9C6 8.80109 6.07902 8.61032 6.21967 8.46967C6.36032 8.32902 6.55109 8.25 6.75 8.25H9.25C9.44891 8.25 9.63968 8.32902 9.78033 8.46967C9.92098 8.61032 10 8.80109 10 9C10 9.19891 9.92098 9.38968 9.78033 9.53033C9.63968 9.67098 9.44891 9.75 9.25 9.75H6.75C6.55109 9.75 6.36032 9.67098 6.21967 9.53033C6.07902 9.38968 6 9.19891 6 9Z"
                fill="#136FA0"
              />
            </svg>
            Filters
          </button>
          <button className="refresh">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M1.80172 8.74419L1.40878 9.1401C1.51331 9.24372 1.65454 9.30185 1.80172 9.30185C1.9489 9.30185 2.09013 9.24372 2.19465 9.1401L1.80172 8.74419ZM3.4449 7.90027C3.5501 7.79586 3.60952 7.65394 3.61008 7.50572C3.61063 7.3575 3.55229 7.21514 3.44788 7.10994C3.39618 7.05785 3.33473 7.01645 3.26703 6.98811C3.19933 6.95977 3.12672 6.94504 3.05333 6.94476C2.90511 6.9442 2.76274 7.00255 2.65754 7.10696L3.44416 7.89953L3.4449 7.90027ZM0.944404 7.10696C0.838722 7.00565 0.697465 6.94991 0.551076 6.95176C0.404687 6.95362 0.264887 7.01292 0.161806 7.11687C0.0587257 7.22083 0.000617326 7.36113 4.89034e-06 7.50753C-0.000607545 7.65393 0.0563249 7.79471 0.158532 7.89953L0.944404 7.10696ZM12.917 4.57074C12.9544 4.63516 13.0044 4.69144 13.0639 4.73627C13.1234 4.78109 13.1913 4.81354 13.2635 4.83172C13.3358 4.8499 13.4109 4.85342 13.4846 4.8421C13.5582 4.83077 13.6288 4.80481 13.6923 4.76576C13.7557 4.72671 13.8107 4.67536 13.854 4.61472C13.8973 4.55408 13.928 4.4854 13.9443 4.41271C13.9606 4.34002 13.9622 4.26479 13.949 4.19148C13.9358 4.11816 13.908 4.04822 13.8674 3.9858L12.917 4.57074ZM8.05222 0.74408C4.29627 0.74408 1.24283 3.76626 1.24283 7.50362H2.35912C2.35912 4.39139 4.90427 1.86037 8.05222 1.86037V0.74408ZM1.24283 7.50362V8.74419H2.35912V7.50362H1.24283ZM2.1954 9.14085L3.4449 7.90027L2.65754 7.10696L1.40729 8.34753L2.19391 9.13936L2.1954 9.14085ZM2.1954 8.34828L0.944404 7.10696L0.157788 7.89953L1.40804 9.13936L2.19391 8.34753L2.1954 8.34828ZM13.8674 3.98729C13.2564 2.9946 12.4011 2.1752 11.3831 1.60738C10.3652 1.03957 9.21784 0.742336 8.05222 0.74408V1.86037C9.02731 1.85835 9.98734 2.10654 10.8391 2.58122C11.6908 3.05589 12.4066 3.74116 12.9178 4.57148L13.8681 3.98654L13.8674 3.98729ZM14.1807 7.2558L14.5729 6.85914C14.4684 6.75598 14.3275 6.69813 14.1807 6.69813C14.0339 6.69813 13.893 6.75598 13.7885 6.85914L14.1807 7.2558ZM12.533 8.09897C12.4809 8.15053 12.4394 8.21184 12.411 8.27942C12.3825 8.347 12.3677 8.41952 12.3673 8.49284C12.3664 8.64092 12.4244 8.78327 12.5286 8.88857C12.6327 8.99386 12.7744 9.05349 12.9224 9.05433C13.0705 9.05517 13.2129 8.99714 13.3182 8.89303L12.533 8.09897ZM15.0432 8.89303C15.095 8.94593 15.1569 8.98798 15.2251 9.01674C15.2934 9.04549 15.3667 9.06038 15.4407 9.06053C15.5148 9.06067 15.5881 9.04608 15.6565 9.0176C15.7249 8.98912 15.7869 8.94731 15.8389 8.89462C15.891 8.84194 15.932 8.77941 15.9597 8.71071C15.9873 8.642 16.001 8.56847 15.9999 8.49442C15.9989 8.42037 15.9831 8.34727 15.9535 8.27937C15.9239 8.21148 15.8811 8.15016 15.8276 8.09897L15.0432 8.89303ZM3.02071 11.4278C2.94295 11.3017 2.8183 11.2118 2.6742 11.1776C2.5301 11.1435 2.37835 11.168 2.25233 11.2458C2.12631 11.3236 2.03634 11.4482 2.00221 11.5923C1.96809 11.7364 1.99261 11.8882 2.07037 12.0142L3.02071 11.4278ZM7.90636 15.2559C11.6735 15.2559 14.7381 12.236 14.7381 8.49637H13.6218C13.6218 11.6071 11.0692 14.1396 7.90636 14.1396V15.2559ZM14.7381 8.49637V7.2558H13.6218V8.49637H14.7381ZM13.7885 6.85914L12.533 8.09897L13.3182 8.89303L14.5729 7.65245L13.7885 6.85914ZM13.7885 7.65245L15.0432 8.89303L15.8276 8.09897L14.5729 6.85914L13.7885 7.65245ZM2.06963 12.0134C2.68465 13.0072 3.54388 13.8269 4.56546 14.3945C5.58705 14.9621 6.73695 15.2586 7.90562 15.2559V14.1396C6.92747 14.1423 5.96492 13.8946 5.10969 13.4198C4.25445 12.9451 3.53577 12.2593 3.02071 11.4278L2.07037 12.0142L2.06963 12.0134Z"
                fill="#136FA0"
              />
            </svg>
            Refresh
          </button>
        </div>
      </header>
      <div className="posts">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default HomePage;
