import PriButton from "./PriButton";
import "../css/ProductCard.css";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
    const {  addToCart } = useCart();
  
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={product.images[0]} alt={product.title} />
      </div>

      <div className="product-info">
        <h3 className="title">{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="rating">⭐ {product.rating?.rate}</p>

        <div className="btn-group">
          <PriButton
            className="btn cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </PriButton>

          <PriButton className="btn buy-btn">
            Buy Now
          </PriButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
