import React from 'react';

export interface ArticleTitleprops {
  name: string;
  prettyDate: string;
}
export const ArticleTitle: React.FC<ArticleTitleprops> = (props) => {
  return (
    <>
      <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
        {props.name}
      </h1>
      <p className="text-sm md:text-base font-normal text-gray-600">
        {props.prettyDate}
      </p>
    </>
  );
};

export default ArticleTitle;
