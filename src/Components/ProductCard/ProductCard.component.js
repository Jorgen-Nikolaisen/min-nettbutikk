import "./product-card.styles.scss"
import Button from "../Button/Button.component"
const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;

    return(
        <section className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <footer className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </footer>
            <Button buttonType={"inverted"}>Add to cart</Button>
        </section>
    )
}
export default ProductCard;