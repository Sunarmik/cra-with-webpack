import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IUserState } from '../reducers/userReducer';

export enum UserActionType {
  SET_USER = 'SET_USER',
}

export interface IUserActionTypes {
  type: UserActionType.SET_USER;
  payload: any;
}

export type UserActions = IUserActionTypes;

/*<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const userActionThunk: ActionCreator<ThunkAction<Promise<any>, IUserState, null, IUserActionTypes>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      // Your logic here
      dispatch({
        payload: null,
        type: UserActionType.SET_USER
      });
    } catch (err) {
      console.error(err);
    }
  };
};
