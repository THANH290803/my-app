// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book/Book';
import BookDetail from './pages/BookDetail/BookDetails'
import Cart from './pages/Cart/Cart'
import Pay from './pages/pay/Pay'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Book-Detail" element={<BookDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Pay" element={<Pay />} />
      </Routes>
    </Router>
  );
}

export default App;
