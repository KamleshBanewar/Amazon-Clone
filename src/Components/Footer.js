import React from "react";
import "./Footer.css";
function Footer() {
    let yar = new Date().getFullYear();
    // console.log(yar);

    return (
        <>
            <footer className="footer">
                <p>© {yar} Amazon-Clone. All Rights Reserved | Terms And Conditions</p>
                <p>Developed By Kamlesh Banewar</p>
            </footer>
        </>
    );
}

export default Footer;
