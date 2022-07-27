import React from 'react';

interface Home {
  heroImgUrl: string | undefined;
  Login: JSX.Element;
  children?: React.ReactChild | React.ReactChild[];
}

function Home({ heroImgUrl, Login }: Home) {
  return (
    <div className="flex  w-full flex-col gap-4 lg:flex-row lg:gap-8">
      <section className="flex w-full justify-center lg:w-1/2">
        <div className="flex grow items-start justify-center">
          <img src={heroImgUrl} className="h-auto w-full object-cover" />
        </div>
      </section>
      <section className="flex w-full justify-center lg:w-1/2">
        <div className="flex grow justify-center">{Login}</div>
      </section>
    </div>
  );
}

export default Home;
