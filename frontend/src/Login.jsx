import React, { useEffect } from "react";
import { Form, Input, Select } from "antd";
import { Link } from "react-router-dom";
// import register from "../images/register2.png"; 
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { addUser } from "../reducer/userReducer";
import {   userLoginAction } from "./store/action/userAction";
const { Option } = Select;

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);

    const email = values.email;
    const password = values.password;

    console.log("Received values of form: ", values);
    dispatch(userLoginAction(  email, password  ));
  };

  const history = useHistory();

  const dispatch = useDispatch();
 

   const data = useSelector((state) => state.userLogin);
   console.log(data);
    const {userInfo}=data;
  console.log(userInfo)
 const redirect="/";
  //  console.log(Object?.keys(userInfo)?.length === 0 && userInfo.constructor === Object) 
    
  useEffect(() => {
     
      if(userInfo?.role==="ROLE_USER")
      {
        console.log("df")
        history.push("/")

      }
   
  }, [history,data,userInfo,redirect]);

 
  return (
    <>
      <div className="container">
        <div
          className="row d-flex justify-lg-content-center align-items-lg-center"
          style={{ height: "100vh" }}
        >
          <div className="col-md-12 col-sm-12 col-lg-12 pt-lg-5   ">
            <div className="row mt-3">
              <h2 className="text-center" style={{ fontWeight: 800 ,marginLeft:'-4.5rem' }}>
                Welcome to Login System
              </h2>
           
              <div className="col-md-12 offset-lg-4 col-lg-3  col-sm-12 mt-5">
                <Form
                  form={form}
                  name="register"
                  onFinish={onFinish}
                  scrollToFirstError
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please input your E-mail!",
                      },
                    ]}
                  >
                    <Input
                      className="form-name"
                      placeholder="Please Enter Your Email"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      className="form-name"
                      placeholder="Please Enter Your Password"
                    />
                  </Form.Item>

                  <Form.Item>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <button type="submit" className="btn btn-dark CustomBtn">
                        Login
                      </button>
                      <span>
                        {/* <Link
                          as={Link}
                          to="/register"
                          style={{
                            marginLeft: "1rem",

                            color: "#3A6AF1",
                            marginTop: "50px",
                            paddingTop: "5rem",
                          }}
                        >
                          Register now!
                        </Link> */}
                      </span>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
