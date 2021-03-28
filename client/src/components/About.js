import React, {Component} from "react";
import '../stylesheet/About.scss'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about section-about" data-section="about">
                    <div className="body">
                        <p className="title">
                            You can also call me Oliver!
                        </p>
                        <p className="subtitle">
                            Thank you for visiting my website.
                        </p>
                        <p className="introduce">
                            I am a recent graduate from the University of British Columbia with a bachelor's degree in
                            computer science.
                            <br/>I enjoy the process of problem solving and building up the project piece by piece.
                        </p>
                    </div>

                </section>
            </div>
        )
    }
}
