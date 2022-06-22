import React from "react";
import { Menu, Icon } from "semantic-ui-react";

import "./Header.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store";
import {authAction} from '../../store/auth-store/auth-store'

function Header() {
  const basket = {length}
  const user = null
  const auth = useAppSelector(state=>state.auth)
  const product = useAppSelector(state=>state.product)
  const dispatch = useAppDispatch()
  const logOut=()=>{
    if(auth && auth.isLoggedIn===true){
      console.log('signout')
      dispatch(authAction.logOut())
    }
  }

  return (
    <div className="header">
      <Menu stackable>
        <Menu.Menu position="left">
          <Menu.Item>
            <Link to="/" className="header__leftItem">
              <img
                className="header__logo"
                src="https://img.icons8.com/ios/100/000000/online-shop-favorite.png"
                alt="secondhand store logo"
              />
              <p className="header__companyName">Second-hand Store</p>
            </Link>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Link to="/uploadImage">
            <Menu.Item>
              <Icon name="upload" /> Add product
            </Menu.Item>
          </Link>
          <Link to="/checkout">
            <Menu.Item>
              <Icon name="shop" /> {product.totalQuantity}
            </Menu.Item>
          </Link>
          <Link to="/signup">
            <Menu.Item>
              {auth && auth.isLoggedIn===true ? (
                <div onClick={logOut} >
                  <Icon name="sign-out" />
                  {auth.firstName} {auth.lastName}
                </div>
              ) : (
                <>
                  <Icon name="sign-in" />
                  Sign in
                </>
              )}
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default Header;
