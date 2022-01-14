import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Home from './components/Home';
import Header from './components/Header';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gothenburg" element={<Main />} />
          <Route path="/stockholm" element={<Main />} />
          <Route path="/ituiutaba" element={<Main />} />
          <Route path="/curitiba" element={<Main />} />
          <Route path="/berlin" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
