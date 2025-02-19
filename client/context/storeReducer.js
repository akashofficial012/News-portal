import decode_token from "@/utils"


const storeReducer = (state, action) => {
    // console.log(state, 'state');
    // console.log(action, 'actions');
    
    const { type, payload } = action
    //     console.log(state, 'state');
    // console.log(type, 'type');
    // console.log(payload, 'payload');
    

    if (type === 'login_success') {
        state.token = payload.token
        
        // console.log(state.userInfo, 'state.userInfo');
        
        state.userInfo = decode_token(payload.token)
        
    }
    // if (type === 'logout') {
    //     state.token = ''
    //     state.userInfo = ''
    // }
    return state
}

export default storeReducer