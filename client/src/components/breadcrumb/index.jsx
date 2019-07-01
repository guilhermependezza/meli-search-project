import React from 'react';
import PropTypes from 'prop-types';

import './breadcrumb.scss';

function Breadcrumb({ categories }) {
  const breadCrumbItems = categories.map(item => (<span key={item} className="breadcrumb-item">{item}</span>));
  return (

    <div className="breadcrumb">{ breadCrumbItems }</div>
  );
}

Breadcrumb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Breadcrumb;
