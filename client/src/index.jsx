import React from 'react';
import { render } from 'react-dom';
import 'styles/base.scss';
import App from './components/app';

render(<App />, document.querySelector('[data-js="root"]'));
