import { createElement } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory as history } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from './routes.jsx';

const devToolsExt = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__() ||
  (x => x);

function reducer(state = { count: 1 }, action) {
  if (action.type === 'INC') {
    state.count = state.count + 1;
    return state;
  }
  return state;
}

const store = createStore(reducer, devToolsExt);

// <Provider store={ store }>
//   <Router routes={ routes } history={ history } />
// </Provider>
render(
  createElement(
    Provider,
    { store },
    createElement(Router, { routes, history }),
  ),
  window.document.getElementById('app')
);

// reducer(CurrentState, Action) => newState
