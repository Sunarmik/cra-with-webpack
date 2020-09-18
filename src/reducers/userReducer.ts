import { Reducer } from 'redux';
import { UserActionType, UserActions } from '../actions/userActions';

export interface IUserState {
  payload: any;
}

const initialUserState: IUserState = {
  payload: null
};

export const userReducer: Reducer<IUserState, UserActions> = (
  state = initialUserState,
  action
) => {
  switch (action.type) {
    case UserActionType.SET_USER: {
      return {
        ...state,
        payload: action.payload
      };
    }
    default:
      return state;
  }
};
