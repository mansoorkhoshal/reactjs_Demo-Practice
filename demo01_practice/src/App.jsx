import React from 'react'
import Navbar1 from './Components/Navbar1'
import Footer1 from './Components/Footer1'
import { Row, Col, Button } from 'react-bootstrap'
import Card1 from '../src/Components/Card1st';

const App = () => {
  return (
    <>
      <Navbar1 />
      <Row className='d-flex justify-content-center align-items-center gap-5 mt-5' >
        <Card1 name="FULL STACK WEB COURSE" img='/assets/EVSLogo.png' />
        <Card1 name="C# AND ASP .NET COURSE" img='/assets/EVSLogo.png' />
        <Card1 name='CERTIFIED GRAPHIC DESIGN ' img='/assets/EVSLogo.png' />
      </Row>
      <Footer1 />
    </>
  )
}

export default App
