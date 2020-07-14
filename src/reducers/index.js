import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';

import ResultsReducer from './ResultsReducer';

const reducers = combineReducers({
  results: ResultsReducer,
});

export const store = createStore(reducers, applyMiddleware(ReduxThunk));
