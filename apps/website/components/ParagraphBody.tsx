import React from 'react';

export interface ParagraphBodyProps {
  initial?: string;
  paragraphs: string[];
}

export const ParagraphBody: React.FC<ParagraphBodyProps> = (props) => {
  return (
    <>
      {/* Show the initial paragraph */}
      {props.initial && <p className="py-6">{props.initial}</p>}

      {/* Then the "body" paragraphs */}
      <ol>
        {props.paragraphs.map((paragraph, index) => (
          <li key={index} className="py-3">
            {paragraph}
          </li>
        ))}
      </ol>
    </>
  );
};
