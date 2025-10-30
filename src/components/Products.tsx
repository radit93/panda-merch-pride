import ProductCard from "./ProductCard";
import tshirtImage from "@/assets/product-tshirt.jpg";
import totebagImage from "@/assets/product-totebag.jpg";
import keychainImage from "@/assets/product-keychain.jpg";
import accessoriesImage from "@/assets/product-accessories.jpg";

const Products = () => {
  const products = [
    {
      image: tshirtImage,
      name: "Kaos Supporter",
      price: "Rp 85.000",
      description: "Katun combed premium, adem dan nyaman"
    },
    {
      image: totebagImage,
      name: "Totebag Kanvas",
      price: "Rp 65.000",
      description: "Kanvas tebal berkualitas tinggi"
    },
    {
      image: keychainImage,
      name: "Keychain & Carabiner",
      price: "Rp 25.000",
      description: "Aksesoris gantungan kunci berkualitas"
    },
    {
      image: accessoriesImage,
      name: "Paket Aksesoris",
      price: "Rp 45.000",
      description: "Gelang, pin, dan stiker supporter"
    }
  ];

  return (
    <section id="produk" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Koleksi Produk
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilihan merchandise berkualitas tinggi yang mencerminkan identitas dan semangat 
            kebersamaan komunitas SMKN 2 Surabaya
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
