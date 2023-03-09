import React, {useState} from "react";
import {delSingleProd} from "../../middleware/api/api";
import {EditProductModal} from "../EditProductModal/EditProductModal";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";

interface Row {
    name:string,
    subCat:string,
    id:string,
    description:string,
    price:number,
    quantity:number,
    getData: () => {}
}
const toastData:any = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {textTransform: 'capitalize'}
}

export const ProdRow = ({name,subCat,id,description,price,quantity,getData}:Row)=> {

    const [ShowEditModal,setShowEditModal] = useState<boolean>(false)
    const adminUser = useSelector((state:any) => state.userInfo.userToken)

    const deleteItem = async (id:string)=> {
        try {
            await delSingleProd(id,adminUser)
            toast('عملیات با موفقیت انجام شد',toastData)
            getData()
        } catch (err:any) {
            toast.error(err.response.data.message,toastData)
        }

    }

    return(
            <tr>

                <td>#</td>
                <td>{name}</td>
                <td>{subCat}</td>
                <td style={{display: 'flex',gap:'0.5rem',justifyContent:'center'}}>
                    <EditProductModal
                        ShowModal={ShowEditModal}
                        CloseModal={()=>setShowEditModal(false)}
                        id={id}
                        description={description}
                        price={price}
                        quantity={quantity}
                        name={name}
                    />
                    <p style={{color:'blue',textDecoration:'underline',cursor:'pointer'}} onClick={()=>setShowEditModal(true)}>ویرایش</p>
                    <p style={{color:'blue',textDecoration:'underline',cursor:'pointer'}}
                        onClick={()=>deleteItem(id)}>حذف</p>
                </td>
            </tr>

    )
}