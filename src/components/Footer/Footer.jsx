import React from 'react'
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
            <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta expedita dolore temporibus impedit aliquam, adipisci rerum quod natus, molestias cumque architecto quaerat ab odit minus iusto optio molestiae ut.</span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae natus nesciunt quae error autem perspiciatis nisi, atque iure quo fuga ad eaque, aperiam excepturi, neque cum impedit est! Quis, aliquid.</span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <div className="logo">ChampagneStore</div>
                <div className="copyright"> <CopyrightOutlinedIcon className='copy'/>Copyright 2023. All Rights Reserved</div>
            </div>
            <div className="right">
                <img src="/img/pay1.jpg" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Footer