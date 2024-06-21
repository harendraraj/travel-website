import React, {useEffect} from "react"
import'./footer.css'
import video from '../../assets/video3.mp4'
import {FiSend} from 'react-icons/fi'
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi"

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () =>{
    // Lets create a react hook to add a scroll animation....
    useEffect(()=>{
        Aos.init({duration: 2000})

    },[])
    return(
        <section className="footer">
        <div className="videoDiv">
        <video src={video}loop autoPlay muted type='video3.mp4'></video>
        </div>

        <div className="secContent container">
        <div className="contactDiv flex">
        <div data-aos="fade-up"  className="text">
        <small>KEEP IN TOUCH</small>
        <h2> Travel with us</h2>
        </div>

        <div className="inputDiv flex">
        <input data-aos="fade-up"  type="text" placeholder="Enter Email Address"/>
        <button data-aos="fade-up"  className="btn flex" type="submit">
        SEND  <FiSend className="icon"/>
        </button>
        </div>
        </div>

        <div className="footerCard flex">
        <div className="footerIntro flex">
        <div className="logo flex">
        <a href="#" className='logo flex'>
        <MdTravelExplore  className="icon"/>Travel.
        </a>
        </div>

        <div data-aos="fade-up"  footerParagraph>Embark on a journey of discovery with our travel website, where wanderlust meets convenience. Whether you crave the sun-kissed beaches of tropical paradises, the awe-inspiring vistas of majestic mountains, or the vibrant tapestry of bustling cityscapes, we have an adventure tailored just for you. From meticulously planned tours to spontaneous getaways, our platform offers a diverse array of destinations and experiences to suit every traveler's taste and budget.</div>

        <div data-aos="fade-up"  className="footerSocials grid">
        <AiOutlineTwitter className="icon"/>
        <AiFillYoutube className="icon"/>
        <AiFillInstagram className="icon"/>
        <FaTripadvisor className="icon"/>
        </div>
        </div>

        {/*Group one*/}

        <div className="footerLinks flex">
        <div data-aos="fade-up"data-aos-duration="4000"  className="linkGroup">
        <span className="groupTitle">
        OUR AGENCY
        </span>

        <li className="footerList flex">
        <FiChevronRight className="icon"/>
        Services
        </li>
        <li className="footerList flex">
        <FiChevronRight className="icon"/>
        Agency
        </li>
        <li className="footerList flex">
        <FiChevronRight className="icon"/>
        Tourism
        </li>
        <li className="footerList flex">
        <FiChevronRight className="icon"/>
        Payment
        </li>
        
        </div>
        {/*Group two*/}
        <div data-aos="fade-up" data-aos-duration="3000"  className="linkGroup">
        <span className="groupTitle">
        PARTNERS
        </span>

        <li className="footerList flex">
        <FiChevronRight className="icon"/>
        Rentcars
        </li>
        <li className="footerList flex">
        <FiChevronRight className="icon"/>
        HotelWorld
        </li>
        <li className="footerList flex">
        <FiChevronRight className="icon"/>
        BikeBook
        </li>
        <li className="footerList flex">
        <FiChevronRight className="icon"/>
         TripAdvisor
        </li>
        </div>
        {/*Group three*/}
        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
        <span className="groupTitle">
        LAST  MINUTE
        </span>

        <li className="footerList flex">
        <FiChevronRight className="icon"/>
         Lakshadweep
        </li>
        <li className="footerList flex">
        <FiChevronRight className="icon"/>
        Nandi Hills
        </li>
        <li className="footerList flex">
        <FiChevronRight className="icon"/>
        Manali
        </li>
        <li className="footerList flex">
        <FiChevronRight className="icon"/>
        Maldweep
        </li>
        
        </div>
        </div>

        <div className="footerDiv">
        <small>BEST TRAVEL WEBSITE THEME</small>
        <small>COPYRIGHTS RESERVED - HARENDRA RAJPUT 2024</small>
        </div>
        
        </div>
        </div>
        </section>
    )
}

export default Footer