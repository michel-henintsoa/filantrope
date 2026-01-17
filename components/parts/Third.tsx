"use client";
import React from 'react';
import { motion, Variants } from "framer-motion";
import { Store, QrCode, Layers, MapPin, Ticket, Bell, Calendar, Star, Phone } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const }
    }
};

const establishmentFeatures = [
    {
        icon: QrCode,
        title: "Délivrance flexible",
        desc: "Tickets sur POS mobile ou tickets virtuels via scan de QR Code."
    },
    {
        icon: Layers,
        title: "Gestion multi-files",
        desc: "Adaptez le système selon vos services (jusqu'à l'illimité selon le forfait)."
    }
];

const userFeatures = [
    {
        icon: MapPin,
        title: "Localisation GPS",
        desc: "Trouvez votre établissement facilement."
    },
    {
        icon: Ticket,
        title: "Ticket à distance",
        desc: "Prise de tickets virtuels via l'application."
    },
    {
        icon: Bell,
        title: "Zéro attente debout",
        desc: "Notifications d'appel directement sur le téléphone."
    },
    {
        icon: Calendar,
        title: "Prise de rendez-vous",
        desc: "Planification intégrée depuis l'application."
    },
    {
        icon: Star,
        title: "Votre avis compte",
        desc: "Enquête de satisfaction mobile incluse."
    }
];

export default function Third() {
    return (
        <section id="features" className="relative min-h-screen w-full py-20 px-6 md:px-12 lg:px-16 bg-muted/30 overflow-hidden">
            <div className="absolute top-10 -left-50 -translate-y-1/2 h-75 w-75 md:h-200 md:w-200 bg-linear-to-r from-primary/5 to-tertiary/5 mx-auto rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Une solution <span className="text-primary">complète</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Connectez votre établissement à vos usagers grâce à une technologie fluide et intuitive.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Establishment (4 cols) */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:col-span-5 flex flex-col gap-6"
                    >
                        <motion.div variants={itemVariants} className="bg-white2 p-6 border border-b-[3px] border-r-2 border-primary/10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-primary/10 rounded-xl">
                                    <Store className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold">Pour votre établissement</h3>
                            </div>
                            <p className="text-muted-foreground mb-8">
                                Gestion simplifiée pour optimiser vos flux et réduire la charge de travail de vos équipes.
                            </p>

                            <div className="space-y-6">
                                {establishmentFeatures.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="flex gap-4 p-4 bg-card rounded-2xl border border-b-[3px] border-r-2 border-border shadow-sm hover:shadow-md hover:translate-x-1 transition-all duration-200"
                                    >
                                        <div className="mt-1">
                                            <feature.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                                            <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: User (7 cols) */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <motion.div variants={itemVariants} className="mb-8 flex items-center gap-3">
                            <div className="p-3 bg-secondary/10 rounded-xl">
                                <Phone className="w-8 h-8 text-secondary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Pour vos usagers</h3>
                                <p className="text-muted-foreground">Liberté et confort directement depuis leur téléphone</p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {userFeatures.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className={`p-4 sm:p-6 bg-card rounded-2xl border border-b-[3px] border-r-2 border-border hover:border-secondary/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group cursor-pointer ${idx === 2 ? 'sm:col-span-2 bg-linear-to-r from-card to-secondary/5' : ''}`}
                                >
                                    <div className="mb-2 p-1 w-fit rounded-xl group-hover:bg-secondary/10 transition-colors duration-400">
                                        <feature.icon className="w-6 h-6 text-secondary" />
                                    </div>
                                    <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
