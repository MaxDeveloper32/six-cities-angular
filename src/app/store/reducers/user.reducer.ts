import { createFeature, createReducer } from '@ngrx/store';

interface User {
  id: string;
  email: string;
  token: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
};

export const userFeature = createFeature({
  name: 'user',
  reducer: createReducer(
    initialState,
  )
});
