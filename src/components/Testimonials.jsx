const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    image: "https://i.pravatar.cc/150?img=1",
    text: "CupVerse has become my morning ritual. The quality is unmatched, and the staff always greets me with a smile. Best coffee in town!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Coffee Enthusiast",
    image: "https://i.pravatar.cc/150?img=13",
    text: "As a coffee lover, I've tried many places, but CupVerse stands out. Their cold brew is perfection, and the atmosphere is incredibly cozy.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Local Business Owner",
    image: "https://i.pravatar.cc/150?img=5",
    text: "I host all my client meetings here. The ambiance is professional yet relaxed, and the cappuccinos are consistently excellent!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-amber-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
              style={{
                animationDelay: "0.3s",
                animationFillMode: "forwards",
                transition: "all 0.6s ease-in-out",
              }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
