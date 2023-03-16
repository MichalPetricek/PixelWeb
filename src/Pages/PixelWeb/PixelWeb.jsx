import React, {useState} from "react";
import "./PixelWeb.css";
import logo from "../../Images/logo.png";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {FaArrowCircleUp} from 'react-icons/fa';
import { ScrollBtn } from './ScrollStyle';
import "../../Components/Navbar/Navbar.css";

const PixelWeb = () => {
    /*scroll to top*/
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    /*end of scroll to top*/

    var znak1 = "<";
    var znak2 = "/>";
    return(
        <>
        <ScrollBtn>
        <FaArrowCircleUp onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} />
        </ScrollBtn>
        <div className="bg">
            <div className="grid-container">
                <div className="grid-item1">
                    <img className="logo" alt="logo" src={logo}></img>
                </div>
                <div className="grid-item2">
                    <h1 className="main-text">Internetové řešení pro každého.</h1>
                    <div className="odkazy">
                        <text className="uvod-link-znak">{znak1}</text>
                        <Link activeClassName="active" to="/weby"><button className="sluzby-button weby">WEBY</button></Link>
                        <Link activeClassName="active" to="/eshopy"><button className="sluzby-button eshopy"><span className="span-hover purple"></span> E-SHOPY </button></Link>
                        <Link to="/marketing"><button className="sluzby-button marketing"><span className="span-hover lightblue"></span>MARKETING</button></Link>
                        <text className="uvod-link-znak">{znak2}</text>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div className="uvod-container-text">
                <h1 className="uvod-main-pixel">PIXEL WEB</h1>
                <p className="uvod-text1">Hledáte profesionální způsob, jak představit vaše produkty nebo služby na internetu? Jsme tady pro vás! Specializujeme se na tvorbu moderních a funkčních webových stránek, které vás pomohou zviditelnit. A co je nejdůležitější, díky našim řešením budete moci sami jednoduše a rychle upravovat svůj web.</p>
                <div className="uvod-space"></div>
                <p className="uvod-text1"><text className="uvod-text-znak">-</text> Vytváříme webové aplikace na technologii React.</p>
                <p className="uvod-text1"><text className="uvod-text-znak">-</text> Každá webová stránka je originální, nepoužíváme žádné šablony.</p>
                <p className="uvod-text1"><text className="uvod-text-znak">-</text> Více než 5 let zkušeností.</p>          
                <p className="uvod-text1"><text className="uvod-text-znak">-</text> Možnost online konzultace zdarma.</p>
        </div>
        </div>
        </>
    );
}
export default PixelWeb;