import React from 'react';

const Intro1 = () => {
  return (
    <div>
      <section className='intro desktop'>
        <div className='intro-img' id='about-blog-img'></div>
        <div className='intro-meta intro1-meta'>
          <span className='meta-title'>ABOUT THE BLOG</span>
          <p className='meta-body'>
            This blog highlights some of the issues we face in tackling human trafficking in 2017. Trafficking is the second most profitable global crime network, and involves millions of people. It is interweaved with numerous factors: economic, social & much more that cannot be reduced to ‘rescuing’ someone overnight. This blog aims to break down some of these challenges and highlight the complexities of tackling human trafficking.
          </p>
        </div>
      </section>

      <section className='intro-mobile mobile'>
        <div className='intro-img-mobile' id='about-blog-img'></div>
        <div className='intro-meta-mobile intro1-meta'>
          <span className='meta-title'>ABOUT THE BLOG</span>
          <p className='meta-body'>
            This blog highlights some of the issues we face in tackling human trafficking in 2017. Trafficking is the second most profitable global crime network, and involves millions of people. It is interweaved with numerous factors: economic, social & much more that cannot be reduced to ‘rescuing’ someone overnight. This blog aims to break down some of these challenges and highlight the complexities of tackling human trafficking.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Intro1;

// <img
//   className='intro-img'
//   src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1490822588/Screen_Shot_2017-03-29_at_2.10.18_PM_wk8b2c.png" />

// This blog highlights some of the issues we face in tackling human trafficking in 2017. A lot of organisations post about ‘rescuing’ women from brothels, but that only skims the surface of the issue. There are so many issues that come alongside. Trafficking is the second most profitable global crime network, and involves millions of people. It is interweaved with so many factors; economic, social and more that cannot be reduced to ‘rescuing’ someone one night. This blog aims to break down some of these challenges and highlight the complexities of tackling human trafficking.
