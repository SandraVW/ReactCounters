import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { grid as createGrid } from 'component-lib';
import { PowergridComponent } from 'component-lib';
import { fromJS } from 'immutable';
import { directinput } from 'component-lib';

const columns = fromJS([
    {_key: 'extensionName', width: 50, title: 'Extension'},
    {_key: 'dragging', width: 450, title: 'dragging',  type: 'checkbox'},
    {_key: 'columnsizing', width: 450, title: 'columnsizing',  type: 'checkbox'},
    {_key: 'editing', width: 450, title: 'editing',  type: 'checkbox'},
    {_key: 'grouping', width: 450, title: 'grouping',  type: 'checkbox'},
    {_key: 'filtering', width: 450, title: 'filtering',  type: 'checkbox'},
    {_key: 'directInput', width: 450, title: 'directInput', type: 'checkbox'},
    {_key: 'contextmenu', width: 450, title: 'contextmenu', type: 'radio' }
]);

function extDependencies(props) {

  const dataSimpleGrid = fromJS([
    {extensionName: 'sorting' , dragging: false, columnsizing: false, editing: false, grouping: false, filtering: false, directInput: false, contextmenu: false },
    {extensionName: 'directInput' , dragging: false, columnsizing: false, editing: false, grouping: false, filtering: false, directInput: false, contextmenu: false },
    {extensionName: 'treeGrid' , dragging: false, columnsizing: false, editing: false, grouping: false, filtering: false, directInput: false, contextmenu: false},
    {extensionName: 'dragging' , dragging: false, columnsizing: false, editing: false, grouping: false, filtering: false, directInput: false, contextmenu: false},
    {extensionName: 'columnmoving' , dragging: false, columnsizing: false, editing: false, grouping: false, filtering: false, directInput: false, contextmenu: false},
    {extensionName: 'columnsizing' , dragging: false, columnsizing: false, editing: false, grouping: false, filtering: false, directInput: false, contextmenu: false},
    {extensionName: 'actionButtion' , dragging: false, columnsizing: false, editing: false, grouping: false, filtering: false, directInput: false, contextmenu: false},
    {extensionName: 'excelExpart' , dragging: false, columnsizing: false, editing: false, grouping: false, filtering: false, directInput: false, contextmenu: false}
  ]);

  const gridSettingsWithExtension = createGrid('x-powergrid-155', columns, dataSimpleGrid, [directinput]);

  return  <div>
             <h1 className="element">PowerGrid</h1>
             <h2 className="headerTwoStyle">Welcome to the PowerGrid Documentation</h2>
             <div className="menuStyle">
                <Link id='BasicGridInfo' to='/pages/directInput'>Preparation</Link>&nbsp;>&nbsp;
                <Link id='BasicGridInfo' to='/pages/gridDefinition'>Creation</Link>&nbsp;>&nbsp;
                <Link id='BasicGridInfo' to='/pages/extensionIntro'>Extensions Intro</Link>
            </div>
            <div className="textStyle">
              <h1>Dependencies between extensions</h1>
              <p>
                As described in the introduction to extensions an extension is overwritting a function of the grid. Because of this, it is import to load them in the correct order. A dependency between two extensions can be created by adding a loadFirst: ['nameOtherExtension'] before the init function.
                The grid bellow will give an overview of the dependencies between the current extensions. <br />
                <div className="simpleGridWithNoExtensions">
                    <PowergridComponent dispatch={props.dispatch} {...gridSettingsWithExtension}/>
                </div>
                Bellow the same grid with the extension called directInput.

                The extesion called directInput will display columns with type "checkbox" or "radio" as respective inputs. This extension will be used to discribe how an extension work. <br />
                Every extension is created in a  separate file and contains the define function. This function is defined in RequireJS. RequireJS is a JavaScript file and module loader and is optimized for in-browser use.
                Using a modular script loader like RequireJS will improve the speed and quality of your code. For every extension the define function will return an init function. JavaScript doesn't have a built-in init() function because it's not a part of the language.
                But it is not uncommon like here that a init function is manually created. <br /><br />

                Before creating
                loadFirst: ['editing']

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
