import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import * as AiBeerIcon from "react-icons/ai";
import { SellerData } from "../popularProducts/SellerData";
import "./Products.css";

export default function Products() {
  const { addToCart, favorites, setFavorites } = useContext(Context);
  const [products, setProducts] = useState([]);

  const handleToggle = (e, target) => {
    if (favorites.length && favorites.some((item) => item.id === e.id)) {
      setFavorites(favorites.filter((f) => f.id !== e.id));
    } else {
      setFavorites([...favorites, e]);
    }
  };

  useEffect(() => {
    setProducts(
      SellerData.map((e) => ({
        ...e,
        favorite: favorites.some((item) => item.id === e.id),
      }))
    );
  }, [favorites]);

  return (
    <div className="products-container">
      <div className="container-products">
        {products.map((e, i) => (
          <div key={i} className="card-product">
            <div className="image-product">
              <AiBeerIcon.AiFillHeart
                className={e.favorite ? "heart-icon favorite" : "heart-icon"}
                onClick={({ target }) =>
                  handleToggle({ ...e, favorite: true }, target)
                }
              />
              <img src={e.img} alt={e.title} />
            </div>
            <div className="more-product">
              <h6 id="title-product">{e.title}</h6>
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
