import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
import rootReducer from '.'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))
export default store
