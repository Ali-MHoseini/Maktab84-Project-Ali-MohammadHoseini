import '../../assets/styles/index.css'
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import React, {useEffect, useState} from "react";
import {getProds} from "../../middleware/api/api";
import {QunAndPriceRow} from "../QunAndPriceRow/QunAndPriceRow";
export const QuantityAndPrices = () => {
    const [data,setData] = useState<any>([])
    const [numOfPages,setNumOfPages] = useState<number>(1)
    useEffect(() => {
        getProds(1,6).then(res=> {
            setNumOfPages(res.data.nbPages)
            setData(res.data.hits)})
    }, []);
    const changePage = (pageNum:string) => {
        getProds(pageNum,6).then(res=> setData(res.data.hits))
    }
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
                {
                    data && data.map((item:any) => (
                        <QunAndPriceRow quantity={item.quantity} price={item.price} name={item.name} />
                    ))
                }
                </tbody>
            </table>
            <div style={{marginTop:'3rem',display:'flex',justifyContent:'center',direction:'ltr'}}>
                <Pagination
                    count={numOfPages}
                    onClick={(e:React.MouseEvent) => changePage((e.target as HTMLButtonElement).innerText)}
                    showFirstButton showLastButton />
            </div>
        </div>
    )
}