import axios, {request} from "axios";

const authFetch = axios.create({
    baseURL:'https://course-api.com'
});

authFetch.interceptors.request.use((
    request
) => {
    request.headers.common['Accept'] = 'application/json';
    return request
}, (error)=>{
    Promise.reject(error);
});
authFetch.interceptors.response.use((
    response
) => {
    console.log("Got response");
    return response;
}, (
    error
)=>{
    console.log(error.response)
});