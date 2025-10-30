import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Panda's Merch
            </h3>
            <p className="text-background/80 mb-4">
              Merchandise resmi SMKN 2 Surabaya. Wujudkan rasa bangga dan loyalitas melalui setiap produk.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Produk
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('tentang')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Tentang
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Kontak Kami</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@pandasmerch.com" 
                className="flex items-center gap-2 text-background/80 hover:text-background transition-smooth"
              >
                <Mail className="w-5 h-5" />
                info@pandasmerch.com
              </a>
              <a 
                href="tel:+6281234567890" 
                className="flex items-center gap-2 text-background/80 hover:text-background transition-smooth"
              >
                <Phone className="w-5 h-5" />
                +62 812-3456-7890
              </a>
            </div>

            <div className="flex gap-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary hover:bg-primary-hover rounded-full flex items-center justify-center transition-smooth"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary hover:bg-primary-hover rounded-full flex items-center justify-center transition-smooth"
              >
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © {currentYear} Panda's Merch. All rights reserved. Made with ❤️ for SMKN 2 Surabaya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
