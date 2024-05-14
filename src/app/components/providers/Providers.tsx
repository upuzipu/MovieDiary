'use client'

import React, {ReactNode} from "react";
import store from "@/app/redux/store";
import {Provider} from "react-redux";

interface StoreProviderProps {
    children: ReactNode;
}


export const Providers: React.FC<StoreProviderProps> = ({children}) => {
    return (<div>
        <Provider store={store}>
            {children}
        </Provider>
    </div>)
}