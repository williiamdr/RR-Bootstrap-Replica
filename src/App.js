import React from 'react'
import './App.css';
import Navi from './component/TopBar'
import BackgroundImage from './component/BackgroundImage';
import StoreListing from './component/StoreListing';
import { Form, FormControl } from 'react-bootstrap';

function App() {
  const imageUrl = 'https://img.freepik.com/premium-photo/avocado-halves-avocado-pieces-flying-air_714555-203.jpg?w=900';
  return (
  
  
      <div className="App">
          <BackgroundImage imageUrl={imageUrl}>
        <Navi />
        <main className="d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(40vh - 56px)' }}>
          
          <div id="heroContainer" className="container">
       
            <h1>Order groceries for delivery or pickup today</h1>
            <p>What you want from local stores, brought right to your door.</p>
            <Form inline>
              <FormControl type="text" placeholder="Enter your address" className="mr-sm-2" />
            </Form>
          </div>
          
        </main>
        </BackgroundImage>
    <StoreListing />
      </div>

  );
}

export default App;