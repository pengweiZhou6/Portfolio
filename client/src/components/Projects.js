import React, {Component} from "react";
import Project from "./Project";
import '../stylesheet/Projects.scss';

import contentAggregator from '../assets/images/Content-aggregator.png'
import umlAnalysis from '../assets/images/uml-analysis.png';
import pptGenerator from '../assets/images/powerpoint-DSL.png';
import msgBoard from '../assets/images/message-board.png';
import vpn from '../assets/images/vpn.png';
import portfolio from '../assets/images/portfolio.png';
import totallyGamer from '../assets/images/totally-gamer.png';
import scholarChat from '../assets/images/scholar-chat.png';

export default class Projects extends Component {
    state = {
        projects: [
            {
                id: 'content-aggregator',
                title: 'Content Aggregator',
                image: contentAggregator,
                description: 'The product will consist of a website that consolidates content and points to the content’s\n' +
                    'original location from other websites and repositories. The site will have admins from\n' +
                    'contributing organizations monitoring content published to the site via an admin approval\n' +
                    'system. The main interface of the website will contain a portal to access linked articles. Any\n' +
                    'individual will be able to create an account and submit content to the site subject to admin\n' +
                    'approval.',
                githubLink: "https://github.com/pengweiZhou6/content-aggregator",
                projectSkills: [
                    'React.js', 'UI-material', 'Express', 'Passport', 'Node.js', 'Sequelize', 'MySQL', 'Swagger'
                ]
            },
            {
                id: 'uml-analysis',
                title: 'UML Analysis',
                image: umlAnalysis,
                description: "This project can generate a class diagram automatically from " +
                    "a given Java project to illustrate details in classes and the relations " +
                    "among them intuitively.",
                projectSkills: [
                    'Java'
                ],
                githubLink: "https://github.com/pengweiZhou6/uml-analysis"
            },
            {
                id: 'ppt-generator',
                title: 'Powerpoint Generator DSL',
                image: pptGenerator,
                description: 'Powerpoint Generator DSL can generate a neat presentation slides(powerpoint)' +
                    ' by input text abide the rule we created. This DSL is for people who don\'t want to waste their time adjusting details in PowerPoint/ make a lot simple and similar lecture ppt/ debugging Latex code.',
                projectSkills: [
                    'Java', 'Homebrew-basictex'
                ],
                githubLink: "https://github.com/pengweiZhou6/powerpoint-DSL"
            },
            {
                id: 'message-board',
                title: 'Message Board (MERN stack)',
                image: msgBoard,
                description: 'Message Board is MERN full stack web app where visitor can post their message into the web. The message will be store to the MongoDB and can be edit. The web app is deployed on Heroku.',
                projectSkills: [
                    'React-redux.js', 'Node.js', 'Express.js', 'MongoDB', 'Heroku', 'axios'
                ],
                githubLink: "https://github.com/pengweiZhou6/CS436-a2"
            },
            {
                id: 'portfolio',
                title: 'Portfolio',
                image: portfolio,
                description: 'Here is the website you are visiting.  Welcome to my personal portfolio.',
                projectSkills: [
                    'React.js', 'Node.js', 'Scss', 'UI-material'
                ],
                githubLink: "https://github.com/pengweiZhou6/Portfolio"
            },
            {
                id: 'vpn',
                title: 'VPN',
                image: vpn,
                description: 'This is simple VPN that allows data to be sent from one computer to another computer over protected channel. Our channel provide mutual authentication and key establishment. It also provide confidentiality and integrity protection using the shared secret value computed at both ends by the key establishment protocol.',
                projectSkills: [
                    'Electron.js'
                ],
                githubLink: "https://github.com/pengweiZhou6/VPN"
            },
            {
                id: 'totally-gamer',
                title: 'Totally Gamer',
                image: totallyGamer,
                description: 'A Yelp-clone database and server application that allows for multiple users to simultaneously access, write to, and query extensive restaurant data.',
                projectSkills: [
                    'php', 'css', 'OracleDB', 'Html'
                ],
                githubLink: "https://github.com/pengweiZhou6/Totally-Gamer"
            },
            {
                id: 'scholar-chat',
                title: 'Scholar Chat',
                image: scholarChat,
                description: 'Scholars Chat is an online tutoring website where students can post questions and tutors can initiate a one-on-one video call session with them.',
                projectSkills: [
                    'React-redux.js', 'Node.js', 'Express.js', 'MongoDB', 'Heroku', 'GraphQL'
                ],
                githubLink: "https://github.com/pengweiZhou6/scholars-direct"
            },
        ]

    };

    render() {
        return (
            <div>
                <section className="colorlib-projects section-projects" data-section="projects">
                    <h3>Projects</h3>
                    <br/>
                    <div className="card-columns card-container">
                        {this.state.projects.map(project =>
                            <Project project={project}/>)}
                    </div>
                </section>
            </div>
        )
    }
}