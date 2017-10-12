import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { grid as createGrid } from 'component-lib';
import { PowergridComponent } from 'component-lib';
import { fromJS } from 'immutable';
import { directinput } from 'component-lib';

const columns = fromJS([
    {_key: 'extensionName', width: 150, title: 'Extension'},
    {_key: 'dragging', width: 150, title: 'dragging',  type: 'checkbox'},
    {_key: 'columnsizing', width: 150, title: 'columnsizing',  type: 'checkbox'},
    {_key: 'editing', width: 150, title: 'editing',  type: 'checkbox'},
    {_key: 'grouping', width: 150, title: 'grouping',  type: 'checkbox'},
    {_key: 'filtering', width: 150, title: 'filtering',  type: 'checkbox'},
    {_key: 'directInput', width: 150, title: 'directInput', type: 'checkbox'},
    {_key: 'contextmenu', width: 150, title: 'contextmenu', type: 'checkbox' },
    {_key: 'templating', width: 150, title: 'templating', type: 'checkbox' }

]);

function extDependencies(props) {

  const dataSimpleGrid = fromJS([
    {extensionName: 'sorting' , dragging: true, columnsizing: true, editing: false, grouping: false, filtering: false, directInput: false, contextmenu: false, templating: false },
    {extensionName: 'directInput' , dragging: false, columnsizing: false, editing: true, grouping: false, filtering: false, directInput: false, contextmenu: false, templating: false },
    {extensionName: 'treeGrid' , dragging: false, columnsizing: false, editing: false, grouping: true, filtering: false, directInput: false, contextmenu: false, templating: true},
    {extensionName: 'dragging' , dragging: false, columnsizing: false, editing: false, grouping: false, filtering: true, directInput: false, contextmenu: false, templating: false},
    {extensionName: 'columnmoving' , dragging: false, columnsizing: false, editing: false, grouping: false, filtering: true, directInput: false, contextmenu: false, templating: false},
    {extensionName: 'columnsizing' , dragging: false, columnsizing: false, editing: false, grouping: false, filtering: true, directInput: false, contextmenu: false, templating: false},
    {extensionName: 'actionButtion' , dragging: false, columnsizing: false, editing: false, grouping: false, filtering: false, directInput: true, contextmenu: false, templating: false},
    {extensionName: 'excelExpart' , dragging: false, columnsizing: false, editing: false, grouping: false, filtering: false, directInput: false, contextmenu: true, templating: false}
  ]);

  const gridSettingsWithExtension = createGrid('x-powergrid-155', columns, dataSimpleGrid, [directinput]);

  return  <div>
             <h1 className="element">PowerGrid</h1>
             <h3 className="headerTwoStyle">Welcome to the PowerGrid Documentation</h3>
             <div className="menuStyle">
                <Link id='HomePageLink' to='/Main.jsx'>Home</Link>&nbsp;>&nbsp;
                <Link id='BasicGridInfo' to='/pages/directInput'>Preparation</Link>&nbsp;>&nbsp;
                <Link id='BasicGridInfo' to='/pages/gridDefinition'>Creation</Link>&nbsp;>&nbsp;
                <Link id='BasicGridInfo' to='/pages/extensionIntro'>Extensions Intro</Link>&nbsp;>&nbsp;
                <Link id='extenOver'     to='/pages/extOverview'>Extension Overview</Link>&nbsp;>&nbsp;
                <Link id='extenDep'      to='/pages/extDependencies'>Extension Dep</Link>&nbsp;>&nbsp;
                <Link id='planningGrid'  to='./pages/gridPlanning'>Planning</Link>&nbsp;>&nbsp;
                <Link id='reactGrid'     to='./pages/gridReact'>React</Link>
            </div>
            <div className="textStyle">
              <h1>Dependencies between extensions</h1>
              <p>
                As described in the "introduction to extensions" an extension is overwritting a function of the grid. Because of this, it is import to load them in the correct order. A dependency between two extensions can be created by adding a loadFirst: ['nameOtherExtension'] before the init function.
                By adding this dependency it can be that an extension is load into the grid without having it explitly requested. <br /><br />
                The grid bellow will give an overview of the dependencies between the current extensions. In the columns you see the extensions selected that should be loaded before loading the extension. <br /><br />
                <div className="simpleGridWithNoExtensions">
                    <PowergridComponent dispatch={props.dispatch} {...gridSettingsWithExtension}/>
                </div>
              </p>
            </div>
        </div>
}

extDependencies.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(
    null,
    (dispatch) => {return {dispatch}}
)(extDependencies);
