import { CategoriesContext } from "../Shop/Categories.context";
import { useContext } from "react"

import CategoryPreview from "../../Category-preview/Category-preview.component"

const CategoriesPreview = () => {

    const {categoryMap} = useContext(CategoriesContext)

    return(
        <div className="category-preview-container">
        
            {Object.keys(categoryMap).map((title) => {
                    const products = categoryMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />

                })}
        </div>
        
    ) 
}

export default CategoriesPreview