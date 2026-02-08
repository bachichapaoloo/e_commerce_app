import React from 'react';
import { serviceSectionStyles } from '../assets/dummyStyles';
import { Truck, ShieldCheck, Headphones, RefreshCcw } from 'lucide-react';
import { SERVICE_HIGHLIGHTS } from '../assets/dummywdata';

const iconMap = {
    Truck: Truck,
    ShieldCheck: ShieldCheck,
    Headphones: Headphones,
    RefreshCcw: RefreshCcw
};

const ServiceHighlights = () => {
    return (
        <section className={serviceSectionStyles.section}>
            <div className={serviceSectionStyles.container}>
                <div className={serviceSectionStyles.grid}>
                    {SERVICE_HIGHLIGHTS.map((item) => {
                        const Icon = iconMap[item.iconName];
                        return (
                            <div key={item.id} className={serviceSectionStyles.card}>
                                <div className={serviceSectionStyles.iconContainer}>
                                    <Icon className={serviceSectionStyles.icon} strokeWidth={1.5} />
                                </div>
                                <h3 className={serviceSectionStyles.title}>{item.title}</h3>
                                <p className={serviceSectionStyles.description}>{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceHighlights;
