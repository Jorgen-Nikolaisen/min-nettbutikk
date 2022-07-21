import "./Cart-item.styles.scss"



const CartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price,} = cartItem;
    return(
        <section className="cart-item-container">
            <img src={imageUrl} alt={`${name}`} />
            
            <article className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} x ${price}
                    </span>
            </article>
            
        </section>
    )
}

export default CartItem