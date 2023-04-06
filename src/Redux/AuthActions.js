import * as AuthApi from '../ApiRequests/AuthRequest.js';
export const registerUserFunction = (user) => async(dispatch) => {
    dispatch({type: "AUTH_START"});
    try{
        const { data } = await AuthApi.registerUser(user);
        dispatch({type: "AUTH_SUCCESS",payload:data})
    } catch (e) {
        
      dispatch({type: "AUTH_FAIL",payload:e.message});
    }
}
export const loginUserFunction = ({email,password}) => async(dispatch) => {
    dispatch({type: "AUTH_START"});
    try{
        const { data } = await AuthApi.loginUser({ email, password });
        
        dispatch({type: "AUTH_SUCCESS",payload:data})
    } catch (e) {
        
      dispatch({type: "AUTH_FAIL",payload:e.message});
    }
}