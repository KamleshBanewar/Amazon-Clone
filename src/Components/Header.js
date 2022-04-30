import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../Context/StateProvider';
function Header() {

    const [{ basket, user }] = useStateValue();

    let UserName = user[0];

    // console.log(UserName);
    return (
        <nav className='header'>
            {/* Amazon Logo  */}
            <Link to='/'>
                <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
            </Link>

            {/* Search Box  */}
            <div className="header_search">
                <input type="text" className="header_serchInput" />
                <SearchIcon className='header_searchIcon' />
            </div>

            {/* 3 Links */}
            <div className="header_nav">
                {/* 1st Link */}
                <Link to='/login' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLine_one'>Hello {UserName}</span>
                        <span className='header_optionLine_Two'>Sing {UserName === "Guest" ? <span>In</span> : <span>Out</span>} </span>
                    </div>
                </Link>

                {/* 2nd Link */}
                <Link to='/' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLine_one'>Return</span>
                        <span className='header_optionLine_Two'>& Order</span>
                    </div>
                </Link>

                {/* 3rd Link */}
                <Link to='/' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLine_one'>Your</span>
                        <span className='header_optionLine_Two'>Prime</span>
                    </div>
                </Link>

                {/* Chart  */}
                <Link to='/checkout' className='header_link'>
                    <div className="header_optionBasket">
                        {/* Shoping Basket Icon */}
                        <ShoppingBasketIcon />
                        {/* Number Of Items in Basket */}
                        {/* THIS "?" DENOTE AS A OPTINOL  */}
                        <span className='header_optionLine_Two header_basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>



        </nav>
    )
}

export default Header