import React from 'react';
import ArticleTitle from '../components/ArticleTitle';
import Author from '../components/Author';
import BackButton from '../components/BackButton';
import BlockQuote from '../components/BlockQuote';
import BottomNavigation from '../components/BottomNavigation';
import Code from '../components/code';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Navigation from '../components/Navigation';
import NewsLetterHero from '../components/NewsLetterHero';
import { ParagraphBody } from '../components/ParagraphBody';
import Spacer from '../components/Spacer';
import Tags from '../components/Tags';

export const page = () => {
  return (
    <div>
      <div className="bg-gray-100 font-sans leading-normal tracking-normal">
        {/* Navigation Component */}
        <Navigation />

        <div className="container w-full md:max-w-3xl mx-auto pt-20">
          <div
            className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
            style={{ fontFamily: 'Georgia,serif' }}
            /*style="font-family:Georgia,serif;" */
          >
            <BackButton />
            <ArticleTitle
              name="Welcome to Minimal Blog"
              prettyDate="Published 19 February 2019"
            />

            <p className="py-6">
              👋 Welcome fellow{' '}
              <a
                className="text-green-500 no-underline hover:underline"
                href="https://www.tailwindcss.com"
              >
                Tailwind CSS
              </a>{' '}
              and miminal monochrome blog fan. This starter template provides a
              starting point to create your own minimal monochrome blog using
              Tailwind CSS and vanilla Javascript.
            </p>

            <p className="py-6">
              The basic blog page layout is available and all using the default
              Tailwind CSS classs (although there are a few hardcoded style
              tags). If you are going to use this in your project, you will want
              to convert the classes into components.
            </p>

            {/* <Heading type="h1">Heading 1</Heading>
            <h2 className="py-2 font-sans text-5xl">Heading 2</h2>
            <h3 className="py-2 font-sans  text-4xl">Heading 3</h3>
            <h4 className="py-2 font-sans  text-3xl">Heading 4</h4>
            <h5 className="py-2 font-sans  text-2xl">Heading 5</h5>
            <h6 className="py-2 font-sans  text-1xl">Heading 6</h6> */}

            <Spacer />

            <ParagraphBody
              initial="Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
              purus, in mattis tortor sollicitudin pretium. Phasellus at diam
              posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi
              diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
              condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
              turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
              rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
              molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
              molestie quam fermentum. Donec ac pretium diam. Suspendisse sed
              odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Duis
              nec nulla eget sem dictum elementum."
              paragraphs={[
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
              ]}
            />

            {/* Block Quote for articles */}
            <BlockQuote>
              Example of blockquote - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
              amet ligula.
            </BlockQuote>

            {/* Example Code Block */}
            <p className="py-6">Example code block:</p>
            <Code>
              {`
                &lt;header class="site-header outer"&gt; &lt;div
                class="inner"&gt;
                 {{& gt; "site-nav"}} 
                &lt;/div&gt; &lt;/header&gt;  
                `}
            </Code>
          </div>

          {/* Article Tags */}
          <Tags />

          {/* First Spacer */}
          <Spacer />

          {/* Hero Asking about News Letter */}
          <NewsLetterHero />

          {/* Auther */}
          <Author />
          {/*
          
          
          {/* Second Spacer */}
          <Spacer />

          {/* Bottom navigation  */}
          <BottomNavigation />
        </div>

        {/* Page Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default page;
