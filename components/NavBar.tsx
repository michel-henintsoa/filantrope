"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
    const [isUponHero, setIsUponHero] = useState(true); // true = nav is above hero section
    const [isTop, setIsTop] = useState(true);
    const navRef = useRef<HTMLDivElement>(null);

    const navItems = [
        {
            name: "Pourquoi nous",
            href: "#whyus",
        },
        {
            name: "Comment ça fonctionne",
            href: "#howitworks",
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            // Le hero fait 100vh, on vérifie si on a scrollé au-delà
            const heroHeight = window.innerHeight;
            const navHeight = navRef.current?.offsetHeight || 60;

            if (window.scrollY > heroHeight - navHeight - 20) {
                setIsUponHero(false);
            } else {
                setIsUponHero(true);
            }

            if (window.scrollY > navHeight - 20) {
                setIsTop(false);
            } else {
                setIsTop(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initial state

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Variants pour l'animation du logo (simple fade)
    const logoVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.25,
                ease: "easeOut" as const
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.15,
                ease: "easeIn" as const
            }
        }
    };

    // Variants pour l'animation du bouton Contact (simple fade)
    const contactVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.25,
                ease: "easeOut" as const
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.15,
                ease: "easeIn" as const
            }
        }
    };

    return (
        <>
            <div className="absolute flex items-center justify-between w-full top-5 z-26 px-5 md:px-12 lg:px-24 xl:px-32">
                <div className="flex items-end justify-center cursor-pointer px-3 rounded-xl border-b-2">
                    <div className="w-10 h-10 rounded-full">
                        <Image src="/logo/logo_transp.png" alt="Filantrope" width={100} height={100} className="object-cover w-full h-full" />
                    </div>
                    <div className="h-6 rounded-full">
                        <Image src="/logo/logo-filantrope-01 2.png" alt="Filantrope" width={100} height={100} className="object-cover w-full h-full" />
                    </div>
                </div>
                <div className="relative flex items-center justify-center cursor-pointer py-1 px-5 rounded-xl border-b-2 bg-primary hover:scale-102 active:scale-98 active:bg-primary/95 transition-all duration-200">
                    <span className=" text-lg tracking-wide font-semibold text-white">Contact</span>
                </div>
            </div>
            <nav ref={navRef} className="fixed w-full flex items-center justify-center top-5 z-25">
                <motion.div
                    layout // Active l'animation automatique lors du changement de taille
                    className={`min-h-12 ${!isUponHero ? "backdrop-blur-sm" : "bg-white/90"} rounded-2xl shadow-2xl border-r-2 border-b-3 flex items-center justify-evenly px-5 gap-2 md:gap-4 lg:gap-6 xl:gap-8`}
                    transition={{
                        layout: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {!isTop && (
                            <motion.div
                                key="logo"
                                className="w-10 h-10 rounded-full shrink-0"
                                variants={logoVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <Image src="/logo/logo_transp.png" alt="Filantrope" width={100} height={100} className="object-cover w-full h-full" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-sm font-semibold text-tertiary hover:scale-102 active:scale-98 active:text-tertiary/95 transition-all duration-200 cursor-pointer"
                        >
                            {item.name}
                        </a>
                    ))}

                    <AnimatePresence mode="popLayout">
                        {!isTop && (
                            <motion.a
                                key="contact"
                                href="#contact"
                                className="text-sm font-semibold text-tertiary hover:scale-102 active:scale-98 active:text-tertiary/95 transition-all duration-200 cursor-pointer shrink-0"
                                variants={contactVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                Contact
                            </motion.a>
                        )}
                    </AnimatePresence>
                </motion.div>
            </nav>
        </>
    )
}