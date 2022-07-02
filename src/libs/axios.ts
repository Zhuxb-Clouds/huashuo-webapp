import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()



const req = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL, // url = base url + request url
    // baseURL: process.env.VUE_APP_BASE_URL_LOCAL, // url = base url + request url
    timeout: 5 * 60 * 1000 // request timeout
})

req.interceptors.response.use(
    response => {
        const res = response.data

        if (res.code === 401 || res.code === 'A0230') {
            return response
        } else {
            return res
        }
    },
    error => {
        if (axios.isCancel(error)) {
            return {}
        } else {
            return Promise.reject(error)
        }
    }
)

req.interceptors.request.use(
    function (config) {
        if (localStorage.getItem("token")) {
            config.headers!['Authorization'] = `${localStorage.getItem("token")}`
        }
        // }
        return config
    },
    function (error) {
        router.push("/login");
        return Promise.reject(error);
    }
)
export default req