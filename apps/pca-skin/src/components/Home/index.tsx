import React from 'react';

interface Home {
  heroImgUrl: string | undefined;
  Login: JSX.Element;
}

function Home({ heroImgUrl, Login }: Home) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <section className="col-span-1">
        <img src={heroImgUrl} className="h-auto w-full object-cover" />
      </section>
      <section className="col-span-1">{Login}</section>
    </div>
  );
}

export default Home;
