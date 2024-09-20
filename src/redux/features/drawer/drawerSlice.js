import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  drawerOpenClose: false,
}

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    handleDrawer: (state) => {
        state.drawerOpenClose = !state.drawerOpenClose
    },

    setDrawerOpenClose: (state, action) => {
      state.drawerOpenClose = action.payload
    },
  },
})

export const { setDrawerOpenClose, handleDrawer } = drawerSlice.actions

export default drawerSlice.reducer