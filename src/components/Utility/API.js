import axios from "axios";

// const URL = "http://localhost:2300"
const URL = "http://localhost:3000"

const API_SERVICE = axios.create({
    baseURL: URL,
    timeout: 5000,
})

const ApI = {
    addnews: async (data) => {
        return  API_SERVICE.post("/addnews", data)
},
getnews: async () => {
    return  API_SERVICE.get("/getnews")
}
}

export default ApI;
