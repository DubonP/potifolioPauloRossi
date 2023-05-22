import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Paulo Gustavo Rossi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">frontend</Nav.Link>
            <Nav.Link href="#pricing">Testing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Git Hub</Nav.Link>
            <Nav.Link eventKey={2} href="#darkmode">
              Dark mode
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
