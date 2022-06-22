import React from "react";
import { Item, Rating, Button, Divider } from "semantic-ui-react";
import { useAppDispatch } from "../../store/hooks";
import "./CheckoutProduct.css";
import {productAction,ProductState} from '../../store/product-store/product-store'


function CheckoutProduct(item:ProductState) {
  const dispatch = useAppDispatch()


  const removeFromBasket = () => {
    dispatch(productAction.removeFromCart(item))
  };

  return (
    <div>
      <Item className="checkoutProduct__item">
        <Item.Image
          size="tiny"
          src={item.image}
          className="checkoutProduct__image"
        />
        <Item.Content>
          <Item.Header className="checkoutProduct__title">{item.title}</Item.Header>
          <Item.Meta>
            {" "}
            <Rating icon="star" defaultRating={item.rate} maxRating={5} />
          </Item.Meta>
          <Item.Description>
            <span className="checkoutProduct__price">${item.price} X {item.quantity}</span>
          </Item.Description>
          <Item.Extra>
            <Button
              color='red'
              className="checkoutProduct__button"
              onClick={removeFromBasket} 
            >
              REMOVE
            </Button>
          </Item.Extra>
        </Item.Content>
        <Divider inverted section />
      </Item>
    </div>
  );
}

export default CheckoutProduct;
