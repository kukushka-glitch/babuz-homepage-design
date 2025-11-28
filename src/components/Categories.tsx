import dairyImage from "@/assets/category-dairy.jpg";
import meatImage from "@/assets/category-meat.jpg";
import produceImage from "@/assets/category-produce.jpg";
import cheeseImage from "@/assets/category-cheese.jpg";
import bakeryImage from "@/assets/category-bakery.jpg";
import spicesImage from "@/assets/category-spices.jpg";

const categories = [
  { name: "Молочные продукты", image: dairyImage },
  { name: "Мясо и птица", image: meatImage },
  { name: "Овощи и фрукты", image: produceImage },
  { name: "Сыры", image: cheeseImage },
  { name: "Хлеб и выпечка", image: bakeryImage },
  { name: "Специи", image: spicesImage },
];

const Categories = () => {
  return (
    <section id="catalog" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">
          Популярные категории
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <article
              key={index}
              className="group cursor-pointer animate-fade-in hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="aspect-square relative">
                  <img
                    src={category.image}
                    alt={`${category.name} - купить с доставкой`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold text-center text-sm md:text-base">
                    {category.name}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
