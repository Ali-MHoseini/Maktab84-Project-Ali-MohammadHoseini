import '../../assets/styles/index.css'
import {NavLink,Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const Header = ()=> {
    return(
        <div className="header">
            <Link to='/' className='flex__header'>
                <img
                    src='../../src/assets/images/logo.png'
                    width='65px'
                    height='70px'
                    alt='#'
                    style={{alignSelf:"start"}}/>
                <h1>فروشگاه سبد</h1>
            </Link>
            <div className='flex__header' style={{alignSelf:'center',gap:'2rem'}}>
                <NavLink className='HeaderLinks' to={'/'}>خانه</NavLink>
                <NavLink className='HeaderLinks' to={'/products'}>محصولات</NavLink>
                <NavLink className='HeaderLinks' to={'/about-us'}>درباره ما</NavLink>
            </div>
            <TextField
                id="standard-basic"
                label="جستجوی محصولات"
                variant="outlined"
                style={{alignSelf:'center',textAlign:"left",width:'25rem'}}/>
            <div className='icons'>
                <Link to={'/login'} >
                    <PersonIcon fontSize="large" color='action'/>
                </Link>

                <Link to={'/cart'} style={{alignSelf:'flex-start'}}>
                    <Badge badgeContent='0' color="primary">
                        <ShoppingCartIcon fontSize="large" color='action'/>
                    </Badge>
                </Link>
            </div>

        </div>
    );
}