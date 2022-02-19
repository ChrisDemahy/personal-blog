import React from 'react';

export interface ParagraphBodyProps {
  initial?: string;
  paragraphs?: string[];
}

export const ParagraphBody: React.FC<ParagraphBodyProps> = (props) => {
  // Default values

  // [
  //   `Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
  //   libero lectus. Fusce vehicula dictum mi. In non dolor at sem
  //   ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse
  //   quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi
  //   sit amet tellus scelerisque tortor semper posuere.`,
  //   `Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
  //   libero lectus. Fusce vehicula dictum mi. In non dolor at sem
  //   ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse
  //   quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi
  //   sit amet tellus scelerisque tortor semper posuere.`,
  //   `Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
  //   libero lectus. Fusce vehicula dictum mi. In non dolor at sem
  //   ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse
  //   quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi
  //   sit amet tellus scelerisque tortor semper posuere.`
  // ]

  const paragraphs = props.paragraphs || [
    `Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
    libero lectus. Fusce vehicula dictum mi. In non dolor at sem
    ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse
    quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi
    sit amet tellus scelerisque tortor semper posuere.`,
    `Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
    libero lectus. Fusce vehicula dictum mi. In non dolor at sem
    ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse
    quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi
    sit amet tellus scelerisque tortor semper posuere.`,
    `Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
    libero lectus. Fusce vehicula dictum mi. In non dolor at sem
    ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse
    quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi
    sit amet tellus scelerisque tortor semper posuere.`,
  ];

  return (
    <>
      {/* Show the initial paragraph */}
      {props.initial && <p className="py-6">{props.initial}</p>}

      {/* Then the "body" paragraphs */}
      <ol>
        {paragraphs.map((paragraph, index) => (
          <li key={index} className="py-3">
            {paragraph}
          </li>
        ))}
      </ol>
    </>
  );
};
