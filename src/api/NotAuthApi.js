import axios from "axios"
const windowEnvConfig = window['runConfig'];


const NotAuthApi = {
    getUser: (nickName) => {
        const url = `${windowEnvConfig.REACT_APP_BASE_API_URL}/auth/my-selft/${nickName}`;
        return axios.get(
            `${url}`
        )
    },
    getFile: (nickName) => {
        const url = `${windowEnvConfig.REACT_APP_BASE_API_URL}/auth/get-file/${nickName}`;
        return axios.get(
            `${url}`, {
            responseType: 'blob'
        }
        )
    },
    checkUser: (uuid) => {
        const url = `${windowEnvConfig.REACT_APP_BASE_API_URL}/auth/check-user/${uuid}`;
        return axios.get(
            `${url}`
        )
    },


}
export default NotAuthApi