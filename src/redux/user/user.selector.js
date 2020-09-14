import { createSelector } from "reselect";

const selectUser = (state) => state.user;

//second arg fn gets the return of the first arg ,if there are multiple items in 1st arg arry. output of each will be passed as an arg to 2nd fn accountingly (1st arg can be passed withput array as well)

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
export const selectDisplayName = createSelector(
  [selectCurrentUser],
  (user) => user.displayName
);
