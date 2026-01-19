"use client";

import { Phone, Mail, Globe, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Contact() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const openWhatsApp = (phone = "24176501211") => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            // Force mobile app opening
            window.location.href = `whatsapp://send?phone=${phone}`;
        } else {
            // Open WhatsApp Web on Desktop
            window.open(`https://web.whatsapp.com/send?phone=${phone}`, "_blank");
        }
    };

    return (
        <footer id="contact" className="relative bg-linear-to-br from-tertiary via-tertiary to-primary/90 text-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-quinary/10 rounded-full blur-2xl" />

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 md:px-12 lg:px-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - CTA */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Prêt à moderniser{" "}
                            <span className="bg-linear-to-r from-quinary via-senary to-secondary bg-clip-text text-transparent">
                                votre accueil ?
                            </span>
                        </h2>
                        <p className="text-lg text-white/80 max-w-md">
                            Contactez-nous pour un audit gratuit et découvrez comment Filantrope peut transformer votre gestion des files d'attente.
                        </p>
                    </div>

                    {/* Right side - Contact info */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 bg-white/10 backdrop-blur-sm group">
                            <a href="tel:+24176501211" className="flex items-center gap-4 flex-1 border border-white/20 p-4 border-r-0 hover:bg-white/20 hover:scale-[1.02] transition-all duration-300">
                                <div className="p-3 rounded-lg bg-quinary/20 group-hover:bg-quinary/30 transition-colors">
                                    <Phone className="w-6 h-6 text-quinary" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/60">Téléphone</p>
                                    <p className="text-lg font-semibold text-white">076 50 12 11</p>
                                </div>
                            </a>
                            <button onClick={() => openWhatsApp()} className="flex items-center gap-4 flex-1 border border-white/20 p-4 border-l-0 hover:bg-white/20 hover:scale-[1.02] transition-all duration-300">
                                <div className="p-3 rounded-lg bg-green-400/20 group-hover:bg-green-600/30 transition-colors">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-white/60">Whatsapp</p>
                                    <p className="text-lg font-semibold text-white">076 50 12 11</p>
                                </div>
                            </button>
                        </div>

                        {/* Email */}
                        <a
                            href="mailto:contact@filantrope.tech"
                            className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 group"
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
                            className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 group"
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
