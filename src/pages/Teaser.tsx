import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Teaser = () => {
    const [password, setPassword] = useState("");
    const [showInput, setShowInput] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const hasAccess = Cookies.get("pilistv_access");
        if (hasAccess === "granted") {
            navigate("/fooldal");
        }
    }, [navigate]);

    const handleKeyPress = (e: KeyboardEvent) => {
        setPassword(prev => {
            const newPassword = prev + e.key;
            if (newPassword === "pilistv2025passoliver") {
                Cookies.set("pilistv_access", "granted", { expires: 365 }); // 1 year expiration
                navigate("/fooldal");
            }
            return newPassword;
        });
    };

    useEffect(() => {
        window.addEventListener("keypress", handleKeyPress);
        return () => window.removeEventListener("keypress", handleKeyPress);
    }, []);

    return (
        <div
            className="min-h-screen w-full relative flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: "url('https://img.oastatic.com/img2/42665310/max/variant.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>

            <div className="relative z-10 text-center px-4">
                <img
                    src="/assets/images/logo.png"
                    alt="Pilis TV Logo"
                    className="h-32 sm:h-40 md:h-48 mx-auto mb-8 animate-fade-in"
                />
                <h1 className="font-neulis-cursive text-4xl sm:text-5xl md:text-6xl font-bold text-brand-secondary mb-4 animate-slide-up">
                    Megújulunk
                </h1>
                <p className="font-neulis-neue text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto animate-fade-in">
                    A Pilis TV új arculattal, izgalmas tartalmakkal és streaming szolgáltatással várja nézőit. Weboldalunk hamarosan elérhető.
                </p>
            </div>

            <div className="absolute bottom-4 right-4 z-20">
                <div className="inline-flex items-center justify-start gap-2 text-sm text-foreground/80 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span>Fénykép: Magyar Természetjáró Szövetség</span>
                </div>
            </div>
        </div>
    );
};

export default Teaser;

// Add these animations to your global CSS
const styles = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 1s ease-out forwards;
}
`; 