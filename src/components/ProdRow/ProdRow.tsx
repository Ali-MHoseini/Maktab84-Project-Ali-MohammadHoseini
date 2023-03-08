import React, {useEffect, useState} from "react";
import {getSingleProd} from "../../middleware/api/api";
import {EditProductModal} from "../EditProductModal/EditProductModal";

interface Row {
    name:string,
    subCat:string,
    id:string
}

export const ProdRow = ({name,subCat,id}:Row)=> {

    const [ShowEditModal,setShowEditModal] = useState<boolean>(false)

    return(
            <tr>

                <td>#</td>
                <td>{name}</td>
                <td>{subCat}</td>
                <td style={{display: 'flex',gap:'0.5rem',justifyContent:'center'}}>
                    <EditProductModal ShowModal={ShowEditModal} CloseModal={()=>setShowEditModal(false)} id={id}/>
                    <p style={{color:'blue',textDecoration:'underline',cursor:'pointer'}} onClick={()=>setShowEditModal(true)}>ویرایش</p>
                    <p style={{color:'blue',textDecoration:'underline',cursor:'pointer'}}>حذف</p>
                </td>
            </tr>

    )
}