import * as ActionTypes from './ActionTypes.js';

export const increment = (counterCaption) => {
  let inc = {
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  };
  
  ////////////debug
  console.warn(`【 Actions 】> increment `);
  console.log(inc);

  return inc;
};

export const decrement = (counterCaption) => {
  return {
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  };
};
