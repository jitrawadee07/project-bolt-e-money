import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, SmilePlus } from 'lucide-react';

const CreatePIN = () => {
  const [pin, setPin] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleNumberClick = (number: string) => {
    if (pin.length < 6) {
      setPin([...pin, number]);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handlePINComplete = () => {
    if (pin.length === 6) {
      // TODO: Implement actual PIN creation logic
      navigate('/dashboard');
    }
  };

  React.useEffect(() => {
    handlePINComplete();
  }, [pin]);

  const renderPINDots = () => {
    return Array(6).fill(0).map((_, index) => (
      <div
        key={index}
        className={`w-3 h-3 rounded-full ${
          pin.length > index ? 'bg-[#92CA68]' : 'border-2 border-gray-200'
        }`}
      />
    ));
  };

  const renderNumberButton = (number: string) => (
    <button
      onClick={() => handleNumberClick(number)}
      className="w-20 h-20 text-3xl font-semibold text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
    >
      {number}
    </button>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <div className="p-4 flex justify-end">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col px-6 pt-12">
        <h1 className="text-[40px] font-black mb-4">Create a PIN code</h1>
        <p className="text-gray-600 mb-12">
          For safety in use
        </p>

        <div className="flex justify-center gap-4 mb-16">
          {renderPINDots()}
        </div>

        <div className="grid grid-cols-3 gap-8 justify-items-center">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(number => 
            renderNumberButton(number)
          )}
          <button className="w-20 h-20 flex items-center justify-center">
            <SmilePlus className="w-8 h-8 text-gray-400" />
          </button>
          {renderNumberButton('0')}
          <button 
            onClick={handleDelete}
            className="w-20 h-20 flex items-center justify-center"
          >
            <X className="w-8 h-8 text-gray-800" />
          </button>
        </div>

        <button
          onClick={() => {}}
          className="text-gray-500 text-sm mt-8 underline text-center"
        >
          Forgot PIN?
        </button>
      </div>
    </div>
  );
};

export default CreatePIN;