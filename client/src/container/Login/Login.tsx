import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Form, Button, Grid } from "semantic-ui-react";
import "./Login.css";

function Login() {
  //router
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
  }

  return (
    <div className="login">
      <Container>
        <Grid centered columns={3} doubling stackable>
          <Grid.Column>
            <h2>Log In</h2>
            <Card>
              <Form className="login__form">
                <Form.Field required>
                  <label>E-mail</label>
                  <input
                    placeholder="email"
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Password</label>
                  <input
                    placeholder="password"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Field>
                <Button color="green" type="submit" onClick={loginUser}>
                  Sign Up
                </Button>
    
              </Form>
            </Card>
            <h5>New user please  <Link to={'/signup'}> Sign Up</Link></h5>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
