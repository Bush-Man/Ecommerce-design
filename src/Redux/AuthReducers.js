
const authReducer = (state = { currentUser: null, isLoading: false,error:null}, action) => {
    switch(action.type) {
        case "AUTH_START":
            return { ...state, isLoading: true,error:null}
        case "AUTH_SUCCESS":
            localStorage.setItem("currentUser", JSON.stringify({...action?.payload}));
            return { ...state, currentUser: action?.payload,isLoading:false,error:null}        
        case "AUTH_FAIL":
            return { ...state,currentUser:null,isLoading:false, error: action?.payload }
        default:
            return state;
           
        }
    }
    


export default authReducer;