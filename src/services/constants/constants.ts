import axios from 'axios'

export const BASE_URL:string = '#';

export const INSTANCE_NAME = axios.create({
    baseURL: BASE_URL,
    timeout: 10000
})