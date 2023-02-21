import PropTypes from "prop-types";
import { useState } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [isToggle, setIsToggle] = useState(false);
  const [isCart, setIisCart] = useState(false);
  
  const contextValue = {
    isToggle,
    setIsToggle,
    isCart,
    setIisCart
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = { children: PropTypes.node.isRequired };

export default Provider;
