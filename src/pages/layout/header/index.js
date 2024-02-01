import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
    const isLoggedIn = localStorage.getItem('token');
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('token')
        navigate("/");
    }

    // truthy values and falsy values
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#96B6C5" }}>
            <Container>
                <Navbar.Brand href="#home" style={{ fontStyle: "italic", fontWeight: "900", fontSize: "30px" }}>
                    The Cloud's Eye Photography
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto ">
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"

                            }
                        >Home
                        </NavLink>
                        <NavLink
                            to={"/about"}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"

                            }
                        >About
                        </NavLink>
                        {
                            isLoggedIn ? (
                                <a href="#" className="nav-link"
                                    onClick={logOut}
                                    logOut

                                > Logout
                                </a>) : <>
                                <NavLink
                                    to={"/login"}
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >Login
                                </NavLink>
                                <NavLink
                                    to={"/register"}
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Register
                                </NavLink>
                            </>}
                        <NavLink
                            to={"/contact"}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to={"/todo"}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            To-do
                        </NavLink>
                        <NavLink
                            to={"/blog"}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to={"/feedback"}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Feedback
                        </NavLink>

                        {isLoggedIn ? <><NavLink
                            to={"/exam"}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Exams
                        </NavLink><NavLink
                            to={"/user"}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                                users
                            </NavLink> </> : ""
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;

