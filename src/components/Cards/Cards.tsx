import Button from "@mui/material/Button";
import {Link} from 'react-router-dom'
import '../../assets/styles/index.css'

interface Card {
    Image:string,
    Title:string,
    Price:string,
    id:string
}

export const Cards = ({Image,Title,Price,id}:Card)=> {
    return(
        <div className='prod__card'>
            <img src={`https://shop-api.iran.liara.run${Image}`} width='190px' height='190px' alt='#'/>
            <Link style={{textDecoration:"none"}} to={`/products/p=${id}`}>
                <h4 style={{color:'white'}}>{Title}</h4>
            </Link>
            <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}}>
                <p>{Price}تومان</p>
                <Button variant="contained" color={"success"} size="small">افزودن به سبد خرید</Button>
            </div>
        </div>
    );
}