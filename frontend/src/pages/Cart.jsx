import React from 'react';
import { useCart } from '../CartContext';
import { cartPageStyles } from '../assets/dummyStyles';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, increment, decrement, removeItem, totalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-6 py-24 text-center">
                <h2 className="text-3xl font-bold mb-4 font-sans">Your cart is empty</h2>
                <p className="text-gray-500 mb-8">Looks like you haven't added anything yet.</p>
                <Link to="/products" className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className={cartPageStyles.container}>
            <h1 className={cartPageStyles.title}>Shopping Cart ({cart.length})</h1>

            <div className={cartPageStyles.layout}>
                {/* Cart Items List */}
                <div className={cartPageStyles.itemsSection}>
                    {cart.map((item) => (
                        <div key={item.id} className={cartPageStyles.item}>
                            <img src={item.image} alt={item.name} className={cartPageStyles.itemImage} />

                            <div className={cartPageStyles.itemInfo}>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className={cartPageStyles.itemName}>{item.name}</h3>
                                    <p className={cartPageStyles.itemPrice}>₱ {(parseFloat(String(item.price).replace(/[^0-9.-]/g, "")) * item.qty).toLocaleString()}</p>
                                </div>
                                <p className={cartPageStyles.itemMeta}>
                                    {item.size && <span className="mr-3">Size: {item.size}</span>}
                                    {item.color && <span>Color: <span className="inline-block w-3 h-3 rounded-full border border-gray-300 align-middle" style={{ backgroundColor: item.color }}></span></span>}
                                </p>

                                <div className="flex items-center justify-between mt-4">
                                    <div className={cartPageStyles.quantityControls}>
                                        <button onClick={() => decrement(item.id)} className={cartPageStyles.quantityBtn}>
                                            <Minus size={14} />
                                        </button>
                                        <span className={cartPageStyles.quantityDisplay}>{item.qty}</span>
                                        <button onClick={() => increment(item.id)} className={cartPageStyles.quantityBtn}>
                                            <Plus size={14} />
                                        </button>
                                    </div>

                                    <button onClick={() => removeItem(item.id)} className={cartPageStyles.removeBtn}>
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className={cartPageStyles.summarySection}>
                    <h2 className={cartPageStyles.summaryTitle}>Order Summary</h2>

                    <div className={cartPageStyles.summaryRow}>
                        <span>Subtotal</span>
                        <span>₱ {totalPrice.toLocaleString()}</span>
                    </div>
                    <div className={cartPageStyles.summaryRow}>
                        <span>Shipping</span>
                        <span>Calculated at checkout</span>
                    </div>

                    <div className={cartPageStyles.totalRow}>
                        <span>Total</span>
                        <span>₱ {totalPrice.toLocaleString()}</span>
                    </div>

                    <Link to="/checkout" className={cartPageStyles.checkoutBtn}>
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
