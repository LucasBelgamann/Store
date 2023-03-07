import PropTypes from "prop-types";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import Context from "./Context";

function Provider({ children }) {
  const [isToggle, setIsToggle] = useState(false);
  const [isCart, setIisCart] = useState(false);
  const [storage, setStorage] = useLocalStorage("carrinho", []);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToCart = ({ id, title, price, discount, img, quantity, favorite }) => {
    const indexItem = storage.findIndex((item) => item.id === id);
    if (indexItem >= 0) {
      storage[indexItem].quantity += 1;
      setStorage([...storage]);
    } else {
      setStorage([...storage, { id, title, price, discount, img, quantity, favorite }]);
    }
  };

  const removeQuantity = (id) => {
    const indexItem = storage.findIndex((item) => item.id === id);
    if (indexItem >= 0 && storage[indexItem].quantity > 1) {
      storage[indexItem].quantity -= 1;
      return setStorage([...storage]);
    }
    if (indexItem >= 0) {
      storage.splice(indexItem, 1);
      return setStorage([...storage]);
    }
  };

  const removeItem = (id) => {
    const indexItem = storage.findIndex((item) => item.id === id);
    storage.splice(indexItem, 1);
    return setStorage([...storage]);
  };

  const contextValue = {
    isToggle,
    setIsToggle,
    isCart,
    setIisCart,
    removeQuantity,
    storage,
    setStorage,
    addToCart,
    removeItem,
    favorites, 
    setFavorites
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = { children: PropTypes.node.isRequired };

export default Provider;
