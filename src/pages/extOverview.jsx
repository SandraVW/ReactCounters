import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { grid as createGrid } from 'component-lib';
import { PowergridComponent } from 'component-lib';
import { fromJS } from 'immutable';
import { directinput } from 'component-lib';

const columns = fromJS([
    {_key: 'id', width: 50, title: 'Nr'},
    {_key: 'fileName', width: 450, title: 'Filename'},
    {_key: 'availableInCanon', width: 150, title: 'CPQ', type: 'checkbox'},
    {_key: 'availableInPearlChainMaster', width: 150, title: 'Master', type: 'checkbox' },
    {_key: 'availableInReact', width: 150, title: 'Component-lib', type: 'checkbox' },
    {_key: 'availableInMIM', width: 150, title: 'MIM/Dashboards', type: 'checkbox' },
    {_key: 'created', width: 150, title: 'Outside PC', type: 'checkbox' },

]);

const extensions = fromJS([
      {id: '01', fileName: 'ActionButtons.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: true, created: false},
      {id: '02', fileName: 'Columnsettings.js', availableInCanon:true,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: false},
      {id: '03', fileName: 'ContextMenu.js', availableInCanon:true,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: false},
      {id: '04', fileName: 'Currencies.js', availableInCanon:true,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: false},
      {id: '05', fileName: 'CurrencyConversion.js', availableInCanon:true,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: false},
      {id: '06', fileName: 'customRow.js', availableInCanon:true,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: false},
      {id: '07', fileName: 'Debug.js', availableInCanon:true,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: false},
      {id: '08', fileName: 'Editing_Option_formula.js', availableInCanon:true,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: false},
      {id: '09', fileName: 'ElementTooltip.js', availableInCanon:true,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: false},
      {id: '10', fileName: 'ExportToExcel.js', availableInCanon:true,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: false},
      {id: '11', fileName: 'Hiddenrows.js', availableInCanon:true,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: false},
      {id: '12', fileName: 'NestedHearders.js', availableInCanon:true,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: false},
      {id: '13', fileName: 'Paging.js', availableInCanon:true,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: false},
      {id: '14', fileName: 'Styles.js', availableInCanon:true,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: false},
      {id: '15', fileName: 'Styling.js', availableInCanon:false,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '16', fileName: 'align.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '17', fileName: 'autosizecolumn.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '18', fileName: 'columnmoving.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '19', fileName: 'columnsizing.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '20', fileName: 'directinput.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: true, availableInMIM: false, created: false},
      {id: '21', fileName: 'dragging.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '22', fileName: 'editing.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: true, availableInMIM: false, created: false},
      {id: '23', fileName: 'editing_currency.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '24', fileName: 'editing_date.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '25', fileName: 'editing_number_int.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '26', fileName: 'editing_option.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '27', fileName: 'filtering.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '28', fileName: 'formatting.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '29', fileName: 'grouping.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '30', fileName: 'rowhighlighting.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '31', fileName: 'selection.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '32', fileName: 'sorting.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: true, created: false},
      {id: '33', fileName: 'statistics.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '34', fileName: 'subgrids.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: true, created: false},
      {id: '35', fileName: 'subview.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '36', fileName: 'templating.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '37', fileName: 'treegrid.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '38', fileName: 'validation.js', availableInCanon:true,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '39', fileName: 'backdrop.js', availableInCanon:false,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '40', fileName: 'cellSelection.js', availableInCanon:false,  availableInPearlChainMaster: true, availableInReact: true, availableInMIM: false, created: false},
      {id: '41', fileName: 'dummy.js', availableInCanon:false,  availableInPearlChainMaster: true, availableInReact: false, availableInMIM: false, created: false},
      {id: '42', fileName: 'lazytreegrid.js', availableInCanon:true,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: false},
      {id: '43', fileName: 'spinner.js', availableInCanon:false,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: true, created: false},
      {id: '44', fileName: 'filtering_date.js', availableInCanon:false,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: true},
      {id: '45', fileName: 'filtering_option.js', availableInCanon:false,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: true},
      {id: '46', fileName: 'flexcolumns.js', availableInCanon:false,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: true},
      {id: '47', fileName: 'subCells.js', availableInCanon:false,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: true},
      {id: '48', fileName: 'summarize.js', availableInCanon:false,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: true},
      {id: '49', fileName: 'treegrid.js', availableInCanon:false,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: true},
      {id: '50', fileName: 'variablerowHeight.js', availableInCanon:false,  availableInPearlChainMaster: false, availableInReact: false, availableInMIM: false, created: true}
    ]);


function extOverview(props) {

  const gridSettingsWithExtension = createGrid('x-powergrid-155', columns, extensions, [directinput]);

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
              <h1>Overview of the Grid Extensions</h1>
              <p>
                <div className="simpleGridOverview">
                    <PowergridComponent dispatch={props.dispatch} {...gridSettingsWithExtension}/>
                </div>
              </p>
            </div>
        </div>
}

extOverview.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(
    null,
    (dispatch) => {return {dispatch}}
)(extOverview);
