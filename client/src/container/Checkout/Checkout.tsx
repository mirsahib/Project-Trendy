import React from "react";
import { Container, Item, Card, Grid, Message } from "semantic-ui-react";
import { useAppSelector } from "../../store/hooks";
import "./Checkout.css";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import SubTotal from "../../components/SubTotal/SubTotal";

function Checkout() {
  const product = useAppSelector(state=>state.product)
  
  return (
    <div className="checkout">
      <Container>
        <Grid doubling stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <div>
                {product.totalQuantity === 0 ? (
                  <div className="checkout__warningMessage">
                    <Message warning>
                      <Message.Header>
                        Your shopping basket is empty
                      </Message.Header>
                      <p>
                        You have no items in your basket. To buy one or more
                        items , please click "Add to basket" next to the item
                      </p>
                    </Message>
                  </div>
                ) : (
                  <div>
                    {product.totalQuantity >= 2 ? (
                      <h2>Your shopping basket items </h2>
                    ) : (
                      <h2>Your shopping basket item </h2>
                    )}
                    <Card fluid className="checkout__card">
                      <Item.Group>
                        {product.itemList.map((item,index) => {
                          return (
                            <CheckoutProduct
                              key={index}
                              id={item.id}
                              title={item.title}
                              image={item.image}
                              price={item.price}
                              rate={item.rate}
                              quantity={item.quantity}
                            ></CheckoutProduct>
                          );
                        })}
                      </Item.Group>
                    </Card>
                  </div>
                )}
              </div>
            </Grid.Column>
            {product.totalQuantity > 0 && (
              <div className="checkout__right">
                <Grid.Column width={6}>
                  <Card>
                    <Item.Group divided>
                      <SubTotal></SubTotal>
                    </Item.Group>
                  </Card>
                </Grid.Column>
              </div>
            )}
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default Checkout;
