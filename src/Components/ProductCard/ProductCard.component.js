import "./product-card.styles.scss"
import Button from "../Button/Button.component"
import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)

    return(
        <section className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <footer className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </footer>
            <Button buttonType={"inverted"} onClick={() => addItemToCart(product)}>
                Add to cart</Button>
        </section>
    )
}
export default ProductCard;