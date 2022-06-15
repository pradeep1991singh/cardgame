import { RootState } from ".";

export const getCards = (state: RootState) => state.card.list;
export const getOpenCardCount = (state: RootState) => state.card.openCardCount;
export const getClickCount = (state: RootState) => state.card.cardClickCount;
export const getCardsSize = (state: RootState) => state.card.size
