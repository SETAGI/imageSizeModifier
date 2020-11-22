import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <div className="header__text-box">
        <h1 className="text-header-main">
          <span className="text-header-main--primary">Image Calculator</span>
          <span className="text-header-main--secondary">The best place to calculate the size  your images require</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
