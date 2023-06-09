import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="body">
      <div className="style">
        <h1>Hello Friend! Welcome To My Page</h1>
        <p data-testid="paragraph-1">
          We are excited to have you here and provide you with a reliable and
          easy-to-use calculator that can help you with all your mathematical
          needs.
        </p>
        <p>
          Our app is designed to make your life easier by providing you with an
          efficient and accurate tool that can handle all sorts of calculations,
          from simple arithmetic to complex equations.
        </p>
        <p>
          At our core, we believe that math should be accessible and easy for
          everyone. That is why we have designed our calculator app to be
          simple, intuitive, and reliable. We want to make sure that you have
          the tools you need to succeed, whether you are in school, at work, or
          simply need to make quick calculations on the go.
        </p>
      </div>
    </div>
  );
}

export default Home;
