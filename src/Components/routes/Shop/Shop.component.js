import SHOP_DATA from "../../../Shop-data.json"
import { CategoriesContext } from "./Categories.context"
import { useContext } from "react"
import ProductCard from "../../ProductCard/ProductCard.component"
import "./Shop.styles.scss"
import CategoryPreview from "../../Category-preview/Category-preview.component"

const Shop = () => {

    const {categoryMap} = useContext(CategoriesContext)

    return(
        <div className="shop-container">
        
            {Object.keys(categoryMap).map((title) => {
                    const products = categoryMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />

                })}
        </div>
        
    ) 
}

export default Shop