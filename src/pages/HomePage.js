import React, { useState, useEffect } from 'react';
import { Typography } from '@material-tailwind/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/Home.css';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 5) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='items-content'>
      <div
        className='item1'
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '80vh',
        }}
      >
        <div className='content'>
        <Typography className='text-white text-4xl font-medium'>
          Support
        </Typography>
        <Typography className="text1">Fix any computer related isuue@ For Free </Typography>
        <Typography className="text2">Virus removal, software installation & configuration, computer performance,peripheral support.</Typography>
  
        <Typography className="text3">Chat with tech Support Using your Emails.</Typography>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
