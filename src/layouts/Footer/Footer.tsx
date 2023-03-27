import {Link} from 'react-router-dom'
export const Footer = ()=> {
    return(
        <div className='footer'>
            <div className='Details'>
                <div className='f__Hedaer'>
                    دسته بندی محصولات
                </div>
                <div className='f__details'>
                    <Link className='links' to={{pathname:`/products`,search:'?sort=64060a83981b5568a19a1b74_cat'}} >کتاب ها</Link>
                    <Link className='links' to={{pathname:`/products`,search:'?sort=64060a8e981b5568a19a1b77_cat'}} >لوازم خانگی</Link>
                    <Link className='links' to={{pathname:`/products`,search:'?sort=64060aa7981b5568a19a1b7a_cat'}} >لوازم الکترونیکی</Link>
                    <Link className='links' to={{pathname:`/products`,search:'?sort=64060ab0981b5568a19a1b7d_cat'}} >لوازم مسافرتی</Link>
                    <Link className='links' to={{pathname:`/products`,search:'?sort=64060ac4981b5568a19a1b80_cat'}} >خوراکی ها</Link>

                </div>
            </div>
            <div className='Details'>
                <div className='f__Hedaer'>
                    راه های ارتباطی
                </div>
                <div className='f__details'>
                    <Link className='links' to='#' >درباره فروشگاه</Link>
                    <Link className='links' to='#' >آدرس</Link>
                    <Link className='links' to='#' >شماره تماس</Link>


                </div>
            </div>
            <Link to='/' className='flex__header'>
                <img
                    src='../../src/assets/images/logo.png'
                    width='65px'
                    height='70px'
                    alt='#'
                    style={{alignSelf:"start"}}/>
                <h1>فروشگاه سبد</h1>
            </Link>
        </div>
    );
}