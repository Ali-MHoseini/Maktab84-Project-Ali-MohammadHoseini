import INSTANCE from '../../services/constants/constants'

export const getProds = ():void => {
    return INSTANCE.get('/products')
}
export const getSingleProd = (id:string):void => {
    return INSTANCE.get('/products/:id')
}
export const getCategories = ():void => {
    return INSTANCE.get('/category')
}
export const registerUser = (data:object):void => {
    return INSTANCE.get('/user',data)
}