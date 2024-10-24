import { configureStore } from "@reduxjs/toolkit";
import albumReducer from './ItemSliсe'; // Проверьте правильность имени файла

const store = configureStore({
    reducer: {
        items: albumReducer,
    },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
