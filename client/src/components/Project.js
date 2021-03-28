import React, {Component} from 'react';
import '../stylesheet/Project.scss';
import GitHubIcon from '@material-ui/icons/GitHub';

class Project extends Component {
    state = {
        projectID: this.props.project.id,
        projectTitle: this.props.project.title,
        projectImage: this.props.project.image,
        projectDescription: this.props.project.description,
        projectSkills: this.props.project.skills,
        githubLink: this.props.project.githubLink,
    };

    render() {
        return (

            <div id={this.state.projectID} className="card">
                <img class="card-img-top" src={this.state.projectImage}/>
                <div className="card-body">
                    <h5 className="project-title">{this.state.projectTitle}</h5>
                    <div>
                        <hr className="card-divider"/>
                    </div>
                    <div className="card-body">
                        <p className="project-text">{this.state.projectDescription}</p>
                    </div>
                    <a className="btn btn-success code-button" href={this.state.githubLink} target="_blank">
                        <GitHubIcon/>
                    </a>
                </div>
            </div>

        );
    }
}

export default Project;