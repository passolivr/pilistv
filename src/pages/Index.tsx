import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CreditCard, Leaf, Lock, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const shows = [
  {
    id: 1,
    title: "Kakukktojás",
    image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Izgalmas vetélkedő műsor, ahol a versenyzők logikai feladványokat oldanak meg.",
    episodes: 12,
  },
  {
    id: 2,
    title: "Pilis Panoráma",
    image: "https://images.unsplash.com/photo-1610555356070-d0efb6505f81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Fedezd fel a Pilis hegység csodálatos tájait és a környék természeti kincseit.",
    episodes: 8,
  },
  {
    id: 3,
    title: "Helyi Konyha",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Tradicionális magyar receptek modern köntösben a régió legjobb séfjeivel.",
    episodes: 15,
  },
  {
    id: 4,
    title: "Kultúra Expressz",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Heti kulturális összefoglaló a régió eseményeiről, programjairól.",
    episodes: 20,
  }
];

const Index = () => {
  const [showLabels, setShowLabels] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section
        className="pt-20 md:pt-24 pb-12 md:pb-16 bg-brand-primary relative"
        style={{
          backgroundImage: "url('https://img.oastatic.com/img2/42665310/max/variant.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-brand-primary/80"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-center">
            <div className="max-w-2xl mt-6 md:mt-0 text-center md:text-left">
              <h1 className="font-neulis-cursive text-3xl sm:text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
                A hely, ahol otthon vagy
              </h1>
              <p className="font-neulis-neue text-base sm:text-lg md:text-xl text-foreground/90 mb-6 max-w-md mx-auto md:mx-0">
                A megújult Pilis TV műsorán a hagyományos értékek és az új ötletek találkoznak.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                <Button asChild className="font-neulis-neue border border-brand-secondary/30 hover:bg-brand-secondary/10 transition-colors w-full sm:w-auto">
                  <Link to="/eloadas" className="flex items-center justify-center">
                    <span>Élő adás</span>
                    <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse ml-0"></div>
                  </Link>
                </Button>
                {/* New Button for "Műsoraink" */}
                <Button asChild className="font-neulis-neue border border-brand-secondary/30 hover:bg-brand-secondary/10 transition-colors w-full sm:w-auto">
                  <Link to="/musoraink" className="flex items-center justify-center">
                    <span>Műsoraink</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:ml-auto md:pr-0 lg:pr-12 mb-6 md:mb-0 flex items-center">
              {/* Adjusted logo height to match the height of the text */}
              <img
                src="/assets/images/logo.png"
                alt="Pilis TV Logo"
                className="h-20 sm:h-24 md:h-28 lg:h-32 mx-auto"
              />
            </div>
          </div>
        </div>
        {/* Desktop labels */}
        <div className="hidden sm:block">
          {/* Right label */}
          <div className="absolute bottom-4 w-full z-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-end pr-12">
                <div className="inline-flex items-center justify-start gap-2 text-sm text-foreground/80 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span>Fénykép: Magyar Természetjáró Szövetség</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Shows Section */}
      <section className="py-12 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <h2 className="font-neulis-cursive text-2xl md:text-3xl font-bold text-foreground text-center sm:text-left">Népszerű műsoraink</h2>
            <Link to="/musoraink" className="font-neulis-neue text-brand-secondary hover:text-brand-light transition-colors">
              Összes megtekintése
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {shows.map((show) => (
              <div
                key={show.id}
                className="glass-card rounded-lg overflow-hidden group relative"
              >
                <div className="relative aspect-video">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-neulis-cursive text-lg font-medium text-foreground mb-2 line-clamp-1">{show.title}</h3>
                  <p className="font-neulis-neue text-sm text-muted-foreground mb-3 line-clamp-2">{show.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-neulis-neue text-xs text-muted-foreground">{show.episodes} epizód</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/elofizetes">Megtekintés</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="pt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto glass-card rounded-xl p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-brand-primary/5"></div>
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-brand-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl"></div>

            <div className="text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary mb-6">
                <span className="font-neulis-neue text-sm font-medium">Támogatás</span>
              </div>
              <h2 className="font-neulis-cursive text-3xl md:text-4xl font-bold text-foreground mb-6">
                Támogasd a Pilis TV-t!
              </h2>
              <div className="flex flex-col items-center gap-8">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="font-neulis-neue">Minőségi tartalom</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-brand-secondary"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-neulis-neue">Helyi közösség támogatása</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-brand-secondary"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-neulis-neue">Exkluzív tartalmak</span>
                  </div>
                </div>
                <Button asChild className="font-neulis-neue bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 transition-colors text-lg px-8 py-6">
                  <Link to="/elofizetes">Támogatás</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GYIK Section */}
      <section className="py-12 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto glass-card rounded-xl p-8">
            <div className="text-center mb-12">
              <h2 className="font-neulis-cursive text-2xl md:text-3xl font-bold text-foreground mb-4">Gyakran Ismételt Kérdések</h2>
              <p className="font-neulis-neue text-muted-foreground/80 max-w-2xl mx-auto">
                Ha további kérdésed van, írj nekünk bátran az <span className="text-brand-secondary">info@pilistv.hu</span> címre.
              </p>
            </div>
            <div className="space-y-3">
              <div className="group">
                <details className="group marker:content-['']">
                  <summary className="p-4 bg-background rounded-lg flex items-center justify-between cursor-pointer hover:bg-background/80 transition-colors duration-200 select-none">
                    <h3 className="font-neulis-neue text-lg font-bold text-foreground group-hover:text-brand-secondary transition-colors duration-200">Hogyan fizethetek elő?</h3>
                    <ChevronDown className="h-5 w-5 text-brand-secondary transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="overflow-hidden">
                    <div className="p-4 pt-3 text-muted-foreground/80 transform origin-top transition-all duration-200">
                      <p className="font-neulis-neue">
                        Az előfizetéshez válaszd ki a kívánt csomagot, majd kattints az "Előfizetés" gombra. A fizetés bankkártyával történik, biztonságos kapcsolaton keresztül.
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              <div className="group">
                <details className="group marker:content-['']">
                  <summary className="p-4 bg-background rounded-lg flex items-center justify-between cursor-pointer hover:bg-background/80 transition-colors duration-200 select-none">
                    <h3 className="font-neulis-neue text-lg font-bold text-foreground group-hover:text-brand-secondary transition-colors duration-200">Lemondhatom az előfizetést bármikor?</h3>
                    <ChevronDown className="h-5 w-5 text-brand-secondary transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="overflow-hidden">
                    <div className="p-4 pt-3 text-muted-foreground/80 transform origin-top transition-all duration-200">
                      <p className="font-neulis-neue">
                        Igen, az előfizetés bármikor lemondható a felhasználói fiókodban, hűségidő nélkül. A már kifizetett időszak végéig még hozzáférsz a prémium tartalmakhoz.
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              <div className="group">
                <details className="group marker:content-['']">
                  <summary className="p-4 bg-background rounded-lg flex items-center justify-between cursor-pointer hover:bg-background/80 transition-colors duration-200 select-none">
                    <h3 className="font-neulis-neue text-lg font-bold text-foreground group-hover:text-brand-secondary transition-colors duration-200">Milyen eszközökön nézhetem a műsorokat?</h3>
                    <ChevronDown className="h-5 w-5 text-brand-secondary transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="overflow-hidden">
                    <div className="p-4 pt-3 text-muted-foreground/80 transform origin-top transition-all duration-200">
                      <p className="font-neulis-neue">
                        A Pilis TV műsorai elérhetők számítógépen, tableten és mobiltelefonon keresztül is. Használhatod kedvenc böngésződet vagy töltsd le mobilalkalmazásunkat.
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              <div className="group">
                <details className="group marker:content-['']">
                  <summary className="p-4 bg-background rounded-lg flex items-center justify-between cursor-pointer hover:bg-background/80 transition-colors duration-200 select-none">
                    <h3 className="font-neulis-neue text-lg font-bold text-foreground group-hover:text-brand-secondary transition-colors duration-200">Meddig érhetők el a műsorok visszanézésre?</h3>
                    <ChevronDown className="h-5 w-5 text-brand-secondary transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="overflow-hidden">
                    <div className="p-4 pt-3 text-muted-foreground/80 transform origin-top transition-all duration-200">
                      <p className="font-neulis-neue">
                        A prémium előfizetőknek a műsorok korlátlan ideig elérhetők visszanézésre. Az archívumunkban több évre visszamenőleg megtalálhatók a tartalmak.
                      </p>
                    </div>
                  </div>
                </details>
              </div>

              <div className="group">
                <details className="group marker:content-['']">
                  <summary className="p-4 bg-background rounded-lg flex items-center justify-between cursor-pointer hover:bg-background/80 transition-colors duration-200 select-none">
                    <h3 className="font-neulis-neue text-lg font-bold text-foreground group-hover:text-brand-secondary transition-colors duration-200">Van próbaidőszak az előfizetéshez?</h3>
                    <ChevronDown className="h-5 w-5 text-brand-secondary transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="overflow-hidden">
                    <div className="p-4 pt-3 text-muted-foreground/80 transform origin-top transition-all duration-200">
                      <p className="font-neulis-neue">
                        Igen, minden új előfizetőnek 14 napos ingyenes próbaidőszakot biztosítunk. Ha ez idő alatt nem vagy elégedett, egyszerűen lemondhatod az előfizetést.
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer noTopMargin />
    </div>
  );
};

export default Index;