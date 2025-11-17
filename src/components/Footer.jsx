const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-4">CupVerse</h3>
            <p className="text-gray-400">
              Crafting perfect moments, one cup at a time since 2015.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-gray-400 hover:text-amber-500">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber-500">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-amber-500"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-amber-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers and updates!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border-none focus:outline-none"
              />
              <button className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} CupVerse. All rights reserved by
            CupVerse.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
