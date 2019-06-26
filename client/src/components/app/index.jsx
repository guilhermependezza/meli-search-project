import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/header';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  );
}
