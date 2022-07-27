import * as React from 'react';
// import PCAlogo from '../../images/pca-logo.svg';

export interface LogoProps {
  imageUrl: string;
}

const Logo = ({ imageUrl }: LogoProps) => {
  return (
    <a href="/" title="Logo">
      <img src={imageUrl} className="h-14 w-36 lg:w-40" alt="logo" />
    </a>
  );
};

export default Logo;
