import {configureStore} from '@reduxjs/toolkit'
import {headerSlice} from "@/app/redux/slices/headerSlice";


const store = configureStore({
    reducer: {
        header: headerSlice.reducer
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store