import { Navbar as NavbarRB, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useMe } from "../../../hooks";
import "./style.scss"
import { House, Film, People, BoxArrowLeft, PersonPlus, BoxArrowRight } from "react-bootstrap-icons"


const Navbar = () => {

  const {logout, me} = useMe()

  return (
    <>
      <NavbarRB bg="dark" variant="dark">
        <Container fluid>
          <NavbarRB.Brand>Conectadas</NavbarRB.Brand>
          <Nav className="ms-auto justify-content-end">
            {me ? (
              <>
              <NavLink className="nav-link mx-2" to="/">
                <House size={25}/>
              </NavLink>
  
              <NavLink className="nav-link mx-2" to="/movies">
                <Film size={23}/>
              </NavLink>
  
              <NavLink className="nav-link mx-2" to="/users">
                <People size={25}/>
              </NavLink>
        
              <Nav.Link className="nav-link mx-2" onClick={logout}>
                <BoxArrowRight size={25}/>
              </Nav.Link>
              </>
            ) : (
              <>
            <NavLink className="nav-link mx-2" to="/login">
              <BoxArrowLeft size={25}/>
            </NavLink>
            <NavLink className="nav-link mx-2" to="/signup">
              <PersonPlus size={25}/>
            </NavLink>
            </>
            )}
            <p>Leila</p>
          </Nav>
        </Container>
      </NavbarRB>
    </>
  );
};

export { Navbar };
