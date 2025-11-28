import { User, Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-slide-in-down">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-4xl font-bold">
            <span className="text-primary">БА</span>
            <span className="text-secondary">БУЗ</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Главная
          </a>
          <a href="#catalog" className="text-foreground hover:text-primary transition-colors font-medium">
            Каталог
          </a>
          <a href="#offers" className="text-foreground hover:text-primary transition-colors font-medium">
            Акции
          </a>
          <a href="#delivery" className="text-foreground hover:text-primary transition-colors font-medium">
            Доставка
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Контакты
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex hover-scale">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover-scale">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
