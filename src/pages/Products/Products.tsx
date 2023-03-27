import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import Pagination from '@mui/material/Pagination'
import {Cards} from '../../components/Cards/Cards'
import {Link,NavLink} from 'react-router-dom'
import {getCategories, getProds} from "../../middleware/api/api";
import {useSelector} from "react-redux";

export const Products = ()=> {
    const [data,setData] = useState<any>([])
    const [allCategories,setAllCategories] = useState([])
    const [numOfPages,setNumOfPages] = useState<number>(1)
    const [filter,setFilter] = useState('')
    const  [reRender,setReRender] = useState(false)
    const allData = useSelector((state:any)=> state.Product.AllProducts)

    useEffect(() => {
        getCategories().then(res=> {
            setAllCategories(res.data.hits)
        })
    }, []);

    useEffect(() => {
        const insertId = window.location.search? window.location.search.split('?')[1]
            .split('=')[1].split('_')[0]:'';
        const insertSort = window.location.search?window.location.search.split('?')[1]
            .split('=')[1].split('_')[1]:'';
        if(insertSort){
            if (insertSort === 'cat') {
                setData(allData.filter((item: any) => item.subCategory.category === insertId))
            }else if(insertSort === 'sub') {
                setData(allData.filter((item: any) => item.subCategory._id === insertId))
            }
        }else{
            getProds(1,6).then(res=> {
                setNumOfPages(res.data.nbPages)
                setData(res.data.hits)
            })
        }
    }, [reRender]);

    useEffect(()=> {
        switch (filter) {
            case 'cheap':
                const cheap = data.sort((a:any,b:any) => {return +b.price - +a.price})
                setData(cheap)
                break;
            case 'expensive':
                const expensive = data.sort((a:any,b:any) => {return +a.price - +b.price})
                setData(expensive)
                break;
            default:
                alert('Wrong')
        }
    },[filter])

    const changePage = (pageNum:string) => {
        getProds(pageNum,6).then(res=> setData(res.data.hits))
    }

    return(
        <div className='productsPage'>
            <div className='categoryBox'>
                <ul>
                    <li>
                        <Link
                            onClick={()=>setReRender(!reRender)}
                            to={{pathname:'/products'}}
                            style={{textDecoration: 'none'}}>
                            همه محصولات
                        </Link>
                    </li>
                    {
                        allCategories && allCategories.map((item:any)=> (
                            <li key={crypto.randomUUID()}>
                                <Link
                                    onClick={()=>setReRender(!reRender)}
                                    style={{textDecoration: 'none'}}
                                    to={{pathname:`/products`,search:`?sort=${item._id}_cat`,}}>
                                    {item.name}
                                </Link>
                                {item.subCategories?<ul>
                                    {
                                        item.subCategories && item.subCategories.map((item:any) => (
                                            <li key={crypto.randomUUID()}>
                                                <NavLink
                                                    onClick={()=>setReRender(!reRender)}
                                                    style={{textDecoration: 'none'}}
                                                    to={{pathname:`/products`,search:`?sort=${item._id}_sub`}}>
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
                    <Button onClick={()=>setFilter('cheap')}>ارزان ترین</Button>
                    <Button onClick={()=>setFilter('expensive')}>گران ترین</Button>
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