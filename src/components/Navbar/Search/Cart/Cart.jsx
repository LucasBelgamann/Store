import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import Context from "../../../../context/Context";
import "./Cart.css";

export default function Cart() {
  const { isCart, storage, removeQuantity, addToCart, removeItem } =
    useContext(Context);

  return (
    <div className={!isCart ? "cart-container" : "cart-container activeCart"}>
      <div className="itens-cart">
        {storage.map((e, i) => (
          <div key={i} className="card-cart">
            <img src={e.img} alt={`${e.title}-search-image`} />
            <div className="desc-content-cart">
              <h5>{e.title}</h5>
              <div className="price-cart">
                <h6>{e.discount}</h6>
                <h5>{e.price}</h5>
              </div>
              <div className="btns-cart">
                <button
                  onClick={() => removeQuantity(e.id)}
                  type="button"
                  className="more-less"
                >
                  -
                </button>
                <span>{e.quantity}</span>
                <button
                  onClick={() => addToCart({ ...e, quantity: 1 })}
                  type="button"
                  className="more-less"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(e.id)}
                  type="button"
                  className="delete-cart"
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="finish-cart">
        <div className="favorites-cart">
          <FaHeart />
          <span>Adicionar todos os itens aos favoritos</span>
        </div>
        <h5 className="sub-total-cart">
          Sub total: <span>R$ 400,00</span>
        </h5>
        <h5 className="shiping">
          Frete: <span>R$ 20,00</span>
        </h5>
        <h3 className="total-cart">
          Total: <span>R$ 420,00</span>
        </h3>
        <button type="button" className="finish-btn">
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
