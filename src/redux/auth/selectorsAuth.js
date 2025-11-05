export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectisCheckingAuth = (state) => state.auth.isCheckingAuth;
// export const selectLoggedIn = (state) => state.auth.isLoggedIn;
export const selectLoggedIn = (state) => Boolean(state.auth.token);
