import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.children = props.children;
  }

  render() {
    return (
      <div>
        <section className='contact desktop'>
          <span className='second-title' id='contact-title'>CONTACT</span>
          <form className='contact-form'>
            <input type='text'
              className='contact-field'
              placeholder='Full Name' />
            <input type='text'
              className='contact-field'
              placeholder='Email' />
            <input type='text'
              className='contact-field'
              placeholder='Subject' />
            <textarea
              className='contact-message contact-field'
              placeholder='Your message here...'>
            </textarea>
            <div className='contact-btn btn'>SEND MESSAGE</div>
          </form>
        </section>

        <section className='contact mobile'>
          <span className='second-title' id='contact-title'>CONTACT</span>
          <form className='contact-form-mobile'>
            <input type='text'
              className='contact-field'
              placeholder='Full Name' />
            <input type='text'
              className='contact-field'
              placeholder='Email' />
            <input type='text'
              className='contact-field'
              placeholder='Subject' />
            <textarea
              className='contact-message contact-field'
              placeholder='Your message here...'>
            </textarea>
            <div className='contact-btn btn'>SEND MESSAGE</div>
          </form>
        </section>
      </div>
    );
  }
}

export default Contact;
