import { Link } from "react-router-dom";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";
import { Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  noTopMargin?: boolean;
}

const Footer = ({ noTopMargin = false }: FooterProps) => {
  return (
    <footer className={`relative border-t border-border bg-muted/50 shadow-[0_-1px_3px_0_rgb(0_0_0_/_0.1)] ${noTopMargin ? "" : "mt-12 md:mt-16"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-5">
            <img
              src="/assets/images/logo.png"
              alt="Pilis TV Logo"
              className="h-20 md:h-25"
            />
            <p className="font-neulis-neue text-sm text-muted-foreground mt-4">
              A Pilis TV a régió vezető streaming szolgáltatója, amely minőségi helyi tartalmakat kínál nézőinek.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-neulis-cursive text-xl font-semibold text-foreground mb-4">Navigáció</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="font-neulis-neue text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Főoldal
                </Link>
              </li>
              <li>
                <Link to="/eloadas" className="font-neulis-neue text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Élő adás
                </Link>
              </li>
              <li>
                <Link to="/musoraink" className="font-neulis-neue text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Műsoraink
                </Link>
              </li>
              <li>
                <Link to="/elofizetes" className="font-neulis-neue text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Előfizetés
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h3 className="font-neulis-cursive text-xl font-semibold text-foreground mb-4">Jogi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/felhasznalasi-feltetelek" className="font-neulis-neue text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Felhasználási feltételek
                </Link>
              </li>
              <li>
                <Link to="/adatvedelem" className="font-neulis-neue text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Adatvédelem
                </Link>
              </li>
              <li>
                <Link to="/cookie-szabalyzat" className="font-neulis-neue text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookie szabályzat
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-neulis-cursive text-xl font-semibold text-foreground mb-4">Kapcsolat</h3>
            <ul className="space-y-2">
              <li className="font-neulis-neue text-sm text-muted-foreground flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                info@pilistv.hu
              </li>
              <li className="font-neulis-neue text-sm text-muted-foreground flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                +36 30 123 4567
              </li>
              <li className="font-neulis-neue text-sm text-muted-foreground flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                2000 Szentendre, Fő tér 12.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-border">
          <p className="font-neulis-neue text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pilis TV. Minden jog fenntartva.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary hover:text-brand-secondary/80 transition-colors"
            >
              <SiFacebook className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary hover:text-brand-secondary/80 transition-colors"
            >
              <SiInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-secondary hover:text-brand-secondary/80 transition-colors"
            >
              <SiTiktok className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

