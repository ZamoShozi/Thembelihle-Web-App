import NavBar from "./components/NavBar";
import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Bars} from "react-loader-spinner";
import './App.css';
import Home from "./screens/home";
import axios from 'axios'
import { useCookies } from "react-cookie";

const verifyToken = (token) =>{
    try {
        let json = JSON.parse(atob(token.split('.')[1]))
        let time = new Date(json.exp*1000)
        let date = new Date(time);
        return date > Date.now();
    } catch (e) {
        return false;
    }
}

function App() {
    const [status, setStatus] = useState(false)
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(<Home/>)
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    App.prototype.request = function (){
        let token = cookies["token"]
        let headers = {"content-type":"application/json"}
        console.log("here", token, cookies)
        if(token !== undefined){
            if(verifyToken(token)){
                headers["authorization"] = `Bearer ${token}`
            }else{
                removeCookie("token")
            }
        }
        console.log(headers)
        return axios.create({
            withCredentials: true,
            baseURL: "http://localhost:5143/api/",
            headers: headers
        })
    }
    App.prototype.onLogIn = function (status, user){
        setStatus(status)
        setUser(user)
        console.log(cookies)
        console.log(document.cookie)
        if(!status){
            removeCookie("token")
        }

    }
    App.prototype.changPage = function (page){
        setPage(page);
    }
    useEffect(() => {
            if ("token" in cookies) {
                    if(verifyToken(cookies["token"])){
                        App.prototype.request().get("account/user").then(data=>data.data).then(json=>{
                            let u = {
                                name: json["body"]["Name"],
                                surname: json["body"]["Surname"],
                                phoneNumber: json["body"]["PhoneNumber"],
                                email: json["body"]["Email"]
                            }
                            App.prototype.onLogIn(true, u)
                            setTimeout(() => {
                                setLoading(false)
                            }, 500)
                        }).catch(()=>{
                            setTimeout(() => {
                                setLoading(false)
                            }, 500)
                        })
                    }else{
                        removeCookie("token")
                        setTimeout(() => {
                            setLoading(false)
                        }, 500)
                    }
            } else {
                setTimeout(() => {
                    setLoading(false)
                }, 500)
            }},
        [])
    return (
        <div className="App">
            {loading ? <div id={"loading-bar"}><Bars  height="38" width="38" color="#212529" ariaLabel="bars-loading" wrapperStyle={{}} wrapperClass="" visible={true}/></div> :
                <>
                    <NavBar status={status} user={user}/>
                    <div className={"page-content"}>
                        {page}
                    </div>
                </>
            }
        </div>
    );
}
export default App;
