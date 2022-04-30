import React from 'react'
import { useStateValue } from '../../Context/StateProvider';
import "./Checkout.css";
import MyProduct from './MyProduct';
import SubTotal from './SubTotal';
function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img className='checkoout_AD' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />


                {
                    basket?.length === 0 ? (
                        <div>
                            <h1>Your Basket Is Empty</h1>
                            <p>You have a No item in your basket. To buy one or more items, click "Add TO Basket" next to the item.</p>
                        </div>
                    ) : (
                        <div>
                            <h1 className='checkout_title'>Shoping Basket</h1>
                            {/* LIST OF ALL THE CHECKOUT PRODUCT */}
                            {
                                basket?.map(item => (
                                    <MyProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />

                                ))
                            }
                        </div>


                    )
                }

            </div>
            {
                basket.length > 0 && (
                    <div className="checkout_right">
                        {/* <h1>SubTotal</h1> */}
                        <SubTotal />
                    </div>
                )
            }
        </div >

    )
}

export default Checkout