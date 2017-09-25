import React from 'react';
import ReduxCounter from './ReduxCounter';
import GridTest from './GridTest';

class Main extends React.Component {
  render() {
    return <div>
            <h1 className="element">PowerGrid</h1>
            <h2 className="headerTwoStyle">Welcome to the PowerGrid Documentation</h2>
            <GridTest/>
          </div>
  }
}

export default Main;
