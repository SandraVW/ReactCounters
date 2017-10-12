import { grid as createGrid } from 'component-lib';
import { PowergridComponent } from 'component-lib';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { directinput } from 'component-lib';
import {Link} from 'react-router';
import imagePlanning from '../images/Planning.png';

function gridPlanning(props) {

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
              <p><img src={imagePlanning} height="180" width="600"></img></p>
              <p><h3>Done</h3>
              - Documenting the general PowerGrid< br/>
              - Creating an overview of all available Exensions< br />
              - Creation of a development environment for new Extensions<br />
              <h3>To Do</h3>
              - Review the current documentation and extend the React part<br/>
              - Make this site bugfree :) <br/>
              - Start discussion about the content of the master grid repository<br/>
              - Start documenting/implementing the extensions<br/>
              - Start merging the extensions<br/>
               </p>
            </div>
        </div>
}

gridPlanning.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(
    null,
    (dispatch) => {return {dispatch}}
)(gridPlanning);
