import {Reducer, combineReducers} from 'redux';

import {clusters} from './ClusterReducer';
import {currentPage} from './PageReducer';
import {routerReducer} from 'react-router-redux';
import undo from 'redux-undo';

const undoConfig = {
    limit: 100
}; //undo/redo limit

const r:Reducer<any> = combineReducers({
    currentPage: undo(currentPage, undoConfig),
    routing: routerReducer,
    clusters: undo(clusters)
});

export {r as reducers};
