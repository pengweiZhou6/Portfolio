import React, {Component} from 'react'
import '../stylesheet/Skills.scss';
import CropIcon from '@material-ui/icons/Crop';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';


export default class Skills extends Component {

    render() {
        return (
            <div>
                <section className="colorlib-skills section-skills" data-section="skills">
                    <div className="card-deck padding-deck">
                        <div className="card framework-skill-card">
                            <CropIcon style={{fontSize: 150}} className="crop"/>
                            <h5 className="card-title">Frameworks</h5>
                            <div>
                                <hr className="card-divider"/>
                            </div>
                            <div className="card-body">
                                <p className="card-text">React-Redux</p>
                                <p className="card-text">Electron</p>
                                <p className="card-text">Bootstrap</p>
                                <p className="card-text">Jquery</p>
                                <p className="card-text">Sequelize</p>
                                <p className="card-text">NodeJs+Express</p>
                                <p className="card-text">Material-UI</p>
                            </div>
                        </div>
                        <div className="card programing-skill-card">
                            <CodeIcon style={{fontSize: 150}} className="crop"/>
                            <h5 className="card-title">Programming</h5>
                            <div>
                                <hr className="card-divider"/>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Java</p>
                                <p className="card-text">JavaScript</p>
                                <p className="card-text">C</p>
                                <p className="card-text">Python</p>
                                <p className="card-text">TypeScript</p>
                                <p className="card-text">SQL/NoSQL</p>
                                <p className="card-text">HTML/PHP</p>
                                <p className="card-text">CSS/SCSS</p>
                            </div>
                        </div>
                        <div className="card tool-skill-card">
                            <BuildIcon style={{fontSize: 150}} className="crop"/>
                            <h5 className="card-title">Tools</h5>
                            <div>
                                <hr className="card-divider"/>
                            </div>
                            <div className="card-body">
                                <p className="card-text">MongoDB</p>
                                <p className="card-text">Oracle Database</p>
                                <p className="card-text">Heroku</p>
                                <p className="card-text">Postman</p>
                                <p className="card-text">Git</p>
                                <p className="card-text">JUnit</p>
                                <p className="card-text">Wireshark</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}