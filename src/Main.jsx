import React from 'react';
import ReduxCounter from './ReduxCounter';
import GridTest from './GridTest';
import {Link} from 'react-router';
import directInput from './pages/directInput';

class Main extends React.Component {
  render() {
    return <div>
            <h1 className="element">PowerGrid</h1>
            <h2 className="headerTwoStyle">Welcome to the PowerGrid Documentation</h2>
            <div className="menuStyle">
                <Link id='BasicGridInfo' to='/pages/directInput'>Preparation</Link>&nbsp;>&nbsp;
                <Link id='BasicGridInfo' to='/pages/gridDefinition'>Creation</Link>&nbsp;>&nbsp;
                <Link id='BasicGridInfo' to='/pages/extensionIntro'>Extensions Intro</Link>
            </div>
            <GridTest/>
          </div>
  }
}

export default Main;
