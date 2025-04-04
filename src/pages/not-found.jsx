import React from 'react';
import { Link } from 'react-router';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col justify-center items-center 
            bg-gradient-to-br from-blue-600 to-green-500 
            text-white overflow-hidden"
    >
      <div
        className="text-center max-w-md px-4"
        style={{ userSelect: 'none', pointerEvents: 'none' }}
      >
        <div className="relative">
          <h1
            className="text-[12rem] md:text-[20rem] font-black 
                        text-white/10 absolute top-1/2 left-1/2 
                        transform -translate-x-1/2 -translate-y-1/2 
                        tracking-wider"
          >
            404
          </h1>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Oops! Lost in Space</h2>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              The page you're looking for seems to have wandered off into the digital wilderness.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <Button onClick={() => window.location.replace('/')} type="white" label={'Go Home'} />
      </div>
    </div>
  );
};

export default NotFound;
