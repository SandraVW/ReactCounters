import { grid as createGrid } from 'component-lib';
import { PowergridComponent } from 'component-lib';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { directinput } from 'component-lib';
import {Link} from 'react-router';
import imagePlanning from '../images/ColumnsReact.png';
import imageDate from '../images/DataReact.png';
import createGridImg from '../images/CreateGrid.png';
import powergridComponent from '../images/powergridComponent.png';

function gridReact(props) {

  return  <div>
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
            <h1>PowerGrid in combination with React</h1>
            <h2>React</h2>
            React is a framework that is defined as a javascript libary for building user interfaces. Important to know is that react works component-based. React builds encapsulated components that manage their own state. By combining these components you can make complex views. The logic of these components is written in Javascript. The advantage of this approach is that you can easily pass rich data through your app and keep state out of the DOM. React will efficiently update and render just the right components when your data changes. This limits the number of interactions with the server.
            <h3>Adding a simple grid to a React Page</h3>
            <p>Step 1: Creation of the columns</p>
            <p><img src={imagePlanning} height="220" width="700"></img></p>
            <p>Step 2: Creation of the data</p>
            <p><img src={imageDate} height="220" width="1600"></img></p>
            <p>Step 3: Execute the create grid function</p>
            <p><img src={createGridImg} height="20" width="800"></img></p>
            <p>Step 4: Adding the Powergrid Component as html tag</p>
            <p><img src={powergridComponent} height="20" width="600"></img></p>
            </div>
        </div>
}

gridReact.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(
    null,
    (dispatch) => {return {dispatch}}
)(gridReact);
