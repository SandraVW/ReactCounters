import { grid as createGrid } from 'component-lib';
import { PowergridComponent } from 'component-lib';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { directinput } from 'component-lib';
import {Link} from 'react-router';

function directInput(props) {

  return  <div>
             <h1 className="element">PowerGrid</h1>
             <h2 className="headerTwoStyle">Welcome to the PowerGrid Documentation</h2>
             <div className="menuStyle">
                <Link id='BasicGridInfo' to='/pages/directInput'>Preparation</Link>&nbsp;>&nbsp;
                <Link id='BasicGridInfo' to='/pages/gridDefinition'>Creation</Link>&nbsp;>&nbsp;
                <Link id='BasicGridInfo' to='/pages/extensionIntro'>Extensions Intro</Link>
            </div>
            <div className="textStyle">
              <h1>Creation of the PowerGrid</h1>
              <p>The creation of the grid is done in different steps. The code for the creation can be found in the file called PowerGrid.js. <br />
                 The creation start with the function called PowerGrid. Within this function the given options will be compared with the default options.
                 More information about this options is described in the chapter called prepartion of the grid. The datasource will also be distracted from the options and put in a separate variable. <br /><br />

                 The PowerGrid function is calling the beginInit function. This function will be executed before the initiating of the grid. Within this function the scrolbars are created and added the layout of the document by using a vein.inject().
                 Within this function all extensions will be loaded. Before loading the extension they will be sorted by a seperate method. More information about the extension and how they are working will be described in the extensions chapter.
                 When this is done the grid is ready be initiated. This will be done in the init method. <br /><br />

                 The initiating of the PowerGrid starts with the creation of the different containers. A container can be defined as a html div that has a specific ccs class. This ccs class will  be defined in the pg.css styleSheet.
                 When using the grid, this ccs style can be overwritten. Bellow the different containers that are created:<br />

                 <ol>
                   <li>container: div class='powergrid'</li>
                   <li>columnheadercontainer: div class='pg-columnheaders'</li>
                   <li>headercontainer: div class='pg-rowgroup pg-header'</li>
                   <li>scrollingcontainer:div class='pg-rowgroup pg-scrolling'</li>
                   <li>footercontainer: div class='pg-rowgroup pg-footer'</li>
                   <li>scroller:div class='pg-scroller'</li>
                   <li>scrollFiller: div class='pg-scroller-filler'</li>
                 </ol>

                Based on the options that are selected, some additional css classes are added to the main container. An example of this is pg-full-width and pg-autoresize. <br />
                Toevoegen info in verband met rendering <br /><br />

                In the init function of the grid a listeren will be created for the events bellow on the dataSource. This events are defined by Jquery like this $(this.dataSource).on('dataloaded', function()).
                Within the function another method of the grid is called. If required this method will call a method from the dataSource. For example when triggering the event to add some new rows the function getData will be called from the dataSource with a start and end number. <br />

                <ol>
                  <li>on('dataloaded', function())</li>
                  <li>on('rowsremoved', function())</li>
                  <li>on('rowsadded', function())</li>
                  <li>on('datachanged', function())</li>
                </ol>

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
