import axios from "axios"
const windowEnvConfig = window['runConfig'];


const NotAuthApi = {
    getUser: () => {
        const url = `${windowEnvConfig.REACT_APP_BASE_API_URL}/auth/my-selft/dobalong`;
        return axios.get(
            `${url}`
        )
    },
    getFile: () => {
        const url = `${windowEnvConfig.REACT_APP_BASE_API_URL}/auth/get-file/dobalong`;
        return axios.get(
            `${url}`, {
            responseType: 'blob'
        }
        )
    },


}
export default NotAuthApi