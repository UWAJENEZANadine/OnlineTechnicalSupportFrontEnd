import React, { useState, useEffect } from 'react';
import { Typography } from '@material-tailwind/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/Home.css';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1602016736566-7ed6a58894bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1587614382231-d1590f0039e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 10) % images.length);
    }, 3000);

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
        <div className='content p-5'>
        <p className='text-blue-500 pt-20  text-4xl font-medium text-center'>
          Welcome to online Technical Support
        </p>
        {/* <Typography className="text-white">Fix any computer related isue@ For Free </Typography>
        <Typography className="">Virus removal, software installation & configuration, computer performance,peripheral support.</Typography>
  
        <Typography className="">Chat with tech Support Using your Emails.</Typography> */}
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
