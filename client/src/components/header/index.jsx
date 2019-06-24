import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <Link to="/" className="logo-link" />
      </div>
    </header>
  );
}
