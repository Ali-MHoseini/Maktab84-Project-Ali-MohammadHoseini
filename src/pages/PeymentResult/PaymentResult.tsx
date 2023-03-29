import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {removeItems} from '../../middleware/redux/slice/CartSlice/CartSlice'

export const PaymentResult = () => {
    const resultMes = window.location.search.split('?')[1]
    const dispatch = useDispatch()
    let result:boolean;
    if(resultMes === 'success') {
        dispatch(removeItems())
        result = true
    }else {
        result = false;
    }


    return(
        <>
        {
            result?<div className='payment-result'>
                <h2>خرید با موفقیت انجام شد</h2>
                <Link to='/'>بازگشت به خانه</Link>
            </div>:<div className='payment-result'>
                <h2>خرید ناموفق</h2>
                <Link to='/cart'>بازگشت به سبد خرید</Link>
            </div>
        }

        </>
    );
}