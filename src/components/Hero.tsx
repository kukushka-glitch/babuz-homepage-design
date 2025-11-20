import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-groceries.jpg";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Fresh groceries" 
          className="w-full h-full object-cover mix-blend-overlay opacity-40"
        />
      </div>
      
      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Быстрая доставка<br />продуктов на дом
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Свежие продукты к вашему столу за 2 часа
          </p>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 h-auto animate-fade-in group"
            style={{ animationDelay: "0.2s" }}
          >
            Заказать сейчас
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
