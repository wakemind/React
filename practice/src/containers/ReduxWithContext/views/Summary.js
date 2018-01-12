import React, { Component } from 'react';

import store from '../Store.js';

class Summary extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  getOwnState() {
    const state = store.getState();

    ////////////debug
    console.warn(`【 Summary 】> getOwnState `);
    console.log('store.geState()',state);

    let sum = 0;
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }

    return { sum: sum };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.sum !== this.state.sum;
  }

  componentDidMount() {
    let un = store.subscribe(this.onChange);

    console.log('=========');

    console.log(un);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  render() {

    ////////////debug
    console.warn(`【 Summary 】> render() `);
    console.log('this.state',this.state);

    const sum = this.state.sum;
    return (
      <div>Total Count: {sum}</div>
    );
  }
}

export default Summary;



