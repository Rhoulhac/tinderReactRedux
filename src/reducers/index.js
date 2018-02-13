import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// The mappiong of the state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
