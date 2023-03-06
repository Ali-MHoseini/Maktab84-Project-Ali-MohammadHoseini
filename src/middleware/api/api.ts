import {INSTANCE} from '../../services/constants/constants'

export const getProds = ()=> {
    return INSTANCE.get('/products')
}
export const postProds = (data:any,token:string)=> {
    return INSTANCE.post('/product',data,{
        headers: {
            "Authorization":`Bearer ${token}`,
            "Content-Type": 'multipart/form-data',
        }
    })
}
export const getSingleProd = (id:string) => {
    return INSTANCE.get('/products/:id')
}
export const getCategories = () => {
    return INSTANCE.get('/category')
}
export const loginUser = (data:object) => {
    return INSTANCE.post('/auth/login', data)
}
export const signUpUser = (data:object) => {
    return INSTANCE.post('/auth/register', data)
}

