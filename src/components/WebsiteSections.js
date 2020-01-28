import React, { Component } from 'react'

class WebsiteSections extends Component {
    render() {
        return (
            <div className="fullwebsite-section">
                <div className="fullwebsite-section-bg">
                    <div className="container">
                        <div className="row">
                            {/* <h3>About Me</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dolorem ipsam 
                                perferendis necessitatibus temporibus omnis qui commodi? Voluptate, 
                                non corrupti.
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="website-section-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="website-single-item">
                                    <div className="website-img">
                                        <img src={require('../assets/section1.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>Footer Area. html, css, js, bootstrap</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://postman-kangaroo-12880.netlify.com/`} target="_blank">Live Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="website-single-item">
                                    <div className="website-img">
                                        <img src={require('../assets/section2.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>Image show in different style</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://pump-attendant-camel-87750.netlify.com/`} target="_blank">Live Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="website-single-item">
                                    <div className="website-img">
                                        <img src={require('../assets/section3.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>Full width video section</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://librarian-isabel-67474.netlify.com/`} target="_blank">Live Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="website-single-item">
                                    <div className="website-img">
                                        <img src={require('../assets/section4.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>Collapse section</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://maid-toad-33762.netlify.com/`} target="_blank">Live Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default WebsiteSections