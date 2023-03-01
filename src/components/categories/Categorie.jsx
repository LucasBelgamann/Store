import { CategoriesData } from "./CategoriesData";
import './Categories.css';

export default function Categories() {
    return (
        <div className="categories-container">
            {CategoriesData.map((e, i) => (
                <div className="category-card">
                    <a>{e.img}</a>
                    <span>{e.title}</span>
                </div>
            ))}
        </div>
    )
}