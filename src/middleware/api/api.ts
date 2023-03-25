import {INSTANCE} from '../../services/constants/constants'

export const getProds = (p:any ,l:any )=> {
    return INSTANCE.get(`/product?page=${p}&limit=${l}`)
}
export const postProds = (data:any,token:string)=> {
    return INSTANCE.post('/product',data,{
        headers: {
            "Authorization":`Bearer ${token}`,
            "Content-Type": 'multipart/form-data',
        }
    })
}
export const patchProd = (data:any,id:string,token:string)=> {
    return INSTANCE.patch(`/product/${id}`,data,{
        headers: {
            "Authorization":`Bearer ${token}`,
            "Content-Type": 'multipart/form-data',
        }
    })
}

export const getSingleProd = (id:string) => {
    return INSTANCE.get(`/product/${id}`)
}
export const delSingleProd = (id:string,token:string) => {
    return INSTANCE.delete(`/product/${id}`,{
        headers: {
            "Authorization":`Bearer ${token}`,
        }
    })
}
export const getSubCategories = () => {
    return INSTANCE.get('/subcategory')
}
export const getCategories = () => {
    return INSTANCE.get('/category?page=1&limit=-1')
}
export const loginUser = (data:object) => {
    return INSTANCE.post('/auth/login', data)
}
export const signUpUser = (data:object) => {
    return INSTANCE.post('/auth/register', data)
}

