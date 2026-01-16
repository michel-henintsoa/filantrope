"use client";
import Image from "next/image";

export default function NavBar () {
    return (
        <>
        <div className="absolute flex items-center justify-between w-full top-5 z-25 px-5 md:px-12 lg:px-24 xl:px-32">
            <div className="flex items-end justify-center cursor-pointer px-3 rounded-xl border-b-2">
                <div className="w-10 h-10 rounded-full">
                    <Image src="/logo/logo_transp.png" alt="Filantrope" width={100} height={100} className="object-cover w-full h-full" />
                </div>
                <div className="h-6 rounded-full">
                    <Image src="/logo/logo-filantrope-01 2.png" alt="Filantrope" width={100} height={100} className="object-cover w-full h-full" />
                </div>
            </div>
            <div className="flex items-center justify-center cursor-pointer py-1 px-5 rounded-xl border-b-2 bg-primary hover:scale-102 active:scale-98 active:bg-primary/95 hover:bg-primary/90 transition-all duration-200">
                <span className=" text-lg tracking-wide font-semibold text-white">Contact</span>
            </div>
        </div>
        <nav className="sticky w-full flex items-center justify-center top-5">
            <div className="min-w-120 min-h-12 bg-white rounded-2xl shadow-2xl border-r-2 border-b-3 flex items-center justify-evenly z-25"></div>
        </nav>
        </>
    )
}