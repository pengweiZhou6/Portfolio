import React, {Component} from "react";
import '../stylesheet/About.scss'

export default class Sidebar extends Component {
    render() {
        return (
    <div>
        <section className="colorlib-about section-about" data-section="about">
            <div className="body">
                <p className="title">
                    Hi! My name is Pengwei Zhou.
                </p>
                <p className="subtitle">
                    I'm very appreciate you visiting my website.
                </p>
                <p className="introduce">
                    I recently graduated from the University of British Columbia with degree, Bachelor of Science with a major in computer science.
                    <br/>I enjoy the process of problem solving and building up the project piece by piece.
                </p>
            </div>

    </section>
    </div>
        )
    }
}
