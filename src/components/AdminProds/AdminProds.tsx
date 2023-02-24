import '../../assets/styles/index.css'
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import React from "react";
export const AdminProds = ()=> {
    return(
        <div className='admin__prods'>
            <div className='admin__prodsHeader'>
                <h3>مدیریت کالاها</h3>
                <TextField sx={{width:'28rem'}} label="جستجو کنید..." variant="standard"/>
                <Button variant='contained' color='inherit'>افزودن کالا</Button>
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
                    <td>ایفون 14</td>
                    <td>لوازم الکترونیکی</td>
                    <td style={{display: 'flex',gap:'0.5rem',justifyContent:'center'}}>
                        <a href="#">ویرایش</a>
                        <a href="#">حذف</a>
                    </td>
                </tr>
                <tr>
                    <td>#</td>
                    <td>ایفون 14</td>
                    <td>لوازم الکترونیکی</td>
                    <td style={{display: 'flex',gap:'0.5rem',justifyContent:'center'}}>
                        <a href="#">ویرایش</a>
                        <a href="#">حذف</a>
                    </td>
                </tr>
                <tr>
                    <td>#</td>
                    <td>ایفون 14</td>
                    <td>لوازم الکترونیکی</td>
                    <td style={{display: 'flex',gap:'0.5rem',justifyContent:'center'}}>
                        <a href="#">ویرایش</a>
                        <a href="#">حذف</a>
                    </td>
                </tr>
                <tr>
                    <td>#</td>
                    <td>ایفون 14</td>
                    <td>لوازم الکترونیکی</td>
                    <td style={{display: 'flex',gap:'0.5rem',justifyContent:'center'}}>
                        <a href="#">ویرایش</a>
                        <a href="#">حذف</a>
                    </td>
                </tr>
                <tr>
                    <td>#</td>
                    <td>ایفون 14</td>
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