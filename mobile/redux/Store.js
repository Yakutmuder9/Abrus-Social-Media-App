import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './auth/authReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});





// import {configureStore} from '@reduxjs/toolkit';
// import {authReducer} from './reducers/authReducer';
// import {
//   persistStore,
//   persistCombineReducers,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const config = {
//   key: 'root',
//   storage: AsyncStorage,
//   debug: true,
// };

// export const store = configureStore({
//   reducer: persistCombineReducers(config, {
//     auth: authReducer,
//   }),
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// import {configureStore} from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import {combineReducers} from 'redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import authReducer from './reducers/authReducer';

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// const persistor = persistStore(store);

// export {store, persistor};
