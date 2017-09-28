import { grid as createGrid } from 'component-lib';
import { PowergridComponent } from 'component-lib';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { directinput } from 'component-lib';
import {Link} from 'react-router';

const columns = fromJS([
    {_key: 'id', width: 50, title: 'Nr'},
    {_key: 'description', width: 450, title: 'Filename'},
    {_key: 'checked', width: 450, title: 'Checked', type: 'checkbox'},
    {_key: 'radio', width: 450, title: 'Radio', type: 'radio' }
]);

function directInput(props) {
  const sampleData = fromJS([
    {id: '01', description: 'Product 1', checked:true,  radio: false},
    {id: '02', description: 'Product 2', checked:false,  radio: true}
  ]);

  const gridSettings = createGrid('directInputGrid', columns, sampleData, [directinput]);

  return  <div>
             <h1 className="element">PowerGrid</h1>
             <h2 className="headerTwoStyle">Welcome to the PowerGrid Documentation</h2>
             <div className="menuStyle">
                <Link id='BasicGridInfo' to='/pages/directInput'>Preparation</Link>&nbsp;>&nbsp;
                <Link id='BasicGridInfo' to='/pages/gridDefinition'>Creation</Link>&nbsp;>&nbsp;
                <Link id='BasicGridInfo' to='/pages/extensionIntro'>Extensions Intro</Link>
            </div>
            <div className="textStyle">
              <h1>What do I need to create a PowerGrid? </h1>
              <p> When creating a PowerGrid, two objects need to be provided:
                <ol>
                  <li>target</li>
                  <li>options</li>
                </ol>
                The target will be an html object that contains the div that should contain the PowerGrid. When creating the grid he will append some underlining div elements to this html rootNode.
                The option object is a list of properties, the most import are columns, dataSource and extensions. This three properties will be described in a separate chapters. In this object there are seven other options that can be added. When a user didn't add this properties the system will use the default values.
                Bellow a list of these options with their default value: <br />
                <ol>
                  <li>virtualScrollingExcess: 10</li>
                  <li>frozenRowsTop: 0</li>
                  <li>frozenRowsBottom: 0</li>
                  <li>frozenColumnsLeft: 0</li>
                  <li>frozenColumnsRight: 0</li>
                  <li>fullWidth: true</li>
                  <li>rowHeight: 31</li>
                </ol>
              The property called virtualScrollingExcess defines the number of extra rows to render on each side (top/bottom) of the viewport. This reduces flickering when scrolling. The options.columns should be filled with an arrayslist that defines the different columns in the grid.
              Each column is identfied by a key. This key can be provided by the datasource, if not the grid will use the sequence of the column. In the example only key, width, title and type are given as properties from the columns.
              It can be that some extensions requires some additional poperties on the column. For example the threegrid extension requires to identify a treecolumn.<br /><br />

              &#91; &#123; _key: 'id', width: 50, title: 'Nr' &#125;,<br />
                    &#123;_key: 'fileName', width: 450, title: 'Filename' &#125;,<br />
                    &#123;_key: 'availableInCanon', width: 450, title: 'In CPQ', type: 'checkbox' &#125; ,<br />
                    &#123;_key: 'availableInPearlChainMaster', width: 450, title: 'In Master', type: 'checkbox' &#125;<br />
              ]

              </p>
              <h2>Creation of the DataSource</h2>
              <div>
                <p>When creating the grid some options are required. One of this options is called DataSource. A dataSource is an object that contains the data. By default the PowerGrid is not creating a datasource. <br /><br />

                For the DataSource Object the following methods should be available:
                <ol>
                  <li>getData()</li>
                  <li>recordCount()</li>
                  <li>updateData()</li>
                  <li>setValue()</li>
                  <li>getRecordById()</li>
                  <li>IsReady()</li>
                  <li>Load()</li>
                </ol>
                In the PowerGrid Repository the following DataSources are available to use:
                <ol>
                  <li>jsondatasource</li>
                  <li>arraydatasource</li>
                  <li>sortingdatasource</li>
                  <li>groupingdatasource</li>
                </ol>
               </p>
              </div>
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
