import React from 'react';
import Navigation from '../components/Navigation.jsx';
import LogoText from '../components/LogoText.jsx';

const Header = () => {
  return (
    <header className={'header'}>
      <div className={'container-fluid container-lg'}>
        <div className={'row'}>
          <div className={'col-4 d-flex align-items-center'}>
            <LogoText text={'Amelie'} link={'#'} />
          </div>
          <div className={'col-8 d-flex align-items-center justify-content-end'}>
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
