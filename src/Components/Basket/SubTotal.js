import React from 'react'
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../Context/StateProvider';
import { getBasketTotal } from "../../Context/Reducer";
function SubTotal() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat

                //THIS AAL CODE IS FOR THE FORMATING THE CHECKOUT.
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}



                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                        </p>

                        <small className='subtotal_gift'>
                            <input type="checkbox" /> This Order Contains a Gift.
                        </small>
                    </>

                )}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal;