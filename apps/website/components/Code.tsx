import React from 'react';

export const Code: React.FC = (props) => {
  return (
    <pre className="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
      <code className="break-words whitespace-pre-wrap">{props.children}</code>
    </pre>
  );
};

export default Code;
