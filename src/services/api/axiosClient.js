import axios from "axios";

const axiosClient =  axios.create({
    baseURL: "http://fakestoreapi.come",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;