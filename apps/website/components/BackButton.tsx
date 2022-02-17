import React from 'react';

export const BackButton: React.FC = (props) => {
  return (
    <div className="font-sans">
      <p className="text-base md:text-sm text-green-500 font-bold">
        &lt;{' '}
        <a
          href="#"
          className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
        >
          BACK TO BLOG
        </a>
      </p>
    </div>
  );
};
export default BackButton;
