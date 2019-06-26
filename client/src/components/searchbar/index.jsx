import React from 'react';
import './searchbar.scss';

export default function SearchBar() {
  return (
    <form
      className="searchbar flex-wrapper align-center justify-center"
    >
      <input
        type="text"
        className="input"
        placeholder="Do que você precisa?"
      />
      <button className="button" type="submit">Buscar</button>
    </form>
  );
}
