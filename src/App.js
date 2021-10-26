import React, {  } from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import "./App.css"
import { Navbar, Nav} from 'react-bootstrap'

import {
  Switch,
  Route,
  Link,
} from "react-router-dom"
import Footer from './components/Footer'
import Infobox from './components/Infobox'

const App = () => {

  const padding = {
    padding: 5
  }

  return (
    <div className="container">
      <div className="content_wrapper">
       <div className="left_side">
        <Infobox />
      </div>
      <div className="right_side">
       <Navbar collapseOnSelect expand="xl" bg="" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mr-auto">
           <Nav.Link href="#" as="span">
             <Link style={padding} to="/">About me</Link>
           </Nav.Link>
           <Nav.Link href="#" as="span">
             <Link style={padding} to="/skills">Skillset</Link>
           </Nav.Link>
           <Nav.Link href="#" as="span">
             <Link style={padding} to="/education">Education</Link>
           </Nav.Link>
         </Nav>
        </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/skills">
           <Skills className="skill_page"/>
          </Route>
          <Route path="/education">
           <Education className="education_page" />
          </Route>
          <Route path="/">
           <About className="about_page"/>
          </Route>
        </Switch>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default App