"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Users, Zap, Shield } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" as const }
    }
};

const floatingVariants = {
    animate: {
        y: [0, -15, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    }
};

const features = [
    { icon: Clock, title: "Gain de temps", desc: "-40% d'attente perçue" },
    { icon: Users, title: "Expérience client", desc: "+30% de satisfaction" },
    { icon: Zap, title: "Rétention", desc: "-75% d'abandons" },
    { icon: Shield, title: "Productivité", desc: "+22% d'efficacité" },
];

export default function Second() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax: l'image bouge de -100px à +100px selon le scroll
    const imageY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section ref={sectionRef} id="whyus" className="relative min-h-screen w-full overflow-hidden py-20 px-6 md:px-12 lg:px-16">
            {/* Decorative floating circles */}
            <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl"
            />
            <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: "1s" }}
                className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-secondary/10 blur-3xl"
            />
            <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: "2s" }}
                className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-tertiary/10 blur-xl"
            />

            {/* Small decorative dots */}
            <div className="absolute top-32 left-1/4 w-2 h-2 rounded-full bg-primary/40" />
            <div className="absolute bottom-48 right-1/3 w-5 h-5 rounded-full bg-secondary/50" />
            <div className="absolute top-1/3 right-20 w-8 h-8 rounded-full bg-quinary/30" />

            {/* Grand cercle décoratif - centre en haut à droite, à l'extérieur */}
            <div
                className="absolute -top-[300px] -right-[300px] w-[1200px] h-[1200px] rounded-full bg-linear-to-br from-primary/10 to-transparent pointer-events-none"
            />

            <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={imageVariants}
                    style={{ y: imageY }}
                    className="hidden md:flex items-center justify-center relative"
                >
                    {/* Decorative frame behind image */}
                    <div className="absolute inset-4 border-2 border-primary/20 rounded-3xl -rotate-3" />
                    <div className="absolute inset-4 border-2 border-secondary/20 rounded-3xl rotate-3" />

                    <div className="relative overflow-hidden shadow-2xl">
                        <Image
                            src="/images/5.jpeg"
                            alt="Filantrope en action"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent" />
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="flex flex-col items-start justify-center"
                >
                    <motion.span
                        variants={itemVariants}
                        className="text-primary font-semibold text-sm uppercase tracking-wider mb-2"
                    >
                        Pourquoi nous ?
                    </motion.span>

                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                    >
                        Pourquoi choisir{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                            Filantrope
                        </span>{" "}
                        ?
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed"
                    >
                        <span className="font-semibold text-foreground">Parce que</span> nous traitons
                        l'entropie des files d'attente avec une approche{" "}
                        <span className="font-semibold text-primary">philanthrope</span>.
                        Nous apportons de l'ordre et de la sérénité dans votre établissement
                        tout en offrant une expérience moderne à vos usagers.
                    </motion.p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group p-3 sm:p-4 rounded-xl bg-card border border-b-[3px] border-r-2 border-border hover:border-primary/30 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <feature.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                                </div>
                                <p className="text-xs text-muted-foreground">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}