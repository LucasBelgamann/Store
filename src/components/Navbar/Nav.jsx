import * as BsBeerIcon from "react-icons/bs";
import * as FaBeerIcon from "react-icons/fa";
import * as BiBeerIcon from "react-icons/bi";
import * as CgBeerIcon from "react-icons/cg";
import * as AiBeerIcon from "react-icons/ai";
import logo from "./img/storeLogo.png";
import { useContext } from "react";
import Context from "../../context/Context";
import "./Nav.css";
import Searchbar from "./Search/Searchbar/Searchbar";
import Cart from "./Search/Cart/Cart";
import Favorites from "./Favorites/Favorites";

export default function Navbar() {
  const { isToggle, setIsToggle, isCart, setIisCart, storage, setIsFavorite, isFavorite }
  = useContext(Context);

  const handleToggle = () => {
    setIsToggle(!isToggle);
    if (isCart) {
      setIisCart(false);
    }
    if (isFavorite) {
      setIsFavorite(false);
    }
  };

  const handleToggleCart = () => {
    setIisCart(!isCart);
    if (isToggle) {
      setIsToggle(false);
    }
    if (isFavorite) {
      setIsFavorite(false);
    }
  };

  const handleTFavorite = () => {
    setIsFavorite(!isFavorite);
    if (isToggle) {
      setIsToggle(false);
    }
    if (isCart) {
      setIisCart(false);
    }
  };

  return (
    <div className="navbar">
      <div className="nav-logo-link">
        <div className="logo-icon">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-links">
          <BsBeerIcon.BsPersonFill />
          <AiBeerIcon.AiFillHeart onClick={ handleTFavorite } />
          <Favorites />
          <FaBeerIcon.FaShoppingCart onClick={handleToggleCart} />
          <span className="cart" data-count={storage.length}></span>
          <Cart />
        </div>
      </div>
      <div className="nav-search">
        <div className="search">
          <BiBeerIcon.BiSearchAlt className="icon" onClick={handleToggle} />
          <div className="input">
            <input
              type="text"
              onClick={handleToggle}
              placeholder="Buscar produtos"
              id="mysearch"
            />
          </div>
          <CgBeerIcon.CgClose
            className={!isToggle ? "clear" : "clear active-clear"}
            onClick={handleToggle}
          />
        </div>
        <button type="button" className="btn-search">
          Buscar
        </button>
      </div>
      <Searchbar />
    </div>
  );
}
