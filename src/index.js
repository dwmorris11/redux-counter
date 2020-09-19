import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

const initialState = {
  count = 0;
}

//This is changed to a constant to allow
//debugger to work in case of misspelling automatically
const INCREMENT = 'INCREMENT';

const incrementValue = () => ({
  type: INCREMENT,
});

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT){
    return {
      count: state.count + 1,
    };
  }
  return state;
}

import './styles.scss';

class Counter extends Component {
  render() {
    return (
      <main className="Counter">
        <p className="count">0</p>
        <section className="controls">
          <button>Increment</button>
          <button>Decrement</button>
          <button>Reset</button>
        </section>
      </main>
    );
  }
}

const mapStateToProps = () => {};
const mapDispatchToProps = () => {};

connect()(Counter);

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);

