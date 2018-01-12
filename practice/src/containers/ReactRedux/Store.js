import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
  'First': 0,
  'Second': 10
};

console.warn(`【 Store 】> createStore(reducer, initValues)`);
const store = createStore(reducer, initValues);

console.warn(`【 Store 】> store = createStore(reducer, initValues)`);
console.log(`store ：`,store);


export default store;
