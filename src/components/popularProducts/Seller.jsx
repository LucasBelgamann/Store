import { useContext } from 'react';
import Context from '../../context/Context';
import './Seller.css';
import { SellerData } from './SellerData';

export default function Seller() {
    const { addToCart } = useContext(Context);
    
    return (
        <div className="seller-container">
                <h2 className="offer-title">Ofertas</h2>
                <div className="container-seller-offer">
                    {SellerData.filter((_, i) => i < '5').map((e, i) => (
                        <div key={ i } className="card-seller">
                            <div className="image-seller">
                                <img src={ e.img } alt={e.title} />
                            </div>
                            <div className="info-product">
                                <h6>{e.title}</h6>
                                <span className="price-seller">{e.price}</span>
                                <span>{e.discount.toFixed(2).replace('.', ',')}</span>
                            </div>
                            <button type="button" className="btn-add-cart" onClick={ () => addToCart({ ...e, quantity: 1 }) }>Adicionar ao carrinho</button>
                        </div>
                    ))}
                </div>
        </div>
    )
}