import React from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../Actions.js';
import {connect} from 'react-redux';

const buttonStyle = {
  margin: '10px'
};

function Counter({caption, onIncrement, onDecrement, value,name}) {

  console.log('====');
  console.trace();

  ///////////debug
  console.warn(`【 Counter 】> render`);

  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  );
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {

  ////////////debug
  console.warn(`【 Counter 】> mapStateToProps(state, ownProps)`);
  console.log('state:',state);
  console.log('ownProps:',ownProps);

  return {
    value: state[ownProps.caption],
  }
}

function mapDispatchToProps(dispatch, ownProps) {

  ////////////debug
  console.warn(`【 Counter 】> mapDispatchToProps(dispatch, ownProps)`);
  console.log('dispatch:',dispatch);
  console.log('ownProps:',ownProps);

  return {
    onIncrement: () => {

      ////////////debug
      console.warn(`【 Counter 】> onIncrement()`);
      console.log('ownProps.caption:',ownProps.caption);

      dispatch(Actions.increment(ownProps.caption));
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption));
    }
  }
}

let con = connect(mapStateToProps, mapDispatchToProps);
////////////debug
console.warn(`【 Counter 】> let con = connect(mapStateToProps, mapDispatchToProps)`);
console.log(con);

let counter = con(Counter);
////////////debug
console.warn(`【 Counter 】> let counter = con(Counter)`);
console.log(counter);

export default counter;

