import React,{useEffect} from "react"
import'./main.css'

// Import icons

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
// Let me import the imaiges so we don't have this error on the browser.
import img1 from  '../../assets/img1.jpg'
import img2 from  '../../assets/img2.jpg'
import img3 from  '../../assets/img3.jpg'
import img4 from  '../../assets/img4.jpg'
import img5 from  '../../assets/img5.jpg'
import img6 from  '../../assets/img6.jpg'
import img7 from  '../../assets/img7.jpg'
import img8 from  '../../assets/img8.jpg'
import img9 from  '../../assets/img9.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


//Lets me paste the array named data

const Data =[
    {
        id:1,
        imgSrc: img1,
        destTitle: 'Darjeeling',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '₹12000',
        description: 'Darjeeling, West Bengal: Famous for its tea plantations, Darjeeling offers stunning views of the Himalayas and a charming colonial ambiance. Ride the Darjeeling Himalayan Railway, visit tea estates, and enjoy panoramic vistas from Tiger Hill.'
    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'Goa Beach',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '₹16000',
        description: 'The beaches in Goa are known for their natural beauty, with golden sands, clear blue waters, and picturesque surroundings. Some beaches are also lined with coconut palms, adding to the tropical ambiance.'
    },

    {
        id:3,
        imgSrc: img3,
        destTitle: 'Rishikesh',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '₹8000',
        description: 'Rishikesh, Uttarakhand: Nestled in the foothills of the Himalayas, Rishikesh is a spiritual haven and adventure hub. Experience yoga and meditation retreats, go river rafting on the Ganges, and visit ancient temples.'
    },



    {
        id:4,
        imgSrc: img4,
        destTitle: 'Lakshadweep',
        location: 'Maldives',
        grade: 'CULTURAL RELAX',
        fees: '₹28000',
        description: 'Lakshadweep is situated about 200 to 400 kilometers off the coast of Kerala, India. It spans approximately 32 square kilometers of land area, making it one of the smallest union territories of India. The islands are scattered across a vast expanse of the Arabian Sea, forming the northern part of the Laccadive-Chagos Ridge.'
    },

    {
        id:5,
        imgSrc: img5,
        destTitle: 'Dehradun',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '₹7000',
        description: 'Sample the local cuisine of Dehradun, known for its delectable flavors and diverse influences. do not miss trying Garhwali and Kumaoni specialties like Gahat ki Dal, Aloo ke Gutke, and Bal Mithai. Visit local eateries and street food stalls to savor mouth-watering snacks like Kachori, Chole Bhature'
    },

    {
        id:6,
        imgSrc: img6,
        destTitle: 'New Dehli',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '₹5000',
        description: 'India Gate is a majestic war memorial built to honor the soldiers of the Indian Army who sacrificed their lives in World War I and the Third Anglo-Afghan War. It serves as a symbol of bravery, patriotism, and national pride. Take some time to learn about the history and significance of this iconic monument.'
    },

    {
        id:7,
        imgSrc: img7,
        destTitle: 'Nandi Hills',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '₹18000',
        description: 'Nandi Hills, Chikkaballapur: Nandi Hills, located near Bangalore, is a popular hill station known for its breathtaking views and serene ambiance. The Nandi Lake at the foothills of Nandi Hills offers boating facilities, allowing visitors to enjoy the scenic beauty of the surroundings from the water.'
    },

    {
        id:8,
        imgSrc: img8,
        destTitle: 'Karnataka',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '₹17000',
        description: 'Coorg offers a unique adventure experience, combining the thrill of outdoor activities with the tranquility of nature and the charm of a vibrant hill station. Discover the perfect balance of adventure, greenery, and urban life in the captivating landscapes of Coorg, Karnataka.'
    },

    {
        id:9,
        imgSrc: img9,
        destTitle: 'Himaachal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '₹16000',
        description: 'Himachal Pradesh is a state nestled in the north-western part of India, renowned for its natural beauty, rivers, dense forests, and majestic mountain ranges. The name "Himachal" translates to "the land of snowy mountains," which aptly describes its landscape dominated by the Himalayan mountain ranges.'
    },
]

const Main = () =>{
// Lets create a react hook to add a scroll animation....
useEffect(()=>{
    Aos.init({duration: 2000})

},[])


    return(
      <section className="main container section">

      <div className="secTitle">
     <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>

      <div className="secContent"></div>
      <div className="destination-grid"></div>


      {
        Data.map(({id, imgSrc, destTitle, location, grade,  fees, description, })=>{
            return(
                <div key={id} data-aos="fade-up" className="singleDestination">
                {/*Here it will return single id*/}
                <div className="imageDiv">
                <img src={imgSrc} alt={destTitle}/> 
                </div>
                
                <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                <HiOutlineLocationMarker className="icon" />
                <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                <div className="grade"> {grade}</div>
                <small><small>+1</small></small>
                <div className="grade">
                
                </div>
                <div className="price">
                <h5>{fees}</h5>
                </div>
                </div>

                <div className="desc">
                <p>{description}</p>
                </div>

                <button className='btn flex'>
                DETAILS <HiOutlineClipboardCheck className="icon"/>
                </button>
                </div>
                </div>

            )

        })
      }
      </section>
    )
}

export default Main