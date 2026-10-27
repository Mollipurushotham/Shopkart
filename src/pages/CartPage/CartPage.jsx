import { useCart } from "../../features/cart/hooks/useCart";
import { Link } from "react-router-dom";
import styles from "./CartPage.module.css";

const CartPage = () => {
    const {
        cartItems,
        cartCount,
        cartTotal,
        clearCart,
        removeFromCart,
        updateQuantity,
    } = useCart();

    const formatPrice = (price) =>
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(price);

    return (
        <main className={`container py-5 ${styles.cartPage}`}>
            <h1 className={styles.title}>Your cart</h1>

            {cartItems.length === 0 ? (
                <section className={styles.emptyCart}>
                    <p>Your cart is empty.</p>
                    <Link to="/products" className="btn btn-primary">
                        Browse products
                    </Link>
                </section>
            ) : (
                <div className={styles.cartLayout}>
                    <section className={styles.items} aria-label="Cart items">
                        <div className={styles.itemsHeader}>
                            <h2>Items ({cartCount})</h2>
                            <button
                                type="button"
                                className={styles.clearButton}
                                onClick={clearCart}
                            >
                                Clear cart
                            </button>
                        </div>

                        {cartItems.map((item) => (
                            <article className={styles.cartItem} key={item.id}>
                                {(item.thumbnail || item.thumbnall) && (
                                    <img
                                        className={styles.productImage}
                                        src={item.thumbnail || item.thumbnall}
                                        alt={item.title}
                                    />
                                )}

                                <div className={styles.productInfo}>
                                    <h3>{item.title}</h3>
                                    <p>{formatPrice(item.price)} each</p>
                                </div>

                                <div className={styles.quantityControl}>
                                    <button
                                        type="button"
                                        aria-label={`Decrease quantity of ${item.title}`}
                                        onClick={() =>
                                            updateQuantity(item.id, item.quantity - 1)
                                        }
                                    >
                                        −
                                    </button>
                                    <span aria-live="polite">{item.quantity}</span>
                                    <button
                                        type="button"
                                        aria-label={`Increase quantity of ${item.title}`}
                                        onClick={() =>
                                            updateQuantity(item.id, item.quantity + 1)
                                        }
                                    >
                                        +
                                    </button>
                                </div>

                                <strong className={styles.lineTotal}>
                                    {formatPrice(item.price * item.quantity)}
                                </strong>

                                <button
                                    type="button"
                                    className={styles.removeButton}
                                    aria-label={`Remove ${item.title} from cart`}
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </article>
                        ))}
                    </section>

                    <aside className={styles.summary} aria-label="Order summary">
                        <h2>Order summary</h2>
                        <div className={styles.subtotal}>
                            <span>Subtotal ({cartCount} items)</span>
                            <strong>{formatPrice(cartTotal)}</strong>
                        </div>
                        <p className={styles.shippingNote}>
                            Shipping and taxes are calculated at checkout.
                        </p>
                        <button type="button" className={styles.checkoutButton} disabled>
                            Checkout
                        </button>
                        <Link to="/products" className={styles.continueShopping}>
                            Continue shopping
                        </Link>
                    </aside>
                </div>
            )}
        </main>
    );
};

export default CartPage;