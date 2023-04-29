import axios from "axios"
const windowEnvConfig = window['runConfig'];

// const paramsSerializer = (params) => {
//     const Qs = require("qs")
//     return Qs.stringify(params, { encode: false })
// }
const AuthApi = {
    register: (data) => {
        const url = `${windowEnvConfig.REACT_APP_BASE_API_URL}/auth/register`;
        return axios.post(
            `${url}`,
            data,

        )
    },
    login: (data) => {
        const url = `${windowEnvConfig.REACT_APP_BASE_API_URL}/auth/login`;
        return axios.post(
            `${url}`,
            data,

        )
    },

}
export default AuthApi