import React from "react";
import {Link} from "react-router-dom";

type Card = {
    Image:string,
    Name:string,
    Navigate : React.MouseEventHandler
}
export const CardCategory = ({Image,Name,Navigate}:Card)=> {
    return(
        <div
            onClick={Navigate}
            className="category__card"
            style={
                {
                    background:`url(${Image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'cover',
                    backgroundPosition: 'center',
                    textDecoration:'none'
                    }
                }>
            {Name}
        </div>
    );
}