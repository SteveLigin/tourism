import React from 'react'
// import './Style.css';
import img1 from './img/Rameshwaram/Chennai.jpg';
import img2 from './img/Rameshwaram/Kodaikanal.jpg';
import img3 from './img/Rameshwaram/Ooty.jpg';
import img4 from './img/Rameshwaram/Kanyakumari.jpg'
import img5 from './img/Rameshwaram/Kumbakonam.jpg';
import img6 from './img/Rameshwaram/Madurai.jpg';
import img7 from './img/Rameshwaram/Yercaud.jpg';
import img8 from './img/Rameshwaram/Theni.jpg';
import img9 from './img/Rameshwaram/Hogenakal.jpg';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';


export default function Rameshwaram() {
    return (
        <Container>
        <section className='pakages' id='pakages'>
            <h1 className='heading'>
                <span>R</span>
                <span>a</span>
                <span>m</span>
                <span>e</span>
                <span className='space'>s</span>
                <span>h</span>
                <span>w</span>
                <span>a</span>
                <span>r</span>
                <span>a</span>
                <span>m</span>

            </h1>
            <div className='box-container'>
                <div className='box'>
                    <img src={img1}></img>
                    <div className='content'>
                        <h3><FontAwesomeIcon style={{color:"orange"}} icon={faLocationDot} />Chennai</h3>
                    <p>Chennai, located on the southeastern coast of India, is a vibrant metropolis known for its rich history cultural Education.</p>
                    <div className='star'>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>

                    </div>
                    <div class="price">$90.00<span>$120.00</span></div>
                    <a href="#" class="btn but">booknow</a>
                </div>
            </div>
            {/* 2 */}
            <div className='box'>
                <img src={img2}></img>
                <div className='content'>
                    <h3><FontAwesomeIcon style={{color:"orange"}} icon={faLocationDot} />Kodaikanal </h3>
                    <p>Kodaikanal is a charming hill station in Tamil Nadu, India, renowned for its natural beauty and pleasant climate.</p>
                    <div className='star'>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>

                    </div>
                    <div class="price">$90.00<span>$120.00</span></div>
                    <a href="#" class="btn but">booknow</a>
                </div>
            </div>
            {/* 3 */}
            <div className='box'>
                <img src={img3}></img>
                <div className='content'>
                    <h3><FontAwesomeIcon style={{color:"orange"}} icon={faLocationDot} />Ooty </h3>
                    <p>Ooty, short for Ootacamund, is a picturesque hill station in Tamil Nadu, India, known for its tea gardens.</p>
                    <div className='star'>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>

                    </div>
                    <div class="price">$90.00<span>$120.00</span></div>
                    <a href="#" class="btn but">booknow</a>
                </div>
            </div>
            {/* 4 */}
            <div className='box'>
                <img src={img4}></img>
                <div className='content'>
                    <h3><FontAwesomeIcon style={{color:"orange"}} icon={faLocationDot} />Kanyakumari </h3>
                    <p>Kanyakumari, located in Tamil Nadu, India, is the southernmost tip of the Indian subcontinent, famous for its stunning seashores.</p>
                    <div className='star'>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>

                    </div>
                    <div class="price">$90.00<span>$120.00</span></div>
                    <a href="#" class="btn but">booknow</a>
                </div>
            </div>
            {/* 5 */}
            <div className='box'>
                <img src={img5}></img>
                <div className='content'>
                    <h3><FontAwesomeIcon  style={{color:"orange"}} icon={faLocationDot} />Kumbakonam</h3>
                    <p>Kumbakonam is a historic town in Tamil Nadu, India, renowned for its temples, rich cultural heritage, and traditional architecture.</p>
                    <div className='star'>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>

                    </div>
                    <div class="price">$90.00<span>$120.00</span></div>
                    <a href="#" class="btn but">booknow</a>
                </div>
            </div>
            {/* 6 */}
            <div className='box'>
                <img src={img6}></img>
                <div className='content'>
                    <h3><FontAwesomeIcon style={{color:"orange"}} icon={faLocationDot} />Madurai </h3>
                    <p>Madurai, located in Tamil Nadu, India, is an ancient city famous for its historic Meenakshi Amman Temple and vibrant cultural heritage.</p>
                    <div className='star'>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>

                    </div>
                    <div class="price">$90.00<span>$120.00</span></div>
                    <a href="#" class="btn but">booknow</a>
                </div>
            </div>
            {/* 7 */}
            <div className='box'>
                <img src={img7}></img>
                <div className='content'>
                    <h3><FontAwesomeIcon style={{color:"orange"}} icon={faLocationDot} />Yercaud</h3>
                    <p>Yercaud is a tranquil hill station in Tamil Nadu, India, known for its serene landscapes and aromatic coffee plantations.</p>
                    <div className='star'>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>

                    </div>
                    <div class="price">$90.00<span>$120.00</span></div>
                    <a href="#" class="btn but">booknow</a>
                </div>
            </div>
            {/* 8 */}
            <div className='box'>
                <img src={img8}></img>
                <div className='content'>
                    <h3><FontAwesomeIcon style={{color:"orange"}} icon={faLocationDot} />Theni </h3>
                    <p>Theni, located in Tamil Nadu, India, is a picturesque district nestled in the Western Ghats, celebrated for its lush greenery.</p>
                    <div className='star'>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>

                    </div>
                    <div class="price">$90.00<span>$120.00</span></div>
                    <a href="#" class="btn but">booknow</a>
                </div>
            </div>
            {/* 9 */}
            <div className='box'>
                <img src={img9}></img>
                <div className='content'>
                    <h3><FontAwesomeIcon style={{color:"orange"}} icon={faLocationDot} />Hoganakal </h3>
                    <p>Hogenakkal, often called the "Niagara of India," is a mesmerizing waterfall on the Kaveri River in Tamil Nadu, known for its.</p>
                    <div className='star'>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>

                    </div>
                    <div class="price">$90.00<span>$120.00</span></div>
                    <a href="#" class="btn but">booknow</a>
                </div>
            </div>

        </div><br/><br/><br/><br/>
   </section >
   </Container>
  )
}
