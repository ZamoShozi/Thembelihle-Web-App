import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import App from "../App";
import {Bars} from "react-loader-spinner";
import Home from "../screens/home";
import Profile from "../screens/profile";
import Bookings from "../screens/bookings";
import Rooms from "../screens/rooms";


function NavBar(props) {
    console.log(props)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [response, setResponse] = useState({})
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const loggedIn = function (){
        return (
            <Navbar collapseOnSelect expand="lg" sticky={"top"} bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand href="#home">Thembelihle Guest House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#" onClick={()=>{
                                App.prototype.changPage(<Home/>)
                            }}>Home</Nav.Link>
                            <Nav.Link href="#rooms" onClick={()=>{
                                App.prototype.changPage(<Rooms/>)
                            }}>Rooms</Nav.Link>
                            <NavDropdown  title={props.user.name}  id="collasible-nav-dropdown" show={open} onToggle={()=>{
                                    setOpen(!open)
                                }}>
                                <NavDropdown.Item href="#profile" onClick={()=>{
                                    App.prototype.changPage(<Profile/>)
                                }}>Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#bookings" onClick={()=>{
                                    App.prototype.changPage(<Bookings/>)
                                }}>My Bookings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <Button onClick={()=>{
                                    setOpen(false)
                                    document.cookie = ""
                                    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                                    console.log(document.cookie)
                                    App.prototype.onLogIn(false, null);
                                }}>Log out</Button>
                            </NavDropdown>
                            <Nav.Link className={"btn-book-now"}>Book Now</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
    const notLoggedIn = function () {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Thembelihle Guest House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#" onClick={()=>{
                                App.prototype.changPage(<Home/>)
                            }}>Home</Nav.Link>
                            <Nav.Link href="#rooms" onClick={()=>{
                                App.prototype.changPage(<Rooms/>)
                            }}>Rooms</Nav.Link>
                            <NavDropdown drop={"start"} title="Login" id="collasible-nav-dropdown" onToggle={()=>{
                                    setOpen(!open)
                                }}>
                                <NavDropdown.ItemText>
                                    <input type={"email"} className={"form-control"} placeholder={"Email"} value={email} onChange={event => {
                                    setResponse({})
                                    setEmail(event.target.value)
                                }}/></NavDropdown.ItemText>
                                <NavDropdown.ItemText>
                                    <input type={"password"} className={"form-control"} placeholder={"Password"} value={password} onChange={event => {
                                    setResponse({})
                                    setPassword(event.target.value)
                                }}/></NavDropdown.ItemText>
                                <p>{response.message}</p>
                                {loading ?
                                    <Bars height="38" width="38" color="#212529" ariaLabel="bars-loading" wrapperStyle={{}} wrapperClass="" visible={true}/>
                                    : <Button  onClick={()=>{
                                    setLoading(true)
                                    let form = new Map()
                                    form.set("email", email);
                                    form.set("password", password)
                                    App.prototype.request().post("Authenticate/login", JSON.stringify(Object.fromEntries(form))).then(data =>{
                                        console.log(data.header)
                                        return data.data
                                        }
                                    ).then(json=>{
                                        setTimeout(()=>{
                                            setLoading(false)
                                            if(!json.success){
                                                setResponse({message: json.message})
                                                setPassword("")
                                            }else{
                                                setOpen(false)
                                                App.prototype.onLogIn(true, json.data)
                                                setPassword("")
                                                setEmail("")
                                            }
                                        }, 500)
                                    })
                                }} className={"btn-login"}>Login</Button>}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
    return props.status === true ? loggedIn() : notLoggedIn();
}

export default NavBar;
