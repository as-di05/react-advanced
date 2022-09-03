import { configureStore } from '@reduxjs/toolkit'
import { githubApi } from './github/github.api'

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer
    },
    middleware: getDefaultMidleware => getDefaultMidleware().concat(githubApi.middleware)
})