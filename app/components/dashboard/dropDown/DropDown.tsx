"use client"
import { useState, useRef } from 'react';

interface AccordionProps {
  title: string;
  content: React.ReactNode; // Accept JSX content
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      {/* Accordion Header */}
      <div
        onClick={toggleAccordion}
        className="flex justify-between items-center bg-gray-800 text-white px-4 py-3 rounded-md cursor-pointer"
      >
        <h2 className="font-semibold text-lg">{title}</h2>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Accordion Content */}
      <div
        ref={contentRef}
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className="bg-white text-gray-800 px-4 py-3 rounded-b shadow">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
