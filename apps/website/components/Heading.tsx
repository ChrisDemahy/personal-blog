import React from 'react';

export interface HeadingProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

// Heading component for Styling
export const Heading: React.FC<HeadingProps> = (props) => {
  switch (props.type) {
    case 'h1':
      return <h1 className="py-2 font-sans text-6xl"> {props.children}</h1>;

    case 'h2':
      return <h2 className="py-2 font-sans text-5xl"> {props.children}</h2>;

    case 'h3':
      return <h3 className="py-2 font-sans  text-4xl"> {props.children}</h3>;

    case 'h4':
      return <h4 className="py-2 font-sans  text-3xl"> {props.children}</h4>;

    case 'h5':
      return <h5 className="py-2 font-sans  text-2xl"> {props.children}</h5>;

    case 'h6':
      return <h6 className="py-2 font-sans  text-1xl"> {props.children}</h6>;
  }
};

export default Heading;
