import React, { Component } from 'react';
import axios from 'axios';

class BookNew extends Component {
  async fetchBooks() {
    try {
      const response = await axios.get('/api/books');

      return response.data;
    } catch(err) {
      console.log(err);
    }
  }
  
  render() {
    return (
      <div>new book</div>
    );
  }
}

export default BookNew;