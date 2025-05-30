import { useDispatch, useSelector } from "react-redux";
import AccordionItems from "./AccordionItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

    const cartItems = useSelector((store)=>store.cart.items);
    //we can also write it like this:
    {/**
        const store = useSelector((store)=>store)
        const cartItems = store.cart.items;
        Both will do the same thing but if we use this it will be a big performance loss
        why beacuse if you access whole store(it may conatin multiple slices) so if any slice(ex:userSlice)
        is updated then it will access all those which is not used in our component
    */}
    cartItems.forEach(item => {
        console.log("Inside Cart:",item.card.info.name);
    });

    const dispatch = useDispatch();
    const handleClearItem = () =>{
        dispatch(clearCart());
    }
    return(
    <div className="w-6/12 m-auto">
        <div className="flex justify-between">
            <h1>Cart</h1>
            <button className="bg-black text-white rounded-lg p-2" onClick={handleClearItem}>
                ClearCart
            </button>
        </div>
        <div className="">
            {cartItems.length===0 ? 
            (<h1 className="font-bold text-2xl text-center">Cart is Empty!... Add Items to the Cart</h1>)
            :(<AccordionItems items={cartItems}/>)}
        </div>
    </div>
    
)}
export default Cart;