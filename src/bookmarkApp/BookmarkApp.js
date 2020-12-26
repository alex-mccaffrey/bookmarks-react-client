import React, { Component } from 'react';
import './BookmarkApp.css';
import BookmarksList from '../bookmarksList/BookmarksList';
import Fab from '../fab/Fab';

class BookmarkApp extends Component {
  render() {
    return (
      <div className="bookmarkApp">
        <h2>Bookmarks</h2>
        <BookmarksList bookmarks={this.props.bookmarks}/>
        <Fab showForm={this.props.showForm}/>
      </div>
    );
  }
}

export default BookmarkApp;