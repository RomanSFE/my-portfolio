import React, { Component } from 'react';

class FullWebsite extends Component {
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
                                        <img src={require('../assets/website1.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>Upskill – Start Up Dhaka. Full Website</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://pensive-bhaskara-94105d.netlify.com/index.html`} target="_blank">Live Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="website-single-item">
                                    <div className="website-img">
                                        <img src={require('../assets/website2.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>Full Website with html, css, bootstrap</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://eager-pare-494ac8.netlify.com/index.html`} target="_blank">Live Demo</a>
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
                                        <img src={require('../assets/website3.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>Spotify website UI design, Semantic UI Projec</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://silly-mcnulty-99ccb5.netlify.com/`} target="_blank">Live Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="website-single-item">
                                    <div className="website-img">
                                        <img src={require('../assets/website4.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>Online Converter Website</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://upbeat-bhaskara-9657b3.netlify.com/index.html`} target="_blank">Live Demo</a>
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
                                        <img src={require('../assets/website5.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>Full Website with blog section</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://dealer-rosalind-56441.netlify.com/`} target="_blank">Live Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-6 col-sm-6">
                                <div className="website-single-item">
                                    <div className="website-img">
                                        <img src={require('../assets/website4.jpg')} alt=""/>
                                    </div>
                                    <div className="single-item-details">
                                        <div className="web-single-txt">
                                            <p>Online Converter Website</p>
                                            <div className="web-btn">
                                                <a rel="noopener noreferrer" href={`https://upbeat-bhaskara-9657b3.netlify.com/index.html`} target="_blank">Live Demo</a>
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
export default FullWebsite