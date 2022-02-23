import { createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import darkMode from "./darkMode";

const rootReducer = combineReducers({
    darkMode: darkMode.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

let initialRootState: RootState;

const reducer = (state: any, action: any) => {
    if(action.type === HYDRATE) {
        const data = { ...action.payload };
        let nextState = {
            ...state,
            ...data
        }

        return nextState;
    }
    return rootReducer(state, action);
}

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const initStore: MakeStore<any> = () => {
    const store = configureStore({
        reducer,
        devTools: process.env.NODE_ENV !== "production"
    })
    initialRootState = store.getState();
    return store;
}

export const wrapper = createWrapper(initStore);