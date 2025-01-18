import { Link } from 'react-router-dom'; // Import Link

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  type: 'digital' | 'physical';
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product-card">
        <img src={product.imageUrl} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;