import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext.jsx';
import LogoText from '../components/LogoText.jsx';

const Footer = () => {
  const data = useContext(DataContext);

  if (!data.footer) return false;

  return (
    <footer id={'footer'} className='footer mt-auto'>
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col-6 text-center text-lg-start'}>
            <LogoText text={'Amelie'} link={'#'} />
          </div>
          <div className={'col-6 text-center text-lg-end'}>
            {data.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
