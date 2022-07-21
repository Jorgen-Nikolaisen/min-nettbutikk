import "./cart-dropdown.styles.scss"
import Button from "../Button/Button.component"
import CartItem from "../Cart-item/Cart-item.component"
import { useContext } from "react"
import { CartContext } from "../../Contexts/cart.context"

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);

    return(
        <section className="cart-dropdown-container">
            <nav className="cart-items">
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </nav>
            <Button>Go to checkout</Button>
        </section>
    )
}

export default CartDropdown;