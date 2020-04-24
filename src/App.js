import React from 'react';
import Home from './components'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import './App.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

function App() {
  return (
    <Provider store={store} >
      <Home />
    </Provider>
  );
}

export default App;
