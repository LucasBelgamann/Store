import * as MdIcons from "react-icons/md";
import { useContext, useRef } from 'react';
import { SearchData } from '../Navbar/Search/SearchData';
import './Offer.css';
import Context from "../../context/Context";

function Hards() {
    const { addToCart, removeQuantity } = useContext(Context);
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
                <MdIcons.MdArrowBackIos className='arrow-left' onClick={handleLeftCLick}/>
                <MdIcons.MdArrowForwardIos className='arrow-right' onClick={handleRightCLick}/>
                    {SearchData.map((e) => {
                        return (
                            <div className='card-offer' key={e.title}>
                                <img src={e.img} alt={e.title} />   
                                <h5>{e.title}</h5>
                                <h4>{e.price}</h4>
                                <button type="button" onClick={ () => addToCart({ ...e, quantity: 1 }) }>Adicionar ao carrinho</button>
                            </div>
                        )
                    })}
                </div>
            </div>
    );
};

export default Hards;