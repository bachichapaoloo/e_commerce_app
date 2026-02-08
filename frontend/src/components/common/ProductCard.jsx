import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { productCardStyles } from '../../assets/dummyStyles';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
    const { addItem } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevent navigation to product details
        // Add item with default size/color if needed, or just partial info.
        // For simple catalog, we add what we have. 
        // Note: ProductDetails uses selectedSize/Color. Here we might lack that.
        // We will add it and let Cart handle defaults or missing options.
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: 1
        });
        // Feedback could be added here
    };

    return (
        <Link to={`/product/${product.id}`} className={productCardStyles.card}>
            <div className={productCardStyles.imageContainer}>
                <img src={product.image} alt={product.name} className={productCardStyles.image} />
                <div className={productCardStyles.overlay}></div>
                <button
                    onClick={handleAddToCart}
                    className={productCardStyles.addButton}
                    title="Add to Cart"
                >
                    <Plus size={20} />
                </button>
                {product.discount && (
                    <div className={productCardStyles.discountPercentage}>
                        {product.discount}
                    </div>
                )}
            </div>

            <div className={productCardStyles.info}>
                <p className={productCardStyles.category}>{product.category}</p>
                <h3 className={productCardStyles.name}>{product.name}</h3>
                <p className={productCardStyles.price}>{product.price}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
