import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center py-16">
              <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Keranjang Kosong
              </h2>
              <p className="text-muted-foreground mb-8">
                Belum ada produk di keranjang Anda. Yuk mulai belanja!
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/")}
                className="bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                Mulai Belanja
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-12 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Keranjang Belanja
              </h1>
              <Button
                variant="ghost"
                onClick={clearCart}
                className="text-destructive hover:text-destructive"
              >
                Kosongkan
              </Button>
            </div>

            <div className="space-y-4 mb-8">
              {items.map((item) => (
                <Card key={item.id} className="p-4 md:p-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-accent rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xl md:text-2xl font-bold text-primary">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2 md:gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="text-lg font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 md:p-8 bg-gradient-primary">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-primary-foreground/80">
                    Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} item)
                  </span>
                  <span className="text-xl font-semibold text-primary-foreground">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <div className="border-t border-primary-foreground/20 pt-4">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-bold text-primary-foreground">
                      Total
                    </span>
                    <span className="text-3xl font-bold text-primary-foreground">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-background text-foreground hover:bg-background/90 text-lg py-6"
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
