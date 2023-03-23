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
        navigate:{pathname:`/products`,hash: "#hash",search:'?sort=books'},
        img:'../../src/assets/images/ketab.png',
    },{
        name:'لوازم خانگی',
        navigate:{pathname:`/products`,search:'?sort=housestuff'},
        img:'../../src/assets/images/lavazem-khanegi.png'
    },{
        name:'لوازم الکترونیکی',
        navigate:{pathname:`/products`,search:'?sort=electronicstuff'},
        img:'../../src/assets/images/Tech.png'
    },{
        name:'لوازم مسافرتی',
        navigate:{pathname:`/products`,search:'?sort=travelstuff'},
        img:'../../src/assets/images/travel.png'
    },{
        name:'خوراکی ها',
        navigate:{pathname:`/products`,search:'?sort=foods'},
        img:'../../src/assets/images/Foods.jpg'
    },
]


export const Homepage = () => {
    const [bookData,setBookData] = useState([])
    let allData;
    useEffect(() => {
        getProds(1,-1).then(res=> {
            allData =(res.data.hits)
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
                <Link to='/products/books'
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
                                id={item._id}/>
                        ))
                    }
                    <div className='moreProd__card'>
                        <h2 style={{textAlign:'center'}}>مشاهده محصولات بیشتر</h2>
                        <Link to='/products/books' >
                            <ArrowCircleLeftIcon style={{fontSize:'3.5rem',color:'white'}}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='Products'>
                <Link to='/products/electronicstuff'
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
                                id={item._id}/>
                        ))
                    }
                    <div className='moreProd__card'>
                        <h2 style={{textAlign:'center'}}>مشاهده محصولات بیشتر</h2>
                        <Link to='/products/electronicstuff' >
                            <ArrowCircleLeftIcon style={{fontSize:'3.5rem',color:'white'}}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}