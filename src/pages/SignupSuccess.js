import { useEffect, useState } from "react";
import "./SignUpSuccess.css";

const SignUpSuccess = () => {
  const [code, setCode] = useState("");

  useEffect(() => {
    const url = window.location.href;
    const code = url.split("code=")[1].split("&")[0];
    setCode(code);

    setTimeout(() => (window.location.href = "http://localhost:3000/"), 5000);
  }, []);

  return (
    <div className="notMain">
      <h1>Sign Up Success</h1>
    </div>
  );
};

export default SignUpSuccess;
