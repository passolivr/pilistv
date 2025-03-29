
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center pt-24">
        <div className="text-center px-4 sm:px-6 lg:px-8 py-12 max-w-md">
          <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-medium text-muted-foreground mb-4">Az oldal nem található</h2>
          <p className="text-muted-foreground mb-8">
            Ellenőrizd az URL-t vagy térj vissza a főoldalra.
          </p>
          <Button asChild>
            <Link to="/">
              Vissza a főoldalra
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
