import React, {Component} from 'react'
import '../stylesheet/Home.scss';

export default class Home extends Component {

    render() {
        return (
            <div>
                <section className="colorlib-home section-home" data-section="home">
                    <div className="hero">
                        <h1>Hi, I'm Pengwei Zhou <br></br>A passionate software developer </h1>
                        <a className="scroll-link" href="#about" data-nav-section="about">
                            <svg className="mouse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 130"
                                 preserveAspectRatio="xMidYMid meet">
                                <g fill="none" fill-rule="evenodd">
                                    <rect width="70" height="118" x="1.5" y="1.5" stroke="#FFF" stroke-width="3"
                                          rx="36"/>
                                    <circle className="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                </section>
            </div>
        )
    }
}