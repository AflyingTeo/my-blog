//LOGIN ACTION HERE
export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
})

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCES",
    payload: true,
})

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
    
})
export const Logout = () => ({
    type: "LOGOUT",
    
})

//UPDATE ACOUNT ACTION
export const updateStart = (userCredentials) => ({
    type: "UPDATE_START"
})

export const updateSuccess = (user) => ({
    type: "UPDATE_SUCCES",
    payload: true,
})

export const updateFailure = () => ({
    type: "UPDATE_FAILURE",
    
})