import React from "react";

const PapayeCart = (props) => {
    return ( 
        <>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.type}</p>
            <p>{props.store}</p>
        </>
     );
}
 
export default PapayeCart;