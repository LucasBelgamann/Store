import { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Context from "../../../../context/Context";
import "./Cart.css";

export default function Cart() {
  const { isCart, storage, removeQuantity, addToCart, removeItem } =
    useContext(Context);
    const [total, setTotal] = useState(0)

    useEffect(() => {
      const somaTotal = storage.reduce((acc, c) => c.discount * c.quantity + acc, 0);
      setTotal(somaTotal.toFixed(2).replace('.', ','));
    }, [setTotal, storage]);

  return (
    <div className={!isCart ? "cart-container" : "cart-container activeCart"}>
      <div className="itens-cart">
        {storage.map((e, i) => (
          <div key={i} className="card-cart">
            <img src={e.img} alt={`${e.title}-search-image`} />
            <div className="desc-content-cart">
              <h5>{e.title}</h5>
              <div className="price-cart">
                <h6>{e.price}</h6>
                <h5>{e.discount}</h5>
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
          Sub total: <span>{total}</span>
        </h5>
        <h5 className="shiping">
          Frete: <span>{storage.length}</span>
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
