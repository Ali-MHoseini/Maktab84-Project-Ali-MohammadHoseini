import Button from "@mui/material/Button";
import {Link} from 'react-router-dom'
import '../../assets/styles/index.css'
import {setProdCart} from "../../middleware/redux/slice/CartSlice/CartSlice";
import {toast} from "react-toastify";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

interface Card {
    Image:string,
    Title:string,
    Price:string,
    id:string,
    Data:object
}

const toastData:any = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {textTransform: 'capitalize'}
}

export const Cards = ({Image,Title,Price,id,Data}:Card)=> {

    const dispatch = useDispatch()

    const [isAdd , setIsAdd] = useState<boolean>(false)
    const addToCart = ():void => {
        setIsAdd(true)
        dispatch(setProdCart(Data))
        setIsAdd(false)
        toast.success('عملیات با موفیت انجام شد',toastData)
    }

    return(
        <div className='prod__card'>
            <img
                src={`https://shop-api.iran.liara.run${Image}`}
                width='190px' height='190px'
                alt='#'
                crossOrigin='anonymous'/>
            <Link style={{textDecoration:"none"}} to={`/products/p=${id}`}>
                <h4 style={{color:'white'}}>{Title}</h4>
            </Link>
            <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}}>
                <p>{Price}تومان</p>
                <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={addToCart}>
                    {isAdd?<CircularProgress />:`افزودن به سبد خرید`}
                </Button>
            </div>
        </div>
    );
}