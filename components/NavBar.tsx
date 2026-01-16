"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
    const [isUponHero, setIsUponHero] = useState(true); // true = nav is above hero section
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Le hero fait 100vh, on vérifie si on a scrollé au-delà
            const heroHeight = window.innerHeight;
            const navHeight = navRef.current?.offsetHeight || 60;

            // Si le scroll dépasse la hauteur du hero moins la hauteur du nav
            // alors le nav n'est plus au-dessus du hero
            if (window.scrollY > heroHeight - navHeight - 20) {
                setIsUponHero(false);
            } else {
                setIsUponHero(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initial state

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
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
                <div className={`min-w-120 min-h-12 ${!isUponHero ? "backdrop-blur-sm" : "bg-white/90"} rounded-2xl shadow-2xl border-r-2 border-b-3 flex items-center justify-evenly`}></div>
            </nav>
        </>
    )
}