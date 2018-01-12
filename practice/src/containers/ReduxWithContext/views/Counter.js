import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../Actions.js';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {
  constructor(props,context) {

    super(props,context);

    ////////////debug
    console.warn(`【 Counter 】> constructor()`);
    console.log('props:',props);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);

    this.state = this.getOwnState();



  }

  getOwnState() {

    ////////////debug
    console.warn(`【 Counter 】> getOwnState`);
    console.log('this.context.store.getState()[this.props.caption]:',this.context.store.getState()[this.props.caption]);

    return {
      value: this.context.store.getState()[this.props.caption]
    };
  }

  onIncrement() {

    ////////////debug
    console.warn(`【 Counter 】> onIncrement()`);

    this.context.store.dispatch(Actions.increment(this.props.caption));
  }

  onDecrement() {

    ////////////debug
    console.warn(`【 Counter 】> onDecrement()`);

    this.context.store.dispatch(Actions.decrement(this.props.caption));
  }

  onChange() {

    ////////////debug
    console.warn(`【 Counter 】> onChange() > this.geOwnState()`);

    this.setState(this.getOwnState());
  }

  shouldComponentUpdate(nextProps, nextState) {

    ////////////debug
    console.warn(`【 Counter 】> shouldComponentUpdate()`);

    return (nextProps.caption !== this.props.caption) ||
      (nextState.value !== this.state.value);
  }

  componentDidMount() {
    this.context.store.subscribe(this.onChange);

    ////////////debug
    console.warn(`【 Counter 】> componentDidMount()`);
    console.log(`this.context.store.subscribe(this.onChange);//监听 Store 状态变化，发生变化就调用 onChange()`);
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange);

    ////////////debug
    console.warn(`【 Counter 】> componentWillUnmount()`);
  }

  render() {

    ////////////debug
    console.warn(`【 Counter 】> render()`);

    const value = this.state.value;
    const {caption} = this.props;

    return (
      <div>
        <button style={buttonStyle} onClick={this.onIncrement}>+</button>
        <button style={buttonStyle} onClick={this.onDecrement}>-</button>
        <span>{caption} count: {value}</span>
      </div>
    );
  }
}

Counter.contextTypes = {
  store: PropTypes.object
}


export default Counter;

