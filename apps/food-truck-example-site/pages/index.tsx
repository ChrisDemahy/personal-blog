export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <>
<body>
  {/* Navigation */}
  <nav className="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
    <div className="flex items-center">
      <img src='dist/assets/Logo_black.svg' alt="Logo" className="h-4" />
    </div>
    <ul className="font-montserrat items-center hidden md:flex">
      <li className="mx-3 ">
        <a className="growing-underline" href="howitworks">
          How it works
        </a>
      </li>
      <li className="growing-underline mx-3">
        <a href="features">Features</a>
      </li>
      <li className="growing-underline mx-3">
        <a href="pricing">Pricing</a>
      </li>
    </ul>
    <div className="font-montserrat hidden md:block">
      <button className="mr-6">Login</button>
      <button className="py-2 px-4 text-white bg-black rounded-3xl">
        Signup
      </button>
    </div>
    <div id="showMenu" className="md:hidden">
      <img src='dist/assets/logos/Menu.svg' alt="Menu icon" />
    </div>
  </nav>
  <div id='mobileNav' className="hidden px-4 py-6 fixed top-0 left-0 h-full w-full bg-secondary z-20 animate-fade-in-down">
    <div id="hideMenu" className="flex justify-end">
      <img src='dist/assets/logos/Cross.svg' alt="" className="h-16 w-16" />
    </div>
    <ul className="font-montserrat flex flex-col mx-8 my-24 items-center text-3xl">
      <li className="my-6">
        <a href="howitworks">How it works</a>
      </li>
      <li className="my-6">
        <a href="features">Features</a>
      </li>
      <li className="my-6">
        <a href="pricing">Pricing</a>
      </li>
    </ul>
  </div>

   {/* Hero */}
  <section
    className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
    <div className="md:flex-1 md:mr-10">
      <h1 className="font-pt-serif text-5xl font-bold mb-7">
        A headline for your
        <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
          cool website
        </span>
      </h1>
      <p className="font-pt-serif font-normal mb-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum
        tempore consectetur voluptas, cumque nobis laboriosam voluptatem.
      </p>
      <div className="font-montserrat">
        <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
          Call to action
        </button>
        <button className="px-6 py-4 border-2 border-black border-solid rounded-lg">
          Secondary action
        </button>
      </div>
    </div>
    <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
      <div className="relative">
        <img src='dist/assets/Highlight1.svg' alt="" className="absolute -top-16 -left-10" />
      </div>
      <img src='dist/assets/food-truck.png' alt="Macbook" />
      <div className="relative">
        <img src='dist/assets/Highlight2.svg' alt="" className="absolute -bottom-10 -right-6" />
      </div>
    </div>
  </section>

  {/* How it works */}
  <section className="bg-black text-white sectionSize">
    <div>
      <h2 className="secondaryTitle bg-underline2 bg-100%">How it works</h2>
    </div>
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 mx-8 flex flex-col items-center my-4">
        <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
          1
        </div>
        <h3 className="font-montserrat font-medium text-xl mb-2">Eat</h3>
        <p className="text-center font-montserrat">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex-1 mx-8 flex flex-col items-center my-4">
        <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
          2
        </div>
        <h3 className="font-montserrat font-medium text-xl mb-2">Sleep</h3>
        <p className="text-center font-montserrat">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex-1 mx-8 flex flex-col items-center my-4">
        <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
          3
        </div>
        <h3 className="font-montserrat font-medium text-xl mb-2">Rave</h3>
        <p className="text-center font-montserrat">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </section>

  {/* Features  */}
  <section className="sectionSize bg-secondary">
    <div>
      <h2 className="secondaryTitle bg-underline3 bg-100%">Features</h2>
    </div>
    <div className="md:grid md:grid-cols-2 md:grid-rows-2">

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Feature #1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Feature #2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Feature #3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src='dist/assets/logos/Heart.svg' alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Feature #4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quisquam voluptate praesentium tenetur earum repellendus! Dicta
            culpa consequuntur saepe quibusdam labore, est ex ducimus
            tempore, quos illum officiis, pariatur ea placeat.
          </p>
        </div>
      </div>

    </div>
  </section>

   {/* Pricing  */}
  <section className="sectionSize bg-secondary py-0">
    <div>
      <h2 className="secondaryTitle bg-underline4 mb-0 bg-100%">Pricing</h2>
    </div>
    <div className="flex w-full flex-col md:flex-row">

      <div className='flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-24'>
        <h3 className="font-pt-serif font-normal text-2xl mb-4">
          The Good
        </h3>
        <div className="font-montserrat font-bold text-2xl mb-4">
          $25
          <span className="font-normal text-base"> / month</span>
        </div>

        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #1</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #2</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #3</p>
        </div>

        <button className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
          Choose plan
        </button>
      </div>

      <div className='flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-12'>
        <h3 className="font-pt-serif font-normal text-2xl mb-4">
          The Bad
        </h3>
        <div className="font-montserrat font-bold text-2xl mb-4">
          $40
          <span className="font-normal text-base"> / month</span>
        </div>

        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #1</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #2</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #3</p>
        </div>

        <button className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
          Choose plan
        </button>
      </div>

      <div className='flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-24'>
        <h3 className="font-pt-serif font-normal text-2xl mb-4">
          The Ugly
        </h3>
        <div className="font-montserrat font-bold text-2xl mb-4">
          $50
          <span className="font-normal text-base"> / month</span>
        </div>

        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #1</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #2</p>
        </div>
        <div className="flex">
          <img src='dist/assets/logos/CheckedBox.svg' alt="" className="mr-1" />
          <p>Benefit #3</p>
        </div>

        <button className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
          Choose plan
        </button>
      </div>

    </div>
  </section>

   {/* FAQ   */}
  <section className="sectionSize items-start pt-8 md:pt-36 bg-black text-white">
    <div>
      <h2 className="secondaryTitle bg-highlight3 p-10 mb-0 bg-center bg-100%">
        FAQ
      </h2>
    </div>

    <div className="w-full py-4">
      <div className="flex justify-between items-center">
        <div className="font-montserrat font-medium mr-auto">
          Where can I get this HTML template?
        </div>
        <img src='dist/assets/logos/CaretRight.svg' alt="" className="transform transition-transform" />
      </div>
      <div className="font-montserrat text-sm font-extralight pb-8 hidden">
        You can download it on Gumroad.com
      </div>
    </div>
    <hr className="w-full bg-white" />

    <div className="w-full py-4">
      <div className="flex justify-between items-center">
        <div className="font-montserrat font-medium mr-auto">
          Is this HTML template free?
        </div>
        <img src='dist/assets/logos/CaretRight.svg' alt="" className="transform transition-transform" />
      </div>
      <div className="font-montserrat text-sm font-extralight pb-8 hidden">
        Yes! For you it is free.
      </div>
    </div>
    <hr className="w-full bg-white" />

    <div className="w-full py-4">
      <div className="flex justify-between items-center">
        <div className="font-montserrat font-medium mr-auto">
          Am I awesome?
        </div>
        <img src='dist/assets/logos/CaretRight.svg' alt="" className="transform transition-transform" />
      </div>
      <div className="font-montserrat text-sm font-extralight pb-8 hidden">
        Yes! No doubt about it.
      </div>
    </div>
    <hr className="w-full bg-white" />

  </section>

  {/* Footer */}
  <section className="bg-black sectionSize">
    <div className="mb-4">
      <img src='dist/assets/Logo_white.svg' alt="Logo" className="h-4" />
    </div>
    <div className="flex mb-8">
      <a href="#">
        <img src='dist/assets/logos/Facebook.svg' alt="Facebook logo" className="mx-4" />
      </a>
      <a href="#">
        <img src='dist/assets/logos/Youtube.svg' alt="Youtube logo" className="mx-4" />
      </a>
      <a href="#">
        <img src='dist/assets/logos/Instagram.svg' alt="Instagram logo" className="mx-4" />
      </a>
      <a href="#">
        <img src='dist/assets/logos/Twitter.svg' alt="Twitter logo" className="mx-4" />
      </a>
    </div>
    <div className="text-white font-montserrat text-sm">
      ?? 2021 STARTUP. All rights reserved
    </div>
  </section>
</body>
    </>
  );
}

export default Index;
