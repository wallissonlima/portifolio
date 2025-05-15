import { Context } from "./styles";
import logo from "../../assets/logoteste.png";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
// import { SignOut } from "phosphor-react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export function Header() {
  // const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // const handleLogout = () => {
  //   localStorage.removeItem("access_token");
  //   navigate("/");
  // };

  return (
    <>
      <Context>
        <Navbar light expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="Logo Tipo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>
            <div className={`DropAdmin ${isOpen ? "active" : ""}`}>
              <Nav>
                <NavItem>
                  <NavLink
                    href="/"
                    className={location.pathname === "/" ? "active" : ""}
                  >
                    Inicio
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    href="/skills"
                    className={location.pathname === "/skills" ? "active" : ""}
                  >
                    Habilidades
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/resume"
                    className={location.pathname === "/resume" ? "active" : ""}
                  >
                    Resumo
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/contact"
                    className={location.pathname === "/contact" ? "active" : ""}
                  >
                    Contato
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/protfolio"
                    className={
                      location.pathname === "/protfolio" ? "active" : ""
                    }
                  >
                    Portfólio
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/about"
                    className={location.pathname === "/about" ? "active" : ""}
                  >
                    Sobre
                  </NavLink>
                </NavItem>
              </Nav>
              {/* <SignOut onClick={handleLogout} size={25} /> */}
            </div>
          </Collapse>
        </Navbar>
      </Context>
    </>
  );
}
