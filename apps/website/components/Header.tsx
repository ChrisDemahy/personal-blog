import React from 'react';

export interface HeaderProps {
  title: string | "Chris Demahy's Personal Blog";
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div>
      <title></title>
      <meta name="author" content="name" />
      <meta name="description" content="description here" />
      <meta name="keywords" content="keywords,here" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
      />
    </div>
  );
};
