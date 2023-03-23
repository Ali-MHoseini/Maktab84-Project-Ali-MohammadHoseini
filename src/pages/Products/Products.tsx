import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import Pagination from '@mui/material/Pagination'
import {Cards} from '../../components/Cards/Cards'
import {getProds} from "../../middleware/api/api";

export const Products = ()=> {
    const [data,setData] = useState<any>([])
    const [numOfPages,setNumOfPages] = useState<number>(1)
    const [getData,setGetData] = useState<boolean>(false)
    useEffect(() => {
        getProds(1,6).then(res=> {
            setNumOfPages(res.data.nbPages)
            setData(res.data.hits)})
    }, []);
    const changePage = (pageNum:string) => {
        getProds(pageNum,6).then(res=> setData(res.data.hits))
    }

    return(
        <div className='productsPage'>
            <div className='categoryBox'>

            </div>
            <div className='prodBox'>
                <div className='filterList'>
                    <p>مرتب سازی بر اساس:</p>
                    <Button >جدیدترین</Button>
                    <Button >ارزان ترین</Button>
                    <Button >گران ترین</Button>
                </div>
                <div className='productsSec'>
                    {
                        data && data.map((item:any) => (
                            <Cards
                                Image={item.image}
                                Title={item.name}
                                Price={item.price}
                                key={crypto.randomUUID()}
                                id={item._id}/>
                        ))
                    }
                </div>
                <div style={{display:'flex',justifyContent:'center',direction:'ltr'}}>
                    <Pagination
                        count={numOfPages}
                        onClick={(e:React.MouseEvent) : void => changePage((e.target as HTMLButtonElement).innerText)}
                        showFirstButton showLastButton />
                </div>
            </div>
        </div>
    );
}