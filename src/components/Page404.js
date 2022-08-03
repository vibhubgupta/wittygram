import React from 'react';

function Page404(props) {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome to Wittygram </h1>
      <h3 style={{ textAlign: 'center' }}>Login/Sign up to get started! </h3>

      <br />
      <p style={({ paddingLeft: 30 }, { margin: 10 })}>
        If this page keeps popping up, it&apos;s most probably your own fault!{' '}
      </p>
      <p>
        <a href="https://vibhubgupta.github.io/myportfolio/">Contact us here</a>
      </p>
    </div>
  );
}

export default Page404;
