import React,{useState} from 'react';
import '../../assets/styles/index.css'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import {AddProductModal} from "../AddPrudoctModal/AddProductModal";
export const AdminProds = ()=> {
    const [ShowModal,setShowModal] = useState(false)
    const closeModal = ():void => {
        setShowModal(false)
    }
    const addModal = ():void => {
        setShowModal(true)
    }
    return(
        <div className='admin__prods'>
            <AddProductModal ShowModal={ShowModal} CloseModal={closeModal}/>
            <div className='admin__prodsHeader'>
                <h3>مدیریت کالاها</h3>
                <TextField sx={{width:'28rem'}} label="جستجو کنید..." variant="standard"/>
                <Button variant='contained' color='inherit' onClick={addModal}>افزودن کالا</Button>
            </div>
            <table className='adminTable'>
                <thead>
                <th>#</th>
                <th>نام محصول</th>
                <th>دسته بندی</th>
                <th>گزینه ها</th>
                </thead>
                <tbody>
                <tr>
                    <td>#</td>
                    <td>ایفون 15</td>
                    <td>لوازم الکترونیکی</td>
                    <td style={{display: 'flex',gap:'0.5rem',justifyContent:'center'}}>
                        <a href="#">ویرایش</a>
                        <a href="#">حذف</a>
                    </td>
                </tr>

                </tbody>
            </table>
            <div style={{marginTop:'3rem',display:'flex',justifyContent:'center',direction:'ltr'}}>
                <Pagination
                    count={10}
                    onClick={(e:React.MouseEvent) : void => console.log((e.target as HTMLButtonElement).innerText)}
                    showFirstButton showLastButton />
            </div>
        </div>
    )
}