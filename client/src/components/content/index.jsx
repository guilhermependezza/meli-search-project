// Default imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductDetail from 'screens/product-detail';
import ProductSearch from 'screens/product-search';

function Content() {
  return (
    <div className="content">
      <div className="wrapper">
        <Switch>
          <Route exact path="/items/" component={ProductSearch} />
          <Route exact path="/items/:id" component={ProductDetail} />
        </Switch>
      </div>
    </div>
  );
}

export default Content;
