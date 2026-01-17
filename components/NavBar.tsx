"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function NavBar() {
    const [isUponHero, setIsUponHero] = useState(true);
    const [isTop, setIsTop] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const navItems = [
        { name: "Pourquoi nous", href: "#whyus" },
        { name: "Comment ça fonctionne", href: "#howitworks" },
    ];

    useEffect(() => {
        const handleScroll = () => {
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
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Close mobile menu when clicking a link
    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    const logoVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" as const } },
        exit: { opacity: 0, transition: { duration: 0.15, ease: "easeIn" as const } }
    };

    const contactVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" as const } },
        exit: { opacity: 0, transition: { duration: 0.15, ease: "easeIn" as const } }
    };

    const mobileMenuVariants = {
        closed: { x: "100%", opacity: 0 },
        open: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 300, damping: 30 } },
        exit: { x: "100%", opacity: 0, transition: { duration: 0.2 } }
    };

    return (
        <>
            {/* Top Bar - Logo & Contact */}
            <div className="absolute flex items-center justify-between w-full top-5 z-30 px-5 md:px-12 lg:px-24 xl:px-32 pointer-events-none">
                <div className="flex items-end justify-center cursor-pointer px-3 rounded-xl border-b-2 pointer-events-auto">
                    <div className="w-10 h-10 rounded-full">
                        <Image src="/logo/logo_transp.png" alt="Filantrope" width={100} height={100} className="object-cover w-full h-full" />
                    </div>
                    <div className="h-6 rounded-full hidden sm:block">
                        <Image src="/logo/logo-filantrope-01 2.png" alt="Filantrope" width={100} height={100} className="object-cover w-full h-full" />
                    </div>
                </div>

                {/* Desktop Contact Button */}
                <div className="hidden md:flex relative items-center justify-center cursor-pointer py-1 px-5 rounded-xl border-b-2 bg-primary hover:scale-102 active:scale-98 active:bg-primary/95 transition-all duration-200 pointer-events-auto">
                    <span className="text-lg tracking-wide font-semibold text-white">Contact</span>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 rounded-xl bg-white/90 backdrop-blur-sm border border-border shadow-lg pointer-events-auto"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-tertiary" />
                    ) : (
                        <Menu className="w-6 h-6 text-tertiary" />
                    )}
                </button>
            </div>

            {/* Desktop Navigation */}
            <nav ref={navRef} className="fixed w-full hidden md:flex items-center justify-center top-5 z-25">
                <motion.div
                    layout
                    className={`min-h-12 ${!isUponHero ? "backdrop-blur-sm" : "bg-white/90"} rounded-2xl shadow-2xl border-r-2 border-b-3 flex items-center justify-evenly px-5 gap-2 md:gap-4 lg:gap-6 xl:gap-8`}
                    transition={{ layout: { type: "spring", stiffness: 300, damping: 30 } }}
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
                            className="text-sm font-semibold text-tertiary hover:scale-102 active:scale-98 active:text-tertiary/95 transition-all duration-200 cursor-pointer whitespace-nowrap"
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

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="exit"
                            className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 md:hidden flex flex-col"
                        >
                            {/* Close Button */}
                            <div className="flex items-center justify-between p-5 border-b border-border">
                                <span className="font-bold text-lg text-tertiary">Menu</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-xl hover:bg-muted transition-colors"
                                    aria-label="Fermer le menu"
                                >
                                    <X className="w-6 h-6 text-tertiary" />
                                </button>
                            </div>

                            {/* Nav Links */}
                            <div className="flex flex-col p-5 gap-4">
                                {navItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        onClick={handleNavClick}
                                        className="text-lg font-semibold text-tertiary hover:text-primary py-3 px-4 rounded-xl hover:bg-muted/50 transition-all duration-200"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            {/* Contact Button */}
                            <div className="mt-auto p-5 border-t border-border">
                                <a
                                    href="#contact"
                                    onClick={handleNavClick}
                                    className="block w-full text-center py-3 px-5 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                                >
                                    Contact
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}