import React, {Component} from 'react'
import '../stylesheet/Header.scss'
import AccountBoxIcon from '@material-ui/icons/AccountBox';


export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse"
                     data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i/></nav>
                <aside id="colorlib-aside" className="border js-fullheight hideScrollbar">
                    <div className="text-center">
                        <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}}/>
                        <h1 id="colorlib-logo" className="myName"><a href="index.html">Pengwei Zhou</a></h1>
                        <span className="email"><i className="icon-mail"/> pengweizhou6@gmail.com</span>
                    </div>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                            <ul>
                                <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                                <li><a href="#about" data-nav-section="about">About</a></li>
                                <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                                {/*<li><a href="#experience" data-nav-section="experience">Experience</a></li>*/}
                                <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                            </ul>
                        </div>
                    </nav>
                    <nav id="colorlib-main-menu">
                        <ul>
                            <li><a
                                href="https://drive.google.com/file/d/1Fmi2JHg_Q0CibpgWgA0wPY3sA2qT3AfU/view?usp=sharing"
                                target="_blank" rel="noopener noreferrer"><AccountBoxIcon/></a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100010996237620" target="_blank" rel="noopener noreferrer"><i
                                className="icon-facebook2"/></a></li>
                            <li><a href="https://www.linkedin.com/in/pengweizhou" target="_blank"
                                   rel="noopener noreferrer"><i className="icon-linkedin2"/></a></li>
                            <li><a href="https://github.com/pengweiZhou6" target="_blank" rel="noopener noreferrer"><i
                                className="icon-github"/></a></li>
                        </ul>
                    </nav>
                </aside>
            </div>
        )
    }
}