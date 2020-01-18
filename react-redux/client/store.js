import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-dom';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import comments from './data/comments';
import postes from './data/posts';

const defaultState = {
    posts,
    comments,
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;