import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import './styles.scss';

const initialState = {
  count: 0,
}

//This is changed to a constant to allow
//debugger to work in case of misspelling automatically
const INCREMENT = 'INCREMENT';

const DECREMENT = 'DECREMENT';

//action creator
const incrementValue = () => ({
  type: INCREMENT,
});

const decrementValue = () => ({
  type: DECREMENT,
});

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT){
    return {
      count: state.count + 1,
    };
  }
  if (action.type === DECREMENT){
    return {
      count: state.count - 1,
    };
  }
  //always return some state if everything falls through
  return state;
}

const store =  createStore(reducer);

class Counter extends Component {

  render() {
    const { count, increment, decrement } = this.props;
    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button>Reset</button>
        </section>
      </main>
    );
  }
}

// takes the entire state in the component
// but takes off the things you want off the state tree
// in this case returning the entire state of the world
const mapStateToProps = (state) => { return state;};

// takes the dispatch argument pointing to store.dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    increment() { dispatch(incrementValue()) },
    decrement() { dispatch(decrementValue())}
  };
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root')
);

