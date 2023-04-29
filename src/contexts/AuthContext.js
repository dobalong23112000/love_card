import AuthApi from 'api/AuthApi'
import UserApi from 'api/UserApi'
import setAuthToken from 'helpers/setAuthToken'
import React, { createContext, useEffect, useReducer } from 'react'
import { authReducer } from 'reducers/authReducer'

export const AuthContext = createContext()
const AuthContextProvider = ({ children }) => {
    const [authState, dispath] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    })

    useEffect(() => {
        loadUser()
    }, [])
    // Authenticate user 
    const loadUser = async () => {
        if (localStorage.getItem('access_token')) {
            setAuthToken(localStorage.getItem('access_token'))
        }
        try {
            const response = await UserApi.getInfo();
            if (response.data.status === 200) {
                dispath({
                    type: 'SET_AUTH',
                    payload: {
                        authLoading: false,
                        isAuthenticated: true,
                        user: response.data.data
                    }
                })
                // setAuthState()
            }
        } catch (e) {
            localStorage.removeItem('access_token');
            setAuthToken(null)
            dispath({
                type: 'SET_AUTH',
                payload: {
                    authLoading: false,
                    isAuthenticated: false,
                    user: null
                }
            })
       
        }
    }
    // Login
    const loginUser = async userForm => {
        try {
            const response = await AuthApi.login(userForm);
            if (response.data.status === 200) {
                localStorage.setItem('access_token', response.data.data.accessToken);
                await loadUser()
                return response.data
            } else {
                return response
            }
        } catch (e) {
            return e
        }
    }
    const logoutUser = async () => {
        localStorage.removeItem('access_token');
        setAuthToken(null)
        dispath({
            type: 'SET_AUTH',
            payload: {
                authLoading: false,
                isAuthenticated: false,
                user: null
            }
        })

        await loadUser()
    }
    const authContextData = { loginUser, authState, logoutUser,loadUser }
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider