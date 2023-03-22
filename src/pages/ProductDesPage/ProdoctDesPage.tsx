import Button from "@mui/material/Button";
import {useState} from "react";

export const ProductDesPage = () => {
    const [prodNum,setProdNum] = useState(1)

    const setNumber = (value:string):void => {
        switch (value){
            case '+' :
                setProdNum(prodNum+1)
                break;
            case '-':
                if(prodNum<=1) setProdNum(1)
                else{
                    setProdNum(prodNum-1)
                    break;
                }

        }
    }

    return(
        <>
            <div className='proDesPage'>
                <div>
                    <img src='../../src/assets/images/Iphone14.jpg' alt='Product' width='450px' height='450px'/>
                </div>
                <div className='desProduct'>
                    <div>
                        <h1>آیفون 14 پرومکس 256 گیگ</h1>
                        <h5>دسته بندی: لوازم الکتریکی</h5>
                    </div>
                    <h3>200000 تومان</h3>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div style={{display:'flex'}}>
                            <div>
                                <div className='plusOrMinBTN' onClick={()=>setNumber('+')}>+</div>
                                <div className='plusOrMinBTN' onClick={()=>setNumber('-')}>-</div>
                            </div>
                            <input defaultValue={prodNum} className='plusOrMinInp'/>
                        </div>
                        <Button variant='contained' color='success'>افزودن به سبد خرید</Button>
                    </div>
                </div>
            </div>
            <div className='description'>
                <h2>توضیحات</h2>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.</p>
            </div>
        </>

    );
}
