import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCart } from '../actions/fetchCart'
import { fetchWishlist } from '../actions/fetchWishlist'

/**
 * Create NavBar Container
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBar: false
    }
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchCart());
    dispatch(fetchWishlist())
  }

  componentDidUpdate() {

  }

  toggleNavBar() {
    if (this.state.showBar) {
      this.setState({
        showBar: false
      })
    } else {
      this.setState({
        showBar: true
      })
    }
  }

  render() {
    return (
      <div>
        <nav className="nav has-shadow">
          <div className="container">
            <div className="nav-left">
              <Link to="/" className="nav-item">
                <img src="assets/resources/images/logo.png" title="A Shop"
                     alt="A Shop"/>
                <img src="assets/resources/images/target200.png"/>
              </Link>
            </div>
            <div className={`nav-right nav-menu ${(this.state.showBar) ? 'is-active' : ''}`}>
              <Link to="/" className="nav-item">
                Home
              </Link>
              <Link to="/products" className="nav-item">
                Products
              </Link>
              <Link to="/about" className="nav-item">
                About Demo
              </Link>

              <div key="NavBarCart" className="nav-item">
                <Link to="/cart" className="button menu">
                  <span className="icon">
                    <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                  </span>
                  <span className="tag is-light">{Object.keys(this.props.cart).length}</span>
                </Link>
                <Link to="/wishlist" className="button menu">
                  <span className="icon">
                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                  </span>
                  <span className="tag is-light">{Object.keys(this.props.wishlist).length}</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <br></br>

        <div className="notice container">
          This website demonstrates how you can use Adobe Target library AT.js to author and deliver experiences on
          websites built with Single Page Apps (SPAs).
        </div>
        <br></br>
      </div>

    )
  }
}
/**
 * Insert Props Into Component
 */
const stateProps = (state) => {
  return {
    cart: state.CartReducer.data,
    wishlist: state.WishlistReducer.data
  }
};

export default connect(stateProps)(NavBar)
