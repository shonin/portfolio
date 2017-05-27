import React, { Component } from 'react';
import data from './data';

class Menu extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }
  render() {
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
          {data.map( (project) => {
            return <li style={{display: 'inline'}}>
                <a
                    href="javascript:void(0)" onClick={()=>this.props.update(project)}
                    style={{color: '#555', marginLeft: '15px', display: 'inline-block'}}
                >
                    {project.title}
                </a>
            </li>
          })}
          </ul>
        </div>
    );
  }
}

export default Menu;
