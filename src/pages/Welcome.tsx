import React from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../components/LanguageSelector';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 relative">
        <LanguageSelector />
        <div className="flex-1 flex flex-col items-center justify-center px-6 h-full">
          <h1 className="text-[40px] leading-tight font-black text-center mb-16 max-w-[280px]">
            Lorem ipsum dolor sit amet consectetur. Mauris
          </h1>
          <img 
            src="https://cdn3d.iconscout.com/3d/premium/thumb/hand-with-coins-5349260-4468981.png" 
            alt="Welcome" 
            className="w-64 h-64 object-contain mb-16" 
          />
          <div className="w-full flex flex-col gap-4">
            <button
              onClick={() => navigate('/login')}
              className="w-full border-2 border-[#92CA68] text-[#92CA68] py-4 rounded-full font-semibold"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="w-full bg-[#92CA68] text-white py-4 rounded-full font-semibold"
            >
              New here? Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;