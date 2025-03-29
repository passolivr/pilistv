import { Container } from "@/components/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CookiePolicy = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <Container>
                <div className="py-16 lg:py-20">
                    <h1 className="font-neulis-cursive text-4xl font-bold text-foreground mb-8">
                        Cookie szabályzat
                    </h1>

                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        <h2>1. Mi az a cookie?</h2>
                        <p>
                            A cookie-k (sütik) kis méretű szöveges fájlok, amelyeket a weboldal az Ön eszközén tárol.
                            Ezek segítenek a weboldal működésében és a felhasználói élmény javításában.
                        </p>

                        <h2>2. Milyen cookie-kat használunk?</h2>
                        <h3>Szükséges cookie-k</h3>
                        <p>
                            Ezek nélkülözhetetlenek a weboldal működéséhez. Ide tartoznak például a bejelentkezési
                            adatokat tároló cookie-k.
                        </p>

                        <h3>Teljesítmény cookie-k</h3>
                        <p>
                            Segítenek megérteni, hogyan használják a látogatók weboldalunkat. Ezek az adatok
                            segítenek a weboldal fejlesztésében.
                        </p>

                        <h3>Funkcionális cookie-k</h3>
                        <p>
                            Lehetővé teszik a személyre szabott funkciókat, például a nyelvi beállítások vagy
                            lejátszási preferenciák megjegyzését.
                        </p>

                        <h3>Marketing cookie-k</h3>
                        <p>
                            Segítenek a releváns hirdetések megjelenítésében és a marketing tevékenységeink
                            hatékonyságának mérésében.
                        </p>

                        <h2>3. Cookie-k kezelése</h2>
                        <p>
                            Ön szabályozhatja és/vagy törölheti a cookie-kat saját belátása szerint. A cookie-k
                            törléséről vagy blokkolásáról böngészője beállításaiban talál információt.
                        </p>

                        <h2>4. Cookie-k letiltása</h2>
                        <p>
                            A cookie-k letiltása befolyásolhatja weboldalunk egyes funkcióinak működését. Ha letiltja
                            a cookie-kat, előfordulhat, hogy weboldalunk nem működik megfelelően.
                        </p>

                        <h2>5. További információk</h2>
                        <p>
                            Ha további kérdése van a cookie-k használatával kapcsolatban, kérjük, vegye fel velünk
                            a kapcsolatot az info@pilistv.hu email címen.
                        </p>

                        <div className="mt-8 text-sm text-muted-foreground">
                            Utolsó módosítás: 2024. március 1.
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default CookiePolicy; 