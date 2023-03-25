import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import Pagination from '@mui/material/Pagination'
import {Cards} from '../../components/Cards/Cards'
import {Link,NavLink} from 'react-router-dom'
import {getCategories, getProds} from "../../middleware/api/api";

export const Products = ()=> {
    const [data,setData] = useState<any>([])
    const [allCategories,setAllCategories] = useState([])
    const [numOfPages,setNumOfPages] = useState<number>(1)
    useEffect(() => {
        getProds(1,6).then(res=> {
            setNumOfPages(res.data.nbPages)
            setData(res.data.hits)
        })
    }, []);
    useEffect(() => {
        getCategories().then(res=> {
            setAllCategories(res.data.hits)
        })
    }, []);
    const changePage = (pageNum:string) => {
        getProds(pageNum,6).then(res=> setData(res.data.hits))
    }

    return(
        <div className='productsPage'>
            <div className='categoryBox'>
                <ul>
                    {
                        allCategories && allCategories.map((item:any)=> (
                            <li>{item.name}
                                {item.subCategories?<ul>
                                    {
                                        item.subCategories && item.subCategories.map((item:any) => (
                                            <li>
                                                <NavLink
                                                    style={{textDecoration: 'none'}}
                                                    to={{pathname:`/products`,search:`?sort=${item._id}`}}>
                                                    {item.name}
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>:null}
                            </li>
                        ))
                    }
                </ul>

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