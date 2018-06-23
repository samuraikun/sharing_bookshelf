import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// This is mock object of Google Books API
import books from './books_response';

ReactDOM.render(<App books={books} />, document.getElementById('root'));
registerServiceWorker();
