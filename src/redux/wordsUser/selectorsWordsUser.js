export const isLoading = (state) => state.ownWords.isLoading;

export const selectUserWords = (state) => state.ownWords.words;

export const selectPage = (state) => state.ownWords.page;

export const selectPerPage = (state) => state.ownWords.perPage;

export const selectTotalPages = (state) => state.ownWords.totalPages;

export const selectError = (state) => state.ownWords.error;
