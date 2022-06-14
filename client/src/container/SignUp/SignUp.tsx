import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Grid } from "semantic-ui-react";
import "./SignUp.css";
import {signUp} from '../../store/auth-store/auth-action'
import { useAppDispatch } from "../../store";


function SignUp() {
  //router
  const [firstName, setFname] = useState<string>("");
  const [lastName, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  

  const handleSignup = async(event:React.FormEvent) => {
    event.preventDefault()
    if(!firstName){
      console.log('First name missing')
      return
    }
    if(!lastName){
      console.log('Last name missing')
      return
    }
    if(!email){
      console.log('email missing')
    }
    if(!password){
      console.log('password name missing')
    }
    
    dispatch(signUp({firstName,lastName,email,password}))
    clearState()
    navigate('/')
  }
  const clearState=()=>{
    setFname("")
    setLname("")
    setEmail("")
    setPassword("")
  }

  return (
    <div className="login">
      <Container>
        <Grid centered columns={3} doubling stackable>
          <Grid.Column>
            <h2>Sign Up</h2>
            <Card>
              <Form className="login__form">
                <Form.Field required>
                  <label>First Name</label>
                  <input
                    placeholder="First Name"
                    type="text"
                    value={firstName}
                    onChange={(event) => setFname(event.target.value)}
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Last Name</label>
                  <input
                    placeholder="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(event) => setLname(event.target.value)}
                  />
                </Form.Field>
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
                <Button color="green" type="submit" onClick={handleSignup}>
                  Sign Up
                </Button>
    
              </Form>
            </Card>
            <h5>Already have an account  <Link to={'/login'}> Sign In</Link></h5>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default SignUp;
