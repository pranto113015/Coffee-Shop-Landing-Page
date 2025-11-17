const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Founded in 2015, CupVerse began with a simple dream: to create a space where coffee lovers could experience the finest brews in a warm, welcoming atmosphere.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              We source our beans directly from sustainable farms around the world, ensuring every cup not only tastes incredible but supports communities and protects the environment.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Our expert baristas are trained in the art of coffee making, from traditional espresso techniques to innovative brewing methods. Whether you're a coffee connoisseur or just beginning your journey, we're here to guide you to your perfect cup.
            </p>
            <div className="flex space-x-8">
              <div>
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-500">10K+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-500">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Coffee Varieties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-500">8+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600" 
              alt="Coffee shop interior"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;