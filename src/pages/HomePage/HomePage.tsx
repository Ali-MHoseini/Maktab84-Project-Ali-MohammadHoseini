import '../../assets/styles/index.css'
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {Link, useNavigate} from 'react-router-dom';
import {CardCategory} from "../../components/CardCategory/CardCategory";


const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px'
}
const slideImages = [
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
        navigate:'/products/books',
        img:'../../src/assets/images/ketab.png',
    },{
        name:'لوازم خانگی',
        navigate:'/products/housestuff',
        img:'../../src/assets/images/lavazem-khanegi.png'
    },{
        name:'لوازم الکترونیکی',
        navigate:'/products/electronicstuff',
        img:'../../src/assets/images/Tech.png'
    },{
        name:'لوازم مسافرتی',
        navigate:'/products/travelstuff',
        img:'../../src/assets/images/travel.png'
    },{
        name:'خوراکی ها',
        navigate:'/products/foods',
        img:'../../src/assets/images/Foods.jpg'
    },
]
type category = {
    name:string,
    navigate:string,
    img:string


}

export const Homepage = () => {
    const navigate = useNavigate()
    const navFunc = (address:string):void => {
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
                                NavFunc={()=>navFunc(category.navigate)}/>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}