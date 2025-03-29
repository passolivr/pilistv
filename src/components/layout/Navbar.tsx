import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/assets/images/logo.png"
                alt="Pilis TV Logo"
                className="h-10 md:h-10"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            <Link to="/" className="text-foreground hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">
              Főoldal
            </Link>
            <Link to="/eloadas" className="text-foreground hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">
              Élő adás
            </Link>
            <Link to="/musoraink" className="text-foreground hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">
              Műsoraink
            </Link>
            <Link to="/hirek" className="text-foreground hover:text-secondary px-3 py-2 text-sm font-medium transition-colors">
              Hírek
            </Link>
            <Link to="/merch">
              <Button variant="outline" className="ml-2 gap-2">
                <ShoppingBag className="h-4 w-4" />
                Merch Shop
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-secondary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm animate-fadeIn border-t border-border">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link
              to="/"
              className="text-foreground hover:text-secondary block px-3 py-2 text-base font-medium rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Főoldal
            </Link>
            <Link
              to="/eloadas"
              className="text-foreground hover:text-secondary block px-3 py-2 text-base font-medium rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Élő adás
            </Link>
            <Link
              to="/musoraink"
              className="text-foreground hover:text-secondary block px-3 py-2 text-base font-medium rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Műsoraink
            </Link>
            <Link
              to="/hírek"
              className="text-foreground hover:text-secondary block px-3 py-2 text-base font-medium rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Hírek
            </Link>
            <Link
              to="/merch"
              className="text-foreground hover:text-secondary block px-3 py-2 text-base font-medium rounded-md hover:bg-muted transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingBag className="h-4 w-4" />
              Merch Shop
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
