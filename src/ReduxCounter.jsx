import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { increment, decrease } from './actions';

class ReduxCounter extends React.Component {

render() {
    const {count, increment, decrease, id} = this.props;
    return <div>
              {<p>
                Number of Greetings: {count}  &nbsp;
                <input type='button' value='+' onClick={() => {increment(id)}}/>
                <input type='button' value='-' onClick={() => {decrease(id)}}/>
              </p> }
          </div>
  }
}

ReduxCounter.propTypes = {
   id: PropTypes.string.isRequired,
   count: PropTypes.number.isRequired,
   increment: PropTypes.func.isRequired,
   decrease: PropTypes.func.isRequired
}

export default connect(
  function(state){ return {count: state.id.count}},{increment, decrease})(ReduxCounter)
