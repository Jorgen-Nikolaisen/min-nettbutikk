import SHOP_DATA from "../../../Shop-data.json"
import { ProductsContext } from "./Products.context"
import { useContext } from "react"
import ProductCard from "../../ProductCard/ProductCard.component"
import "./Shop.styles.scss"

const Shop = () => {

    const {products} = useContext(ProductsContext)

    return(
        <main className="products-container">
            {products.map(product => (
                <ProductCard key={product.id} product={product}/>
                
            ))}
        </main>
    ) 
}

export default Shop