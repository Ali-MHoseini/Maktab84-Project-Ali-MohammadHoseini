import React from 'react';
import Button from "@mui/material/Button";
import Pagination from '@mui/material/Pagination'
import {Cards} from '../../components/Cards/Cards'

export const Products = ()=> {
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
                    <Cards Image='#' Title='گوشی ایفون 14' Price='20000' key={crypto.randomUUID()} id='#'/>
                    <Cards Image='#' Title='گوشی ایفون 14' Price='20000' key={crypto.randomUUID()} id='#'/>
                    <Cards Image='#' Title='گوشی ایفون 14' Price='20000' key={crypto.randomUUID()} id='#'/>
                    <Cards Image='#' Title='گوشی ایفون 14' Price='20000' key={crypto.randomUUID()} id='#'/>
                    <Cards Image='#' Title='گوشی ایفون 14' Price='20000' key={crypto.randomUUID()} id='#'/>
                    <Cards Image='#' Title='گوشی ایفون 14' Price='20000' key={crypto.randomUUID()} id='#'/>
                </div>
                <div style={{display:'flex',justifyContent:'center',direction:'ltr'}}>
                    <Pagination
                        count={10}
                        onClick={(e:React.MouseEvent) : void => console.log((e.target as HTMLButtonElement).innerText)}
                        showFirstButton showLastButton />
                </div>

            </div>
        </div>
    );
}