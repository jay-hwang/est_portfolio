import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='svg-icons'>
        <a className='svg-icon' target="_blank"
          href="https://twitter.com/estherhope_95" >
            <img className='svg-icon'
              src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1488593719/twitter_vqdkdq.png" />
        </a>

        <a target="_blank" className='svg-icon'
          href="https://www.instagram.com/est_hope/" >
            <img className='svg-icon'
              src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1488592698/insta_yhj6op.png" />
        </a>

        <a target="_blank"  className='svg-icon'
          href="https://www.linkedin.com/in/esther-gibbs-568527134/" >
            <img className='svg-icon' 
              src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1488593719/linkedin_qioq4m.png" />
        </a>
      </div>
      <nav className='footer-nav'>

      </nav>
    </footer>
  );
};

export default Footer;
