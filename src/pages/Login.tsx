import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Phone } from 'lucide-react';
import LanguageSelector from '../components/LanguageSelector';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/verify');
  };

  const handlePhoneLogin = () => {
    navigate('/phone-login');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <div className="p-4 flex justify-between items-start">
        <LanguageSelector />
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col px-6 pt-12">
        <h1 className="text-[40px] font-black mb-2">Log in</h1>
        <p className="text-gray-600 mb-8">
          Welcome <span className="text-black">please login to use</span>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-gray-600">
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="@gmail.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#92CA68] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#92CA68] text-white py-4 rounded-full font-semibold mt-4"
          >
            Continue
          </button>
        </form>

        <div className="mt-auto mb-8">
          <p className="text-center text-gray-600 mb-4">Or log in with</p>
          <button
            onClick={handlePhoneLogin}
            className="w-full border border-gray-300 py-4 rounded-full font-semibold flex items-center justify-center gap-2 mb-4"
          >
            <Phone className="w-5 h-5" />
            Phone number
          </button>
          <button
            onClick={() => console.log('Google login')}
            className="w-full border border-gray-300 py-4 rounded-full font-semibold flex items-center justify-center gap-2"
          >
            <img 
              src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
              alt="Google"
              className="w-5 h-5"
            />
            Google mail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;