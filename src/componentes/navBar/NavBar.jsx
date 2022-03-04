import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/actions/actionLogin'



const NavBar = () => {
  const dispatch = useDispatch
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log('click en logout');
    dispatch(logout())
    navigate("/login")
  }
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="/registro" to="/registro">Register</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      <button type="button" className='btn btn-danger' onClick={() => handleLogout()}>Logout</button>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar