import { useContext } from "react";
import Context from "../../../context/Context";
import { SearchData } from "../SearchData";
import "./Searchbar.css";

export default function Searchbar() {
  const { isToggle } = useContext(Context);

  return (
    <div className={!isToggle ? "searchbar" : "searchbar activetwo"}>
      <div className="content">
        <div>
          <button type="button">Categoria</button>
          <button type="button">Categoria</button>
          <button type="button">Categoria</button>
          <button type="button">Categoria</button>
          <button type="button">Categoria</button>
        </div>
        <div className="container-cardsearch">
          {SearchData.map((e) => (
            <div className="card">
              <img src={e.img} alt={`${e.title}-search-image`} />
              <div className="desc-content-search">
                <h5>{e.title}</h5>
                <h6>{e.discount}</h6>
                <h5>{e.price}</h5>
              </div>
            </div>
          ))}
        </div>
        <a href="#" className="span-search">
          Deseja ver mais produtos sobre boneco ....?
        </a>
      </div>
    </div>
  );
}