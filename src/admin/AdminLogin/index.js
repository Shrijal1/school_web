import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

import "../../assets/scss/login.scss";
import { login } from "./thunk";
import { selectLogin } from "./loginSlice";

const initialState = {
  userName: "",
  password: "",
};

const AdminLogin = () => {
  const dispatch = useDispatch();
  let { loading, userInfo, error } = useSelector(selectLogin);

  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(data));
    console.log("hello");
  };

  const handleChange = (e) => {
    const target = e.target;
    setData({ ...data, [target.name]: target.value });
  };
  console.log(data);
  return (
    <div className="loginContainer">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="text-center">Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom01">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  required
                  name="userName"
                  onChange={handleChange}
                  type="text"
                  placeholder="User Name"
                />
              </Form.Group>
              <Form.Group className="mt-3" controlId="validationCustom01">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mt-3 text-center">
                <Button type="submit">Login</Button>
              </Form.Group>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminLogin;
