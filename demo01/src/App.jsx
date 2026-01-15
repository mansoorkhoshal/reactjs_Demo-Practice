import React from 'react'
import Navbar1 from './Compoenets/Navbar1'
import Footer from './Compoenets/Footer'
import Card1 from './Compoenets/Card1';

import { Row } from 'react-bootstrap';
const App = () => {
  return (

    <>

      <Navbar1 />
      <div>
        evs lahore
      </div>
      <div>branch no 1</div>
      <Row className='d-flex justify-content-center align-items-center gap-5' >
        <Card1 name="Evs-1" img='/images/car 1.jpg' />
        <Card1 name="evs 2" img='/images/car 2.jpg' />
        <Card1 name='evs 3 ' img='/images/car 3.jpg' />
      </Row>

      <Footer />
    </>


  )
}

export default App
