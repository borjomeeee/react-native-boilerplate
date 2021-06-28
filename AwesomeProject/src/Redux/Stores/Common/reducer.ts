import {createReducer} from '@reduxjs/toolkit';
import {add} from './actions';

const initialState = {
  counter: 0,
};

export default createReducer(initialState, builder => {
  builder.addCase(add, state => {
    state.counter++;
  });
});
