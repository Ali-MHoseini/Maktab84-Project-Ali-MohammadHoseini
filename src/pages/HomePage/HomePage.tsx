import '../../assets/styles/index.css'
import React from 'react'
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {Link, useNavigate} from 'react-router-dom';
import {CardCategory} from "../../components/CardCategory/CardCategory";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import {Cards} from "../../components/Cards/Cards";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import {useEffect,useState} from "react";
import {getProds} from "../../middleware/api/api";
import {useDispatch} from "react-redux";
import {setProds} from "../../middleware/redux/slice/ProductSlice/ProductSlice";


const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px'
}

type category = {
    name:string,
    img:string,
    navigate:object
}

type slideAddress = {
    [index:string]:string
}
type address = {
    pathname:string,
    search:string
}

const slideImages:slideAddress[] = [
    {
        url: '../../src/assets/images/Stage.jpg',
    },
    {
        url: '../../src/assets/images/Stage2.jpg',
    },
    {
        url: '../../src/assets/images/Stage3.jpg',
    },
];


const cardCategoryList:category[] = [
    {
        name:'کتاب ها',
        navigate:{pathname:`/products`,search:'?sort=64060a83981b5568a19a1b74_cat'},
        img:'../../src/assets/images/ketab.png',
    },{
        name:'لوازم خانگی',
        navigate:{pathname:`/products`,search:'?sort=64060a8e981b5568a19a1b77_cat'},
        img:'../../src/assets/images/lavazem-khanegi.png'
    },{
        name:'لوازم الکترونیکی',
        navigate:{pathname:`/products`,search:'?sort=64060aa7981b5568a19a1b7a_cat'},
        img:'../../src/assets/images/Tech.png'
    },{
        name:'لوازم مسافرتی',
        navigate:{pathname:`/products`,search:'?sort=64060ab0981b5568a19a1b7d_cat'},
        img:'../../src/assets/images/travel.png'
    },{
        name:'خوراکی ها',
        navigate:{pathname:`/products`,search:'?sort=64060ac4981b5568a19a1b80_cat'},
        img:'../../src/assets/images/Foods.jpg'
    },
]


export const Homepage = () => {
    const [bookData,setBookData] = useState([])
    const dispatch = useDispatch()
    let allData;
    useEffect(() => {
        getProds(1,-1).then(res=> {
            allData =(res.data.hits)
            dispatch(setProds(res.data.hits))
            setBookData(allData.filter((item:any)=>item.subCategory._id == '6406eef6981b5568a19a1e63').slice(0,4))
        })
    }, []);

    const navigate = useNavigate()
    const Navigate = (address:any):void => {
        navigate(address)
    }

    return(
        <div className="homepage">
            <div className='SlideShowBox'>
                <Slide>
                    {slideImages.map((slideImage, index)=> (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
            <div className='Category'>
                <h2 style={{fontSize:'2rem'}}>دسته بندی محصولات ما</h2>
                <div className='category__list'>
                    {
                        cardCategoryList && cardCategoryList.map((category,index:number) => (
                            <CardCategory
                                key={index}
                                Image={category.img}
                                Name={category.name}
                                Navigate={()=>Navigate(category.navigate)}/>
                        ))
                    }
                </div>
            </div>
            <div className='Products'>
                <Link to={{pathname:`/products`,search:'?sort=64060a83981b5568a19a1b74'}}
                      style={{textDecoration:'none'}}>
                    <h2 style={{fontSize:'2rem',display:"flex"}}>
                        کتاب ها
                        <ArrowBackIcon style={{alignSelf:'center'}}/></h2>
                </Link>
                <div className='category__list'>
                    {
                        bookData && bookData.map((item:any) =>(
                            <Cards
                                key={crypto.randomUUID()}
                                Image={item.image}
                                Title={item.name}
                                Price={item.price}
                                id={item._id}
                                Data={item}/>
                        ))
                    }
                    <div className='moreProd__card'>
                        <h2 style={{textAlign:'center'}}>مشاهده محصولات بیشتر</h2>
                        <Link to={{pathname:`/products`,search:'?sort=64060a83981b5568a19a1b74'}} >
                            <ArrowCircleLeftIcon style={{fontSize:'3.5rem',color:'white'}}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='Products'>
                <Link to={{pathname:`/products`,search:'?sort=64060aa7981b5568a19a1b7a'}}
                      style={{textDecoration:'none'}}>
                    <h2 style={{fontSize:'2rem',display:"flex"}}>
                        لوازم الکترونیکی
                        <ArrowBackIcon style={{alignSelf:'center'}}/></h2>
                </Link>
                <div className='category__list'>
                    {
                        bookData && bookData.map((item:any) =>(
                            <Cards
                                key={crypto.randomUUID()}
                                Image={item.image}
                                Title={item.name}
                                Price={item.price}
                                id={item._id}
                                Data={item}/>
                        ))
                    }
                    <div className='moreProd__card'>
                        <h2 style={{textAlign:'center'}}>مشاهده محصولات بیشتر</h2>
                        <Link to={{pathname:`/products`,search:'?sort=64060aa7981b5568a19a1b7a'}} >
                            <ArrowCircleLeftIcon style={{fontSize:'3.5rem',color:'white'}}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}