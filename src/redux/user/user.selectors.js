import { createSelector } from 'reselect';
const selctUser = state => state.user;

export const selectCurrentUser = createSelector (
  [selctUser],
  (user) => user.currentUser 
)