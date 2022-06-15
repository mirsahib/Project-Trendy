import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { Container, Card, Form, Button, Grid } from "semantic-ui-react";
import "./Login.css";
import {login} from '../../store/auth-store/auth-action'
import { useAppDispatch } from "../../store/hooks";


function Login() {
  //router
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const loginUser = (event:React.FormEvent) => {
    event.preventDefault()
    if(!email){
      console.log('email missing')
    }
    if(!password){
      console.log('password name missing')
    }
    dispatch(login({email,password},navigate))
    clearState()
  }
  const clearState=()=>{
    setEmail("")
    setPassword("")
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
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Password</label>
                  <input
                    placeholder="password"
                    type="password"
                    value={password}
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
