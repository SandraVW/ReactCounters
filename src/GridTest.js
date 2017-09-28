import { grid as createGrid } from 'component-lib';
import { PowergridComponent } from 'component-lib';
import React from 'react';
import PropTypes from 'prop-types'
import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import { lazytreegrid } from 'component-lib';
import { directinput } from 'component-lib';
//import { arraydatasource } from 'powergrid/web/arraydatasource';
//import { treeGrid } from 'component-lib/src/component-lib/powergrid/extensions/treeGrid';
import 'powergrid';

const columns = fromJS([
    {_key: 'id', width: 50, title: 'Nr'},
    {_key: 'fileName', width: 450, title: 'Filename'},
    {_key: 'availableInCanon', width: 450, title: 'In CPQ', type: 'checkbox'},
    {_key: 'availableInPearlChainMaster', width: 450, title: 'In Master', type: 'checkbox' }
    // {_key: 'id', width: 450, title: 'id'},
    // {_key: 'content', width: 450, title: 'content' }
]);

function GridTest(props) {
    const level1 = fromJS([
      {id: '01', fileName: 'ActionButtons.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '02', fileName: 'Columnsettings.js', availableInCanon:true,  availableInPearlChainMaster: false},
      {id: '03', fileName: 'ContextMenu.js', availableInCanon:true,  availableInPearlChainMaster: false},
      {id: '04', fileName: 'Currencies.js', availableInCanon:true,  availableInPearlChainMaster: false},
      {id: '05', fileName: 'CurrencyConversion.js', availableInCanon:true,  availableInPearlChainMaster: false},
      {id: '06', fileName: 'customRow.js', availableInCanon:true,  availableInPearlChainMaster: false},
      {id: '07', fileName: 'Debug.js', availableInCanon:true,  availableInPearlChainMaster: false},
      {id: '08', fileName: 'Editing_Option_formula.js', availableInCanon:true,  availableInPearlChainMaster: false},
      {id: '09', fileName: 'ElementTooltip.js', availableInCanon:true,  availableInPearlChainMaster: false},
      {id: '10', fileName: 'ExportToExcel.js', availableInCanon:true,  availableInPearlChainMaster: false},
      {id: '11', fileName: 'Hiddenrows.js', availableInCanon:true,  availableInPearlChainMaster: false},
      {id: '12', fileName: 'NestedHearders.js', availableInCanon:true,  availableInPearlChainMaster: false},
      {id: '13', fileName: 'Paging.js', availableInCanon:true,  availableInPearlChainMaster: false},
      {id: '14', fileName: 'Styles.js', availableInCanon:true,  availableInPearlChainMaster: false},
      {id: '15', fileName: 'Styling.js', availableInCanon:false,  availableInPearlChainMaster: true},
      {id: '16', fileName: 'align.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '17', fileName: 'autosizecolumn.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '18', fileName: 'columnmoving.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '19', fileName: 'columnsizing.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '20', fileName: 'directinput.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '21', fileName: 'dragging.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '22', fileName: 'editing.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '23', fileName: 'editing_currency.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '24', fileName: 'editing_date.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '25', fileName: 'editing_number_int.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '26', fileName: 'editing_option.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '27', fileName: 'filtering.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '28', fileName: 'formatting.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '29', fileName: 'grouping.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '30', fileName: 'rowhighlighting.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '31', fileName: 'selection.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '32', fileName: 'sorting.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '33', fileName: 'statistics.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '34', fileName: 'subgrids.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '35', fileName: 'subview.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '36', fileName: 'templating.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '37', fileName: 'treegrid.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '38', fileName: 'validation.js', availableInCanon:true,  availableInPearlChainMaster: true},
      {id: '39', fileName: 'backdrop.js', availableInCanon:false,  availableInPearlChainMaster: true},
      {id: '40', fileName: 'cellSelection.js', availableInCanon:false,  availableInPearlChainMaster: true},
      {id: '41', fileName: 'dummy.js', availableInCanon:false,  availableInPearlChainMaster: true},
      {id: '42', fileName: 'lazytreegrid.js', availableInCanon:true,  availableInPearlChainMaster: false}
    ]);

    const level2 = fromJS([
      {id: 'Option1', parent:'Prod1', description: 'X Toner 12', content: 'Black Toner for the printer'}
    ]);

    const gridSettings = createGrid('x-powergrid-125', columns, level1, [directinput]);

    return (<div className="flex-form-container">
        <div className='flex-item'>
            <div className="wrap-powergrid">
                <PowergridComponent dispatch={props.dispatch} {...gridSettings}/>
            </div>
        </div>
    </div>)
}

GridTest.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(
    null,
    (dispatch) => {return {dispatch}}
)(GridTest);
