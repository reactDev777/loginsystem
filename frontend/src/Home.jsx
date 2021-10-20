import React,{useEffect,useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { logoutAction } from "./store/action/userAction";

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
            <a href="/main">Go to Main</a>
            </h1> 
        </div>
    )
}

export default Home
