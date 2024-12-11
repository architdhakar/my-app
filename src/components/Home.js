import React from 'react';
import QueryForm from './QueryForm';
import "../styles.css";

function Home(){
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6'>
          <h2>Welcome to My Query Tracker</h2>
          <p>Track and manage your queries effortlessly.</p>
        </div>
        <div className='col-md-6'>
          <QueryForm />
        </div>
      </div>
    </div>

  );
}

export default Home;