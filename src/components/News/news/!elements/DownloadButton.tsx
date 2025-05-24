import React from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  href: string;
  text?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ href, text = 'Скачать' }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center px-4 py-2 bg-[#151d50] hover:bg-[#30378f] text-white rounded-lg transition-colors text-sm md:text-base"
    >
      <Download size={18} className="mr-2" />
      {text}
    </a>
  );
};

export default DownloadButton; 