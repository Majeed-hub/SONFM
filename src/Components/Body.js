import React from 'react'; 
import './Body.css' ;
import Button from './Button' ;
// import imageMockup from '../Assets/image-mockups.png'
import { cardData, openMobilityArticles } from "../Assets/data";
import Card from './Card' ;
import { budgeting , api , onboarding , online } from '../Assets/cardImages'
import Blog from './Blog'
// import currencyImage from '../Assets/image-currency.jpg' ;
// import resImage from '../Assets/image-restaurant.jpg' ;
// import planeImage from '../Assets/image-plane.jpg' ;
// import confImage from '../Assets/image-confetti.jpg' ;
import logo from "../Assets/sonfm_ogo.png";
import img1 from "../Assets/image-1.png";
import img2 from "../Assets/image-2.png";
import img3 from "../Assets/image-3.png";
import img4 from "../Assets/image-4.png";
// import HubSpotForm from './Form';



const Body = ({ open }) => {
	const data = cardData ;
	const svgs = [ online , budgeting , onboarding , api ] ;
	const images = [img1, img2, img3, img4];
  return (
    <main className="body">
      <div className={`overlay ${open && "start-overlay"}`}></div>
      <div className="body-up">
        <div className="body-up-left">
          <h1>Revolutionizing Mobility in Saudi Arabia</h1>
          <p>
            An Inclusive Decentralized Transport Network Powered by the Beckn
            Protocol
          </p>
          <Button />
        </div>

        <div className="body-up-right">
          <img className="logo" src={logo} alt="decoration" />
        </div>
        <div>
          
        </div>
      </div>
      <div className="body-mid">
        <h1>What is Saudi Open Network for Mobility?</h1>
        <p>
          The Saudi Open Network for Mobility is an innovative initiative
          designed to transform the transportation landscape in Saudi Arabia.
          <br />
          <br /> It serves as an interoperable platform that connects various
          transportation services, enabling seamless access and efficient travel
          solutions across the Kingdom.
        </p>
        <div className="body-mid-cards">
          {data.map((item, index) => (
            <Card key={index} item={item} svg={svgs[index]} />
          ))}
        </div>
      </div>
      <div className="body-bottom">
        <h1>Latest Articles</h1>
        <div className="body-mid-cards">
          {openMobilityArticles.map((item, index) => (
            <Blog key={index} item={item} image={images[index]} />
          ))}
        </div>
      </div>
      {/* <div className="form">
        <h1 className="contact-text">Contact us</h1>
        <HubSpotForm />
      </div> */}
    </main>
  );
} ;


export default Body;