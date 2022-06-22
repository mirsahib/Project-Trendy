import React, { useState } from "react";
import {
  Container,
  Card,
  Form,
  Button,
  Grid,
  Progress,
  Message,
} from "semantic-ui-react";
import "./AddProduct.css";


import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";


function AddProduct() {

  const [image, setImage] = useState<null | File>(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [progress, setProgress] = useState(0);
  const auth = useAppSelector(state => state.auth)


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    
    if (!title) { console.log('title missing'); return }
    if (!price) { console.log('price missing'); return }
    if (!rating) { console.log('rating missing'); return }
    const formData = new FormData()
    formData.append('title', title)
    formData.append('price', price)
    formData.append('rating', rating)
    if (image) {
      formData.append('image', image)
    }
    console.log(formData.getAll('image'))

    const res = await fetch('http://localhost:8080/api/product', {
      method: 'POST',
      body: formData
    })

    const data = await res.json()
    console.log(data)
  };

  return (
    <div className="addProduct">
      <Container>
        <Grid centered columns={3} doubling stackable>
          {auth && auth.isLoggedIn === true ? (
            <Grid.Column>
              <h2>Add Product</h2>
              <Card>
                <Form className="addProduct__form">
                  <Form.Field required>
                    <label>Product title</label>
                    <input
                      placeholder="product title"
                      type="text"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label>Product Price</label>
                    <input
                      placeholder="product price"
                      type="number"
                      onChange={(event) => setPrice(event.target.value)}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label>Product Rating</label>
                    <input
                      placeholder="product rating"
                      type="number"
                      onChange={(event) => setRating(event.target.value)}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <input
                      placeholder="image"
                      type="file"
                      onChange={handleChange}
                    />
                    <Progress percent={progress} indicating size="tiny" />
                  </Form.Field>
                  <Button color="green" type="submit" onClick={handleUpload}>
                    Upload
                  </Button>
                </Form>
              </Card>
            </Grid.Column>
          ) : (
            <div className="addProduct__warningMessage">
              <Message warning>
                <Message.Header>
                  You must sign in to upload a product!
                </Message.Header>
                <p>
                  Please visit <Link to="/login">sigin page</Link>, then try
                  again.
                </p>
              </Message>
            </div>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default AddProduct;
