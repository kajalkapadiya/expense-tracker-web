import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const linkHandler = () => {
    history.replace("/profile");
  };
  return (
    <>
      <div className="border-bottom">
        <p>
          Welcome to Expense Tracker
          <p style={{ float: "right" }}>
            Your profile is incomplete
            <Button variant="link" onClick={linkHandler}>
              Complete now
            </Button>
          </p>
        </p>
      </div>
    </>
  );
};

export default Home;
