import { useRef } from "react";
import { Button } from "react-bootstrap";

const Profile = () => {
  const nameRef = useRef();
  const photoRef = useRef();

  const submitHandler = () => {
    const enteredName = nameRef.current.value;
    const enteredLink = photoRef.current.value;

    console.log(enteredName);
    console.log(enteredLink);

    // fetch(
    //   "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCHhFpWgPxeQ2-BO_-vuBxNGWBEVDeTTPk",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       idToken: localStorage.getItem("token"),
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // ).then((res) => {
    //   const response = res.json();
    // });
  };

  return (
    <div className="container" style={{ float: "right" }}>
      <div className="border-bottom">
        <div>
          <h2 style={{ marginTop: "25px" }}>Contact Details</h2>
          <Button variant="outline-primary" style={{ float: "right" }}>
            Cancel
          </Button>
        </div>
        <form>
          <label>Full Name</label>
          <input type="text" ref={nameRef} required />
          <label>Profile Photo URL</label>
          <input type="text" ref={photoRef} required />
          <Button
            onClick={submitHandler}
            variant="danger"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Profile;
