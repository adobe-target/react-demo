import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import About from './containers/About'
import Cart from './containers/Cart'
import Wishlist from './containers/Wishlist'
import Home from './containers/Home'
import SingleProduct from './containers/SingleProduct'
import Checkout from './containers/Checkout'
import Confirm from './containers/Confirm'
import Products from './containers/Products'
import { Provider } from 'react-redux'
import store from './store'
import { HashRouter, Route } from 'react-router-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';

const history = syncHistoryWithStore(createBrowserHistory(), store);
history.listen(function(location) {
  // route changed
});

/**
 * Render App
 */
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/wishlist" component={Wishlist}/>
        <Route path="/confirm" component={Confirm}/>
        <Route path="/products" component={Products}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/product/:id" component={SingleProduct} onEnter={ () => store.dispatch({type:'CLEAR_PRODUCT'}) }/>
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);
