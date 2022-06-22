import React, { useCallback, useEffect, useState } from "react";
import { Menu, Icon } from "semantic-ui-react";

import "./Header.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store";
import { authAction } from '../../store/auth-store/auth-store'
import {IData} from "../../store/auth-store/auth-action"

function Header() {
  const user = null
  const product = useAppSelector(state => state.product)
  const [auth,setAuth] = useState<IData>()
  const dispatch = useAppDispatch()
  const logOut = () => {
    dispatch(authAction.logOut())
  }
  const getAuth= useCallback(()=>{
      const data = localStorage.getItem('user')
      if(data) {
        const user = JSON.parse(data) as IData
         setAuth(user)
      }
  },[])

  useEffect(() => {
    console.log('User created')
    getAuth()
  },[getAuth])

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
              {auth ? (
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
