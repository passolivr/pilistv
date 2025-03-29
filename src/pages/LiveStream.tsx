import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Program {
    time: string;
    title: string;
    description: string;
}

const todaySchedule: Program[] = [
    {
        time: "08:00",
        title: "Reggeli Híradó",
        description: "A nap legfontosabb hírei és aktualitásai."
    },
    {
        time: "10:00",
        title: "Helyi Konyha",
        description: "Tradicionális magyar receptek modern köntösben."
    },
    {
        time: "12:00",
        title: "Déli Híradó",
        description: "Friss hírek és időjárás-jelentés."
    },
    {
        time: "14:00",
        title: "Kakukktojás",
        description: "Izgalmas vetélkedő műsor, logikai feladványokkal."
    },
    {
        time: "16:00",
        title: "Pilis Panoráma",
        description: "A Pilis hegység csodálatos tájai és természeti kincsei."
    },
    {
        time: "18:00",
        title: "Esti Híradó",
        description: "A nap összefoglalója és friss hírek."
    },
    {
        time: "20:00",
        title: "Kultúra Expressz",
        description: "Kulturális összefoglaló a régió eseményeiről."
    },
    {
        time: "22:00",
        title: "Éjszakai Híradó",
        description: "A nap legfontosabb eseményei, röviden."
    }
];

const LiveStream = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8">
                        <h1 className="font-neulis-cursive text-3xl font-bold text-foreground mb-2">Élő adás</h1>
                        <p className="font-neulis-neue text-muted-foreground">
                            Kövesd élőben a Pilis TV adását, bárhol, bármikor.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <p className="font-neulis-neue text-muted-foreground">Élő adás betöltése...</p>
                                </div>
                                <iframe
                                    src="https://www.youtube.com/embed/jfKfPfyJRdk"
                                    className="absolute inset-0 w-full h-full"
                                    title="Pilis TV Live Stream"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="absolute bottom-4 left-4 right-4 flex items-center">
                                    <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                                        <span className="font-neulis-neue text-sm text-foreground">ÉLŐ</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 glass-card rounded-lg">
                                <h2 className="font-neulis-cursive text-xl font-bold text-foreground mb-2">Most műsoron: Helyi Híradó</h2>
                                <p className="font-neulis-neue text-muted-foreground mb-4">
                                    A régió legfrissebb hírei, eseményei és aktualitásai. Interjúk, riportok és helyszíni tudósítások.
                                </p>
                                <div className="flex items-center text-sm text-muted-foreground font-neulis-neue">
                                    <span>Következik: Pilis Panoráma (16:00)</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="p-6 glass-card rounded-lg sticky top-20">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="font-neulis-cursive text-xl font-bold text-foreground flex items-center">
                                        <Calendar className="h-5 w-5 mr-2" />
                                        Mai műsor
                                    </h2>
                                    <span className="font-neulis-neue text-sm text-brand-secondary">
                                        {new Date().toLocaleDateString('hu-HU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                    </span>
                                </div>

                                <div className="space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto pr-2">
                                    {todaySchedule.map((program, index) => (
                                        <div
                                            key={index}
                                            className={`p-3 rounded-lg border ${program.time === '16:00'
                                                ? 'bg-brand-primary/20 border-brand-primary'
                                                : 'border-border'
                                                }`}
                                        >
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="font-neulis-cursive font-medium text-foreground">{program.title}</h3>
                                                    <p className="font-neulis-neue text-sm text-muted-foreground">{program.description}</p>
                                                </div>
                                                <span className="font-neulis-neue text-sm font-mono text-muted-foreground">{program.time}</span>
                                            </div>
                                            {program.time === '16:00' && (
                                                <div className="mt-2 font-neulis-neue text-xs text-brand-secondary flex items-center">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-brand-secondary mr-1"></div>
                                                    Most következik
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 pt-4 border-t border-border">
                                    <p className="font-neulis-neue text-sm text-muted-foreground">
                                        Az előfizetőink hozzáférhetnek az összes műsorhoz és bármikor visszanézhetik azokat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default LiveStream;
