import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
// import Registration from "./screens/Registration";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Main from "./Main";
import ProtectedRoute from './ProtectedRoute';

function App() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [auth, setAuth] = useState(false)
 
  useEffect(() => {
    const user = () => {
      if (userInfo?.role === 'ROLE_USER') {
        // console.log('Admin',userInfo.role)
        setAuth(true);
      }  
    }
    user()
  }, [userInfo])
   
  console.log(auth)
   
  return (
    <Router>
        <Header/>
      <Route path="/" exact  component={Home}/>
      {/* <Route path="/register" exact component={Registration} /> */}
      <Route path="/login"   component={Login} />
      {/* <Route path="/main"   component={Main} /> */}
      <ProtectedRoute Route path="/main" component={Main} auth={auth}/>
    </Router>
  );
}

export default App;
