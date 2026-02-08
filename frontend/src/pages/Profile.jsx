import React, { useState } from 'react';
import { profilePageStyles } from '../assets/dummyStyles';
import { USER_ORDERS, USER_ADDRESSES } from '../assets/dummywdata';
import { useCart } from '../CartContext';
import {
    User, Package, MapPin, ShoppingBag, LogOut,
    CreditCard, ChevronRight, CheckCircle, Truck, Clock
} from 'lucide-react';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const { cart, totalItems, totalPrice } = useCart();

    // Mock User Data (could be from context/auth later)
    const user = {
        name: "Alex Doe",
        email: "alex.doe@example.com",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200"
    };

    const renderDashboard = () => (
        <div>
            <h2 className={profilePageStyles.sectionTitle}>Dashboard</h2>
            <div className={profilePageStyles.statsGrid}>
                <div className={profilePageStyles.statCard}>
                    <div>
                        <p className={profilePageStyles.statValue}>{USER_ORDERS.length}</p>
                        <p className={profilePageStyles.statLabel}>Total Orders</p>
                    </div>
                    <div className={profilePageStyles.statIcon}><Package size={20} /></div>
                </div>
                <div className={profilePageStyles.statCard}>
                    <div>
                        <p className={profilePageStyles.statValue}>{totalItems}</p>
                        <p className={profilePageStyles.statLabel}>Cart Items</p>
                    </div>
                    <div className={profilePageStyles.statIcon}><ShoppingBag size={20} /></div>
                </div>
                <div className={profilePageStyles.statCard}>
                    <div>
                        <p className={profilePageStyles.statValue}>{USER_ADDRESSES.length}</p>
                        <p className={profilePageStyles.statLabel}>Saved Addresses</p>
                    </div>
                    <div className={profilePageStyles.statIcon}><MapPin size={20} /></div>
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-900">Recent Cart Items</h3>
                    <span className="text-sm font-bold">Total: ₱ {totalPrice.toLocaleString()}</span>
                </div>
                {cart.length > 0 ? (
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {cart.map(item => (
                            <div key={item.id} className="min-w-[80px] w-20">
                                <img src={item.image} alt={item.name} className="w-full h-20 object-cover rounded-lg bg-white border border-gray-200" />
                                <p className="text-xs text-gray-500 mt-1 truncate">{item.name}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-sm">Your cart is empty.</p>
                )}
            </div>
        </div>
    );

    const renderOrders = () => (
        <div>
            <h2 className={profilePageStyles.sectionTitle}>My Orders</h2>
            {USER_ORDERS.map((order) => (
                <div key={order.id} className={profilePageStyles.orderCard}>
                    <div className={profilePageStyles.orderHeader}>
                        <div>
                            <p className={profilePageStyles.orderId}>{order.id}</p>
                            <p className={profilePageStyles.orderDate}>{order.date}</p>
                        </div>
                        <div className="text-right">
                            <span className={`${profilePageStyles.orderStatus} ${order.status === 'Delivered' ? profilePageStyles.statusDelivered :
                                    order.status === 'Processing' ? profilePageStyles.statusProcessing :
                                        profilePageStyles.statusShipped
                                }`}>
                                {order.status}
                            </span>
                            <p className="font-bold mt-2 text-sm">{order.total}</p>
                        </div>
                    </div>

                    <div className={profilePageStyles.orderItems}>
                        {order.items.map((item, idx) => (
                            <div key={idx} className={profilePageStyles.itemRow}>
                                <img src={item.image} alt={item.name} className={profilePageStyles.itemImage} />
                                <div className={profilePageStyles.itemInfo}>
                                    <p className={profilePageStyles.itemName}>{item.name}</p>
                                    <p className={profilePageStyles.itemQty}>Qty: {item.qty}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Progress */}
                    <div className={profilePageStyles.progressContainer}>
                        <div className={profilePageStyles.progressTrack}>
                            <div
                                className={profilePageStyles.progressBar}
                                style={{ width: `${(order.progress / 4) * 100}%` }}
                            ></div>
                        </div>
                        <div className={profilePageStyles.progressLabels}>
                            <span>Placed</span>
                            <span className={order.progress >= 1 ? "text-black" : ""}>Processing</span>
                            <span className={order.progress >= 2 ? "text-black" : ""}>Shipped</span>
                            <span className={order.progress >= 4 ? "text-black" : ""}>Delivered</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderAddresses = () => (
        <div>
            <h2 className={profilePageStyles.sectionTitle}>Saved Addresses</h2>
            <div className={profilePageStyles.addressGrid}>
                {USER_ADDRESSES.map((addr) => (
                    <div key={addr.id} className={profilePageStyles.addressCard}>
                        {addr.isDefault && <span className={profilePageStyles.defaultBadge}>Default</span>}
                        <p className={profilePageStyles.addressType}>{addr.type}</p>
                        <p className={profilePageStyles.addressName}>{addr.name}</p>
                        <p className={profilePageStyles.addressDetails}>{addr.details}<br />{addr.city}, {addr.zip}</p>
                        <button className={profilePageStyles.editBtn}>Edit Address</button>
                    </div>
                ))}

                {/* Add New Address Placeholder */}
                <button className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-gray-400 hover:border-black hover:text-black transition-all group min-h-[200px]">
                    <PlusIcon className="mb-2 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-sm uppercase tracking-wide">Add New Address</span>
                </button>
            </div>
        </div>
    );

    // Helper for icons
    const PlusIcon = ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    )

    return (
        <div className={profilePageStyles.container}>
            <h1 className={profilePageStyles.title}>My Account</h1>

            <div className={profilePageStyles.layout}>
                {/* Sidebar Navigation */}
                <div className={profilePageStyles.sidebar}>
                    <div className={profilePageStyles.userProfile}>
                        <img src={user.avatar} alt="User" className={profilePageStyles.userImage} />
                        <h3 className={profilePageStyles.userName}>{user.name}</h3>
                        <p className={profilePageStyles.userEmail}>{user.email}</p>
                    </div>

                    <nav className={profilePageStyles.nav}>
                        <button
                            onClick={() => setActiveTab('dashboard')}
                            className={`${profilePageStyles.navItem} ${activeTab === 'dashboard' ? profilePageStyles.navItemActive : profilePageStyles.navItemInactive} w-full`}
                        >
                            <User size={18} /> Dashboard
                        </button>
                        <button
                            onClick={() => setActiveTab('orders')}
                            className={`${profilePageStyles.navItem} ${activeTab === 'orders' ? profilePageStyles.navItemActive : profilePageStyles.navItemInactive} w-full`}
                        >
                            <Package size={18} /> Orders
                        </button>
                        <button
                            onClick={() => setActiveTab('addresses')}
                            className={`${profilePageStyles.navItem} ${activeTab === 'addresses' ? profilePageStyles.navItemActive : profilePageStyles.navItemInactive} w-full`}
                        >
                            <MapPin size={18} /> Addresses
                        </button>
                        <button
                            className={`${profilePageStyles.navItem} ${profilePageStyles.navItemInactive} w-full text-red-500 hover:bg-red-50 hover:text-red-600 mt-4`}
                        >
                            <LogOut size={18} /> Logout
                        </button>
                    </nav>
                </div>

                {/* Main Content */}
                <div className={profilePageStyles.content}>
                    {activeTab === 'dashboard' && renderDashboard()}
                    {activeTab === 'orders' && renderOrders()}
                    {activeTab === 'addresses' && renderAddresses()}
                </div>
            </div>
        </div>
    );
};

export default Profile;
