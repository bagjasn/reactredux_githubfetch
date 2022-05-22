import {createSlice} from '@reduxjs/toolkit'

const reposSlice =createSlice({
    name:"repos",
    initialState:{
        data:[],
    },
    reducers:{
        getRepos:(state,action)=>{
            state.data=action.payload
        }
        
    }
})

export const{getRepos}=reposSlice.actions
export default reposSlice.reducer