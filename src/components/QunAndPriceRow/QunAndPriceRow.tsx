import React from "react";

interface row {
    name:string,
    price:number,
    quantity:number
}

export const QunAndPriceRow = ({name,price,quantity}:row) => {
    return(
        <tr>
            <td>#</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
        </tr>
    )
}