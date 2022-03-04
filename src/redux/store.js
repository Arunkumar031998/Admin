import { createStore, applyMiddleware } from 'redux';
import demoReducer from './demo/demoReducer'
import rootreducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(logger)))

export default store