import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="about-section">
                <div className="about-section-bg">
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
                <div className="about-me">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="about-img-title">
                                <div className="about-img-title-bg">
                                    <div className="my-image">
                                        <img src={require('../assets/profile.jpg')} alt=""/>
                                    </div>
                                    <div className="about-me-txt">
                                        <h3>Abdulla Al Roman</h3>
                                        <h4>Professional Front-end & UI/UX Designer</h4>
                                    </div>
                                    <div className="about-me-con">
                                        <p><i className="fa fa-map-marker-alt"></i>Dhaka, Bangladesh</p>
                                    </div>
                                    <div className="skill-progress">
                                        <div className="progress-section">
                                            <p>Front-end</p>
                                            <div class="progress-bar blue stripes">
                                                <span style={{width: '95%'}}></span>
                                            </div>
                                        </div>
                                        <div className="progress-section">
                                            <p>React</p>
                                            <div class="progress-bar blue stripes">
                                                <span style={{width: '85%'}}></span>
                                            </div>
                                        </div>
                                        <div className="progress-section">
                                            <p>React Native</p>
                                            <div class="progress-bar blue stripes">
                                                <span style={{width: '80%'}}></span>
                                            </div>
                                        </div>
                                        <div className="progress-section">
                                            <p>UI/UX Design</p>
                                            <div class="progress-bar blue stripes">
                                                <span style={{width: '90%'}}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-desc">
                                    <div className="about-desc-bg">
                                        <div className="about-desc-textt">
                                            <h3>Experience</h3>
                                            <p>I am a professional Front-End developer and UI/UX Designer with 1 year plus professional experience efficiently coding website design and 
                                                Single Page Application using modern <strong> HTML, CSS, 
                                                Bootstrap, React js, React Native, Adobe photoshop and Adobe XD.</strong><br></br> <br></br>

                                                I have already completed some of API related projects using React js, 
                                                React Native(mobile app), Redux, and other most popular technologies.<br></br> <br></br>

                                                I can design any PSD to professional responsive and pixel perfect Website 
                                                and Mobile App using most popular Framework like Bootstrap, Semantic UI, React, 
                                                React Native with SEO Optimize. <br></br> <br></br>

                                                As a Front-end developer I think, UI/UX is an important part. And I am also a 
                                                <strong>professional UI/UX Designer</strong>. I can design awesome and unique Website UI and also
                                                Mobile App UI with <strong> Adobe Photoshop, Adobe XD and Figma</strong>. As a UI/UX Designer, 
                                                I always prefer to fix complex UI/UX design ideas.
                                                
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="about-skills">
                                    <div className="about-skills-bg">
                                        <div className="about-skills-txtt">
                                            <h3>Skills</h3>
                                            <p>Problem solving, React js, React Native, Redux, API, Bootstrap,
                                                JavaScript, ES6, JQuery, HTML, CSS, SCSS, Flexbox, Firebase, WordPress,
                                                Adobe Photoshop, Adobe XD, Figma.
                                            </p>
                                            <div className="about-edu">
                                                <h3>Education</h3>
                                                <h4>North South University</h4>
                                                <p>BSc in Computer Science and Engineering</p>
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
export default About
