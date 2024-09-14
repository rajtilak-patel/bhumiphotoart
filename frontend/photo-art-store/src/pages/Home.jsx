import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductCard from '../components/ProductCard';
import Slider from 'react-slick';
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <Banner />
      <CategorySection />
      <ProductCarousel products={products}/>
    </div>
  );
};



const images = [
  'https://images.unsplash.com/photo-1726175938084-16ac3cd61e33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1726182875049-a8283fed88da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1726180506710-400400e6be44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1726161113123-98d414829399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D',
];


function Banner (){
  const settings = {
    dots: true,             // Show dots below the banner
    infinite: true,         // Infinite loop
    speed: 500,             // Transition speed (ms)
    slidesToShow: 1,        // Show one slide at a time
    slidesToScroll: 1,      // Scroll one slide at a time
    autoplay: true,         // Autoplay enabled
    autoplaySpeed: 3000,    // Autoplay delay (ms)
    arrows: true,           // Show navigation arrows
  };

  return (
    <div className="max-w-7xl mx-auto my-4">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};


const categories = [
  { name: 'Electronics', img: 'https://via.placeholder.com/150' },
  { name: 'Fashion', img: 'https://via.placeholder.com/150' },
  { name: 'Home Appliances', img: 'https://via.placeholder.com/150' },
  { name: 'Beauty', img: 'https://via.placeholder.com/150' },
  { name: 'Books', img: 'https://via.placeholder.com/150' },
  { name: 'Toys', img: 'https://via.placeholder.com/150' },
];

function CategorySection (){
  return (
    <div className="my-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category, idx) => (
          <div key={idx} className="text-center">
            <img
              className="w-24 h-24 object-cover mx-auto mb-2"
              src={category.img}
              alt={category.name}
            />
            <h3 className="text-lg font-medium">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
const ProductCarousel = ({ products }) => {
  console.log(products);
  return (
    <div className="my-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
