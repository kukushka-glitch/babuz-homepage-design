import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  { name: "Молоко 3.2%", price: "89₽", rating: 4.8, image: "🥛" },
  { name: "Хлеб белый", price: "45₽", rating: 4.9, image: "🍞" },
  { name: "Яйца куриные", price: "120₽", rating: 4.7, image: "🥚" },
  { name: "Сыр Российский", price: "450₽", rating: 4.9, image: "🧀" },
  { name: "Помидоры", price: "180₽", rating: 4.6, image: "🍅" },
  { name: "Йогурт натуральный", price: "75₽", rating: 4.8, image: "🥤" },
];

const Products = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Топ продаж
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-muted flex items-center justify-center text-6xl">
                {product.image}
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-secondary text-secondary" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                
                <h3 className="font-semibold mb-2 text-foreground">{product.name}</h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  <Button 
                    size="icon" 
                    className="bg-primary hover:bg-primary/90 group-hover:scale-110 transition-transform"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
