import { 
    createStore, 
    applyMiddleware, 
    combineReducers 
} from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { setAuthToken }  from 'actions/auth';
import { loadAuthToken } from './local-storage';

import authReducer          from 'reducers/auth';
import protectedDataReducer from 'reducers/protected-data';
import displayReducer       from 'reducers/display';
import chatReducer          from 'reducers/chat';
import cryptoReducer        from 'reducers/crypto';

import cryptoService from 'services/crypto-stream';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer,
        display: displayReducer,
        chat: chatReducer,
        crypto: cryptoReducer
    }),
    applyMiddleware(thunk)
);

// Opens socket.IO connection and updates store
// on data received
cryptoService(store);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    // console.log('setting auth token');
    store.dispatch(setAuthToken(token));
}

export default store;