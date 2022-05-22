import {configureStore} from '@reduxjs/toolkit'
import reposReducer from './repos'
export default configureStore({
    reducer:{
        repos:reposReducer
    }
})