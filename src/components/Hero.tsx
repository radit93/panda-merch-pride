import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-merchandise.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('produk');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in space-y-6">
            <div className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-semibold mb-4">
              Merchandise Resmi SMKN 2 Surabaya
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Wujudkan Rasa Bangga & Loyalitas
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Koleksi merchandise eksklusif untuk menampilkan identitas supporter SMKN 2 Surabaya. 
              Setiap produk adalah simbol persatuan dan kebanggaan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                onClick={scrollToProducts}
                className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6"
              >
                Belanja Sekarang
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2"
                onClick={() => document.getElementById('tentang')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>

          <div className="animate-scale-in">
            <img 
              src={heroImage} 
              alt="Koleksi Merchandise SMKN 2 Surabaya" 
              className="rounded-2xl shadow-card-hover w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
