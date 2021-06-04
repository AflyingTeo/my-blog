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