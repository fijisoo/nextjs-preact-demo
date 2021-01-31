import axios from "axios";
import { mutate } from 'swr';

const baseURL = 'https://devvhub.herokuapp.com/';
const HOST = 'http://localhost:3000';

const createClient = (url) => {
    return axios.create({
        baseURL: url.split('/')[1] === 'api' ? HOST : baseURL,
        timeout: 60000,
        withCredentials: true
    });
}

axios.interceptors.response.use(
    res =>  res,
    error => Promise.reject(error.response.data)
);

export async function fetcher(url, options, method = '') {
    const axiosClient = createClient(url);

    try {
        let response;
        if(options){
            response = !!method ? await axiosClient[method.toLowerCase()](url, {...options.data}) : await axiosClient.post(url, {...options.data});
        }else{
            response = await axiosClient.get(url)
        }

        const {data, headers, ...rest} = await response;


        if (response.statusText === 'OK') {
            if(!!headers['set-cookie'] && !!headers['set-cookie'].length){
                return {data, cookies: headers['set-cookie'], ...rest}
            }
            return {data, cookies: [], ...rest}
        }


        const error = new Error(response.statusText)
        error.response = response
        error.data = data
        throw error
    } catch (error) {
        throw error.response
    }
}

export async function fetchAndCache(key) {
    console.log("Prefetching", key);
    const request = await fetcher(key);
    mutate(key, request, false);
    return request;
}
