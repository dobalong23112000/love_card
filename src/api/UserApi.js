import axios from "axios"
const windowEnvConfig = window['runConfig'];

const paramsSerializer = (params) => {
    const Qs = require("qs")
    return Qs.stringify(params, { encode: false })
}
const UserApi = {
    getInfo: (params) => {
        const url = `${windowEnvConfig.REACT_APP_BASE_API_URL}/expose/nfc-love/my-selft`;
        return axios.get(url, {
            params,
            paramsSerializer
        })
    },
    update: (data) => {
        const url = `${windowEnvConfig.REACT_APP_BASE_API_URL}/expose/nfc-love/update`;
        return axios.post(
            `${url}`,
            data,
        )
    },
    updateMusic: (data) => {
        console.log({ data })
        const url = `${windowEnvConfig.REACT_APP_BASE_API_URL}/expose/nfc-love/upload-file`;
        return axios.post(
            `${url}`,
            data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        )
    },
   

}
export default UserApi