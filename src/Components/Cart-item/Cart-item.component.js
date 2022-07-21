import "./Cart-item.styles.scss"



const CartItem = ({cartItem}) => {
    const {name, quantity} = cartItem;
    return(
        <section>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </section>
    )
}

export default CartItem