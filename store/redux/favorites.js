import { createSlice } from "@reduxjs/toolkit"

const favsSlice = createSlice({
    name : 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, action)=>{
            state.ids.push(action.payload.id)
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
        }
    }
})

export const addFavorite = favsSlice.actions.addFavorite;
export const removeFavorite = favsSlice.actions.removeFavorite;
export default favsSlice.reducer;