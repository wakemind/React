import * as ActionTypes from './ActionTypes.js';

export default (state, action) => {
  const {counterCaption} = action;

  switch (action.type) {
    case ActionTypes.INCREMENT:
      	let inc = {...state, [counterCaption]: state[counterCaption] + 1};
    	
    	////////////debug
    	console.warn(`【 Reducer 】`);
    	console.log('state:',state);
		console.log('action:',action);
		console.log('counterCaption:',counterCaption);
		console.log('inc:',inc);

      	return inc;
    case ActionTypes.DECREMENT:
      return {...state, [counterCaption]: state[counterCaption] - 1};
    default:
      return state
  }
}
