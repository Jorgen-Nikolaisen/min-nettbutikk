import "./cart-dropdown.styles.scss"
import Button from "../Button/Button.component"

const CartDropdown = () => {
    return(
        <section className="cart-dropdown-container">
            <nav className="cart-items"></nav>
            <Button>Go to checkout</Button>
        </section>
    )
}

export default CartDropdown;