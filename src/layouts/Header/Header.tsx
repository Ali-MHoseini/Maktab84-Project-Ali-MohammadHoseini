import '../../assets/styles/index.css'
import {NavLink,Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const Header = ()=> {
    return(
        <div className="header">
            <div className='flex__header'>
                <img
                    src='../../src/assets/images/logo.png'
                    width='65px'
                    height='70px'
                    style={{alignSelf:"start"}}/>
                <h1>فروشگاه سبد</h1>
            </div>
            <div className='flex__header' style={{alignSelf:'center',gap:'2rem'}}>
                <NavLink to={'/products'}>محصولات</NavLink>
                <NavLink to={'/about-us'}>درباره ما</NavLink>
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