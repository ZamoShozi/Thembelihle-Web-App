import React from 'react';
import "../styles/rooms.css"

function Rooms(props) {
    return (
        <>
            <div className={"check-rooms-div"}/>
            <section className = "check-rooms" id = "check-rooms">
                <div className = "sec-width">
                    <div className = "check-rooms-container">

                        <div className = "check-room">
                            <div className = "rating">
                                <span><i className = "fas fa-star"/></span>
                                <span><i className = "fas fa-star"/></span>
                                <span><i className = "fas fa-star"/></span>
                                <span><i className = "fas fa-star"/></span>
                                <span><i className = "far fa-star"/></span>
                            </div>
                            <h3>We Loved it</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                            <img src = {require("../images/cus1.jpg")} alt = "check-room"/>
                            <span>room Name, Country</span>
                        </div>


                        <div className = "check-room">
                            <div className = "rating">
                                <span><i className = "fas fa-star"/></span>
                                <span><i className = "fas fa-star"/></span>
                                <span><i className = "fas fa-star"/></span>
                                <span><i className = "fas fa-star"/></span>
                                <span><i className = "far fa-star"/></span>
                            </div>
                            <h3>Comfortable Living</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                            <img src ={require("../images/cus2.jpg")} alt = "check-room image"/>
                            <span>room Name, Country</span>
                        </div>


                        <div className = "check-room">
                            <div className = "rating">
                                <span><i className = "fas fa-star"/></span>
                                <span><i className = "fas fa-star"/></span>
                                <span><i className = "fas fa-star"/></span>
                                <span><i className = "fas fa-star"/></span>
                                <span><i className = "far fa-star"/></span>
                            </div>
                            <h3>Nice Place</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae veritatis provident eveniet praesentium veniam cum iusto distinctio esse, vero est autem, eius optio cupiditate?</p>
                            <img src ={require("../images/cus3.jpg")}alt = "check-room image"/>
                            <span>room Name, Country</span>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
export default Rooms;
