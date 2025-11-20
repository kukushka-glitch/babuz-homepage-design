import { Badge, Percent, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const promotions = [
  {
    icon: Percent,
    title: "Скидки до 50%",
    description: "На молочные продукты",
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "Товар дня",
    description: "Свежий хлеб -30%",
    color: "secondary",
  },
  {
    icon: Badge,
    title: "Новинки",
    description: "Фермерские продукты",
    color: "primary",
  },
];

const Promotions = () => {
  return (
    <section id="offers" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Акции и предложения
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {promotions.map((promo, index) => {
            const Icon = promo.icon;
            const bgColor = promo.color === "primary" ? "bg-primary" : "bg-secondary";
            
            return (
              <div
                key={index}
                className={`${bgColor} rounded-2xl p-8 text-white shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Icon className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                <p className="text-white/90 mb-6">{promo.description}</p>
                <Button 
                  variant="secondary" 
                  className={promo.color === "primary" ? "bg-secondary hover:bg-secondary/90" : "bg-primary hover:bg-primary/90"}
                >
                  Подробнее
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
