import React,{useEffect,useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { logoutAction } from "./store/action/userAction";
import { Link } from 'react-router-dom';
const Home = () => {
   const [isLogged, setLogged] = useState(false)
    const dispatch = useDispatch()

//     useEffect(() => {
//          timerFn();
//     }, [])

//     const timerFn=()=>
//     {
//         setTimeout(() => {
//            dispatch(logoutAction())
//           setLogged(true)
//         }, 5000);
//     }
// useEffect(() => {
//     if(isLogged===true)
//     {
//         window.location.reload();
//     }
// }, [isLogged])

    return (
        <div >
            <h1 className="text-center my-4">
            Home Screen
  <br /> 
              Protected Screen <br /> You can go to Main if You logged in
            <Link to="/main">Go to Main</Link>
            </h1> 
            <p className=" text-center">Automatically logout user and redirect  to Login Page</p>
        </div>
    )
}

export default Home
