import '../../assets/styles/index.css'
import {CartItems} from "../../components/CartItems/CartItems";
import Button from '@mui/material/Button'
import {useDispatch, useSelector} from "react-redux";
import TextField from '@mui/material/TextField'
import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import {setIsOrdering} from "../../middleware/redux/slice/CartSlice/CartSlice";
import {setOrderCart,setOrderInfo,setOrderTotal} from "../../middleware/redux/slice/UserInfoSlice/UserInfoSlice"
import {toast} from "react-toastify";
type submitData = {
    firstName:string,
    lastName:string,
    address:string,
    phone:string
}

export const Cart = ()=> {
    const [submit,setSubmit] = useState<boolean>(false)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const userInfo = useSelector((state:any) => state.userInfo.userInfo)
    const cartData = useSelector((state:any) => state.Cart.Cart)
    const totalPrice = useSelector((state:any) => state.Cart.Total)
    const loggedIn = useSelector((state:any) => state.userInfo.userLogged);
    const [submitData,setSubmitData] = useState<submitData>({
        firstName:userInfo.firstName,
        lastName:userInfo.lastName,
        address:"",
        phone:""
    })


    const goToLogin = ()=> {
        dispatch(setIsOrdering(true))
        navigate('/login')
    }
    const submitFunc = ():void => {
        dispatch(setOrderCart(cartData))
        dispatch(setOrderInfo(submitData))
        dispatch(setOrderCart(totalPrice))
        navigate("/payment")
    }
    return(
        <>
            <div className='cart'>
                <h1>سبد خرید</h1>
                <div className='cartBox'>
                    {
                        cartData && cartData.map((item:any)=>(
                            <CartItems
                                key={crypto.randomUUID()}
                                Data={item.data}
                                prodNum={item.number}/>
                        ))
                    }
                </div>
                <div className='totalPrice'>
                    <h2>جمع کل:</h2>
                    <h3>{`  ${totalPrice} تومان`}</h3>
                </div>
                <Button
                    variant="contained"
                    color='success'
                    style={{width:'10rem'}}
                    onClick={()=>setSubmit(true)}
                >
                    ادامه و ثبت سفارش
                </Button>
            </div>
            {
                submit?<div className='submitForm'>
                    <h2>ثبت سفارش</h2>
                    {
                        loggedIn?<div className='submitForm'>
                            <form className='cartBox'>
                                <div>
                                    <p>نام:</p>
                                    <TextField
                                        className='textField'
                                        label="نام"
                                        onChange={(e:React.ChangeEvent)=>setSubmitData({...submitData,firstName:(e.target as HTMLInputElement).value})}
                                        variant="outlined"
                                        value={submitData.firstName} />
                                </div>
                                <div>
                                    <p>نام خانوادگی:</p>
                                    <TextField
                                        className='textField'
                                        label="نام خانوادگی"
                                        onChange={(e:React.ChangeEvent)=>setSubmitData({...submitData,lastName:(e.target as HTMLInputElement).value})}
                                        variant="outlined"
                                        value={submitData.lastName} />
                                </div>
                                <div>
                                    <p>آدرس:</p>
                                    <TextField
                                        className='textField'
                                        label="آدرس"
                                        onChange={(e:React.ChangeEvent)=>setSubmitData({...submitData,address:(e.target as HTMLInputElement).value})}
                                        variant="outlined"
                                        value={submitData.address} />
                                </div>
                                <div>
                                    <p>شماره تلفن:</p>
                                    <TextField
                                        className='textField'
                                        label="شماره تلفن"
                                        onChange={(e:React.ChangeEvent)=>setSubmitData({...submitData,phone:(e.target as HTMLInputElement).value})}
                                        variant="outlined"
                                        value={submitData.phone} />
                                </div>

                            </form>
                            <Button
                                className='submitButton'
                                variant="contained"
                                color="success"
                                onClick={submitFunc}>
                                ثبت سفارش
                            </Button>
                        </div>:<div className='submitFormErr'>
                            <h2>برای ثبت سفارش باید عضویت داشته باشید</h2>
                            <Button
                                className='submitButton'
                                variant="contained"
                                color="warning" onClick={goToLogin}>
                                ورود/عضویت
                            </Button>
                        </div>
                    }
                </div>:null
            }
        </>

    );
}