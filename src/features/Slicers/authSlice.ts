import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthSliceInterface {
  mode: string
}

const initialState: AuthSliceInterface = { mode: "email" };

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    }
  }
});

export const { setMode } = auth.actions;
export default auth.reducer;
