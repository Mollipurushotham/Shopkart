import style from './ProductCard.module.css'
import { Link } from 'react-router-dom';
import { useCart } from '../../../cart/hooks/useCart';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const {
    id,
    title,
    description,
    brand,
    price,
    discountPercentage,
    stock,
    thumbnail,
    reviews = [],
  } = product;

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) /
      reviews.length
      : 0;

  const roundedRating = averageRating.toFixed(1);
  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating - fullStars >= 0.5;

  return (
    <div className={style.productCard}>
      <div className={style.productImageWrapper}>
        <img
          src={thumbnail}
          alt={title}
          className={style.productImage}
        />
      </div>

      <div className={style.productCardBody}>
        <span className={style.productBrand}>
          {brand || "Featured"}
        </span>

        <Link
          to={`/products/${id}`}
          className={style.noDecoration}
        >

          <h5 className={style.productTitle}>
            {title}
          </h5>
        </Link>

        <p className={style.productDescription}>
          {description}
        </p>

        <div className={style.productRating}>
          <div className={style.stars}>
            {[...Array(5)].map((_, index) => {
              if (index < fullStars) {
                return (
                  <span key={index} className={`${style.star} ${style.filled}`}>
                    ★
                  </span>
                );
              }

              if (index === fullStars && hasHalfStar) {
                return (
                  <span key={index} className={`${style.star} ${style.half}`}>
                    ★
                  </span>
                );
              }

              return (
                <span key={index} className={style.star}>
                  ★
                </span>
              );
            })}
          </div>

          <span className={style.ratingNumber}>
            {roundedRating}
          </span>

          <span className={style.reviewCount}>
            ({reviews.length})
          </span>
        </div>

        <div className={style.productPrice}>
          <span className={style.price}>${price}</span>

          <span className={style.discount}>
            -{discountPercentage}%
          </span>
        </div>

        <div
          className={`${style.productStock} ${stock > 0 ? style.available : style.unavailable
            }`}
        >
          <span className={style.stockDot}></span>

          {stock > 0
            ? `${stock} units available`
            : "Out of stock"}
        </div>

        <button
          className={style.productButton}
          disabled={stock <= 0}
          onClick={() => addToCart(product)}
        >
          <span>
            {stock > 0 ? "Add to Cart" : "Unavailable"}
          </span>

          {stock > 0 && (
            <span className={style.buttonArrow}>→</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;