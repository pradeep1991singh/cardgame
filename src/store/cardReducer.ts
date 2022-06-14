import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "../components/grid/types";
import { generateRandomNumsDoublets } from "../utils";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    size: 0,
    list: [],
    prevCard: null,
    openCardCount: 0,
    cardClickCount: 0
  },
  reducers: {
    initCards(state, action: PayloadAction<number>) {
      state.size = action.payload;
      state.list = generateRandomNumsDoublets(action.payload, 1, 100);
    },
    incrementCardClickCount(state, action: PayloadAction<CardProps>) {
      state.cardClickCount += 1;
      state.list[action.payload.index].isOpen = true;
    },
    validateCard(state, action: PayloadAction<CardProps>) {
      const prevItem = state.prevCard;
      const currItem = action.payload;
      if (!prevItem) {
        state.prevCard = action.payload;
        state.openCardCount += 1;
      } else {
        const isOpen = prevItem.value === currItem.value;
        state.list[prevItem.index].isOpen = isOpen;
        state.list[currItem.index].isOpen = isOpen;
        if (isOpen) {
          state.openCardCount += 1;
        } else {
          state.openCardCount -= 1;
        }
        state.prevCard = null;
      }
    },
    resetCards(state) {
      state.list = generateRandomNumsDoublets(state.size, 1, 100);
      state.cardClickCount = 0;
      state.openCardCount = 0;
    }
  }
});

export const {
  initCards,
  incrementCardClickCount,
  validateCard,
  resetCards
} = cardSlice.actions;
export default cardSlice.reducer;
