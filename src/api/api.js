import axios from 'axios';
let token = JSON.parse(localStorage.getItem('token'))
console.log(token)
export const api = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL
    baseURL: 'http://10.0.4.26:60601/api/v1/',
    //  http://10.0.4.26:60601/api/v1/homepage/homepage
    headers: {
        Authorization:  'Bearer' + " " + token

    }
})
export const getHomePage = () => {
    return api.get('/homepage/homepage');
}
export const getBrands = () => {
    return api.get('/brands/brand');
}
export const getCategory = () => {
    return api.get('/category/category');
}
export const getHomedata = (payload) => {
    return api.post('/homepage/home_page_data', payload);
}
export const getSignup = (payload) => {
    return api.post('/auth/signup', payload);
}
/* export const getLogin=(payload)=>
{
    return api.post('/auth/login' , payload)
} */