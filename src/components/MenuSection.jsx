import MenuCard from './MenuCard';

const menuItems = [
  { id: 1, name: "Espresso", price: "$3.50", category: "Hot" },
  { id: 2, name: "Cappuccino", price: "$4.50", category: "Hot" },
  { id: 3, name: "Latte", price: "$4.75", category: "Hot" },
  { id: 4, name: "Iced Coffee", price: "$3.75", category: "Cold" },
  { id: 5, name: "Mocha", price: "$5.00", category: "Hot" },
  { id: 6, name: "Americano", price: "$3.25", category: "Hot" },
  { id: 7, name: "Cold Brew", price: "$4.25", category: "Cold" },
  { id: 8, name: "Frappuccino", price: "$5.50", category: "Cold" }
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Special Menu</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Discover your perfect cup of coffee</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;