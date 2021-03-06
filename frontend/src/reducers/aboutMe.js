import * as types from '../constants/actionTypes';

const initialState = {
  name: 'Alex'
};

export default function aboutMe(state = initialState, action = {}) {
  switch (action.type) {
    case types.CHANGE_NAME:
      return {
        ...state,
        name: 'ALEX S.'
      };

    default:
      return state;
  }
}
