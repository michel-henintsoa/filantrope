"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
];

export default function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

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
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image Carousel */}
            <div className="absolute inset-0 z-0">
                {images.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={src}
                            alt={`Filantrope slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-end">
                <div className="mx-auto w-full max-w-7xl px-6 py-8 md:px-12 lg:px-16">
                    <div className="max-w-2xl">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-quinary" />
                            <span className="text-xs font-medium text-white/90 tracking-wide">
                                Gestion de files d&apos;attente nouvelle génération
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="mb-6 text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                            Prenez votre temps.{" "}
                            <span className="bg-gradient-to-r from-quinary via-senary to-secondary bg-clip-text text-transparent">
                                Rendez l&apos;attente plus fun !
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="mb-4 text-lg text-white/80 md:text-xl">
                            Découvrez <strong className="text-white">Filantrope</strong>, le
                            système agile de gestion de files d&apos;attente et de prise de
                            rendez-vous.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <button
                                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-3 font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 cursor-pointer"
                                onClick={() => openWhatsApp()}
                            >
                                <span className="relative z-10">
                                    Demandez votre Audit Accueil Gratuit
                                </span>
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-secondary to-primary transition-transform duration-300 group-hover:translate-x-0" />
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/20 pt-4">
                            <div>
                                <p className="text-3xl font-bold text-quinary md:text-4xl">
                                    0
                                </p>
                                <p className="text-sm text-white/70">Borne traditionnelle</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-senary md:text-4xl">
                                    100%
                                </p>
                                <p className="text-sm text-white/70">Mobile & Digital</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-secondary md:text-4xl">
                                    ∞
                                </p>
                                <p className="text-sm text-white/70">Files personnalisables</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-8 right-0 z-10 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentImage
                                ? "w-8 bg-quinary"
                                : "w-2 bg-white/50 hover:bg-white/70 cursor-pointer"
                            }`}
                        aria-label={`Aller à l'image ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}