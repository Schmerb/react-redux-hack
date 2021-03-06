import { 
    createStore, 
    applyMiddleware, 
    combineReducers 
} from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';


import { setAuthToken, setCurrentUser }  from 'actions/auth';
import { loadAuthToken } from 'utils/local-storage';

import authReducer          from 'reducers/auth';
import protectedDataReducer from 'reducers/protected-data';
import displayReducer       from 'reducers/display';
import chatReducer          from 'reducers/chat';
import cryptoReducer        from 'reducers/crypto';
import currencyReducer      from 'reducers/currency';
import commentsReducer      from 'reducers/comments';
import eventsReducer        from 'reducers/events';

import hydrateService from 'services/hydrate-state';
import cryptoService  from 'services/crypto-stream';
import chatService    from 'services/chat-stream';


const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer,
        display: displayReducer,
        chat: chatReducer,
        crypto: cryptoReducer,
        currency: currencyReducer,
        comments: commentsReducer,
        events: eventsReducer   
    }),
    applyMiddleware(thunk)
);

// Opens socket.IO connection and updates store
// on data received
cryptoService(store);

// Opens Socket.IO connection and updates store
// when messages sent/received
chatService(store);


// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const decodedToken = jwtDecode(authToken);
    store.dispatch(setAuthToken(authToken));
    store.dispatch(setCurrentUser(decodedToken.user));
}

// Hydrate stores from MongoDB
hydrateService(store, authToken);

export default store;