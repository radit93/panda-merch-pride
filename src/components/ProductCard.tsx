import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
}

const ProductCard = ({ image, name, price, description }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-card-hover transition-smooth border-border animate-fade-in">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-accent">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-6">
        <div className="w-full">
          <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <div className="flex items-center justify-between w-full">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <Button 
              className="bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              Detail
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
