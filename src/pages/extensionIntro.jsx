import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { grid as createGrid } from 'component-lib';
import { PowergridComponent } from 'component-lib';
import { fromJS } from 'immutable';
import { directinput } from 'component-lib';

const columns = fromJS([
    {_key: 'id', width: 50, title: 'ProdNr'},
    {_key: 'description', width: 450, title: 'Description'},
    {_key: 'inStock', width: 450, title: 'In Stock', type: 'checkbox'},
    {_key: 'availableInWS', width: 450, title: 'Reserved', type: 'radio' }
]);

function directInput(props) {

  const dataSimpleGrid = fromJS([
    {id: '54687', description: 'Product 1', inStock: true, availableInWS: false},
    {id: '58798', description: 'Product 2', inStock: false, availableInWS: true},
    {id: '87951', description: 'Product 3', inStock: true, availableInWS: true},
    {id: '98757', description: 'Product 4', inStock: true, availableInWS: false}
  ]);

  const gridSettings = createGrid('x-powergrid-125', columns, dataSimpleGrid);
  const gridSettingsWithExtension = createGrid('x-powergrid-155', columns, dataSimpleGrid, [directinput]);

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
              <h1>Intoduction to extensions</h1>
              <p>
                By default a PowerGrid only shows static data in a table. An extension can be defined as a file that add some functionality to the basic grid. Below is an example of a grid without any extensions: <br />
                <div className="simpleGridWithNoExtensions">
                    <PowergridComponent dispatch={props.dispatch} {...gridSettings}/>
                </div>
                Below the same grid with the extension called directInput.
                <div className="simpleGridWithExtensions">
                    <PowergridComponent dispatch={props.dispatch} {...gridSettingsWithExtension}/>
                </div>
                The extension called directInput will display columns with type "checkbox" or "radio" as respective inputs. This extension will be used as an example to describe how an extension works. <br />
                Every extension is created in a separate file and contains the define function. This function is defined in RequireJS. RequireJS is a JavaScript file and module loader and is optimized for in-browser use.
                Using a modular script loader like RequireJS will improve the speed and quality of your code. For every extension the define function will return an init function. <br /><br />

                In the init function an overwrite of the grid function is done by the following code: override(grid, function($super)). Within this structure you can overwrite a function of the grid similar to how a Java overwrite works. In the extension directInput the function renderCellContent is overwritten.
                This function will check if the column type is checkbox or radio and returns an input html object if this is the case. If no type is defined on the column this extension will not do nothing.
              </p>
            </div>
        </div>
}

directInput.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(
    null,
    (dispatch) => {return {dispatch}}
)(directInput);
