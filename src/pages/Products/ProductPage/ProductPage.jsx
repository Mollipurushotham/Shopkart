
import { useProducts } from "../../../features/products/hooks/useProducts";
import ProductCard from "../../../features/products/components/ProductCard/ProductCard";
import styles from "./ProductPages.module.css";

const ProductsPage = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className={`container ${styles.page}`}>
        <div className={styles.loading}>
          <span>Loading products...</span>
          <div
            className={`spinner-border ${styles.spinner}`}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`container ${styles.page}`}>
        <div className={styles.error}>
          Error loading products: {String(error)}
        </div>
      </div>
    );
  }

  return (
    <div className={`container-fluid ${styles.page}`}>
      <div className="container">
        <h2 className={styles.heading}>⚔ PUBG Arsenal | Products</h2>

        <div className={`row g-4 ${styles.productGrid}`}>
          {products.map((product) => (
            <div
              key={product.id}
              className={`col-12 col-sm-6 col-md-4 col-lg-3 ${styles.productColumn}`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
