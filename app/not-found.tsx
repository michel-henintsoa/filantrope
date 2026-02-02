"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    router.replace("/");
    return null;
    // <div style={{ minHeight: "calc(100vh - 20rem)" }} className="relative flex items-center justify-center overflow-hidden bg-background">
    //     {/* Subtle Background Decorations */}
    //     <div className="absolute inset-0 overflow-hidden pointer-events-none">
    //         {/* Gradient Orbs */}
    //         <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        //         <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-quinary/5 rounded-full blur-3xl" />
        //     </div>

        //     {/* Content */}
        //     <div className="relative z-10 px-6 py-16 text-center w-full max-w-2xl mx-auto">
        //         {/* 404 Number */}
        //         <div className="w-full h-full absolute backdrop-blur-xs -z-9"></div>
        //         <motion.div
        //             initial={{ opacity: 0, y: -20 }}
        //             animate={{ opacity: 1, y: 0 }}
        //             transition={{ duration: 0.5 }}
        //             className="mb-6 absolute -z-10 opacity-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        //         >
        //             <span className="inline-block text-[120px] md:text-[180px] font-bold leading-none bg-linear-to-br from-primary/75 via-secondary/75 to-quinary/75 bg-clip-text text-transparent">
        //                 404
        //             </span>
        //         </motion.div>

        //         {/* Icon */}
        //         <motion.div
        //             initial={{ opacity: 0, scale: 0.8 }}
        //             animate={{ opacity: 1, scale: 1 }}
        //             transition={{ duration: 0.4, delay: 0.1 }}
        //             className="mt-6 mb-3 flex justify-center"
        //         >
        //             <div className="relative p-4 bg-card rounded-xl shadow-sm">
        //                 <Search className="w-8 h-8 text-muted-foreground" />
        //                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-md flex items-center justify-center">
        //                     <span className="text-white text-xs font-bold">!</span>
        //                 </div>
        //             </div>
        //         </motion.div>

        //         {/* Title */}
        //         <motion.h1
        //             initial={{ opacity: 0, y: 10 }}
        //             animate={{ opacity: 1, y: 0 }}
        //             transition={{ duration: 0.4, delay: 0.2 }}
        //             className="mb-3 text-2xl md:text-3xl font-bold text-foreground"
        //         >
        //             Page introuvable
        //         </motion.h1>

        //         {/* Description */}
        //         <motion.p
        //             initial={{ opacity: 0, y: 10 }}
        //             animate={{ opacity: 1, y: 0 }}
        //             transition={{ duration: 0.4, delay: 0.3 }}
        //             className="mb-8 text-base md:text-lg text-muted-foreground max-w-md mx-auto"
        //         >
        //             Oups ! La page que vous recherchez semble avoir pris un ticket
        //             et s&apos;est perdue dans la file d&apos;attente.
        //         </motion.p>

        //         {/* Action Buttons */}
        //         <motion.div
        //             initial={{ opacity: 0, y: 10 }}
        //             animate={{ opacity: 1, y: 0 }}
        //             transition={{ duration: 0.4, delay: 0.4 }}
        //             className="flex flex-col sm:flex-row items-center justify-center gap-3"
        //         >
        //             {/* Primary Button - Home */}
        //             <Link
        //                 href="/"
        //                 className="group flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary/90 via-secondary/90 to-quinary/90 text-white font-semibold rounded shadow-md shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
        //             >
        //                 <Home className="w-4 h-4" />
        //                 <span>Retour à l&apos;accueil</span>
        //             </Link>

        //             {/* Secondary Button - Back */}
        //             <button
        //                 onClick={() => window.history.back()}
        //                 className="group flex items-center gap-2 px-6 py-3 bg-card/90 border border-border text-foreground font-medium rounded transition-all duration-300 hover:bg-accent/90 hover:border-primary/30 cursor-pointer"
        //             >
        //                 <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
        //                 <span>Page précédente</span>
        //             </button>
        //         </motion.div>

        //         {/* Decorative Line */}
        //         <motion.div
        //             initial={{ opacity: 0, scaleX: 0 }}
        //             animate={{ opacity: 1, scaleX: 1 }}
        //             transition={{ duration: 0.5, delay: 0.5 }}
        //             className="mt-12 mx-auto w-32 h-1 bg-linear-to-r from-primary via-secondary to-quinary rounded-full"
        //         />

        //         {/* Help Text */}
        //         <motion.p
        //             initial={{ opacity: 0 }}
        //             animate={{ opacity: 1 }}
        //             transition={{ duration: 0.4, delay: 0.6 }}
        //             className="mt-6 text-sm text-muted-foreground"
        //         >
        //             Besoin d&apos;aide ?{" "}
        //             <Link
        //                 href="/#contact"
        //                 className="text-primary hover:text-secondary transition-colors duration-200 font-medium"
        //             >
        //                 Contactez-nous
        //             </Link>
        //         </motion.p>
        //     </div>
        // </div>
}
