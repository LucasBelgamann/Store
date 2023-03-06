import { useContext, useEffect } from "react";
import Context from "../../context/Context";
import * as AiBeerIcon from "react-icons/ai";
import { SellerData } from "../popularProducts/SellerData";
import "./Products.css";

export default function Products() {
  const { addToCart, isFavorite, setIsFavorite, favorites, setFavorites } = useContext(Context);

  const handleToggle = (e) => {
    if (favorites.length
      && favorites.some((item) => item.id === e.id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
    if (
      favorites.length
      && favorites.some((item) => item.id === e.id)
    ) {
      setFavorites(favorites.filter((f) => f.id !== e.id));
    } else {
      setFavorites([...favorites, e]);
    }
  };

  // useEffect(() => {
  //   if (favorites.length === 0) {
  //     setIsFavorite(false)
  //   }
  // }, [])

  return (
    <div className="products-container">
      <div className="container-products">
        {SellerData.map((e, i) => (
          <div key={i} className="card-product">
            <div className="image-product">
              {isFavorite ? (
                  <AiBeerIcon.AiOutlineHeart onClick={ () => handleToggle({ ...e, favorite: true }) } />
              ) : (
                <AiBeerIcon.AiFillHeart onClick={ () => handleToggle(e) } />
              )}
              <img src={e.img} alt={e.title} />
            </div>
            <div className="more-product">
              <h6>{e.title}</h6>
              <span className="price-product">
                {e.price.toFixed(2).replace(".", ",")}
              </span>
              <span>{e.discount.toFixed(2).replace(".", ",")}</span>
            </div>
            <button
              type="button"
              className="btn-add-cart"
              onClick={() => addToCart({ ...e, quantity: 1 })}
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
