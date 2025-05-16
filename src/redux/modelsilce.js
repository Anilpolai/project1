import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showLoginModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.showLoginModal = true;
    },
    closeLoginModal: (state) => {
      state.showLoginModal = false;
    },
  },
});

export const { openLoginModal, closeLoginModal } = modalSlice.actions;
export default modalSlice.reducer;
