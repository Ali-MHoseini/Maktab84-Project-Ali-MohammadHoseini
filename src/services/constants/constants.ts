import axios from 'axios'

export const BASE_URL:string = 'https://shop-api.iran.liara.run/api/v1';

export const INSTANCE = axios.create({
    baseURL: BASE_URL,
    timeout: 50000
})