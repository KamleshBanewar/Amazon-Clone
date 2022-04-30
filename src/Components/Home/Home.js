import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className='home'>
            <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            {/* Product Coman components */}
            <div className="home_row">
                <Product
                    id="1"
                    title={"OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) - 5G Android Smartphone | 5000 mAh Battery | 18W Fast Charge | 90Hz LCD Display"}
                    price={17990}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71geVdy6-OS._SL1500_.jpg"
                />
                <Product
                    id="2"
                    title={"EDICT by Boat DynaBeats EWH01 Wireless Bluetooth On Ear Headphone with Mic (Black)"}
                    price={999}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/51nCZCTu6XS._SL1500_.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id="3"
                    title={"Acer Predator Helios 300 11th Gen Intel Core i9-11900H (32 GB/1TB SSD/Win 11 Home/8 GB Graphics/NVIDIA GeForce RTX 3070/300 Hz"}
                    price={169990.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71Xk9qt6IwL._SL1500_.jpg"
                />
                <Product
                    id="4"
                    title={"Apple iPhone 13 Pro Max (256GB) - Sierra Blue"}
                    price={139000}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61i8Vjb17SL._SL1500_.jpg"
                />
                <Product
                    id="5"
                    title={"Whirlpool 265 L 3 Star Inverter Frost-Free Double Door Refrigerator with Intellisense inverter technology(INTELLIFRESH INV CNV 278 3S, German Steel, Convertible)"}
                    price={26490}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71uiII0RR3L._SL1500_.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id="6"
                    title={"Mi 125.7 cm (50 Inches) 4K Ultra HD Android Smart LED TV 4X | L50M5-5AIN (Black)"}
                    price={37990}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61V7cDH8AAS._SL1188_.jpg"
                />
            </div>
        </div>
    )
}

export default Home