import React, { Component } from 'react';
import './App.css';
import Iframe from './iframe';
import Menu from './Menu';
import data from './data';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {...data[2]};
      this.updateProject = this.updateProject.bind(this);
  }

  updateProject(project) {
      this.setState({
          url: project.url,
          title: project.title,
          description: project.description
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>
            <a
                style={{color: 'inherit', textDecoration: 'none'}}
                href="/">
                Elliot Charney
            </a>
        </h1>
          <Menu update={this.updateProject}/>
        </div>
        <div style={{
            width: '100%',
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center'
        }}>
            <div style={{maxWidth: "60%", textAlign: "center"}}>
                <h2>{this.state.title}</h2>
                <p><a href={this.state.url} target="_blank">Visit Site</a></p>
                <p>{this.state.description}</p>
            </div>
            <div width="75%">
                <br />
                <span>Project Preview:</span>
                <Iframe url={this.state.url} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
