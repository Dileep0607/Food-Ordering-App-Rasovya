import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const AccordionItems = ({items}) =>{
    console.log("ItemsList:",items);

    //dispatch--> dispatch is a function we get from useDispatch hook. 
    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        //dispatch an action.
        //Whatever we pass inside addItem that will be taken as action.payload in cartSlice.
        dispatch(addItem(item));
    }
    return(
        <div>
           {items.map((item) =>(
            <div key={item?.card?.info?.id}>
                <div className="flex flex-row justify-between border-b-2 m-2 p-2">
                   <div className="flex flex-col w-9/12">
                        <span className="font-bold text-gray-700">{item?.card?.info?.name}</span>
                        <span className="font-bold">₹{item?.card?.info?.price/100}</span>
                        <span className="text-gray-400 text-xs">{item?.card?.info?.description}</span>
                    </div>
                    <div className="w-3/12 p-4">
                    <div className="absolute ">
                        <button className="px-2 py-1 mx-10 mt-20 bg-green-400 rounded-lg "
                        onClick={() => handleAddItem(item)}>
                            {/*Know the difference b/w this 3 ways:
                                onClick={handleAddItem}
                                onClick={()=>handleAddItem()} --> This is the callback function
                                onClick={handleAddItem(item)} --> This is calling the func right away
                            */}
                             ADD 
                        </button>
                    </div>
                        <img className="rounded-xl" 
                        src={CDN_URL + item?.card?.info?.imageId}/>                    
                     </div>
                </div>
            </div>
            ))}
        </div>
    )
    
}

export default AccordionItems;