import '../../assets/styles/index.css'
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import React from "react";
export const AdminOrders = () => {
    return(
        <div className='admin__prods'>
            <div className='admin__prodsHeader'>
                <h3>سفارش ها</h3>
            </div>
            <table className='adminTable'>
                <thead>
                <th>نام کاربر</th>
                <th>مجموع مبلغ</th>
                <th>زمان ثبت سفارش</th>
                <th>بررسی سفارشات</th>
                </thead>
                <tbody>
                <tr>
                    <td>علی حسینی</td>
                    <td>920,000</td>
                    <td>1401/10/17</td>
                    <td>
                        <a href='#'>بررسی سفارشات</a>
                    </td>
                </tr>
                <tr>
                    <td>علی حسینی</td>
                    <td>920,000</td>
                    <td>1401/10/17</td>
                    <td>
                        <a href='#'>بررسی سفارشات</a>
                    </td>
                </tr>
                <tr>
                    <td>علی حسینی</td>
                    <td>920,000</td>
                    <td>1401/10/17</td>
                    <td>
                        <a href='#'>بررسی سفارشات</a>
                    </td>
                </tr>
                <tr>
                    <td>علی حسینی</td>
                    <td>920,000</td>
                    <td>1401/10/17</td>
                    <td>
                        <a href='#'>بررسی سفارشات</a>
                    </td>
                </tr>
                <tr>
                    <td>علی حسینی</td>
                    <td>920,000</td>
                    <td>1401/10/17</td>
                    <td>
                        <a href='#'>بررسی سفارشات</a>
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