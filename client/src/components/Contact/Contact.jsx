/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const [messageData, setMessageData] = useState({
    name: '', email: '', message: '', status: 'Submit',
  });

  useEffect(() => {
  }, [messageData.status]);

  const handleName = (event) => {
    setMessageData({ ...messageData, name: event.target.value });
  };
  const handleEmail = (event) => {
    setMessageData({ ...messageData, email: event.target.value });
  };
  const handleMessage = (event) => {
    setMessageData({ ...messageData, message: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessageData({ ...messageData, status: 'Sending...' });
    const details = {
      name: messageData.name,
      email: messageData.email,
      message: messageData.message,
    };
    const response = await fetch('https://portfolio-agbwebdeveloper.herokuapp.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setMessageData({ ...messageData, status: 'Submit' });
    setMessageData({
      ...messageData, name: '', email: '', message: '',
    });
    const result = await response.json();
    alert(result.status);
  };

  return (
    <div className="contact-container" id="contact">
      <form onSubmit={handleSubmit} method="POST">

        <div className="text-white text-center py-2">
          <h3>
            <i className="fa fa-envelope" />
            {' '}
            Feel free to contact me!
          </h3>
          <p className="m-0">I&#39;m happy to help and waiting for new challenges.</p>
        </div>

        <div className="card-body p-3">

          <div className="form-group">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text"><i className="fa fa-user text-info" /></div>
              </div>
              <input type="text" className="form-control" id="nombre" name="nombre" placeholder="First &#38; Last Name" onChange={handleName} value={messageData.name} required />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text"><i className="fa fa-envelope text-info" /></div>
              </div>
              <input type="email" className="form-control" id="nombre" name="email" placeholder="example@gmail.com" onChange={handleEmail} value={messageData.email} required />
            </div>
          </div>

          <div className="form-group">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text"><i className="fa fa-comment text-info" /></div>
              </div>
              <textarea className="form-control" placeholder="Your message here" onChange={handleMessage} value={messageData.message} required />
            </div>
          </div>

          <div className="text-center">
            <input type="submit" value={messageData.status} className="btn btn-info btn-block rounded-0 py-2" disabled={messageData.status === 'Sending...'} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
