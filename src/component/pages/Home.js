import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import { useContext } from "react";

const Home = () => {
  const authCntx = useContext(AuthContext);
  // console.log(authCntx.token);
  const history = useHistory();

  const linkHandler = () => {
    history.replace("/profile");
  };

  const varifyHandler = async () => {
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCHhFpWgPxeQ2-BO_-vuBxNGWBEVDeTTPk",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: authCntx.token,
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
    <>
      <div className="border-bottom">
        <h4>
          Welcome to Expense Tracker
          <p style={{ float: "right" }}>
            Your profile is incomplete
            <Button variant="link" onClick={linkHandler}>
              Complete now
            </Button>
          </p>
        </h4>
      </div>
      <Button
        variant="outline-warning"
        onClick={varifyHandler}
        className="position-fixed"
      >
        verify email id
      </Button>
    </>
  );
};

export default Home;
