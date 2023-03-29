import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import '../../assets/styles/index.css'
import {useDispatch} from "react-redux";
import {setProdCart,decProdCart,delProdCart} from "../../middleware/redux/slice/CartSlice/CartSlice";

interface Items {
    Data:any,
    prodNum:number
}
export const CartItems = ({Data,prodNum}:Items) => {
    const dispatch = useDispatch();

    return(
        <div className='gridItems'>
            <img className='cartImg' src={`https://shop-api.iran.liara.run${Data.image}`} alt='pic' crossOrigin='anonymous'/>
            <div className='cartSec'>
                <h2>{Data.name}</h2>
                <h3>{Data.price} تومان</h3>
                <div style={{display:"flex",flexDirection:'column',alignItems:"center"}}>
                    <RemoveCircleIcon className='arrows' onClick={()=>dispatch(delProdCart(Data))}/>
                    <div>حذف همگی</div>
                </div>
            </div>
            <div className='itemsNumberChanges'>
                <ArrowDropUpIcon className='arrows' fontSize='medium' onClick={()=>dispatch(setProdCart(Data))}/>
                <div>{prodNum}</div>
                <ArrowDropDownIcon className='arrows' fontSize='medium' onClick={()=>dispatch(decProdCart(Data))} />
            </div>
        </div>
    )
}