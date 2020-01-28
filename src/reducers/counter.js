import * as types from '../actions/ActionTypes';

const initialState = {
  number: 0
};

export default function counter(state = initialState, action){

  switch(action.type){
    case types.INCREMENT:
      return{ ...state, number: state.number + 1};// ...state(기존 state값을 다 받아온 후) number: state.number + 1(number를 +1함)
    case types.DECREMENT:
      return{ ...state, number: state.number - 1};
    default:
      return state;
  }

  return state;
}
