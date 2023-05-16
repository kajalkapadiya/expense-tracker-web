import { Button } from "react-bootstrap";

const Profile = () => {
  return (
    <div className="container" style={{ float: "right" }}>
      <div className="border-bottom">
        <div>
          <h2 style={{ marginTop: "25px" }}>Contact Details</h2>
          <Button variant="outline-primary" style={{ float: "right" }}>
            Cancel
          </Button>
        </div>
        <div>
          <label>Full Name</label>
          <input type="text" />
          <label>Profile Photo URL</label>
          <input type="link" />
          <Button
            variant="danger"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
