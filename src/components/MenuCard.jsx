import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/favoritesSlice';

const MenuCard = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.includes(item.id);

  const coffeeImages = {
    1: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400',
    2: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400',
    3: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400',
    4: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400',
    5: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400',
    6: 'https://images.unsplash.com/photo-1459257831348-f0cdd359235f?w=400',
    7: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400',
    8: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2" style={{
              animationDelay: "0.3s",
              animationFillMode: "forwards",
              transition: "all 0.6s ease-in-out",
            }} >
      <div className="relative">
        <img 
          src={coffeeImages[item.id]} 
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => dispatch(toggleFavorite(item.id))}
          className={`absolute top-3 right-3 p-2 rounded-full ${
            isFavorite 
              ? 'bg-red-500 text-white scale-110' 
              : 'bg-white text-gray-400 hover:text-red-500'
          }`}
        >
          <svg className="w-6 h-6" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <div className="absolute top-3 left-3 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {item.category}
        </div>
      </div>
      
      <div className="p-5" >
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-amber-600 dark:text-amber-500">{item.price}</span>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;