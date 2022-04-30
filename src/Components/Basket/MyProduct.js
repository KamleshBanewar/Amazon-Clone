import React from 'react'
import { useStateValue } from '../../Context/StateProvider';
import "./MyProduct.css";
function MyProduct({ id, title, price, rating, image }) {

    const [{ basket }, dispatch] = useStateValue();
    // console.log(item, title, price, rating, image);
    //REMOVIE BASKET FUNCTION
    const RemoveBasket = () => {
        dispatch({
            type: "REMOVE_TO_BASKET",
            id: id,
        });
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_img' src={image} alt="" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, id) => (

                                <p key={id}>⭐</p>
                            ))
                    }
                </div>
                <button onClick={RemoveBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default MyProduct