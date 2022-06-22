import React from "react";
import { Segment, Item, Label } from "semantic-ui-react";
import { useAppSelector } from "../../store/hooks";


import './SubTotal.css'

function SubTotal() {
  const product = useAppSelector(state=>state.product)
  
  return (
    <div>
      <Item>
        <Item.Content>
          <Segment raised>
            <Label color="orange" ribbon>
              Total Price
            </Label>
            <span className="subtotal__price">{product.total}</span>
          </Segment>
        </Item.Content>
      </Item>
    </div>
  );
}

export default SubTotal;
