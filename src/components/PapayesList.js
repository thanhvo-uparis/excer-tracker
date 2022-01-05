import React from "react";
import PapayeCart from "./PapayeCart";
 
const PapayesList = (props) => {
    return ( 
        <div>
            Welcome to our Papayes Shop
            {props.allPapayes.map(papaye => {
                return (
                    <div>
                        <PapayeCart name={papaye.name} description={papaye.description} type={papaye.type} store={papaye.store}/>
                    </div>
                )
            })}
        </div>
     );
}
 
export default PapayesList;