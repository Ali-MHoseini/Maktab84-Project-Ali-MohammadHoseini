import '../../assets/styles/index.css'
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import React from "react";
export const QuantityAndPrices = () => {
    return(
        <div className='admin__prods'>
            <div className='admin__prodsHeader'>
                <h3>موجودی و قیمت ها</h3>
                <Button variant='contained' color='inherit'>ذخیره</Button>
            </div>
            <table className='adminTable'>
                <thead>
                <th>#</th>
                <th>کالا</th>
                <th>قیمت</th>
                <th>موجودی</th>
                </thead>
                <tbody>
                <tr>
                    <td>#</td>
                    <td>ایفون 14</td>
                    <td>20,000</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>#</td>
                    <td>ایفون 14</td>
                    <td>20,000</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>#</td>
                    <td>ایفون 14</td>
                    <td>20,000</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>#</td>
                    <td>ایفون 14</td>
                    <td>20,000</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>#</td>
                    <td>ایفون 14</td>
                    <td>20,000</td>
                    <td>1000</td>
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