import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import offersApp from './reducers'
import App from './components/app'

let store = createStore(
  offersApp,
  applyMiddleware(
    thunkMiddleware
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
