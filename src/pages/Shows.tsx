import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lock, List, Grid } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Show {
  id: number;
  title: string;
  image: string;
  description: string;
  episodes: number;
  category: string;
}

const shows: Show[] = [
  {
    id: 1,
    title: "Pilisi Szemle",
    image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Heti összefoglaló a térség legfontosabb eseményeiről, híreiről.",
    episodes: 12,
    category: "Hírek",
  },
  {
    id: 2,
    title: "Sváb Konyha",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Fedezd fel a legikonikusabb sváb ízeket a legügyesebb nagymamákkal.",
    episodes: 8,
    category: "Életmód",
  },
  {
    id: 3,
    title: "Otthon a Pilisben",
    image: "https://pilisvorosvar.hu/files/Articles/headline_image/342bb3aa-a658-4400-a326-96901a263737.jpg",
    description: "Bemutatjuk a Pilisi-medence épített- és természeti örökségét.",
    episodes: 15,
    category: "Életmód",
  },
  {
    id: 4,
    title: "Események",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Élőben közvetítjük a legfontosabb eseményeket, melyek visszanézhetőek.",
    episodes: 20,
    category: "Kultúra",
  },
  {
    id: 5,
    title: "Híradó",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "A legfrissebb hírek, események és aktualitások.",
    episodes: 30,
    category: "Hírek",
  },
  {
    id: 6,
    title: "Éjszakai Beszélgetések",
    image: "https://images.unsplash.com/photo-1520451644838-906a72aa0dc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Mélyinterjúk és beszélgetések érdekes helyi személyiségekkel.",
    episodes: 10,
    category: "Kultúra",
  },
  {
    id: 7,
    title: "Pilisi Túrák",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Túraútvonalak és kirándulási tippek a Pilis hegységben.",
    episodes: 6,
    category: "Természet",
  },
  {
    id: 8,
    title: "Helyi Történetek",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "A Pilis régió történelme, legendái és érdekes történetei.",
    episodes: 9,
    category: "Kultúra",
  },
];

const categories = ["Mind", ...Array.from(new Set(shows.map(show => show.category)))];

const Shows = () => {
  const [selectedCategory, setSelectedCategory] = useState("Mind");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredShows = selectedCategory === "Mind"
    ? shows
    : shows.filter(show => show.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Műsoraink</h1>
            <p className="text-muted-foreground">
              Fedezd fel a Pilis TV exkluzív műsorait. Az összes műsor megtekintéséhez előfizetés szükséges.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${selectedCategory === category
                    ? 'bg-brand-primary text-brand-secondary'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid'
                  ? 'bg-brand-primary text-brand-secondary'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'list'
                  ? 'bg-brand-primary text-brand-secondary'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredShows.map(show => (
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
                    <div className="absolute top-2 right-2 bg-brand-primary/90 text-brand-secondary text-xs font-medium py-1 px-2 rounded-full">
                      {show.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-foreground mb-2">{show.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{show.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{show.episodes} epizód</span>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/elofizetes">Előfizetés</a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredShows.map(show => (
                <div
                  key={show.id}
                  className="glass-card rounded-lg overflow-hidden group relative"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-48 aspect-video md:aspect-square">
                      <img
                        src={show.image}
                        alt={show.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                      <div className="absolute top-2 right-2 bg-brand-primary/90 text-brand-secondary text-xs font-medium py-1 px-2 rounded-full">
                        {show.category}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-2">{show.title}</h3>
                        <p className="text-sm text-muted-foreground">{show.description}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-muted-foreground">{show.episodes} epizód</span>
                        <Button variant="outline" size="sm" asChild>
                          <a href="/elofizetes">Előfizetés</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredShows.length === 0 && (
            <div className="text-center p-12">
              <p className="text-muted-foreground">Nincs találat a kiválasztott kategóriában.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shows;
