import React from 'react'
import { useStateValue } from '../../Context/StateProvider';
import "./Product.css";
function Product(props) {
    // This is a Props Destructuring
    const { id, title, price, rating, image } = props;

    const [{ basket }, dispatch] = useStateValue();

    // console.log(id, title, price, rating, image);
    //ADD TO BASKET BUTTON IS HEAR
    //BESICALY DISPATCH IS FIRE THE OBJECT INTO THE ONTHER COMPONENT.
    const AddToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            payload: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        })
    }

    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, id) => (

                                <p key={id}>⭐</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={AddToBasket}>Add to basket</button>
        </div>
    )
}

export default Product