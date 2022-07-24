import "./category.styles.scss"
import {useParams} from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../Shop/Categories.context";
import ProductCard from "../../ProductCard/ProductCard.component";

const Category = () => { 
    const {category} = useParams();
    const {categoryMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoryMap[category]);

    useEffect(() => {
        setProducts(categoryMap[category]);
    }, [category, categoryMap])

    return(
        <div className="category-container">
            {
              products &&  products.map((product) => <ProductCard key={product.id} product={product} />)
            }
        </div>
    )

}

export default Category