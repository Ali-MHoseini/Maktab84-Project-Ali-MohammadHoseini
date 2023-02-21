import Button from "@mui/material/Button";
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
            <img src={Image} width='190px' height='190px' alt='#'/>
            <h4 style={{color:'white'}}>{Title}</h4>
            <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}}>
                <p>{Price}تومان</p>
                <Button variant="contained" color={"success"} size="small">افزودن به سبد خرید</Button>
            </div>
        </div>
    );
}