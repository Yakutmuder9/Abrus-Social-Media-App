import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth';
import messageReducer from "./features/message";

const reducer = {
    auth: authReducer,
    message: messageReducer
}

export const store = configureStore({
    reducer: reducer,
    devTools: true,
})




// export const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         message: messageReducer
//     },
//     devTools: true,
// });





// const reducer = {
//   auth: authReducer,
//   message: messageReducer
// }

// const store = configureStore({
//   reducer: reducer,
//   devTools: true,
// })

