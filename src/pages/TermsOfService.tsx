import { Container } from "@/components/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <Container>
                <div className="py-16 lg:py-20">
                    <h1 className="font-neulis-cursive text-4xl font-bold text-foreground mb-8">
                        Felhasználási feltételek
                    </h1>

                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        <h2>1. Általános rendelkezések</h2>
                        <p>
                            Üdvözöljük a Pilis TV weboldalán! A weboldal használatával Ön elfogadja az alábbi felhasználási feltételeket.
                            Kérjük, figyelmesen olvassa el ezeket a feltételeket, mielőtt használná szolgáltatásainkat.
                        </p>

                        <h2>2. Szolgáltatások</h2>
                        <p>
                            A Pilis TV streaming szolgáltatást, élő adást és egyéb médiatartalmakat biztosít felhasználói számára.
                            Szolgáltatásaink egy része előfizetéshez kötöttek, más részük ingyenesen elérhető.
                        </p>

                        <h2>3. Felhasználói fiókok</h2>
                        <p>
                            A szolgáltatások teljes körű igénybevételéhez felhasználói fiók létrehozása szükséges.
                            A felhasználó felelős a fiókjához tartozó jelszó biztonságos megőrzéséért és a fiókján keresztül
                            végzett minden tevékenységért.
                        </p>

                        <h2>4. Előfizetések</h2>
                        <p>
                            Az előfizetéses szolgáltatásaink díjfizetéshez kötöttek. Az előfizetési díjakat és feltételeket
                            a weboldalon található árak és információk tartalmazzák. Az előfizetés megújítása automatikus,
                            hacsak azt a felhasználó nem mondja le.
                        </p>

                        <h2>5. Tartalom használata</h2>
                        <p>
                            A weboldalunkon található tartalmak szerzői jogvédelem alatt állnak. A tartalmak letöltése,
                            másolása, terjesztése csak előzetes írásbeli engedélyünkkel lehetséges.
                        </p>

                        <h2>6. Felelősség korlátozása</h2>
                        <p>
                            A Pilis TV nem vállal felelősséget a szolgáltatás használatából eredő esetleges károkért,
                            illetve a szolgáltatás esetleges technikai fennakadásaiért.
                        </p>

                        <h2>7. Módosítások</h2>
                        <p>
                            Fenntartjuk a jogot a felhasználási feltételek módosítására. A módosításokról a weboldalon
                            keresztül tájékoztatjuk felhasználóinkat.
                        </p>

                        <h2>8. Kapcsolat</h2>
                        <p>
                            Ha kérdése van a felhasználási feltételekkel kapcsolatban, kérjük, vegye fel velünk a kapcsolatot
                            az info@pilistv.hu email címen.
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

export default TermsOfService; 