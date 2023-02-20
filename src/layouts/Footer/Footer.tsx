import {Link} from 'react-router-dom'
export const Footer = ()=> {
    return(
        <div className='footer'>
            <div className='Details'>
                <div className='f__Hedaer'>
                    دسته بندی محصولات
                </div>
                <div className='f__details'>
                    <Link className='links' to='/products/books' >کتاب ها</Link>
                    <Link className='links' to='/products/housestuff' >لوزام خانگی</Link>
                    <Link className='links' to='/products/electronicstuff' >لوازم الکترونیکی</Link>
                    <Link className='links' to='/products/travelstuff' >لوازم مسافرتی</Link>
                    <Link className='links' to='/products/foods' >خوراکی ها</Link>

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