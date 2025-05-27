import { useState } from "react";
import AccordionItems from "./AccordionItems";

const RestaurantCategory = ({data}) =>{
    {/*Accordion Header **/}

    const [isVisible,setIsVisible] = useState(false);
    const handleClick = () =>{
        {/*Inside setIsVisible i can pass true as well but i was using toggle because 
            when the user clicks the btn 2nd time it should be converted to false again*/}
       setIsVisible(!isVisible);
    }
    return(
        <div className="border border-b-1 w-12/12 bg-gray-100 p-2 m-2 shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{data.title} ({data?.itemCards.length})</span>
                <span>{isVisible ? "⬆️" : "⬇️"}</span>
            </div>
            <div>
                {/*Short-Circuit --> use it only if there is true value */}
                {isVisible && <AccordionItems items={data?.itemCards} />}
            </div>
        </div>

    )
     {/*Accordion Body **/}
}

export default RestaurantCategory;