import React from 'react';
// import './Page.css'; // Import styles for customization

interface PageProps {
  children: React.ReactNode;
  pageNumber: number;
  isVisible: boolean; // Use isVisible instead of isActive
  isNext?: boolean; // Optional prop for styling the next page
}

const Page: React.FC<PageProps> = ({ children, pageNumber, isVisible, isNext }) => {
  const visibilityClass = isVisible ? 'visible' : 'hidden'; // Toggle visibility class
  const nextPageClass = isNext ? 'next-page' : ''; // Add optional next page styling

  return (
    <div className={`page ${visibilityClass} ${nextPageClass}`}>
      <div className="page-content">{children}</div>
      <div className="page-number">{pageNumber}</div>
    </div>
  );
};

export default Page;