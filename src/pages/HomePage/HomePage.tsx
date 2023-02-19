import '../../assets/styles/index.css'
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


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


export const Homepage = () => {
    return(
        <div className="homepage">
            <div className='imgDesBox'>
                <Slide>
                    {slideImages.map((slideImage, index)=> (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>

        </div>
    );
}