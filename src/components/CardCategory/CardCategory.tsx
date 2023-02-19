import React from "react";

type Card = {
    Image:string,
    Name:string,
    NavFunc : React.MouseEventHandler
}
export const CardCategory = ({Image,Name,NavFunc}:Card)=> {
    return(
        <div
            className="category__card"
            style={
                {
                    background:`url(${Image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'cover',
                    backgroundPosition: 'center',
                    }
                }
            onClick={NavFunc}>
            {Name}
        </div>
    );
}