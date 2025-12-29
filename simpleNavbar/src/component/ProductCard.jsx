const ProductCard = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      {/* <img src={product.image} alt={product.title} width="100" /> */}
    </div>
  );
};

export default ProductCard;
