import { useRef } from "react";
import { Button } from "react-bootstrap";

const ForgotPass = () => {
  const emailRef = useRef();

  const passReset = async () => {
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCHhFpWgPxeQ2-BO_-vuBxNGWBEVDeTTPk",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: emailRef.current.value,
          // returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <h4>Enter the email with which you have registered</h4>
      <input type="text" placeholder="Email" ref={emailRef}></input>
      <br />
      <Button onClick={passReset}>Send Link</Button>
      <br />
      <Button variant="link">Alreayd a user? Login</Button>
    </div>
  );
};
export default ForgotPass;
