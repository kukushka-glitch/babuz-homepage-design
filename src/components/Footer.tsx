import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="text-primary">БА</span>
              <span className="text-secondary">БУЗ</span>
            </div>
            <p className="text-background/80">
              Ваш надежный партнер в мире свежих продуктов с доставкой на дом
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#catalog" className="text-background/80 hover:text-primary transition-colors">Каталог</a></li>
              <li><a href="#offers" className="text-background/80 hover:text-primary transition-colors">Акции</a></li>
              <li><a href="#delivery" className="text-background/80 hover:text-primary transition-colors">Доставка</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span>info@babuz.ru</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <MapPin className="h-4 w-4" />
                <span>Москва, ул. Примерная, 1</span>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Мы в соцсетях</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <p className="text-background/80 text-sm">
              Работаем ежедневно<br />
              с 8:00 до 23:00
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>© 2024 БАБУЗ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
