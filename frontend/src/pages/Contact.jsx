import React from 'react';
import { contactPageStyles } from '../assets/dummyStyles';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram } from 'lucide-react';

import Swal from 'sweetalert2'

const Contact = () => {
    // ... contactInfo definition matches existing ...
    const contactInfo = [
        {
            icon: MapPin,
            text: "123 Fashion Avenue, Design District, New York, NY 10012"
        },
        {
            icon: Phone,
            text: "+1 (555) 123-4567"
        },
        {
            icon: Mail,
            text: "hello@ecommerce.com"
        },
        {
            icon: Clock,
            text: "Mon - Fri: 9:00 AM - 6:00 PM"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate processing
        const btn = e.target.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            Swal.fire({
                title: 'Message Sent!',
                text: "We'll get back to you within 48 hours.",
                icon: 'success',
                iconColor: '#000000',
                background: '#ffffff',
                color: '#000000',
                confirmButtonColor: '#000000',
                confirmButtonText: 'Great!',
                customClass: {
                    popup: 'rounded-3xl border border-gray-100 shadow-2xl',
                    title: 'font-sans font-bold text-2xl text-gray-900',
                    htmlContainer: 'font-sans text-gray-500 text-base',
                    confirmButton: 'rounded-full px-10 py-4 font-bold uppercase tracking-wide text-sm transition-transform hover:scale-105'
                }
            });
            e.target.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 1500);
    };

    return (
        <div className={contactPageStyles.container}>
            <div className={contactPageStyles.cardContainer}>

                {/* Left Panel: Info */}
                <div className={contactPageStyles.infoPanel}>
                    <div className={contactPageStyles.infoHeader}>
                        <h1 className={contactPageStyles.title}>Get in touch</h1>
                        <p className={contactPageStyles.subtitle}>
                            Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.
                        </p>
                    </div>

                    <div className={contactPageStyles.infoList}>
                        {contactInfo.map((item, index) => (
                            <div key={index} className={contactPageStyles.infoItem}>
                                <div className={contactPageStyles.iconBox}>
                                    <item.icon size={20} />
                                </div>
                                <span className={contactPageStyles.infoText}>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className={contactPageStyles.socials}>
                        {[Facebook, Twitter, Instagram].map((Icon, i) => (
                            <a href="#" key={i} className={contactPageStyles.socialIcon}>
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Panel: Form */}
                <div className={contactPageStyles.formPanel}>
                    <form className={contactPageStyles.form} onSubmit={handleSubmit}>
                        <div className={contactPageStyles.inputGroup}>
                            <label className={contactPageStyles.label}>Your Name</label>
                            <input type="text" className={contactPageStyles.input} placeholder="John Doe" required />
                        </div>
                        <div className={contactPageStyles.inputGroup}>
                            <label className={contactPageStyles.label}>Your Email</label>
                            <input type="email" className={contactPageStyles.input} placeholder="john@example.com" required />
                        </div>
                        <div className={contactPageStyles.inputGroup}>
                            <label className={contactPageStyles.label}>Subject</label>
                            <input type="text" className={contactPageStyles.input} placeholder="Project Inquiry" required />
                        </div>
                        <div className={contactPageStyles.inputGroup}>
                            <label className={contactPageStyles.label}>Message</label>
                            <textarea className={contactPageStyles.textarea} placeholder="Tell me about your project..." required></textarea>
                        </div>
                        <button type="submit" className={contactPageStyles.submitBtn}>
                            Send Message <Send size={16} />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
