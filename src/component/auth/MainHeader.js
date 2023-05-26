import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import AuthContext from "./AuthContext";

const MainHeader = () => {
  const authCntx = useContext(AuthContext);
  const logoutHandler = () => {
    authCntx.logout();
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MyWebLink</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/login"></Nav.Link>
          </Nav>
          <div>
            <Button onClick={logoutHandler}>Logout</Button>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default MainHeader;
