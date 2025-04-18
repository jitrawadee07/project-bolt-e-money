import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import LanguageSelector from '../components/LanguageSelector';

const OnboardingSlide = ({ 
  title, 
  image, 
  currentStep, 
  totalSteps 
}: { 
  title: string;
  image: string;
  currentStep: number;
  totalSteps: number;
}) => (
  <div className="flex flex-col items-center justify-between h-full">
    <LanguageSelector />
    <div className="flex-1 flex flex-col items-center justify-center px-6">
      <h1 className="text-[40px] leading-tight font-black text-center mb-16 max-w-[280px]">
        {title}
      </h1>
      <img src={image} alt={title} className="w-64 h-64 object-contain mb-16" />
    </div>
    <div className="w-full flex justify-center gap-2 mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-1 rounded-full transition-all duration-300 ${
            index === currentStep ? 'w-8 bg-[#92CA68]' : 'w-2 bg-gray-200'
          }`}
        />
      ))}
    </div>
  </div>
);

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Set budgets and achieve your financial goals",
      image: "https://cdn3d.iconscout.com/3d/premium/thumb/saving-money-5349268-4468989.png",
    },
    {
      title: "Get insights with detailed analytics and reports",
      image: "https://cdn3d.iconscout.com/3d/premium/thumb/money-growth-5349262-4468983.png",
    }
  ];

  const handleNext = () => {
    if (currentStep < slides.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate('/welcome');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 relative">
        <OnboardingSlide
          title={slides[currentStep].title}
          image={slides[currentStep].image}
          currentStep={currentStep}
          totalSteps={slides.length}
        />
      </div>
      <div className="p-6">
        <button
          onClick={handleNext}
          className="w-full bg-[#92CA68] text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2"
        >
          {currentStep === slides.length - 1 ? 'Get Started' : 'Next'}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Onboarding;