import { useParams } from 'react-router-dom'; // Import useParams

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  type: 'digital' | 'physical';
}

// Placeholder product data
const products: Product[] = [
  { id: 1, name: "Awesome T-Shirt", price: 20, imageUrl: "tshirt.jpg", description: "This is a really awesome t-shirt!", type: 'physical' },
  { id: 2, name: "Ebook: Web Dev Guide", price: 15, imageUrl: "ebook.jpg", description: "Learn web development with this comprehensive guide.", type: 'digital' },
];

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Type: {product.type}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;