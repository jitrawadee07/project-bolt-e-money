import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [isResending, setIsResending] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const phoneNumber = '+66849466260'; // This should come from your auth context/state
  const maskedPhone = phoneNumber.replace(/(\d{3})(\d{4})(\d{3})/, '$1****$3');

  useEffect(() => {
    if (timeLeft > 0 && !isResending) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isResending]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if OTP is complete
    if (newOtp.every(digit => digit) && newOtp.join('') === '846109') {
      // TODO: Replace with actual OTP validation
      navigate('/create-pin');
    } else if (newOtp.every(digit => digit)) {
      setError('The OTP is incorrect. Please try again.');
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOTP = async () => {
    setIsResending(true);
    setTimeLeft(60);
    setError('');
    setOtp(['', '', '', '', '', '']);
    // TODO: Implement actual OTP resend logic
    setTimeout(() => setIsResending(false), 1000);
  };

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
        <h1 className="text-[40px] font-black mb-4">OTP Verification</h1>
        <p className="text-gray-600 mb-12">
          We have sent an OTP to {maskedPhone}
        </p>

        <div className="flex justify-between gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(index, e.target.value)}
              onKeyDown={e => handleKeyDown(index, e)}
              className={`w-12 h-12 text-center text-2xl font-semibold rounded-lg border-2 
                ${error ? 'border-red-500' : 'border-gray-200'} 
                focus:border-[#92CA68] focus:outline-none`}
            />
          ))}
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-500 mb-4">
            <span className="text-sm">{error}</span>
          </div>
        )}

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm mb-2">Referral : we3f8</p>
          <div className="flex items-center justify-center gap-1 text-sm">
            <span className="text-gray-500">Didn't receive the OTP?</span>
            {timeLeft > 0 ? (
              <span className="text-gray-500">Try again in {timeLeft} secs</span>
            ) : (
              <button
                onClick={handleResendOTP}
                disabled={isResending}
                className="text-[#92CA68] font-medium"
              >
                Resend OTP
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;