import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatSliceInterface {
  isChatScreen: boolean;
  activeChatId: number | undefined;
}

const initialState: ChatSliceInterface = {
  isChatScreen: true,
  activeChatId: undefined,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setIsChatScreen: (state, action: PayloadAction<boolean>) => {
      state.isChatScreen = action.payload;
    },
    setActiveChatId: (state, action: PayloadAction<number>) => {
      state.activeChatId = action.payload;
    },
  },
});

export const { setIsChatScreen, setActiveChatId } = chatSlice.actions;
export default chatSlice.reducer;
