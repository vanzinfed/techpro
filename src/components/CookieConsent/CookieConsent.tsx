import React, { useEffect, useState } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg border-t border-gray-200 p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 text-center sm:text-left">
          Нажимая кнопку «СОГЛАСЕН», Вы подтверждаете то, что Вы проинформированы об использовании cookies на нашем сайте.
        </p>
        <button
          onClick={handleAccept}
          className="px-6 py-2 bg-[#3B82F6] text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
        >
          СОГЛАСЕН
        </button>
      </div>
    </div>
  );
};

export default CookieConsent; 