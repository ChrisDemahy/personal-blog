import React from 'react';

export const Tags: React.FC = (props) => {
  return (
    <div className="text-base md:text-sm text-gray-500 px-4 py-6">
      Tags:{' '}
      <a
        href="#"
        className="text-base md:text-sm text-green-500 no-underline hover:underline"
      >
        Link
      </a>
      .
      <a
        href="#"
        className="text-base md:text-sm text-green-500 no-underline hover:underline"
      >
        Link
      </a>
    </div>
  );
};
export default Tags;
