import {INSTANCE} from '../../services/constants/constants'

export const getProds = ()=> {
    return INSTANCE.get('/products')
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