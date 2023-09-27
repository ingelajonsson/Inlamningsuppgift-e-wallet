import { configureStore } from "@reduxjs/toolkit";
import createCardSlice from "./createCardSlice";


const store = configureStore({
    reducer: {
        cardName: createCardSlice,
        card: createCardSlice
    }
});

export default store;