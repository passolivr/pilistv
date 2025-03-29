import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 z-50">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="space-y-2 flex-1">
                        <h3 className="font-neulis-cursive text-lg font-bold">Cookie beállítások 🍪</h3>
                        <p className="text-sm text-muted-foreground">
                            Weboldalunk sütiket használ a felhasználói élmény javítása érdekében.
                            További információkért olvasd el {" "}
                            <Link to="/cookie-szabalyzat" className="underline hover:text-brand-secondary">
                                Cookie szabályzatunkat
                            </Link>.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            onClick={() => setShowBanner(false)}
                        >
                            Elutasítás
                        </Button>
                        <Button onClick={handleAcceptAll}>
                            Elfogadás
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}; 