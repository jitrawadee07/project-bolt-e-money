import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign } from 'lucide-react';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#92CA68] flex flex-col items-center justify-center">
      <div className="animate-bounce">
        <div className="bg-white p-4 rounded-full">
          <DollarSign className="w-12 h-12 text-[#4CD080]" />
        </div>
      </div>
      <h1 className="text-white text-3xl font-bold mt-6">e-money</h1>
      <p className="text-white/80 mt-2">Your Digital Wallet Solution</p>
    </div>
  );
};

export default SplashScreen;