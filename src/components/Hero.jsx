const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-50 to-orange-100 dark:from-gray-800 dark:to-gray-900 pt-16"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4 animate-slide-down">
            Welcome to CupVerse
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
            Where Every Cup Tells a Story
          </p>
          <button
            onClick={() =>
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105"
          >
            Explore Our Menu
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 opacity-0 animate-fade-in"
            style={{
              animationDelay: "0.3s",
              animationFillMode: "forwards",
              transition: "all 0.6s ease-in-out",
            }}
          >
            <div
              className="text-4xl mb-3 transform hover:scale-110"
              style={{ transition: "transform 0.5s ease-in-out" }}
            >
              ☕
            </div>
            <h3 className="font-bold text-lg dark:text-white mb-2">
              Premium Coffee
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Handpicked beans from around the world
            </p>
          </div>
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 opacity-0 animate-fade-in"
            style={{
              animationDelay: "0.5s",
              animationFillMode: "forwards",
              transition: "all 0.6s ease-in-out",
            }}
          >
            <div
              className="text-4xl mb-3 transform hover:scale-110"
              style={{ transition: "transform 0.5s ease-in-out" }}
            >
              👨‍🍳
            </div>
            <h3 className="font-bold text-lg dark:text-white mb-2">
              Expert Baristas
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Crafted with passion and precision
            </p>
          </div>
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 opacity-0 animate-fade-in"
            style={{
              animationDelay: "0.7s",
              animationFillMode: "forwards",
              transition: "all 0.6s ease-in-out",
            }}
          >
            <div
              className="text-4xl mb-3 transform hover:scale-110"
              style={{ transition: "transform 0.5s ease-in-out" }}
            >
              🏡
            </div>
            <h3 className="font-bold text-lg dark:text-white mb-2">
              Cozy Atmosphere
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Perfect space to relax and unwind
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
