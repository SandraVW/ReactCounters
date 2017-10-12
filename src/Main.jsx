import React from 'react';
import ReduxCounter from './ReduxCounter';
import GridTest from './GridTest';
import {Link} from 'react-router';
import imageIntro from './images/Intro.jpg';
import numberImage from './images/Numbers.png';

class Main extends React.Component {

  render() {
    return <div>
            <h1 className="element">PowerGrid</h1>
            <h3 className="headerTwoStyle">Welcome to the PowerGrid Documentation</h3>
            <div className="menuStyle">
                <Link id='HomePageLink' to='/Main.jsx'>Home</Link>&nbsp;>&nbsp;
                <Link id='BasicGridInfo' to='/pages/directInput'>Preparation</Link>&nbsp;>&nbsp;
                <Link id='BasicGridInfo' to='/pages/gridDefinition'>Creation</Link>&nbsp;>&nbsp;
                <Link id='BasicGridInfo' to='/pages/extensionIntro'>Extensions Intro</Link>>&nbsp;>&nbsp;
                <Link id='extenOver'     to='/pages/extOverview'>Extension Overview</Link>&nbsp;>&nbsp;
                <Link id='extenDep'      to='/pages/extDependencies'>Extension Dep</Link>&nbsp;>&nbsp;
                <Link id='planningGrid'  to='./pages/gridPlanning'>Planning</Link>&nbsp;>&nbsp;
                <Link id='reactGrid'     to='./pages/gridReact'>React</Link>
            </div>
            <div className="textStyle">
              <h2>General Information</h2>
              <p>
              The PowerGrid is a powerfull and reusable HTML5 grid component. <br /><br />
              Master Grid Repository: https://github.com/PearlChain/PowerGrid <br />
              Maintainer: Sandra Van Woensel<br /><br />
              <h3>Usages of the Grid in Pearl Chain: </h3>
              - Canon CPQ<br />
              - Mobile Inventory Management (MIM)<br />
              - Dashboards<br />
              - Drydock<br />
              <h3>Usages of functionalities:</h3>
              </p>
              <p><img src={numberImage} height="100" width="350"></img></p><br />
              <p><img src={imageIntro} height="220" width="250"></img></p>

            </div>
          </div>
  }
}

export default Main;
