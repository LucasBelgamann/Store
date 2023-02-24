import * as IoIcons from "react-icons/io";
import { useRef } from 'react';
import { SearchData } from '../Navbar/Search/SearchData';
import './Offer.css';

function Hards() {
    const carousel = useRef(null);

    const handleLeftCLick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightCLick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return (
            <div className='offer-container'>
                <h2 className='offer-title' id="hards">Ofertas</h2>
                <div className="carousel" ref={carousel}>
                <IoIcons.IoIosArrowDropleftCircle className='arrow-left' onClick={handleLeftCLick}/>
                <IoIcons.IoIosArrowDroprightCircle className='arrow-right' onClick={handleRightCLick}/>
                    {SearchData.map((e) => {
                        return (
                            <div className='card-offer' key={e.title}>
                                <img src={e.img} alt={e.title} />   
                                <h5>{e.title}</h5>
                                <h4>{e.price}</h4>
                                <button>Adicionar ao carrinho</button>
                            </div>
                        )
                    })}
                </div>
            </div>
    );
};

export default Hards;