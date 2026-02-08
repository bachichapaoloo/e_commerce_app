import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../assets/dummywdata';
import { productDetailsStyles } from '../assets/dummyStyles';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../CartContext';

const ProductDetailsContent = () => {
    const { id } = useParams();
    const product = PRODUCTS.find(p => p.id === parseInt(id));
    const { addItem } = useCart();

    // Initialize state directly with product data - feasible because we key the component by ID
    const [mainImage, setMainImage] = useState(product?.image || "");
    const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");
    const [activeTab, setActiveTab] = useState("description");

    if (!product) return <div className="text-center py-20">Product not found.</div>;

    const handleAddToCart = () => {
        if (product) {
            addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                size: selectedSize,
                color: selectedColor
            });
            alert("Added to cart!"); // Simple feedback for now
        }
    };

    return (
        <div className={productDetailsStyles.container}>
            <div className={productDetailsStyles.wrapper}>

                {/* Gallery Section */}
                <div className={productDetailsStyles.gallerySection}>
                    <div className={productDetailsStyles.mainImageContainer}>
                        <img src={mainImage} alt={product.name} className={productDetailsStyles.mainImage} />
                    </div>
                    {/* Thumbnail placeholder */}
                    <div className={productDetailsStyles.thumbnails}>
                        {[product.image, product.image, product.image, product.image].map((img, idx) => (
                            <div
                                key={idx}
                                className={`${productDetailsStyles.thumbnail} ${mainImage === img && idx === 0 ? productDetailsStyles.thumbnailActive : productDetailsStyles.thumbnailInactive}`}
                                onClick={() => setMainImage(img)}
                            >
                                <img src={img} alt="Thumbnail" className={productDetailsStyles.thumbnailImage} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info Section */}
                <div className={productDetailsStyles.infoSection}>
                    <div className={productDetailsStyles.breadcrumbs}>
                        <Link to="/">Home</Link> /
                        <Link to="/products">Shop</Link> /
                        <span className="text-black">{product.name}</span>
                    </div>

                    <h1 className={productDetailsStyles.title}>{product.name}</h1>

                    <div className={productDetailsStyles.ratingContainer}>
                        <div className={productDetailsStyles.stars}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill={i < Math.floor(product.rating || 0) ? "currentColor" : "none"} className={i < Math.floor(product.rating || 0) ? "text-yellow-400" : "text-gray-300"} />
                            ))}
                        </div>
                        <span className={productDetailsStyles.reviewCount}>({product.reviews?.length || 0} Reviews)</span>
                    </div>

                    <p className={productDetailsStyles.price}>{product.price}</p>
                    <p className={productDetailsStyles.description}>{product.description}</p>

                    {/* Sizes */}
                    {product.sizes && product.sizes.length > 0 && (
                        <div className={productDetailsStyles.selectorGroup}>
                            <h3 className={productDetailsStyles.selectorTitle}>Select Size</h3>
                            <div className={productDetailsStyles.sizeOptions}>
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        className={`${productDetailsStyles.sizeButton} ${selectedSize === size ? productDetailsStyles.sizeActive : productDetailsStyles.sizeInactive}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Colors */}
                    {product.colors && product.colors.length > 0 && (
                        <div className={productDetailsStyles.selectorGroup}>
                            <h3 className={productDetailsStyles.selectorTitle}>Select Color</h3>
                            <div className={productDetailsStyles.colorOptions}>
                                {product.colors.map(color => (
                                    <div
                                        key={color}
                                        className={`${productDetailsStyles.colorButton} ${selectedColor === color ? productDetailsStyles.colorSelected : ''}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setSelectedColor(color)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className={productDetailsStyles.actions}>
                        <button className={productDetailsStyles.addToCartBtn} onClick={handleAddToCart}>
                            <ShoppingCart size={20} />
                            Add to Cart
                        </button>
                        <button className={productDetailsStyles.wishlistBtn}>
                            <Heart size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className={productDetailsStyles.tabSection}>
                <div className={productDetailsStyles.tabHeader}>
                    <button
                        className={`${productDetailsStyles.tabButton} ${activeTab === 'description' ? productDetailsStyles.tabActive : ''}`}
                        onClick={() => setActiveTab('description')}
                    >
                        Description
                    </button>
                    <button
                        className={`${productDetailsStyles.tabButton} ${activeTab === 'reviews' ? productDetailsStyles.tabActive : ''}`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews ({product.reviews?.length || 0})
                    </button>
                </div>

                {activeTab === 'description' && (
                    <div className={productDetailsStyles.description}>
                        <p>{product.description}</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <div className={productDetailsStyles.reviewsGrid}>
                        {product.reviews && product.reviews.length > 0 ? (
                            product.reviews.map((review, idx) => (
                                <div key={idx} className={productDetailsStyles.reviewCard}>
                                    <div className={productDetailsStyles.reviewHeader}>
                                        <span className={productDetailsStyles.reviewerName}>{review.user}</span>
                                        <div className="flex text-yellow-400 gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} />
                                            ))}
                                        </div>
                                    </div>
                                    <p className={productDetailsStyles.reviewBody}>{review.comment}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No reviews yet.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

const ProductDetails = () => {
    const { id } = useParams();
    return <ProductDetailsContent key={id} />;
};

export default ProductDetails;
