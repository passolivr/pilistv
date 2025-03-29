import { Container } from "@/components/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <Container>
                <div className="py-16 lg:py-20">
                    <h1 className="font-neulis-cursive text-4xl font-bold text-foreground mb-8">
                        Adatvédelmi irányelvek
                    </h1>

                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        <h2>1. Bevezetés</h2>
                        <p>
                            A Pilis TV elkötelezett felhasználói személyes adatainak védelme iránt. Adatvédelmi
                            irányelveink ismertetik, hogyan gyűjtjük, használjuk és védjük az Ön személyes adatait.
                        </p>

                        <h2>2. Adatgyűjtés</h2>
                        <p>
                            Szolgáltatásaink használata során az alábbi adatokat gyűjthetjük:
                        </p>
                        <ul>
                            <li>Személyes azonosító adatok (név, email cím)</li>
                            <li>Számlázási információk</li>
                            <li>Használati statisztikák</li>
                            <li>Technikai adatok (IP cím, böngésző típusa)</li>
                        </ul>

                        <h2>3. Adatfelhasználás</h2>
                        <p>
                            Az összegyűjtött adatokat az alábbi célokra használjuk:
                        </p>
                        <ul>
                            <li>Szolgáltatásaink biztosítása és fejlesztése</li>
                            <li>Felhasználói élmény személyre szabása</li>
                            <li>Kommunikáció a felhasználókkal</li>
                            <li>Jogi kötelezettségek teljesítése</li>
                        </ul>

                        <h2>4. Adatbiztonság</h2>
                        <p>
                            Megfelelő technikai és szervezési intézkedéseket alkalmazunk az adatok védelmére.
                            Az adatokhoz való hozzáférés szigorúan korlátozott és ellenőrzött.
                        </p>

                        <h2>5. Adattovábbítás</h2>
                        <p>
                            Személyes adatait nem adjuk át harmadik félnek, kivéve, ha:
                        </p>
                        <ul>
                            <li>Ön ehhez kifejezetten hozzájárul</li>
                            <li>Jogszabályi kötelezettség teljesítése miatt szükséges</li>
                            <li>Szolgáltatásaink működtetéséhez elengedhetetlen</li>
                        </ul>

                        <h2>6. Felhasználói jogok</h2>
                        <p>
                            Önnek joga van:
                        </p>
                        <ul>
                            <li>Hozzáférni személyes adataihoz</li>
                            <li>Kérni adatai helyesbítését vagy törlését</li>
                            <li>Korlátozni vagy tiltakozni az adatkezelés ellen</li>
                            <li>Adathordozhatósághoz</li>
                        </ul>

                        <h2>7. Kapcsolat</h2>
                        <p>
                            Adatvédelemmel kapcsolatos kérdéseivel forduljon hozzánk bizalommal az
                            info@pilistv.hu email címen.
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

export default PrivacyPolicy; 