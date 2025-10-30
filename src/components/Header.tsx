import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Panda's Merch
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('produk')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Produk
            </button>
            <button 
              onClick={() => scrollToSection('tentang')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Tentang
            </button>
            <button 
              onClick={() => scrollToSection('kontak')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Kontak
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              onClick={() => scrollToSection('produk')}
              className="hidden md:inline-flex bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              Lihat Koleksi
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-smooth font-medium text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('produk')}
              className="text-foreground hover:text-primary transition-smooth font-medium text-left"
            >
              Produk
            </button>
            <button 
              onClick={() => scrollToSection('tentang')}
              className="text-foreground hover:text-primary transition-smooth font-medium text-left"
            >
              Tentang
            </button>
            <button 
              onClick={() => scrollToSection('kontak')}
              className="text-foreground hover:text-primary transition-smooth font-medium text-left"
            >
              Kontak
            </button>
            <Button 
              onClick={() => scrollToSection('produk')}
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              Lihat Koleksi
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
