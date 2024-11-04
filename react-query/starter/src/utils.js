import axios from "axios";

const customFetch = axios.create({
    baseURL: "https://api.github.com/users",
});
export default customFetch