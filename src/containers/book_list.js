import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
            {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever gets returned from here will
  // show up as props inside of BookList container
  return {
    books: state.books
  };
}
// Result of function will end up as props on the BookList container **magic!!**
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

// connect takes a function and a component and creates a container
// Promote BookList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
