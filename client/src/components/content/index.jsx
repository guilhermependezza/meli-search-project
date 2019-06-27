// Default imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductDetail from 'components/product-detail';
import ProductList from 'components/product-list';

function Content() {
  return (
    <div className="content">
      <div className="wrapper">
        <Switch>
          <Route exact path="/items" component={ProductList} />
          <Route exact path="/items/:id" component={ProductDetail} />
        </Switch>
      </div>
    </div>
  );
}

export default Content;
