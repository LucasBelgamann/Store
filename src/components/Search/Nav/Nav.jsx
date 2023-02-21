import * as BsBeerIcon from "react-icons/bs";
import * as FaBeerIcon from "react-icons/fa";
import * as BiBeerIcon from "react-icons/bi";
import * as CgBeerIcon from "react-icons/cg";
import { useContext } from "react";
import "./Nav.css";
import Context from "../../../context/Context";
import Searchbar from "../Searchbar/Searchbar";
import Cart from "../Cart/Cart";

export default function Nav() {
  const { isToggle, setIsToggle, isCart, setIisCart } = useContext(Context);

  const handleToggle = () => {
    setIsToggle(!isToggle);
    if (isCart) {
      setIisCart(false);
    }
  };

  const handleToggleCart = () => {
    setIisCart(!isCart);
    if (isToggle) {
      setIsToggle(false);
    }
  };
 
  return (
    <div className="container-nav">
      <div className="nav">
      <div className={!isToggle ? "search" : "search active"}>
        <BiBeerIcon.BiSearchAlt className="icon" onClick={handleToggle} />
        <div className="input">
          <input type="text" placeholder="Buscar produtos" id="mysearch" />
        </div>
        <CgBeerIcon.CgClose className="clear" onClick={handleToggle} />
      </div>
      <BsBeerIcon.BsFillBagFill className="logo" />
      <div className="nav-liks">
        <BsBeerIcon.BsPersonFill />
        <FaBeerIcon.FaHeart />
        <FaBeerIcon.FaShoppingCart onClick={handleToggleCart} />
        <Cart />
      </div>
    </div>
    <Searchbar />
    </div>
  );
}
