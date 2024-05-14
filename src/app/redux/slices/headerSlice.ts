import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Header {
    header: string
}

export const headerSlice = createSlice({
    name: "header",
    initialState: {
        header: ""
    } as Header,
    reducers: {
        setHeader: (state, action: PayloadAction<string>) => {
            state.header = action.payload;
        },
    }
})

export const {setHeader} = headerSlice.actions