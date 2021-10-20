// import { DELETE_USER_BY_ADMIN_FAIL, DELETE_USER_BY_ADMIN_REQUEST, DELETE_USER_BY_ADMIN_SUCCESS } from '../constants/adminConstant'
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  
} from '../constant/userConstant'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }

    case USER_REGISTER_SUCCESS:
      return { loading: false, userRegister: action.payload }

 
    default:
      return state
  }
}

 
 

 