import React from 'react';
import ArticleTitle from '../components/ArticleTitle';
import BackButton from '../components/BackButton';
import BlockQuote from '../components/BlockQuote';
import Heading from '../components/Heading';
import Navigation from '../components/Navigation';
import { ParagraphBody } from '../components/ParagraphBody';

export const Page: React.FC = () => {
  return (
    <body className="bg-gray-100 font-sans leading-normal tracking-normal">
      {/* <Navigation /> */}

      <nav id="header" className="fixed w-full z-10 top-0">
        <div
          id="progress"
          className="h-1 z-20 top-0"
          // FIXME
          // style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"
        ></div>

        <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
          <div className="pl-4">
            <a
              className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"
              href="#"
            >
              Minimal Blog
            </a>
          </div>

          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
                  href="#"
                >
                  Active
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
                  href="#"
                >
                  link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div
          className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
          // style="font-family:Georgia,serif;"
        >
          <div className="font-sans">
            {/* <p className="text-base md:text-sm text-green-500 font-bold">
              &lt;{' '}
              <a
                href="#"
                className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
              >
                BACK TO BLOG
              </a>
            </p> */}
            <BackButton />
            {/* <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              Welcome to Minimal Blog
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-600">
              Published 19 February 2019
            </p> */}
            <ArticleTitle
              name={'Welcome to Minimal Blog'}
              prettyDate={'Published 19 February 2019'}
            />
          </div>

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
            Tailwind CSS classs (although there are a few hardcoded style tags).
            If you are going to use this in your project, you will want to
            convert the classs into components.
          </p>

          <Heading type="h1">Heading 1</Heading>
          <h2 className="py-2 font-sans">Heading 2</h2>
          <h3 className="py-2 font-sans">Heading 3</h3>
          <h4 className="py-2 font-sans">Heading 4</h4>
          <h5 className="py-2 font-sans">Heading 5</h5>
          <h6 className="py-2 font-sans">Heading 6</h6>

          <ParagraphBody />
        </div>

        <div className="text-base md:text-sm text-gray-500 px-4 py-6">
          Tags:{' '}
          <a
            href="#"
            className="text-base md:text-sm text-green-500 no-underline hover:underline"
          >
            Link
          </a>{' '}
          .{' '}
          <a
            href="#"
            className="text-base md:text-sm text-green-500 no-underline hover:underline"
          >
            Link
          </a>
        </div>

        <div className="font-sans flex justify-between content-center px-4 pb-12">
          <div className="text-left">
            <span className="text-xs md:text-sm font-normal text-gray-600">
              &lt; Previous Post
            </span>
            <br />
            <p>
              <a
                href="#"
                className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
              >
                Blog title
              </a>
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs md:text-sm font-normal text-gray-600">
              Next Post &gt;
            </span>
            <br />
            <p>
              <a
                href="#"
                className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
              >
                Blog title
              </a>
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-400 shadow">
        <div className="container max-w-4xl mx-auto flex py-8">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full md:w-1/2 ">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">About</h3>
                <p className="py-4 text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas vel mi ut felis tempus commodo nec id erat.
                  Suspendisse consectetur dapibus velit ut lacinia.
                </p>
              </div>
            </div>

            <div className="flex w-full md:w-1/2">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">Social</h3>
                <ul className="list-reset items-center text-sm pt-3">
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                      href="#"
                    >
                      Add social link
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                      href="#"
                    >
                      Add social link
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                      href="#"
                    >
                      Add social link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
};

export default Page;
