import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Button,secContainer } from '@mantine/core';
import { IconCurrencyDollar,IconInfoCircle,IconRocket,IconBrandGoogleHome}  from '@tabler/icons-react';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (<>
          <Component {...pageProps} /><MyNav/></>)
}
function MyNav() {
  return (
        <Navbar bg="dark" variant='dark' expand="l" fixed='top'>
          <Container>
            <Navbar.Brand style={{marginRight: '65%'}}>Neel Space Industries</Navbar.Brand>
            <Navbar.Brand style={{textAlign: 'right'}}>Expand Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{marginTop:'2%'}}>
                <secContainer>
                  <Nav.Link bg='info' href="/">
                    <Button leftIcon={<IconBrandGoogleHome />} variant="gradient" gradient={{ from: 'pink', to: 'indigo' }}>
                      Home
                    </Button>
                  </Nav.Link>
                </secContainer >
                <secContainer>
                  <Nav.Link href="/Procedure">
                    <Button leftIcon={<IconRocket />} variant="gradient" gradient={{ from: 'indigo', to: 'pink' }}>Procedure</Button>
                  </Nav.Link>
                </secContainer>
                <secContainer>
                  <Nav.Link href="/Cost">
                    <Button leftIcon={<IconCurrencyDollar />} variant="gradient" gradient={{ from: 'pink', to: 'indigo' }}>Equipment and Cost</Button>
                  </Nav.Link> 
                </secContainer>
                <secContainer>
                    <Nav.Link href="/About">
                      <Button leftIcon={<IconInfoCircle />} variant="gradient" gradient={{ from: 'indigo', to: 'pink' }}>About</Button>
                    </Nav.Link>
                </secContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default MyApp
