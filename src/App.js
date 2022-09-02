import "./App.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import StylingComponent from "./Tugasreact/StylingComponent/StylingBootstrap";

import React from 'react';


function App() {
  return (
    <div className="App">
      <StylingComponent />

      <React.Fragment>
        <div className='jumbotron' fluid>
          <Container>
            <h1>Kadek Sucipta</h1>
            <p style={{color: "white"}}>
              Candidate Front - End Developers
            </p>
        
            <Button style={{color: "white"}} variant="warning">
              My Profile
            </Button>
          </Container>
        </div>

        <div className="text" id="biography">
          <h3 className="judul">Biography Of Kadek</h3> 
           <p className="p-2">
              Hallo perkenalkan nama saya kadek sucipta.
              Saya adalah FreshGraduaate lulusan Sekolah menengah kejuruan di Lombok, Kota Mataram Nusa Tenggara Barat.
              Saat saya bersekolah di SMK saya mengambil program keahlian Teknik Informatika dengan jurusan Multimedia.
           </p>  
          </div>

          <br/>
          <br/>
          <br/>
              <Container>
              <Row>
                <Col className="title">Hard Skills
                <hr className="line"></hr>
                  <div>
                    <h6>HTML</h6>
                    <h6>CSS</h6>
                    <h6>Figma</h6>
                    <h6>Photoshop</h6>
                  </div>
                </Col>
                <Col className="title">Education
                <hr></hr>
                <div>
                    <h6>SD Negeri 30 Mataram</h6>
                    <h6>SMP Negeri 8 Mataram</h6>
                    <h6>SMK Negeri 3 Mataram</h6>
                  </div>
                </Col >
                <Col className="title">My Hobby
                <hr></hr>
                <div>
                    <h6>Desain Grafis</h6>
                    <h6>Bermain Gitar</h6>
                    <h6>Desain 3D</h6>
                  </div>
                </Col>
                <Col className="title">Soft Skills
                <hr></hr>
                <div>
                    <h6>Good Atitude</h6>
                    <h6>Public Speacking</h6>
                    <h6>Teliti</h6>
                    <h6>Kerja keras</h6>
                  </div>
                </Col>
              </Row>
              </Container>

            <br/>
            <br/>
            <br/>
            <div>
               <u className="mt-5 p-5" id="contact">Contact Me</u>
            </div>  
            <div className="form">
            <div style={{justifyContent: "center"}} className="d-flex">
              <div> 
                <div className="form-group mb-5 p-5 ">
                  <div style={{width: "40px"}}>
                    <label>Email</label>
                  </div>
                  
                  <input
                    style={{width: "30em",
                            justifycontent: "center"}}
                    type="email"
                    className="form-control mt-1"
                    placeholder="input your email"
                  />

                  {/* -- */}

                  <div style={{width: "40px"}}>
                    <label for="exampleFormControlTextarea1" className="form-label mt-3">Message</label>
                  <textarea
                    style=
                    {{height:"250px",
                      width: "30em"}}
                    class="d-flex form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="input your message">
                  </textarea>
                  </div>
                  

                  {/* -- */}

                  <button
                  style={{color: "white",
                          width: "30em"}}
                  type="submit" className="btn btn-warning d-grid mt-3">
                  Send
                  </button>

                </div>
              </div>
            </div>
            </div>
                  
            <div className='p-3 mb-0 mt-5 text-center footer' style={{ backgroundColor: 'black' }}>
            <small className="text-white text-center mt-5 footer">&copy; 2022. Sucipta Creative Team,  All rights reserved.</small>
            </div>
            </React.Fragment>

          </div>
  )
}
export default App