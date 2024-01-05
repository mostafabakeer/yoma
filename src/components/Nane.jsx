import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/you.png"
import logo1 from "../images/my.jpg"

function Nave() {
  return (
  <div className='   '>
     
      <Navbar expand="lg" className="  text-center bg-slate-400   rounded-lg  ">
        
        <Container className='  '>
          <Navbar.Brand   href="/"> <img src= {logo} className='    w-16 rounded-full' alt="" srcset="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className=' bg-lime-400 hov'  href="/">Home</Nav.Link>
              <Nav.Link className=' bg-lime-400 hov' href="/jop"> jops</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        
        </Container>
        
      </Navbar>
      <div className='   relative m-auto  bottom-6 left-1/4 w-10 '>
            <img src={logo1} className=' absolute w-20 rounded-full' alt="" />
            <NavDropdown    id="basic-nav-dropdown" className=" w-2 float-end h-1 rounded-full  bg-black ">
        
                   <NavDropdown.Item className=' bg-lime-400 hov  ' href="#action/3.1">sign</NavDropdown.Item>
                   <NavDropdown.Item className=' bg-lime-400 hov  ' href="#action/3.3">your job</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.4">
                     singn out
                   </NavDropdown.Item>
     
                </NavDropdown>
          </div>
      
    
  </div>
  );
}

export default Nave;