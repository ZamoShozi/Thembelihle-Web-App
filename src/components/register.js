import React, {useState} from 'react';
import {Spinner} from "react-bootstrap";
import App from "../App";
import "../styles/profile.css"

function Register(props) {
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [zip, setZip] = useState("")
    const [loading, setLoading] = useState(false)
    return(<div className={"profile-div"}>
            <div className={"profile-card"}>
                <div className={"row"}>
                    <div className="inputContainer">
                        <input type="name" value={name} id="name" onChange={text=>{
                            setName(text.target.value)
                        }} required/>
                        <label htmlFor="search">Name</label>
                    </div>
                </div>
                <div className={"row"}>
                    <div className="inputContainer">
                        <input type="surname" value={surname} id="surname" onChange={text=>{
                            setSurname(text.target.value)
                        }} required/>
                        <label htmlFor="search">Surname</label>
                    </div>
                </div>
                <div className={"row"}>
                    <div className="inputContainer">
                        <input type="phone" value={phone} id="phone" onChange={text=>{
                            setPhone(text.target.value)
                        }} required/>
                        <label htmlFor="search">Phone Number</label>
                    </div>
                </div>
                <div className={"row"}>
                    <div className="inputContainer">
                        <input type="email" id="email" value={email} onChange={text=>{
                            setEmail(text.target.value)
                        }} required/>
                        <label htmlFor="search">Email</label>
                    </div>
                </div>
                <div className={"row"}>
                    <div className="inputContainer">
                        <input type="text" id="country" value={country} onChange={text=>{
                            setCountry(text.target.value)
                        }} required/>
                        <label htmlFor="search">Country</label>
                    </div>
                </div>
                <div className={"row"}>
                    <div className="nested inputContainer">
                        <input type="state" id="State" value={state} onChange={text=>{
                            setState(text.target.value)
                        }} required/>
                        <label htmlFor="search">State</label>
                    </div>
                    <div className="nested inputContainer">
                        <input type="text" id="city" value={city} onChange={text=>{
                            setCity(text.target.value)
                        }} required/>
                        <label htmlFor="search">City</label>
                    </div>
                </div>
                <div className={"row"}>
                    <div className="nested inputContainer">
                        <input type="number" id="zipCode" value={zip} onChange={text=>{
                            setZip(text.target.value)
                        }} required/>
                        <label htmlFor="search">Zip Code</label>
                    </div>
                </div>
                <div className={"row"}>
                    <div className="inputContainer">
                        <input type="password" id="password" value={password} onChange={text=>{
                            setPassword(text.target.value)
                        }} required/>
                        <label htmlFor="search">Confirm Password</label>
                    </div>
                </div>
                {loading ?
                    (<Spinner className={"profile-spinner"} animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>) :(
                        <button  type="button" onClick={()=>{
                            setLoading(true)
                            let data = {
                                name:name,
                                phoneNumber:phone,
                                surname:surname,
                                email: email,
                                password:password,
                                address:{
                                    city:city,
                                    state: state,
                                    country:country,
                                    zip: parseInt(zip)
                                }
                            }
                            fetch("http://localhost:5143/api/Account/user", {
                                method: "PUT",
                                headers:App.prototype.headers,
                                body:JSON.stringify(data)
                            }).then(d => d.json()).then(json=>{
                                setTimeout(()=>{
                                    console.log(json);
                                    setLoading(false)
                                }, 500)
                            })
                        }} className="profile btn btn-outline-primary">UPDATE</button>)}
            </div>
        </div>);
}
export default Register;
