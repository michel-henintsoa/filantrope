"use client";

import { Phone, Mail, Globe, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Contact() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer id="contact" className="relative bg-gradient-to-br from-tertiary via-tertiary to-primary/90 text-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-quinary/10 rounded-full blur-2xl" />

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:px-12 lg:px-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - CTA */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Prêt à moderniser{" "}
                            <span className="bg-gradient-to-r from-quinary via-senary to-secondary bg-clip-text text-transparent">
                                votre accueil ?
                            </span>
                        </h2>
                        <p className="text-lg text-white/80 max-w-md">
                            Contactez-nous pour un audit gratuit et découvrez comment Filantrope peut transformer votre gestion des files d'attente.
                        </p>
                    </div>

                    {/* Right side - Contact info */}
                    <div className="space-y-6">
                        {/* Phone */}
                        <a
                            href="tel:+24176501211"
                            className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 group"
                        >
                            <div className="p-3 rounded-lg bg-quinary/20 group-hover:bg-quinary/30 transition-colors">
                                <Phone className="w-6 h-6 text-quinary" />
                            </div>
                            <div>
                                <p className="text-sm text-white/60">Téléphone</p>
                                <p className="text-lg font-semibold">076 50 12 11</p>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:contact@filantrope.tech"
                            className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 group"
                        >
                            <div className="p-3 rounded-lg bg-senary/20 group-hover:bg-senary/30 transition-colors">
                                <Mail className="w-6 h-6 text-senary" />
                            </div>
                            <div>
                                <p className="text-sm text-white/60">Email</p>
                                <p className="text-lg font-semibold">contact@filantrope.tech</p>
                            </div>
                        </a>

                        {/* Website */}
                        <a
                            href="https://www.filantrope.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 group"
                        >
                            <div className="p-3 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                                <Globe className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <p className="text-sm text-white/60">Site Web</p>
                                <p className="text-lg font-semibold">www.filantrope.tech</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10">
                            <Image src="/logo/logo_transp.png" alt="Filantrope" width={40} height={40} className="object-cover" />
                        </div>
                        <span className="font-semibold text-lg">Filantrope</span>
                    </div>

                    <p className="text-sm text-white/60">
                        © {new Date().getFullYear()} Filantrope. Tous droits réservés.
                    </p>

                    {/* Back to top button */}
                    <button
                        onClick={scrollToTop}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
                        aria-label="Retour en haut"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
