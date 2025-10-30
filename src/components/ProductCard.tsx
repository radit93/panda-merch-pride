import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: string;
  priceNumber: number;
  description: string;
}

const ProductCard = ({ id, image, name, price, priceNumber, description }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(id);

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price: priceNumber,
      image,
    });
  };

  const handleToggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist({
        id,
        name,
        price: priceNumber,
        image,
        description,
      });
    }
  };

  return (
    <Card className="group overflow-hidden hover:shadow-card-hover transition-smooth border-border animate-fade-in">
      <CardContent className="p-0 relative">
        <div className="aspect-square overflow-hidden bg-accent">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
          />
        </div>
        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background transition-smooth ${
            inWishlist ? "text-primary" : "text-muted-foreground"
          }`}
          onClick={handleToggleWishlist}
        >
          <Heart className={`h-5 w-5 ${inWishlist ? "fill-primary" : ""}`} />
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-6">
        <div className="w-full">
          <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <div className="flex items-center justify-between w-full gap-2">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <Button 
              onClick={handleAddToCart}
              className="bg-primary hover:bg-primary-hover text-primary-foreground gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              Keranjang
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
