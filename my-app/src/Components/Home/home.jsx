import React, {useEffect} from "react"
import'./home.css'
import video from  '../../assets/video1.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import { LiaTripadvisor } from "react-icons/lia";


import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () =>{
    // Lets create a react hook to add a scroll animation....
    useEffect(()=>{
        Aos.init({duration: 2000})

    },[])



    return(
        <section className="home">
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type='video1.mp4'></video>


        <div className="homeContent container">
        <div className="textDiv">

        <span data-aos="fade-up" className="smallText">
        Our Packages
        </span>

        <h1 data-aos="fade-up" className="homeTitle">
        Search your Holidays
        </h1>

        </div>

        <div data-aos="fade-up" className="cardDiv flex">
        <div className="destinationInput">
        <lavel htmlFor="city">Search your destination:</lavel>
        <div className="input flex">
        <input type="text" placeholder="Enter name here..."/>
        <GrLocation  className="icon"/>
        </div>
        </div>

        <div className="dateInput">
        <lavel htmlFor="city">Select your date:</lavel>
        <div className="input flex">
        <input type="date"/>
        </div>
        </div>

        <div className="priceInput">
        <div className="lavel_total flex">
        <lavel htmlFor="price">Max price:</lavel>
        <h3 className="total">₹30000</h3>
        </div>
        <div className="input flex">
        <input type="range" max="30000" min="10000"/>
        </div>
        </div>

        <div className="searchOptions flex">
        <HiFilter className="icon"/>
        <span>MORE FILTERS </span>
        </div>
        </div>
        <div data-aos="fade-up" className="homeFooterIcons flex">
        <div className="rightsIcons">
        <FiFacebook className="icon"/>
        <FaInstagram className="icon"/>
        <LiaTripadvisor className="icon"/>
        </div>
        <div className="leftIcons">
        <BsListTask className="icon"/>
        <TbApps className="icon"/>

        </div>
        </div>
        </div>
        </section>
        
    )
}

export default Home