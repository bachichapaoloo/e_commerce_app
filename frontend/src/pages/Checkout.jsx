import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { checkoutPageStyles } from '../assets/dummyStyles';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    // Simple validation feedback state
    const [error, setError] = useState(null);

    const handlePlaceOrder = (e) => {
        e.preventDefault();

        // Basic validation
        if (!firstName || !lastName || !email || !address || !city || !zip) {
            setError('Please fill in all required fields.');
            return;
        }

        // Simulate order process
        alert('Thank you! Your order has been placed successfully.');
        clearCart();
        navigate('/');
    };

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-6 py-24 text-center">
                <h2 className="text-3xl font-bold mb-4 font-sans">Your cart is empty</h2>
                <button onClick={() => navigate('/products')} className="text-blue-600 hover:underline">
                    Return to Shop
                </button>
            </div>
        );
    }

    return (
        <div className={checkoutPageStyles.container}>
            <h1 className={checkoutPageStyles.title}>Checkout</h1>

            <div className={checkoutPageStyles.layout}>
                {/* Billing Details Form */}
                <div className={checkoutPageStyles.formSection}>
                    <h2 className={checkoutPageStyles.sectionTitle}>Billing Details</h2>

                    {error && <p className="text-red-500 mb-4">{error}</p>}

                    <form onSubmit={handlePlaceOrder}>
                        <div className={checkoutPageStyles.formGrid}>
                            <div className={checkoutPageStyles.inputGroup}>
                                <label className={checkoutPageStyles.label}>First Name *</label>
                                <input
                                    type="text"
                                    className={checkoutPageStyles.input}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className={checkoutPageStyles.inputGroup}>
                                <label className={checkoutPageStyles.label}>Last Name *</label>
                                <input
                                    type="text"
                                    className={checkoutPageStyles.input}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className={checkoutPageStyles.inputGroup + " mb-6"}>
                            <label className={checkoutPageStyles.label}>Email Address *</label>
                            <input
                                type="email"
                                className={checkoutPageStyles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className={checkoutPageStyles.inputGroup + " mb-6"}>
                            <label className={checkoutPageStyles.label}>Street Address *</label>
                            <input
                                type="text"
                                className={checkoutPageStyles.input}
                                placeholder="House number and street name"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        <div className={checkoutPageStyles.formGrid}>
                            <div className={checkoutPageStyles.inputGroup}>
                                <label className={checkoutPageStyles.label}>Town / City *</label>
                                <input
                                    type="text"
                                    className={checkoutPageStyles.input}
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className={checkoutPageStyles.inputGroup}>
                                <label className={checkoutPageStyles.label}>ZIP Code *</label>
                                <input
                                    type="text"
                                    className={checkoutPageStyles.input}
                                    value={zip}
                                    onChange={(e) => setZip(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Mobile: Place Order Button appears below form usually, but design often puts it in summary sticky. 
                            We'll put a hidden submit button here to allow enter key or duplicate logic if needed, 
                            but main button is in summary section for desktop layout. 
                            For mobile, the summary section comes first in DOM order or we use flex order.
                            In our styles: formSection is order-2 lg:order-1. Summary is order-1 lg:order-2.
                            So on mobile summary is top. That's fine.
                        */}
                    </form>
                </div>

                {/* Order Summary */}
                <div className={checkoutPageStyles.summarySection}>
                    <div className={checkoutPageStyles.summaryCard}>
                        <h2 className={checkoutPageStyles.sectionTitle}>Your Order</h2>

                        <div className="max-h-96 overflow-y-auto pr-2">
                            {cart.map((item) => (
                                <div key={item.id} className={checkoutPageStyles.summaryItem}>
                                    <img src={item.image} alt={item.name} className={checkoutPageStyles.summaryImage} />
                                    <div className={checkoutPageStyles.summaryInfo}>
                                        <h4 className={checkoutPageStyles.summaryName}>{item.name}</h4>
                                        <p className={checkoutPageStyles.summaryMeta}>Qty: {item.qty}</p>
                                        <p className={checkoutPageStyles.summaryPrice}>₱ {(parseFloat(String(item.price).replace(/[^0-9.-]/g, "")) * item.qty).toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={checkoutPageStyles.totals}>
                            <div className={checkoutPageStyles.totalRow}>
                                <span>Subtotal</span>
                                <span>₱ {totalPrice.toLocaleString()}</span>
                            </div>
                            <div className={checkoutPageStyles.totalRow}>
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>

                            <div className={checkoutPageStyles.finalTotal}>
                                <span>Total</span>
                                <span>₱ {totalPrice.toLocaleString()}</span>
                            </div>

                            <button
                                onClick={handlePlaceOrder}
                                className={checkoutPageStyles.placeOrderBtn}
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
