import React, { Component } from 'react'

class ReactScreen extends Component {
    render() {
        return (
            <div className="fullwebsite-section">
                <div className="react-website-section-bg">
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
                                        <img src={require('../assets/section50.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>React Weather Application. Using React Weather API</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://react-weather-app-api.netlify.com/?_ga=2.21900667.134205834.1567969503-284234002.1561718209`} target="_blank">Live Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="website-single-item">
                                    <div className="website-img">
                                        <img src={require('../assets/section51.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>React Tabs</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://react-tabs.netlify.com/`} target="_blank">Live Demo</a>
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
                                        <img src={require('../assets/section52.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>LIVE DEMOMulti-Step Form</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://multi-step-form-react.netlify.com/`} target="_blank">Live Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="website-single-item">
                                    <div className="website-img">
                                        <img src={require('../assets/section53.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>Image show using Unsplash API</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://react-unsplash-image-show-api.netlify.com/`} target="_blank">Live Demo</a>
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
                                        <img src={require('../assets/section54.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>React Ecommerce Project</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://react-ecommerce-proj.netlify.com/`} target="_blank">Live Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-6 col-sm-6">
                                <div className="website-single-item">
                                    <div className="website-img">
                                        <img src={require('../assets/section53.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>Image show using Unsplash API</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://react-unsplash-image-show-api.netlify.com/`} target="_blank">Live Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ReactScreen