import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className='foot-container'>
                <div className='Sub-cont1'>
                    <h1 style={{fontFamily:'cursive',fontSize:'50px'}}>The Siren</h1>
                    <ion-icon name="logo-facebook" className='fb' ></ion-icon> 
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-youtube"></ion-icon>

                </div>


                <div className='Sub-cont3'>
                    <h2>Components</h2><br/>
                <p>BollyWood</p>
                    <p>Hollywood</p>
                    <p>Technology</p>
                    <p>Food</p> 
                    <p>Health</p>
                </div>
                <div className='Sub-cont4'>
                    <h2>Contact Us</h2>
                    <h4>+ 84-3554856</h4><br/>
                    <h2>About Us</h2>
                    <img className='icons' alt='' src='https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png'/>

                </div>

            </div>


        </>
    );
}

export default Footer;
