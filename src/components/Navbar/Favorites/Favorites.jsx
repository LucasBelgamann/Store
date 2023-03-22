import { useContext } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { CgTrash } from "react-icons/cg";
import Context from "../../../context/Context";
import './Favorites.css';

export default function Favorites() {
  const { addToCart, isFavorite, favorites, setFavorites } = useContext(Context);

  const removeFavorite = (e) => {
    setFavorites(favorites.filter((f) => f.id !== e.id));
  }

  return (
    <div
      className={!isFavorite ? "favorite-container" : "favorite-container activeFavo"}
    >
      <div className="itens-favorite">
        {favorites.map((e, i) => (
          <div key={i} className="card-cart">
            <img src={e.img} alt={`${e.title}-search-image`} />
            <div className="desc-content-cart">
              <h5>{e.title}</h5>
              <div className="price-cart">
                <h6>{e.price}</h6>
                <h5>{e.discount}</h5>
              </div>
              <div className="btns-favorite">
                <button
                  type="button"
                  onClick={() => addToCart({ ...e, quantity: 1 })}
                  className="add-cart"
                >
                  <BsFillCartPlusFill />
                </button>
                <button type="button" onClick={() => removeFavorite(e)} className="delete-favo">
                  <CgTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="finish-favorite">
        <button className="favorites-addcart">
          <BsFillCartPlusFill />
          <span>Adicionar todos os itens ao carrinho</span>
        </button>
      </div>
    </div>
  );
}
