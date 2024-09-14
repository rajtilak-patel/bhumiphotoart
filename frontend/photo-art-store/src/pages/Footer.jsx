const Footer=()=>{
    return (
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Flipkart Clone. All rights reserved.</p>
          <div className="mt-4">
            <a href="/" className="text-gray-300 hover:text-white mx-2">Terms</a>
            <a href="/" className="text-gray-300 hover:text-white mx-2">Privacy</a>
            <a href="/" className="text-gray-300 hover:text-white mx-2">Contact</a>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;