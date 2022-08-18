import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:3000";

const Api = {
    searchDomain: ({domain}) => axios.get(API_URL + "/search_domain?domain=" + domain)
};

export default Api;
